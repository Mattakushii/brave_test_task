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
      setValidPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      payment = _useState3[0],
      setPayment = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validPayment = _useState4[0],
      setValidPayment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validForm = _useState5[0],
      setValidForm = _useState5[1];

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

          if (_val3 >= 1 || _val3 <= 1000) {
            isValidPayment = true;
            validationErrors.payment = '';
          } else {
            console.log('fds');
            isValidPayment = false;
            validationErrors.payment = 'Введите сумму в заданных границах (от 1р до 1000р)';
            console.log(validationErrors.payment);
          }
        } else {
          isValidPayment = false;
          validationErrors.payment = 'Поле содержит недопустимые символы';
          console.log(validationErrors.payment);
        }

      default:
        break;
    }
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
        lineNumber: 118,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 123,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, '')), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
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
        lineNumber: 137,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
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
        lineNumber: 148,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 16
      }
    }, data.errMessage);
  }
};

_s(PaymentPage, "BvywJkavmB4IUnHScjeznr3GFmU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldFZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldFZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldFZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZUZpZWxkcyIsImZpZWxkTmFtZSIsInZhbGlkYXRpb25FcnJvcnMiLCJpc1ZhbGlkUGhvbmUiLCJpc1ZhbGlkUGF5bWVudCIsInBob25lUmVnZXhwIiwicGF5bWVudFJlZ2V4cCIsImxldHRlclJlZ2V4cCIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXNzRmlyc3RWYWx1ZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJpZCIsIm9wZXJhdG9yTmFtZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQzVCO0FBRDRCLGtCQUVGQyxzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEsbUJBR1FG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O0FBQUEsK0xBQThCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1JDLEtBQUssK0NBQXdDRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsYUFBbEQsRUFERzs7QUFBQTtBQUNwQkMsZUFEb0I7QUFBQTtBQUFBLG1CQUVQQSxHQUFHLENBQUNDLElBQUosRUFGTzs7QUFBQTtBQUVwQmxELGdCQUZvQjtBQUFBLDZDQUduQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLmM4ZmQ4MjhlMmYxNzBiYjBlZTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQge1BheW1lbnRDb250YWluZXIsIElucHV0QmxvY2ssSW5wdXR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0J1xyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICAvL9C00L7QsdCw0LLQuNGC0Ywg0LvQvtCz0LjRh9C10YHQutC40LUg0YHQvtGB0YLQvtGP0L3QuNGPIHZhbGlkcGhvbmUgdmFsaWRwYXltZW50INGH0YLQvtCx0Ysg0LLQutC70Y7Rh9Cw0YLRjCDQstGL0LrQu9GO0YfQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldFZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgcGF5bWVudDogJycsXHJcbiAgICB9KVxyXG4gICAgLy/RgdC00LXQu9Cw0YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoIDwgcGhvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMoaW5wdXROYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGRzKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMoZmllbGROYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uRXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkUGhvbmUgPSB2YWxpZFBob25lO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkUGF5bWVudCA9IHZhbGlkUGF5bWVudDtcclxuICAgICAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRSZWdleHAgPSAvXFxkL2c7XHJcbiAgICAgICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC9cclxuXHJcbiAgICAgICAgc3dpdGNoKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTEsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFsuLi52YWxdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja2VkVmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAxNylcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZShibG9ja2VkVmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwaG9uZVJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQaG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUubWF0Y2gobGV0dGVyUmVnZXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBob25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSA9ICfQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0YLQvtC70YzQutC+INGG0LjRhNGA0YsnXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWRhdGlvbkVycm9ycy5waG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBob25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C10L3QvidcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBob25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGlmKHBheW1lbnRSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB2YWx1ZSoxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsID49IDEgfHwgdmFsIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXltZW50ID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGF5bWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiydcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkge1xyXG4gICAgICAgIGlmKHBob25lLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcrNygnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGhvbmUsIHBheW1lbnQpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPiAgXHJcbiAgICAgICAgICAgICAgICA8aDE+0J7Qv9C70LDRgtCwIHtkYXRhLm9wZXJhdG9yTmFtZX08L2gxPiAgICBcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNyg5OTkpLTk5OS05OS05OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlVXNlcklucHV0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBwYXNzRmlyc3RWYWx1ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PiBwYXNzRmlyc3RWYWx1ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Jyd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBheW1lbnRcIj7QodGD0LzQvNCwINC/0LvQsNGC0LXQttCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXltZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXltZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXltZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KHRg9C80LzQsCDQvtGCIDEg0LTQviAxMDAw0YBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVVzZXJJbnB1dChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgtGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57ZGF0YS5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9