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
        } else {
          isValidPhone = false;
          validationErrors.phone = 'Поле должно быть заполенн';
          console.log(validationErrors.phone);
        }

        break;

      case 'payment':
        if (paymentRegexp.test(value)) {
          var _val3 = value * 1;

          if (_val3 >= 1 || _val3 <= 1000) {
            isValidPayment = true;
            validationErrors.payment = '';
          } else {
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
        lineNumber: 110,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
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
        lineNumber: 115,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
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
        lineNumber: 129,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
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
        lineNumber: 140,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldFZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldFZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldFZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZUZpZWxkcyIsImZpZWxkTmFtZSIsInZhbGlkYXRpb25FcnJvcnMiLCJpc1ZhbGlkUGhvbmUiLCJpc1ZhbGlkUGF5bWVudCIsInBob25lUmVnZXhwIiwicGF5bWVudFJlZ2V4cCIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwicGFzc0ZpcnN0VmFsdWUiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJvcGVyYXRvck5hbWUiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUM1QjtBQUQ0QixrQkFFRkMsc0RBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUVyQkMsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7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MEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS43MDc0ZjEwNDRlMjgyZDMzMjE2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHtQYXltZW50Q29udGFpbmVyLCBJbnB1dEJsb2NrLElucHV0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dCdcclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C40YfQtdGB0LrQuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB2YWxpZHBob25lIHZhbGlkcGF5bWVudCDRh9GC0L7QsdGLINCy0LrQu9GO0YfQsNGC0Ywg0LLRi9C60LvRjtGH0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0VmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0VmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIHBheW1lbnQ6ICcnLFxyXG4gICAgfSlcclxuICAgIC8v0YHQtNC10LvQsNGC0Ywg0LvQvtCz0LjQutGDINC00LvRjyDQvtGC0LrQu9GO0YfQtdC90LjRjyDQutC90L7Qv9C60LhcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzd2l0Y2goaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IHBob25lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGRzKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkcyhpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzKGZpZWxkTmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbkVycm9ycyA9IGVycm9ycztcclxuICAgICAgICBsZXQgaXNWYWxpZFBob25lID0gdmFsaWRQaG9uZTtcclxuICAgICAgICBsZXQgaXNWYWxpZFBheW1lbnQgPSB2YWxpZFBheW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcGhvbmVSZWdleHAgPSAvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9LztcclxuICAgICAgICBjb25zdCBwYXltZW50UmVnZXhwID0gL1xcZC9nO1xyXG4gICAgICAgIHN3aXRjaChmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDYsIDAsICcpJywgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgWy4uLnZhbF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PSAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID49IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUoYmxvY2tlZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC9J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25FcnJvcnMucGhvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYocGF5bWVudFJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHZhbHVlKjE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsID49IDEgfHwgdmFsIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQYXltZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGF5bWVudCA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBheW1lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBheW1lbnQgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWRhdGlvbkVycm9ycy5wYXltZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIHtcclxuICAgICAgICBpZihwaG9uZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRQaG9uZSgnKzcoJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBob25lLCBwYXltZW50KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0L/Qu9Cw0YLQsCB7ZGF0YS5vcGVyYXRvck5hbWV9PC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPtCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzcoOTk5KS05OTktOTktOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVVzZXJJbnB1dChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gcGFzc0ZpcnN0VmFsdWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4gcGFzc0ZpcnN0VmFsdWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgtGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50XCI+0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0L7RgiAxINC00L4gMTAwMNGAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8aDE+e2RhdGEuZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==