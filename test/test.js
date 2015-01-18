var PullRequestEvent_closed = {
  payload: {
    action: "closed",
    pull_request: {
      title: "Add a Gitter chat badge to README.md",
      _links: {
        html: {
          href: "https://github.com/andrewhood125/github-activity-feed/pull/6"
        }
      }
    }
  },
  created_at: new Date()
};

var CreateEvent_tag = {
  id: 2502208575,
  type: "CreateEvent",
  actor: {
    id: 1624718,
    login: "andrewhood125",
    gravatar_id: "",
    url: "https://api.github.com/users/andrewhood125",
    avatar_url: "https://avatars.githubusercontent.com/u/1624718?"
  },
  repo: {
    id: 28580238,
    name: "andrewhood125/github-activity-feed",
    url: "https://api.github.com/repos/andrewhood125/github-activity-feed"
  },
  payload: {
    ref: "0.1.4",
    ref_type: "tag",
    master_branch: "master",
    description: "Get your GitHub public activity feed in a human readble format",
    pusher_type: "user"
  },
  public: true,
  created_at: "2015-01-09T05:16:47Z"
};
var ForkEvent = {
  id: "2485392581",
  type: "ForkEvent",
  actor: {
    id: 1624718,
    login: "andrewhood125",
    gravatar_id: "",
    url: "https://api.github.com/users/andrewhood125",
    avatar_url: "https://avatars.githubusercontent.com/u/1624718?"
  },
  repo: {
    id: 25402902,
    name: "mem-comp4081-2014fall/common-critic",
    url: "https://api.github.com/repos/mem-comp4081-2014fall/common-critic"
  },
  payload: {
    forkee: {
      id: 28579266,
      name: "common-critic",
      full_name: "andrewhood125/common-critic",
      owner: {
        login: "andrewhood125",
        id: 1624718,
        avatar_url: "https://avatars.githubusercontent.com/u/1624718?v=3",
        gravatar_id: "",
        url: "https://api.github.com/users/andrewhood125",
        html_url: "https://github.com/andrewhood125",
        followers_url: "https://api.github.com/users/andrewhood125/followers",
        following_url: "https://api.github.com/users/andrewhood125/following{/other_user}",
        gists_url: "https://api.github.com/users/andrewhood125/gists{/gist_id}",
        starred_url: "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/andrewhood125/subscriptions",
        organizations_url: "https://api.github.com/users/andrewhood125/orgs",
        repos_url: "https://api.github.com/users/andrewhood125/repos",
        events_url: "https://api.github.com/users/andrewhood125/events{/privacy}",
        received_events_url: "https://api.github.com/users/andrewhood125/received_events",
        type: "User",
        site_admin: false
      },
      private: false,
      html_url: "https://github.com/andrewhood125/common-critic",
      description: "",
      fork: true,
      url: "https://api.github.com/repos/andrewhood125/common-critic",
      forks_url: "https://api.github.com/repos/andrewhood125/common-critic/forks",
      keys_url: "https://api.github.com/repos/andrewhood125/common-critic/keys{/key_id}",
      collaborators_url: "https://api.github.com/repos/andrewhood125/common-critic/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/andrewhood125/common-critic/teams",
      hooks_url: "https://api.github.com/repos/andrewhood125/common-critic/hooks",
      issue_events_url: "https://api.github.com/repos/andrewhood125/common-critic/issues/events{/number}",
      events_url: "https://api.github.com/repos/andrewhood125/common-critic/events",
      assignees_url: "https://api.github.com/repos/andrewhood125/common-critic/assignees{/user}",
      branches_url: "https://api.github.com/repos/andrewhood125/common-critic/branches{/branch}",
      tags_url: "https://api.github.com/repos/andrewhood125/common-critic/tags",
      blobs_url: "https://api.github.com/repos/andrewhood125/common-critic/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/andrewhood125/common-critic/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/andrewhood125/common-critic/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/andrewhood125/common-critic/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/andrewhood125/common-critic/statuses/{sha}",
      languages_url: "https://api.github.com/repos/andrewhood125/common-critic/languages",
      stargazers_url: "https://api.github.com/repos/andrewhood125/common-critic/stargazers",
      contributors_url: "https://api.github.com/repos/andrewhood125/common-critic/contributors",
      subscribers_url: "https://api.github.com/repos/andrewhood125/common-critic/subscribers",
      subscription_url: "https://api.github.com/repos/andrewhood125/common-critic/subscription",
      commits_url: "https://api.github.com/repos/andrewhood125/common-critic/commits{/sha}",
      git_commits_url: "https://api.github.com/repos/andrewhood125/common-critic/git/commits{/sha}",
      comments_url: "https://api.github.com/repos/andrewhood125/common-critic/comments{/number}",
      issue_comment_url: "https://api.github.com/repos/andrewhood125/common-critic/issues/comments/{number}",
      contents_url: "https://api.github.com/repos/andrewhood125/common-critic/contents/{+path}",
      compare_url: "https://api.github.com/repos/andrewhood125/common-critic/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/andrewhood125/common-critic/merges",
      archive_url: "https://api.github.com/repos/andrewhood125/common-critic/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/andrewhood125/common-critic/downloads",
      issues_url: "https://api.github.com/repos/andrewhood125/common-critic/issues{/number}",
      pulls_url: "https://api.github.com/repos/andrewhood125/common-critic/pulls{/number}",
      milestones_url: "https://api.github.com/repos/andrewhood125/common-critic/milestones{/number}",
      notifications_url: "https://api.github.com/repos/andrewhood125/common-critic/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/andrewhood125/common-critic/labels{/name}",
      releases_url: "https://api.github.com/repos/andrewhood125/common-critic/releases{/id}",
      created_at: "2014-12-29T03:40:52Z",
      updated_at: "2014-12-11T21:04:52Z",
      pushed_at: "2014-12-11T19:18:17Z",
      git_url: "git://github.com/andrewhood125/common-critic.git",
      ssh_url: "git@github.com:andrewhood125/common-critic.git",
      clone_url: "https://github.com/andrewhood125/common-critic.git",
      svn_url: "https://github.com/andrewhood125/common-critic",
      homepage: null,
      size: 1302,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      open_issues_count: 0,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
      public: true
    }
  },
  public: true,
  created_at: "2014-12-29T03:40:52Z",
  org: {
    id: 7825611,
    login: "mem-comp4081-2014fall",
    gravatar_id: "",
    url: "https://api.github.com/orgs/mem-comp4081-2014fall",
    avatar_url: "https://avatars.githubusercontent.com/u/7825611?"
  }
};

