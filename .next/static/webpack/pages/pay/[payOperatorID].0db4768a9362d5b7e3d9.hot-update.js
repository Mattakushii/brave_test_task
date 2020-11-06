webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/PaymentPageStyled.ts":
/*!*********************************************!*\
  !*** ./src/components/PaymentPageStyled.ts ***!
  \*********************************************/
/*! exports provided: PaymentContainer, PaymentForm, FormHeader, SubmitButton, ErrorMessage, OperationResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContainer", function() { return PaymentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForm", function() { return PaymentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeader", function() { return FormHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResult", function() { return OperationResult; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PaymentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__PaymentContainer",
  componentId: "sc-1h64qh5-0"
})(["width:980px;display:flex;flex-direction:column;align-items:center;@media screen and (max-width:479px){width:320px;}"]);
var PaymentForm = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "PaymentPageStyled__PaymentForm",
  componentId: "sc-1h64qh5-1"
})(["display:flex;flex-direction:column;@media screen and (max-width:479px){width:310px;}"]);
var FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__FormHeader",
  componentId: "sc-1h64qh5-2"
})(["width:100%;height:35px;font-size:28px;font-weight:bold;text-align:center;margin-top:30px;margin-bottom:30px;"]);
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "PaymentPageStyled__SubmitButton",
  componentId: "sc-1h64qh5-3"
})(["width:160px;height:40px;align-self:center;margin-top:10px;font-size:14px;font-weight:bold;border:none;background-color:#000000;color:#FFFFFF;border-radius:5px;transition:all 0.15s cubic-bezier(.25,.8,.25,1);&:disabled{background-color:#404040;color:#9e9e9e;border:1px solid rgba(210,0,0,.5);box-shadow:0 0 5px rgba(210,0,0,.5)}"]);
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__ErrorMessage",
  componentId: "sc-1h64qh5-4"
})(["  height:25px;color:#D30000;"]);
var OperationResult = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__OperationResult",
  componentId: "sc-1h64qh5-5"
})(["position:absolute;display:none;overflow:hidden;@media screen and (max-width:479px){height:40px;width:320px;}"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQudHMiXSwibmFtZXMiOlsiUGF5bWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlBheW1lbnRGb3JtIiwiZm9ybSIsIkZvcm1IZWFkZXIiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJFcnJvck1lc3NhZ2UiLCJPcGVyYXRpb25SZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBdEI7QUFZQSxJQUFNQyxXQUFXLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsNEZBQWpCO0FBU0EsSUFBTUMsVUFBVSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQUFoQjtBQVVBLElBQU1JLFlBQVksR0FBR0wseURBQU0sQ0FBQ00sTUFBVjtBQUFBO0FBQUE7QUFBQSwrVUFBbEI7QUFxQkEsSUFBTUMsWUFBWSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUFsQjtBQUtBLElBQU1PLGVBQWUsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvSEFBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS4wZGI0NzY4YTkzNjJkNWI3ZTNkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBQYXltZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA5ODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gICAgXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEwLDAsMCwuNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDIxMCwwLDAsLjUpXHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmAgXHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI0QzMDAwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVyYXRpb25SZXN1bHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KXtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgfVxyXG5cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=