var obj = {};

obj.hello = function(){
    return 'Hello World';
};

obj.debug = function(){
    process.env.COMMON = 'common';
    process.env.CONFIGPATH = 'config';
    require('./server');
};

obj.release = function(){
    process.env.NODE_ENV = 'production';
    process.env.RELEASE = true;
    process.env.COMMON = 'common.release';
    process.env.CONFIGPATH = 'config';
    require('./server.release');
};

obj.store = function(){
    var commonStore = require('./common.release/redux/store').default;
    return commonStore;
};

module.exports = obj;