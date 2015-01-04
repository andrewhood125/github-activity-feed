github-activity-feed
====================

Get your public activity feed in a human readble format.

Useage
------

If you want to take advantage of octicons make sure it's linked in the
page
````html
<link rel="stylesheet" href="bower_components/octicons/octicons/octicons.css" />
````
make sure that jquery, timeago and github-activity-feed are loaded.
````html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/jquery-timeago/jquery.timeago.js"></script>
<script src="bower_components/github-activity-feed/src/github-activity-feed.js"></script>
````


Initialize
````javascript
var gh = new GithubActivityFeed("andrewhood125");
````

Event data

````javascript
gh.events.done(function(data) {
  console.log(data);
});
````

User data

````javascript
gh.user.done(function(data) {
  console.log(data);
});
````
