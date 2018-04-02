define('node_modules/lodash/_isMaskable', function(require, exports, module) {

  var coreJsData = require('node_modules/lodash/_coreJsData'),
      isFunction = require('node_modules/lodash/isFunction'),
      stubFalse = require('node_modules/lodash/stubFalse');
  
  /**
   * Checks if `func` is capable of being masked.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
   */
  var isMaskable = coreJsData ? isFunction : stubFalse;
  
  module.exports = isMaskable;
  

});
