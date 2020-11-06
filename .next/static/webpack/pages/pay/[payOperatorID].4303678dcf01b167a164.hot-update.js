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

  console.log(props);

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
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
        lineNumber: 90,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
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
      clear: responseData.result,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
      clear: responseData.result,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
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
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      popupFlag: popupFlag,
      message: responseData.message,
      operationResult: responseData.result,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZvcm0iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRWYWxpZCIsInNldElucHV0VmFsaWQiLCJlcnJvciIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwicGhvbmVSZWdleHAiLCJwYXltZW50UmVnZXhwIiwibGV0dGVyUmVnZXhwIiwiaGFuZGxlVXNlcklucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInZhbGlkYXRlIiwidmFsaWRhdGlvbkVycm9yIiwiaXNWYWxpZFZhbHVlIiwibGVuZ3RoIiwiY2FsbGJhY2tWYWxpZFN0YXRlIiwidmFsIiwic3BsaWNlIiwiam9pbiIsImJsb2NrZWRWYWx1ZSIsInNsaWNlIiwidGVzdCIsIm1hdGNoIiwicGFyc2VJbnQiLCJjYWxsYmFja1ZhbHVlU3RhdGUiLCJwYXNzRmlyc3RWYWx1ZSIsImxhYmVsQ29udGVudCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiUGF5bWVudFBhZ2UiLCJvcGVyYXRvckRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJwb3B1cEZsYWciLCJzZXRQb3B1cEZsYWciLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwicGhvbmVBcnIiLCJyZXFCb2R5IiwicGhvbmVOdW1iZXIiLCJvcGVyYXRvck5hbWUiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXEiLCJqc29uIiwicmVzIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicmVwbGFjZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWFBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBMEI7QUFBQTs7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztBQUR3QyxrQkFFSkcsc0RBQVEsQ0FBQyxFQUFELENBRko7QUFBQSxNQUVqQ0MsVUFGaUM7QUFBQSxNQUVyQkMsYUFGcUI7O0FBQUEsbUJBR0pGLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHakNHLFVBSGlDO0FBQUEsTUFHckJDLGFBSHFCOztBQUFBLG1CQUlKSixzREFBUSxDQUFDO0FBQ3pDSyxTQUFLLEVBQUU7QUFEa0MsR0FBRCxDQUpKO0FBQUEsTUFJakNDLFVBSmlDO0FBQUEsTUFJckJDLGFBSnFCOztBQVV4QyxNQUFNQyxXQUFXLEdBQUcsd0VBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLE9BQXRCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLG9CQUFyQjs7QUFFQSxXQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUFrRTtBQUM5RCxRQUFNQyxTQUFTLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUEzQjtBQUNBLFFBQU1DLEtBQUssR0FBR0osQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBQXZCO0FBQ0FkLGlCQUFhLENBQUNjLEtBQUQsQ0FBYjtBQUNBQyxZQUFRLENBQUNKLFNBQUQsRUFBWUcs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QUFVQyxhQUFsRCxFQURHOztBQUFBO0FBQ3BCUixlQURvQjtBQUFBO0FBQUEsbUJBRW9CQSxHQUFHLENBQUNELElBQUosRUFGcEI7O0FBQUE7QUFFcEJSLGdCQUZvQjtBQUFBLDhDQUduQjtBQUFFMUIsMEJBQVksRUFBRTBCO0FBQWhCLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lM0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS40MzAzNjc4ZGNmMDFiMTY3YTE2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZSwgTGFiZWx9IGZyb20gXCIuL0lucHV0Rm9ybVN0eWxlZFwiO1xyXG5cclxuaW50ZXJmYWNlIElucHV0Rm9ybVByb3BzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxyXG4gICAgbGFiZWxDb250ZW50OiBzdHJpbmcsXHJcbiAgICBjYWxsYmFja1ZhbHVlU3RhdGUodmFsdWU6c3RyaW5nKTogdm9pZCxcclxuICAgIGNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkOiBib29sZWFuKTogdm9pZCxcclxuICAgIGNsZWFyOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5wdXRFcnJvciwgc2V0SW5wdXRFcnJvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZXJyb3I6ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JyxcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcGhvbmVSZWdleHAgPSAvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9LztcclxuICAgIGNvbnN0IHBheW1lbnRSZWdleHAgPSAvXlxcZCskLztcclxuICAgIGNvbnN0IGxldHRlclJlZ2V4cCA9IC9b0LAt0Y/QkC3Qr9GR0IFhLXpBLVpdKyQvO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlIDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgdmFsaWRhdGUoaW5wdXROYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoaW5wdXROYW1lOiBzdHJpbmcsIHZhbHVlIDogc3RyaW5nKSA6IHZvaWR7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbkVycm9yID0gaW5wdXRFcnJvcjtcclxuICAgICAgICBsZXQgaXNWYWxpZFZhbHVlID0gaW5wdXRWYWxpZDtcclxuICAgICAgICBzd2l0Y2ggKGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPCBpbnB1dFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsaWRTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBbLi4udmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDYsIDAsICcpJywgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTEsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDE0LCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+PSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja2VkVmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAxNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUoYmxvY2tlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwaG9uZVJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZS5tYXRjaChsZXR0ZXJSZWdleHApKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bWVudFJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID49IDEgJiYgdmFsIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbnB1dFZhbGlkKGlzVmFsaWRWYWx1ZSk7XHJcbiAgICAgICAgc2V0SW5wdXRFcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xyXG4gICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGlzVmFsaWRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc0ZpcnN0VmFsdWUoKSA6IHZvaWQge1xyXG4gICAgICAgIGlmKGlucHV0VmFsdWUubGVuZ3RoID09PSAwICYmIHByb3BzLm5hbWUgPT09ICdwaG9uZScpIHtcclxuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSgnKzcoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbENvbnRlbnR9OjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ9e2lucHV0VmFsaWR9XHJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7aGFuZGxlVXNlcklucHV0KGUpfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+e2lucHV0RXJyb3IuZXJyb3J9PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZvcm0iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtOZXh0UGFnZUNvbnRleHR9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge1xyXG4gICAgRm9ybUhlYWRlcixcclxuICAgIFBheW1lbnRDb250YWluZXIsXHJcbiAgICBQYXltZW50Rm9ybSxcclxuICAgIFN1Ym1pdEJ1dHRvbixcclxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkJztcclxuaW1wb3J0IElucHV0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnB1dEZvcm1Db21wb25lbnQvSW5wdXRGb3JtXCI7XHJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3B1cENvbXBvbmVudC9Qb3B1cFwiO1xyXG5cclxuaW50ZXJmYWNlIFBheW1lbnRQcm9wcyB7XHJcbiAgICBvcGVyYXRvckRhdGE6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VuZGluZ0RhdGEge1xyXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHBheW1lbnQ6IHN0cmluZyxcclxuICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtvcGVyYXRvckRhdGF9OiBQYXltZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTonJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IFtwb3B1cEZsYWcsIHNldFBvcHVwRmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBpZih2YWxpZFBob25lICYmIHZhbGlkUGF5bWVudCkge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZW5kRGF0YShlOiBSZWFjdC5Gb3JtRXZlbnQpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwaG9uZUFyciA6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gcGhvbmUubWF0Y2goL1xcZC9nKTtcclxuICAgICAgICBjb25zdCB2YWxpZFBob25lID0gcGhvbmVBcnI/LmpvaW4oJycpO1xyXG4gICAgICAgIGNvbnN0IHJlcUJvZHkgOiBTZW5kaW5nRGF0YSA9IHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHZhbGlkUGhvbmUsXHJcbiAgICAgICAgICAgIHBheW1lbnQ6IHBheW1lbnQsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yTmFtZTogb3BlcmF0b3JEYXRhPy5kYXRhLm9wZXJhdG9yTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQb3B1cEZsYWcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQv9C70LDRgtC10LbQsC4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9wdXBGbGFnKGZhbHNlKTtcclxuICAgICAgICAgICAgcmVkaXJlY3QocmVzLnJlc3VsdCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QocmVzdWx0IDogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXI+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ9e1wi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsaWRTdGF0ZT17c2V0SXNWYWxpZFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcj17cmVzcG9uc2VEYXRhLnJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcj17cmVzcG9uc2VEYXRhLnJlc3VsdH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXshdmFsaWRGb3JtfSBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT7QntC/0LvQsNGC0LjRgtGMPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1BheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBGbGFnPXtwb3B1cEZsYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17cmVzcG9uc2VEYXRhLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uUmVzdWx0PXtyZXNwb25zZURhdGEucmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57b3BlcmF0b3JEYXRhPy5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcGVyYXRvckRhdGEge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JMaW5rOiBzdHJpbmcsXHJcbiAgICAgICAgaW1nVXJsPzogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZXJyTWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb2s6IGJvb2xlYW5cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgb3BlcmF0b3JEYXRhOiBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9