(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@onejuice/juice-ui"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    var Button = function () {
      return React.createElement("button", null, " \uBC84\uD2BC \uD14C\uC2A4\uD2B8\uC784\uB2F9 ");
    };

    exports.Button = Button;

}));
