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
var validationPayEvents = {
  valid: {
    value: 'Верно!!!',
    bool: true
  },
  invalid: {
    value: 'Заполните поле до конца',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidmFsaWRhdGVQaG9uZSIsInZhbHVlIiwidmFsaWRhdGVkQXJyIiwibWF0Y2giLCJ2YWxpZGF0ZWQiLCJqb2luIiwidXBkYXRlUGhvbmVWYWx1ZSIsInZhbGlkYXRlUGF5bWVudCIsInN0ciIsIm51bSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVQYXltZW50VmFsdWUiLCJpZCIsIm9wZXJhdG9yTmFtZSIsInZhbGlkYXRpb25QaG9uZUV2ZW50cyIsInZhbCIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCIsInJlcyIsImpzb24iLCJ2YWxpZCIsImJvb2wiLCJpbnZhbGlkIiwidmFsaWRhdGlvblBheUV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBRTVCO0FBRjRCLGtCQUdGQyxzREFBUSxDQUFDLEVBQUQsQ0FITjtBQUFBLE1BR3JCQyxLQUhxQjtBQUFBLE1BR2RDLFFBSGM7O0FBQUEsbUJBSUVGLHNEQUFRLENBQUMsRUFBRCxDQUpWO0FBQUEsTUFJckJHLE9BSnFCO0FBQUEsTUFJWkMsVUFKWSxrQkFLNUI7OztBQUVBLFdBQVNDLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ2pCO0FBQ0FBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxTQUFLLENBQUNQLEtBQUQsQ0FBTDtB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Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZUQsMEVBQWY7QUFFQSxJQUFNMEIscUJBQXFCLEdBQUc7QUFDMUJVLE9BQUssRUFBRTtBQUNIeEIsU0FBSyxFQUFFLFVBREo7QUFFSHlCLFFBQUksRUFBRTtBQUZILEdBRG1CO0FBSzFCQyxTQUFPLEVBQUU7QUFDTDFCLFNBQUssRUFBRSx5QkFERjtBQUVMeUIsUUFBSSxFQUFFO0FBRkQ7QUFMaUIsQ0FBOUI7QUFXQSxJQUFNRSxtQkFBbUIsR0FBRztBQUN4QkgsT0FBSyxFQUFFO0FBQ0h4QixTQUFLLEVBQUUsVUFESjtBQUVIeUIsUUFBSSxFQUFFO0FBRkgsR0FEaUI7QUFLeEJDLFNBQU8sRUFBRTtBQUNMMUIsU0FBSyxFQUFFLHlCQURGO0FBRUx5QixRQUFJLEVBQUU7QUFGRDtBQUxlLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uYTZhMGY3NzdhOTE4ZWUwNjg2ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7UGF5bWVudENvbnRhaW5lcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudC9Gb3JtSW5wdXQnXHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7ZGF0YX0pID0+IHtcclxuXHJcbiAgICAvL9C00L7QsdCw0LLQuNGC0Ywg0LvQvtCz0LjRh9C10YHQutC40LUg0YHQvtGB0YLQvtGP0L3QuNGPIHZhbGlkcGhvbmUgdmFsaWRwYXltZW50INGH0YLQvtCx0Ysg0LLQutC70Y7Rh9Cw0YLRjCDQstGL0LrQu9GO0YfQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8v0YHQtNC10LvQsNGC0Ywg0LvQvtCz0LjQutGDINC00LvRjyDQvtGC0LrQu9GO0YfQtdC90LjRjyDQutC90L7Qv9C60LhcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDRj9C10YIg0L3QsNC70LjRh9C40LUg0YLQtdC70LXRhNC+0L3QsCDQuCDRgdGD0LzQvNGLINC+0L/Qu9Cw0YLRiywg0LXRgdC70Lgg0L7Quiwg0YLQviDQvtGC0L/RgNCw0LLQu9GP0LXRgiDQt9Cw0L/RgNC+0YEg0L3QsCDRhNC10LnQuiDQsNC/0LhcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYWxlcnQocGhvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0YPQsdC40YDQsNC10YIg0LjQtyDRgdGC0YDQvtC60Lgg0YLQtdC70LXRhNC+0L3QsCDQstGB0LUg0LvQuNGI0L3QuNC1INGB0LjQvNCy0L7Qu9GLXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVBob25lKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkQXJyID0gIHZhbHVlLm1hdGNoKC9cXGQvZyk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkID0gdmFsaWRhdGVkQXJyLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUGhvbmVWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHNldFBob25lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL9C/0YDQvtCy0LXRgNGP0LXRgiDQstCy0LXQtNC10L3QvdGD0Y4g0YHRg9C80LzRgyDQvdCwINC30LDQtNCw0L3QvdGL0LUg0L/QsNGA0LDQvNC10YLRgNGLIHJhbmdlID0gW21pbiwgbWF4XSDQtdGB0LvQuCDQvtC6LCDRgtC+INC+0LHQvdC+0LLQu9GP0LXRgiDRgdC+0YHRgtC+0Y/QvdC40LVcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUGF5bWVudChzdHIpIHtcclxuICAgICAgICBjb25zdCBudW0gPSBzdHIqMFxyXG4gICAgICAgIGlmKG51bSA+PSAxIHx8IG51bSA8PSAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQYXltZW50VmFsdWUodmFsdWUpIHtcclxuICAgICAgICBzZXRQYXltZW50KHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8v0L/QvtGB0LzQvtGC0YDQtdGC0Ywg0L/RgNC10LTQsNGH0YMg0YDQtdCz0YPQu9GP0YDQutC4INCyIG1hc2sg0LzQvtC20L3QviDRgdC+0LrRgNCw0YLQuNGC0Ywg0LrQvtC0XHJcblxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPiAgXHJcbiAgICAgICAgICAgICAgICA8aDE+0J7Qv9C70LDRgtCwIHtkYXRhLm9wZXJhdG9yTmFtZX08L2gxPiAgICBcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxOYW1lPXsn0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiKzcoX19fKS1fX18tX18tX19cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdFeHA9ey9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkV2ZW50cyA9IHt2YWxpZGF0aW9uUGhvbmVFdmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlTWV0aG9kID0ge3ZhbGlkYXRlUGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2sgPSB7dXBkYXRlUGhvbmVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxOYW1lPXtcItCh0YPQvNC80LAg0L7Qv9C70LDRgtGLXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINC/0LvQsNGC0LXQttCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ0V4cD17L1xcZHs0fS99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FdmVudHMgPSB7dmFsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxoMT57ZGF0YS5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2VcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QaG9uZUV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QYXlFdmVudHMgPSB7XHJcbiAgICB2YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQtdGA0L3QviEhIScsIFxyXG4gICAgICAgIGJvb2w6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUg0LTQviDQutC+0L3RhtCwJyxcclxuICAgICAgICBib29sOiBmYWxzZVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==