var IssueCommentEvent = {
  "id": "2519627422",
  "type": "IssueCommentEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 11777372,
    "name": "ModelN/grunt-blanket-mocha",
    "url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha"
  },
  "payload": {
    "action": "created",
    "issue": {
      "url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha/issues/14",
      "labels_url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha/issues/14/labels{/name}",
      "comments_url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha/issues/14/comments",
      "events_url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha/issues/14/events",
      "html_url": "https://github.com/ModelN/grunt-blanket-mocha/issues/14",
      "id": 26637365,
      "number": 14,
      "title": "Support File Output of Coverage Results",
      "user": {
        "login": "billmag",
        "id": 909245,
        "avatar_url": "https://avatars.githubusercontent.com/u/909245?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/billmag",
        "html_url": "https://github.com/billmag",
        "followers_url": "https://api.github.com/users/billmag/followers",
        "following_url": "https://api.github.com/users/billmag/following{/other_user}",
        "gists_url": "https://api.github.com/users/billmag/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/billmag/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/billmag/subscriptions",
        "organizations_url": "https://api.github.com/users/billmag/orgs",
        "repos_url": "https://api.github.com/users/billmag/repos",
        "events_url": "https://api.github.com/users/billmag/events{/privacy}",
        "received_events_url": "https://api.github.com/users/billmag/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [{
        "url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha/labels/enhancement",
        "name": "enhancement",
        "color": "84b6eb"
      }],
      "state": "open",
      "locked": false,
      "assignee": null,
      "milestone": null,
      "comments": 9,
      "created_at": "2014-01-30T21:45:09Z",
      "updated_at": "2015-01-18T04:21:38Z",
      "closed_at": null,
      "body": "As a next step to incorporating grunt-blanket-mocha into my build, I'd like to be able to easily output the coverage results into a file in a format that's somehow digestible by Jenkins. There are a number of options out there and I'm personally not very informed on the landscape of reporting options, but this would be pretty fantastic functionality to add."
    },
    "comment": {
      "url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha/issues/comments/70396016",
      "html_url": "https://github.com/ModelN/grunt-blanket-mocha/issues/14#issuecomment-70396016",
      "issue_url": "https://api.github.com/repos/ModelN/grunt-blanket-mocha/issues/14",
      "id": 70396016,
      "user": {
        "login": "andrewhood125",
        "id": 1624718,
        "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/andrewhood125",
        "html_url": "https://github.com/andrewhood125",
        "followers_url": "https://api.github.com/users/andrewhood125/followers",
        "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
        "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
        "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
        "repos_url": "https://api.github.com/users/andrewhood125/repos",
        "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
        "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
        "type": "User",
        "site_admin": false
      },
      "created_at": "2015-01-18T04:21:38Z",
      "updated_at": "2015-01-18T04:21:38Z",
      "body": ":+1: "
    }
  },
  "public": true,
  "created_at": "2015-01-18T04:21:38Z",
  "org": {
    "id": 1382842,
    "login": "ModelN",
    "gravatar_id": "",
    "url": "https://api.github.com/orgs/ModelN",
    "avatar_url": "https://avatars.githubusercontent.com/u/1382842?"
  }
};

