require('babel-register');
require("babel-polyfill");
process.env.isModule = 0;
require('./release.server');