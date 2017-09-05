define('node_modules/jquery-validation/dist/localization/methods_es_CL', function(require, exports, module) {

  (function( factory ) {
  	if ( typeof define === "function" && define.amd ) {
  		define( ["jquery", "../jquery.validate"], factory );
  	} else if (typeof module === "object" && module.exports) {
  		module.exports = factory( require("node_modules/jquery/dist/jquery") );
  	} else {
  		factory( jQuery );
  	}
  }(function( $ ) {
  
  /*
   * Localized default methods for the jQuery validation plugin.
   * Locale: ES_CL
   */
  $.extend( $.validator.methods, {
  	date: function( value, element ) {
  		return this.optional( element ) || /^\d\d?\-\d\d?\-\d\d\d?\d?$/.test( value );
  	},
  	number: function( value, element ) {
  		return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test( value );
  	}
  } );
  return $;
  }));

});
