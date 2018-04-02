define('node_modules/lodash/isArrayBuffer', function(require, exports, module) {

  var baseIsArrayBuffer = require('node_modules/lodash/_baseIsArrayBuffer'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      nodeUtil = require('node_modules/lodash/_nodeUtil');
  
  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer;
  
  /**
   * Checks if `value` is classified as an `ArrayBuffer` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   * @example
   *
   * _.isArrayBuffer(new ArrayBuffer(2));
   * // => true
   *
   * _.isArrayBuffer(new Array(2));
   * // => false
   */
  var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
  
  module.exports = isArrayBuffer;
  

});
