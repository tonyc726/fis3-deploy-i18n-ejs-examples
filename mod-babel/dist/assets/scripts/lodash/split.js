define('node_modules/lodash/split', function(require, exports, module) {

  var baseToString = require('node_modules/lodash/_baseToString'),
      castSlice = require('node_modules/lodash/_castSlice'),
      hasUnicode = require('node_modules/lodash/_hasUnicode'),
      isIterateeCall = require('node_modules/lodash/_isIterateeCall'),
      isRegExp = require('node_modules/lodash/isRegExp'),
      stringToArray = require('node_modules/lodash/_stringToArray'),
      toString = require('node_modules/lodash/toString');
  
  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;
  
  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */
  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
      separator = limit = undefined;
    }
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
      return [];
    }
    string = toString(string);
    if (string && (
          typeof separator == 'string' ||
          (separator != null && !isRegExp(separator))
        )) {
      separator = baseToString(separator);
      if (!separator && hasUnicode(string)) {
        return castSlice(stringToArray(string), 0, limit);
      }
    }
    return string.split(separator, limit);
  }
  
  module.exports = split;
  

});
