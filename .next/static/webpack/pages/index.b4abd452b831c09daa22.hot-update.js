webpackHotUpdate_N_E("pages/index",{

/***/ "./src/SETTINGS.js":
/*!*************************!*\
  !*** ./src/SETTINGS.js ***!
  \*************************/
/*! exports provided: SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
var SETTINGS = {
  URL: '192.168.0.4:3000'
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var _SETTINGS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SETTINGS */ "./src/SETTINGS.js");
/* harmony import */ var _components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OperatorsListStyled */ "./src/components/OperatorsListStyled.ts");
/* harmony import */ var _components_operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/operatorTileComponent/OperatorTile */ "./src/components/operatorTileComponent/OperatorTile.tsx");



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

  return __jsx(_components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_4__["ScrollBarContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_4__["Scrollbar"], {
    universal: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_components_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_4__["TileContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, operatorsList === null || operatorsList === void 0 ? void 0 : operatorsList.map(function (operator, index) {
    return __jsx(_components_operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
          return fetch("http://".concat(_SETTINGS__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"].URL, "/api/operators"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NFVFRJTkdTLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNFVFRJTkdTIiwiVVJMIiwiTWFpblBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJvcGVyYXRvcnNMaXN0Iiwic2V0T3BlcmF0b3JzTGlzdCIsIm1hcCIsIm9wZXJhdG9yIiwiaW5kZXgiLCJpZCIsIm9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yTGluayIsImltZ1VybCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxJQUFNQSxRQUFRLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQURlLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTRCO0FBQUE7O0FBQUEsTUFBMUJDLElBQTBCLFFBQTFCQSxJQUEwQjs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQ0QsSUFBRCxDQURUO0FBQUEsTUFDbENFLGFBRGtDO0FBQUEsTUFDbkJDLGdCQURtQjs7QUFHekMsU0FDSSxNQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQVcsYUFBUyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlELGFBRkosYUFFSUEsYUFGSix1QkFFSUEsYUFBYSxDQUFFRSxHQUFmLENBQW1CLFVBQUNDLFFBQUQsRUFBMkJDLEtBQTNCLEVBQTRDO0FBQzNELFdBQ0ksTUFBQyxzRkFBRDtBQUNJLFNBQUcsRUFBRUEsS0FEVDtBQUVJLFFBQUUsRUFBRUQsUUFBUSxDQUFDRSxFQUZqQjtBQUdJLFVBQUksRUFBRUYsUUFBUSxDQUFDRyxZQUhuQjtBQUlJLFVBQUksRUFBRUgsUUFBUSxDQUFDSSxZQUpuQjtBQUtJLFlBQU0sRUFBRUosUUFBUSxDQUFDSyxNQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFTSCxHQVZELENBRkosQ0FESixDQURKLENBREo7QUFxQkgsQ0F4QkQ7O0dBQU1YLFE7O0tBQUFBLFE7QUFpQ05BLFFBQVEsQ0FBQ1ksZUFBVCxpTUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTEMsS0FBSyxrQkFBV2Ysa0RBQVEsQ0FBQ0MsR0FBcEIsb0JBREE7O0FBQUE7QUFDakJlLGFBRGlCO0FBQUE7QUFBQSxpQkFFaUNBLEdBQUcsQ0FBQ0MsSUFBSixFQUZqQzs7QUFBQTtBQUVqQmQsY0FGaUI7QUFBQSwyQ0FHaEI7QUFBQ0EsZ0JBQUksRUFBRUE7QUFBUCxXQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNGFiZDQ1MmI4MzFjMDlkYWEyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVFRJTkdTID0ge1xyXG4gICAgVVJMOiAnMTkyLjE2OC4wLjQ6MzAwMCdcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtTRVRUSU5HU30gZnJvbSAnLi4vU0VUVElOR1MnO1xyXG5pbXBvcnQgeyBUaWxlQ29udGFpbmVyLCBTY3JvbGxCYXJDb250YWluZXIsIFNjcm9sbGJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL09wZXJhdG9yc0xpc3RTdHlsZWRcIjtcclxuaW1wb3J0IE9wZXJhdG9yVGlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9vcGVyYXRvclRpbGVDb21wb25lbnQvT3BlcmF0b3JUaWxlXCI7XHJcblxyXG5pbnRlcmZhY2UgTWFpblBhZ2VQcm9wcyB7XHJcbiAgICBkYXRhOiBPcGVyYXRvcnNMaXN0W10gfCB1bmRlZmluZWRcclxufVxyXG5cclxuY29uc3QgTWFpblBhZ2UgPSAoe2RhdGF9IDogTWFpblBhZ2VQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW29wZXJhdG9yc0xpc3QsIHNldE9wZXJhdG9yc0xpc3RdID0gdXNlU3RhdGUoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2Nyb2xsQmFyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8U2Nyb2xsYmFyIHVuaXZlcnNhbD5cclxuICAgICAgICAgICAgICAgIDxUaWxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yc0xpc3Q/Lm1hcCgob3BlcmF0b3IgOiBPcGVyYXRvcnNMaXN0LCBpbmRleDogbnVtYmVyKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVyYXRvclRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtvcGVyYXRvci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvcGVyYXRvci5vcGVyYXRvck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17b3BlcmF0b3Iub3BlcmF0b3JMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybD17b3BlcmF0b3IuaW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1RpbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsYmFyPlxyXG4gICAgICAgIDwvU2Nyb2xsQmFyQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdG9yc0xpc3Qge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JMaW5rOiBzdHJpbmcsXHJcbiAgICBpbWdVcmw/OiBzdHJpbmdcclxufVxyXG5cclxuTWFpblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8ke1NFVFRJTkdTLlVSTH0vYXBpL29wZXJhdG9yc2ApO1xyXG4gICAgY29uc3QgZGF0YSA6IEFycmF5PE9wZXJhdG9yc0xpc3Q+IHwgdW5kZWZpbmVkICA9IGF3YWl0ICByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHtkYXRhOiBkYXRhfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=