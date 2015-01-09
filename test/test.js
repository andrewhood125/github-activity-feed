var assert = require("assert")
var gaf = require('../src/github-activity-feed');


var event = {
  actor: {
    login: "andrewhood125"
  },
  repo: {
    name: "andrewhood125/github-activity-feed",
    url: "https://api.github.com/repos/andrewhood125/github-activity-feed"
  },
  payload: {
    forkee: {
      full_name: "andrewhood125/common-critic"
    },
    ref: "refs/heads/master",
    ref_type: "repository"
  }
};

describe('GitHub Activity Feed', function() {
  describe('#author()', function() {
    it('should return andrewhood125', function() {
      assert.equal("andrewhood125", gaf.author(event));
    })
  });

  describe('#author_link()', function() {
    it('should return link to username', function() {
      assert.equal("<a href='https://github.com/andrewhood125'>andrewhood125</a>", gaf.author_link(event));
    })
  });

  describe('#ref()', function() {
    it('should return master', function() {
      assert.equal("master", gaf.ref(event.payload));
    })
  });

  describe('#ref_link()', function() {
    it('should return link to ref', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed/tree/master'>master</a>", gaf.ref_link(event));
    });
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

  describe('#remove_api_url()', function() {
    it('should strip the api subdomain from a github url', function() {
      assert.equal('andrewhood125', gaf.remove_api_url('https://api.github.com/andrewhood125'));
    });
  });

  describe('#forkee_link()', function() {
    it('should return link to fork', function() {
      assert.equal("<a href='https://github.com/andrewhood125/common-critic'>andrewhood125/common-critic</a>", gaf.forkee_link(event.payload.forkee));
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

  describe('#ref_type()', function() {
    it('should return ref_type for the event', function() {
      assert.equal('repository', gaf.ref_type(event.payload));
    });
  });

  describe('#repository()', function() {
    it('should return the name of the repository', function() {
      assert.equal('andrewhood125/github-activity-feed', gaf.repository(event.repo));
    });
  });

  describe('#repository_link()', function() {
    it('should return a link to the repository', function() {
      assert.equal("<a href='https://github.com/andrewhood125/github-activity-feed'>andrewhood125/github-activity-feed</a>", gaf.repository_link(event));
    });
  });

  describe('#truncate()', function() {
    it('should truncate strings longer than 50 chars', function() {
      assert.equal('Short text', gaf.truncate('Short text'));
      assert.equal('12345678910111213141516171819202122232425262728293...', gaf.truncate('123456789101112131415161718192021222324252627282930'));
    });
  });

})
