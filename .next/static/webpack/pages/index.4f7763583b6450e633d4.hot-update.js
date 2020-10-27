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

  console.log(props.dataL);
  return __jsx(_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__["TileContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
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
  }), __jsx(_OperatorsListStyled__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return handleChange();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0LmpzIl0sIm5hbWVzIjpbIk9wZXJhdG9yc0xpc3QiLCJwcm9wcyIsIm5ld09wZXJhdG9yIiwidXNlU3RhdGUiLCJkYXRhTGlzdCIsIm9wZXJhdG9yc0xpc3QiLCJzZXRPcGVyYXRvcnNMaXN0IiwiaGFuZGxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImRhdGFMIiwibWFwIiwib3BlcmF0b3IiLCJpZCIsIm9wZXJhdG9yTmFtZSIsIm9wZXJhdG9yTGluayIsImltZ1VybCIsInNsb2dhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUE7O0FBQUEsTUFBWEMsS0FBVzs7QUFDbEMsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCLFVBQU0sR0FEVTtBQUVoQixvQkFBZ0IsTUFGQTtBQUdoQixvQkFBZ0IsTUFIQTtBQUloQixjQUFVO0FBSk0sR0FBcEI7O0FBRGtDLGtCQVFRQyxzREFBUSxDQUFDRixLQUFLLENBQUNHLFFBQVAsQ0FSaEI7QUFBQSxNQVEzQkMsYUFSMkI7QUFBQSxNQVFaQyxnQkFSWTs7QUFVbEMsV0FBU0MsWUFBVCxHQUF3QjtBQUNwQkQsb0JBQWdCLENBQ2hCLFVBQUFELGFBQWEsRUFBSTtBQUNiLG9IQUFXQSxhQUFYLElBQTBCSCxXQUExQjtBQUNILEtBSGUsQ0FBaEI7QUFJSDs7QUFFRE0sU0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQUssQ0FBQ1MsS0FBbEI7QUFFRyxTQUNDLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRTCxhQUFhLENBQUNNLEdBQWQsQ0FBa0IsVUFBQ0MsUUFBRCxFQUFhO0FBQzNCLFdBQ0ksTUFBQywyRUFBRDtBQUNJLFNBQUcsRUFBRUEsUUFBUSxDQUFDQyxFQURsQjtBQUVJLFFBQUUsRUFBRUQsUUFBUSxDQUFDQyxFQUZqQjtBQUdJLFVBQUksRUFBRUQsUUFBUSxDQUFDRSxZQUhuQjtBQUlJLFVBQUksRUFBRUYsUUFBUSxDQUFDRyxZQUpuQjtBQUtJLFlBQU0sRUFBRUgsUUFBUSxDQUFDSSxNQUxyQjtBQU1JLFlBQU0sRUFBRUosUUFBUSxDQUFDSyxNQU5yQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFVSCxHQVhELENBRlIsRUFlSSxNQUFDLDJEQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBS1YsWUFBWSxFQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FmSixDQUREO0FBbUJOLENBdENEOztHQUFNUCxhOztLQUFBQSxhO0FBeUNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40Zjc3NjM1ODNiNjQ1MGU2MzNkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRpbGVDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gXCIuL09wZXJhdG9yc0xpc3RTdHlsZWRcIjtcclxuaW1wb3J0IE9wZXJhdG9yVGlsZSBmcm9tIFwiLi4vb3BlcmF0b3JUaWxlQ29tcG9uZW50L09wZXJhdG9yVGlsZVwiO1xyXG5cclxuY29uc3QgT3BlcmF0b3JzTGlzdCA9ICh7Li4ucHJvcHN9KSA9PiB7XHJcbiAgICBjb25zdCBuZXdPcGVyYXRvciA9IHtcclxuICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JOYW1lXCI6IFwiWW90YVwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JMaW5rXCI6IFwieW90YVwiLFxyXG4gICAgICAgIFwic2xvZ2FuXCI6IFwieWEgeW8gdGFcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtvcGVyYXRvcnNMaXN0LCBzZXRPcGVyYXRvcnNMaXN0XSA9IHVzZVN0YXRlKHByb3BzLmRhdGFMaXN0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgc2V0T3BlcmF0b3JzTGlzdChcclxuICAgICAgICBvcGVyYXRvcnNMaXN0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5vcGVyYXRvcnNMaXN0LCBuZXdPcGVyYXRvcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhTClcclxuXHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPFRpbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcnNMaXN0Lm1hcCgob3BlcmF0b3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVyYXRvclRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3BlcmF0b3IuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17b3BlcmF0b3IuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvcGVyYXRvci5vcGVyYXRvck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXtvcGVyYXRvci5vcGVyYXRvckxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw9e29wZXJhdG9yLmltZ1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb2dhbj17b3BlcmF0b3Iuc2xvZ2FufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVDaGFuZ2UoKX0+KysrPC9CdXR0b24+XHJcbiAgICAgICAgPC9UaWxlQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0b3JzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=