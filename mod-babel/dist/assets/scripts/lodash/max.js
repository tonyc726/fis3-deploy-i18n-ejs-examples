define('node_modules/lodash/max', function(require, exports, module) {

  var baseExtremum = require('node_modules/lodash/_baseExtremum'),
      baseGt = require('node_modules/lodash/_baseGt'),
      identity = require('node_modules/lodash/identity');
  
  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */
  function max(array) {
    return (array && array.length)
      ? baseExtremum(array, identity, baseGt)
      : undefined;
  }
  
  module.exports = max;
  

});
