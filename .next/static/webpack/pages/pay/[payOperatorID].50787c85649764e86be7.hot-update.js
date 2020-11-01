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
        setPhone(value);
        validateForm(inputName, value);
        break;

      case 'payment':
        setPayment(value);
        validateForm(inputName, value);
        break;

      default:
        break;
    }
  }

  function validateForm(fieldName, value) {
    var validationErrors = errors;
    var isValidPhone = validPhone;
    var isValidPayment = validPayment;
    var phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;

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
          isValidPhone(true);
          validationErrors.phone = '';
        } else {
          isValidPhone(false);
          validationErrors.phone = 'Введенный номер должен содержать только цифры';
        }

        break;

      case 'payment':
        console.log(value);

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
        lineNumber: 90,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
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
        lineNumber: 95,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
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
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
        lineNumber: 120,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
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
var validationPhoneEvents = {
  valid: {
    value: 'Верно!!!',
    bool: true
  },
  invalid: {
    value: 'Заполните поле до конца',
    bool: false
  }
};
var validationPaymentEvents = {
  valid: {
    value: 'Верно!!!',
    bool: true
  },
  invalid: {
    value: 'Введите сумму от 1 до 1000 рублей',
    bool: false
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldFZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldFZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldFZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZUZvcm0iLCJmaWVsZE5hbWUiLCJ2YWxpZGF0aW9uRXJyb3JzIiwiaXNWYWxpZFBob25lIiwiaXNWYWxpZFBheW1lbnQiLCJwaG9uZVJlZ2V4cCIsImxlbmd0aCIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwicGFzc0ZpcnN0VmFsdWUiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJvcGVyYXRvck5hbWUiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiLCJyZXMiLCJqc29uIiwidmFsaWRhdGlvblBob25lRXZlbnRzIiwidmFsaWQiLCJib29sIiwiaW52YWxpZCIsInZhbGlkYXRpb25QYXltZW50RXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUM1QjtBQUQ0QixrQkFFRkMsc0RBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUVyQkMsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUdyQkcsVUFIcUI7QUFBQSxNQUdUQyxhQUhTOztBQUFBLG1CQUlFSixzREFBUSxDQUFDLEVBQUQsQ0FKVjtBQUFBLE1BSXJCSyxPQUpxQjtBQUFBLE1BSVpDLFVBSlk7O0FBQUEsbUJBS1lOLHNEQUFRLENBQUMsS0FBRCxDQUxwQjtBQUFBLE1BS3JCTyxZQUxxQjtBQUFBLE1BS1BDLGVBTE87O0FBQUEsbUJBTU1SLHNEQUFRLENBQUMsS0FBRCxDQU5kO0FBQUEsTUFNckJTLFNBTnFCO0FBQUEsTUFNVkMsWUFOVTs7QUFBQSxtQkFPQVYsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLEVBRDBCO0FBRWpDSSxXQUFPLEVBQUU7QUFGd0IsR0FBRCxDQVBSO0FBQUEsTUFPckJNLE1BUHFCO0FBQUEsTUFPYkMsU0FQYSxrQkFXNUI7OztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLFFBQU1DLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQTNCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSixDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBdkI7O0FBQ0EsWUFBT0gsU0FBUDtBQUNJLFdBQUssT0FBTDtBQUNJYixnQkFBUSxDQUFDZ0IsS0FBRCxDQUFSO0FBQ0FDLG9CQUFZLENBQUNKLFNBQUQsRUFBWUcsS0FBWixDQUFaO0FBQ0E7O0FBQ0osV0FBSyxTQUFMO0FBQ0laLGtCQUFVLENBQUNZLEtBQUQsQ0FBVjtBQUNBQyxvQkFBWSxDQUFDSixTQUFELEVBQVlHLEtBQVosQ0FBWjtBQUNBOztBQUNKO0FBQ0k7QUFWUjtBQVlIOztBQUVELFdBQVNDLFlBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDRixLQUFqQyxFQUF3QztBQUNwQyxRQUFJRyxnQkFBZ0IsR0FBR1YsTUFBdkI7QUFDQSxRQUFJVyxZQUFZLEdBQUduQixVQUFuQjtBQUNBLFFBQUlvQixjQUFjLEdBQUdoQixZQUFyQjtBQUNBLFFBQU1pQixXQUFXLEdBQUcsd0VBQXBCOztBQUVBLFlBQU9KLFNBQVA7QUFDSSxXQUFLLE9BQUw7QUFDSSxZQUFHRixLQUFLLENBQUNPLE1BQU4sSUFBZ0IsQ0FBbkIsRUFBc0I7QUFBQSwwR0FDSFAsS0FERztBQUFBLGNBQ1ZRLEdBRFU7O0FBRWxCQSxhQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixHQUFqQixFQUFzQixHQUF0QjtBQUNBekIsa0JBQVEsQ0FBQ3dCLEdBQUcsQ0FBQ0UsSUFBSixDQUFTLEVBQVQsQ0FBRCxDQUFSO0FBQ0g7O0FBQ0QsWUFBR1YsS0FBSyxDQUFDTyxNQUFOLElBQWdCLEVBQW5CLEVBQXVCO0FBQUEsMkdBQ0pQLEtBREk7QUFBQSxjQUNYUSxJQURXOztBQUVuQkEsY0FBRyxDQUFDQyxNQUFKLENBQVcsRUFBWCxFQUFlLENBQWYsRUFBa0IsR0FBbEI7O0FBQ0F6QixrQkFBUSxDQUFDd0IsSUFBRyxDQUFDRSxJQUFKLENBQVMsRUFBVCxDQUFELENBQVI7QUFDSDs7QUFDRCxZQUFHVixLQUFLLENBQUNPLE1BQU4sSUFBZ0IsRUFBbkIsRUFBdUI7QUFBQSwyR0FDSlAsS0FESTtBQUFBLGNBQ1hRLEtBRFc7O0FBRW5CQSxlQUFHLENBQUNDLE1BQUosQ0FBVyxFQUFYLEVBQWUsQ0FBZixFQUFrQixHQUFsQjs7QUFDQXpCLGtCQUFRLENBQUN3QixLQUFHLENBQUNFLElBQUosQ0FBUyxFQUFULENBQUQsQ0FBUjtBQUNIOztBQUNELFlBQUdWLEtBQUssQ0FBQ08sTUFBTixJQUFnQixFQUFuQixFQUF1QjtBQUNuQixjQUFNSSxZQUFZLEdBQUdYLEtBQUssQ0FBQ1ksS0FBTixDQUFZLENBQVosRUFBZSxFQUFmLENBQXJCO0FBQ0E1QixrQkFBUSxDQUFDMkIsWUFBRCxDQUFSO0FBQ0g7O0FBQ0QsWUFBR0wsV0FBVyxDQUFDTyxJQUFaLENBQWlCYixLQUFqQixDQUFILEVBQTRCO0FBQ3hCSSxzQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRCwwQkFBZ0IsQ0FBQ3BCLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0gsU0FIRCxNQUdPO0FBQ0hxQixzQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBRCwwQkFBZ0IsQ0FBQ3BCLEtBQWpCLEdBQXlCLCtDQUF6QjtBQUNIOztBQUNEOztBQUNKLFdBQUssU0FBTDtBQUNJK0IsZUFBTyxDQUFDQyxHQUFSLENBQVlmLEtBQVo7O0FBQ0o7QUFDSTtBQWhDUjtBQWtDSDs7QUFFRCxXQUFTZ0IsY0FBVCxHQUEwQjtBQUN0QixRQUFHakMsS0FBSyxDQUFDd0IsTUFBTixJQUFnQixDQUFuQixFQUFzQjtBQUNsQnZCLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKOztBQUVELFdBQVNpQyxRQUFULENBQWtCckIsQ0FBbEIsRUFBcUI7QUFDakJrQixXQUFPLENBQUNDLEdBQVIsQ0FBWWhDLEtBQVosRUFBbUJJLE9BQW5CO0FBQ0FTLEtBQUMsQ0FBQ3NCLGNBQUY7QUFDSDs7QUFFRCxNQUFJckMsSUFBSSxJQUFJQSxJQUFJLENBQUNzQyxFQUFqQixFQUFxQjtBQUNqQixXQUNJLE1BQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBQVl0QyxJQUFJLENBQUN1QyxZQUFqQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU8sYUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkFESixFQUVJO0FBQ0ksUUFBRSxFQUFDLE9BRFA7QUFFSSxVQUFJLEVBQUMsT0FGVDtBQUdJLFdBQUssRUFBRXJDLEtBSFg7QUFJSSxVQUFJLEVBQUMsS0FKVDtBQUtJLGlCQUFXLEVBQUMsbUJBTGhCO0FBTUksY0FBUSxFQUFFLGtCQUFDYSxDQUFEO0FBQUEsZUFBTUQsZUFBZSxDQUFDQyxDQUFELENBQXJCO0FBQUEsT0FOZDtBQU9JLGFBQU8sRUFBRTtBQUFBLGVBQUtvQixjQUFjLEVBQW5CO0FBQUEsT0FQYjtBQVFJLGFBQU8sRUFBRTtBQUFBLGVBQUtBLGNBQWMsRUFBbkI7QUFBQSxPQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUdBWkosQ0FESixFQWVJLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU8sYUFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRkFESixFQUVJO0FBQ0ksUUFBRSxFQUFDLFNBRFA7QUFFSSxVQUFJLEVBQUMsU0FGVDtBQUdJLFdBQUssRUFBRTdCLE9BSFg7QUFJSSxVQUFJLEVBQUMsTUFKVDtBQUtJLGlCQUFXLEVBQUMsdUVBTGhCO0FBTUksY0FBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsZUFBTUQsZUFBZSxDQUFDQyxDQUFELENBQXJCO0FBQUEsT0FOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFHQVZKLENBZkosRUE0Qkk7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixXQUFLLEVBQUMsd0RBQTNCO0FBQXVDLGFBQU8sRUFBRSxpQkFBQ0EsQ0FBRCxFQUFNO0FBQUNxQixnQkFBUSxDQUFDckIsQ0FBRCxDQUFSO0FBQVksT0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTVCSixDQUZKLENBREo7QUFtQ0gsR0FwQ0QsTUFvQ087QUFDSCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2YsSUFBSSxDQUFDd0MsVUFBVixDQUFQO0FBQ0g7QUFDSixDQTFIRDs7R0FBTXpDLFc7O0tBQUFBLFc7O0FBNEhOQSxXQUFXLENBQUMwQyxlQUFaO0FBQUEsK0xBQThCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1JDLEtBQUssK0NBQXdDRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsYUFBbEQsRUFERzs7QUFBQTtBQUNwQkMsZUFEb0I7QUFBQTtBQUFBLG1CQUVQQSxHQUFHLENBQUNDLElBQUosRUFGTzs7QUFBQTtBQUVwQi9DLGdCQUZvQjtBQUFBLDZDQUduQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lRCwwRUFBZjtBQUVBLElBQU1pRCxxQkFBcUIsR0FBRztBQUMxQkMsT0FBSyxFQUFFO0FBQ0g5QixTQUFLLEVBQUUsVUFESjtBQUVIK0IsUUFBSSxFQUFFO0FBRkgsR0FEbUI7QUFLMUJDLFNBQU8sRUFBRTtBQUNMaEMsU0FBSyxFQUFFLHlCQURGO0FBRUwrQixRQUFJLEVBQUU7QUFGRDtBQUxpQixDQUE5QjtBQVdBLElBQU1FLHVCQUF1QixHQUFHO0FBQzVCSCxPQUFLLEVBQUU7QUFDSDlCLFNBQUssRUFBRSxVQURKO0FBRUgrQixRQUFJLEVBQUU7QUFGSCxHQURxQjtBQUs1QkMsU0FBTyxFQUFFO0FBQ0xoQyxTQUFLLEVBQUUsbUNBREY7QUFFTCtCLFFBQUksRUFBRTtBQUZEO0FBTG1CLENBQWhDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uNTA3ODdjODU2NDk3NjRlODZiZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7UGF5bWVudENvbnRhaW5lciwgSW5wdXRCbG9jayxJbnB1dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudC9Gb3JtSW5wdXQnXHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7ZGF0YX0pID0+IHtcclxuICAgIC8v0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNGH0LXRgdC60LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8gdmFsaWRwaG9uZSB2YWxpZHBheW1lbnQg0YfRgtC+0LHRiyDQstC60LvRjtGH0LDRgtGMINCy0YvQutC70Y7Rh9Cw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldFZhbGlkUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGF5bWVudCwgc2V0VmFsaWRQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZEZvcm0sIHNldFZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBwYXltZW50OiAnJyxcclxuICAgIH0pXHJcbiAgICAvL9GB0LTQtdC70LDRgtGMINC70L7Qs9C40LrRgyDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvdC+0L/QutC4XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoKGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oaW5wdXROYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25FcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQaG9uZSA9IHZhbGlkUGhvbmU7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQYXltZW50ID0gdmFsaWRQYXltZW50O1xyXG4gICAgICAgIGNvbnN0IHBob25lUmVnZXhwID0gL1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS9cclxuXHJcbiAgICAgICAgc3dpdGNoKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTEsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFsuLi52YWxdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja2VkVmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAxNylcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZShibG9ja2VkVmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwaG9uZVJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQaG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBob25lKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lID0gJ9CS0LLQtdC00LXQvdC90YvQuSDQvdC+0LzQtdGAINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0YLQvtC70YzQutC+INGG0LjRhNGA0YsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc0ZpcnN0VmFsdWUoKSB7XHJcbiAgICAgICAgaWYocGhvbmUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJys3KCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmREYXRhKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwaG9uZSwgcGF5bWVudCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+ICBcclxuICAgICAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0LAge2RhdGEub3BlcmF0b3JOYW1lfTwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj7QndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis3KDk5OSktOTk5LTk5LTk5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHBhc3NGaXJzdFZhbHVlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHBhc3NGaXJzdFZhbHVlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5bWVudFwiPtCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBheW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQodGD0LzQvNCwINC+0YIgMSDQtNC+IDEwMDDRgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlVXNlcklucHV0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGC0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntkYXRhLmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZVxyXG5cclxuY29uc3QgdmFsaWRhdGlvblBob25lRXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCcsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdmFsaWRhdGlvblBheW1lbnRFdmVudHMgPSB7XHJcbiAgICB2YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQtdGA0L3QviEhIScsIFxyXG4gICAgICAgIGJvb2w6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINC+0YIgMSDQtNC+IDEwMDAg0YDRg9Cx0LvQtdC5JyxcclxuICAgICAgICBib29sOiBmYWxzZVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==