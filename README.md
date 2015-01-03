github-activity-feed
====================

Get your public activity feed in a human readble format.

Useage
------

````javascript
var gh = new GithubActivityFeed("andrewhood125");
gh.events.done(function(data) {
  console.log(data);
});
````
