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

          console.log(_val3);

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
  }

  function passFirstValue() {
    if (phone.length == 0) {
      setPhone('+7(');
    }
  }

  function sendData(e) {
    console.log(phone, payment);
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 130,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, '')), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
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
        lineNumber: 144,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx("input", {
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZUZpZWxkcyIsImZpZWxkTmFtZSIsInZhbGlkYXRpb25FcnJvcnMiLCJpc1ZhbGlkUGhvbmUiLCJpc1ZhbGlkUGF5bWVudCIsInBob25lUmVnZXhwIiwicGF5bWVudFJlZ2V4cCIsImxldHRlclJlZ2V4cCIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXNzRmlyc3RWYWx1ZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJpZCIsIm9wZXJhdG9yTmFtZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQzVCO0FBRDRCLGtCQUVGQyxzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEs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LENBQUQsQ0FBUjtBQUFZLE9BQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE1QkosQ0FGSixDQURKO0FBbUNILEdBcENELE1Bb0NPO0FBQ0gsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtmLElBQUksQ0FBQzJDLFVBQVYsQ0FBUDtBQUNIO0FBQ0osQ0E3SkQ7O0dBQU01QyxXOztLQUFBQSxXOztBQStKTkEsV0FBVyxDQUFDNkMsZUFBWjtBQUFBLCtMQUE4QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNSQyxLQUFLLCtDQUF3Q0QsR0FBRyxDQUFDRSxLQUFKLENBQVVDLGFBQWxELEVBREc7O0FBQUE7QUFDcEJDLGVBRG9CO0FBQUE7QUFBQSxtQkFFUEEsR0FBRyxDQUFDQyxJQUFKLEVBRk87O0FBQUE7QUFFcEJsRCxnQkFGb0I7QUFBQSw2Q0FHbkI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQUhtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS42MTk2MWUzZWQ4YTZkNTIzZGM1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHtQYXltZW50Q29udGFpbmVyLCBJbnB1dEJsb2NrLElucHV0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dCdcclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C40YfQtdGB0LrQuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB2YWxpZHBob25lIHZhbGlkcGF5bWVudCDRh9GC0L7QsdGLINCy0LrQu9GO0YfQsNGC0Ywg0LLRi9C60LvRjtGH0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0SXNWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldElzVmFsaWRQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZEZvcm0sIHNldElzVmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIHBheW1lbnQ6ICcnLFxyXG4gICAgfSlcclxuICAgIC8v0YHQtNC10LvQsNGC0Ywg0LvQvtCz0LjQutGDINC00LvRjyDQvtGC0LrQu9GO0YfQtdC90LjRjyDQutC90L7Qv9C60LhcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzd2l0Y2goaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IHBob25lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGRzKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkcyhpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzKGZpZWxkTmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbkVycm9ycyA9IGVycm9ycztcclxuICAgICAgICBsZXQgaXNWYWxpZFBob25lID0gdmFsaWRQaG9uZTtcclxuICAgICAgICBsZXQgaXNWYWxpZFBheW1lbnQgPSB2YWxpZFBheW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcGhvbmVSZWdleHAgPSAvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9LztcclxuICAgICAgICBjb25zdCBwYXltZW50UmVnZXhwID0gL1xcZC9nO1xyXG4gICAgICAgIGNvbnN0IGxldHRlclJlZ2V4cCA9IC9b0LAt0Y/QkC3Qr9GR0IFhLXpBLVpdKyQvXHJcblxyXG4gICAgICAgIHN3aXRjaChmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDYsIDAsICcpJywgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PSAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID49IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUoYmxvY2tlZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlLm1hdGNoKGxldHRlclJlZ2V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgPSAn0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINGC0L7Qu9GM0LrQviDRhtC40YTRgNGLJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGhvbmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWRhdGlvbkVycm9ycy5waG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBpZihwYXltZW50UmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdmFsdWUqMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbCA+PSAxICYmIHZhbCA8PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXltZW50ID0gJydcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGF5bWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWRhdGlvbkVycm9ycy5wYXltZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXltZW50ID0gJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSdcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGF5bWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiydcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNWYWxpZFBob25lKGlzVmFsaWRQaG9uZSk7XHJcbiAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoaXNWYWxpZFBheW1lbnQpO1xyXG4gICAgICAgIHNldEVycm9ycyh2YWxpZGF0aW9uRXJyb3JzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc0ZpcnN0VmFsdWUoKSB7XHJcbiAgICAgICAgaWYocGhvbmUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJys3KCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmREYXRhKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwaG9uZSwgcGF5bWVudCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+ICBcclxuICAgICAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0LAge2RhdGEub3BlcmF0b3JOYW1lfTwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj7QndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis3KDk5OSktOTk5LTk5LTk5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHBhc3NGaXJzdFZhbHVlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHBhc3NGaXJzdFZhbHVlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsnJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5bWVudFwiPtCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBheW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQodGD0LzQvNCwINC+0YIgMSDQtNC+IDEwMDDRgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlVXNlcklucHV0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGC0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntkYXRhLmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=