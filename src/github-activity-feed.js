// Static settings
jQuery.timeago.settings.allowFuture = true;

function author(event) {
  return event.actor;
}

function author_link(event) {
  return link("https://github.com/" + author(event), author(event));
}

function branch(event) {
  return event.payload.ref.replace("refs/heads/", '');
}

function branch_link(event) {
  return link(event.repository.url + "/tree/" + branch(event), branch(event));
}

function build_icon(icon_type) {
  return "<span class='" + icon_type + "'></span>";
}

function fork_link(event) {
  return link(event.repository.html_url, repository(event.repository.html_url));
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
    author_link(event) + " created tag " + tag_link(event) + " at " + repository_link(event),
    time_since(event),
    event.created_at);
}

function gh_parse_ForkEvent(event) {
  return gh_event('octicon octicon-git-branch',
    author_link(event) + " forked " + fork_link(event) + " to " + repository_link(event),
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
    author_link(event) + " pushed to " + branch_link(event) + " at " + repository_link(event),
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

function github_feed_url(username) {
  return "https://github.com/" + username + ".json";
}

function GithubActivityFeed(username) {
  var api_prefix = "https://api.github.com/";
  var self = this;
  self.user = $.Deferred();
  self.events = $.Deferred();

  self.refresh = function() {
    $.ajax({
      url: github_feed_url(username),
      dataType: "jsonp"
    }).done(function(data) {
      self.events.resolve(human_readable(data));
    });

    $.ajax({
      url: api_prefix + "users/andrewhood125",
      dataType: "jsonp",
    }).done(function(data) {
      self.user.resolve(data);
    });
  };

  self.refresh();
}

function link(url, name) {
  return "<a href='" + url + "'>" + name + "</a>";
}

function repository(url) {
  return truncate(url.replace('https://github.com/', ''));
}

function repository_link(event) {
  return link(event.url, repository(event.url));
}

function tag_link(event) {
  return link(event.url, event.payload.ref);
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
