define('node_modules/lodash/_baseIsRegExp', function(require, exports, module) {

  var baseGetTag = require('node_modules/lodash/_baseGetTag'),
      isObjectLike = require('node_modules/lodash/isObjectLike');
  
  /** `Object#toString` result references. */
  var regexpTag = '[object RegExp]';
  
  /**
   * The base implementation of `_.isRegExp` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   */
  function baseIsRegExp(value) {
    return isObjectLike(value) && baseGetTag(value) == regexpTag;
  }
  
  module.exports = baseIsRegExp;
  

});
