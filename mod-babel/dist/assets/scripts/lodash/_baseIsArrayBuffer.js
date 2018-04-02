define('node_modules/lodash/_baseIsArrayBuffer', function(require, exports, module) {

  var baseGetTag = require('node_modules/lodash/_baseGetTag'),
      isObjectLike = require('node_modules/lodash/isObjectLike');
  
  var arrayBufferTag = '[object ArrayBuffer]';
  
  /**
   * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   */
  function baseIsArrayBuffer(value) {
    return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
  }
  
  module.exports = baseIsArrayBuffer;
  

});
