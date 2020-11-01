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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      payment = _useState2[0],
      setPayment = _useState2[1]; //сделать логику для отключения кнопки


  function sendData(e) {
    //проверяет наличие телефона и суммы оплаты, если ок, то отправляет запрос на фейк апи
    e.preventDefault();
    alert(phone);
  } //убирает из строки телефона все лишние символы


  function validatePhone(value) {
    var validatedArr = value.match(/\d/g);
    var validated = validatedArr.join('');
    return validated;
  }

  function updatePhoneValue(value) {
    setPhone(value);
  } //проверяет введенную сумму на заданные параметры range = [min, max] если ок, то обновляет состояние


  function validatePayment(str) {
    var num = str * 0;

    if (num >= 1 || num <= 1000) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }

  function updatePaymentValue(value) {
    setPayment(value);
  } //посмотреть предачу регулярки в mask можно сократить код


  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, __jsx(_components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelName: 'Номер телефона',
      id: "phone",
      type: "tel",
      placeholder: "+7(___)-___-__-__",
      mask: "+7(999)-999-99-99",
      regExp: /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/g,
      validationEvents: validationPhoneEvents,
      validateMethod: validatePhone,
      stateCallback: updatePhoneValue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }), __jsx(_components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelName: "Сумма оплаты",
      id: "payment",
      type: "text",
      placeholder: "Введите сумму платежа",
      mask: "",
      regExp: /\d{4}/,
      validationEvents: val,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx("input", {
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 12
      }
    }, data.errMessage);
  }
};

