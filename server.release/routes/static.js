'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _version = require('../config/version');

var _version2 = _interopRequireDefault(_version);

var _system = require('../service/system');

var _system2 = _interopRequireDefault(_system);

var _util = require('../helper/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lei_sun on 2017/12/1.
 */
var router = _express2.default.Router();
var isDev = process.env.NODE_ENV !== 'production';

var firstUpper = function firstUpper(str) {
    return _util2.default.firstUpperCase(str);
};

var renderWrite = function renderWrite(req, res, route, callback) {
    res.render(route, { version: _version2.default, ip: _system2.default.getIPAdress() }, function (err, html) {
        if (!err) {
            var filename = '';
            if (route.indexOf('/') != -1) {
                var routeArr = route.split('/');
                filename = firstUpper(routeArr[0]) + firstUpper(routeArr[1]);
            } else {
                filename = firstUpper(route);
            }

            if (filename != '') {
                _fs2.default.writeFile(_path2.default.join(__dirname, '../../public') + '/' + filename + '.html', html, 'utf8', function (err) {
                    if (!err) {
                        console.log('The file ' + filename + '.html has been saved!');
                        return callback && callback(true);
                    } else {
                        return callback && callback(false);
                    }
                });
            } else {
                return callback && callback(false);
            }
        } else {
            return callback && callback(false);
        }
    });
};

var renderWriteLoop = function renderWriteLoop(req, res, routeIndex, routeArray, resultArray, callback) {
    if (resultArray == undefined) resultArray = [];

    if (routeArray && routeArray.length > 0) {
        var routeArrayLen = routeArray.length;
        if (routeIndex >= 0 && routeIndex < routeArrayLen) {
            var route = routeArray[routeIndex];
            renderWrite(req, res, route, function (flag) {
                //console.log('renderWriteLoop', route, flag);
                resultArray.push({ route: route, flag: flag });
                routeIndex++;
                return renderWriteLoop(req, res, routeIndex, routeArray, resultArray, callback);
            });
        } else {
            return callback && callback(resultArray);
        }
    } else {
        return callback && callback(resultArray);
    }
};

router.get('/', function (req, res) {
    if (!isDev) {
        var resultArray = [];
        var routeArray = [];
        renderWriteLoop(req, res, 0, routeArray, resultArray, function (result) {
            res.send(result);
        });
    } else {
        res.send('Should use production');
    }
});

exports.default = router;