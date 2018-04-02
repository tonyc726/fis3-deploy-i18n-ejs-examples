define('node_modules/lodash/_createAggregator', function(require, exports, module) {

  var arrayAggregator = require('node_modules/lodash/_arrayAggregator'),
      baseAggregator = require('node_modules/lodash/_baseAggregator'),
      baseIteratee = require('node_modules/lodash/_baseIteratee'),
      isArray = require('node_modules/lodash/isArray');
  
  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */
  function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
      var func = isArray(collection) ? arrayAggregator : baseAggregator,
          accumulator = initializer ? initializer() : {};
  
      return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
    };
  }
  
  module.exports = createAggregator;
  

});
