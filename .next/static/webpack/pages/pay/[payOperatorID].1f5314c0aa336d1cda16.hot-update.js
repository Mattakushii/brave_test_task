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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    error: 'Поле должно быть заполнено'
  }),
      inputError = _useState[0],
      setInputError = _useState[1];

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
        if (value.length < props.inputValue.length) {
          props.callbackValueState(value);
          props.callbackValidState(false);
          validationError.error = 'Поле должно быть заполнено';
        } else {
          var val = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

          if (value.length === 7) {
            val.splice(6, 0, ')', '-');
            props.callbackValueState(val.join(''));
            console.log(val.join(''), value);
          }

          if (value.length === 12) {
            val.splice(11, 0, '-');
            props.callbackValueState(val.join(''));
            console.log(val);
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
          props.callbackValueState(value);
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
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, props.labelContent, ":"), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    valid: props.inputValid,
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
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, inputError.error));
};

_s(InputForm, "8SNjxWCrm9DCmmaNz3su4DCFw3A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giXSwibmFtZXMiOlsiSW5wdXRGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVycm9yIiwiaW5wdXRFcnJvciIsInNldElucHV0RXJyb3IiLCJwaG9uZVJlZ2V4cCIsInBheW1lbnRSZWdleHAiLCJsZXR0ZXJSZWdleHAiLCJoYW5kbGVVc2VySW5wdXQiLCJlIiwiaW5wdXROYW1lIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2FsbGJhY2tWYWx1ZVN0YXRlIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1ZhbGlkVmFsdWUiLCJpbnB1dFZhbGlkIiwibGVuZ3RoIiwiaW5wdXRWYWx1ZSIsImNhbGxiYWNrVmFsaWRTdGF0ZSIsInZhbCIsInNwbGljZSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiYmxvY2tlZFZhbHVlIiwic2xpY2UiLCJ0ZXN0IiwibWF0Y2giLCJwYXJzZUludCIsInBhc3NGaXJzdFZhbHVlIiwibGFiZWxDb250ZW50IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBMEI7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQztBQUN6Q0MsU0FBSyxFQUFFO0FBRGtDLEdBQUQsQ0FESjtBQUFBLE1BQ2pDQyxVQURpQztBQUFBLE1BQ3JCQyxhQURxQjs7QUFLeEMsTUFBTUMsV0FBVyxHQUFHLHdFQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxPQUF0QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxvQkFBckI7O0FBRUEsV0FBU0MsZUFBVCxDQUF5QkMsQ0FBekIsRUFBa0U7QUFDOUQsUUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFB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QUssQ0FBQ1ksSUFIaEI7QUFJSSxRQUFJLEVBQUVaLEtBQUssQ0FBQ21DLElBSmhCO0FBS0ksU0FBSyxFQUFFbkMsS0FBSyxDQUFDb0IsVUFMakI7QUFNSSxlQUFXLEVBQUVwQixLQUFLLENBQUNvQyxXQU52QjtBQU9JLFlBQVEsRUFBRSxrQkFBQzNCLENBQUQsRUFBMkM7QUFBQ0QscUJBQWUsQ0FBQ0MsQ0FBRCxDQUFmO0FBQW1CLEtBUDdFO0FBUUksV0FBTyxFQUFFLG1CQUFLO0FBQUN1QixvQkFBYztBQUFHLEtBUnBDO0FBU0ksV0FBTyxFQUFFLG1CQUFLO0FBQUNBLG9CQUFjO0FBQUcsS0FUcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBYUksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWU3QixVQUFVLENBQUNELEtBQTFCLENBYkosQ0FESjtBQWlCSCxDQTFHRDs7R0FBTUgsUzs7S0FBQUEsUztBQTRHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS4xZjUzMTRjMGFhMzM2ZDFjZGExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZSwgTGFiZWx9IGZyb20gXCIuL0lucHV0Rm9ybVN0eWxlZFwiO1xyXG5cclxuaW50ZXJmYWNlIElucHV0Rm9ybVByb3BzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxyXG4gICAgbGFiZWxDb250ZW50OiBzdHJpbmcsXHJcbiAgICBjYWxsYmFja1ZhbHVlU3RhdGUodmFsdWU6c3RyaW5nKTogdm9pZCxcclxuICAgIGNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkOiBib29sZWFuKTogdm9pZCxcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIGlucHV0VmFsaWQ6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0RXJyb3IsIHNldElucHV0RXJyb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3QvicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9eXFxkKyQvO1xyXG4gICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC87XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsdWUpO1xyXG4gICAgICAgIHZhbGlkYXRlKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGlucHV0TmFtZTogc3RyaW5nLCB2YWx1ZSA6IHN0cmluZykgOiB2b2lke1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvciA9IGlucHV0RXJyb3I7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRWYWx1ZSA9IHByb3BzLmlucHV0VmFsaWQ7XHJcbiAgICAgICAgc3dpdGNoIChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoIDwgcHJvcHMuaW5wdXRWYWx1ZS5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gWy4uLnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwuam9pbignJyksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTEsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+PSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja2VkVmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAxNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZShibG9ja2VkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBob25lUmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlLm1hdGNoKGxldHRlclJlZ2V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA+PSAxICYmIHZhbCA8PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5wdXRFcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xyXG4gICAgICAgIHByb3BzLmNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkgOiB2b2lkIHtcclxuICAgICAgICBpZihwcm9wcy5pbnB1dFZhbHVlPy5sZW5ndGggPT09IDAgJiYgcHJvcHMubmFtZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUoJys3KCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWxDb250ZW50fTo8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbGlkPXtwcm9wcy5pbnB1dFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge2hhbmRsZVVzZXJJbnB1dChlKX19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntpbnB1dEVycm9yLmVycm9yfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==