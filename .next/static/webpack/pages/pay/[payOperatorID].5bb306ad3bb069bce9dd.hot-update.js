webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/inputFormComponent/InputForm.tsx":
/*!*********************************************************!*\
  !*** ./src/components/inputFormComponent/InputForm.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputFormStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputFormStyled */ "./src/components/inputFormComponent/InputFormStyled.ts");


var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\inputFormComponent\\InputForm.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var InputForm = function InputForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      inputValid = _useState2[0],
      setInputValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    error: 'Поле должно быть заполнено'
  }),
      inputError = _useState3[0],
      setInputError = _useState3[1];

  var phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
  var paymentRegexp = /^\d+$/;
  var letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

  function handleUserInput(e) {
    var inputName = e.target.name;
    var value = e.target.value;
    props.callbackValueState(value);
    validate(inputName, value);
  }

  function validate(inputName, value) {
    var validationError = inputError;
    var isValidValue = props.inputValid;

    switch (inputName) {
      case 'phone':
        if (value.length < inputValue.length) {
          console.log('удаляю');
          props.callbackValueState(value);
          props.callbackValidState(false);
          validationError.error = 'Поле должно быть заполнено';
        } else {
          var val = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

          if (value.length === 7) {
            val.splice(6, 0, ')', '-');
            props.callbackValueState(val.join(''));
          }

          if (value.length === 12) {
            val.splice(11, 0, '-');
            props.callbackValueState(val.join(''));
          }

          if (value.length === 15) {
            val.splice(14, 0, '-');
            props.callbackValueState(val.join(''));
          }

          if (value.length >= 17) {
            var blockedValue = value.slice(0, 17);
            props.callbackValueState(blockedValue);
          }
        }

        if (phoneRegexp.test(value)) {
          isValidValue = true;
          validationError.error = '';
        } else if (value.match(letterRegexp)) {
          isValidValue = false;
          validationError.error = 'Поле содержит недопустимые символы';
        } else {
          isValidValue = false;
          validationError.error = 'Поле должно быть заполено';
        }

        break;

      case 'payment':
        if (value === '') {
          isValidValue = false;
          validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
        } else if (paymentRegexp.test(value)) {
          var _val = parseInt(value);

          if (_val >= 1 && _val <= 1000) {
            isValidValue = true;
            validationError.error = '';
          } else {
            isValidValue = false;
            validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
          }
        } else {
          isValidValue = false;
          validationError.error = 'Поле содержит недопустимые символы';
        }

        break;

      default:
        break;
    }

    setInputError(validationError);
    props.callbackValueState(value);
    props.callbackValidState(isValidValue);
  }

  function passFirstValue() {
    var _props$inputValue;

    if (((_props$inputValue = props.inputValue) === null || _props$inputValue === void 0 ? void 0 : _props$inputValue.length) === 0 && props.name === 'phone') {
      props.callbackValueState('+7(');
    }
  }

  return __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, props.labelContent, ":"), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    valid: inputValid,
    id: props.id,
    name: props.name,
    type: props.type,
    value: props.inputValue,
    placeholder: props.placeholder,
    onChange: function onChange(e) {
      handleUserInput(e);
    },
    onClick: function onClick() {
      passFirstValue();
    },
    onFocus: function onFocus() {
      passFirstValue();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, inputError.error));
};

_s(InputForm, "KOWRc6fk5IjEXxVnoXWCkiljo6c=");

_c = InputForm;
/* harmony default export */ __webpack_exports__["default"] = (InputForm);

var _c;

