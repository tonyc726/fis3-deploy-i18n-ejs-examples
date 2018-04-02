define('node_modules/lodash/_baseMerge', function(require, exports, module) {

  var Stack = require('node_modules/lodash/_Stack'),
      assignMergeValue = require('node_modules/lodash/_assignMergeValue'),
      baseFor = require('node_modules/lodash/_baseFor'),
      baseMergeDeep = require('node_modules/lodash/_baseMergeDeep'),
      isObject = require('node_modules/lodash/isObject'),
      keysIn = require('node_modules/lodash/keysIn'),
      safeGet = require('node_modules/lodash/_safeGet');
  
  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      if (isObject(srcValue)) {
        stack || (stack = new Stack);
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;
  
        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  
  module.exports = baseMerge;
  

});
