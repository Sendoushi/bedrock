# Bedrock

Library intends to be just a simple top layer for various kinds of projects. From simple to complex ones.
It isn't a new framework, just a set of utils to work with other frameworks.

The api documentation is **[here](doc/API.md)**.

## Examples of installation
To install you may use ```bower```:
```
bower install --save git@github.com:Sendoushi/bedrock.git#v0.1.15
```

Or you may use ```npm```:
```
npm install --save git://github.com/Sendoushi/bedrock.git#v0.1.15
```

Or why don't you just simply clone it?
```
git clone https://github.com/Sendoushi/bedrock.git
```

## Main dependencies
- [Babel](https://github.com/babel/babel)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Eslint](https://github.com/eslint/eslint)
- [Mout](https://github.com/mout/mout)
- [Postcss](https://github.com/postcss/postcss)
- [Webpack](https://github.com/webpack/webpack)

#### Optional dependencies (depending on usage)
- [Page.js](https://github.com/visionmedia/page.js)
- [Redux](https://github.com/reactjs/redux)
- [React](https://github.com/facebook/react)
- [Sass](https://github.com/sass/sass)

## Configuration

You need to have [node](http://nodejs.org) so you can have the package dependency management and use the tasks:
- Install [node](http://nodejs.org)
- `npm install`

If you want to use ```jekyll``` task you'll also need:
- Install [ruby](https://www.ruby-lang.org/en/documentation/installation/)
- `gem install jekyll`

You need to set a list of dependencies in your root ```package.json```:
```
"devDependencies": {
  "babel-eslint": "^4.1.6",
  "eslint": "^1.10.3",
  "eslint-config-defaults": "^8.0.2",
  "eslint-config-sds": "git://github.com/sendoushi/eslint-config-sds.git",
  "eslint-plugin-react": "^3.16.1"
}
```

## Usage

Examples are provided inside [examples folder](https://github.com/Sendoushi/bedrock/tree/master/examples) or in [code-examples](https://github.com/Sendoushi/code-examples) if you need.

#### Router
Provide de router file (there is one inside examples folder) with all the routing modules you want and include it in your bootstrap.

#### Tasks
Provide a build file (there is one inside examples folder) and just run it to build.

#### Redux + React
Import the utils you need and use and abuse it.

You need to add this to your dependencies:
```
"dependencies": {
  "page": "^1.6.4",
  "react": "^0.14.7",
  "react-dom": "^0.14.7",
  "redux": "^3.3.1"
}
```
