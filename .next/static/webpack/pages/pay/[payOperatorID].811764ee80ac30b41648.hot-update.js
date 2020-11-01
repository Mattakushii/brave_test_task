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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.js");
/* harmony import */ var _components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/inputComponent/FormInput */ "./src/components/inputComponent/FormInput.js");



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var PaymentPage = function PaymentPage(_ref) {
  _s();

  var data = _ref.data;

  //добавить логические состояния validphone validpayment чтобы включать выключать кнопку
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      phone = _useState[0],
      setPhone = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPhone = _useState2[0],
      setValidPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      payment = _useState3[0],
      setPayment = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPayment = _useState4[0],
      setValidPayment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validForm = _useState5[0],
      setValidForm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
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
        break;

      case 'payment':
        setPayment(value);
        break;
    }
  }

  function validateForm(fieldName, value) {
    console.log(fieldname, v);
  }

  function handlePhoneChange(e) {
    var value = e.target.value;
    setPhone(value);
  }

  function handlePaymentChange(e) {
    var value = e.target.value;
    setPayment(value);
  }

  function sendData(e) {
    console.log('work');
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx("input", {
      id: "phone",
      value: phone,
      type: "tel",
      onChange: function onChange(e) {
        return handlePhoneChange(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"), __jsx("input", {
      id: "payment",
      value: payment,
      type: "text",
      onChange: function onChange(e) {
        return handlePaymentChange(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
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
        lineNumber: 77,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldFZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldFZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldFZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZUZvcm0iLCJmaWVsZE5hbWUiLCJjb25zb2xlIiwibG9nIiwiZmllbGRuYW1lIiwidiIsImhhbmRsZVBob25lQ2hhbmdlIiwiaGFuZGxlUGF5bWVudENoYW5nZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJpZCIsIm9wZXJhdG9yTmFtZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCIsInJlcyIsImpzb24iLCJ2YWxpZGF0aW9uUGhvbmVFdmVudHMiLCJ2YWxpZCIsImJvb2wiLCJpbnZhbGlkIiwidmFsaWRhdGlvblBheW1lbnRFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUM1QjtBQUQ0QixrQkFFRkMsc0RBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUVyQkMsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUdyQkcsVUFIcUI7QUFBQSxNQUdUQyxh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RjtBQUVMdUIsUUFBSSxFQUFFO0FBRkQ7QUFMaUIsQ0FBOUI7QUFXQSxJQUFNRSx1QkFBdUIsR0FBRztBQUM1QkgsT0FBSyxFQUFFO0FBQ0h0QixTQUFLLEVBQUUsVUFESjtBQUVIdUIsUUFBSSxFQUFFO0FBRkgsR0FEcUI7QUFLNUJDLFNBQU8sRUFBRTtBQUNMeEIsU0FBSyxFQUFFLG1DQURGO0FBRUx1QixRQUFJLEVBQUU7QUFGRDtBQUxtQixDQUFoQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjgxMTc2NGVlODBhYzMwYjQxNjQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQge1BheW1lbnRDb250YWluZXIsIElucHV0QmxvY2ssSW5wdXR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0J1xyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICAvL9C00L7QsdCw0LLQuNGC0Ywg0LvQvtCz0LjRh9C10YHQutC40LUg0YHQvtGB0YLQvtGP0L3QuNGPIHZhbGlkcGhvbmUgdmFsaWRwYXltZW50INGH0YLQvtCx0Ysg0LLQutC70Y7Rh9Cw0YLRjCDQstGL0LrQu9GO0YfQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldFZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgcGF5bWVudDogJycsXHJcbiAgICB9KVxyXG4gICAgLy/RgdC00LXQu9Cw0YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOiBcclxuICAgICAgICAgICAgICAgIHNldFBob25lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIHNldFBheW1lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZmllbGROYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpZWxkbmFtZSx2KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQaG9uZUNoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUGF5bWVudENoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRQYXltZW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dvcmsnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0L/Qu9Cw0YLQsCB7ZGF0YS5vcGVyYXRvck5hbWV9PC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPtCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVQaG9uZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgtGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50XCI+0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVBheW1lbnRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8aDE+e2RhdGEuZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRQYWdlXHJcblxyXG5jb25zdCB2YWxpZGF0aW9uUGhvbmVFdmVudHMgPSB7XHJcbiAgICB2YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQtdGA0L3QviEhIScsIFxyXG4gICAgICAgIGJvb2w6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUg0LTQviDQutC+0L3RhtCwJyxcclxuICAgICAgICBib29sOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uUGF5bWVudEV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0L7RgiAxINC00L4gMTAwMCDRgNGD0LHQu9C10LknLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9