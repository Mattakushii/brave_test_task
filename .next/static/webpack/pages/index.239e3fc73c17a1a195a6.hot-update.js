webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/OperatorsListStyled.ts":
/*!***********************************************!*\
  !*** ./src/components/OperatorsListStyled.ts ***!
  \***********************************************/
/*! exports provided: TileContainer, Scrollbar, ScrollBarContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileContainer", function() { return TileContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return Scrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBarContainer", function() { return ScrollBarContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);


var TileContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "OperatorsListStyled__TileContainer",
  componentId: "sc-7r643l-0"
})(["display:flex;flex-wrap:wrap;padding:15px;@media all and(max-width:479px){}"]);
var Scrollbar = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"]).withConfig({
  displayName: "OperatorsListStyled__Scrollbar",
  componentId: "sc-7r643l-1"
})(["display:flex;justify-content:center;"]);
var ScrollBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "OperatorsListStyled__ScrollBarContainer",
  componentId: "sc-7r643l-2"
})(["width:980px;@media all and (max-width:1024px){width:100%;}@media all and (max-width:991px){width:660px;}@media all and (max-width:767px){width:100%;}"]);

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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OperatorsListStyled */ "./src/components/OperatorsListStyled.ts");
/* harmony import */ var _components_operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/operatorTileComponent/OperatorTile */ "./src/components/operatorTileComponent/OperatorTile.tsx");



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var MainPage = function MainPage(_ref) {
  _s();

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data),
      operatorsList = _useState[0],
      setOperatorsList = _useState[1];

  return __jsx(_components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__["ScrollBarContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"], {
    universal: true,
    autoHideTimeout: 1000,
    autoHideDuration: 200,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__["TileContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, operatorsList === null || operatorsList === void 0 ? void 0 : operatorsList.map(function (operator, index) {
    return __jsx(_components_operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      id: operator.id,
      name: operator.operatorName,
      link: operator.operatorLink,
      imgUrl: operator.imgUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }
    });
  }))));
};

_s(MainPage, "1OzzvyZ8YRNtspudo72OQFNenqA=");

_c = MainPage;
MainPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('http://localhost:3000/api/operators');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (MainPage);

var _c;

