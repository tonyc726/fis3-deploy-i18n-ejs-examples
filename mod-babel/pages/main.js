import $ from 'jquery';
import 'jquery-validation';
import moment from 'moment';
import isArray from 'lodash/isArray';

// @see https://jqueryvalidation.org/validate/
$('#validate_test').validate({
  rules: {
    username: {
      required: true,
      // Using the normalizer to trim the value of the element
      // before validating it.
      //
      // The value of `this` inside the `normalizer` is the corresponding
      // DOMElement. In this example, `this` references the `username` element.
      normalizer(value) {
        return $.trim(value);
      },
    },
  },
  submitHandler(form) {
    console.info('emit submitHandler event');
    console.log(form);
    // ajax
    return false;
  },
});
$('body').append(`<p>jQuery version: ${$.fn.jquery}</p>`);
$('body').append(`<p>moment now: ${moment().format()}</p>`);

const mainLocalVar = 'main local text';

export default (callback) => {
  console.info('main.js > export default');
  if ($.isFunction(callback)) {
    callback(mainLocalVar);
  }

  console.log(isArray([]));
};
