define('node_modules/lodash/size', function(require, exports, module) {

  var baseKeys = require('node_modules/lodash/_baseKeys'),
      getTag = require('node_modules/lodash/_getTag'),
      isArrayLike = require('node_modules/lodash/isArrayLike'),
      isString = require('node_modules/lodash/isString'),
      stringSize = require('node_modules/lodash/_stringSize');
  
  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';
  
  /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable string keyed properties for objects.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the collection size.
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */
  function size(collection) {
    if (collection == null) {
      return 0;
    }
    if (isArrayLike(collection)) {
      return isString(collection) ? stringSize(collection) : collection.length;
    }
    var tag = getTag(collection);
    if (tag == mapTag || tag == setTag) {
      return collection.size;
    }
    return baseKeys(collection).length;
  }
  
  module.exports = size;
  

});
