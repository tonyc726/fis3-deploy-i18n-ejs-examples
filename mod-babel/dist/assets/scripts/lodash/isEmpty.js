define('node_modules/lodash/isEmpty', function(require, exports, module) {

  var baseKeys = require('node_modules/lodash/_baseKeys'),
      getTag = require('node_modules/lodash/_getTag'),
      isArguments = require('node_modules/lodash/isArguments'),
      isArray = require('node_modules/lodash/isArray'),
      isArrayLike = require('node_modules/lodash/isArrayLike'),
      isBuffer = require('node_modules/lodash/isBuffer'),
      isPrototype = require('node_modules/lodash/_isPrototype'),
      isTypedArray = require('node_modules/lodash/isTypedArray');
  
  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike(value) &&
        (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
          isBuffer(value) || isTypedArray(value) || isArguments(value))) {
      return !value.length;
    }
    var tag = getTag(value);
    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }
    if (isPrototype(value)) {
      return !baseKeys(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = isEmpty;
  

});
