webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/PaymentPageStyled.ts":
/*!*********************************************!*\
  !*** ./src/components/PaymentPageStyled.ts ***!
  \*********************************************/
/*! exports provided: PaymentContainer, PaymentForm, FormHeader, SubmitButton, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContainer", function() { return PaymentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForm", function() { return PaymentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeader", function() { return FormHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
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

/***/ }),

/***/ "./src/components/popupComponent/Popup.tsx":
/*!*************************************************!*\
  !*** ./src/components/popupComponent/Popup.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _PopupStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupStyled */ "./src/components/popupComponent/PopupStyled.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\popupComponent\\Popup.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Popup = function Popup(props) {
  return __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PopupContainer"], {
    visible: props.popupFlag,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["OperationResult"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing."));
};

_c = Popup;
/* harmony default export */ __webpack_exports__["default"] = (Popup);

var _c;

$RefreshReg$(_c, "Popup");

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

/***/ }),

/***/ "./src/components/popupComponent/PopupStyled.ts":
/*!******************************************************!*\
  !*** ./src/components/popupComponent/PopupStyled.ts ***!
  \******************************************************/
/*! exports provided: OperationResult, PopupContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResult", function() { return OperationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupContainer", function() { return PopupContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var OperationResult = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__OperationResult",
  componentId: "sc-1x2p9k2-0"
})(["display:block;width:300px;height:200px;background-color:white;@media screen and (max-width:991px){height:40px;width:760px}@media screen and (max-width:767px){height:40px;width:470px;}@media screen and (max-width:479px){height:40px;width:320px;}"]);
var PopupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__PopupContainer",
  componentId: "sc-1x2p9k2-1"
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BvcHVwQ29tcG9uZW50L1BvcHVwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBTdHlsZWQudHMiXSwibmFtZXMiOlsiUGF5bWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlBheW1lbnRGb3JtIiwiZm9ybSIsIkZvcm1IZWFkZXIiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJFcnJvck1lc3NhZ2UiLCJQb3B1cCIsInByb3BzIiwicG9wdXBGbGFnIiwiT3BlcmF0aW9uUmVzdWx0IiwiUG9wdXBDb250YWluZXIiLCJ2aXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZOQUF0QjtBQW9CQSxJQUFNQyxXQUFXLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEseUpBQWpCO0FBY0EsSUFBTUMsVUFBVSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQUFoQjtBQVVBLElBQU1JLFlBQVksR0FBR0wseURBQU0sQ0FBQ00sTUFBVjtBQUFBO0FBQUE7QUFBQSx1UUFBbEI7QUFtQkEsSUFBTUMsWUFBWSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRVA7QUFDQTs7QUFNQSxJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQXNCO0FBQ2hDLFNBQ0ksTUFBQywyREFBRDtBQUFnQixXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0REFESixDQURKO0FBS0gsQ0FORDs7S0FBTUYsSztBQVFTQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNTyxJQUFNRyxlQUFlLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFBBQXJCO0FBc0JBLElBQU1XLGNBQWMsR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwSkFPWixVQUFBUSxLQUFLO0FBQUEsU0FBR0EsS0FBSyxDQUFDSSxPQUFOLEdBQWdCLE1BQWhCLEdBQXlCLE1BQTVCO0FBQUEsQ0FQTyxDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjVjZWE4OTY4ZjNmY2M0M2FmZTBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDk4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIHdpZHRoOiA3NjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgICAgIHdpZHRoOiA0NzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgIH1cclxuICAgIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICB3aWR0aDogNzYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgICAgIHdpZHRoOiA0NzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gICAgXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgIFxyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICNEMzAwMDA7XHJcbmA7XHJcbiIsImltcG9ydCB7T3BlcmF0aW9uUmVzdWx0LCBQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4vUG9wdXBTdHlsZWRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFBvcHVwUHJvcHMge1xyXG4gICAgcG9wdXBGbGFnOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IFBvcHVwID0gKHByb3BzOlBvcHVwUHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UG9wdXBDb250YWluZXIgdmlzaWJsZT17cHJvcHMucG9wdXBGbGFnfT5cclxuICAgICAgICAgICAgPE9wZXJhdGlvblJlc3VsdD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcuPC9PcGVyYXRpb25SZXN1bHQ+XHJcbiAgICAgICAgPC9Qb3B1cENvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlYWRvbmx5IHZpc2libGU6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE9wZXJhdGlvblJlc3VsdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDc2MHB4XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBvcHVwQ29udGFpbmVyID0gc3R5bGVkLmRpdjxQcm9wcz5gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiAke3Byb3BzPT4gcHJvcHMudmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=