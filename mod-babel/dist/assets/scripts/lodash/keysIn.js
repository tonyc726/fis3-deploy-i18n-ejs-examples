define('node_modules/lodash/keysIn', function(require, exports, module) {

  var arrayLikeKeys = require('node_modules/lodash/_arrayLikeKeys'),
      baseKeysIn = require('node_modules/lodash/_baseKeysIn'),
      isArrayLike = require('node_modules/lodash/isArrayLike');
  
  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  
  module.exports = keysIn;
  

});
