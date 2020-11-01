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
        lineNumber: 58,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx(_components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelName: "Сумма оплаты",
      id: "payment",
      type: "text",
      placeholder: "Введите сум",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
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
        lineNumber: 78,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblBob25lRXZlbnRzIiwidmFsaWQiLCJ2YWx1ZSIsImJvb2wiLCJpbnZhbGlkIiwiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidmFsaWRhdGVQaG9uZSIsInZhbGlkYXRlZEFyciIsIm1hdGNoIiwidmFsaWRhdGVkIiwiam9pbiIsInVwZGF0ZVBob25lVmFsdWUiLCJ2YWxpZGF0ZVBheW1lbnQiLCJzdHIiLCJudW0iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlUGF5bWVudFZhbHVlIiwiaWQiLCJvcGVyYXRvck5hbWUiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRztBQUMxQkMsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxVQURKO0FBRUhDLFFBQUksRUFBRTtBQUZILEdBRG1CO0FBSzFCQyxTQUFPLEVBQUU7QUFDTEYsU0FBSyxFQUFFLHlCQURGO0FBRUxDLFFBQUksRUFBRTtBQUZEO0FBTGlCLENBQTlCOztBQVdBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBRTVCO0FBRjRCLGtCQUdGQyxzREFBUSxDQUFDLEVBQUQsQ0FITjtBQUFBLE1BR3JCQyxLQUhxQjtBQUFBLE1BR2RDLFFBSGM7O0FBQUEsbUJBSUVGLHNEQUFRLENBQUMsRUFBRCxDQUpWO0FB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QyxJQUFKLEVBRk87O0FBQUE7QUFFcEIvQixnQkFGb0I7QUFBQSw2Q0FHbkI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQUhtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS45YTMxMTdlMThiMjAxZjUzZGM1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHtQYXltZW50Q29udGFpbmVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dCdcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QaG9uZUV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtkYXRhfSkgPT4ge1xyXG5cclxuICAgIC8v0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNGH0LXRgdC60LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8gdmFsaWRwaG9uZSB2YWxpZHBheW1lbnQg0YfRgtC+0LHRiyDQstC60LvRjtGH0LDRgtGMINCy0YvQutC70Y7Rh9Cw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy/RgdC00LXQu9Cw0YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmREYXRhKGUpIHtcclxuICAgICAgICAvL9C/0YDQvtCy0LXRgNGP0LXRgiDQvdCw0LvQuNGH0LjQtSDRgtC10LvQtdGE0L7QvdCwINC4INGB0YPQvNC80Ysg0L7Qv9C70LDRgtGLLCDQtdGB0LvQuCDQvtC6LCDRgtC+INC+0YLQv9GA0LDQstC70Y/QtdGCINC30LDQv9GA0L7RgSDQvdCwINGE0LXQudC6INCw0L/QuFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhbGVydChwaG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/Rg9Cx0LjRgNCw0LXRgiDQuNC3INGB0YLRgNC+0LrQuCDRgtC10LvQtdGE0L7QvdCwINCy0YHQtSDQu9C40YjQvdC40LUg0YHQuNC80LLQvtC70YtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUGhvbmUodmFsdWUpIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZWRBcnIgPSAgdmFsdWUubWF0Y2goL1xcZC9nKTtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZWQgPSB2YWxpZGF0ZWRBcnIuam9pbignJyk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQaG9uZVZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0L/RgNC+0LLQtdGA0Y/QtdGCINCy0LLQtdC00LXQvdC90YPRjiDRgdGD0LzQvNGDINC90LAg0LfQsNC00LDQvdC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0YsgcmFuZ2UgPSBbbWluLCBtYXhdINC10YHQu9C4INC+0LosINGC0L4g0L7QsdC90L7QstC70Y/QtdGCINGB0L7RgdGC0L7Rj9C90LjQtVxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQYXltZW50KHN0cikge1xyXG4gICAgICAgIGNvbnN0IG51bSA9IHN0ciowXHJcbiAgICAgICAgaWYobnVtID49IDEgfHwgbnVtIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBheW1lbnRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHNldFBheW1lbnQodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy/Qv9C+0YHQvNC+0YLRgNC10YLRjCDQv9GA0LXQtNCw0YfRgyDRgNC10LPRg9C70Y/RgNC60Lgg0LIgbWFzayDQvNC+0LbQvdC+INGB0L7QutGA0LDRgtC40YLRjCDQutC+0LRcclxuXHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+ICBcclxuICAgICAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0LAge2RhdGEub3BlcmF0b3JOYW1lfTwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbE5hbWU9eyfQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyhfX18pLV9fXy1fXy1fX1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtcIis3KDk5OSktOTk5LTk5LTk5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ0V4cD17L1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXZlbnRzID0ge3ZhbGlkYXRpb25QaG9uZUV2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVNZXRob2QgPSB7dmFsaWRhdGVQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDYWxsYmFjayA9IHt1cGRhdGVQaG9uZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbE5hbWU9e1wi0KHRg9C80LzQsCDQvtC/0LvQsNGC0YtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvFwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxoMT57ZGF0YS5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9