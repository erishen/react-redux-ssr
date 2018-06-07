'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _actions = require('./actions');

/**
 * Created by lei_sun on 2017/11/6.
 */

var pageNum = function pageNum() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var action = arguments[1];

    switch (action.type) {
        case _actions.INIT_PAGE:
            return 1;
        case _actions.ADD_PAGE_NUM:
            return state + 1;
        case _actions.SUBTRACT_PAGE_NUM:
            return state - 1;
        default:
            return state;
    }
};

var rootReducer = (0, _redux.combineReducers)({
    pageNum: pageNum
});

exports.default = rootReducer;