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
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\popupComponent\\Popup.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Popup = function Popup(props) {
  console.log(props.operationResult);
  return __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PopupContainer"], {
    visible: props.popupFlag,
    result: props.operationResult,
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
  }), __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PreloaderText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, props.message)));
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
/*! exports provided: OperationResult, PopupContainer, Preloader, PreloaderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResult", function() { return OperationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupContainer", function() { return PopupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return Preloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderText", function() { return PreloaderText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var animation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:scale(1,1);opacity:1;}50%{transform:scale(0,0);opacity:0}100%{transform:scale(1,1);opacity:1;}"]);
var OperationResult = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__OperationResult",
  componentId: "sc-1x2p9k2-0"
})(["width:300px;height:200px;background-color:white;border-radius:5px;display:flex;flex-direction:column;justify-content:space-around;align-items:center;transition:all 1s cubic-bezier(.48,0,0,1.01));"]);
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
})(["display:block;width:80px;height:80px;border-radius:50%;background-color:#000000;animation:", " 1s linear infinite;"], animation);
var PreloaderText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__PreloaderText",
  componentId: "sc-1x2p9k2-3"
})(["font-size:18px;font-weight:500;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3B1cENvbXBvbmVudC9Qb3B1cFN0eWxlZC50cyJdLCJuYW1lcyI6WyJQb3B1cCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm9wZXJhdGlvblJlc3VsdCIsInBvcHVwRmxhZyIsIm1lc3NhZ2UiLCJhbmltYXRpb24iLCJrZXlmcmFtZXMiLCJPcGVyYXRpb25SZXN1bHQiLCJzdHlsZWQiLCJkaXYiLCJQb3B1cENvbnRhaW5lciIsInZpc2libGUiLCJQcmVsb2FkZXIiLCJzcGFuIiwiUHJlbG9hZGVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFRQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQXNCO0FBRWhDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxlQUFsQjtBQUNBLFNBQ0ksTUFBQywyREFBRDtBQUFnQixXQUFPLEVBQUVILEtBQUssQ0FBQ0ksU0FBL0I7QUFBMEMsVUFBTSxFQUFFSixLQUFLLENBQUNHLGVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUdJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQkgsS0FBSyxDQUFDSyxPQUF0QixDQUhKLENBREosQ0FESjtBQVNILENBWkQ7O0tBQU1OLEs7QUFjU0Esb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxJQUFNTyxTQUFTLEdBQUdDLG1FQUFILGlIQUFmO0FBaUJPLElBQU1DLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyTUFBckI7QUFhQSxJQUFNQyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbU9BVVosVUFBQVYsS0FBSztBQUFBLFNBQUdBLEtBQUssQ0FBQ1ksT0FBTixHQUFnQixHQUFoQixHQUFzQixHQUF6QjtBQUFBLENBVk8sRUFXVCxVQUFBWixLQUFLO0FBQUEsU0FBR0EsS0FBSyxDQUFDWSxPQUFOLEdBQWdCLFNBQWhCLEdBQTRCLFFBQS9CO0FBQUEsQ0FYSSxDQUFwQjtBQWVBLElBQU1DLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtBQUFBO0FBQUE7QUFBQSwySEFNTFIsU0FOSyxDQUFmO0FBU0EsSUFBTVMsYUFBYSxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjkwNTAwNTYzYjFjZjEwYzI1NzZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdGlvblJlc3VsdCwgUG9wdXBDb250YWluZXIsIFByZWxvYWRlciwgUHJlbG9hZGVyVGV4dH0gZnJvbSBcIi4vUG9wdXBTdHlsZWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFBvcHVwUHJvcHMge1xyXG4gICAgcG9wdXBGbGFnOiBib29sZWFuLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb3BlcmF0aW9uUmVzdWx0OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IFBvcHVwID0gKHByb3BzOlBvcHVwUHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocHJvcHMub3BlcmF0aW9uUmVzdWx0KVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQb3B1cENvbnRhaW5lciB2aXNpYmxlPXtwcm9wcy5wb3B1cEZsYWd9IHJlc3VsdD17cHJvcHMub3BlcmF0aW9uUmVzdWx0fT5cclxuICAgICAgICAgICAgPE9wZXJhdGlvblJlc3VsdD5cclxuICAgICAgICAgICAgICAgIDxQcmVsb2FkZXIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcmVsb2FkZXJUZXh0Pntwcm9wcy5tZXNzYWdlfTwvUHJlbG9hZGVyVGV4dD5cclxuICAgICAgICAgICAgPC9PcGVyYXRpb25SZXN1bHQ+XHJcbiAgICAgICAgPC9Qb3B1cENvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXAiLCJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuLFxyXG4gICAgcmVhZG9ubHkgcmVzdWx0OiBib29sZWFuLFxyXG59XHJcblxyXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVyYXRpb25SZXN1bHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKC40OCwwLDAsMS4wMSkpO1xyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3B1cENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAke3Byb3BzPT4gcHJvcHMudmlzaWJsZSA/IFwiMVwiIDogXCIwXCJ9O1xyXG4gICAgdmlzaWJpbGl0eTogJHtwcm9wcz0+IHByb3BzLnZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVsb2FkZXIgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gMXMgbGluZWFyIGluZmluaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZWxvYWRlclRleHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==