define('node_modules/lodash/_setWrapToString', function(require, exports, module) {

  var getWrapDetails = require('node_modules/lodash/_getWrapDetails'),
      insertWrapDetails = require('node_modules/lodash/_insertWrapDetails'),
      setToString = require('node_modules/lodash/_setToString'),
      updateWrapDetails = require('node_modules/lodash/_updateWrapDetails');
  
  /**
   * Sets the `toString` method of `wrapper` to mimic the source of `reference`
   * with wrapper details in a comment at the top of the source body.
   *
   * @private
   * @param {Function} wrapper The function to modify.
   * @param {Function} reference The reference function.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Function} Returns `wrapper`.
   */
  function setWrapToString(wrapper, reference, bitmask) {
    var source = (reference + '');
    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
  }
  
  module.exports = setWrapToString;
  

});