var PushEvent = {
  "id": "2519359882",
  "type": "PushEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 28580238,
    "name": "andrewhood125/github-activity-feed",
    "url": "https://api.github.com/repos/andrewhood125/github-activity-feed"
  },
  "payload": {
    "push_id": 549128076,
    "size": 1,
    "distinct_size": 1,
    "ref": "refs/heads/master",
    "head": "314c6538d452f609bececc9169683c2b44c19d80",
    "before": "7c814d7e6c3c475ded5ce1862d1fc51c9dac570b",
    "commits": [{
      "sha": "314c6538d452f609bececc9169683c2b44c19d80",
      "author": {
        "email": "andrewhood125@gmail.com",
        "name": "Andrew Hood"
      },
      "message": "Release 0.1.7",
      "distinct": true,
      "url": "https://api.github.com/repos/andrewhood125/github-activity-feed/commits/314c6538d452f609bececc9169683c2b44c19d80"
    }]
  },
  "public": true,
  "created_at": "2015-01-17T20:18:13Z"
};

var IssuesEvent_opened = {
  "id": "2519350590",
  "type": "IssuesEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 5614368,
    "name": "metaskills/mocha-phantomjs",
    "url": "https://api.github.com/repos/metaskills/mocha-phantomjs"
  },
  "payload": {
    "action": "opened",
    "issue": {
      "url": "https://api.github.com/repos/metaskills/mocha-phantomjs/issues/172",
      "labels_url": "https://api.github.com/repos/metaskills/mocha-phantomjs/issues/172/labels{/name}",
      "comments_url": "https://api.github.com/repos/metaskills/mocha-phantomjs/issues/172/comments",
      "events_url": "https://api.github.com/repos/metaskills/mocha-phantomjs/issues/172/events",
      "html_url": "https://github.com/metaskills/mocha-phantomjs/issues/172",
      "id": 54673310,
      "number": 172,
      "title": "Add documentation for coverage",
      "user": {
        "login": "andrewhood125",
        "id": 1624718,
        "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/andrewhood125",
        "html_url": "https://github.com/andrewhood125",
        "followers_url": "https://api.github.com/users/andrewhood125/followers",
        "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
        "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
        "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
        "repos_url": "https://api.github.com/users/andrewhood125/repos",
        "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
        "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [],
      "state": "open",
      "locked": false,
      "assignee": null,
      "milestone": null,
      "comments": 0,
      "created_at": "2015-01-17T20:04:24Z",
      "updated_at": "2015-01-17T20:04:24Z",
      "closed_at": null,
      "body": "Awesome package! I've been in Javascript testing hell for the past week or so. Long story short I wrote my first javascript package and I'm trying to get it hooked into Travis and Coveralls. I was able to use Mocha from the cli but I couldn't cover anything that used jQuery in my code. If I went to a browser based solution I couldn't run from the cli. \r\n\r\nEnter mocha-phantomjs. It's exactly what I needed. I'm having trouble figuring out how I can hook into blanket or Istanbul though to produce coverage info for coveralls. I'd like to lend a hand and help out here. I'm going to dig in and try and figure out how to incorporate them but I'd appreciate any advice if someone has already solved this problem. "
    }
  },
  "public": true,
  "created_at": "2015-01-17T20:04:25Z"
};

var WatchEvent = {
  "id": "2518872912",
  "type": "WatchEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 5614368,
    "name": "metaskills/mocha-phantomjs",
    "url": "https://api.github.com/repos/metaskills/mocha-phantomjs"
  },
  "payload": {
    "action": "started"
  },
  "public": true,
  "created_at": "2015-01-17T05:38:07Z"
};

var CreateEvent_repository = {
  "id": "2511341838",
  "type": "CreateEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 29230414,
    "name": "andrewhood125/happy-new-year",
    "url": "https://api.github.com/repos/andrewhood125/happy-new-year"
  },
  "payload": {
    "ref": null,
    "ref_type": "repository",
    "master_branch": "master",
    "description": "",
    "pusher_type": "user"
  },
  "public": true,
  "created_at": "2015-01-14T06:20:35Z"
};

var IssuesEvent_closed = {
  "id": "2504860717",
  "type": "IssuesEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 13914256,
    "name": "andrewhood125/andrewhood125.github.io",
    "url": "https://api.github.com/repos/andrewhood125/andrewhood125.github.io"
  },
  "payload": {
    "action": "closed",
    "issue": {
      "url": "https://api.github.com/repos/andrewhood125/andrewhood125.github.io/issues/4",
      "labels_url": "https://api.github.com/repos/andrewhood125/andrewhood125.github.io/issues/4/labels{/name}",
      "comments_url": "https://api.github.com/repos/andrewhood125/andrewhood125.github.io/issues/4/comments",
      "events_url": "https://api.github.com/repos/andrewhood125/andrewhood125.github.io/issues/4/events",
      "html_url": "https://github.com/andrewhood125/andrewhood125.github.io/issues/4",
      "id": 53473275,
      "number": 4,
      "title": "Icons uniform width so all left justified text is in a single column",
      "user": {
        "login": "andrewhood125",
        "id": 1624718,
        "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/andrewhood125",
        "html_url": "https://github.com/andrewhood125",
        "followers_url": "https://api.github.com/users/andrewhood125/followers",
        "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
        "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
        "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
        "repos_url": "https://api.github.com/users/andrewhood125/repos",
        "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
        "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "milestone": null,
      "comments": 1,
      "created_at": "2015-01-06T02:19:00Z",
      "updated_at": "2015-01-10T19:12:00Z",
      "closed_at": "2015-01-10T19:12:00Z",
      "body": ""
    }
  },
  "public": true,
  "created_at": "2015-01-10T19:12:01Z"
};

