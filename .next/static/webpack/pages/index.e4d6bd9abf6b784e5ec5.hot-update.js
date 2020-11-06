webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluUGFnZSIsImRhdGEiLCJ1c2VTdGF0ZSIsIm9wZXJhdG9yc0xpc3QiLCJzZXRPcGVyYXRvcnNMaXN0IiwibWFwIiwib3BlcmF0b3IiLCJpbmRleCIsImlkIiwib3BlcmF0b3JOYW1lIiwib3BlcmF0b3JMaW5rIiwiaW1nVXJsIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QjtBQUFBOztBQUFBLE1BQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUNELElBQUQsQ0FEVDtBQUFBLE1BQ2xDRSxhQURrQztBQUFBLE1BQ25CQyxnQkFEbUI7O0FBR3pDLFNBQ0ksTUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5RUFBRDtBQUFXLGFBQVMsTUFBcEI7QUFBcUIsbUJBQWUsRUFBRSxJQUF0QztBQUE0QyxvQkFBZ0IsRUFBRSxHQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlELGFBRkosYUFFSUEsYUFGSix1QkFFSUEsYUFBYSxDQUFFRSxHQUFmLENBQW1CLFVBQUNDLFFBQUQsRUFBMkJDLEtBQTNCLEVBQTRDO0FBQzNELFdBQ0ksTUFBQyxzRkFBRDtBQUNJLFNBQUcsRUFBRUEsS0FEVDtBQUVJLFFBQUUsRUFBRUQsUUFBUSxDQUFDRSxFQUZqQjtBQUdJLFVBQUksRUFBRUYsUUFBUSxDQUFDRyxZQUhuQjtBQUlJLFVBQUksRUFBRUgsUUFBUSxDQUFDSSxZQUpuQjtBQUtJLFlBQU0sRUFBRUosUUFBUSxDQUFDSyxNQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFTSCxHQVZELENBRkosQ0FESixDQURKLENBREo7QUFxQkgsQ0F4QkQ7O0dBQU1YLFE7O0tBQUFBLFE7QUFpQ05BLFFBQVEsQ0FBQ1ksZUFBVCxpTUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTEMsS0FBSyxDQUFDLHFDQUFELENBREE7O0FBQUE7QUFDakJDLGFBRGlCO0FBQUE7QUFBQSxpQkFFaUNBLEdBQUcsQ0FBQ0MsSUFBSixFQUZqQzs7QUFBQTtBQUVqQmQsY0FGaUI7QUFBQSwyQ0FHaEI7QUFBQ0EsZ0JBQUksRUFBRUE7QUFBUCxXQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNGQ2YmQ5YWJmNmI3ODRlNWVjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaWxlQ29udGFpbmVyLCBTY3JvbGxCYXJDb250YWluZXIsIFNjcm9sbGJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL09wZXJhdG9yc0xpc3RTdHlsZWRcIjtcclxuaW1wb3J0IE9wZXJhdG9yVGlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9vcGVyYXRvclRpbGVDb21wb25lbnQvT3BlcmF0b3JUaWxlXCI7XHJcbmltcG9ydCBTY3JvbGxiYXJzIGZyb20gXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiO1xyXG5cclxuaW50ZXJmYWNlIE1haW5QYWdlUHJvcHMge1xyXG4gICAgZGF0YTogT3BlcmF0b3JzTGlzdFtdIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKHtkYXRhfSA6IE1haW5QYWdlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtvcGVyYXRvcnNMaXN0LCBzZXRPcGVyYXRvcnNMaXN0XSA9IHVzZVN0YXRlKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNjcm9sbEJhckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFNjcm9sbGJhciB1bml2ZXJzYWwgYXV0b0hpZGVUaW1lb3V0PXsxMDAwfSBhdXRvSGlkZUR1cmF0aW9uPXsyMDB9PlxyXG4gICAgICAgICAgICAgICAgPFRpbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JzTGlzdD8ubWFwKChvcGVyYXRvciA6IE9wZXJhdG9yc0xpc3QsIGluZGV4OiBudW1iZXIpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wZXJhdG9yVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e29wZXJhdG9yLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e29wZXJhdG9yLm9wZXJhdG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXtvcGVyYXRvci5vcGVyYXRvckxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsPXtvcGVyYXRvci5pbWdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvVGlsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9TY3JvbGxiYXI+XHJcbiAgICAgICAgPC9TY3JvbGxCYXJDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0b3JzTGlzdCB7XHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcsXHJcbiAgICBvcGVyYXRvckxpbms6IHN0cmluZyxcclxuICAgIGltZ1VybD86IHN0cmluZ1xyXG59XHJcblxyXG5NYWluUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMnKTtcclxuICAgIGNvbnN0IGRhdGEgOiBBcnJheTxPcGVyYXRvcnNMaXN0PiB8IHVuZGVmaW5lZCAgPSBhd2FpdCAgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7ZGF0YTogZGF0YX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2UiXSwic291cmNlUm9vdCI6IiJ9