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
/* harmony import */ var _OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OperatorsListStyled */ "./src/components/operatorsListComponent/OperatorsListStyled.js");
/* harmony import */ var _operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operatorTileComponent/OperatorTile */ "./src/components/operatorTileComponent/OperatorTile.js");
/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scrollbar */ "./node_modules/react-scrollbar/dist/scrollArea.js");
/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scrollbar__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\operatorsListComponent\\OperatorsList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var OperatorsList = function OperatorsList(_ref) {
  _s();

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var newOperator = {
    "id": "4",
    "operatorName": "Yota",
    "operatorLink": "yota",
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

  return __jsx(_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__["TileContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, operatorsList.map(function (operator) {
    return __jsx(_operatorTileComponent_OperatorTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: operator.id,
      id: operator.id,
      name: operator.operatorName,
      link: operator.operatorLink,
      imgUrl: operator.imgUrl,
      slogan: operator.slogan,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    });
  })), __jsx(_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return handleChange();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0LmpzIl0sIm5hbWVzIjpbIk9wZXJhdG9yc0xpc3QiLCJwcm9wcyIsIm5ld09wZXJhdG9yIiwidXNlU3RhdGUiLCJkYXRhTGlzdCIsIm9wZXJhdG9yc0xpc3QiLCJzZXRPcGVyYXRvcnNMaXN0IiwiaGFuZGxlQ2hhbmdlIiwibWFwIiwib3BlcmF0b3IiLCJpZCIsIm9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yTGluayIsImltZ1VybCIsInNsb2dhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFnQjtBQUFBOztBQUFBLE1BQVhDLEtBQVc7O0FBQ2xDLE1BQU1DLFdBQVcsR0FBRztBQUNoQixVQUFNLEdBRFU7QUFFaEIsb0JBQWdCLE1BRkE7QUFHaEIsb0JBQWdCLE1BSEE7QUFJaEIsY0FBVTtBQUpNLEdBQXBCOztBQURrQyxrQkFRUUMsc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxRQUFQLENBUmhCO0FBQUEsTUFRM0JDLGFBUjJCO0FBQUEsTUFRWkMsZ0JBUlk7O0FBVWxDLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEJELG9CQUFnQixDQUNoQixVQUFBRCxhQUFhLEVBQUk7QUFDYixvSEFBV0EsYUFBWCxJQUEwQkgsV0FBMUI7QUFDSCxLQUhlLENBQWhCO0FBSUg7O0FBRUUsU0FDQyxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUcsYUFBYSxDQUFDRyxHQUFkLENBQWtCLFVBQUNDLFFBQUQsRUFBYTtBQUMzQixXQUNJLE1BQUMsMkVBQUQ7QUFDSSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsRUFEbEI7QUFFSSxRQUFFLEVBQUVELFFBQVEsQ0FBQ0MsRUFGakI7QUFHSSxVQUFJLEVBQUVELFFBQVEsQ0FBQ0UsWUFIbkI7QUFJSSxVQUFJLEVBQUVGLFFBQVEsQ0FBQ0csWUFKbkI7QUFLSSxZQUFNLEVBQUVILFFBQVEsQ0FBQ0ksTUFMckI7QUFNSSxZQUFNLEVBQUVKLFFBQVEsQ0FBQ0ssTUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBVUgsR0FYRCxDQUZKLENBREosRUFpQkksTUFBQywyREFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQUtQLFlBQVksRUFBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBakJKLENBREQ7QUFxQk4sQ0F0Q0Q7O0dBQU1QLGE7O0tBQUFBLGE7QUF5Q1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA2YmZlYWI2NzU2Mzk0YWE2NjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGlsZUNvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSBcIi4vT3BlcmF0b3JzTGlzdFN0eWxlZFwiO1xyXG5pbXBvcnQgT3BlcmF0b3JUaWxlIGZyb20gXCIuLi9vcGVyYXRvclRpbGVDb21wb25lbnQvT3BlcmF0b3JUaWxlXCI7XHJcbmltcG9ydCBTY3JvbGxBcmVhIGZyb20gXCJyZWFjdC1zY3JvbGxiYXJcIlxyXG5cclxuY29uc3QgT3BlcmF0b3JzTGlzdCA9ICh7Li4ucHJvcHN9KSA9PiB7XHJcbiAgICBjb25zdCBuZXdPcGVyYXRvciA9IHtcclxuICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JOYW1lXCI6IFwiWW90YVwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JMaW5rXCI6IFwieW90YVwiLFxyXG4gICAgICAgIFwic2xvZ2FuXCI6IFwieWEgeW8gdGFcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtvcGVyYXRvcnNMaXN0LCBzZXRPcGVyYXRvcnNMaXN0XSA9IHVzZVN0YXRlKHByb3BzLmRhdGFMaXN0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgc2V0T3BlcmF0b3JzTGlzdChcclxuICAgICAgICBvcGVyYXRvcnNMaXN0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5vcGVyYXRvcnNMaXN0LCBuZXdPcGVyYXRvcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPFRpbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBcmVhPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3JzTGlzdC5tYXAoKG9wZXJhdG9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3BlcmF0b3JUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wZXJhdG9yLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e29wZXJhdG9yLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17b3BlcmF0b3Iub3BlcmF0b3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17b3BlcmF0b3Iub3BlcmF0b3JMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsPXtvcGVyYXRvci5pbWdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG9nYW49e29wZXJhdG9yLnNsb2dhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1Njcm9sbEFyZWE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVDaGFuZ2UoKX0+KysrPC9CdXR0b24+XHJcbiAgICAgICAgPC9UaWxlQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0b3JzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=