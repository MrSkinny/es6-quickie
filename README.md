# Mini Starter Course on ES6

Small project to experiment with ES6 syntax, incl. Babel transpiler with Gulp. Also uses lightweight
json-server API to fetch data. Aspects included are:

* Modules
* Local variable with `let`
* Destructuring variable assignment
* Shorthand method syntax on objects
* Shorthand function syntax with rockets
* Template strings with interpolation

# Installing

1. Clone the repo
2. `npm install -g gulp` to install Gulp globally.
3. `npm install -g json-server` to run the db.json for API emulation
4. `npm install` to resolve project dependencies.

# Using

`gulp` to transpile
`gulp watch` to keep transpiler active

Does not contain code that requires a server to serve `index.html` 

The project is currently setup to transpile code under the _/src_ folder using the
_/src/app.js_ file as an entry point.

