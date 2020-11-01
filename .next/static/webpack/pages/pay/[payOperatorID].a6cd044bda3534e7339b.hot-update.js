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
/* harmony import */ var _components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputComponent/FormInput */ "./src/components/inputComponent/FormInput.js");




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
        if (value.length < phone.length) {
          setPhone(value);
        } else {
          setPhone(value);
          validateFields(inputName, value);
        }

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
        if (value.length == 7) {
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
          console.log(validationErrors.phone);
        } else {
          isValidPhone = false;
          validationErrors.phone = 'Поле должно быть заполено';
          console.log(validationErrors.phone);
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
            console.log(validationErrors.payment);
          }
        } else if (value == '') {
          isValidPayment = false;
          validationErrors.payment = 'Заполните поле';
          console.log(validationErrors.payment);
        } else {
          isValidPayment = false;
          validationErrors.payment = 'Поле содержит недопустимые символы';
          console.log(validationErrors.payment);
        }

        break;

      default:
        break;
    }

    setIsValidPhone(isValidPhone);
    setIsValidPayment(isValidPayment);
    setErrors(validationErrors);

    if (isValidPhone && alidPayment) {
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
    console.log("форма " + validForm);
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx("input", {
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
        lineNumber: 133,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    }, '')), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"), __jsx("input", {
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
        lineNumber: 147,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx("input", {
      disabled: !validForm,
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZUZpZWxkcyIsImZpZWxkTmFtZSIsInZhbGlkYXRpb25FcnJvcnMiLCJpc1ZhbGlkUGhvbmUiLCJpc1ZhbGlkUGF5bWVudCIsInBob25lUmVnZXhwIiwicGF5bWVudFJlZ2V4cCIsImxldHRlclJlZ2V4cCIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhbGlkUGF5bWVudCIsInBhc3NGaXJzdFZhbHVlIiwic2VuZERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwib3BlcmF0b3JOYW1lIiwiZXJyTWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDNUI7QUFENEIsa0JBRUZDLHNEQUFRLENBQUMsRUFBRCxDQUZOO0FBQUEsTUFFckJDLEtBRnFCO0FBQUEsTUFF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QUUsQ0FBQ0wsU0FBbEI7QUFBNkIsVUFBSSxFQUFDLFFBQWxDO0FBQTJDLFdBQUssRUFBQyx3REFBakQ7QUFBNkQsYUFBTyxFQUFFLGlCQUFDSyxDQUFELEVBQU07QUFBQ3lCLGdCQUFRLENBQUN6QixDQUFELENBQVI7QUFBWSxPQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BNUJKLENBRkosQ0FESjtBQW1DSCxHQXBDRCxNQW9DTztBQUNILFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLZixJQUFJLENBQUM0QyxVQUFWLENBQVA7QUFDSDtBQUNKLENBaEtEOztHQUFNN0MsVzs7S0FBQUEsVzs7QUFrS05BLFdBQVcsQ0FBQzhDLGVBQVo7QUFBQSwrTEFBOEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUkMsS0FBSywrQ0FBd0NELEdBQUcsQ0FBQ0UsS0FBSixDQUFVQyxhQUFsRCxFQURHOztBQUFBO0FBQ3BCQyxlQURvQjtBQUFBO0FBQUEsbUJBRVBBLEdBQUcsQ0FBQ0MsSUFBSixFQUZPOztBQUFBO0FBRXBCbkQsZ0JBRm9CO0FBQUEsNkNBR25CO0FBQUVBLGtCQUFJLEVBQUpBO0FBQUYsYUFIbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uYTZjZDA0NGJkYTM1MzRlNzMzOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7UGF5bWVudENvbnRhaW5lciwgSW5wdXRCbG9jayxJbnB1dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudC9Gb3JtSW5wdXQnXHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7ZGF0YX0pID0+IHtcclxuICAgIC8v0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNGH0LXRgdC60LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8gdmFsaWRwaG9uZSB2YWxpZHBheW1lbnQg0YfRgtC+0LHRiyDQstC60LvRjtGH0LDRgtGMINCy0YvQutC70Y7Rh9Cw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBwYXltZW50OiAnJyxcclxuICAgIH0pXHJcbiAgICAvL9GB0LTQtdC70LDRgtGMINC70L7Qs9C40LrRgyDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvdC+0L/QutC4XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoKGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPCBwaG9uZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkcyhpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIHNldFBheW1lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMoaW5wdXROYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkcyhmaWVsZE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25FcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQaG9uZSA9IHZhbGlkUGhvbmU7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQYXltZW50ID0gdmFsaWRQYXltZW50O1xyXG4gICAgICAgIGNvbnN0IHBob25lUmVnZXhwID0gL1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS87XHJcbiAgICAgICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9cXGQvZztcclxuICAgICAgICBjb25zdCBsZXR0ZXJSZWdleHAgPSAvW9CwLdGP0JAt0K/RkdCBYS16QS1aXSskL1xyXG5cclxuICAgICAgICBzd2l0Y2goZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFsuLi52YWxdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFsuLi52YWxdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxMSwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDE0LCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+PSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrZWRWYWx1ZSA9IHZhbHVlLnNsaWNlKDAsIDE3KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKGJsb2NrZWRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBob25lUmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBob25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZS5tYXRjaChsZXR0ZXJSZWdleHApKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJ9Cf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDRgtC+0LvRjNC60L4g0YbQuNGE0YDRiydcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBob25lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC+J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGhvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYocGF5bWVudFJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHZhbHVlKjE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsID49IDEgJiYgdmFsIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXltZW50ID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoaXNWYWxpZFBob25lKTtcclxuICAgICAgICBzZXRJc1ZhbGlkUGF5bWVudChpc1ZhbGlkUGF5bWVudCk7XHJcbiAgICAgICAgc2V0RXJyb3JzKHZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICAgIGlmKGlzVmFsaWRQaG9uZSAmJiBhbGlkUGF5bWVudCkge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkge1xyXG4gICAgICAgIGlmKHBob25lLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcrNygnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLRhNC+0YDQvNCwIFwiICsgdmFsaWRGb3JtKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0L/Qu9Cw0YLQsCB7ZGF0YS5vcGVyYXRvck5hbWV9PC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPtCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzcoOTk5KS05OTktOTktOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVVzZXJJbnB1dChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gcGFzc0ZpcnN0VmFsdWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4gcGFzc0ZpcnN0VmFsdWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eycnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50XCI+0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0L7RgiAxINC00L4gMTAwMNGAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshdmFsaWRGb3JtfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntkYXRhLmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=