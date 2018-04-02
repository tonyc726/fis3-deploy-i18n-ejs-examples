define('node_modules/lodash/_arraySampleSize', function(require, exports, module) {

  var baseClamp = require('node_modules/lodash/_baseClamp'),
      copyArray = require('node_modules/lodash/_copyArray'),
      shuffleSelf = require('node_modules/lodash/_shuffleSelf');
  
  /**
   * A specialized version of `_.sampleSize` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */
  function arraySampleSize(array, n) {
    return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
  }
  
  module.exports = arraySampleSize;
  

});
