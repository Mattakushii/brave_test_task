webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/Context.ts":
false,

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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      popupFlag = _useState7[0],
      setPopupFlag = _useState7[1];

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
                setPopupFlag(true);
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
        lineNumber: 93,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      labelContent: "Номер телефона",
      callbackValueState: setPhone,
      callbackValidState: setIsValidPhone,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "payment",
      name: "payment",
      type: "text",
      placeholder: "Введите сумму",
      labelContent: "Сумма платежа",
      callbackValueState: setPayment,
      callbackValidState: setIsValidPayment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["SubmitButton"], {
      disabled: !validForm,
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PopupContainer"], {
      visible: popupFlag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["OperationResult"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing.")));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "GKoFBJs4yCqDJzgOB35bU0x2c3Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0udHN4Il0sIm5hbWVzIjpbIlBheW1lbnRQYWdlIiwib3BlcmF0b3JEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJwb3B1cEZsYWciLCJzZXRQb3B1cEZsYWciLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lQXJyIiwibWF0Y2giLCJqb2luIiwicmVxQm9keSIsInBob25lTnVtYmVyIiwib3BlcmF0b3JOYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcSIsImpzb24iLCJyZXMiLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJyZXBsYWNlIiwiaWQiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBUUE7O0FBWUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUFoQ0MsWUFBZ0MsUUFBaENBLFlBQWdDO0FBQ2xELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGtELGtCQUd4QkMsc0RBQVEsQ0FBQyxFQUFELENBSGdCO0FBQUEsTUFHM0NDLEtBSDJDO0FB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Qyw0RUFBRDtBQUFnQixhQUFPLEVBQUVKLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBREosQ0F2QkosQ0FESjtBQTZCSCxHQTlCRCxNQThCTztBQUNILFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLbEIsWUFBTCxhQUFLQSxZQUFMLHVCQUFLQSxZQUFZLENBQUU4QyxVQUFuQixDQUFQO0FBQ0g7QUFDSixDQW5HRDs7R0FBTS9DLFc7VUFDYUcscUQ7OztLQURiSCxXOztBQWdITkEsV0FBVyxDQUFDZ0QsZUFBWjtBQUFBLCtMQUE4QixrQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNSZixLQUFLLCtDQUF3Q2UsR0FBRyxDQUFDQyxLQUFKLENBQVVDLGFBQWxELEVBREc7O0FBQUE7QUFDcEJULGVBRG9CO0FBQUE7QUFBQSxtQkFFb0JBLEdBQUcsQ0FBQ0QsSUFBSixFQUZwQjs7QUFBQTtBQUVwQlYsZ0JBRm9CO0FBQUEsOENBR25CO0FBQUU5QiwwQkFBWSxFQUFFOEI7QUFBaEIsYUFIbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWUvQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjMxYTgzOTU4MjQ3YWUzYzJhYmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtOZXh0UGFnZUNvbnRleHR9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCIuLi8uLi9Db250ZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBGb3JtSGVhZGVyLFxyXG4gICAgUGF5bWVudENvbnRhaW5lcixcclxuICAgIFBheW1lbnRGb3JtLFxyXG4gICAgT3BlcmF0aW9uUmVzdWx0LFxyXG4gICAgU3VibWl0QnV0dG9uLFxyXG4gICAgUG9wdXBDb250YWluZXIsXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFBheW1lbnRQcm9wcyB7XHJcbiAgICBvcGVyYXRvckRhdGE6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VuZGluZ0RhdGEge1xyXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHBheW1lbnQ6IHN0cmluZyxcclxuICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtvcGVyYXRvckRhdGF9OiBQYXltZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTonJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IFtwb3B1cEZsYWcsIHNldFBvcHVwRmxhZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGlmKHZhbGlkUGhvbmUgJiYgdmFsaWRQYXltZW50KSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKGU6IFJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBob25lQXJyIDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBwaG9uZS5tYXRjaCgvXFxkL2cpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUGhvbmUgPSBwaG9uZUFycj8uam9pbignJyk7XHJcbiAgICAgICAgY29uc3QgcmVxQm9keSA6IFNlbmRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdmFsaWRQaG9uZSxcclxuICAgICAgICAgICAgcGF5bWVudDogcGF5bWVudCxcclxuICAgICAgICAgICAgb3BlcmF0b3JOYW1lOiBvcGVyYXRvckRhdGE/LmRhdGEub3BlcmF0b3JOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcUJvZHkpXHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQv9C70LDRgtC10LbQsC4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9wdXBGbGFnKHRydWUpXHJcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlcy5yZXN1bHQpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHJlc3VsdCA6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBob25lKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0UGF5bWVudCgnJyk7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRQYXltZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9wZXJhdG9yRGF0YSAmJiBvcGVyYXRvckRhdGEuZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyPtCe0L/Qu9Cw0YLQsCB7b3BlcmF0b3JEYXRhLmRhdGEub3BlcmF0b3JOYW1lfTwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiBkaXNhYmxlZD17IXZhbGlkRm9ybX0gb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+0J7Qv9C70LDRgtC40YLRjDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYXltZW50Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxQb3B1cENvbnRhaW5lciB2aXNpYmxlPXtwb3B1cEZsYWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcGVyYXRpb25SZXN1bHQ+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nLjwvT3BlcmF0aW9uUmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgPC9Qb3B1cENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57b3BlcmF0b3JEYXRhPy5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcGVyYXRvckRhdGEge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JMaW5rOiBzdHJpbmcsXHJcbiAgICAgICAgaW1nVXJsPzogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZXJyTWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb2s6IGJvb2xlYW5cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgb3BlcmF0b3JEYXRhOiBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9