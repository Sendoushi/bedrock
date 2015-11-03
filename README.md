# Bedrock

This frameworks intends to be just a simple framework on top of [backbone](http://backbonejs.org/) / [exoskeleton](http://exosjs.com/).

You may be thinking "another framework" but in the end, if this one was created was because there was a need of something like this, at least for me. Also, in my point of view "the more the merrier", more options to choose from. Maybe others will find my approach to be more comfortable or more in what they're looking for and then maybe not. Oh the power of freedom and choice, the open source!

For those who like the idea, help me improve it! :)

The api documentation is **[here](doc/API.md)**.

## Main objectives

- Be able to check the source without scratching the head
- Module organization
- Easily scalable
- OOP / FP, work as you wish!

## Simple FAQ

#### Why on top of [backbone](http://backbonejs.org/)?

I've tried some frameworks in the past like [spoonjs](http://indigounited.github.io/spoonjs/) which I found really interesting (also part of the inspiration to do bedrock) but I found that it wasn't get enough traction. How many people know about [spoonjs](http://indigounited.github.io/spoonjs/)? Why is the traction important? Well, if you want to troubleshoot something, it won't be as easy as go to [stackoverflow](http://www.stackoverflow.com) and just ask for help. With bedrock you can simply root your bug/problem to [backbone](http://backbonejs.org/) which is pretty big and has a lot of that traction. Besides this, [backbone](http://backbonejs.org/) has a pretty small footprint ([exoskeleton](http://exosjs.com/) is even smaller!) and is seasoned and proven. In the end, I think [backbone](http://backbonejs.org/) is awesome and the best choice. I like its approach and method.

#### Why not on top of other framework?

The web moves in hypes. They say something is good because X or Y follows that approach when in the end they're just redoing other concepts or approaching the problem in a way that may not be the best solution. I'm not saying these hypes are bad, actually, I think they are really productive in terms of evolving the industry but in my opinion, one should choose the best tool for the job not just follow the hype.

I think other frameworks have some issues (once again my opinion):

- [reactjs](https://facebook.github.io/react/): animation, templating in the middle of the file, mobile performance, size, lack of a controller...
- [ember.js](http://emberjs.com/) too much magic, hard to troubleshoot, a strong opinion...
- [angular.js](https://angularjs.org/) javascript in the middle of html, weird approach, auto binding (yes, I find this to be an issue)...

Backbone has some pretty good advantages over the others around in my point of view (as stated before: size, users, approach and method, seasoned and proven...). So, why shouldn't I stick with something that is already been proven as a good tool for the job or with something that I like to work with?

#### Why not just [backbone](http://backbonejs.org/) then?
[Backbone](http://backbonejs.org/) is a pretty cool framework comparing to the others on the market but still lacks some sense of organization for scalablity. Most of the people who use [backbone](http://backbonejs.org/) do their own framework on top or just use something like [marionette.js](http://marionettejs.com/) or [chaplin.js](http://chaplinjs.org/). I don't find these frameworks interesting enough for me. I would also would like the freedom to choose between functional or object-oriented. Why should one just choose one or another? A hybdrid solution seems pretty good from where I stand. These are the points where bedrock enters. Does it solve those questions? Well, too soon to say!

## Dependencies

You'll need [babel](https://babeljs.io/) or some ES6 compiler to run this. Already using the new technology.
To use [exoskeleton](http://exosjs.com/) you have to map it to ```backbone``` on ```webpack```, ```requirejs```...

## Installation

- Install [node](http://nodejs.org)
- `npm install`

## Still have to do...

- Tests
- Remove underscore as a dependency
- Separate backbone into ES6 modules
- Maybe remove mout?
