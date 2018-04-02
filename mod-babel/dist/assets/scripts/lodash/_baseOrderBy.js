define('node_modules/lodash/_baseOrderBy', function(require, exports, module) {

  var arrayMap = require('node_modules/lodash/_arrayMap'),
      baseIteratee = require('node_modules/lodash/_baseIteratee'),
      baseMap = require('node_modules/lodash/_baseMap'),
      baseSortBy = require('node_modules/lodash/_baseSortBy'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      compareMultiple = require('node_modules/lodash/_compareMultiple'),
      identity = require('node_modules/lodash/identity');
  
  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    var index = -1;
    iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));
  
    var result = baseMap(collection, function(value, key, collection) {
      var criteria = arrayMap(iteratees, function(iteratee) {
        return iteratee(value);
      });
      return { 'criteria': criteria, 'index': ++index, 'value': value };
    });
  
    return baseSortBy(result, function(object, other) {
      return compareMultiple(object, other, orders);
    });
  }
  
  module.exports = baseOrderBy;
  

});
