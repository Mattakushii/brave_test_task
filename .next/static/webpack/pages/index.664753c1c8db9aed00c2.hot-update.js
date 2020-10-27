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

  var visible = false;
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

  if (isVisible) {
    visi;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3BlcmF0b3JzTGlzdENvbXBvbmVudC9PcGVyYXRvcnNMaXN0LmpzIl0sIm5hbWVzIjpbIk9wZXJhdG9yc0xpc3QiLCJwcm9wcyIsInZpc2libGUiLCJuZXdPcGVyYXRvciIsInVzZVN0YXRlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiZGF0YUxpc3QiLCJvcGVyYXRvcnNMaXN0Iiwic2V0T3BlcmF0b3JzTGlzdCIsInZpc2kiLCJoYW5kbGVDaGFuZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIm1hcCIsIm9wZXJhdG9yIiwiaWQiLCJvcGVyYXRvck5hbWUiLCJvcGVyYXRvckxpbmsiLCJpbWdVcmwiLCJzbG9nYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUE7O0FBQUEsTUFBWEMsS0FBVzs7QUFDbEMsTUFBSUMsT0FBTyxHQUFHLEtBQWQ7QUFDQSxNQUFNQyxXQUFXLEdBQUc7QUFDaEIsVUFBTSxHQURVO0FBRWhCLG9CQUFnQixNQUZBO0FBR2hCLG9CQUFnQixNQUhBO0FBSWhCLGNBQVU7QUFKTSxHQUFwQjs7QUFGa0Msa0JBU0FDLHNEQUFRLENBQUMsS0FBRCxDQVRSO0FBQUEsTUFTM0JDLFNBVDJCO0FBQUEsTUFTaEJDLFlBVGdCOztBQUFBLG1CQVVRRixzREFBUSxDQUFDSCxLQUFLLENBQUNNLFFBQVAsQ0FWaEI7QUFBQSxNQVUzQkMsYUFWMkI7QUFBQSxNQVVaQyxnQkFWWTs7QUFZbEMsTUFBR0osU0FBSCxFQUFjO0FBQ1ZLLFFBQUk7QUFDUDs7QUFkaUMsV0FnQm5CQyxZQWhCbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEscU1BZ0JsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMyQkMsS0FBSyxDQUM1QixpREFENEIsRUFDdUI7QUFDL0NDLHNCQUFNLEVBQUUsTUFEdUM7QUFFL0NDLHVCQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWCxpQkFGc0M7QUFLN0NDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxXQUFmO0FBTHVDLGVBRHZCLENBRGhDOztBQUFBO0FBQ1VlLHNCQURWO0FBQUE7QUFBQSxxQkFTeUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQVR6Qjs7QUFBQTtBQVNVQyxvQkFUVjtBQVVJWCw4QkFBZ0IsQ0FDaEIsVUFBQUQsYUFBYSxFQUFJO0FBQ2IsOEhBQVdBLGFBQVgsSUFBMEJZLE1BQTFCO0FBQ0gsZUFIZSxDQUFoQjs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhCa0M7QUFBQTtBQUFBOztBQWdDL0IsU0FDQyxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUVosYUFBYSxDQUFDYSxHQUFkLENBQWtCLFVBQUNDLFFBQUQsRUFBYTtBQUMzQixXQUNJLE1BQUMsMkVBQUQ7QUFDSSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsRUFEbEI7QUFFSSxRQUFFLEVBQUVELFFBQVEsQ0FBQ0MsRUFGakI7QUFHSSxVQUFJLEVBQUVELFFBQVEsQ0FBQ0UsWUFIbkI7QUFJSSxVQUFJLEVBQUVGLFFBQVEsQ0FBQ0csWUFKbkI7QUFLSSxZQUFNLEVBQUVILFFBQVEsQ0FBQ0ksTUFMckI7QUFNSSxZQUFNLEVBQUVKLFFBQVEsQ0FBQ0ssTUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBVUgsR0FYRCxDQUZSLEVBZUksTUFBQywyREFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQUtyQixZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURILE9BQWpELENBZkosQ0FERDtBQW1CTixDQW5ERDs7R0FBTUYsYTs7S0FBQUEsYTtBQXNEU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjY0NzUzYzFjOGRiOWFlZDAwYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUaWxlQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tIFwiLi9PcGVyYXRvcnNMaXN0U3R5bGVkXCI7XHJcbmltcG9ydCBPcGVyYXRvclRpbGUgZnJvbSBcIi4uL29wZXJhdG9yVGlsZUNvbXBvbmVudC9PcGVyYXRvclRpbGVcIjtcclxuXHJcbmNvbnN0IE9wZXJhdG9yc0xpc3QgPSAoey4uLnByb3BzfSkgPT4ge1xyXG4gICAgbGV0IHZpc2libGUgPSBmYWxzZVxyXG4gICAgY29uc3QgbmV3T3BlcmF0b3IgPSB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICBcIm9wZXJhdG9yTmFtZVwiOiBcIllvdGFcIixcclxuICAgICAgICBcIm9wZXJhdG9yTGlua1wiOiBcInlvdGFcIixcclxuICAgICAgICBcInNsb2dhblwiOiBcInlhIHlvIHRhXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZXJhdG9yc0xpc3QsIHNldE9wZXJhdG9yc0xpc3RdID0gdXNlU3RhdGUocHJvcHMuZGF0YUxpc3QpO1xyXG5cclxuICAgIGlmKGlzVmlzaWJsZSkge1xyXG4gICAgICAgIHZpc2lcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvYWRkT3BlcmF0b3InLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld09wZXJhdG9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldE9wZXJhdG9yc0xpc3QoXHJcbiAgICAgICAgb3BlcmF0b3JzTGlzdCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4ub3BlcmF0b3JzTGlzdCwgcmVzdWx0XVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICAgIHJldHVybihcclxuICAgICAgICA8VGlsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yc0xpc3QubWFwKChvcGVyYXRvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZXJhdG9yVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcGVyYXRvci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtvcGVyYXRvci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e29wZXJhdG9yLm9wZXJhdG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e29wZXJhdG9yLm9wZXJhdG9yTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybD17b3BlcmF0b3IuaW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvZ2FuPXtvcGVyYXRvci5zbG9nYW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+IHNldElzVmlzaWJsZSghaXNWaXNpYmxlKX0+e3Zpc2libGV9PC9CdXR0b24+XHJcbiAgICAgICAgPC9UaWxlQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0b3JzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=