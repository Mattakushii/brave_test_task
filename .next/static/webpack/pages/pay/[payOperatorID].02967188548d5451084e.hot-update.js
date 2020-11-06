webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/inputFormComponent/InputForm.tsx":
/*!*********************************************************!*\
  !*** ./src/components/inputFormComponent/InputForm.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputFormStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputFormStyled */ "./src/components/inputFormComponent/InputFormStyled.ts");


var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\inputFormComponent\\InputForm.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var InputForm = function InputForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      inputValid = _useState2[0],
      setInputValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    error: 'Поле должно быть заполнено'
  }),
      inputError = _useState3[0],
      setInputError = _useState3[1];

  var phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
  var paymentRegexp = /^\d+$/;
  var letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

  function handleUserInput(e) {
    var inputName = e.target.name;
    var value = e.target.value;
    setInputValue(value);
    validate(inputName, value);
  }

  function validate(inputName, value) {
    var validationError = inputError;
    var isValidValue = inputValid;

    switch (inputName) {
      case 'phone':
        if (value.length < inputValue.length) {
          setInputValue(value);
          props.callbackValidState(false);
          validationError.error = 'Поле должно быть заполнено';
        } else {
          var val = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

          if (value.length === 7) {
            val.splice(6, 0, ')', '-');
            setInputValue(val.join(''));
          }

          if (value.length === 12) {
            val.splice(11, 0, '-');
            setInputValue(val.join(''));
          }

          if (value.length === 15) {
            val.splice(14, 0, '-');
            setInputValue(val.join(''));
          }

          if (value.length >= 17) {
            var blockedValue = value.slice(0, 17);
            setInputValue(blockedValue);
          }
        }

        if (phoneRegexp.test(value)) {
          isValidValue = true;
          validationError.error = '';
        } else if (value.match(letterRegexp)) {
          isValidValue = false;
          validationError.error = 'Поле содержит недопустимые символы';
        } else {
          isValidValue = false;
          validationError.error = 'Поле должно быть заполено';
        }

        break;

      case 'payment':
        if (value === '') {
          isValidValue = false;
          validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
        } else if (paymentRegexp.test(value)) {
          var _val = parseInt(value);

          if (_val >= 1 && _val <= 1000) {
            isValidValue = true;
            validationError.error = '';
          } else {
            isValidValue = false;
            validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
          }
        } else {
          isValidValue = false;
          validationError.error = 'Поле содержит недопустимые символы';
        }

        break;

      default:
        break;
    }

    setInputValid(isValidValue);
    setInputError(validationError);
    props.callbackValueState(value);
    props.callbackValidState(isValidValue);
  }

  function passFirstValue() {
    if (inputValue.length === 0 && props.name === 'phone') {
      setInputValue('+7(');
    }
  }

  return __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, props.labelContent, ":"), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    valid: inputValid,
    id: props.id,
    name: props.name,
    type: props.type,
    value: inputValue,
    placeholder: props.placeholder,
    onChange: function onChange(e) {
      handleUserInput(e);
    },
    onClick: function onClick() {
      passFirstValue();
    },
    onFocus: function onFocus() {
      passFirstValue();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, inputError.error));
};

_s(InputForm, "KOWRc6fk5IjEXxVnoXWCkiljo6c=");

_c = InputForm;
/* harmony default export */ __webpack_exports__["default"] = (InputForm);

var _c;

