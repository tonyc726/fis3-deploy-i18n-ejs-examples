define('node_modules/lodash/_stackClear', function(require, exports, module) {

  var ListCache = require('node_modules/lodash/_ListCache');
  
  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }
  
  module.exports = stackClear;
  

});
