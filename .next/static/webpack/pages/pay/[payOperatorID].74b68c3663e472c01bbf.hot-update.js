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
      placeholder: "Введите сумму платежа",
      mask: "",
      regExp: /\d{4}/g,
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
        lineNumber: 80,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblBob25lRXZlbnRzIiwidmFsaWQiLCJ2YWx1ZSIsImJvb2wiLCJpbnZhbGlkIiwiUGF5bWVudFBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidmFsaWRhdGVQaG9uZSIsInZhbGlkYXRlZEFyciIsIm1hdGNoIiwidmFsaWRhdGVkIiwiam9pbiIsInVwZGF0ZVBob25lVmFsdWUiLCJ2YWxpZGF0ZVBheW1lbnQiLCJzdHIiLCJudW0iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlUGF5bWVudFZhbHVlIiwiaWQiLCJvcGVyYXRvck5hbWUiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRztBQUMxQkMsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxVQURKO0FBRUhDLFFBQUksRUFBRTtBQUZILEdBRG1CO0FBSzFCQyxTQUFPLEVBQUU7QUFDTEYsU0FBSyxFQUFFLHlCQURGO0FBRUxDLFFBQUksRUFBRTtBQUZEO0FBTGlCLENBQTlCOztBQVdBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBRTVCO0FBRjRCLGtCQUdGQyxzREFBUSxDQUFDLEVBQUQsQ0FITjtBQUFBLE1BR3JCQyxLQUhxQjtBQUFBLE1BR2RDLFFBSGM7O0FBQUEsbUJBSUVGLHNEQUFRLENBQUMsRUFBRCxDQUpWO0FB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QTtBQUNwQkMsZUFEb0I7QUFBQTtBQUFBLG1CQUVQQSxHQUFHLENBQUNDLElBQUosRUFGTzs7QUFBQTtBQUVwQi9CLGdCQUZvQjtBQUFBLDZDQUduQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjc0YjY4YzM2NjNlNDcyYzAxYmJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQge1BheW1lbnRDb250YWluZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0J1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblBob25lRXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCcsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe2RhdGF9KSA9PiB7XHJcblxyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C40YfQtdGB0LrQuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB2YWxpZHBob25lIHZhbGlkcGF5bWVudCDRh9GC0L7QsdGLINCy0LrQu9GO0YfQsNGC0Ywg0LLRi9C60LvRjtGH0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvL9GB0LTQtdC70LDRgtGMINC70L7Qs9C40LrRgyDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvdC+0L/QutC4XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoZSkge1xyXG4gICAgICAgIC8v0L/RgNC+0LLQtdGA0Y/QtdGCINC90LDQu9C40YfQuNC1INGC0LXQu9C10YTQvtC90LAg0Lgg0YHRg9C80LzRiyDQvtC/0LvQsNGC0YssINC10YHQu9C4INC+0LosINGC0L4g0L7RgtC/0YDQsNCy0LvRj9C10YIg0LfQsNC/0YDQvtGBINC90LAg0YTQtdC50Log0LDQv9C4XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFsZXJ0KHBob25lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL9GD0LHQuNGA0LDQtdGCINC40Lcg0YHRgtGA0L7QutC4INGC0LXQu9C10YTQvtC90LAg0LLRgdC1INC70LjRiNC90LjQtSDRgdC40LzQstC+0LvRi1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQaG9uZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEFyciA9ICB2YWx1ZS5tYXRjaCgvXFxkL2cpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZCA9IHZhbGlkYXRlZEFyci5qb2luKCcnKTtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBob25lVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qv9GA0L7QstC10YDRj9C10YIg0LLQstC10LTQtdC90L3Rg9GOINGB0YPQvNC80YMg0L3QsCDQt9Cw0LTQsNC90L3Ri9C1INC/0LDRgNCw0LzQtdGC0YDRiyByYW5nZSA9IFttaW4sIG1heF0g0LXRgdC70Lgg0L7Quiwg0YLQviDQvtCx0L3QvtCy0LvRj9C10YIg0YHQvtGB0YLQvtGP0L3QuNC1XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVBheW1lbnQoc3RyKSB7XHJcbiAgICAgICAgY29uc3QgbnVtID0gc3RyKjBcclxuICAgICAgICBpZihudW0gPj0gMSB8fCBudW0gPD0gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUGF5bWVudFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgc2V0UGF5bWVudCh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvL9C/0L7RgdC80L7RgtGA0LXRgtGMINC/0YDQtdC00LDRh9GDINGA0LXQs9GD0LvRj9GA0LrQuCDQsiBtYXNrINC80L7QttC90L4g0YHQvtC60YDQsNGC0LjRgtGMINC60L7QtFxyXG5cclxuICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0L/Qu9Cw0YLQsCB7ZGF0YS5vcGVyYXRvck5hbWV9PC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTmFtZT17J9Cd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGVsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIis3KF9fXyktX19fLV9fLV9fXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnRXhwPXsvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9L2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FdmVudHMgPSB7dmFsaWRhdGlvblBob25lRXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZU1ldGhvZCA9IHt2YWxpZGF0ZVBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNhbGxiYWNrID0ge3VwZGF0ZVBob25lVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTmFtZT17XCLQodGD0LzQvNCwINC+0L/Qu9Cw0YLRi1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQv9C70LDRgtC10LbQsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdFeHA9ey9cXGR7NH0vZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8aDE+e2RhdGEuZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==