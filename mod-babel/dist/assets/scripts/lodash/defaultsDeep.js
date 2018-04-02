define('node_modules/lodash/defaultsDeep', function(require, exports, module) {

  var apply = require('node_modules/lodash/_apply'),
      baseRest = require('node_modules/lodash/_baseRest'),
      customDefaultsMerge = require('node_modules/lodash/_customDefaultsMerge'),
      mergeWith = require('node_modules/lodash/mergeWith');
  
  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaults
   * @example
   *
   * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
   * // => { 'a': { 'b': 2, 'c': 3 } }
   */
  var defaultsDeep = baseRest(function(args) {
    args.push(undefined, customDefaultsMerge);
    return apply(mergeWith, undefined, args);
  });
  
  module.exports = defaultsDeep;
  

});
