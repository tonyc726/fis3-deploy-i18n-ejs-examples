define('node_modules/lodash/_createCompounder', function(require, exports, module) {

  var arrayReduce = require('node_modules/lodash/_arrayReduce'),
      deburr = require('node_modules/lodash/deburr'),
      words = require('node_modules/lodash/words');
  
  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]";
  
  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');
  
  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
  }
  
  module.exports = createCompounder;
  

});