var DeleteEvent = {
  "id": "2520093038",
  "type": "DeleteEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 28580238,
    "name": "andrewhood125/github-activity-feed",
    "url": "https://api.github.com/repos/andrewhood125/github-activity-feed"
  },
  "payload": {
    "ref": "topic/requirejs",
    "ref_type": "branch",
    "pusher_type": "user"
  },
  "public": true,
  "created_at": "2015-01-18T18:59:50Z"
};

var PullRequestEvent_merged = {
  "id": "2520092210",
  "type": "PullRequestEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 28580238,
    "name": "andrewhood125/github-activity-feed",
    "url": "https://api.github.com/repos/andrewhood125/github-activity-feed"
  },
  "payload": {
    "action": "closed",
    "number": 8,
    "pull_request": {
      "url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8",
      "id": 27575165,
      "html_url": "https://github.com/andrewhood125/github-activity-feed/pull/8",
      "diff_url": "https://github.com/andrewhood125/github-activity-feed/pull/8.diff",
      "patch_url": "https://github.com/andrewhood125/github-activity-feed/pull/8.patch",
      "issue_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8",
      "number": 8,
      "state": "closed",
      "locked": false,
      "title": "More docs for the README.md",
      "user": {
        "login": "andrewhood125",
        "id": 1624718,
        "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/andrewhood125",
        "html_url": "https://github.com/andrewhood125",
        "followers_url": "https://api.github.com/users/andrewhood125/followers",
        "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
        "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
        "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
        "repos_url": "https://api.github.com/users/andrewhood125/repos",
        "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
        "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
        "type": "User",
        "site_admin": false
      },
      "body": "",
      "created_at": "2015-01-18T18:56:57Z",
      "updated_at": "2015-01-18T18:58:43Z",
      "closed_at": "2015-01-18T18:58:43Z",
      "merged_at": "2015-01-18T18:58:43Z",
      "merge_commit_sha": "423f4f2492ec2bb082394b1aa9935158138fda66",
      "assignee": null,
      "milestone": null,
      "commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/commits",
      "review_comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/comments",
      "review_comment_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/comments/{number}",
      "comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8/comments",
      "statuses_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/60eea083c70a5646fe7eef5e3d155669aa69cedd",
      "head": {
        "label": "andrewhood125:1.0.0",
        "ref": "1.0.0",
        "sha": "60eea083c70a5646fe7eef5e3d155669aa69cedd",
        "user": {
          "login": "andrewhood125",
          "id": 1624718,
          "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/andrewhood125",
          "html_url": "https://github.com/andrewhood125",
          "followers_url": "https://api.github.com/users/andrewhood125/followers",
          "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
          "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
          "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
          "repos_url": "https://api.github.com/users/andrewhood125/repos",
          "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
          "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
          "type": "User",
          "site_admin": false
        },
        "repo": {
          "id": 28580238,
          "name": "github-activity-feed",
          "full_name": "andrewhood125/github-activity-feed",
          "owner": {
            "login": "andrewhood125",
            "id": 1624718,
            "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/andrewhood125",
            "html_url": "https://github.com/andrewhood125",
            "followers_url": "https://api.github.com/users/andrewhood125/followers",
            "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
            "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
            "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
            "repos_url": "https://api.github.com/users/andrewhood125/repos",
            "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
            "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
            "type": "User",
            "site_admin": false
          },
          "private": false,
          "html_url": "https://github.com/andrewhood125/github-activity-feed",
          "description": "Get your GitHub public activity feed in a human readable format",
          "fork": false,
          "url": "https://api.github.com/repos/andrewhood125/github-activity-feed",
          "forks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/forks",
          "keys_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/teams",
          "hooks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/hooks",
          "issue_events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/events{/number}",
          "events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/events",
          "assignees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/assignees{/user}",
          "branches_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/branches{/branch}",
          "tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/tags",
          "blobs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/languages",
          "stargazers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/stargazers",
          "contributors_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contributors",
          "subscribers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscribers",
          "subscription_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscription",
          "commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contents/{+path}",
          "compare_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/merges",
          "archive_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/downloads",
          "issues_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues{/number}",
          "pulls_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/labels{/name}",
          "releases_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/releases{/id}",
          "created_at": "2014-12-29T04:28:30Z",
          "updated_at": "2015-01-18T18:27:42Z",
          "pushed_at": "2015-01-18T18:58:43Z",
          "git_url": "git://github.com/andrewhood125/github-activity-feed.git",
          "ssh_url": "git@github.com:andrewhood125/github-activity-feed.git",
          "clone_url": "https://github.com/andrewhood125/github-activity-feed.git",
          "svn_url": "https://github.com/andrewhood125/github-activity-feed",
          "homepage": "https://andrew-hood.com",
          "size": 260,
          "stargazers_count": 1,
          "watchers_count": 1,
          "language": "JavaScript",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 1,
          "mirror_url": null,
          "open_issues_count": 2,
          "forks": 1,
          "open_issues": 2,
          "watchers": 1,
          "default_branch": "master"
        }
      },
      "base": {
        "label": "andrewhood125:master",
        "ref": "master",
        "sha": "ff6a7bdad5dd5e57aacf49a4fe0e3f43325aafdf",
        "user": {
          "login": "andrewhood125",
          "id": 1624718,
          "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/andrewhood125",
          "html_url": "https://github.com/andrewhood125",
          "followers_url": "https://api.github.com/users/andrewhood125/followers",
          "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
          "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
          "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
          "repos_url": "https://api.github.com/users/andrewhood125/repos",
          "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
          "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
          "type": "User",
          "site_admin": false
        },
        "repo": {
          "id": 28580238,
          "name": "github-activity-feed",
          "full_name": "andrewhood125/github-activity-feed",
          "owner": {
            "login": "andrewhood125",
            "id": 1624718,
            "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/andrewhood125",
            "html_url": "https://github.com/andrewhood125",
            "followers_url": "https://api.github.com/users/andrewhood125/followers",
            "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
            "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
            "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
            "repos_url": "https://api.github.com/users/andrewhood125/repos",
            "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
            "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
            "type": "User",
            "site_admin": false
          },
          "private": false,
          "html_url": "https://github.com/andrewhood125/github-activity-feed",
          "description": "Get your GitHub public activity feed in a human readable format",
          "fork": false,
          "url": "https://api.github.com/repos/andrewhood125/github-activity-feed",
          "forks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/forks",
          "keys_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/teams",
          "hooks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/hooks",
          "issue_events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/events{/number}",
          "events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/events",
          "assignees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/assignees{/user}",
          "branches_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/branches{/branch}",
          "tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/tags",
          "blobs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/languages",
          "stargazers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/stargazers",
          "contributors_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contributors",
          "subscribers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscribers",
          "subscription_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscription",
          "commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contents/{+path}",
          "compare_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/merges",
          "archive_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/downloads",
          "issues_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues{/number}",
          "pulls_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/labels{/name}",
          "releases_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/releases{/id}",
          "created_at": "2014-12-29T04:28:30Z",
          "updated_at": "2015-01-18T18:27:42Z",
          "pushed_at": "2015-01-18T18:58:43Z",
          "git_url": "git://github.com/andrewhood125/github-activity-feed.git",
          "ssh_url": "git@github.com:andrewhood125/github-activity-feed.git",
          "clone_url": "https://github.com/andrewhood125/github-activity-feed.git",
          "svn_url": "https://github.com/andrewhood125/github-activity-feed",
          "homepage": "https://andrew-hood.com",
          "size": 260,
          "stargazers_count": 1,
          "watchers_count": 1,
          "language": "JavaScript",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 1,
          "mirror_url": null,
          "open_issues_count": 2,
          "forks": 1,
          "open_issues": 2,
          "watchers": 1,
          "default_branch": "master"
        }
      },
      "_links": {
        "self": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8"
        },
        "html": {
          "href": "https://github.com/andrewhood125/github-activity-feed/pull/8"
        },
        "issue": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8"
        },
        "comments": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8/comments"
        },
        "review_comments": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/comments"
        },
        "review_comment": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/comments/{number}"
        },
        "commits": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/commits"
        },
        "statuses": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/60eea083c70a5646fe7eef5e3d155669aa69cedd"
        }
      },
      "merged": true,
      "mergeable": null,
      "mergeable_state": "unknown",
      "merged_by": {
        "login": "andrewhood125",
        "id": 1624718,
        "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/andrewhood125",
        "html_url": "https://github.com/andrewhood125",
        "followers_url": "https://api.github.com/users/andrewhood125/followers",
        "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
        "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
        "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
        "repos_url": "https://api.github.com/users/andrewhood125/repos",
        "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
        "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
        "type": "User",
        "site_admin": false
      },
      "comments": 0,
      "review_comments": 0,
      "commits": 1,
      "additions": 54,
      "deletions": 11,
      "changed_files": 1
    }
  },
  "public": true,
  "created_at": "2015-01-18T18:58:44Z"
};

