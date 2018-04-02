define('node_modules/lodash/isElement', function(require, exports, module) {

  var isObjectLike = require('node_modules/lodash/isObjectLike'),
      isPlainObject = require('node_modules/lodash/isPlainObject');
  
  /**
   * Checks if `value` is likely a DOM element.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   *
   * _.isElement('<body>');
   * // => false
   */
  function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
  }
  
  module.exports = isElement;
  

});
