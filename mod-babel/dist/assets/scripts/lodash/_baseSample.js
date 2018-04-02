define('node_modules/lodash/_baseSample', function(require, exports, module) {

  var arraySample = require('node_modules/lodash/_arraySample'),
      values = require('node_modules/lodash/values');
  
  /**
   * The base implementation of `_.sample`.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   */
  function baseSample(collection) {
    return arraySample(values(collection));
  }
  
  module.exports = baseSample;
  

});
