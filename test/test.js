var assert = require("assert")
var gaf = require('../src/github-activity-feed');

var PullRequestEvent = {
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
  }
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

describe('GitHub Activity Feed', function() {

  describe('#author()', function() {
    it('should return andrewhood125', function() {
      assert.equal("andrewhood125", gaf.author(CreateEvent_tag));
    })
  });

  describe('#author_link()', function() {
    it('should return link to username', function() {
      assert.equal("<a href='https://github.com/andrewhood125'>andrewhood125</a>", gaf.author_link(CreateEvent_tag));
    })
  });

  describe('#build_icon()', function() {
    it('should return html for octicon', function() {
      assert.equal("<span class='mega-octicon octicon-git-commit'></span>", gaf.build_icon('mega-octicon octicon-git-commit'));
    });
  });

  describe('#convert_api_url()', function() {
    it('should return a github url with no subdomain', function() {
      assert.equal('https://github.com/', gaf.convert_api_url('https://api.github.com/'));
    });
  });

  describe('#forkee_link()', function() {
    it('should return link to fork', function() {
      assert.equal("<a href='https://github.com/andrewhood125/common-critic'>andrewhood125/common-critic</a>", gaf.forkee_link(ForkEvent.payload.forkee));
    });
  });

  describe('#gh_event()', function() {
    it('should return a single event object', function() {
      var e = gaf.gh_event('commit', 'star', '5 days', '12pm');
      assert.equal("<span class='commit'></span>", e.icon);
      assert.equal('star', e.text);
      assert.equal('5 days', e.timeago);
      assert.equal('12pm', e.at);
    });
  });

  describe('#github_url()', function() {
    it('should return a github url for a resource', function() {
      assert.equal('https://github.com/andrewhood125', gaf.github_url('andrewhood125'));
    });
  });

  describe('#link()', function() {
    it('should return html link for url and name', function() {
      assert.equal("<a href='andrew-hood.com'>Andrew Hood</a>", gaf.link('andrew-hood.com', 'Andrew Hood'));
    });
  });

  describe('#pull_request_closed()', function() {
    it('should return true if pull request was closed', function() {
      assert.equal(true, gaf.pull_request_closed(PullRequestEvent.payload));
    });
  });

  describe('#pull_request_link()', function() {
    it('should return an html link to the pull request', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed/pull/6'>Add a Gitter chat badge to README.md</a>",
        gaf.pull_request_link(PullRequestEvent.payload.pull_request));
    });
  });

  describe('#ref()', function() {
    it('should return ref', function() {
      assert.equal("0.1.4", gaf.ref(CreateEvent_tag.payload));
    })
  });

  describe('#ref_link()', function() {
    it('should return link to ref', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed/tree/0.1.4'>0.1.4</a>", gaf.ref_link(CreateEvent_tag));
    });
  });

  describe('#ref_type()', function() {
    it('should return ref_type for the event', function() {
      assert.equal('tag', gaf.ref_type(CreateEvent_tag.payload));
    });
  });

  describe('#remove_api_url()', function() {
    it('should strip the api subdomain from a github url', function() {
      assert.equal('andrewhood125', gaf.remove_api_url('https://api.github.com/andrewhood125'));
    });
  });

  describe('#repository()', function() {
    it('should return the name of the repository', function() {
      assert.equal('andrewhood125/github-activity-feed', gaf.repository(CreateEvent_tag.repo));
    });
  });

  describe('#repository_link()', function() {
    it('should return a link to the repository', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed'>andrewhood125/github-activity-feed</a>", gaf.repository_link(CreateEvent_tag));
    });
  });

  describe('#truncate()', function() {
    it('should truncate strings longer than 50 chars', function() {
      assert.equal('Short text', gaf.truncate('Short text'));
      assert.equal('12345678910111213141516171819202122232425262728293...', gaf.truncate('123456789101112131415161718192021222324252627282930'));
    });
  });

})
