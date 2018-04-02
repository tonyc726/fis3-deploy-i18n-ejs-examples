define('node_modules/lodash/isString', function(require, exports, module) {

  var baseGetTag = require('node_modules/lodash/_baseGetTag'),
      isArray = require('node_modules/lodash/isArray'),
      isObjectLike = require('node_modules/lodash/isObjectLike');
  
  /** `Object#toString` result references. */
  var stringTag = '[object String]';
  
  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
  }
  
  module.exports = isString;
  

});
