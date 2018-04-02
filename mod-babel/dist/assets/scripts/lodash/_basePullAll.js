define('node_modules/lodash/_basePullAll', function(require, exports, module) {

  var arrayMap = require('node_modules/lodash/_arrayMap'),
      baseIndexOf = require('node_modules/lodash/_baseIndexOf'),
      baseIndexOfWith = require('node_modules/lodash/_baseIndexOfWith'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      copyArray = require('node_modules/lodash/_copyArray');
  
  /** Used for built-in method references. */
  var arrayProto = Array.prototype;
  
  /** Built-in value references. */
  var splice = arrayProto.splice;
  
  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */
  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;
  
    if (array === values) {
      values = copyArray(values);
    }
    if (iteratee) {
      seen = arrayMap(array, baseUnary(iteratee));
    }
    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;
  
      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }
  
  module.exports = basePullAll;
  

});
