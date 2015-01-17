(function(global) {

  var GITHUB_API_BASE_URL = "https://api.github.com/";
  var GITHUB_BASE_URL = "https://github.com/";

  var GithubActivityFeed = function(username) {
    var self = this;

    self.user = $.Deferred();
    self.events = $.Deferred();

    $.ajax({
      url: GITHUB_API_BASE_URL + "users/" + username + "/events",
      dataType: "jsonp"
    }).done(function(events) {
      self.events.resolve(self.human_readable(events.data));
    }).error(function(data) {
      console.log("Error retrieving events.");
    });

    $.ajax({
      url: GITHUB_API_BASE_URL + "users/" + username,
      dataType: "jsonp",
    }).done(function(data) {
      self.user.resolve(data);
    }).error(function(data) {
      console.log("Error retrieving user.");
    });

    self.author = function(event) {
      return event.actor.login;
    }

    self.author_link = function(event) {
      return self.link(self.github_url(self.author(event)), self.author(event));
    }

    self.build_icon = function(icon_type) {
      return "<span class='" + icon_type + "'></span>";
    }

    self.convert_api_url = function(url) {
      return self.github_url(self.remove_api_url(url));
    }

    self.forkee_link = function(forkee) {
      return self.link(self.github_url(forkee.full_name), forkee.full_name);
    }

    self.gh_event = function(icon, text, timeago, at) {
      return {
        icon: self.build_icon(icon),
        text: text,
        timeago: timeago,
        at: at
      };
    }

    self.gh_parse_CreateEvent = function(event) {
      if (event.payload.ref_type == "repository")
        return self.gh_parse_CreateEvent_repository(event);
      return self.gh_parse_CreateEvent_tag(event);
    }

    self.gh_parse_CreateEvent_repository = function(event) {
      return self.gh_event('octicon octicon-repo',
        self.author_link(event) + " created repository " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_CreateEvent_tag = function(event) {
      return self.gh_event('octicon octicon-tag',
        self.author_link(event) + " created tag " + self.ref_link(event) + " at " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_DeleteEvent = function(event) {
      return self.gh_event('octicon octicon-git-branch-delete',
        self.author_link(event) + " deleted " + self.ref_type(event.payload) + " " + self.ref(event.payload) + " at " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_ForkEvent = function(event) {
      return self.gh_event('octicon octicon-git-branch',
        self.author_link(event) + " forked " + self.repository_link(event) + " to " + forkee_link(event.payload.forkee),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_IssueCommentEvent = function(event) {
      return self.gh_event('mega-octicon octicon-comment-discussion',
        self.author_link(event) + " commened on pull request " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_IssuesEvent = function(event) {
      if (event.payload.action == "opened")
        return self.gh_parse_IssuesEvent_opened(event);
      return self.gh_parse_IssuesEvent_closed(event);
    }

    self.gh_parse_IssuesEvent_opened = function(event) {
      return self.gh_event('mega-octicon octicon-issue-opened',
        self.author_link(event) + " opened issue " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_IssuesEvent_closed = function(event) {
      return self.gh_event('mega-octicon octicon-issue-closed',
        self.author_link(event) + " closed issue " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_PushEvent = function(event) {
      return self.gh_event('mega-octicon octicon-git-commit',
        self.author_link(event) + " pushed to " + self.ref_link(event) + " at " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_PullRequestEvent = function(event) {
      if (self.pull_request_closed(event.payload))
        return self.gh_parse_PullRequestEvent_closed(event);
      return self.gh_event('mega-octicon octicon-git-pull-request',
        self.author_link(event) + action(event.payload) + " pull request " + self.pull_request_link(event.payload.pull_request),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_PullRequestEvent_closed = function(event) {
      var action = " closed ";
      if (event.payload.pull_request.merged)
        action = " merged ";
      return self.gh_event('mega-octicon octicon-git-pull-request',
        self.author_link(event) + action + "pull request " + self.pull_request_link(event.payload.pull_request),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_WatchEvent = function(event) {
      return self.gh_event('octicon octicon-star',
        self.author_link(event) + " starred " + self.repository_link(event),
        self.time_since(event),
        event.created_at);
    }

    self.gh_parse_UnknownEvent = function(event) {
      return self.gh_event('', 'Unknown Event', self.time_since(event), event.created_at);
    }

    self.github_url = function(resource) {
      return GITHUB_BASE_URL + resource;
    }

    self.human_readable = function(data) {
      var events = [];
      for (var i = 0; i < data.length; i++) {
        var fn = self["gh_parse_" + data[i].type];
        if (typeof fn === "function")
          events[i] = fn(data[i]);
        else
          events[i] = self.gh_parse_UnknownEvent(data[i]);
      }
      return events;
    }

    self.link = function(url, name) {
      return "<a href='" + url + "'>" + name + "</a>";
    }

    self.pull_request_closed = function(payload) {
      if (payload.action === "closed")
        return true;
      return false;
    }

    self.pull_request_link = function(pull_request) {
      return self.link(pull_request._links.html.href, pull_request.title);
    }

    self.ref = function(payload) {
      return payload.ref.replace("refs/heads/", '');
    }

    self.ref_link = function(event) {
      return self.link(self.github_url(self.repository(event.repo) + "/tree/" + self.ref(event.payload)), self.ref(event.payload));
    }

    self.ref_type = function(payload) {
      return payload.ref_type;
    }

    self.remove_api_url = function remove_api_url(url) {
      return url.replace(GITHUB_API_BASE_URL, '').replace("repos/", '');;
    }

    self.repository = function(repo) {
      return repo.name;
    }

    self.repository_link = function(event) {
      return self.link(self.convert_api_url(event.repo.url), self.repository(event.repo));
    }

    self.time_since = function(event) {
      return "<span class='timeago'> " + $.timeago(event.created_at) + "</span>";
    }

    self.truncate = function(string) {
      var max_length = 50;
      if (string.length < max_length)
        return string;
      return string.substring(0, 50) + "...";
    }
  }

  global.GithubActivityFeed = GithubActivityFeed;

}(this));
