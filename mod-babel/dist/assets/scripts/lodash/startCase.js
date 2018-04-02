define('node_modules/lodash/startCase', function(require, exports, module) {

  var createCompounder = require('node_modules/lodash/_createCompounder'),
      upperFirst = require('node_modules/lodash/upperFirst');
  
  /**
   * Converts `string` to
   * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
   *
   * @static
   * @memberOf _
   * @since 3.1.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the start cased string.
   * @example
   *
   * _.startCase('--foo-bar--');
   * // => 'Foo Bar'
   *
   * _.startCase('fooBar');
   * // => 'Foo Bar'
   *
   * _.startCase('__FOO_BAR__');
   * // => 'FOO BAR'
   */
  var startCase = createCompounder(function(result, word, index) {
    return result + (index ? ' ' : '') + upperFirst(word);
  });
  
  module.exports = startCase;
  

});
