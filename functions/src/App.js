Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  const dishes = props.dishes.map((dish, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    children: dish.title
  }, index));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    children: dishes
  });
}

var _default = App;
exports.default = _default;