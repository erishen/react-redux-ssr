require('babel-register');
require("babel-polyfill");
process.env.isModule = 1;
require('./release.server');