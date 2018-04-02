define('node_modules/lodash/capitalize', function(require, exports, module) {

  var toString = require('node_modules/lodash/toString'),
      upperFirst = require('node_modules/lodash/upperFirst');
  
  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */
  function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
  }
  
  module.exports = capitalize;
  

});
