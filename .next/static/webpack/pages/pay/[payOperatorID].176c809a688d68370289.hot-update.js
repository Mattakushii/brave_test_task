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


  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
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
        lineNumber: 18,
        columnNumber: 21
      }
    }), __jsx(_components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelName: "Сумма оплаты",
      id: "payment",
      type: "text",
      placeholder: "Введите сумму платежа",
      mask: "9999",
      regExp: /\d{4}/,
      validationEvents: validationPaymentEvents,
      validationMethod: validatePayment,
      setStateCallbacl: updatePaymentValue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
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
        lineNumber: 40,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJpZCIsIm9wZXJhdG9yTmFtZSIsInZhbGlkYXRpb25QaG9uZUV2ZW50cyIsInZhbGlkYXRlUGhvbmUiLCJ1cGRhdGVQaG9uZVZhbHVlIiwidmFsaWRhdGlvblBheW1lbnRFdmVudHMiLCJ2YWxpZGF0ZVBheW1lbnQiLCJ1cGRhdGVQYXltZW50VmFsdWUiLCJlIiwic2VuZERhdGEiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiLCJyZXMiLCJqc29uIiwidmFsaWQiLCJ2YWx1ZSIsImJvb2wiLCJpbnZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFFNUI7QUFGNEIsa0JBR0ZDLHNEQUFRLENBQUMsRUFBRCxDQUhOO0FBQUEsTUFHckJDLEtBSHFCO0FBQUEsTUFHZEMsUUFIYzs7QUFBQSxtQkFJRUYsc0RBQVEsQ0FBQyxFQUFELENBSlY7QUFBQSxNQUlyQkcsT0FKcUI7QUFBQSxNQUlaQyxVQUpZLGtCQUs1Qjs7O0FBR0EsTUFBSUwsSUFBSSxJQUFJQSxJQUFJLENBQUNNLEVBQWpCLEVBQXFCO0FBQ2pCLFdBQ0ksTUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFBWU4sSUFBSSxDQUFDTyxZQUFqQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsNEVBQUQ7QUFDSSxlQUFTLEVBQUUsZ0JBRGY7QUFFSSxRQUFFLEVBQUUsT0FGUjtBQUdJLFVBQUksRUFBRSxLQUhWO0FBSUksaUJBQVcsRUFBRSxtQkFKakI7QUFLSSxVQUFJLEVBQUUsbUJBTFY7QUFNSSxZQUFNLEVBQUUseUVBTlo7QUFPSSxzQkFBZ0IsRUFBSUMscUJBUHhCO0FBUUksb0JBQWMsRUFBSUMsYUFSdEI7QUFTSSxtQkFBYSxFQUFJQyxnQkFUckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBWUksTUFBQyw0RUFBRDtBQUNJLGVBQVMsRUFBRSxjQURmO0FBRUksUUFBRSxFQUFFLFNBRlI7QUFHSSxVQUFJLEVBQUMsTUFIVDtBQUlJLGlCQUFXLEVBQUUsdUJBSmpCO0FBS0ksVUFBSSxFQUFFLE1BTFY7QUFNSSxZQUFNLEVBQUUsT0FOWjtBQU9JLHNCQUFnQixFQUFJQyx1QkFQeEI7QUFRSSxzQkFBZ0IsRUFBSUMsZUFSeEI7QUFTSSxzQkFBZ0IsRUFBSUMsa0JBVHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaSixFQXVCSTtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBQyx3REFBM0I7QUFBdUMsYUFBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU07QUFBQ0MsZ0JBQVEsQ0FBQ0QsQ0FBRCxDQUFSO0FBQVksT0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXZCSixDQUZKLENBREo7QUE4QkgsR0EvQkQsTUErQk87QUFDUCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2QsSUFBSSxDQUFDZ0IsVUFBVixDQUFQO0FBQ0M7QUFDSixDQTFDRDs7R0FBTWpCLFc7O0tBQUFBLFc7O0FBNENOQSxXQUFXLENBQUNrQixlQUFaO0FBQUEsK0xBQThCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1JDLEtBQUssK0NBQXdDRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsYUFBbEQsRUFERzs7QUFBQTtBQUNwQkMsZUFEb0I7QUFBQTtBQUFBLG1CQUVQQSxHQUFHLENBQUNDLElBQUosRUFGTzs7QUFBQTtBQUVwQnZCLGdCQUZvQjtBQUFBLDZDQUduQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lRCwwRUFBZjtBQUVBLElBQU1TLHFCQUFxQixHQUFHO0FBQzFCZ0IsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxVQURKO0FBRUhDLFFBQUksRUFBRTtBQUZILEdBRG1CO0FBSzFCQyxTQUFPLEVBQUU7QUFDTEYsU0FBSyxFQUFFLHlCQURGO0FBRUxDLFFBQUksRUFBRTtBQUZEO0FBTGlCLENBQTlCO0FBV0EsSUFBTWYsdUJBQXVCLEdBQUc7QUFDNUJhLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUUsVUFESjtBQUVIQyxRQUFJLEVBQUU7QUFGSCxHQURxQjtBQUs1QkMsU0FBTyxFQUFFO0FBQ0xGLFNBQUssRUFBRSxtQ0FERjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQUxtQixDQUFoQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjE3NmM4MDlhNjg4ZDY4MzcwMjg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQge1BheW1lbnRDb250YWluZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0J1xyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe2RhdGF9KSA9PiB7XHJcblxyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C40YfQtdGB0LrQuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB2YWxpZHBob25lIHZhbGlkcGF5bWVudCDRh9GC0L7QsdGLINCy0LrQu9GO0YfQsNGC0Ywg0LLRi9C60LvRjtGH0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvL9GB0LTQtdC70LDRgtGMINC70L7Qs9C40LrRgyDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvdC+0L/QutC4XHJcblxyXG5cclxuICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0L/Qu9Cw0YLQsCB7ZGF0YS5vcGVyYXRvck5hbWV9PC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTmFtZT17J9Cd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGVsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIis3KF9fXyktX19fLV9fLV9fXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnRXhwPXsvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9L2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FdmVudHMgPSB7dmFsaWRhdGlvblBob25lRXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZU1ldGhvZCA9IHt2YWxpZGF0ZVBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNhbGxiYWNrID0ge3VwZGF0ZVBob25lVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTmFtZT17XCLQodGD0LzQvNCwINC+0L/Qu9Cw0YLRi1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQv9C70LDRgtC10LbQsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtcIjk5OTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnRXhwPXsvXFxkezR9L31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkV2ZW50cyA9IHt2YWxpZGF0aW9uUGF5bWVudEV2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1ldGhvZCA9IHt2YWxpZGF0ZVBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlQ2FsbGJhY2wgPSB7dXBkYXRlUGF5bWVudFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxoMT57ZGF0YS5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2VcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QaG9uZUV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QYXltZW50RXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQvtGCIDEg0LTQviAxMDAwINGA0YPQsdC70LXQuScsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=