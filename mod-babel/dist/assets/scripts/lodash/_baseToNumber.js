define('node_modules/lodash/_baseToNumber', function(require, exports, module) {

  var isSymbol = require('node_modules/lodash/isSymbol');
  
  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;
  
  /**
   * The base implementation of `_.toNumber` which doesn't ensure correct
   * conversions of binary, hexadecimal, or octal string values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   */
  function baseToNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    return +value;
  }
  
  module.exports = baseToNumber;
  

});
