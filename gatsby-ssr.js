"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents;

  setHeadComponents([
    _react.default.createElement('script', {
      type: "text/javascript",
      src: "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js",
      async: true,
      key: "trustpilot-widget"
    })
  ]);
};

exports.onRenderBody = onRenderBody;

var React = require("react")
