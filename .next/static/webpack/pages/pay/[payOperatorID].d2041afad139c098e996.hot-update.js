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
        validateForm(inputName, phone);
        break;

      case 'payment':
        setPayment(value);
        validateForm(inputName, payment);
        break;

      default:
        break;
    }
  }

  function validateForm(fieldName, value) {
    var validationErrors = errors;
    var isValidPhone = validPhone;
    var isValidPayment = validPayment;

    switch (fieldName) {
      case 'phone':
        console.log(value);
        break;

      case 'payment':
        console.log(value);

      default:
        break;
    }

    console.log(fieldName, value);
  }

  function sendData(e) {
    console.log(phone, payment);
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx("input", {
      id: "phone",
      name: "phone",
      value: phone,
      type: "tel",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"), __jsx("input", {
      id: "payment",
      name: "payment",
      value: payment,
      type: "text",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
        lineNumber: 85,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldFZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldFZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldFZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZUZvcm0iLCJmaWVsZE5hbWUiLCJ2YWxpZGF0aW9uRXJyb3JzIiwiaXNWYWxpZFBob25lIiwiaXNWYWxpZFBheW1lbnQiLCJjb25zb2xlIiwibG9nIiwic2VuZERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwib3BlcmF0b3JOYW1lIiwiZXJyTWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIiwicmVzIiwianNvbiIsInZhbGlkYXRpb25QaG9uZUV2ZW50cyIsInZhbGlkIiwiYm9vbCIsImludmFsaWQiLCJ2YWxpZGF0aW9uUGF5bWVudEV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQzVCO0FBRDRCLGtCQUVGQyxzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR3JCRyxVQUhxQjtBQUFBLE1BR1RDLGFBSFM7O0FB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QkFBcUIsR0FBRztBQUMxQkMsT0FBSyxFQUFFO0FBQ0hyQixTQUFLLEVBQUUsVUFESjtBQUVIc0IsUUFBSSxFQUFFO0FBRkgsR0FEbUI7QUFLMUJDLFNBQU8sRUFBRTtBQUNMdkIsU0FBSyxFQUFFLHlCQURGO0FBRUxzQixRQUFJLEVBQUU7QUFGRDtBQUxpQixDQUE5QjtBQVdBLElBQU1FLHVCQUF1QixHQUFHO0FBQzVCSCxPQUFLLEVBQUU7QUFDSHJCLFNBQUssRUFBRSxVQURKO0FBRUhzQixRQUFJLEVBQUU7QUFGSCxHQURxQjtBQUs1QkMsU0FBTyxFQUFFO0FBQ0x2QixTQUFLLEVBQUUsbUNBREY7QUFFTHNCLFFBQUksRUFBRTtBQUZEO0FBTG1CLENBQWhDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uZDIwNDFhZmFkMTM5YzA5OGU5OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7UGF5bWVudENvbnRhaW5lciwgSW5wdXRCbG9jayxJbnB1dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudC9Gb3JtSW5wdXQnXHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7ZGF0YX0pID0+IHtcclxuICAgIC8v0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNGH0LXRgdC60LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8gdmFsaWRwaG9uZSB2YWxpZHBheW1lbnQg0YfRgtC+0LHRiyDQstC60LvRjtGH0LDRgtGMINCy0YvQutC70Y7Rh9Cw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldFZhbGlkUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGF5bWVudCwgc2V0VmFsaWRQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZEZvcm0sIHNldFZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBwYXltZW50OiAnJyxcclxuICAgIH0pXHJcbiAgICAvL9GB0LTQtdC70LDRgtGMINC70L7Qs9C40LrRgyDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvdC+0L/QutC4XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoKGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6IFxyXG4gICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtKGlucHV0TmFtZSwgcGhvbmUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oaW5wdXROYW1lLCBwYXltZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25FcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQaG9uZSA9IHZhbGlkUGhvbmU7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQYXltZW50ID0gdmFsaWRQYXltZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2goZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzogXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZmllbGROYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBob25lLCBwYXltZW50KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0L/Qu9Cw0YLQsCB7ZGF0YS5vcGVyYXRvck5hbWV9PC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPtCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5bWVudFwiPtCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBheW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVVzZXJJbnB1dChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgtGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57ZGF0YS5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2VcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QaG9uZUV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QYXltZW50RXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQvtGCIDEg0LTQviAxMDAwINGA0YPQsdC70LXQuScsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=