$RefreshReg$(_c, "MainPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3BlcmF0b3JzTGlzdFN0eWxlZC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJUaWxlQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2Nyb2xsYmFyIiwiU2Nyb2xsYmFycyIsIlNjcm9sbEJhckNvbnRhaW5lciIsIk1haW5QYWdlIiwiZGF0YSIsInVzZVN0YXRlIiwib3BlcmF0b3JzTGlzdCIsInNldE9wZXJhdG9yc0xpc3QiLCJtYXAiLCJvcGVyYXRvciIsImluZGV4IiwiaWQiLCJvcGVyYXRvck5hbWUiLCJvcGVyYXRvckxpbmsiLCJpbWdVcmwiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0ZBQW5CO0FBVUEsSUFBTUMsU0FBUyxHQUFHRixpRUFBTSxDQUFDRyxrRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRDQUFmO0FBS0EsSUFBTUMsa0JBQWtCLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkpBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQO0FBQ0E7QUFDQTs7QUFPQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QjtBQUFBOztBQUFBLE1BQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUNELElBQUQsQ0FEVDtBQUFBLE1BQ2xDRSxhQURrQztBQUFBLE1BQ25CQyxnQkFEbUI7O0FBR3pDLFNBQ0ksTUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5RUFBRDtBQUFXLGFBQVMsTUFBcEI7QUFBcUIsbUJBQWUsRUFBRSxJQUF0QztBQUE0QyxvQkFBZ0IsRUFBRSxHQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlELGFBRkosYUFFSUEsYUFGSix1QkFFSUEsYUFBYSxDQUFFRSxHQUFmLENBQW1CLFVBQUNDLFFBQUQsRUFBMkJDLEtBQTNCLEVBQTRDO0FBQzNELFdBQ0ksTUFBQyxzRkFBRDtBQUNJLFNBQUcsRUFBRUEsS0FEVDtBQUVJLFFBQUUsRUFBRUQsUUFBUSxDQUFDRSxFQUZqQjtBQUdJLFVBQUksRUFBRUYsUUFBUSxDQUFDRyxZQUhuQjtBQUlJLFVBQUksRUFBRUgsUUFBUSxDQUFDSSxZQUpuQjtBQUtJLFlBQU0sRUFBRUosUUFBUSxDQUFDSyxNQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFTSCxHQVZELENBRkosQ0FESixDQURKLENBREo7QUFxQkgsQ0F4QkQ7O0dBQU1YLFE7O0tBQUFBLFE7QUFpQ05BLFFBQVEsQ0FBQ1ksZUFBVCxpTUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTEMsS0FBSyxDQUFDLHFDQUFELENBREE7O0FBQUE7QUFDakJDLGFBRGlCO0FBQUE7QUFBQSxpQkFFaUNBLEdBQUcsQ0FBQ0MsSUFBSixFQUZqQzs7QUFBQTtBQUVqQmQsY0FGaUI7QUFBQSwyQ0FHaEI7QUFBQ0EsZ0JBQUksRUFBRUE7QUFBUCxXQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMzllM2ZjNzNjMTdhMWExOTVhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7U2Nyb2xsYmFyc30gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnXHJcblxyXG5leHBvcnQgY29uc3QgVGlsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIGFsbCBhbmQobWF4LXdpZHRoOiA0NzlweCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbGJhciA9IHN0eWxlZChTY3JvbGxiYXJzKWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTY3JvbGxCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6OTgwcHg7XHJcbiAgICBcclxuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICB3aWR0aDogNjYwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGlsZUNvbnRhaW5lciwgU2Nyb2xsQmFyQ29udGFpbmVyLCBTY3JvbGxiYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PcGVyYXRvcnNMaXN0U3R5bGVkXCI7XHJcbmltcG9ydCBPcGVyYXRvclRpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3BlcmF0b3JUaWxlQ29tcG9uZW50L09wZXJhdG9yVGlsZVwiO1xyXG5pbXBvcnQgU2Nyb2xsYmFycyBmcm9tIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIjtcclxuXHJcbmludGVyZmFjZSBNYWluUGFnZVByb3BzIHtcclxuICAgIGRhdGE6IE9wZXJhdG9yc0xpc3RbXSB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBNYWluUGFnZSA9ICh7ZGF0YX0gOiBNYWluUGFnZVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbb3BlcmF0b3JzTGlzdCwgc2V0T3BlcmF0b3JzTGlzdF0gPSB1c2VTdGF0ZShkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTY3JvbGxCYXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxTY3JvbGxiYXIgdW5pdmVyc2FsIGF1dG9IaWRlVGltZW91dD17MTAwMH0gYXV0b0hpZGVEdXJhdGlvbj17MjAwfT5cclxuICAgICAgICAgICAgICAgIDxUaWxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yc0xpc3Q/Lm1hcCgob3BlcmF0b3IgOiBPcGVyYXRvcnNMaXN0LCBpbmRleDogbnVtYmVyKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVyYXRvclRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtvcGVyYXRvci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvcGVyYXRvci5vcGVyYXRvck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17b3BlcmF0b3Iub3BlcmF0b3JMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybD17b3BlcmF0b3IuaW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1RpbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsYmFyPlxyXG4gICAgICAgIDwvU2Nyb2xsQmFyQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdG9yc0xpc3Qge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JMaW5rOiBzdHJpbmcsXHJcbiAgICBpbWdVcmw/OiBzdHJpbmdcclxufVxyXG5cclxuTWFpblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzJyk7XHJcbiAgICBjb25zdCBkYXRhIDogQXJyYXk8T3BlcmF0b3JzTGlzdD4gfCB1bmRlZmluZWQgID0gYXdhaXQgIHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge2RhdGE6IGRhdGF9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==