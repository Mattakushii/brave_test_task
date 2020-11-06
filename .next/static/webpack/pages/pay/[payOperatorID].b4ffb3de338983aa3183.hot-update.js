webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/PaymentPageStyled.ts":
/*!*********************************************!*\
  !*** ./src/components/PaymentPageStyled.ts ***!
  \*********************************************/
/*! exports provided: PaymentContainer, PaymentForm, FormHeader, SubmitButton, ErrorMessage, OperationResult, PopupContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContainer", function() { return PaymentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForm", function() { return PaymentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeader", function() { return FormHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResult", function() { return OperationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupContainer", function() { return PopupContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PaymentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__PaymentContainer",
  componentId: "sc-1h64qh5-0"
})(["width:980px;display:flex;flex-direction:column;align-items:center;@media screen and (max-width:991px){width:760px;}@media screen and (max-width:767px){width:470px;}@media screen and (max-width:479px){width:320px;}"]);
var PaymentForm = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "PaymentPageStyled__PaymentForm",
  componentId: "sc-1h64qh5-1"
})(["width:760px;display:flex;flex-direction:column;@media screen and (max-width:767px){width:470px;}@media screen and (max-width:479px){width:310px;}"]);
var FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__FormHeader",
  componentId: "sc-1h64qh5-2"
})(["width:100%;height:35px;font-size:28px;font-weight:bold;text-align:center;margin-top:30px;margin-bottom:30px;"]);
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "PaymentPageStyled__SubmitButton",
  componentId: "sc-1h64qh5-3"
})(["width:160px;height:40px;align-self:center;margin-top:10px;font-size:14px;font-weight:bold;border:none;background-color:#000000;color:#FFFFFF;border-radius:5px;transition:all 1s cubic-bezier(.25,.8,.25,1);&:disabled{background-color:#404040;color:#9e9e9e;}"]);
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__ErrorMessage",
  componentId: "sc-1h64qh5-4"
})(["  height:25px;color:#D30000;"]);
var OperationResult = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__OperationResult",
  componentId: "sc-1h64qh5-5"
})(["display:block;width:300px;height:200px;background-color:white @media screen and (max-width:991px){height:40px;width:760px}@media screen and (max-width:767px){height:40px;width:470px;}@media screen and (max-width:479px){height:40px;width:320px;}"]);
var PopupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__PopupContainer",
  componentId: "sc-1h64qh5-6"
})(["position:absolute;top:0;left:0;width:100%;height:100vh;background-color:rgba(255,0,0,0.5);display:", ";justify-content:center;align-items:center;"], function (props) {
  return props.visible ? "flex" : "none";
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQudHMiXSwibmFtZXMiOlsiUGF5bWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlBheW1lbnRGb3JtIiwiZm9ybSIsIkZvcm1IZWFkZXIiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJFcnJvck1lc3NhZ2UiLCJPcGVyYXRpb25SZXN1bHQiLCJQb3B1cENvbnRhaW5lciIsInByb3BzIiwidmlzaWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTU8sSUFBTUEsZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNk5BQXRCO0FBb0JBLElBQU1DLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSx5SkFBakI7QUFjQSxJQUFNQyxVQUFVLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0hBQWhCO0FBVUEsSUFBTUksWUFBWSxHQUFHTCx5REFBTSxDQUFDTSxNQUFWO0FBQUE7QUFBQTtBQUFBLHVRQUFsQjtBQW1CQSxJQUFNQyxZQUFZLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0NBQWxCO0FBS0EsSUFBTU8sZUFBZSxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRQQUFyQjtBQXNCQSxJQUFNUSxjQUFjLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEpBT1osVUFBQVMsS0FBSztBQUFBLFNBQUdBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixNQUFoQixHQUF5QixNQUE1QjtBQUFBLENBUE8sQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5iNGZmYjNkZTMzODk4M2FhMzE4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYXltZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA5ODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICB3aWR0aDogNzYwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAgICB3aWR0aDogNDcwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KXtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXltZW50Rm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICAgd2lkdGg6IDc2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAgICB3aWR0aDogNDcwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KXtcclxuICAgICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybUhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxuICAgIFxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcclxuICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YCBcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiAjRDMwMDAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wZXJhdGlvblJlc3VsdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNzYwcHhcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDcwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KXtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9wdXBDb250YWluZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6ICR7cHJvcHM9PiBwcm9wcy52aXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==