define('node_modules/lodash/_wrapperClone', function(require, exports, module) {

  var LazyWrapper = require('node_modules/lodash/_LazyWrapper'),
      LodashWrapper = require('node_modules/lodash/_LodashWrapper'),
      copyArray = require('node_modules/lodash/_copyArray');
  
  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */
  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__  = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }
  
  module.exports = wrapperClone;
  

});
