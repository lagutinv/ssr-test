Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDishes;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDishes() {
  return (0, _isomorphicFetch.default)('https://us-central1-foodnationgo.cloudfunctions.net/dish').then(res => res.json());
}