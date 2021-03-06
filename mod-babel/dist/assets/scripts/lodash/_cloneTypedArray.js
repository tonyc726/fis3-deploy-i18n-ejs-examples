define('node_modules/lodash/_cloneTypedArray', function(require, exports, module) {

  var cloneArrayBuffer = require('node_modules/lodash/_cloneArrayBuffer');
  
  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  
  module.exports = cloneTypedArray;
  

});
