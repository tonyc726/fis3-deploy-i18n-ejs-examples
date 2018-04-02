define('node_modules/lodash/toArray', function(require, exports, module) {

  var Symbol = require('node_modules/lodash/_Symbol'),
      copyArray = require('node_modules/lodash/_copyArray'),
      getTag = require('node_modules/lodash/_getTag'),
      isArrayLike = require('node_modules/lodash/isArrayLike'),
      isString = require('node_modules/lodash/isString'),
      iteratorToArray = require('node_modules/lodash/_iteratorToArray'),
      mapToArray = require('node_modules/lodash/_mapToArray'),
      setToArray = require('node_modules/lodash/_setToArray'),
      stringToArray = require('node_modules/lodash/_stringToArray'),
      values = require('node_modules/lodash/values');
  
  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';
  
  /** Built-in value references. */
  var symIterator = Symbol ? Symbol.iterator : undefined;
  
  /**
   * Converts `value` to an array.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  function toArray(value) {
    if (!value) {
      return [];
    }
    if (isArrayLike(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }
    if (symIterator && value[symIterator]) {
      return iteratorToArray(value[symIterator]());
    }
    var tag = getTag(value),
        func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
  
    return func(value);
  }
  
  module.exports = toArray;
  

});
