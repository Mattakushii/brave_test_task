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
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
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
        lineNumber: 131,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 25
      }
    }, '')), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 25
      }
    }, "error."), __jsx("input", {
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
        lineNumber: 145,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
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
        lineNumber: 156,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZUZpZWxkcyIsImZpZWxkTmFtZSIsInZhbGlkYXRpb25FcnJvcnMiLCJpc1ZhbGlkUGhvbmUiLCJpc1ZhbGlkUGF5bWVudCIsInBob25lUmVnZXhwIiwicGF5bWVudFJlZ2V4cCIsImxldHRlclJlZ2V4cCIsImxlbmd0aCIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXNzRmlyc3RWYWx1ZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJpZCIsIm9wZXJhdG9yTmFtZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQzVCO0FBRDRCLGtCQUVGQyxzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEs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QyxXQUFLLEVBQUMsd0RBQWpEO0FBQTZELGFBQU8sRUFBRSxpQkFBQ0ssQ0FBRCxFQUFNO0FBQUN3QixnQkFBUSxDQUFDeEIsQ0FBRCxDQUFSO0FBQVksT0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTVCSixDQUZKLENBREo7QUFtQ0gsR0FwQ0QsTUFvQ087QUFDSCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2YsSUFBSSxDQUFDMkMsVUFBVixDQUFQO0FBQ0g7QUFDSixDQTlKRDs7R0FBTTVDLFc7O0tBQUFBLFc7O0FBZ0tOQSxXQUFXLENBQUM2QyxlQUFaO0FBQUEsK0xBQThCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1JDLEtBQUssK0NBQXdDRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsYUFBbEQsRUFERzs7QUFBQTtBQUNwQkMsZUFEb0I7QUFBQTtBQUFBLG1CQUVQQSxHQUFHLENBQUNDLElBQUosRUFGTzs7QUFBQTtBQUVwQmxELGdCQUZvQjtBQUFBLDZDQUduQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLmI1MWJjZjU5NzkyY2JkNTkzN2M2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQge1BheW1lbnRDb250YWluZXIsIElucHV0QmxvY2ssSW5wdXR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0J1xyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICAvL9C00L7QsdCw0LLQuNGC0Ywg0LvQvtCz0LjRh9C10YHQutC40LUg0YHQvtGB0YLQvtGP0L3QuNGPIHZhbGlkcGhvbmUgdmFsaWRwYXltZW50INGH0YLQvtCx0Ysg0LLQutC70Y7Rh9Cw0YLRjCDQstGL0LrQu9GO0YfQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRJc1ZhbGlkUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGF5bWVudCwgc2V0SXNWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0SXNWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgcGF5bWVudDogJycsXHJcbiAgICB9KVxyXG4gICAgLy/RgdC00LXQu9Cw0YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMoaW5wdXROYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGRzKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMoZmllbGROYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uRXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkUGhvbmUgPSB2YWxpZFBob25lO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkUGF5bWVudCA9IHZhbGlkUGF5bWVudDtcclxuICAgICAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRSZWdleHAgPSAvXFxkL2c7XHJcbiAgICAgICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC9cclxuXHJcbiAgICAgICAgc3dpdGNoKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPCBwaG9uZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNWYWxpZFBob25lKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHZhbHVlLmxlbmd0aCA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFsuLi52YWxdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFsuLi52YWxdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxMSwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDE0LCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+PSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrZWRWYWx1ZSA9IHZhbHVlLnNsaWNlKDAsIDE3KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKGJsb2NrZWRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBob25lUmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBob25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZS5tYXRjaChsZXR0ZXJSZWdleHApKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJ9Cf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDRgtC+0LvRjNC60L4g0YbQuNGE0YDRiydcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBob25lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC+J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGhvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYocGF5bWVudFJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHZhbHVlKjE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsID49IDEgJiYgdmFsIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXltZW50ID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoaXNWYWxpZFBob25lKTtcclxuICAgICAgICBzZXRJc1ZhbGlkUGF5bWVudChpc1ZhbGlkUGF5bWVudCk7XHJcbiAgICAgICAgc2V0RXJyb3JzKHZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICAgIGlmKGlzVmFsaWRQaG9uZSAmJiBpc1ZhbGlkUGF5bWVudCkge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkge1xyXG4gICAgICAgIGlmKHBob25lLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcrNygnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+ICBcclxuICAgICAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0LAge2RhdGEub3BlcmF0b3JOYW1lfTwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj7QndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis3KDk5OSktOTk5LTk5LTk5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHBhc3NGaXJzdFZhbHVlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHBhc3NGaXJzdFZhbHVlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsnJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5bWVudFwiPmVycm9yLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0L7RgiAxINC00L4gMTAwMNGAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshdmFsaWRGb3JtfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntkYXRhLmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=