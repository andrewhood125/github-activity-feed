
github-activity-feed
====================

[![Build Status](https://travis-ci.org/andrewhood125/github-activity-feed.svg?branch=master)](https://travis-ci.org/andrewhood125/github-activity-feed)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/andrewhood125/github-activity-feed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Get your public activity feed in a human readble format.

Useage
------

#### Bower
`bower install` [What's bower?](http://bower.io/)

---

#### Page setup

If you want to take advantage of octicons make sure they are linked in the
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

then initialize...
````javascript
var gh = new GithubActivityFeed("andrewhood125");
````
Now you are ready to get your hooman readble activity!
GithubActivityFeed has two public api points to make things as easy as
possible. `gh.events` and `gh.user` are both [jQuery
$.Deferred()](http://api.jquery.com/jquery.deferred/) objects.
 
---

####`gh.events` example

````javascript
gh.events.done(function(events) {
  
  // The GitHub headers and some other 
  // interesting things live in here. 
  console.log(events.meta); 
  
  // Array of your events
  console.log(events.data);
  
});
````

#### A single events structure
````
{
  	icon: '<span class="mega-octicon octicon-git-commit"></span>',
  	text: '<a href="https://github.com/andrewhood125">andrewhood125</a> created tag <a href="https://github.com/andrewhood125/github-activity-feed/tree/0.1.6">0.1.6</a> at <a href="https://github.com/andrewhood125/github-activity-feed">andrewhood125/github-activity-feed</a>',
  	timeago: '<span class="timeago"> about 22 hours ago</span>'
}
````
---

####`gh.user` example

````javascript
gh.user.done(function(user) {
  // Same as events above 
  console.log(events.meta); 
  
  // Lots of stuff about you!
  // Open up index.html and you'll see
  // the entire list
  console.log(events.data);
});
````
---

Tests and Coverage
------------------
#### npm
[npm](https://npmjs.org/) is used for the dev dependencies. I'm using mocha for testing with blanket for coverage, and grunt to run it all. 

`npm install`  
`npm install -g grunt-cli`  
`grunt`
