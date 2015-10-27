# Bedrock API

This files simply documents the API that the bedrock uses although it is pretty simple and straight forward looking in the files itself.

Most of the methods have a ```self``` argument. This opens the ability for you to use it in functional programming just passing the rock inherited or the scope you want to use inside.

## Rock

Everyone should extend the Rock. It's the foundation of all Bedrock. He is the one who knows the siblings and how to announce.

See more about the Rock [here](Rock.md).

## Router (extends Rock and [Backbone Router](http://backbonejs.org/#Router))

Set your routes for the states in the Controller right here!

See more about the Router [here](Router.md).

## Controller (extends Rock)

Here is where you set the logic of your app/game. Loops, states...

See more about the Controller [here](Controller.md).

## Model (extends Rock and [Backbone Model](http://backbonejs.org/#Model))

Used for data control. You set here your JSONs, connections to the databases, modifications in data...

See more about the Model [here](Model.md).

## Collection (extends Rock and [Backbone Collection](http://backbonejs.org/#Collection))

Collection is just a group of models.

See more about the Collection [here](Collection.md).

## View (extends Rock and [Backbone View](http://backbonejs.org/#View))

Everything you see should be set here. The only one who knows what x and y are or button events for example.

See more about the View [here](View.md).
