define('node_modules/process/index', function(require, exports, module) {

  var global = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
  // for now just expose the builtin process global from node.js
  module.exports = global.process;
  

});
