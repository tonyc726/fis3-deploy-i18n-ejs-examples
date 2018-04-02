define('node_modules/lodash/sample', function(require, exports, module) {

  var arraySample = require('node_modules/lodash/_arraySample'),
      baseSample = require('node_modules/lodash/_baseSample'),
      isArray = require('node_modules/lodash/isArray');
  
  /**
   * Gets a random element from `collection`.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   */
  function sample(collection) {
    var func = isArray(collection) ? arraySample : baseSample;
    return func(collection);
  }
  
  module.exports = sample;
  

});
