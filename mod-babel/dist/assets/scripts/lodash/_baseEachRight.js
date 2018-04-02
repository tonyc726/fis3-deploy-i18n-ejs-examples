define('node_modules/lodash/_baseEachRight', function(require, exports, module) {

  var baseForOwnRight = require('node_modules/lodash/_baseForOwnRight'),
      createBaseEach = require('node_modules/lodash/_createBaseEach');
  
  /**
   * The base implementation of `_.forEachRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEachRight = createBaseEach(baseForOwnRight, true);
  
  module.exports = baseEachRight;
  

});
