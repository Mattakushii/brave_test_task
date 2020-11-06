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
          validationError.error = 'Поле должно быть заполено';
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
          validationError.error = 'Поле должно содержать только цифры';
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
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giXSwibmFtZXMiOlsiSW5wdXRGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRWYWxpZCIsInNldElucHV0VmFsaWQiLCJlcnJvciIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwicGhvbmVSZWdleHAiLCJwYXltZW50UmVnZXhwIiwibGV0dGVyUmVnZXhwIiwiaGFuZGxlVXNlcklucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInZhbGlkYXRlIiwidmFsaWRhdGlvbkVycm9yIiwiaXNWYWxpZFZhbHVlIiwibGVuZ3RoIiwiY2FsbGJhY2tWYWxpZFN0YXRlIiwidmFsIiwic3BsaWNlIiwiam9pbiIsImJsb2NrZWRWYWx1ZSIsInNsaWNlIiwidGVzdCIsIm1hdGNoIiwicGFyc2VJbnQiLCJjYWxsYmFja1ZhbHVlU3RhdGUiLCJwYXNzRmlyc3RWYWx1ZSIsImxhYmVsQ29udGVudCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFZQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQTBCO0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsRUFBRCxDQURKO0FBQUEsTUFDakNDLFVBRGlDO0FBQUEsTUFDckJDLGFBRHFCOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRWpDRyxVQUZpQztBQUFBLE1BRXJCQyxhQUZxQjs7QUFBQSxtQkFHSkosc0RBQVEsQ0FBQztBQUN6Q0ssU0FBSyxFQUFFO0FBRGtDLEdBQUQsQ0FISjtBQUFBLE1BR2pDQyxVQUhpQztBQUFBLE1BR3JCQyxhQUhxQjs7QUFPeEMsTUFBTUMs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QUtJLFNBQUssRUFBRWpDLFVBTFg7QUFNSSxlQUFXLEVBQUVGLEtBQUssQ0FBQ29DLFdBTnZCO0FBT0ksWUFBUSxFQUFFLGtCQUFDdkIsQ0FBRCxFQUEyQztBQUFDRCxxQkFBZSxDQUFDQyxDQUFELENBQWY7QUFBbUIsS0FQN0U7QUFRSSxXQUFPLEVBQUUsbUJBQUs7QUFBQ21CLG9CQUFjO0FBQUcsS0FScEM7QUFTSSxXQUFPLEVBQUUsbUJBQUs7QUFBQ0Esb0JBQWM7QUFBRyxLQVRwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFhSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZXpCLFVBQVUsQ0FBQ0QsS0FBMUIsQ0FiSixDQURKO0FBaUJILENBM0dEOztHQUFNUCxTOztLQUFBQSxTO0FBNkdTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLmM1YzI3NzEzYzA4YTExMTU5YzkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZX0gZnJvbSBcIi4vSW5wdXRGb3JtU3R5bGVkXCI7XHJcblxyXG5pbnRlcmZhY2UgSW5wdXRGb3JtUHJvcHMge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXHJcbiAgICBsYWJlbENvbnRlbnQ6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZTpzdHJpbmcpOiB2b2lkLFxyXG4gICAgY2FsbGJhY2tWYWxpZFN0YXRlKGlzVmFsaWQ6IGJvb2xlYW4pOiB2b2lkLFxyXG59XHJcblxyXG5jb25zdCBJbnB1dEZvcm0gPSAocHJvcHM6SW5wdXRGb3JtUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbGlkLCBzZXRJbnB1dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVSZWdleHAgPSAvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9LztcclxuICAgIGNvbnN0IHBheW1lbnRSZWdleHAgPSAvXlxcZCskLztcclxuICAgIGNvbnN0IGxldHRlclJlZ2V4cCA9IC9b0LAt0Y/QkC3Qr9GR0IFhLXpBLVpdKyQvO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlIDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgdmFsaWRhdGUoaW5wdXROYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoaW5wdXROYW1lOiBzdHJpbmcsIHZhbHVlIDogc3RyaW5nKSA6IHZvaWR7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbkVycm9yID0gaW5wdXRFcnJvcjtcclxuICAgICAgICBsZXQgaXNWYWxpZFZhbHVlID0gaW5wdXRWYWxpZDtcclxuICAgICAgICBzd2l0Y2ggKGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPCBpbnB1dFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsaWRTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gWy4uLnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGJsb2NrZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUubWF0Y2gobGV0dGVyUmVnZXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0YLQvtC70YzQutC+INGG0LjRhNGA0YsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bWVudFJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID49IDEgJiYgdmFsIDw9IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbnB1dFZhbGlkKGlzVmFsaWRWYWx1ZSk7XHJcbiAgICAgICAgc2V0SW5wdXRFcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xyXG4gICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGlzVmFsaWRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc0ZpcnN0VmFsdWUoKSA6IHZvaWQge1xyXG4gICAgICAgIGlmKGlucHV0VmFsdWUubGVuZ3RoID09PSAwICYmIHByb3BzLm5hbWUgPT09ICdwaG9uZScpIHtcclxuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSgnKzcoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbENvbnRlbnR9OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ9e2lucHV0VmFsaWR9XHJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7aGFuZGxlVXNlcklucHV0KGUpfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+e2lucHV0RXJyb3IuZXJyb3J9PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZvcm0iXSwic291cmNlUm9vdCI6IiJ9