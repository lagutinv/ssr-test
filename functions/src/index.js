var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _dishes = _interopRequireDefault(require("./dishes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dishes.default)().then(dishes => {
  (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_App.default, {
    dishes: dishes
  }), document.getElementById('root'));
});