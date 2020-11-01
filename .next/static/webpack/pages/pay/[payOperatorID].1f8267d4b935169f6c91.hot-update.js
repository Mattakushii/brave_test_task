webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/pages/pay/[payOperatorID].js":
/*!******************************************!*\
  !*** ./src/pages/pay/[payOperatorID].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.js");




var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var PaymentPage = function PaymentPage(_ref) {
  _s();

  var data = _ref.data;

  //добавить логические состояния validphone validpayment чтобы включать выключать кнопку
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      phone = _useState[0],
      setPhone = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validPhone = _useState2[0],
      setIsValidPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      payment = _useState3[0],
      setPayment = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validPayment = _useState4[0],
      setIsValidPayment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validForm = _useState5[0],
      setIsValidForm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    phone: '',
    payment: ''
  }),
      errors = _useState6[0],
      setErrors = _useState6[1]; //сделать логику для отключения кнопки


  function handleUserInput(e) {
    var inputName = e.target.name;
    var value = e.target.value;

    switch (inputName) {
      case 'phone':
        setPhone(value);
        validateFields(inputName, value);
        break;

      case 'payment':
        setPayment(value);
        validateFields(inputName, value);
        break;

      default:
        break;
    }
  }

  function validateFields(fieldName, value) {
    var validationErrors = errors;
    var isValidPhone = validPhone;
    var isValidPayment = validPayment;
    var phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
    var paymentRegexp = /\d/g;
    var letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

    switch (fieldName) {
      case 'phone':
        if (value.length < phone.length) {
          setPhone(value);
          setIsValidPhone(false);
        } else if (value.length == 7) {
          var _value = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
              val = _value.slice(0);

          val.splice(6, 0, ')', '-');
          setPhone(val.join(''));
        }

        if (value.length == 12) {
          var _value2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
              _val = _value2.slice(0);

          _val.splice(11, 0, '-');

          setPhone(_val.join(''));
        }

        if (value.length == 15) {
          var _value3 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
              _val2 = _value3.slice(0);

          _val2.splice(14, 0, '-');

          setPhone(_val2.join(''));
        }

        if (value.length >= 17) {
          var blockedValue = value.slice(0, 17);
          setPhone(blockedValue);
        }

        if (phoneRegexp.test(value)) {
          isValidPhone = true;
          validationErrors.phone = '';
        } else if (value.match(letterRegexp)) {
          isValidPhone = false;
          validationErrors.phone = 'Поле не должно содержать только цифры';
        } else {
          isValidPhone = false;
          validationErrors.phone = 'Поле должно быть заполено';
        }

        break;

      case 'payment':
        if (paymentRegexp.test(value)) {
          var _val3 = value * 1;

          if (_val3 >= 1 && _val3 <= 1000) {
            isValidPayment = true;
            validationErrors.payment = '';
          } else {
            isValidPayment = false;
            validationErrors.payment = 'Введите сумму в заданных границах (от 1р до 1000р)';
          }
        } else if (value == '') {
          isValidPayment = false;
          validationErrors.payment = 'Заполните поле';
        } else {
          isValidPayment = false;
          validationErrors.payment = 'Поле содержит недопустимые символы';
        }

        break;

      default:
        break;
    }

    setIsValidPhone(isValidPhone);
    setIsValidPayment(isValidPayment);
    setErrors(validationErrors);

    if (isValidPhone && isValidPayment) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }

  function passFirstValue() {
    if (phone.length == 0) {
      setPhone('+7(');
    }
  }

  function sendData(e) {
    //отправить данные на апи
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      id: "phone",
      name: "phone",
      value: phone,
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      onClick: function onClick() {
        return passFirstValue();
      },
      onFocus: function onFocus() {
        return passFirstValue();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, errors.phone)), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }
    }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      id: "payment",
      name: "payment",
      value: payment,
      type: "text",
      placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043E\u0442 1 \u0434\u043E 1000\u0440",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    }, errors.payment)), __jsx("input", {
      disabled: !validForm,
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 16
      }
    }, data.errMessage);
  }
};

_s(PaymentPage, "PL7CLe3wOBYHO9wri9Y+sp6j8Zk=");

_c = PaymentPage;

PaymentPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://localhost:3000/api/operators/".concat(ctx.query.payOperatorID));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZUZpZWxkcyIsImZpZWxkTmFtZSIsInZhbGlkYXRpb25FcnJvcnMiLCJpc1ZhbGlkUGhvbmUiLCJpc1ZhbGlkUGF5bWVudCIsInBob25lUmVnZXhwIiwicGF5bWVudFJlZ2V4cCIsImxldHRlclJlZ2V4cCIsImxlbmd0aCIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsInBhc3NGaXJzdFZhbHVlIiwic2VuZERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwib3BlcmF0b3JOYW1lIiwiZXJyTWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDNUI7QUFENEIsa0JBRUZDLHNEQUFRLENBQUMsRUFBRCxDQUZOO0FBQUEsTUFFckJDLEtBRnFCO0FBQUEsTUFFZEMsUUFGYzs7QUFBQSxtQkFHVUYsc0RBQVEsQ0FBQyxLQUFE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LElBQUksQ0FBQ3lDLFVBQVYsQ0FBUDtBQUNIO0FBQ0osQ0ExSkQ7O0dBQU0xQyxXOztLQUFBQSxXOztBQTRKTkEsV0FBVyxDQUFDMkMsZUFBWjtBQUFBLCtMQUE4QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNSQyxLQUFLLCtDQUF3Q0QsR0FBRyxDQUFDRSxLQUFKLENBQVVDLGFBQWxELEVBREc7O0FBQUE7QUFDcEJDLGVBRG9CO0FBQUE7QUFBQSxtQkFFUEEsR0FBRyxDQUFDQyxJQUFKLEVBRk87O0FBQUE7QUFFcEJoRCxnQkFGb0I7QUFBQSw2Q0FHbkI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQUhtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS4xZjgyNjdkNGI5MzUxNjlmNmM5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHtQYXltZW50Q29udGFpbmVyLCBJbnB1dEJsb2NrLCBJbnB1dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7ZGF0YX0pID0+IHtcclxuICAgIC8v0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNGH0LXRgdC60LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8gdmFsaWRwaG9uZSB2YWxpZHBheW1lbnQg0YfRgtC+0LHRiyDQstC60LvRjtGH0LDRgtGMINCy0YvQutC70Y7Rh9Cw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBwYXltZW50OiAnJyxcclxuICAgIH0pXHJcbiAgICAvL9GB0LTQtdC70LDRgtGMINC70L7Qs9C40LrRgyDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvdC+0L/QutC4XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoKGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkcyhpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIHNldFBheW1lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMoaW5wdXROYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkcyhmaWVsZE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25FcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQaG9uZSA9IHZhbGlkUGhvbmU7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQYXltZW50ID0gdmFsaWRQYXltZW50O1xyXG4gICAgICAgIGNvbnN0IHBob25lUmVnZXhwID0gL1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS87XHJcbiAgICAgICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9cXGQvZztcclxuICAgICAgICBjb25zdCBsZXR0ZXJSZWdleHAgPSAvW9CwLdGP0JAt0K/RkdCBYS16QS1aXSskL1xyXG5cclxuICAgICAgICBzd2l0Y2goZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IHBob25lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodmFsdWUubGVuZ3RoID09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDYsIDAsICcpJywgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PSAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID49IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUoYmxvY2tlZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlLm1hdGNoKGxldHRlclJlZ2V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgPSAn0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINGC0L7Qu9GM0LrQviDRhtC40YTRgNGLJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBpZihwYXltZW50UmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdmFsdWUqMTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWwgPj0gMSAmJiB2YWwgPD0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGF5bWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXltZW50ID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGF5bWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCA9ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXltZW50ID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNWYWxpZFBob25lKGlzVmFsaWRQaG9uZSk7XHJcbiAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoaXNWYWxpZFBheW1lbnQpO1xyXG4gICAgICAgIHNldEVycm9ycyh2YWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgICBpZihpc1ZhbGlkUGhvbmUgJiYgaXNWYWxpZFBheW1lbnQpIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIHtcclxuICAgICAgICBpZihwaG9uZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRQaG9uZSgnKzcoJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoZSkge1xyXG4gICAgICAgIC8v0L7RgtC/0YDQsNCy0LjRgtGMINC00LDQvdC90YvQtSDQvdCwINCw0L/QuFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPiAgXHJcbiAgICAgICAgICAgICAgICA8aDE+0J7Qv9C70LDRgtCwIHtkYXRhLm9wZXJhdG9yTmFtZX08L2gxPiAgICBcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNyg5OTkpLTk5OS05OS05OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlVXNlcklucHV0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBwYXNzRmlyc3RWYWx1ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PiBwYXNzRmlyc3RWYWx1ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZXJyb3JzLnBob25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50XCI+0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0L7RgiAxINC00L4gMTAwMNGAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntlcnJvcnMucGF5bWVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshdmFsaWRGb3JtfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntkYXRhLmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=