define('node_modules/lodash/_baseShuffle', function(require, exports, module) {

  var shuffleSelf = require('node_modules/lodash/_shuffleSelf'),
      values = require('node_modules/lodash/values');
  
  /**
   * The base implementation of `_.shuffle`.
   *
   * @private
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function baseShuffle(collection) {
    return shuffleSelf(values(collection));
  }
  
  module.exports = baseShuffle;
  

});
