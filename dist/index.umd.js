(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@onejuice/juice-ui"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    var Button = function (_a) {
      var label = _a.label,
        children = _a.children;
      return React.createElement("button", null, "\uBB58\uBCF4\uC2DC\uB098\uC5FC", label, children);
    };

    exports.Button = Button;

}));
