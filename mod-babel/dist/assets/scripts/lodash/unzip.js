define('node_modules/lodash/unzip', function(require, exports, module) {

  var arrayFilter = require('node_modules/lodash/_arrayFilter'),
      arrayMap = require('node_modules/lodash/_arrayMap'),
      baseProperty = require('node_modules/lodash/_baseProperty'),
      baseTimes = require('node_modules/lodash/_baseTimes'),
      isArrayLikeObject = require('node_modules/lodash/isArrayLikeObject');
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;
  
  /**
   * This method is like `_.zip` except that it accepts an array of grouped
   * elements and creates an array regrouping the elements to their pre-zip
   * configuration.
   *
   * @static
   * @memberOf _
   * @since 1.2.0
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   *
   * _.unzip(zipped);
   * // => [['a', 'b'], [1, 2], [true, false]]
   */
  function unzip(array) {
    if (!(array && array.length)) {
      return [];
    }
    var length = 0;
    array = arrayFilter(array, function(group) {
      if (isArrayLikeObject(group)) {
        length = nativeMax(group.length, length);
        return true;
      }
    });
    return baseTimes(length, function(index) {
      return arrayMap(array, baseProperty(index));
    });
  }
  
  module.exports = unzip;
  

});
