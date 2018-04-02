define('node_modules/lodash/_baseCreate', function(require, exports, module) {

  var isObject = require('node_modules/lodash/isObject');
  
  /** Built-in value references. */
  var objectCreate = Object.create;
  
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());
  
  module.exports = baseCreate;
  

});
