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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.clear) {
      updateStates();
    }
  });

  function updateStates() {
    setInputValue('');
    setInputValid(false);
    setInputError({
      error: 'Поле должно быть заполнено'
    });
  }

  var phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
  var paymentRegexp = /^\d+$/;
  var letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

  function handleUserInput(e) {
    var inputName = e.target.name;
    var value = e.target.value;
    setInputValue(value);
    validate(inputName, value);
  }

  function validate(inputName, value) {
    var validationError = inputError;
    var isValidValue = inputValid;

    switch (inputName) {
      case 'phone':
        if (value.length < inputValue.length) {
          setInputValue(value);
          props.callbackValidState(false);
          validationError.error = 'Поле должно быть заполнено';
        } else {
          var val = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

          if (value.length === 7) {
            val.splice(6, 0, ')', '-');
            setInputValue(val.join(''));
          }

          if (value.length === 12) {
            val.splice(11, 0, '-');
            setInputValue(val.join(''));
          }

          if (value.length === 15) {
            val.splice(14, 0, '-');
            setInputValue(val.join(''));
          }

          if (value.length >= 17) {
            var blockedValue = value.slice(0, 17);
            setInputValue(blockedValue);
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

    setInputValid(isValidValue);
    setInputError(validationError);
    props.callbackValueState(value);
    props.callbackValidState(isValidValue);
  }

  function passFirstValue() {
    if (inputValue.length === 0 && props.name === 'phone') {
      setInputValue('+7(');
    }
  }

  return __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, props.labelContent, ":"), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    valid: inputValid,
    id: props.id,
    name: props.name,
    type: props.type,
    value: inputValue,
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
      lineNumber: 121,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, inputError.error));
};

