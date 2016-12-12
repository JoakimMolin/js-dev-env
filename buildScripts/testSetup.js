// This file is not transpiled so you have to use CommonJS and ES5

// Register babel to transpile before run our test
require('babel-register')();

// Disable webpack features that Mocha doesn´t understand
require.extensions['.css'] = function () {};

