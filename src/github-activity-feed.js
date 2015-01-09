var $ = require('jquery');
// Static settings
var GITHUB_API_BASE_URL = "https://api.github.com/";
var GITHUB_BASE_URL = "https://github.com/";


var author = function(event) {
  return event.actor.login;
}

var author_link = function(event) {
  return link(github_url(author(event)), author(event));
}

var ref = function(payload) {
  return payload.ref.replace("refs/heads/", '');
}

var ref_link = function(event) {
  return link(github_url(repository(event.repo) + "/tree/" + ref(event.payload)), ref(event.payload));
}

var build_icon = function(icon_type) {
  return "<span class='" + icon_type + "'></span>";
}

var convert_api_url = function(url) {
  return github_url(remove_api_url(url));
}

var forkee_link = function(forkee) {
  return link(github_url(forkee.full_name), forkee.full_name);
}

var gh_event = function(icon, text, timeago, at) {
  return {
    icon: build_icon(icon),
    text: text,
    timeago: timeago,
    at: at
  };
}

var gh_parse_CreateEvent = function(event) {
  if (event.payload.ref_type == "repository")
    return gh_parse_CreateEvent_repository(event);
  return gh_parse_CreateEvent_tag(event);
}

var gh_parse_CreateEvent_repository = function(event) {
  return gh_event('octicon octicon-repo',
    author_link(event) + " created repository " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_CreateEvent_tag = function(event) {
  return gh_event('octicon octicon-tag',
    author_link(event) + " created tag " + ref_link(event) + " at " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_DeleteEvent = function(event) {
  return gh_event('octicon octicon-git-branch-delete',
    author_link(event) + " deleted " + ref_type(event.payload) + " " + ref(event.payload) + " at " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_ForkEvent = function(event) {
  return gh_event('octicon octicon-git-branch',
    author_link(event) + " forked " + repository_link(event) + " to " + forkee_link(event.payload.forkee),
    time_since(event),
    event.created_at);
}

var gh_parse_IssueCommentEvent = function(event) {
  return gh_event('mega-octicon octicon-comment-discussion',
    author_link(event) + " commened on pull request " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_IssuesEvent = function(event) {
  if (event.payload.action == "opened")
    return gh_parse_IssuesEvent_opened(event);
  return gh_parse_IssuesEvent_closed(event);
}

var gh_parse_IssuesEvent_opened = function(event) {
  return gh_event('mega-octicon octicon-issue-opened',
    author_link(event) + " opened issue " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_IssuesEvent_closed = function(event) {
  return gh_event('mega-octicon octicon-issue-closed',
    author_link(event) + " closed issue " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_PushEvent = function(event) {
  return gh_event('mega-octicon octicon-git-commit',
    author_link(event) + " pushed to " + ref_link(event) + " at " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_WatchEvent = function(event) {
  return gh_event('octicon octicon-star',
    author_link(event) + " starred " + repository_link(event),
    time_since(event),
    event.created_at);
}

var gh_parse_UnknownEvent = function(event) {
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

var github_url = function(resource) {
  return GITHUB_BASE_URL + resource;
}

var human_readable = function(data) {
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

var link = function(url, name) {
  return "<a href='" + url + "'>" + name + "</a>";
}

var ref_type = function(payload) {
  return payload.ref_type;
}

var remove_api_url = function remove_api_url(url) {
  return url.replace(GITHUB_API_BASE_URL, '').replace("repos/", '');;
}

var repository = function(repo) {
  return repo.name;
}

var repository_link = function(event) {
  return link(convert_api_url(event.repo.url), repository(event.repo));
}

var time_since = function(event) {
  return "<span class='timeago'> " + $.timeago(event.created_at) + "</span>";
}

var truncate = function(string) {
  var max_length = 50;
  if (string.length < max_length)
    return string;
  return string.substring(0, 50) + "...";
}

module.exports = {
  author: author,
  author_link: author_link,
  ref: ref,
  ref_link: ref_link,
  build_icon: build_icon,
  convert_api_url: convert_api_url,
  remove_api_url: remove_api_url,
  forkee_link: forkee_link,
  gh_event: gh_event,
  github_url: github_url,
  link: link,
  ref_type: ref_type,
  repository: repository,
  repository_link: repository_link,
  time_since: time_since,
  truncate: truncate
};
