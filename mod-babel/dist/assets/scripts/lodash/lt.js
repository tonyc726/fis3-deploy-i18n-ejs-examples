define('node_modules/lodash/lt', function(require, exports, module) {

  var baseLt = require('node_modules/lodash/_baseLt'),
      createRelationalOperation = require('node_modules/lodash/_createRelationalOperation');
  
  /**
   * Checks if `value` is less than `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is less than `other`,
   *  else `false`.
   * @see _.gt
   * @example
   *
   * _.lt(1, 3);
   * // => true
   *
   * _.lt(3, 3);
   * // => false
   *
   * _.lt(3, 1);
   * // => false
   */
  var lt = createRelationalOperation(baseLt);
  
  module.exports = lt;
  

});
