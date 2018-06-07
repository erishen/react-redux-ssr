'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

var _bootstrap = require('./test/bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _lazyload = require('./test/lazyload');

var _lazyload2 = _interopRequireDefault(_lazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ssr => default true, can set false.
exports.default = {
    test: {
        action: 'test',
        component: _test2.default,
        preloadedState: { pageNum: 20 }
    },
    bootstrap: {
        action: 'bootstrap',
        component: _bootstrap2.default
    },
    lazyload: {
        action: 'lazyload',
        component: _lazyload2.default
    }
}; /**
    * Created by lei_sun on 2018/6/7.
    */