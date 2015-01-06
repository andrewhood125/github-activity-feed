// Static settings
jQuery.timeago.settings.allowFuture = true;
var GITHUB_API_BASE_URL = "https://api.github.com/";
var GITHUB_BASE_URL = "https://github.com/";

function author(event) {
  return event.actor.login;
}

function author_link(event) {
  return link(github_url(author(event)), author(event));
}

function ref(payload) {
  return payload.ref.replace("refs/heads/", '');
}

function ref_link(event) {
  return link(github_url(repository(event.repo) + "/tree/" + ref(event.payload)), ref(event.payload));
}

function build_icon(icon_type) {
  return "<span class='" + icon_type + "'></span>";
}

function convert_api_url(url) {
  return github_url(remove_api_url(url));
}

function forkee_link(forkee) {
  return link(github_url(forkee.full_name), forkee.full_name);
}

function gh_event(icon, text, timeago, at) {
  return {
    icon: build_icon(icon),
    text: text,
    timeago: timeago,
    at: at
  };
}

function gh_parse_CreateEvent(event) {
  if (event.payload.ref_type == "repository")
    return gh_parse_CreateEvent_repository(event);
  return gh_parse_CreateEvent_tag(event);
}

function gh_parse_CreateEvent_repository(event) {
  return gh_event('octicon octicon-repo',
    author_link(event) + " created repository " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_CreateEvent_tag(event) {
  return gh_event('octicon octicon-tag',
    author_link(event) + " created tag " + ref_link(event) + " at " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_DeleteEvent(event) {
  return gh_event('octicon octicon-git-branch-delete',
    author_link(event) + " deleted " + ref_type(event.payload) + " " + ref(event.payload) + " at " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_ForkEvent(event) {
  return gh_event('octicon octicon-git-branch',
    author_link(event) + " forked " + repository_link(event) + " to " + forkee_link(event.payload.forkee),
    time_since(event),
    event.created_at);
}

function gh_parse_IssueCommentEvent(event) {
  return gh_event('mega-octicon octicon-comment-discussion',
    author_link(event) + " commened on pull request " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_IssuesEvent(event) {
  if (event.payload.action == "opened")
    return gh_parse_IssuesEvent_opened(event);
  return gh_parse_IssuesEvent_closed(event);
}

function gh_parse_IssuesEvent_opened(event) {
  return gh_event('mega-octicon octicon-issue-opened',
    author_link(event) + " opened issue " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_IssuesEvent_closed(event) {
  return gh_event('mega-octicon octicon-issue-closed',
    author_link(event) + " closed issue " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_PushEvent(event) {
  return gh_event('mega-octicon octicon-git-commit',
    author_link(event) + " pushed to " + ref_link(event) + " at " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_WatchEvent(event) {
  return gh_event('octicon octicon-star',
    author_link(event) + " starred " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_UnknownEvent(event) {
  return gh_event('', 'Unknown Event', time_since(event), event.created_at);
}


function GithubActivityFeed(username) {
  var self = this;
  self.user = $.Deferred();
  self.events = $.Deferred();

  self.refresh = function() {
    $.ajax({
      url: GITHUB_API_BASE_URL + "users/" + username + "/events",
      dataType: "jsonp"
    }).done(function(events) {
      self.events.resolve(human_readable(events.data));
    }).error(function(data) {
      console.log("Error retrieving events.");
    });

    $.ajax({
      url: GITHUB_API_BASE_URL + "users/andrewhood125",
      dataType: "jsonp",
    }).done(function(data) {
      self.user.resolve(data);
    }).error(function(data) {
      console.log("Error retrieving user.");
    });
  };

  self.refresh();
}

function github_url(resource) {
  return GITHUB_BASE_URL + resource;
}

function human_readable(data) {
  var events = [];

  for (var i = 0; i < data.length; i++) {
    var fn = window["gh_parse_" + data[i].type];
    if (typeof fn === "function")
      events[i] = fn(data[i]);
    else
      events[i] = gh_parse_UnknownEvent(data[i]);
  }

  return events;
}

function link(url, name) {
  return "<a href='" + url + "'>" + name + "</a>";
}

function ref_type(payload) {
  return payload.ref_type;
}

function remove_api_url(url) {
  return url.replace(GITHUB_API_BASE_URL, '').replace("repos/", '');;
}

function repository(repo) {
  return repo.name;
}

function repository_link(event) {
  return link(convert_api_url(event.repo.url), repository(event.repo));
}

function time_since(event) {
  return "<span class='timeago'> " + $.timeago(event.created_at) + "</span>";
}

function truncate(string) {
  var max_length = 50;
  if (string.length < max_length)
    return string;
  return string.substring(0, 50) + "...";
}
