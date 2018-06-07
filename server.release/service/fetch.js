'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by lei_sun on 2018/5/22.
                                                                                                                                                                                                                                                                   */


var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/bitinn/node-fetch
var https = require('https'); // https://www.ddhigh.com/2016/12/14/node-fetch-ignore-certificate.html
var http = require('http');

var obj = {};

obj.showJSON = function (res, content) {
    res.writeHead(200, {
        'Content-Type': 'json'
    });
    res.end(JSON.stringify(content));
};

// flag: true => 不调用 showJSON 方法, false, undefined => 反之
obj.post = function (url, body, req, res, flag) {
    var _this = this;

    var prefix = "";

    if (body == undefined) {
        body = {};
    }

    body = _extends({}, req.body);

    return new Promise(function (resolve, reject) {
        var cookie = req.headers.cookie;
        //console.log('req.headers.cookie', cookie);
        //console.log('req.body', body);

        (0, _nodeFetch2.default)(prefix + url, {
            agent: new http.Agent({ rejectUnauthorized: false }),
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(body),
            headers: {
                contentType: 'application/json',
                cookie: cookie
            }
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (!flag) {
                _this.showJSON(res, json);
            }
            return resolve && resolve(json);
        }).catch(function (err) {
            if (!flag) {
                _this.showJSON(res, err);
            }
            return reject && reject(err);
        });
    });
};

exports.default = obj;