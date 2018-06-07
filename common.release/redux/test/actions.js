'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by lei_sun on 2017/11/6.
 */
var INIT_PAGE = exports.INIT_PAGE = 'INIT_PAGE';
var initPageInfo = exports.initPageInfo = function initPageInfo(params) {
    return _extends({
        type: INIT_PAGE
    }, params);
};

var ADD_PAGE_NUM = exports.ADD_PAGE_NUM = 'ADD_PAGE_NUM';
var addPageNum = exports.addPageNum = function addPageNum(params) {
    return _extends({
        type: ADD_PAGE_NUM
    }, params);
};

var SUBTRACT_PAGE_NUM = exports.SUBTRACT_PAGE_NUM = 'SUBTRACT_PAGE_NUM';
var subtractPageNum = exports.subtractPageNum = function subtractPageNum(params) {
    return _extends({
        type: SUBTRACT_PAGE_NUM
    }, params);
};