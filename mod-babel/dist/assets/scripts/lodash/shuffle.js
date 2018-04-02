define('node_modules/lodash/shuffle', function(require, exports, module) {

  var arrayShuffle = require('node_modules/lodash/_arrayShuffle'),
      baseShuffle = require('node_modules/lodash/_baseShuffle'),
      isArray = require('node_modules/lodash/isArray');
  
  /**
   * Creates an array of shuffled values, using a version of the
   * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   * @example
   *
   * _.shuffle([1, 2, 3, 4]);
   * // => [4, 1, 3, 2]
   */
  function shuffle(collection) {
    var func = isArray(collection) ? arrayShuffle : baseShuffle;
    return func(collection);
  }
  
  module.exports = shuffle;
  

});
