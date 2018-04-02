define('node_modules/lodash/reduceRight', function(require, exports, module) {

  var arrayReduceRight = require('node_modules/lodash/_arrayReduceRight'),
      baseEachRight = require('node_modules/lodash/_baseEachRight'),
      baseIteratee = require('node_modules/lodash/_baseIteratee'),
      baseReduce = require('node_modules/lodash/_baseReduce'),
      isArray = require('node_modules/lodash/isArray');
  
  /**
   * This method is like `_.reduce` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduce
   * @example
   *
   * var array = [[0, 1], [2, 3], [4, 5]];
   *
   * _.reduceRight(array, function(flattened, other) {
   *   return flattened.concat(other);
   * }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduceRight : baseReduce,
        initAccum = arguments.length < 3;
  
    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
  }
  
  module.exports = reduceRight;
  

});