$RefreshReg$(_c, "InputForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giXSwibmFtZXMiOlsiSW5wdXRGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRWYWxpZCIsInNldElucHV0VmFsaWQiLCJlcnJvciIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwicGhvbmVSZWdleHAiLCJwYXltZW50UmVnZXhwIiwibGV0dGVyUmVnZXhwIiwiaGFuZGxlVXNlcklucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNhbGxiYWNrVmFsdWVTdGF0ZSIsInZhbGlkYXRlIiwidmFsaWRhdGlvbkVycm9yIiwiaXNWYWxpZFZhbHVlIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrVmFsaWRTdGF0ZSIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsInBhcnNlSW50IiwicGFzc0ZpcnN0VmFsdWUiLCJsYWJlbENvbnRlbnQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBY0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBOztBQUFBLGtCQUVKQyxzREFBUSxDQUFDLEVBQUQsQ0FGSjtBQUFBLE1BRWpDQyxVQUZpQztBQUFBLE1BRXJCQyxhQUZxQjs7QUFBQSxtQkFHSkYsc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdqQ0csVUFIaUM7QUFBQSxNQUdyQkMsYUFIcUI7O0FBQUEsbUJBSUpKLHNEQUFRLENBQUM7QUFDekNLLFNBQUssRUFBRTtBQURrQyxHQUFELENBSko7QUFBQSxNQUlqQ0MsVUFKaUM7QUFBQSxNQUlyQkMsYUFK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QUFDLHNEQUFEO0FBQ0ksU0FBSyxFQUFFL0IsVUFEWDtBQUVJLE1BQUUsRUFBRUosS0FBSyxDQUFDb0MsRUFGZDtBQUdJLFFBQUksRUFBRXBDLEtBQUssQ0FBQ2dCLElBSGhCO0FBSUksUUFBSSxFQUFFaEIsS0FBSyxDQUFDcUMsSUFKaEI7QUFLSSxTQUFLLEVBQUVyQyxLQUFLLENBQUNFLFVBTGpCO0FBTUksZUFBVyxFQUFFRixLQUFLLENBQUNzQyxXQU52QjtBQU9JLFlBQVEsRUFBRSxrQkFBQ3pCLENBQUQsRUFBMkM7QUFBQ0QscUJBQWUsQ0FBQ0MsQ0FBRCxDQUFmO0FBQW1CLEtBUDdFO0FBUUksV0FBTyxFQUFFLG1CQUFLO0FBQUNxQixvQkFBYztBQUFHLEtBUnBDO0FBU0ksV0FBTyxFQUFFLG1CQUFLO0FBQUNBLG9CQUFjO0FBQUcsS0FUcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBYUksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWUzQixVQUFVLENBQUNELEtBQTFCLENBYkosQ0FESjtBQWlCSCxDQTVHRDs7R0FBTVAsUzs7S0FBQUEsUztBQThHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS41YmIzMDZhZDNiYjA2OWJjZTlkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZSwgTGFiZWx9IGZyb20gXCIuL0lucHV0Rm9ybVN0eWxlZFwiO1xyXG5cclxuaW50ZXJmYWNlIElucHV0Rm9ybVByb3BzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxyXG4gICAgbGFiZWxDb250ZW50OiBzdHJpbmcsXHJcbiAgICBjYWxsYmFja1ZhbHVlU3RhdGUodmFsdWU6c3RyaW5nKTogdm9pZCxcclxuICAgIGNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkOiBib29sZWFuKTogdm9pZCxcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIGlucHV0VmFsaWQ6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbGlkLCBzZXRJbnB1dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVSZWdleHAgPSAvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9LztcclxuICAgIGNvbnN0IHBheW1lbnRSZWdleHAgPSAvXlxcZCskLztcclxuICAgIGNvbnN0IGxldHRlclJlZ2V4cCA9IC9b0LAt0Y/QkC3Qr9GR0IFhLXpBLVpdKyQvO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlIDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICB2YWxpZGF0ZShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWUgOiBzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgPSBpbnB1dEVycm9yO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkVmFsdWUgPSBwcm9wcy5pbnB1dFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IGlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9GD0LTQsNC70Y/RjicpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gWy4uLnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTEsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUoYmxvY2tlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwaG9uZVJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZS5tYXRjaChsZXR0ZXJSZWdleHApKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bWVudFJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID49IDEgJiYgdmFsIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbnB1dEVycm9yKHZhbGlkYXRpb25FcnJvcik7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIDogdm9pZCB7XHJcbiAgICAgICAgaWYocHJvcHMuaW5wdXRWYWx1ZT8ubGVuZ3RoID09PSAwICYmIHByb3BzLm5hbWUgPT09ICdwaG9uZScpIHtcclxuICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKCcrNygnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsQ29udGVudH06PC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWxpZD17aW5wdXRWYWxpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtoYW5kbGVVc2VySW5wdXQoZSl9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZT57aW5wdXRFcnJvci5lcnJvcn08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=