'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lei_sun on 2017/11/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Test = function (_Component) {
    _inherits(Test, _Component);

    function Test(props) {
        _classCallCheck(this, Test);

        var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

        _this.preloadedState = undefined;
        if (typeof window !== 'undefined') {
            _this.preloadedState = window.__PRELOADED_STATE__;
        }

        _this.store = _store2.default.createStoreWithMiddleware(_reducers2.default, _this.preloadedState);
        _this.state = _this.store.getState();
        _this.action = _store2.default.createAction(actions, _this.store.dispatch);
        return _this;
    }

    _createClass(Test, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('state', this.state);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.unsubscribe = this.store.subscribe(function () {
                _this2.setState(_this2.store.getState());
            });

            if (!this.preloadedState) this.action.initPageInfo();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var pageNum = this.state.pageNum;


            return _react2.default.createElement(
                'div',
                { className: 'test' },
                _react2.default.createElement(
                    'div',
                    null,
                    pageNum
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.action.addPageNum();
                            } },
                        ' + '
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.action.subtractPageNum();
                            } },
                        ' - '
                    )
                )
            );
        }
    }]);

    return Test;
}(_react.Component);

exports.default = Test;