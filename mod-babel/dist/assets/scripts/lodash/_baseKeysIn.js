define('node_modules/lodash/_baseKeysIn', function(require, exports, module) {

  var isObject = require('node_modules/lodash/isObject'),
      isPrototype = require('node_modules/lodash/_isPrototype'),
      nativeKeysIn = require('node_modules/lodash/_nativeKeysIn');
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];
  
    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  
  module.exports = baseKeysIn;
  

});