_s(PaymentPage, "e+yOXp1mK44Fg2fQd9b+/hNWHX0=");

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
    value: 'Введите сумму от 1 до 1000р',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidmFsaWRhdGVQaG9uZSIsInZhbHVlIiwidmFsaWRhdGVkQXJyIiwibWF0Y2giLCJ2YWxpZGF0ZWQiLCJqb2luIiwidXBkYXRlUGhvbmVWYWx1ZSIsInZhbGlkYXRlUGF5bWVudCIsInN0ciIsIm51bSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVQYXltZW50VmFsdWUiLCJpZCIsIm9wZXJhdG9yTmFtZSIsInZhbGlkYXRpb25QaG9uZUV2ZW50cyIsInZhbCIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCIsInJlcyIsImpzb24iLCJ2YWxpZCIsImJvb2wiLCJpbnZhbGlkIiwidmFsaWRhdGlvblBheW1lbnRFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUU1QjtBQUY0QixrQkFHRkMsc0RBQVEsQ0FBQyxFQUFELENBSE47QUFBQSxNQUdyQkMsS0FIcUI7QUFBQSxNQUdkQyxRQUhjOztBQUFBLG1CQUlFRixzREFBUSxDQUFDLEVBQUQsQ0FKVjtBQUFBLE1BSXJCRyxPQUpxQjtBQUFBLE1BSVpDLFVBSlksa0JBSzVCOzs7QUFFQSxXQUFTQyxRQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNqQjtBQUNBQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsU0FBSyxDQUFDUCxLQUFELENB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YUFIbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVELDBFQUFmO0FBRUEsSUFBTTBCLHFCQUFxQixHQUFHO0FBQzFCVSxPQUFLLEVBQUU7QUFDSHhCLFNBQUssRUFBRSxVQURKO0FBRUh5QixRQUFJLEVBQUU7QUFGSCxHQURtQjtBQUsxQkMsU0FBTyxFQUFFO0FBQ0wxQixTQUFLLEVBQUUseUJBREY7QUFFTHlCLFFBQUksRUFBRTtBQUZEO0FBTGlCLENBQTlCO0FBV0EsSUFBTUUsdUJBQXVCLEdBQUc7QUFDNUJILE9BQUssRUFBRTtBQUNIeEIsU0FBSyxFQUFFLFVBREo7QUFFSHlCLFFBQUksRUFBRTtBQUZILEdBRHFCO0FBSzVCQyxTQUFPLEVBQUU7QUFDTDFCLFNBQUssRUFBRSw2QkFERjtBQUVMeUIsUUFBSSxFQUFFO0FBRkQ7QUFMbUIsQ0FBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS4xNzk5YzlhMDcyZGMzOGI5YTA0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHtQYXltZW50Q29udGFpbmVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dCdcclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtkYXRhfSkgPT4ge1xyXG5cclxuICAgIC8v0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNGH0LXRgdC60LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8gdmFsaWRwaG9uZSB2YWxpZHBheW1lbnQg0YfRgtC+0LHRiyDQstC60LvRjtGH0LDRgtGMINCy0YvQutC70Y7Rh9Cw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy/RgdC00LXQu9Cw0YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmREYXRhKGUpIHtcclxuICAgICAgICAvL9C/0YDQvtCy0LXRgNGP0LXRgiDQvdCw0LvQuNGH0LjQtSDRgtC10LvQtdGE0L7QvdCwINC4INGB0YPQvNC80Ysg0L7Qv9C70LDRgtGLLCDQtdGB0LvQuCDQvtC6LCDRgtC+INC+0YLQv9GA0LDQstC70Y/QtdGCINC30LDQv9GA0L7RgSDQvdCwINGE0LXQudC6INCw0L/QuFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhbGVydChwaG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/Rg9Cx0LjRgNCw0LXRgiDQuNC3INGB0YLRgNC+0LrQuCDRgtC10LvQtdGE0L7QvdCwINCy0YHQtSDQu9C40YjQvdC40LUg0YHQuNC80LLQvtC70YtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUGhvbmUodmFsdWUpIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZWRBcnIgPSAgdmFsdWUubWF0Y2goL1xcZC9nKTtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZWQgPSB2YWxpZGF0ZWRBcnIuam9pbignJyk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQaG9uZVZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0L/RgNC+0LLQtdGA0Y/QtdGCINCy0LLQtdC00LXQvdC90YPRjiDRgdGD0LzQvNGDINC90LAg0LfQsNC00LDQvdC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0YsgcmFuZ2UgPSBbbWluLCBtYXhdINC10YHQu9C4INC+0LosINGC0L4g0L7QsdC90L7QstC70Y/QtdGCINGB0L7RgdGC0L7Rj9C90LjQtVxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQYXltZW50KHN0cikge1xyXG4gICAgICAgIGNvbnN0IG51bSA9IHN0ciowXHJcbiAgICAgICAgaWYobnVtID49IDEgfHwgbnVtIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBheW1lbnRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHNldFBheW1lbnQodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy/Qv9C+0YHQvNC+0YLRgNC10YLRjCDQv9GA0LXQtNCw0YfRgyDRgNC10LPRg9C70Y/RgNC60Lgg0LIgbWFzayDQvNC+0LbQvdC+INGB0L7QutGA0LDRgtC40YLRjCDQutC+0LRcclxuXHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+ICBcclxuICAgICAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0LAge2RhdGEub3BlcmF0b3JOYW1lfTwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbE5hbWU9eyfQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyhfX18pLV9fXy1fXy1fX1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtcIis3KDk5OSktOTk5LTk5LTk5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ0V4cD17L1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXZlbnRzID0ge3ZhbGlkYXRpb25QaG9uZUV2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVNZXRob2QgPSB7dmFsaWRhdGVQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDYWxsYmFjayA9IHt1cGRhdGVQaG9uZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbE5hbWU9e1wi0KHRg9C80LzQsCDQvtC/0LvQsNGC0YtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0L/Qu9Cw0YLQtdC20LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnRXhwPXsvXFxkezR9L31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkV2ZW50cyA9IHt2YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPGgxPntkYXRhLmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZVxyXG5cclxuY29uc3QgdmFsaWRhdGlvblBob25lRXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCcsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdmFsaWRhdGlvblBheW1lbnRFdmVudHMgPSB7XHJcbiAgICB2YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQtdGA0L3QviEhIScsIFxyXG4gICAgICAgIGJvb2w6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINC+0YIgMSDQtNC+IDEwMDDRgCcsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=