function author(event) {
  return event.actor;
}

function author_link(event) {
  return link("https://github.com/" + author(event), author(event));
}

function branch(event) {
  return event.payload.ref.substring("refs/heads/", '');
}

function branch_link(event) {
  return link(event.repository.url + "/" + branch(event), branch(event));
}

function build_icon(icon_type) {
  return $("<span/>").addClass(icon_type);
}

function fork_link(event) {
  return event.repository.html_url;
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

function gh_event(icon, text, timeago)
{
  return {
    icon: icon,
    text: text,
    timeago: timeago
  };
}

function gh_parse_CreateEvent(event) {
  return gh_event('octicon octicon-repo',
                  author_link(event) + " created repository " + repository_link(event),
                  time_since(event));
}

function gh_parse_ForkEvent(event) {
  return gh_event('octicon octicon-git-branch',
                  author_link(event) + " forked " + fork_link(event) + " to " + repository_link(event),
                  time_since(event));
}

function gh_parse_IssueCommentEvent(event) {
  return gh_event('mega-octicon octicon-comment-discussion',
                  author_link(event) + " commened on pull request " + repository_link(event),
                  time_since(event));
}

function gh_parse_IssuesEvent(event) {
  if(event.payload.action == "opened")
    return gh_parse_IssuesEvent_opened(event);
  return gh_parse_IssuesEvent_closed(event);
}

function gh_parse_IssuesEvent_opened(event) {
  return gh_event('mega-octicon octicon-issue-opened',
                  author_link(event) + " opened issue " + repository_link(event),
                  time_since(event));
}

function gh_parse_IssuesEvent_closed(event) {
  return gh_event('mega-octicon octicon-issue-closed',
                  author_link(event) + " closed issue " + repository_link(event),
                  time_since(event));
}

function gh_parse_PushEvent(event) {
  return gh_event('mega-octicon octicon-git-commit',
                  author_link(event) + " pushed to " + branch_link(event) + " at " + repository_link(event),
                  time_since(event));
}

function gh_parse_WatchEvent(event) {
  return gh_event('octicon octicon-star',
                      author_link(event) + " starred " + repository_link(event),
                      time_since(event));
}

function gh_parse_UnknownEvent(event) {
  return {
    icon: build_icon(''),
    text: "",
    timeago: time_since(event)
  };
}

function github_feed_url(username) {
  return "https://github.com/" + username + ".json";
}

function GithubActivityFeed(username) {
  var self = this;
  self.username = username;
  self.events = $.Deferred();

  $.ajax({
    url: github_feed_url(username),
    dataType: "jsonp"
  }).done(function(data) {
    self.events.resolve(human_readable(data));
  });
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

function time_since(event) {
  return "<span class='timeago'> " + $.timeago(event.created_at) + "</span>";
}

function truncate(string) {
  var max_length = 50;
  if (string.length < max_length)
    return string;
  return string.substring(0, 50) + "...";
}
