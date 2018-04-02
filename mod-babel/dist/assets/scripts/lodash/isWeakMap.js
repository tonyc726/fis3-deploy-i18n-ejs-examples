define('node_modules/lodash/isWeakMap', function(require, exports, module) {

  var getTag = require('node_modules/lodash/_getTag'),
      isObjectLike = require('node_modules/lodash/isObjectLike');
  
  /** `Object#toString` result references. */
  var weakMapTag = '[object WeakMap]';
  
  /**
   * Checks if `value` is classified as a `WeakMap` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
   * @example
   *
   * _.isWeakMap(new WeakMap);
   * // => true
   *
   * _.isWeakMap(new Map);
   * // => false
   */
  function isWeakMap(value) {
    return isObjectLike(value) && getTag(value) == weakMapTag;
  }
  
  module.exports = isWeakMap;
  

});
