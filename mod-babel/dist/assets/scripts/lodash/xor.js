define('node_modules/lodash/xor', function(require, exports, module) {

  var arrayFilter = require('node_modules/lodash/_arrayFilter'),
      baseRest = require('node_modules/lodash/_baseRest'),
      baseXor = require('node_modules/lodash/_baseXor'),
      isArrayLikeObject = require('node_modules/lodash/isArrayLikeObject');
  
  /**
   * Creates an array of unique values that is the
   * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
   * of the given arrays. The order of result values is determined by the order
   * they occur in the arrays.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of filtered values.
   * @see _.difference, _.without
   * @example
   *
   * _.xor([2, 1], [2, 3]);
   * // => [1, 3]
   */
  var xor = baseRest(function(arrays) {
    return baseXor(arrayFilter(arrays, isArrayLikeObject));
  });
  
  module.exports = xor;
  

});
