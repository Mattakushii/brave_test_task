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

  if (isVisible) return __jsx(_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_5__["TileContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
        lineNumber: 39,
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
      lineNumber: 50,
      columnNumber: 13
    }
  }, "sssss"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "".concat(isVisible)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0LmpzIl0sIm5hbWVzIjpbIk9wZXJhdG9yc0xpc3QiLCJwcm9wcyIsIm5ld09wZXJhdG9yIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJkYXRhTGlzdCIsIm9wZXJhdG9yc0xpc3QiLCJzZXRPcGVyYXRvcnNMaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJtYXAiLCJvcGVyYXRvciIsImlkIiwib3BlcmF0b3JOYW1lIiwib3BlcmF0b3JMaW5rIiwiaW1nVXJsIiwic2xvZ2FuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFnQjtBQUFBOztBQUFBLE1BQVhDLEtBQVc7O0FBQ2xDLE1BQU1DLFdBQVcsR0FBRztBQUNoQixVQUFNLEdBRFU7QUFFaEIsb0JBQWdCLE1BRkE7QUFHaEIsb0JBQWdCLE1BSEE7QUFJaEIsY0FBVTtBQUpNLEdBQXBCOztBQURrQyxrQkFRQUMsc0RBQVEsQ0FBQyxLQUFELENBUlI7QUFBQSxNQVEzQkMsU0FSMkI7QUFBQSxNQVFoQkMsWUFSZ0I7O0FBQUEsbUJBU1FGLHNEQUFRLENBQUNGLEtBQUssQ0FBQ0ssUUFBUCxDQVRoQjtBQUFBLE1BUzNCQyxhQVQyQjtBQUFBLE1BU1pDLGdCQVRZOztBQUFBLFdBV25CQyxZQVhtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxTUFXbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJDLEtBQUssQ0FDNUIsaURBRDRCLEVBQ3VCO0FBQy9DQyxzQkFBTSxFQUFFLE1BRHVDO0FBRS9DQyx1QkFBTyxFQUFFO0FBQ0wsa0NBQWdCO0FBRFgsaUJBRnNDO0FBSzdDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWIsV0FBZjtBQUx1QyxlQUR2QixDQURoQzs7QUFBQTtBQUNVYyxzQkFEVjtBQUFBO0FBQUEscUJBU3lCQSxRQUFRLENBQUNDLElBQVQsRUFUekI7O0FBQUE7QUFTVUMsb0JBVFY7QUFVSVYsOEJBQWdCLENBQ2hCLFVBQUFELGFBQWEsRUFBSTtBQUNiLDhIQUFXQSxhQUFYLElBQTBCVyxNQUExQjtBQUNILGVBSGUsQ0FBaEI7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FYa0M7QUFBQTtBQUFBOztBQTJCbEMsTUFBR2QsU0FBSCxFQUVBLE9BQ0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFHLGFBQWEsQ0FBQ1ksR0FBZCxDQUFrQixVQUFDQyxRQUFELEVBQWE7QUFDM0IsV0FDSSxNQUFDLDJFQUFEO0FBQ0ksU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBRGxCO0FBRUksUUFBRSxFQUFFRCxRQUFRLENBQUNDLEVBRmpCO0FBR0ksVUFBSSxFQUFFRCxRQUFRLENBQUNFLFlBSG5CO0FBSUksVUFBSSxFQUFFRixRQUFRLENBQUNHLFlBSm5CO0FBS0ksWUFBTSxFQUFFSCxRQUFRLENBQUNJLE1BTHJCO0FBTUksWUFBTSxFQUFFSixRQUFRLENBQUNLLE1BTnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQVVILEdBWEQsQ0FGUixFQWVJLE1BQUMsMkRBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFLcEIsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkosRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFTQSxTQUFULEVBaEJKLENBREo7QUFvQkgsQ0FqREQ7O0dBQU1KLGE7O0tBQUFBLGE7QUFvRFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyNGVhYTBjYzJkYjY5MThjMjJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGlsZUNvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSBcIi4vT3BlcmF0b3JzTGlzdFN0eWxlZFwiO1xyXG5pbXBvcnQgT3BlcmF0b3JUaWxlIGZyb20gXCIuLi9vcGVyYXRvclRpbGVDb21wb25lbnQvT3BlcmF0b3JUaWxlXCI7XHJcblxyXG5jb25zdCBPcGVyYXRvcnNMaXN0ID0gKHsuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IG5ld09wZXJhdG9yID0ge1xyXG4gICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgXCJvcGVyYXRvck5hbWVcIjogXCJZb3RhXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvckxpbmtcIjogXCJ5b3RhXCIsXHJcbiAgICAgICAgXCJzbG9nYW5cIjogXCJ5YSB5byB0YVwiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVyYXRvcnNMaXN0LCBzZXRPcGVyYXRvcnNMaXN0XSA9IHVzZVN0YXRlKHByb3BzLmRhdGFMaXN0KTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvYWRkT3BlcmF0b3InLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld09wZXJhdG9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldE9wZXJhdG9yc0xpc3QoXHJcbiAgICAgICAgb3BlcmF0b3JzTGlzdCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4ub3BlcmF0b3JzTGlzdCwgcmVzdWx0XVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzVmlzaWJsZSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFRpbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcnNMaXN0Lm1hcCgob3BlcmF0b3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVyYXRvclRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3BlcmF0b3IuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17b3BlcmF0b3IuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvcGVyYXRvci5vcGVyYXRvck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXtvcGVyYXRvci5vcGVyYXRvckxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw9e29wZXJhdG9yLmltZ1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb2dhbj17b3BlcmF0b3Iuc2xvZ2FufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PiBzZXRJc1Zpc2libGUoIWlzVmlzaWJsZSl9PnNzc3NzPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+e2Ake2lzVmlzaWJsZX1gfTwvZGl2PlxyXG4gICAgICAgIDwvVGlsZUNvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdG9yc0xpc3QiXSwic291cmNlUm9vdCI6IiJ9