var PullRequestEvent_opened = {
  "id": "2520090857",
  "type": "PullRequestEvent",
  "actor": {
    "id": 1624718,
    "login": "andrewhood125",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andrewhood125",
    "avatar_url": "https://avatars.githubusercontent.com/u/1624718?"
  },
  "repo": {
    "id": 28580238,
    "name": "andrewhood125/github-activity-feed",
    "url": "https://api.github.com/repos/andrewhood125/github-activity-feed"
  },
  "payload": {
    "action": "opened",
    "number": 8,
    "pull_request": {
      "url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8",
      "id": 27575165,
      "html_url": "https://github.com/andrewhood125/github-activity-feed/pull/8",
      "diff_url": "https://github.com/andrewhood125/github-activity-feed/pull/8.diff",
      "patch_url": "https://github.com/andrewhood125/github-activity-feed/pull/8.patch",
      "issue_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8",
      "number": 8,
      "state": "open",
      "locked": false,
      "title": "More docs for the README.md",
      "user": {
        "login": "andrewhood125",
        "id": 1624718,
        "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/andrewhood125",
        "html_url": "https://github.com/andrewhood125",
        "followers_url": "https://api.github.com/users/andrewhood125/followers",
        "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
        "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
        "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
        "repos_url": "https://api.github.com/users/andrewhood125/repos",
        "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
        "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
        "type": "User",
        "site_admin": false
      },
      "body": "",
      "created_at": "2015-01-18T18:56:57Z",
      "updated_at": "2015-01-18T18:56:57Z",
      "closed_at": null,
      "merged_at": null,
      "merge_commit_sha": null,
      "assignee": null,
      "milestone": null,
      "commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/commits",
      "review_comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/comments",
      "review_comment_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/comments/{number}",
      "comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8/comments",
      "statuses_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/60eea083c70a5646fe7eef5e3d155669aa69cedd",
      "head": {
        "label": "andrewhood125:1.0.0",
        "ref": "1.0.0",
        "sha": "60eea083c70a5646fe7eef5e3d155669aa69cedd",
        "user": {
          "login": "andrewhood125",
          "id": 1624718,
          "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/andrewhood125",
          "html_url": "https://github.com/andrewhood125",
          "followers_url": "https://api.github.com/users/andrewhood125/followers",
          "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
          "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
          "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
          "repos_url": "https://api.github.com/users/andrewhood125/repos",
          "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
          "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
          "type": "User",
          "site_admin": false
        },
        "repo": {
          "id": 28580238,
          "name": "github-activity-feed",
          "full_name": "andrewhood125/github-activity-feed",
          "owner": {
            "login": "andrewhood125",
            "id": 1624718,
            "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/andrewhood125",
            "html_url": "https://github.com/andrewhood125",
            "followers_url": "https://api.github.com/users/andrewhood125/followers",
            "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
            "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
            "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
            "repos_url": "https://api.github.com/users/andrewhood125/repos",
            "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
            "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
            "type": "User",
            "site_admin": false
          },
          "private": false,
          "html_url": "https://github.com/andrewhood125/github-activity-feed",
          "description": "Get your GitHub public activity feed in a human readable format",
          "fork": false,
          "url": "https://api.github.com/repos/andrewhood125/github-activity-feed",
          "forks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/forks",
          "keys_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/teams",
          "hooks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/hooks",
          "issue_events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/events{/number}",
          "events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/events",
          "assignees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/assignees{/user}",
          "branches_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/branches{/branch}",
          "tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/tags",
          "blobs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/languages",
          "stargazers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/stargazers",
          "contributors_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contributors",
          "subscribers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscribers",
          "subscription_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscription",
          "commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contents/{+path}",
          "compare_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/merges",
          "archive_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/downloads",
          "issues_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues{/number}",
          "pulls_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/labels{/name}",
          "releases_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/releases{/id}",
          "created_at": "2014-12-29T04:28:30Z",
          "updated_at": "2015-01-18T18:27:42Z",
          "pushed_at": "2015-01-18T18:56:40Z",
          "git_url": "git://github.com/andrewhood125/github-activity-feed.git",
          "ssh_url": "git@github.com:andrewhood125/github-activity-feed.git",
          "clone_url": "https://github.com/andrewhood125/github-activity-feed.git",
          "svn_url": "https://github.com/andrewhood125/github-activity-feed",
          "homepage": "https://andrew-hood.com",
          "size": 260,
          "stargazers_count": 1,
          "watchers_count": 1,
          "language": "JavaScript",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 1,
          "mirror_url": null,
          "open_issues_count": 3,
          "forks": 1,
          "open_issues": 3,
          "watchers": 1,
          "default_branch": "master"
        }
      },
      "base": {
        "label": "andrewhood125:master",
        "ref": "master",
        "sha": "ff6a7bdad5dd5e57aacf49a4fe0e3f43325aafdf",
        "user": {
          "login": "andrewhood125",
          "id": 1624718,
          "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/andrewhood125",
          "html_url": "https://github.com/andrewhood125",
          "followers_url": "https://api.github.com/users/andrewhood125/followers",
          "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
          "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
          "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
          "repos_url": "https://api.github.com/users/andrewhood125/repos",
          "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
          "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
          "type": "User",
          "site_admin": false
        },
        "repo": {
          "id": 28580238,
          "name": "github-activity-feed",
          "full_name": "andrewhood125/github-activity-feed",
          "owner": {
            "login": "andrewhood125",
            "id": 1624718,
            "avatar_url": "https://avatars.githubusercontent.com/u/1624718?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/andrewhood125",
            "html_url": "https://github.com/andrewhood125",
            "followers_url": "https://api.github.com/users/andrewhood125/followers",
            "following_url": "https://api.github.com/users/andrewhood125/following{/other_user}",
            "gists_url": "https://api.github.com/users/andrewhood125/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/andrewhood125/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/andrewhood125/subscriptions",
            "organizations_url": "https://api.github.com/users/andrewhood125/orgs",
            "repos_url": "https://api.github.com/users/andrewhood125/repos",
            "events_url": "https://api.github.com/users/andrewhood125/events{/privacy}",
            "received_events_url": "https://api.github.com/users/andrewhood125/received_events",
            "type": "User",
            "site_admin": false
          },
          "private": false,
          "html_url": "https://github.com/andrewhood125/github-activity-feed",
          "description": "Get your GitHub public activity feed in a human readable format",
          "fork": false,
          "url": "https://api.github.com/repos/andrewhood125/github-activity-feed",
          "forks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/forks",
          "keys_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/teams",
          "hooks_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/hooks",
          "issue_events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/events{/number}",
          "events_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/events",
          "assignees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/assignees{/user}",
          "branches_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/branches{/branch}",
          "tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/tags",
          "blobs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/languages",
          "stargazers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/stargazers",
          "contributors_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contributors",
          "subscribers_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscribers",
          "subscription_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/subscription",
          "commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/contents/{+path}",
          "compare_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/merges",
          "archive_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/downloads",
          "issues_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues{/number}",
          "pulls_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/labels{/name}",
          "releases_url": "https://api.github.com/repos/andrewhood125/github-activity-feed/releases{/id}",
          "created_at": "2014-12-29T04:28:30Z",
          "updated_at": "2015-01-18T18:27:42Z",
          "pushed_at": "2015-01-18T18:56:40Z",
          "git_url": "git://github.com/andrewhood125/github-activity-feed.git",
          "ssh_url": "git@github.com:andrewhood125/github-activity-feed.git",
          "clone_url": "https://github.com/andrewhood125/github-activity-feed.git",
          "svn_url": "https://github.com/andrewhood125/github-activity-feed",
          "homepage": "https://andrew-hood.com",
          "size": 260,
          "stargazers_count": 1,
          "watchers_count": 1,
          "language": "JavaScript",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 1,
          "mirror_url": null,
          "open_issues_count": 3,
          "forks": 1,
          "open_issues": 3,
          "watchers": 1,
          "default_branch": "master"
        }
      },
      "_links": {
        "self": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8"
        },
        "html": {
          "href": "https://github.com/andrewhood125/github-activity-feed/pull/8"
        },
        "issue": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8"
        },
        "comments": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/issues/8/comments"
        },
        "review_comments": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/comments"
        },
        "review_comment": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/comments/{number}"
        },
        "commits": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/pulls/8/commits"
        },
        "statuses": {
          "href": "https://api.github.com/repos/andrewhood125/github-activity-feed/statuses/60eea083c70a5646fe7eef5e3d155669aa69cedd"
        }
      },
      "merged": false,
      "mergeable": null,
      "mergeable_state": "unknown",
      "merged_by": null,
      "comments": 0,
      "review_comments": 0,
      "commits": 1,
      "additions": 54,
      "deletions": 11,
      "changed_files": 1
    }
  },
  "public": true,
  "created_at": "2015-01-18T18:56:57Z"
};


