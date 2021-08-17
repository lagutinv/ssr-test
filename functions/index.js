"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssr = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/App"));

var _dishes = _interopRequireDefault(require("./src/dishes"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const functions = require('firebase-functions');

const app = (0, _express.default)();
app.get('**', (req, res) => {
  (0, _dishes.default)().then(dishes => {
    const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_App.default, {
      dishes: dishes
    }));
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
  });
});
let ssr = functions.https.onRequest(app);
exports.ssr = ssr;