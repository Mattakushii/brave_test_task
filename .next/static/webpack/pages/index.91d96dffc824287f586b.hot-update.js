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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\real_brave_test_task\\src\\components\\operatorsListComponent\\OperatorsList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var OperatorsList = function OperatorsList(_ref) {
  _s();

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var newOperator = {
    "id": "4",
    "operatorName": "yota",
    "slogan": "ya yo ta"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.dataList),
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
      lineNumber: 19,
      columnNumber: 9
    }
  }, operatorsList.map(function (operator) {
    return __jsx("div", {
      key: operator.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, operator.operatorName);
  }), __jsx("button", {
    onClick: function onClick() {
      return handleChange();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0LmpzIl0sIm5hbWVzIjpbIk9wZXJhdG9yc0xpc3QiLCJwcm9wcyIsIm5ld09wZXJhdG9yIiwidXNlU3RhdGUiLCJkYXRhTGlzdCIsIm9wZXJhdG9yc0xpc3QiLCJzZXRPcGVyYXRvcnNMaXN0IiwiaGFuZGxlQ2hhbmdlIiwibWFwIiwib3BlcmF0b3IiLCJpZCIsIm9wZXJhdG9yTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUE7O0FBQUEsTUFBWEMsS0FBVzs7QUFDbEMsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCLFVBQU0sR0FEVTtBQUVoQixvQkFBZ0IsTUFGQTtBQUdoQixjQUFVO0FBSE0sR0FBcEI7O0FBRGtDLGtCQU1RQyxzREFBUSxDQUFDRixLQUFLLENBQUNHLFFBQVAsQ0FOaEI7QUFBQSxNQU0zQkMsYUFOMkI7QUFBQSxNQU1aQyxnQkFOWTs7QUFRbEMsV0FBU0MsWUFBVCxHQUF3QjtBQUNwQkQsb0JBQWdCLENBQ2hCLFVBQUFELGFBQWEsRUFBSTtBQUNiLG9IQUFXQSxhQUFYLElBQTBCSCxXQUExQjtBQUNILEtBSGUsQ0FBaEI7QUFJSDs7QUFFRSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUcsYUFBYSxDQUFDRyxHQUFkLENBQWtCLFVBQUNDLFFBQUQsRUFBYTtBQUMzQixXQUNJO0FBQUssU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0QsUUFBUSxDQUFDRSxZQURkLENBREo7QUFLSCxHQU5ELENBRkosRUFVSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQUtKLFlBQVksRUFBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVkosQ0FERDtBQWNOLENBN0JEOztHQUFNUCxhOztLQUFBQSxhO0FBZ0NTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MWQ5NmRmZmM4MjQyODdmNTg2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBPcGVyYXRvcnNMaXN0ID0gKHsuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IG5ld09wZXJhdG9yID0ge1xyXG4gICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgXCJvcGVyYXRvck5hbWVcIjogXCJ5b3RhXCIsXHJcbiAgICAgICAgXCJzbG9nYW5cIjogXCJ5YSB5byB0YVwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBbb3BlcmF0b3JzTGlzdCwgc2V0T3BlcmF0b3JzTGlzdF0gPSB1c2VTdGF0ZShwcm9wcy5kYXRhTGlzdCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgICAgIHNldE9wZXJhdG9yc0xpc3QoXHJcbiAgICAgICAgb3BlcmF0b3JzTGlzdCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4ub3BlcmF0b3JzTGlzdCwgbmV3T3BlcmF0b3JdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgb3BlcmF0b3JzTGlzdC5tYXAoKG9wZXJhdG9yKT0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29wZXJhdG9yLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wZXJhdG9yLm9wZXJhdG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gaGFuZGxlQ2hhbmdlKCl9PisrKzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0b3JzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=