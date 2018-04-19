'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Init = function Init(props) {
  return _react2.default.createElement(
    'div',
    { className: 'pull-scroll' },
    props.text
  );
};

Init.defaultProps = {
  text: 'hello world'
};

Init.propTypes = {
  text: _propTypes2.default.string
};

exports.default = Init;
module.exports = exports['default'];