var data = [
  PullRequestEvent_closed,
  CreateEvent_tag,
  ForkEvent,
  IssueCommentEvent,
  PushEvent,
  IssuesEvent_opened,
  WatchEvent,
  CreateEvent_repository,
  IssuesEvent_closed,
  DeleteEvent,
  PullRequestEvent_merged,
  PullRequestEvent_opened
];


var RateLimitNotExceeded = {
  meta: {
    'X-GitHub-Media-Type': "github.v3",
    'X-RateLimit-Limit': "60",
    'X-RateLimit-Remaining': "59",
    'X-RateLimit-Reset': "1421612542",
    status: 403
  },
  data: {
    documentation_url: "https://developer.github.com/v3/#rate-limiting",
    message: "API rate limit exceeded for 108.71.151.98. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
  }
};


var RateLimitExceeded = {
  meta: {
    'X-GitHub-Media-Type': "github.v3",
    'X-RateLimit-Limit': "60",
    'X-RateLimit-Remaining': "0",
    'X-RateLimit-Reset': "1421612542",
    status: 403
  },
  data: {
    documentation_url: "https://developer.github.com/v3/#rate-limiting",
    message: "API rate limit exceeded for 108.71.151.98. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
  }
};

describe('GitHub Activity Feed', function() {


  describe('#action()', function() {
    it('should return the string action of the event', function() {
      assert.equal("closed", new GithubActivityFeed("andrewhood125").action(PullRequestEvent_closed.payload));
    });
  });

  describe('#author()', function() {
    it('should return andrewhood125', function() {
      assert.equal("andrewhood125", new GithubActivityFeed("andrewhood125").author(CreateEvent_tag));
    })
  });

  describe('#author_link()', function() {
    it('should return link to username', function() {
      assert.equal("<a href='https://github.com/andrewhood125'>andrewhood125</a>", new GithubActivityFeed("andrewhood125").author_link(CreateEvent_tag));
    })
  });

  describe('#build_icon()', function() {
    it('should return html for octicon', function() {
      assert.equal("<span class='mega-octicon octicon-git-commit'></span>", new GithubActivityFeed("andrewhood125").build_icon('mega-octicon octicon-git-commit'));
    });
  });

  describe('#convert_api_url()', function() {
    it('should return a github url with no subdomain', function() {
      assert.equal('https://github.com/', new GithubActivityFeed("andrewhood125").convert_api_url('https://api.github.com/'));
    });
  });

  describe('#forkee_link()', function() {
    it('should return link to fork', function() {
      assert.equal("<a href='https://github.com/andrewhood125/common-critic'>andrewhood125/common-critic</a>", new GithubActivityFeed("andrewhood125").forkee_link(ForkEvent.payload.forkee));
    });
  });

  describe('#gh_event()', function() {
    it('should return a single event object', function() {
      var e = new GithubActivityFeed("andrewhood125").gh_event('commit', 'star', '5 days', '12pm');
      assert.equal("<span class='commit'></span>", e.icon);
      assert.equal('star', e.text);
      assert.equal('5 days', e.timeago);
      assert.equal('12pm', e.at);
    });
  });

  describe('#github_url()', function() {
    it('should return a github url for a resource', function() {
      assert.equal('https://github.com/andrewhood125', new GithubActivityFeed("andrewhood125").github_url('andrewhood125'));
    });
  });

  describe('#human_readable()', function() {
    it('should return an array of events', function() {
      assert.equal(data.length, new GithubActivityFeed("andrewhood125").human_readable(data).length);
    });
  });

  describe('#link()', function() {
    it('should return html link for url and name', function() {
      assert.equal("<a href='andrew-hood.com'>Andrew Hood</a>", new GithubActivityFeed("andrewhood125").link('andrew-hood.com', 'Andrew Hood'));
    });
  });

  describe('#pull_request_closed()', function() {
    it('should return true if pull request was closed', function() {
      assert.equal(true, new GithubActivityFeed("andrewhood125").pull_request_closed(PullRequestEvent_closed.payload));
    });
  });

  describe('#pull_request_link()', function() {
    it('should return an html link to the pull request', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed/pull/6'>Add a Gitter chat badge to README.md</a>",
        new GithubActivityFeed("andrewhood125").pull_request_link(PullRequestEvent_closed.payload.pull_request));
    });
  });

  describe('#ref()', function() {
    it('should return ref', function() {
      assert.equal("0.1.4", new GithubActivityFeed("andrewhood125").ref(CreateEvent_tag.payload));
    })
  });

  describe('#ref_link()', function() {
    it('should return link to ref', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed/tree/0.1.4'>0.1.4</a>", new GithubActivityFeed("andrewhood125").ref_link(CreateEvent_tag));
    });
  });

  describe('#ref_type()', function() {
    it('should return ref_type for the event', function() {
      assert.equal('tag', new GithubActivityFeed("andrewhood125").ref_type(CreateEvent_tag.payload));
    });
  });

  describe('#remove_api_url()', function() {
    it('should strip the api subdomain from a github url', function() {
      assert.equal('andrewhood125', new GithubActivityFeed("andrewhood125").remove_api_url('https://api.github.com/andrewhood125'));
    });
  });

  describe('#repository()', function() {
    it('should return the name of the repository', function() {
      assert.equal('andrewhood125/github-activity-feed', new GithubActivityFeed("andrewhood125").repository(CreateEvent_tag.repo));
    });
  });

  describe('#repository_link()', function() {
    it('should return a link to the repository', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed'>andrewhood125/github-activity-feed</a>", new GithubActivityFeed("andrewhood125").repository_link(CreateEvent_tag));
    });
  });

  describe('#resolve_events()', function() {
    it('should set events to rejected when rate limit is exceeded', function() {
      new GithubActivityFeed("andrewhood125")
        .resolve_events(RateLimitExceeded, 403)
        .state(function(state) {
          assert.equal("rejected", state);
        });
    });
    it('should set events to rejected if status is not 200', function() {
      new GithubActivityFeed("andrewhood125")
        .resolve_events(RateLimitNotExceeded, 300)
        .state(function(state) {
          assert.equal("rejected", state);
        });
    });
  });

  describe('#resolve_user()', function() {
    it('should set user to rejected when rate limit is exceeded', function() {
      new GithubActivityFeed("andrewhood125")
        .resolve_events(RateLimitExceeded, 403)
        .state(function(state) {
          assert.equal("rejected", state);
        });
    });
    it('should set user to rejected if status is not 200', function() {
      new GithubActivityFeed("andrewhood125")
        .resolve_user(RateLimitNotExceeded, 300)
        .state(function(state) {
          assert.equal("rejected", state);
        });

    });
  });

  describe('#time_since()', function() {
    it('should return a span with the time since the event', function() {
      assert.equal("<span class='timeago'> a few seconds ago</span>", new GithubActivityFeed("andrewhood125").time_since(PullRequestEvent_closed));
    });
  });

  describe('#time_until_api_refresh()', function() {
    it('should say how long until the api limit resets', function() {
      assert.equal('a few seconds ago', new GithubActivityFeed("andrewhood125").time_until_api_refresh(RateLimitExceeded));
    });
  });

  describe('#truncate()', function() {
    it('should truncate strings longer than 50 chars', function() {
      assert.equal('Short text', new GithubActivityFeed("andrewhood125").truncate('Short text'));
      assert.equal('12345678910111213141516171819202122232425262728293...', new GithubActivityFeed("andrewhood125").truncate('123456789101112131415161718192021222324252627282930'));
    });
  });

})
