define('node_modules/lodash/_createPadding', function(require, exports, module) {

  var baseRepeat = require('node_modules/lodash/_baseRepeat'),
      baseToString = require('node_modules/lodash/_baseToString'),
      castSlice = require('node_modules/lodash/_castSlice'),
      hasUnicode = require('node_modules/lodash/_hasUnicode'),
      stringSize = require('node_modules/lodash/_stringSize'),
      stringToArray = require('node_modules/lodash/_stringToArray');
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil = Math.ceil;
  
  /**
   * Creates the padding for `string` based on `length`. The `chars` string
   * is truncated if the number of characters exceeds `length`.
   *
   * @private
   * @param {number} length The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padding for `string`.
   */
  function createPadding(length, chars) {
    chars = chars === undefined ? ' ' : baseToString(chars);
  
    var charsLength = chars.length;
    if (charsLength < 2) {
      return charsLength ? baseRepeat(chars, length) : chars;
    }
    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
    return hasUnicode(chars)
      ? castSlice(stringToArray(result), 0, length).join('')
      : result.slice(0, length);
  }
  
  module.exports = createPadding;
  

});
