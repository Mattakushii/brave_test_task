webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/popupComponent/PopupStyled.ts":
/*!******************************************************!*\
  !*** ./src/components/popupComponent/PopupStyled.ts ***!
  \******************************************************/
/*! exports provided: OperationResult, PopupContainer, Preloader, Result, PreloaderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResult", function() { return OperationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupContainer", function() { return PopupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return Preloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
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
var Result = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__Result",
  componentId: "sc-1x2p9k2-3"
})([""]);
var PreloaderText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PopupStyled__PreloaderText",
  componentId: "sc-1x2p9k2-4"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBTdHlsZWQudHMiXSwibmFtZXMiOlsiYW5pbWF0aW9uIiwia2V5ZnJhbWVzIiwiT3BlcmF0aW9uUmVzdWx0Iiwic3R5bGVkIiwiZGl2IiwiUG9wdXBDb250YWluZXIiLCJwcm9wcyIsInZpc2libGUiLCJQcmVsb2FkZXIiLCJzcGFuIiwiUmVzdWx0IiwiUHJlbG9hZGVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSxJQUFNQSxTQUFTLEdBQUdDLG1FQUFILGlIQUFmO0FBaUJPLElBQU1DLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyTUFBckI7QUFhQSxJQUFNQyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbU9BVVosVUFBQUUsS0FBSztBQUFBLFNBQUdBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixHQUFoQixHQUFzQixHQUF6QjtBQUFBLENBVk8sRUFXVCxVQUFBRCxLQUFLO0FBQUEsU0FBR0EsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLFNBQWhCLEdBQTRCLFFBQS9CO0FBQUEsQ0FYSSxDQUFwQjtBQWVBLElBQU1DLFNBQVMsR0FBR0wseURBQU0sQ0FBQ00sSUFBVjtBQUFBO0FBQUE7QUFBQSwySEFNTFQsU0FOSyxDQUFmO0FBU0EsSUFBTVUsTUFBTSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQVo7QUFJQSxJQUFNTyxhQUFhLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uMjYyNDk5NWI0MWIxN2Q1YjI0ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlYWRvbmx5IHZpc2libGU6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgYW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgNTAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwwKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3BlcmF0aW9uUmVzdWx0ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGN1YmljLWJlemllciguNDgsMCwwLDEuMDEpKTtcclxuICAgIFxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9wdXBDb250YWluZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogJHtwcm9wcz0+IHByb3BzLnZpc2libGUgPyBcIjFcIiA6IFwiMFwifTtcclxuICAgIHZpc2liaWxpdHk6ICR7cHJvcHM9PiBwcm9wcy52aXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGFuaW1hdGlvbjogJHthbmltYXRpb259IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9