define('node_modules/lodash/_baseAt', function(require, exports, module) {

  var get = require('node_modules/lodash/get');
  
  /**
   * The base implementation of `_.at` without support for individual paths.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {string[]} paths The property paths to pick.
   * @returns {Array} Returns the picked elements.
   */
  function baseAt(object, paths) {
    var index = -1,
        length = paths.length,
        result = Array(length),
        skip = object == null;
  
    while (++index < length) {
      result[index] = skip ? undefined : get(object, paths[index]);
    }
    return result;
  }
  
  module.exports = baseAt;
  

});
