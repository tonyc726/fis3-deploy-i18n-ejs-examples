define('node_modules/lodash/_castRest', function(require, exports, module) {

  var baseRest = require('node_modules/lodash/_baseRest');
  
  /**
   * A `baseRest` alias which can be replaced with `identity` by module
   * replacement plugins.
   *
   * @private
   * @type {Function}
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  var castRest = baseRest;
  
  module.exports = castRest;
  

});
