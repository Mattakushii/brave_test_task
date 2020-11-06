webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/pages/pay/[payOperatorID].tsx":
/*!*******************************************!*\
  !*** ./src/pages/pay/[payOperatorID].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.ts");
/* harmony import */ var _components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputFormComponent/InputForm */ "./src/components/inputFormComponent/InputForm.tsx");



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var PaymentPage = function PaymentPage(_ref) {
  _s();

  var operatorData = _ref.operatorData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      phone = _useState[0],
      setPhone = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPhone = _useState2[0],
      setIsValidPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      payment = _useState3[0],
      setPayment = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPayment = _useState4[0],
      setIsValidPayment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validForm = _useState5[0],
      setIsValidForm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    result: false,
    message: ''
  }),
      responseData = _useState6[0],
      setResponseData = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (validPhone && validPayment) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  });

  function sendData(_x) {
    return _sendData.apply(this, arguments);
  }

  function _sendData() {
    _sendData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var phoneArr, validPhone, reqBody, req, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              phoneArr = phone.match(/\d/g);
              validPhone = phoneArr === null || phoneArr === void 0 ? void 0 : phoneArr.join('');
              reqBody = {
                phoneNumber: validPhone,
                payment: payment,
                operatorName: operatorData === null || operatorData === void 0 ? void 0 : operatorData.data.operatorName
              };
              console.log(reqBody);
              setResponseData({
                result: false,
                message: 'Обработка платежа...'
              });
              _context.next = 8;
              return fetch("http://localhost:3000/api/pay", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
              });

            case 8:
              req = _context.sent;
              _context.next = 11;
              return req.json();

            case 11:
              res = _context.sent;
              setResponseData(res);
              setTimeout(function () {
                redirect(res.result);
              }, 1000);
              return _context.abrupt("return", res);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _sendData.apply(this, arguments);
  }

  function redirect(result) {
    if (result) {
      router.replace('/');
    } else {
      setPhone('');
      setIsValidPhone(false);
      setPayment('');
      setIsValidPayment(false);
      setIsValidForm(false);
    }
  }

  if (operatorData && operatorData.data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      callbackValueState: setPhone,
      callbackValidState: setIsValidPhone,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "payment",
      name: "payment",
      type: "text",
      placeholder: "Введите сумму",
      callbackValueState: setPayment,
      callbackValidState: setIsValidPayment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }), __jsx("input", {
      disabled: !validForm,
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "NegEqlXVDoxQVNulDrfNMWQfnbU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = PaymentPage;

PaymentPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://localhost:3000/api/operators/".concat(ctx.query.payOperatorID));

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", {
              operatorData: data
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (PaymentPage);

var _c;

$RefreshReg$(_c, "PaymentPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0udHN4Il0sIm5hbWVzIjpbIlBheW1lbnRQYWdlIiwib3BlcmF0b3JEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lQXJyIiwibWF0Y2giLCJqb2luIiwicmVxQm9keSIsInBob25lTnVtYmVyIiwib3BlcmF0b3JOYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcSIsImpzb24iLCJyZXMiLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJyZXBsYWNlIiwiaWQiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBS0E7O0FBWUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUFoQ0MsWUFBZ0MsUUFBaENBLFlBQWdDO0FBQ2xELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGtELGtCQUd4QkMsc0RBQVEsQ0FBQyxFQUFELENBSGdCO0FBQUEsTUFHM0NDLEtBSDJDO0FBQUEsTUFHcENDLFFBSG9DOztBQUFBLG1CQUlaRixz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Q0FBRTRDLFVBQW5CLENBQVA7QUFDSDtBQUNKLENBN0ZEOztHQUFNN0MsVztVQUNhRyxxRDs7O0tBRGJILFc7O0FBMEdOQSxXQUFXLENBQUM4QyxlQUFaO0FBQUEsK0xBQThCLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1JmLEtBQUssK0NBQXdDZSxHQUFHLENBQUNDLEtBQUosQ0FBVUMsYUFBbEQsRUFERzs7QUFBQTtBQUNwQlQsZUFEb0I7QUFBQTtBQUFBLG1CQUVvQkEsR0FBRyxDQUFDRCxJQUFKLEVBRnBCOztBQUFBO0FBRXBCVixnQkFGb0I7QUFBQSw4Q0FHbkI7QUFBRTVCLDBCQUFZLEVBQUU0QjtBQUFoQixhQUhtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZTdCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uNWE1MzQ3MGMzMDM1ZTFhYjQ2MTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge05leHRQYWdlQ29udGV4dH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7XHJcbiAgICBGb3JtSGVhZGVyLFxyXG4gICAgUGF5bWVudENvbnRhaW5lcixcclxuICAgIFBheW1lbnRGb3JtXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFBheW1lbnRQcm9wcyB7XHJcbiAgICBvcGVyYXRvckRhdGE6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VuZGluZ0RhdGEge1xyXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHBheW1lbnQ6IHN0cmluZyxcclxuICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtvcGVyYXRvckRhdGF9OiBQYXltZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTonJ1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGlmKHZhbGlkUGhvbmUgJiYgdmFsaWRQYXltZW50KSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKGU6IFJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBob25lQXJyIDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBwaG9uZS5tYXRjaCgvXFxkL2cpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUGhvbmUgPSBwaG9uZUFycj8uam9pbignJyk7XHJcbiAgICAgICAgY29uc3QgcmVxQm9keSA6IFNlbmRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdmFsaWRQaG9uZSxcclxuICAgICAgICAgICAgcGF5bWVudDogcGF5bWVudCxcclxuICAgICAgICAgICAgb3BlcmF0b3JOYW1lOiBvcGVyYXRvckRhdGE/LmRhdGEub3BlcmF0b3JOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcUJvZHkpXHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQv9C70LDRgtC10LbQsC4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVkaXJlY3QocmVzLnJlc3VsdClcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QocmVzdWx0IDogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXI+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshdmFsaWRGb3JtfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fS8+XHJcbiAgICAgICAgICAgICAgICA8L1BheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEw8L2Rpdj5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57b3BlcmF0b3JEYXRhPy5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcGVyYXRvckRhdGEge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JMaW5rOiBzdHJpbmcsXHJcbiAgICAgICAgaW1nVXJsPzogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZXJyTWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb2s6IGJvb2xlYW5cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgb3BlcmF0b3JEYXRhOiBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9