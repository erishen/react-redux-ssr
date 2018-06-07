'use strict';

Object.defineProperty(exports, "__esModule", {
                    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
                    _inherits(Page, _Component);

                    function Page() {
                                        _classCallCheck(this, Page);

                                        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
                    }

                    _createClass(Page, [{
                                        key: 'render',
                                        value: function render() {
                                                            return _react2.default.createElement(
                                                                                'div',
                                                                                null,
                                                                                _react2.default.createElement(
                                                                                                    _reactBootstrap.ButtonToolbar,
                                                                                                    null,
                                                                                                    _react2.default.createElement(
                                                                                                                        _reactBootstrap.Button,
                                                                                                                        null,
                                                                                                                        'Default'
                                                                                                    ),
                                                                                                    _react2.default.createElement(
                                                                                                                        _reactBootstrap.Button,
                                                                                                                        { bsStyle: 'primary' },
                                                                                                                        'Primary'
                                                                                                    ),
                                                                                                    _react2.default.createElement(
                                                                                                                        _reactBootstrap.Button,
                                                                                                                        { bsStyle: 'success' },
                                                                                                                        'Success'
                                                                                                    ),
                                                                                                    _react2.default.createElement(
                                                                                                                        _reactBootstrap.Button,
                                                                                                                        { bsStyle: 'info' },
                                                                                                                        'Info'
                                                                                                    ),
                                                                                                    _react2.default.createElement(
                                                                                                                        _reactBootstrap.Button,
                                                                                                                        { bsStyle: 'warning' },
                                                                                                                        'Warning'
                                                                                                    ),
                                                                                                    _react2.default.createElement(
                                                                                                                        _reactBootstrap.Button,
                                                                                                                        { bsStyle: 'danger' },
                                                                                                                        'Danger'
                                                                                                    ),
                                                                                                    _react2.default.createElement(
                                                                                                                        _reactBootstrap.Button,
                                                                                                                        { bsStyle: 'link' },
                                                                                                                        'Link'
                                                                                                    )
                                                                                )
                                                            );
                                        }
                    }]);

                    return Page;
}(_react.Component);

exports.default = Page;