_s(InputForm, "MrKgCOi9epyBfHOAQDoXg5G+fHI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giXSwibmFtZXMiOlsiSW5wdXRGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRWYWxpZCIsInNldElucHV0VmFsaWQiLCJlcnJvciIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwidXNlRWZmZWN0IiwiY2xlYXIiLCJ1cGRhdGVTdGF0ZXMiLCJwaG9uZVJlZ2V4cCIsInBheW1lbnRSZWdleHAiLCJsZXR0ZXJSZWdleHAiLCJoYW5kbGVVc2VySW5wdXQiLCJlIiwiaW5wdXROYW1lIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1ZhbGlkVmFsdWUiLCJsZW5ndGgiLCJjYWxsYmFja1ZhbGlkU3RhdGUiLCJ2YWwiLCJzcGxpY2UiLCJqb2luIiwiYmxvY2tlZFZhbHVlIiwic2xpY2UiLCJ0ZXN0IiwibWF0Y2giLCJwYXJzZUludCIsImNhbGxiYWNrVmFsdWVTdGF0ZSIsInBhc3NGaXJzdFZhbHVlIiwibGFiZWxDb250ZW50IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWFBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBMEI7QUFBQTs7QUFBQSxrQkFFSkMsc0RBQVEsQ0FBQyxFQUFELENBRko7QUFBQSxNQUVqQ0MsVUFGaUM7QUFBQSxNQUVyQkMsYUFGcUI7O0FBQUEsbUJBR0pGLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHakNHLFVBSGlDO0FBQUEsTUFHckJDLGFBSHFCOztBQUFBLG1CQUlKSixzREFBUSxDQUFDO0FBQ3pDSyxTQUFLLEVBQUU7QUFEa0MsR0FBRCxDQUpKO0FBQUEsTUFJakNDLFVB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU8sV0FBTyxFQUFFSCxLQUFLLENBQUNtQixJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCbkIsS0FBSyxDQUFDb0MsWUFBbkMsTUFESixFQUVJLE1BQUMsc0RBQUQ7QUFDSSxTQUFLLEVBQUVoQyxVQURYO0FBRUksTUFBRSxFQUFFSixLQUFLLENBQUNxQyxFQUZkO0FBR0ksUUFBSSxFQUFFckMsS0FBSyxDQUFDbUIsSUFIaEI7QUFJSSxRQUFJLEVBQUVuQixLQUFLLENBQUNzQyxJQUpoQjtBQUtJLFNBQUssRUFBRXBDLFVBTFg7QUFNSSxlQUFXLEVBQUVGLEtBQUssQ0FBQ3VDLFdBTnZCO0FBT0ksWUFBUSxFQUFFLGtCQUFDdkIsQ0FBRCxFQUEyQztBQUFDRCxxQkFBZSxDQUFDQyxDQUFELENBQWY7QUFBbUIsS0FQN0U7QUFRSSxXQUFPLEVBQUUsbUJBQUs7QUFBQ21CLG9CQUFjO0FBQUcsS0FScEM7QUFTSSxXQUFPLEVBQUUsbUJBQUs7QUFBQ0Esb0JBQWM7QUFBRyxLQVRwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFhSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTVCLFVBQVUsQ0FBQ0QsS0FBMUIsQ0FiSixDQURKO0FBaUJILENBeEhEOztHQUFNUCxTOztLQUFBQSxTO0FBMEhTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjc2NDZlOWE1YmE3YmExNWM0YmZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtJbnB1dEJsb2NrLCBJbnB1dCwgRXJyb3JNZXNzYWdlLCBMYWJlbH0gZnJvbSBcIi4vSW5wdXRGb3JtU3R5bGVkXCI7XHJcblxyXG5pbnRlcmZhY2UgSW5wdXRGb3JtUHJvcHMge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXHJcbiAgICBsYWJlbENvbnRlbnQ6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZTpzdHJpbmcpOiB2b2lkLFxyXG4gICAgY2FsbGJhY2tWYWxpZFN0YXRlKGlzVmFsaWQ6IGJvb2xlYW4pOiB2b2lkLFxyXG4gICAgY2xlYXI6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgSW5wdXRGb3JtID0gKHByb3BzOklucHV0Rm9ybVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsaWQsIHNldElucHV0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lucHV0RXJyb3IsIHNldElucHV0RXJyb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3QvicsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLmNsZWFyKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZXMoKSB7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICAgICAgc2V0SW5wdXRWYWxpZChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5wdXRFcnJvcih7ZXJyb3I6ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+J30pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBob25lUmVnZXhwID0gL1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS87XHJcbiAgICBjb25zdCBwYXltZW50UmVnZXhwID0gL15cXGQrJC87XHJcbiAgICBjb25zdCBsZXR0ZXJSZWdleHAgPSAvW9CwLdGP0JAt0K/RkdCBYS16QS1aXSskLztcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VySW5wdXQoZSA6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHZhbGlkYXRlKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGlucHV0TmFtZTogc3RyaW5nLCB2YWx1ZSA6IHN0cmluZykgOiB2b2lke1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvciA9IGlucHV0RXJyb3I7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRWYWx1ZSA9IGlucHV0VmFsaWQ7XHJcbiAgICAgICAgc3dpdGNoIChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoIDwgaW5wdXRWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gWy4uLnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGJsb2NrZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUubWF0Y2gobGV0dGVyUmVnZXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA+PSAxICYmIHZhbCA8PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5wdXRWYWxpZChpc1ZhbGlkVmFsdWUpO1xyXG4gICAgICAgIHNldElucHV0RXJyb3IodmFsaWRhdGlvbkVycm9yKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsdWUpO1xyXG4gICAgICAgIHByb3BzLmNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkgOiB2b2lkIHtcclxuICAgICAgICBpZihpbnB1dFZhbHVlLmxlbmd0aCA9PT0gMCAmJiBwcm9wcy5uYW1lID09PSAncGhvbmUnKSB7XHJcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoJys3KCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWxDb250ZW50fTo8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbGlkPXtpbnB1dFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge2hhbmRsZVVzZXJJbnB1dChlKX19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntpbnB1dEVycm9yLmVycm9yfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==