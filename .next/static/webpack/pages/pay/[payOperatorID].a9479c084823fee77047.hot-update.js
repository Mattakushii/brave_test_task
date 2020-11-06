webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
false,

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.clear) {
      setInputValue('');
      setInputValid(false);
      setInputError({
        error: 'Поле должно быть заполнено'
      });
    }
  });
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
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, inputError.error));
};

_s(InputForm, "MrKgCOi9epyBfHOAQDoXg5G+fHI=");

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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      dropInputs = _useState8[0],
      setDropInputs = _useState8[1];

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
      setDropInputs(true);
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
        lineNumber: 96,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
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
      clear: dropInputs,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
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
      clear: dropInputs,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
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
        lineNumber: 119,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      popupFlag: popupFlag,
      message: responseData.message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "VSodPtgXoOQg5uwSAQIZyz56bgc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpbnB1dFZhbGlkIiwic2V0SW5wdXRWYWxpZCIsImVycm9yIiwiaW5wdXRFcnJvciIsInNldElucHV0RXJyb3IiLCJ1c2VFZmZlY3QiLCJjbGVhciIsInBob25lUmVnZXhwIiwicGF5bWVudFJlZ2V4cCIsImxldHRlclJlZ2V4cCIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRpb25FcnJvciIsImlzVmFsaWRWYWx1ZSIsImxlbmd0aCIsImNhbGxiYWNrVmFsaWRTdGF0ZSIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsInBhcnNlSW50IiwiY2FsbGJhY2tWYWx1ZVN0YXRlIiwicGFzc0ZpcnN0VmFsdWUiLCJsYWJlbENvbnRlbnQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIlBheW1lbnRQYWdlIiwib3BlcmF0b3JEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwicGhvbmUiLCJzZXRQaG9uZSIsInZhbGlkUGhvbmUiLCJzZXRJc1ZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldElzVmFsaWRQYXltZW50IiwidmFsaWRGb3JtIiwic2V0SXNWYWxpZEZvcm0iLCJyZXN1bHQiLCJtZXNzYWdlIiwicmVzcG9uc2VEYXRhIiwic2V0UmVzcG9uc2VEYXRhIiwicG9wdXBGbGFnIiwic2V0UG9wdXBGbGFnIiwiZHJvcElucHV0cyIsInNldERyb3BJbnB1dHMiLCJ1c2VDYWxsYmFjayIsImNhbGxiYWNrIiwic2VuZERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lQXJyIiwicmVxQm9keSIsInBob25lTnVtYmVyIiwib3BlcmF0b3JOYW1lIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxIiwianNvbiIsInJlcyIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInJlcGxhY2UiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFhQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQTBCO0FBQUE7O0FBQUEsa0JBRUpDLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFakNDLFVBRmlDO0FBQUEsTUFFckJDLGFBRnFCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BR2pDRyxVQUhpQztBQUFBLE1BR3JCQyxhQUhxQjs7QUFBQSxtQkFJSkosc0RBQVEsQ0FBQztBQUN6Q0ssU0FBSyxFQUFFO0FBRGtDLEdBQUQsQ0FKSjtBQUFBLE1BSWpDQyxVQUppQztBQUFBLE1BSXJCQyxhQUpxQjs7QUFReENDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdULEtBQUssQ0FBQ1UsS0FBVCxFQUFnQjtBQUNaUCxtQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBRSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBRyxtQkFBYSxDQUFDO0FBQUNGLGFBQUssRUFBRTtBQUFSLE9BQUQsQ0FBYjtBQUNIO0FBQ0osR0FOUSxDQUFUO0FBUUEsTUFBTUssV0FBVyxHQUFHLHdFQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxPQUF0QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxvQkFB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O0FBQUE7QUFBQSxNQXpCSixDQURKO0FBZ0NILEdBakNELE1BaUNPO0FBQ0gsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtkLFlBQUwsYUFBS0EsWUFBTCx1QkFBS0EsWUFBWSxDQUFFMEMsVUFBbkIsQ0FBUDtBQUNIO0FBQ0osQ0EzR0Q7O0dBQU0zQyxXO1VBQ2FHLHFEOzs7S0FEYkgsVzs7QUF3SE5BLFdBQVcsQ0FBQzRDLGVBQVo7QUFBQSwrTEFBOEIsa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUmQsS0FBSywrQ0FBd0NjLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxhQUFsRCxFQURHOztBQUFBO0FBQ3BCUixlQURvQjtBQUFBO0FBQUEsbUJBRW9CQSxHQUFHLENBQUNELElBQUosRUFGcEI7O0FBQUE7QUFFcEJSLGdCQUZvQjtBQUFBLDhDQUduQjtBQUFFN0IsMEJBQVksRUFBRTZCO0FBQWhCLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lOUIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5hOTQ3OWMwODQ4MjNmZWU3NzA0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZSwgTGFiZWx9IGZyb20gXCIuL0lucHV0Rm9ybVN0eWxlZFwiO1xyXG5cclxuaW50ZXJmYWNlIElucHV0Rm9ybVByb3BzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxyXG4gICAgbGFiZWxDb250ZW50OiBzdHJpbmcsXHJcbiAgICBjYWxsYmFja1ZhbHVlU3RhdGUodmFsdWU6c3RyaW5nKTogdm9pZCxcclxuICAgIGNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkOiBib29sZWFuKTogdm9pZCxcclxuICAgIGNsZWFyOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbGlkLCBzZXRJbnB1dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwcm9wcy5jbGVhcikge1xyXG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgICAgICAgc2V0SW5wdXRWYWxpZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldElucHV0RXJyb3Ioe2Vycm9yOiAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3Qvid9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBob25lUmVnZXhwID0gL1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS87XHJcbiAgICBjb25zdCBwYXltZW50UmVnZXhwID0gL15cXGQrJC87XHJcbiAgICBjb25zdCBsZXR0ZXJSZWdleHAgPSAvW9CwLdGP0JAt0K/RkdCBYS16QS1aXSskLztcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VySW5wdXQoZSA6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHZhbGlkYXRlKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGlucHV0TmFtZTogc3RyaW5nLCB2YWx1ZSA6IHN0cmluZykgOiB2b2lke1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvciA9IGlucHV0RXJyb3I7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRWYWx1ZSA9IGlucHV0VmFsaWQ7XHJcbiAgICAgICAgc3dpdGNoIChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoIDwgaW5wdXRWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gWy4uLnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGJsb2NrZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUubWF0Y2gobGV0dGVyUmVnZXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA+PSAxICYmIHZhbCA8PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5wdXRWYWxpZChpc1ZhbGlkVmFsdWUpO1xyXG4gICAgICAgIHNldElucHV0RXJyb3IodmFsaWRhdGlvbkVycm9yKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsdWUpO1xyXG4gICAgICAgIHByb3BzLmNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkgOiB2b2lkIHtcclxuICAgICAgICBpZihpbnB1dFZhbHVlLmxlbmd0aCA9PT0gMCAmJiBwcm9wcy5uYW1lID09PSAncGhvbmUnKSB7XHJcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoJys3KCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWxDb250ZW50fTo8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbGlkPXtpbnB1dFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge2hhbmRsZVVzZXJJbnB1dChlKX19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntpbnB1dEVycm9yLmVycm9yfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV4dFBhZ2VDb250ZXh0fSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtcclxuICAgIEZvcm1IZWFkZXIsXHJcbiAgICBQYXltZW50Q29udGFpbmVyLFxyXG4gICAgUGF5bWVudEZvcm0sXHJcbiAgICBTdWJtaXRCdXR0b24sXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBcIjtcclxuXHJcbmludGVyZmFjZSBQYXltZW50UHJvcHMge1xyXG4gICAgb3BlcmF0b3JEYXRhOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbmRpbmdEYXRhIHtcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBwYXltZW50OiBzdHJpbmcsXHJcbiAgICBvcGVyYXRvck5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7b3BlcmF0b3JEYXRhfTogUGF5bWVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRJc1ZhbGlkUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGF5bWVudCwgc2V0SXNWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0SXNWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlRGF0YSwgc2V0UmVzcG9uc2VEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICByZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6JydcclxuICAgIH0pXHJcbiAgICBjb25zdCBbcG9wdXBGbGFnLCBzZXRQb3B1cEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Ryb3BJbnB1dHMsIHNldERyb3BJbnB1dHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBpZih2YWxpZFBob25lICYmIHZhbGlkUGF5bWVudCkge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjazooKT0+IHZvaWQpIHtcclxuICAgICAgICBjYWxsYmFjaygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZERhdGEoZTogUmVhY3QuRm9ybUV2ZW50KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVBcnIgOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHBob25lLm1hdGNoKC9cXGQvZyk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRQaG9uZSA9IHBob25lQXJyPy5qb2luKCcnKTtcclxuICAgICAgICBjb25zdCByZXFCb2R5IDogU2VuZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB2YWxpZFBob25lLFxyXG4gICAgICAgICAgICBwYXltZW50OiBwYXltZW50LFxyXG4gICAgICAgICAgICBvcGVyYXRvck5hbWU6IG9wZXJhdG9yRGF0YT8uZGF0YS5vcGVyYXRvck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UG9wdXBGbGFnKHRydWUpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlRGF0YSh7XHJcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfQntCx0YDQsNCx0L7RgtC60LAg0L/Qu9Cw0YLQtdC20LAuLi4nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGF5YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHJlcyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvcHVwRmxhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlcy5yZXN1bHQpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHJlc3VsdCA6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldERyb3BJbnB1dHModHJ1ZSlcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXI+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ9e1wi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsaWRTdGF0ZT17c2V0SXNWYWxpZFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcj17ZHJvcElucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcj17ZHJvcElucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b24gZGlzYWJsZWQ9eyF2YWxpZEZvcm19IG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PtCe0L/Qu9Cw0YLQuNGC0Yw8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cEZsYWc9e3BvcHVwRmxhZ31cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtyZXNwb25zZURhdGEubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8aDE+e29wZXJhdG9yRGF0YT8uZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgT3BlcmF0b3JEYXRhIHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG9wZXJhdG9yTGluazogc3RyaW5nLFxyXG4gICAgICAgIGltZ1VybD86IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGVyck1lc3NhZ2U6IHN0cmluZyxcclxuICAgIG9rOiBib29sZWFuXHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhIDogT3BlcmF0b3JEYXRhIHwgdW5kZWZpbmVkID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IG9wZXJhdG9yRGF0YTogZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==