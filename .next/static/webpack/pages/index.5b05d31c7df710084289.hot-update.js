webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/operatorsListComponent/OperatorsList.js":
/*!****************************************************************!*\
  !*** ./src/components/operatorsListComponent/OperatorsList.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _public_db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/db.json */ "./src/public/db.json");
var _public_db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/db.json */ "./src/public/db.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\real_brave_test_task\\src\\components\\operatorsListComponent\\OperatorsList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var OperatorsList = function OperatorsList(_ref) {
  _s();

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var newOperator = {
    "id": "4",
    "operatorName": "yota",
    "slogan": "ya yo ta"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.dataList),
      operatorsList = _useState[0],
      setOperatorsList = _useState[1];

  function handleChange() {
    setOperatorsList(function (operatorsList) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(operatorsList), [newOperator]);
    });
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, operatorsList.map(function (operator) {
    return __jsx("div", {
      key: operator.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, operator.operatorName);
  }), __jsx("button", {
    onClick: function onClick() {
      return handleChange();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "+++"));
};

_s(OperatorsList, "qTOSfvHqBOF2APwUDpmP6tb50mY=");

_c = OperatorsList;
/* harmony default export */ __webpack_exports__["default"] = (OperatorsList);

var _c;

$RefreshReg$(_c, "OperatorsList");

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

  function handleChange() {
    setOperatorsList(function (operatorsList) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(operatorsList), [newOperator]);
    });
  }

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
      return handleChange();
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
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT3BlcmF0b3JzTGlzdCIsInByb3BzIiwibmV3T3BlcmF0b3IiLCJ1c2VTdGF0ZSIsImRhdGFMaXN0Iiwib3BlcmF0b3JzTGlzdCIsInNldE9wZXJhdG9yc0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJtYXAiLCJvcGVyYXRvciIsImlkIiwib3BlcmF0b3JOYW1lIiwiTWFpblBhZ2UiLCJkYXRhIiwiY291bnRlciIsImluY3JlbWVudCIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImRiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUE7O0FBQUEsTUFBWEMsS0FBVzs7QUFDbEMsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCLFVBQU0sR0FEVTtBQUVoQixvQkFBZ0IsTUFGQTtBQUdoQixjQUFVO0FBSE0sR0FBcEI7O0FBRGtDLGtCQU1RQyxzREFBUSxDQUFDRixLQUFLLENBQUNHLFFBQVAsQ0FOaEI7QUFBQSxNQU0zQkMsYUFOMkI7QUFBQSxNQU1aQyxnQkFOWTs7QUFRbEMsV0FBU0MsWUFBVCxHQUF3QjtBQUNoQkQsb0JBQWdCLENBQUMsVUFBQUQsYUFBYTtBQUFBLG9IQUFRQSxhQUFSLElBQXVCSCxXQUF2QjtBQUFBLEtBQWQsQ0FBaEI7QUFFUDs7QUFFRSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUcsYUFBYSxDQUFDRyxHQUFkLENBQWtCLFVBQUNDLFFBQUQsRUFBYTtBQUMzQixXQUNJO0FBQUssU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0QsUUFBUSxDQUFDRSxZQURkLENBREo7QUFLSCxHQU5ELENBRlIsRUFVSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQUtKLFlBQVksRUFBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVkosQ0FERDtBQWNOLENBM0JEOztHQUFNUCxhOztLQUFBQSxhO0FBOEJTQSw0RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1ZLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0lWLHNEQUFRLENBQUMsQ0FBRCxDQURaO0FBQUEsTUFDbEJXLE9BRGtCO0FBQUEsTUFDVEMsU0FEUzs7QUFHekIsTUFBTUMsSUFBSSxHQUFHSCxJQUFiO0FBRUEsTUFBTVgsV0FBVyxHQUFHO0FBQ2hCLFVBQU0sR0FEVTtBQUVoQixvQkFBZ0IsTUFGQTtBQUdoQixjQUFVO0FBSE0sR0FBcEI7O0FBTHlCLG1CQVVpQkMsc0RBQVEsQ0FBQ2EsSUFBRCxDQVZ6QjtBQUFBLE1BVWxCWCxhQVZrQjtBQUFBLE1BVUhDLGdCQVZHOztBQVd6QlcsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBRUEsV0FBU1QsWUFBVCxHQUF3QjtBQUNwQkQsb0JBQWdCLENBQUMsVUFBQUQsYUFBYTtBQUFBLG9IQUFRQSxhQUFSLElBQXVCSCxXQUF2QjtBQUFBLEtBQWQsQ0FBaEI7QUFDSDs7QUFFRGUsU0FBTyxDQUFDQyxHQUFSLENBQVliLGFBQVo7QUFDQSxTQUNJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFS0EsYUFBYSxDQUFDRyxHQUFkLENBQWtCLFVBQUNDLFFBQUQsRUFBYTtBQUM1QixXQUNJO0FBQUssU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0QsUUFBUSxDQUFDRSxZQURkLENBREo7QUFLSCxHQU5BLENBRkwsRUFTS0csT0FUTCxDQURBLEVBWUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFLUCxZQUFZLEVBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKLEVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWSxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsYUFBZixFQUE4QixJQUE5QixFQUFvQyxDQUFwQyxDQURMLENBYkosQ0FESjtBQW1CSCxDQXJDRDs7R0FBTU8sUTs7S0FBQUEsUTtBQXVDTkEsUUFBUSxDQUFDUyxlQUFULGlNQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLGFBRGlCLEdBQ1hDLDRDQURXO0FBQUEsMkNBRWhCO0FBQUNWLGdCQUFJLEVBQUVTO0FBQVAsV0FGZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFNZVYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWIwNWQzMWM3ZGY3MTAwODQyODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiLi4vLi4vcHVibGljL2RiLmpzb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBPcGVyYXRvcnNMaXN0ID0gKHsuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IG5ld09wZXJhdG9yID0ge1xyXG4gICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgXCJvcGVyYXRvck5hbWVcIjogXCJ5b3RhXCIsXHJcbiAgICAgICAgXCJzbG9nYW5cIjogXCJ5YSB5byB0YVwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBbb3BlcmF0b3JzTGlzdCwgc2V0T3BlcmF0b3JzTGlzdF0gPSB1c2VTdGF0ZShwcm9wcy5kYXRhTGlzdCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICBzZXRPcGVyYXRvcnNMaXN0KG9wZXJhdG9yc0xpc3QgPT4gWy4uLm9wZXJhdG9yc0xpc3QsIG5ld09wZXJhdG9yXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcnNMaXN0Lm1hcCgob3BlcmF0b3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtvcGVyYXRvci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmF0b3Iub3BlcmF0b3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVDaGFuZ2UoKX0+KysrPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRvcnNMaXN0IiwiaW1wb3J0IE9wZXJhdG9yc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBkYiBmcm9tIFwiLi4vcHVibGljL2RiLmpzb25cIjtcclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvdW50ZXIsIGluY3JlbWVudF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkYXRhO1xyXG5cclxuICAgIGNvbnN0IG5ld09wZXJhdG9yID0ge1xyXG4gICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgXCJvcGVyYXRvck5hbWVcIjogXCJ5b3RhXCIsXHJcbiAgICAgICAgXCJzbG9nYW5cIjogXCJ5YSB5byB0YVwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBbb3BlcmF0b3JzTGlzdCwgc2V0T3BlcmF0b3JzTGlzdF0gPSB1c2VTdGF0ZShsaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgICAgIHNldE9wZXJhdG9yc0xpc3Qob3BlcmF0b3JzTGlzdCA9PiBbLi4ub3BlcmF0b3JzTGlzdCwgbmV3T3BlcmF0b3JdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhvcGVyYXRvcnNMaXN0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKjxPcGVyYXRvcnNMaXN0IGRhdGFMaXN0PXtkYXRhfS8+Ki99XHJcbiAgICAgICAgICAgIHtvcGVyYXRvcnNMaXN0Lm1hcCgob3BlcmF0b3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17b3BlcmF0b3IuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmF0b3Iub3BlcmF0b3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAge2NvdW50ZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVDaGFuZ2UoKX0+KysrKysrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkob3BlcmF0b3JzTGlzdCwgbnVsbCwgNCl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5NYWluUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBkYjtcclxuICAgIHJldHVybiB7ZGF0YTogcmVzfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2UiXSwic291cmNlUm9vdCI6IiJ9