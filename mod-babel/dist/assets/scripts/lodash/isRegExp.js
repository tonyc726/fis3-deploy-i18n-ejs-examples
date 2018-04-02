define('node_modules/lodash/isRegExp', function(require, exports, module) {

  var baseIsRegExp = require('node_modules/lodash/_baseIsRegExp'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      nodeUtil = require('node_modules/lodash/_nodeUtil');
  
  /* Node.js helper references. */
  var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
  
  /**
   * Checks if `value` is classified as a `RegExp` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   * @example
   *
   * _.isRegExp(/abc/);
   * // => true
   *
   * _.isRegExp('/abc/');
   * // => false
   */
  var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
  
  module.exports = isRegExp;
  

});
