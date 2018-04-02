define('node_modules/lodash/_arrayShuffle', function(require, exports, module) {

  var copyArray = require('node_modules/lodash/_copyArray'),
      shuffleSelf = require('node_modules/lodash/_shuffleSelf');
  
  /**
   * A specialized version of `_.shuffle` for arrays.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function arrayShuffle(array) {
    return shuffleSelf(copyArray(array));
  }
  
  module.exports = arrayShuffle;
  

});
