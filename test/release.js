require('babel-register');
require("babel-polyfill");
process.env.isModule = 1;
process.env.isDebug = 0;
require('./release.server');