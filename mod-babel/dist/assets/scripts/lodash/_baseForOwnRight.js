define('node_modules/lodash/_baseForOwnRight', function(require, exports, module) {

  var baseForRight = require('node_modules/lodash/_baseForRight'),
      keys = require('node_modules/lodash/keys');
  
  /**
   * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwnRight(object, iteratee) {
    return object && baseForRight(object, iteratee, keys);
  }
  
  module.exports = baseForOwnRight;
  

});
