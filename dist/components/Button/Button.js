'use strict';

var React = require('react');

var Button = function (_a) {
  var label = _a.label;
  return React.createElement("button", {
    className: "rounded-md p-2 bg-primary"
  }, label);
};

module.exports = Button;
