webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/operatorsListComponent/OperatorsList.js":
/*!****************************************************************!*\
  !*** ./src/components/operatorsListComponent/OperatorsList.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OperatorsListStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperatorsListStyled */ "./src/components/operatorsListComponent/OperatorsListStyled.js");
/* harmony import */ var _operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operatorTileComponent/OperatorTile */ "./src/components/operatorTileComponent/OperatorTile.js");





var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\operatorsListComponent\\OperatorsList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var OperatorsList = function OperatorsList(_ref) {
  _s();

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _ref);

  var visible;
  var newOperator = {
    "id": "4",
    "operatorName": "Yota",
    "operatorLink": "yota",
    "slogan": "ya yo ta"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isVisible = _useState[0],
      setIsVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.dataList),
      operatorsList = _useState2[0],
      setOperatorsList = _useState2[1];

  if (isVisible) {}

  function handleChange() {
    return _handleChange.apply(this, arguments);
  }

  function _handleChange() {
    _handleChange = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('http://localhost:3000/api/operators/addOperator', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(newOperator)
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              result = _context.sent;
              setOperatorsList(function (operatorsList) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(operatorsList), [result]);
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleChange.apply(this, arguments);
  }

  return __jsx(_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_5__["TileContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, operatorsList.map(function (operator) {
    return __jsx(_operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: operator.id,
      id: operator.id,
      name: operator.operatorName,
      link: operator.operatorLink,
      imgUrl: operator.imgUrl,
      slogan: operator.slogan,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    });
  }), __jsx(_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick() {
      return setIsVisible(!isVisible);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, visible));
};

_s(OperatorsList, "cJdojGtaWcVmqdk1i0oxl7cv+Vw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0LmpzIl0sIm5hbWVzIjpbIk9wZXJhdG9yc0xpc3QiLCJwcm9wcyIsInZpc2libGUiLCJuZXdPcGVyYXRvciIsInVzZVN0YXRlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiZGF0YUxpc3QiLCJvcGVyYXRvcnNMaXN0Iiwic2V0T3BlcmF0b3JzTGlzdCIsImhhbmRsZUNoYW5nZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwibWFwIiwib3BlcmF0b3IiLCJpZCIsIm9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yTGluayIsImltZ1VybCIsInNsb2dhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7QUFBQTs7QUFBQSxNQUFYQyxLQUFXOztBQUNsQyxNQUFJQyxPQUFKO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCLFVBQU0sR0FEVTtBQUVoQixvQkFBZ0IsTUFGQTtBQUdoQixvQkFBZ0IsTUFIQTtBQUloQixjQUFVO0FBSk0sR0FBcEI7O0FBRmtDLGtCQVNBQyxzREFBUSxDQUFDLEtBQUQsQ0FUUjtBQUFBLE1BUzNCQyxTQVQyQjtBQUFBLE1BU2hCQyxZQVRnQjs7QUFBQSxtQkFVUUYsc0RBQVEsQ0FBQ0gsS0FBSyxDQUFDTSxRQUFQLENBVmhCO0FBQUEsTUFVM0JDLGFBVjJCO0FBQUEsTUFVWkMsZ0JBVlk7O0FBWWxDLE1BQUdKLFNBQUgsRUFBYyxDQUViOztBQWRpQyxXQWdCbkJLLFlBaEJtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxTUFnQmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzJCQyxLQUFLLENBQzVCLGlEQUQ0QixFQUN1QjtBQUMvQ0Msc0JBQU0sRUFBRSxNQUR1QztBQUUvQ0MsdUJBQU8sRUFBRTtBQUNMLGtDQUFnQjtBQURYLGlCQUZzQztBQUs3Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWViLFdBQWY7QUFMdUMsZUFEdkIsQ0FEaEM7O0FBQUE7QUFDVWMsc0JBRFY7QUFBQTtBQUFBLHFCQVN5QkEsUUFBUSxDQUFDQyxJQUFULEVBVHpCOztBQUFBO0FBU1VDLG9CQVRWO0FBVUlWLDhCQUFnQixDQUNoQixVQUFBRCxhQUFhLEVBQUk7QUFDYiw4SEFBV0EsYUFBWCxJQUEwQlcsTUFBMUI7QUFDSCxlQUhlLENBQWhCOztBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaEJrQztBQUFBO0FBQUE7O0FBZ0MvQixTQUNDLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRWCxhQUFhLENBQUNZLEdBQWQsQ0FBa0IsVUFBQ0MsUUFBRCxFQUFhO0FBQzNCLFdBQ0ksTUFBQywyRUFBRDtBQUNJLFNBQUcsRUFBRUEsUUFBUSxDQUFDQyxFQURsQjtBQUVJLFFBQUUsRUFBRUQsUUFBUSxDQUFDQyxFQUZqQjtBQUdJLFVBQUksRUFBRUQsUUFBUSxDQUFDRSxZQUhuQjtBQUlJLFVBQUksRUFBRUYsUUFBUSxDQUFDRyxZQUpuQjtBQUtJLFlBQU0sRUFBRUgsUUFBUSxDQUFDSSxNQUxyQjtBQU1JLFlBQU0sRUFBRUosUUFBUSxDQUFDSyxNQU5yQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFVSCxHQVhELENBRlIsRUFlSSxNQUFDLDJEQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBS3BCLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpREgsT0FBakQsQ0FmSixDQUREO0FBbUJOLENBbkREOztHQUFNRixhOztLQUFBQSxhO0FBc0RTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MTljNDY4ZGQxMjcyZTc3NDI3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRpbGVDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gXCIuL09wZXJhdG9yc0xpc3RTdHlsZWRcIjtcclxuaW1wb3J0IE9wZXJhdG9yVGlsZSBmcm9tIFwiLi4vb3BlcmF0b3JUaWxlQ29tcG9uZW50L09wZXJhdG9yVGlsZVwiO1xyXG5cclxuY29uc3QgT3BlcmF0b3JzTGlzdCA9ICh7Li4ucHJvcHN9KSA9PiB7XHJcbiAgICBsZXQgdmlzaWJsZVxyXG4gICAgY29uc3QgbmV3T3BlcmF0b3IgPSB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICBcIm9wZXJhdG9yTmFtZVwiOiBcIllvdGFcIixcclxuICAgICAgICBcIm9wZXJhdG9yTGlua1wiOiBcInlvdGFcIixcclxuICAgICAgICBcInNsb2dhblwiOiBcInlhIHlvIHRhXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZXJhdG9yc0xpc3QsIHNldE9wZXJhdG9yc0xpc3RdID0gdXNlU3RhdGUocHJvcHMuZGF0YUxpc3QpO1xyXG5cclxuICAgIGlmKGlzVmlzaWJsZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy9hZGRPcGVyYXRvcicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3T3BlcmF0b3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0T3BlcmF0b3JzTGlzdChcclxuICAgICAgICBvcGVyYXRvcnNMaXN0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5vcGVyYXRvcnNMaXN0LCByZXN1bHRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxUaWxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3JzTGlzdC5tYXAoKG9wZXJhdG9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3BlcmF0b3JUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wZXJhdG9yLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e29wZXJhdG9yLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17b3BlcmF0b3Iub3BlcmF0b3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17b3BlcmF0b3Iub3BlcmF0b3JMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsPXtvcGVyYXRvci5pbWdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG9nYW49e29wZXJhdG9yLnNsb2dhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0SXNWaXNpYmxlKCFpc1Zpc2libGUpfT57dmlzaWJsZX08L0J1dHRvbj5cclxuICAgICAgICA8L1RpbGVDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRvcnNMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==