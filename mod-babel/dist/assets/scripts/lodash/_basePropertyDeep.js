define('node_modules/lodash/_basePropertyDeep', function(require, exports, module) {

  var baseGet = require('node_modules/lodash/_baseGet');
  
  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  
  module.exports = basePropertyDeep;
  

});