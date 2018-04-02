define('node_modules/lodash/intersection', function(require, exports, module) {

  var arrayMap = require('node_modules/lodash/_arrayMap'),
      baseIntersection = require('node_modules/lodash/_baseIntersection'),
      baseRest = require('node_modules/lodash/_baseRest'),
      castArrayLikeObject = require('node_modules/lodash/_castArrayLikeObject');
  
  /**
   * Creates an array of unique values that are included in all given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersection([2, 1], [2, 3]);
   * // => [2]
   */
  var intersection = baseRest(function(arrays) {
    var mapped = arrayMap(arrays, castArrayLikeObject);
    return (mapped.length && mapped[0] === arrays[0])
      ? baseIntersection(mapped)
      : [];
  });
  
  module.exports = intersection;
  

});
