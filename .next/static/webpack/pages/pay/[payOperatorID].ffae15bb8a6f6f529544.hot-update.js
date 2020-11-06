webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

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
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\popupComponent\\Popup.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Popup = function Popup(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      isSuccess = _useState[0],
      setIsSuccess = _useState[1];

  return __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PopupContainer"], {
    visible: props.popupFlag,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["OperationResult"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["Preloader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, props.message)));
};

_s(Popup, "jeMSf3Q9VgygWPg9nNNNLialuVM=");

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
/*! exports provided: OperationResult, PopupContainer, Preloader, PreloaderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResult", function() { return OperationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupContainer", function() { return PopupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return Preloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderText", function() { return PreloaderText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var animation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([""]);
var OperationResult = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__OperationResult",
  componentId: "sc-1x2p9k2-0"
})(["display:block;width:300px;height:200px;background-color:white;transition:all 1s cubic-bezier(.25,.8,.25,1);"]);
var PopupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__PopupContainer",
  componentId: "sc-1x2p9k2-1"
})(["position:absolute;top:0;left:0;width:100%;height:100vh;background-color:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;opacity:", ";visibility:", ";transition:all .8s cubic-bezier(.25,.8,.25,1);"], function (props) {
  return props.visible ? "1" : "0";
}, function (props) {
  return props.visible ? "visible" : "hidden";
});
var Preloader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "PopupStyled__Preloader",
  componentId: "sc-1x2p9k2-2"
})([""]);
var PreloaderText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__PreloaderText",
  componentId: "sc-1x2p9k2-3"
})([""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3B1cENvbXBvbmVudC9Qb3B1cFN0eWxlZC50cyJdLCJuYW1lcyI6WyJQb3B1cCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJwb3B1cEZsYWciLCJtZXNzYWdlIiwiYW5pbWF0aW9uIiwia2V5ZnJhbWVzIiwiT3BlcmF0aW9uUmVzdWx0Iiwic3R5bGVkIiwiZGl2IiwiUG9wdXBDb250YWluZXIiLCJ2aXNpYmxlIiwiUHJlbG9hZGVyIiwic3BhbiIsIlByZWxvYWRlclRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBc0I7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsRUFEVjtBQUFBLE1BQ3pCQyxTQUR5QjtBQUFBLE1BQ2RDLFlBRGM7O0FBR2hDLFNBQ0ksTUFBQywyREFBRDtBQUFnQixXQUFPLEVBQUVILEtBQUssQ0FBQ0ksU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNSixLQUFLLENBQUNLLE9BQVosQ0FGSixDQURKLENBREo7QUFRSCxDQVhEOztHQUFNTixLOztLQUFBQSxLO0FBYVNBLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEsSUFBTU8sU0FBUyxHQUFHQyxtRUFBSCxNQUFmO0FBSU8sSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1IQUFyQjtBQVFBLElBQU1DLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtT0FVWixVQUFBVixLQUFLO0FBQUEsU0FBR0EsS0FBSyxDQUFDWSxPQUFOLEdBQWdCLEdBQWhCLEdBQXNCLEdBQXpCO0FBQUEsQ0FWTyxFQVdULFVBQUFaLEtBQUs7QUFBQSxTQUFHQSxLQUFLLENBQUNZLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsUUFBL0I7QUFBQSxDQVhJLENBQXBCO0FBZUEsSUFBTUMsU0FBUyxHQUFHSix5REFBTSxDQUFDSyxJQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWY7QUFJQSxJQUFNQyxhQUFhLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5mZmFlMTViYjhhNmY2ZjUyOTU0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRpb25SZXN1bHQsIFBvcHVwQ29udGFpbmVyLCBQcmVsb2FkZXIsIFByZWxvYWRlclRleHR9IGZyb20gXCIuL1BvcHVwU3R5bGVkXCI7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQb3B1cFByb3BzIHtcclxuICAgIHBvcHVwRmxhZzogYm9vbGVhbixcclxuICAgIG1lc3NhZ2U6IHN0cmluZyxcclxuICAgIG9wZXJhdGlvblJlc3VsdDogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBQb3B1cCA9IChwcm9wczpQb3B1cFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNTdWNjZXNzLCBzZXRJc1N1Y2Nlc3NdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UG9wdXBDb250YWluZXIgdmlzaWJsZT17cHJvcHMucG9wdXBGbGFnfT5cclxuICAgICAgICAgICAgPE9wZXJhdGlvblJlc3VsdD5cclxuICAgICAgICAgICAgICAgIDxQcmVsb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57cHJvcHMubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9PcGVyYXRpb25SZXN1bHQ+XHJcbiAgICAgICAgPC9Qb3B1cENvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXAiLCJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IGFuaW1hdGlvbiA9IGtleWZyYW1lc2BcclxuICAgIFxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3BlcmF0aW9uUmVzdWx0ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9wdXBDb250YWluZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogJHtwcm9wcz0+IHByb3BzLnZpc2libGUgPyBcIjFcIiA6IFwiMFwifTtcclxuICAgIHZpc2liaWxpdHk6ICR7cHJvcHM9PiBwcm9wcy52aXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJUZXh0ID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9