define('node_modules/lodash/omit', function(require, exports, module) {

  var arrayMap = require('node_modules/lodash/_arrayMap'),
      baseClone = require('node_modules/lodash/_baseClone'),
      baseUnset = require('node_modules/lodash/_baseUnset'),
      castPath = require('node_modules/lodash/_castPath'),
      copyObject = require('node_modules/lodash/_copyObject'),
      customOmitClone = require('node_modules/lodash/_customOmitClone'),
      flatRest = require('node_modules/lodash/_flatRest'),
      getAllKeysIn = require('node_modules/lodash/_getAllKeysIn');
  
  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;
  
  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function(path) {
      path = castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });
  
  module.exports = omit;
  

});
