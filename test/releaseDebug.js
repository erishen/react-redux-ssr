/**
 * Created by lei_sun on 2018/8/14.
 */
require('babel-register');
require("babel-polyfill");
process.env.isModule = 1;
process.env.isDebug = 1;
require('./release.server');