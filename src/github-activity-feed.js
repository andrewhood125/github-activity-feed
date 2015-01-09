(function(global) {
  var GITHUB_API_BASE_URL = "https://api.github.com/";
  var GITHUB_BASE_URL = "https://github.com/";


  author = function(event) {
    return event.actor.login;
  }

  author_link = function(event) {
    return link(github_url(author(event)), author(event));
  }

  build_icon = function(icon_type) {
    return "<span class='" + icon_type + "'></span>";
  }

  convert_api_url = function(url) {
    return github_url(remove_api_url(url));
  }

  forkee_link = function(forkee) {
    return link(github_url(forkee.full_name), forkee.full_name);
  }

  gh_event = function(icon, text, timeago, at) {
    return {
      icon: build_icon(icon),
      text: text,
      timeago: timeago,
      at: at
    };
  }

  gh_parse_CreateEvent = function(event) {
    if (event.payload.ref_type == "repository")
      return gh_parse_CreateEvent_repository(event);
    return gh_parse_CreateEvent_tag(event);
  }

  gh_parse_CreateEvent_repository = function(event) {
    return gh_event('octicon octicon-repo',
      author_link(event) + " created repository " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_CreateEvent_tag = function(event) {
    return gh_event('octicon octicon-tag',
      author_link(event) + " created tag " + ref_link(event) + " at " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_DeleteEvent = function(event) {
    return gh_event('octicon octicon-git-branch-delete',
      author_link(event) + " deleted " + ref_type(event.payload) + " " + ref(event.payload) + " at " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_ForkEvent = function(event) {
    return gh_event('octicon octicon-git-branch',
      author_link(event) + " forked " + repository_link(event) + " to " + forkee_link(event.payload.forkee),
      time_since(event),
      event.created_at);
  }

  gh_parse_IssueCommentEvent = function(event) {
    return gh_event('mega-octicon octicon-comment-discussion',
      author_link(event) + " commened on pull request " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_IssuesEvent = function(event) {
    if (event.payload.action == "opened")
      return gh_parse_IssuesEvent_opened(event);
    return gh_parse_IssuesEvent_closed(event);
  }

  gh_parse_IssuesEvent_opened = function(event) {
    return gh_event('mega-octicon octicon-issue-opened',
      author_link(event) + " opened issue " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_IssuesEvent_closed = function(event) {
    return gh_event('mega-octicon octicon-issue-closed',
      author_link(event) + " closed issue " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_PushEvent = function(event) {
    return gh_event('mega-octicon octicon-git-commit',
      author_link(event) + " pushed to " + ref_link(event) + " at " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_WatchEvent = function(event) {
    return gh_event('octicon octicon-star',
      author_link(event) + " starred " + repository_link(event),
      time_since(event),
      event.created_at);
  }

  gh_parse_UnknownEvent = function(event) {
    return gh_event('', 'Unknown Event', time_since(event), event.created_at);
  }


  GithubActivityFeed = function(username) {
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

  github_url = function(resource) {
    return GITHUB_BASE_URL + resource;
  }

  human_readable = function(data) {
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

  link = function(url, name) {
    return "<a href='" + url + "'>" + name + "</a>";
  }

  ref = function(payload) {
    return payload.ref.replace("refs/heads/", '');
  }

  ref_link = function(event) {
    return link(github_url(repository(event.repo) + "/tree/" + ref(event.payload)), ref(event.payload));
  }

  ref_type = function(payload) {
    return payload.ref_type;
  }

  remove_api_url = function remove_api_url(url) {
    return url.replace(GITHUB_API_BASE_URL, '').replace("repos/", '');;
  }

  repository = function(repo) {
    return repo.name;
  }

  repository_link = function(event) {
    return link(convert_api_url(event.repo.url), repository(event.repo));
  }

  time_since = function(event) {
    return "<span class='timeago'> " + $.timeago(event.created_at) + "</span>";
  }

  truncate = function(string) {
    var max_length = 50;
    if (string.length < max_length)
      return string;
    return string.substring(0, 50) + "...";
  }


  global.author = author;
  global.author_link = author_link;
  global.build_icon = build_icon;
  global.convert_api_url = convert_api_url;
  global.forkee_link = forkee_link;
  global.gh_event = gh_event;
  global.gh_parse_CreateEvent = gh_parse_CreateEvent;
  global.gh_parse_CreateEvent_repository = gh_parse_CreateEvent_repository;
  global.gh_parse_CreateEvent_tag = gh_parse_CreateEvent_tag;
  global.gh_parse_DeleteEvent = gh_parse_DeleteEvent;
  global.gh_parse_ForkEvent = gh_parse_ForkEvent;
  global.gh_parse_IssueCommentEvent = gh_parse_IssueCommentEvent;
  global.gh_parse_IssuesEvent = gh_parse_IssuesEvent;
  global.gh_parse_IssuesEvent_opened = gh_parse_IssuesEvent_opened;
  global.gh_parse_IssuesEvent_closed = gh_parse_IssuesEvent_closed;
  global.gh_parse_PushEvent = gh_parse_PushEvent;
  global.gh_parse_WatchEvent = gh_parse_WatchEvent;
  global.gh_parse_UnknownEvent = gh_parse_UnknownEvent;
  global.GithubActivityFeed = GithubActivityFeed;
  global.github_url = github_url;
  global.human_readable = human_readable;
  global.link = link;
  global.ref = ref;
  global.ref_link = ref_link;
  global.ref_type = ref_type;
  global.remove_api_url = remove_api_url;
  global.repository = repository;
  global.repository_link = repository_link;
  global.time_since = time_since;
  global.truncate = truncate;


}(this));
