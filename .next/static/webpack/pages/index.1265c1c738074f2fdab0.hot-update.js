webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _components_operatorsListComponent_OperatorsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/operatorsListComponent/OperatorsList */ "./src/components/operatorsListComponent/OperatorsList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_db_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/db.json */ "./src/public/db.json");
var _public_db_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/db.json */ "./src/public/db.json", 1);




var _this = undefined,
    _jsxFileName = "C:\\GitHub\\real_brave_test_task\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var MainPage = function MainPage(_ref) {
  _s();

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      counter = _useState[0],
      increment = _useState[1];

  var list = data;
  var newOperator = {
    "id": "4",
    "operatorName": "yota",
    "slogan": "ya yo ta"
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(list),
      operatorsList = _useState2[0],
      setOperatorsList = _useState2[1];

  console.log(list);

  var handleChange = function handleChange() {
    setOperatorsList(function (operatorsList) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(operatorsList), [newOperator]);
    });
  };

  console.log(operatorsList);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, operatorsList.map(function (operator) {
    return __jsx("div", {
      key: operator.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, operator.operatorName);
  }), counter), __jsx("button", {
    onClick: function onClick() {
      handleChange();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "++++++"), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, JSON.stringify(operatorsList, null, 4)));
};

_s(MainPage, "Imm6sN85SwjEkuMhw9StMyokeY8=");

_c = MainPage;
MainPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res = _public_db_json__WEBPACK_IMPORTED_MODULE_5__;
          return _context.abrupt("return", {
            data: res
          });

        case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW5QYWdlIiwiZGF0YSIsInVzZVN0YXRlIiwiY291bnRlciIsImluY3JlbWVudCIsImxpc3QiLCJuZXdPcGVyYXRvciIsIm9wZXJhdG9yc0xpc3QiLCJzZXRPcGVyYXRvcnNMaXN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsIm1hcCIsIm9wZXJhdG9yIiwiaWQiLCJvcGVyYXRvck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZGIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsQ0FBRCxDQURaO0FBQUEsTUFDbEJDLE9BRGtCO0FBQUEsTUFDVEMsU0FEUzs7QUFHekIsTUFBTUMsSUFBSSxHQUFHSixJQUFiO0FBRUEsTUFBTUssV0FBVyxHQUFHO0FBQ2hCLFVBQU0sR0FEVTtBQUVoQixvQkFBZ0IsTUFGQTtBQUdoQixjQUFVO0FBSE0sR0FBcEI7O0FBTHlCLG1CQVVpQkosc0RBQVEsQ0FBQ0csSUFBRCxDQVZ6QjtBQUFBLE1BVWxCRSxhQVZrQjtBQUFBLE1BVUhDLGdCQVZHOztBQVd6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7O0FBRUEsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSztBQUN0Qkgsb0JBQWdCLENBQUMsVUFBQUQsYUFBYTtBQUFBLG9IQUFRQSxhQUFSLElBQXVCRCxXQUF2QjtBQUFBLEtBQWQsQ0FBaEI7QUFDSCxHQUZEOztBQUlBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsYUFBWjtBQUNBLFNBQ0ksbUVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLQSxhQUFhLENBQUNLLEdBQWQsQ0FBa0IsVUFBQ0MsUUFBRCxFQUFhO0FBQzVCLFdBQ0k7QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxRQUFRLENBQUNFLFlBRGQsQ0FESjtBQUtILEdBTkEsQ0FGTCxFQVNLWixPQVRMLENBREEsRUFZSTtBQUFRLFdBQU8sRUFBRSxtQkFBSztBQUNsQlEsa0JBQVk7QUFFZixLQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tLLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixhQUFmLEVBQThCLElBQTlCLEVBQW9DLENBQXBDLENBREwsQ0FoQkosQ0FESjtBQXNCSCxDQXhDRDs7R0FBTVAsUTs7S0FBQUEsUTtBQTBDTkEsUUFBUSxDQUFDa0IsZUFBVCxpTUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxhQURpQixHQUNYQyw0Q0FEVztBQUFBLDJDQUVoQjtBQUFDbkIsZ0JBQUksRUFBRWtCO0FBQVAsV0FGZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFNZW5CLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEyNjVjMWM3MzgwNzRmMmZkYWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3BlcmF0b3JzTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9vcGVyYXRvcnNMaXN0Q29tcG9uZW50L09wZXJhdG9yc0xpc3RcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGRiIGZyb20gXCIuLi9wdWJsaWMvZGIuanNvblwiO1xyXG5cclxuY29uc3QgTWFpblBhZ2UgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICBjb25zdCBbY291bnRlciwgaW5jcmVtZW50XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRhdGE7XHJcblxyXG4gICAgY29uc3QgbmV3T3BlcmF0b3IgPSB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICBcIm9wZXJhdG9yTmFtZVwiOiBcInlvdGFcIixcclxuICAgICAgICBcInNsb2dhblwiOiBcInlhIHlvIHRhXCJcclxuICAgIH1cclxuICAgIGNvbnN0IFtvcGVyYXRvcnNMaXN0LCBzZXRPcGVyYXRvcnNMaXN0XSA9IHVzZVN0YXRlKGxpc3QpO1xyXG4gICAgY29uc29sZS5sb2cobGlzdClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKT0+IHtcclxuICAgICAgICBzZXRPcGVyYXRvcnNMaXN0KG9wZXJhdG9yc0xpc3QgPT4gWy4uLm9wZXJhdG9yc0xpc3QsIG5ld09wZXJhdG9yXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cob3BlcmF0b3JzTGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Lyo8T3BlcmF0b3JzTGlzdCBkYXRhTGlzdD17ZGF0YX0vPiovfVxyXG4gICAgICAgICAgICB7b3BlcmF0b3JzTGlzdC5tYXAoKG9wZXJhdG9yKT0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29wZXJhdG9yLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wZXJhdG9yLm9wZXJhdG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHtjb3VudGVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfX0+KysrKysrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkob3BlcmF0b3JzTGlzdCwgbnVsbCwgNCl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5NYWluUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBkYjtcclxuICAgIHJldHVybiB7ZGF0YTogcmVzfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2UiXSwic291cmNlUm9vdCI6IiJ9