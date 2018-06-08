var obj = {};

obj.hello = function(){
    return 'Hello World';
};

obj.debug = function(){
    process.env.COMMON = 'common';
    require('babel-register');
    require("babel-polyfill");
    require('./server');
};

obj.release = function(){
    process.env.NODE_ENV = 'production';
    process.env.RELEASE = true;
    process.env.COMMON = 'common.release';
    require('babel-register');
    require("babel-polyfill");
    require('./server.release');
};

module.exports = obj;