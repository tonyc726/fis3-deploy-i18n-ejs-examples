define('pages/main', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jquery = require('node_modules/jquery/dist/jquery');
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  require('node_modules/jquery-validation/dist/jquery.validate');
  
  var _moment = require('node_modules/moment/moment');
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _isArray = require('node_modules/lodash/isArray');
  
  var _isArray2 = _interopRequireDefault(_isArray);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  (0, _jquery2.default)('#validate_test').validate({
    rules: {
      username: {
        required: true,
        normalizer: function normalizer(value) {
          return _jquery2.default.trim(value);
        }
      }
    },
    submitHandler: function submitHandler(form) {
      console.info('emit submitHandler event');
      console.log(form);
  
      return false;
    }
  });
  (0, _jquery2.default)('body').append('<p>jQuery version: ' + _jquery2.default.fn.jquery + '</p>');
  (0, _jquery2.default)('body').append('<p>moment now: ' + (0, _moment2.default)().format() + '</p>');
  
  var mainLocalVar = 'main local text';
  
  exports.default = function (callback) {
    console.info('main.js > export default');
    if (_jquery2.default.isFunction(callback)) {
      callback(mainLocalVar);
    }
  
    console.log((0, _isArray2.default)([]));
  };

});
