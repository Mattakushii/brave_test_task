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
        if (value == '') {
          setPhone(value + '+7(');
        } else if (value) console.log(value);

        break;

      case 'payment':
        console.log(value);

      default:
        break;
    }
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
        lineNumber: 61,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
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
        lineNumber: 78,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
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
        lineNumber: 89,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldFZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldFZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldFZhbGlkRm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJpbnB1dE5hbWUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZUZvcm0iLCJmaWVsZE5hbWUiLCJ2YWxpZGF0aW9uRXJyb3JzIiwiaXNWYWxpZFBob25lIiwiaXNWYWxpZFBheW1lbnQiLCJjb25zb2xlIiwibG9nIiwic2VuZERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwib3BlcmF0b3JOYW1lIiwiZXJyTWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIiwicmVzIiwianNvbiIsInZhbGlkYXRpb25QaG9uZUV2ZW50cyIsInZhbGlkIiwiYm9vbCIsImludmFsaWQiLCJ2YWxpZGF0aW9uUGF5bWVudEV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQzVCO0FBRDRCLGtCQUVGQyxzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR3JCRyxVQUhxQjtBQUFBLE1BR1RDLGFBSFM7O0FB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QUYsYUFIbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVELDBFQUFmO0FBRUEsSUFBTXdDLHFCQUFxQixHQUFHO0FBQzFCQyxPQUFLLEVBQUU7QUFDSHJCLFNBQUssRUFBRSxVQURKO0FBRUhzQixRQUFJLEVBQUU7QUFGSCxHQURtQjtBQUsxQkMsU0FBTyxFQUFFO0FBQ0x2QixTQUFLLEVBQUUseUJBREY7QUFFTHNCLFFBQUksRUFBRTtBQUZEO0FBTGlCLENBQTlCO0FBV0EsSUFBTUUsdUJBQXVCLEdBQUc7QUFDNUJILE9BQUssRUFBRTtBQUNIckIsU0FBSyxFQUFFLFVBREo7QUFFSHNCLFFBQUksRUFBRTtBQUZILEdBRHFCO0FBSzVCQyxTQUFPLEVBQUU7QUFDTHZCLFNBQUssRUFBRSxtQ0FERjtBQUVMc0IsUUFBSSxFQUFFO0FBRkQ7QUFMbUIsQ0FBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS4wMDVlMDc5NDY3NjAxYWUwNjYzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHtQYXltZW50Q29udGFpbmVyLCBJbnB1dEJsb2NrLElucHV0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dCdcclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C40YfQtdGB0LrQuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB2YWxpZHBob25lIHZhbGlkcGF5bWVudCDRh9GC0L7QsdGLINCy0LrQu9GO0YfQsNGC0Ywg0LLRi9C60LvRjtGH0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0VmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0VmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIHBheW1lbnQ6ICcnLFxyXG4gICAgfSlcclxuICAgIC8v0YHQtNC10LvQsNGC0Ywg0LvQvtCz0LjQutGDINC00LvRjyDQvtGC0LrQu9GO0YfQtdC90LjRjyDQutC90L7Qv9C60LhcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzd2l0Y2goaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzogXHJcbiAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oaW5wdXROYW1lLCBwaG9uZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybShpbnB1dE5hbWUsIHBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkTmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbkVycm9ycyA9IGVycm9ycztcclxuICAgICAgICBsZXQgaXNWYWxpZFBob25lID0gdmFsaWRQaG9uZTtcclxuICAgICAgICBsZXQgaXNWYWxpZFBheW1lbnQgPSB2YWxpZFBheW1lbnQ7XHJcblxyXG4gICAgICAgIHN3aXRjaChmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSArICcrNygnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGhvbmUsIHBheW1lbnQpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPiAgXHJcbiAgICAgICAgICAgICAgICA8aDE+0J7Qv9C70LDRgtCwIHtkYXRhLm9wZXJhdG9yTmFtZX08L2gxPiAgICBcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNyg5OTkpLTk5OS05OS05OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlVXNlcklucHV0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGC0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBheW1lbnRcIj7QodGD0LzQvNCwINC/0LvQsNGC0LXQttCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXltZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXltZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXltZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KHRg9C80LzQsCDQvtGCIDEg0LTQviAxMDAw0YBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVVzZXJJbnB1dChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgtGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57ZGF0YS5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2VcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QaG9uZUV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QYXltZW50RXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQvtGCIDEg0LTQviAxMDAwINGA0YPQsdC70LXQuScsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=