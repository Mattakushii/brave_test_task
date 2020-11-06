webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/inputFormComponent/InputFormStyled.ts":
/*!**************************************************************!*\
  !*** ./src/components/inputFormComponent/InputFormStyled.ts ***!
  \**************************************************************/
/*! exports provided: InputBlock, Label, Input, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

;
var InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "InputFormStyled__InputBlock",
  componentId: "sc-1dzklt4-0"
})(["display:flex;flex-direction:column;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label.withConfig({
  displayName: "InputFormStyled__Label",
  componentId: "sc-1dzklt4-1"
})(["font-size:18px;font-weight:500;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "InputFormStyled__Input",
  componentId: "sc-1dzklt4-2"
})(["width:200px;padding:10px 25px;margin-top:10px;font-size:18px;border:none;outline:none;border-radius:5px;transition:0.5s;color:", ";box-shadow:", ""], function (props) {
  return props.valid ? "#000000" : "#D30000";
}, function (props) {
  return props.valid ? "none" : "inset 0 0 5px rgba(211,0,0,0.5)";
});
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "InputFormStyled__ErrorMessage",
  componentId: "sc-1dzklt4-3"
})(["height:40px;color:#D30000;@media screen and (max-width:479px){margin-top:15px;width:320px;}"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVN0eWxlZC50cyJdLCJuYW1lcyI6WyJJbnB1dEJsb2NrIiwic3R5bGVkIiwiZGl2IiwiTGFiZWwiLCJsYWJlbCIsIklucHV0IiwiaW5wdXQiLCJwcm9wcyIsInZhbGlkIiwiRXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQztBQUVNLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBaEI7QUFLQSxJQUFNQyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEtBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQVg7QUFLQSxJQUFNQyxLQUFLLEdBQUdKLHlEQUFNLENBQUNLLEtBQVY7QUFBQTtBQUFBO0FBQUEsMkpBU0wsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLFNBQWQsR0FBMEIsU0FBOUI7QUFBQSxDQVRBLEVBVUEsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLE1BQWQsR0FBc0IsaUNBQTFCO0FBQUEsQ0FWTCxDQUFYO0FBYUEsSUFBTUMsWUFBWSxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1HQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjBlNWE2MmY1YmFjZThmY2VmNjdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICAgIHJlYWRvbmx5IHZhbGlkICA6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRCbG9jayA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dDxUaXRsZVByb3BzPmBcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnZhbGlkID8gXCIjMDAwMDAwXCIgOiBcIiNEMzAwMDBcIn07XHJcbiAgICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnZhbGlkID8gXCJub25lXCI6IFwiaW5zZXQgMCAwIDVweCByZ2JhKDIxMSwwLDAsMC41KVwifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjRDMwMDAwO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=