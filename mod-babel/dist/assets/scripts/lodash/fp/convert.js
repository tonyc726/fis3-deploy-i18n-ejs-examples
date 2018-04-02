define('node_modules/lodash/fp/convert', function(require, exports, module) {

  var baseConvert = require('node_modules/lodash/fp/_baseConvert'),
      util = require('node_modules/lodash/fp/_util');
  
  /**
   * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied. If `name` is an object its methods
   * will be converted.
   *
   * @param {string} name The name of the function to wrap.
   * @param {Function} [func] The function to wrap.
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function|Object} Returns the converted function or object.
   */
  function convert(name, func, options) {
    return baseConvert(util, name, func, options);
  }
  
  module.exports = convert;
  

});
