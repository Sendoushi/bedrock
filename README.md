# Bedrock

Library intends to be just a simple top layer for various kinds of projects. From simple to complex ones.
It isn't a new framework, just a set of utils to work with other frameworks.

The api documentation is **[here](doc/API.md)**.

## Examples of installation
To install you may use ```bower```:
```
bower install --save git@github.com:Sendoushi/bedrock.git
```

Or you may use ```npm```:
```
npm install --save git+ssh://git@github.com:Sendoushi/bedrock.git
```

Or why don't you just simply clone it?
```
git clone git+ssh://git@github.com:Sendoushi/bedrock.git
```

## Main dependencies
- [Babel](https://github.com/babel/babel)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Eslint](https://github.com/eslint/eslint)
- [Mout](https://github.com/mout/mout)
- [Page.js](https://github.com/visionmedia/page.js)
- [Postcss](https://github.com/postcss/postcss)
- [Webpack](https://github.com/webpack/webpack)

#### Optional dependencies (depending on usage)
- [Redux](https://github.com/reactjs/redux)
- [Riot](https://github.com/riot/riot)
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
  "autoprefixer": "^6.3.3",
  "babel-core": "^6.4.5",
  "babel-eslint": "^4.1.6",
  "babel-loader": "^6.2.1",
  "babel-plugin-transform-runtime": "^6.4.3",
  "babel-preset-es2015": "^6.3.13",
  "babel-runtime": "^6.3.19",
  "cssnano": "^3.5.2",
  "eslint": "^1.10.3",
  "eslint-config-defaults": "^8.0.2",
  "eslint-config-sds": "git://github.com/sendoushi/eslint-config-sds.git",
  "eslint-plugin-react": "^3.16.1",
  "fs-extra": "^0.26.5",
  "glob": "^7.0.0",
  "json-loader": "^0.5.4",
  "node-sass": "^3.4.2",
  "outdated-browser": "~1.0.2",
  "page": "^1.6.4",
  "pixrem": "^3.0.0",
  "postcss": "^5.0.16",
  "raw-loader": "^0.5.1",
  "svgo": "^0.6.1",
  "uglify-js": "^2.6.1",
  "webpack": "^1.12.2",
  "webpack-dev-server": "^1.14.0"
},
"dependencies": {
  "bluebird": "~3.1.1",
  "mout": "~0.11.1"
}
```

## Usage

Examples are provided inside [examples folder](https://github.com/Sendoushi/bedrock/tree/master/examples) or in [code-examples](https://github.com/Sendoushi/code-examples) if you need.

#### Router
Provide de router file (there is one inside examples folder) with all the routing modules you want and include it in your bootstrap.

#### Tasks
Provide a build file (there is one inside examples folder) and just run it to build.

#### Redux + Riot
Import the utils you need and use and abuse it.

You need to add this to your dependencies:
```
"dependencies": {
  "redux": "^3.3.1",
  "riot": "^2.3.15"
}
```
