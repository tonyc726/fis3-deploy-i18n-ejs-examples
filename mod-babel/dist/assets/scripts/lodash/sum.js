define('node_modules/lodash/sum', function(require, exports, module) {

  var baseSum = require('node_modules/lodash/_baseSum'),
      identity = require('node_modules/lodash/identity');
  
  /**
   * Computes the sum of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 3.4.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the sum.
   * @example
   *
   * _.sum([4, 2, 8, 6]);
   * // => 20
   */
  function sum(array) {
    return (array && array.length)
      ? baseSum(array, identity)
      : 0;
  }
  
  module.exports = sum;
  

});