$RefreshReg$(_c, "InputForm");

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
/* harmony import */ var _components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/popupComponent/Popup */ "./src/components/popupComponent/Popup.tsx");



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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      popupFlag = _useState7[0],
      setPopupFlag = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (validPhone && validPayment) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  });

  function useCallback(callback) {
    callback();
  }

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
              setPopupFlag(true);
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
                setPopupFlag(false);
                redirect(res.result);
              }, 2000);

            case 14:
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
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
      response: responseData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
      response: responseData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
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
        lineNumber: 117,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      popupFlag: popupFlag,
      message: responseData.message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "5zZ0r536Dy7SSuNwnYSgmtUtUsE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpbnB1dFZhbGlkIiwic2V0SW5wdXRWYWxpZCIsImVycm9yIiwiaW5wdXRFcnJvciIsInNldElucHV0RXJyb3IiLCJwaG9uZVJlZ2V4cCIsInBheW1lbnRSZWdleHAiLCJsZXR0ZXJSZWdleHAiLCJoYW5kbGVVc2VySW5wdXQiLCJlIiwiaW5wdXROYW1lIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1ZhbGlkVmFsdWUiLCJsZW5ndGgiLCJjYWxsYmFja1ZhbGlkU3RhdGUiLCJ2YWwiLCJzcGxpY2UiLCJqb2luIiwiYmxvY2tlZFZhbHVlIiwic2xpY2UiLCJ0ZXN0IiwibWF0Y2giLCJwYXJzZUludCIsImNhbGxiYWNrVmFsdWVTdGF0ZSIsInBhc3NGaXJzdFZhbHVlIiwibGFiZWxDb250ZW50IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJQYXltZW50UGFnZSIsIm9wZXJhdG9yRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInBob25lIiwic2V0UGhvbmUiLCJ2YWxpZFBob25lIiwic2V0SXNWYWxpZFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJ2YWxpZFBheW1lbnQiLCJzZXRJc1ZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldElzVmFsaWRGb3JtIiwicmVzdWx0IiwibWVzc2FnZSIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsInBvcHVwRmxhZyIsInNldFBvcHVwRmxhZyIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwicGhvbmVBcnIiLCJyZXFCb2R5IiwicGhvbmVOdW1iZXIiLCJvcGVyYXRvck5hbWUiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXEiLCJqc29uIiwicmVzIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicmVwbGFjZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWdCQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQTBCO0FBQUE7O0FBQUEsa0JBRUpDLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFakNDLFVBRmlDO0FBQUEsTUFFckJDLGFBRnFCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BR2pDRyxVQUhpQztBQUFBLE1BR3JCQyxhQUhxQjs7QUFBQSxtQkFJSkosc0RBQVEsQ0FBQztBQUN6Q0ssU0FBSyxFQUFFO0FBRGtDLEdBQUQsQ0FKSjtBQUFBLE1BSWpDQyxVQUppQztBQUFBLE1BSXJCQyxhQUpxQjs7QUFTeEMsTUFBTUMsV0FBVyxHQUFHLHdFQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxPQUF0QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxvQkFBckI7O0FBRUEsV0FBU0MsZUFBVCxDQUF5QkMsQ0FBekIsRUFBa0U7QUFDOUQsUUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFBM0I7QUFDQSxRQUFNQyxLQUFLLEdBQUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUF2QjtBQUNBZCxpQkFBYSxDQUFDYyxLQUFELENBQWI7QUFDQUMsWUFBUSxDQUFDSixTQUFELEVBQVlHLEtBQVosQ0FBUjtBQUNIOztBQUVELFdBQVND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QURvQjtBQUFBO0FBQUEsbUJBRW9CQSxHQUFHLENBQUNELElBQUosRUFGcEI7O0FBQUE7QUFFcEJSLGdCQUZvQjtBQUFBLDhDQUduQjtBQUFFNUIsMEJBQVksRUFBRTRCO0FBQWhCLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lN0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS4wMjk2NzE4ODU0OGQ1NDUxMDg0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZSwgTGFiZWx9IGZyb20gXCIuL0lucHV0Rm9ybVN0eWxlZFwiO1xyXG5cclxuaW50ZXJmYWNlIElucHV0Rm9ybVByb3BzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxyXG4gICAgbGFiZWxDb250ZW50OiBzdHJpbmcsXHJcbiAgICBjYWxsYmFja1ZhbHVlU3RhdGUodmFsdWU6c3RyaW5nKTogdm9pZCxcclxuICAgIGNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkOiBib29sZWFuKTogdm9pZCxcclxuICAgIHJlc3BvbnNlOiB7XHJcbiAgICAgICAgcmVzdWx0OiBib29sZWFuLFxyXG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBJbnB1dEZvcm0gPSAocHJvcHM6SW5wdXRGb3JtUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5wdXRFcnJvciwgc2V0SW5wdXRFcnJvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZXJyb3I6ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JyxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9eXFxkKyQvO1xyXG4gICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC87XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB2YWxpZGF0ZShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWUgOiBzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgPSBpbnB1dEVycm9yO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkVmFsdWUgPSBpbnB1dFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IGlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxMSwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID49IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrZWRWYWx1ZSA9IHZhbHVlLnNsaWNlKDAsIDE3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShibG9ja2VkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBob25lUmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlLm1hdGNoKGxldHRlclJlZ2V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXltZW50UmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPj0gMSAmJiB2YWwgPD0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElucHV0VmFsaWQoaXNWYWxpZFZhbHVlKTtcclxuICAgICAgICBzZXRJbnB1dEVycm9yKHZhbGlkYXRpb25FcnJvcik7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIDogdm9pZCB7XHJcbiAgICAgICAgaWYoaW5wdXRWYWx1ZS5sZW5ndGggPT09IDAgJiYgcHJvcHMubmFtZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcrNygnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsQ29udGVudH06PC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWxpZD17aW5wdXRWYWxpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtoYW5kbGVVc2VySW5wdXQoZSl9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZT57aW5wdXRFcnJvci5lcnJvcn08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Rm9ybSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge05leHRQYWdlQ29udGV4dH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7XHJcbiAgICBGb3JtSGVhZGVyLFxyXG4gICAgUGF5bWVudENvbnRhaW5lcixcclxuICAgIFBheW1lbnRGb3JtLFxyXG4gICAgU3VibWl0QnV0dG9uLFxyXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0Rm9ybUNvbXBvbmVudC9JbnB1dEZvcm1cIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BvcHVwQ29tcG9uZW50L1BvcHVwXCI7XHJcblxyXG5pbnRlcmZhY2UgUGF5bWVudFByb3BzIHtcclxuICAgIG9wZXJhdG9yRGF0YTogT3BlcmF0b3JEYXRhIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTZW5kaW5nRGF0YSB7XHJcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgcGF5bWVudDogc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcclxufVxyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe29wZXJhdG9yRGF0YX06IFBheW1lbnRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0SXNWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldElzVmFsaWRQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZEZvcm0sIHNldElzVmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZURhdGEsIHNldFJlc3BvbnNlRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOicnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3BvcHVwRmxhZywgc2V0UG9wdXBGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGlmKHZhbGlkUGhvbmUgJiYgdmFsaWRQYXltZW50KSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrOigpPT4gdm9pZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZW5kRGF0YShlOiBSZWFjdC5Gb3JtRXZlbnQpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwaG9uZUFyciA6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gcGhvbmUubWF0Y2goL1xcZC9nKTtcclxuICAgICAgICBjb25zdCB2YWxpZFBob25lID0gcGhvbmVBcnI/LmpvaW4oJycpO1xyXG4gICAgICAgIGNvbnN0IHJlcUJvZHkgOiBTZW5kaW5nRGF0YSA9IHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHZhbGlkUGhvbmUsXHJcbiAgICAgICAgICAgIHBheW1lbnQ6IHBheW1lbnQsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yTmFtZTogb3BlcmF0b3JEYXRhPy5kYXRhLm9wZXJhdG9yTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQb3B1cEZsYWcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQv9C70LDRgtC10LbQsC4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9wdXBGbGFnKGZhbHNlKTtcclxuICAgICAgICAgICAgcmVkaXJlY3QocmVzLnJlc3VsdCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QocmVzdWx0IDogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXI+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ9e1wi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsaWRTdGF0ZT17c2V0SXNWYWxpZFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZT17cmVzcG9uc2VEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLQstC10LTQuNGC0LUg0YHRg9C80LzRg1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ9e1wi0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsaWRTdGF0ZT17c2V0SXNWYWxpZFBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlPXtyZXNwb25zZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXshdmFsaWRGb3JtfSBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT7QntC/0LvQsNGC0LjRgtGMPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1BheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBGbGFnPXtwb3B1cEZsYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17cmVzcG9uc2VEYXRhLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntvcGVyYXRvckRhdGE/LmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9wZXJhdG9yRGF0YSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvckxpbms6IHN0cmluZyxcclxuICAgICAgICBpbWdVcmw/OiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBlcnJNZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBvazogYm9vbGVhblxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBvcGVyYXRvckRhdGE6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=