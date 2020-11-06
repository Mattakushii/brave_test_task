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
    console.log(props.inputValue);
    props.callbackValueState(value);
    validate(inputName, value);
  }

  function validate(inputName, value) {
    var validationError = inputError;
    var isValidValue = props.inputValid;

    switch (inputName) {
      case 'phone':
        if (value.length < props.inputValue.length) {
          console.log('удаляю');
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
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giXSwibmFtZXMiOlsiSW5wdXRGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRWYWxpZCIsInNldElucHV0VmFsaWQiLCJlcnJvciIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwicGhvbmVSZWdleHAiLCJwYXltZW50UmVnZXhwIiwibGV0dGVyUmVnZXhwIiwiaGFuZGxlVXNlcklucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFja1ZhbHVlU3RhdGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRpb25FcnJvciIsImlzVmFsaWRWYWx1ZSIsImxlbmd0aCIsImNhbGxiYWNrVmFsaWRTdGF0ZSIsInZhbCIsInNwbGljZSIsImpvaW4iLCJibG9ja2VkVmFsdWUiLCJzbGljZSIsInRlc3QiLCJtYXRjaCIsInBhcnNlSW50IiwicGFzc0ZpcnN0VmFsdWUiLCJsYWJlbENvbnRlbnQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBY0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBOztBQUFBLGtCQUVKQyxzREFBUSxDQUFDLEVBQUQsQ0FGSjtBQUFBLE1BRWpDQyxVQUZpQztBQUFBLE1BRXJCQyxhQUZxQjs7QUFBQSxtQkFHSkYsc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdqQ0csVUFIaUM7QUFBQSxNQUdyQkMsYUFIcUI7O0FBQUEsbUJBSUpKLHNEQUFRLENBQUM7QUFDekNLLFNBQUssRUFBRTtBQURrQyxHQUFELENBSko7QUFBQSxNQUlqQ0MsVUFKaUM7QUFBQSxNQUlyQkMsYUFKcUI7O0FBUXhDLE1BQU1DLFdBQVcsR0FBRyx3RUFBcEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsT0FBdEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsb0JBQXJCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLENBQXpCLEVBQWtFO0FBQzlELFFBQU1DLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQTNCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSixDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBdkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVluQixLQUFLLENBQUNFLFVBQWxCO0FBQ0FGLFNBQUssQ0FBQ29CLGtCQUFOLENBQXlCSCxLQUF6QjtBQUNBSSxZQUFRLENBQUNQLFNBQUQsRUFBWUcsS0FBWixDQUFSO0FBQ0g7O0FBRUQsV0FBU0ksUUFBVCxDQUFrQlAsU0FBbEIsRUFBcUNHLEtBQXJDLEVBQTJEO0FBQ3ZELFFBQU1LLGVBQWUsR0FBR2YsVUFBeEI7QUFDQSxRQUFJZ0IsWUFBWSxHQUFHdkIsS0FBSyxDQUFDSSxVQUF6Qjs7QUFDQSxZQUFRVSxTQUFSO0FBQ0ksV0FBSyxPQUFMO0FBQ0ksWUFBR0csS0FBSyxDQUFDTyxNQUFOLEdBQWV4QixLQUFLLENBQUNFLFVBQU4sQ0FBaUJzQixNQUFuQyxFQUE0QztBQUN4Q04saUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQW5CLGVBQUssQ0FBQ29CLGtCQUFOLENBQXlCSCxLQUF6QjtBQUNBakIsZUFBSyxDQUFDeUIsa0JBQU4sQ0FBeUIsS0FBekI7QUFDQUgseUJBQWUsQ0FBQ2hCLEtBQWhCLEdBQXdCLDRCQUF4QjtBQUNILFNBTEQsTUFLTTtBQUNGLGNBQUlvQixHQUFHLEdBQUcsNkZBQUlULEtBQVAsQ0FBUDs7QUFDQSxjQUFHQSxLQUFLLENBQUNPLE1BQU4sS0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkJFLGVBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCO0FBQ0EzQixpQkFBSyxDQUFDb0Isa0JBQU4sQ0FBeUJNLEdBQUcsQ0FBQ0UsSUFBSixDQUFTLEVBQVQsQ0FBekI7QUFDQVYsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxHQUFHLENBQUNFLElBQUosQ0FBUyxFQUFULENBQVosRUFBMEJYLEtBQTFCO0FBQ0g7O0FBQ0QsY0FBR0EsS0FBSyxDQUFDTyxNQUFOLEtBQWlCLEVBQXBCLEVBQXdCO0FBQ3BCRSxlQUFHLENBQUNDLE1BQUosQ0FBVyxFQUFYLEVBQWUsQ0FBZixFQUFrQixHQUFsQjtBQUNBM0IsaUJBQUssQ0FBQ29CLGtCQUFOLENBQXlCTSxHQUFHLENBQUNFLElBQUosQ0FBUyxFQUFULENBQXpCO0FBQ0g7O0FBQ0QsY0FBR1gsS0FBSyxDQUFDTyxNQUFOLEtBQWlCLEVBQXBCLEVBQXdCO0FBQ3BCRSxlQUFHLENBQUNDLE1BQUosQ0FBVyxFQUFYLEVBQWUsQ0FBZixFQUFrQixHQUFsQjtBQUNBM0IsaUJBQUssQ0FBQ29CLGtCQUFOLENBQXlCTSxHQUFHLENBQUNFLElBQUosQ0FBUyxFQUFULENBQXpCO0FBQ0g7O0FBQ0QsY0FBR1gsS0FBSyxDQUFDTyxNQUFOLElBQWdCLEVBQW5CLEVBQXVCO0FBQ25CLGdCQUFNSyxZQUFZLEdBQUdaLEtBQUssQ0FBQ2EsS0FBTixDQUFZLENBQVosRUFBZSxFQUFmLENBQXJCO0FBQ0E5QixpQkFBSyxDQUFDb0Isa0JBQU4sQ0FBeUJTLFlBQXpCO0FBQ0g7QUFDSjs7QUFDRCxZQUFHcEIsV0FBVyxDQUFDc0IsSUFBWixDQUFpQmQsS0FBakIsQ0FBSCxFQUE0QjtBQUN4Qk0sc0JBQVksR0FBRyxJQUFmO0FBQ0FELHlCQUFlLENBQUNoQixLQUFoQixHQUF3QixFQUF4QjtBQUNILFNBSEQsTUFHTyxJQUFHVyxLQUFLLENBQUNlLEtBQU4sQ0FBWXJCLFlBQVosQ0FBSCxFQUE2QjtBQUNoQ1ksc0JBQVksR0FBRyxLQUFmO0FBQ0FELHlCQUFlLENBQUNoQixLQUFoQixHQUF3QixvQ0FBeEI7QUFDSCxTQUhNLE1BR0Q7QUFDRmlCLHNCQUFZLEdBQUUsS0FBZDtBQUNBRCx5QkFBZSxDQUFDaEIsS0FBaEIsR0FBd0IsMkJBQXhCO0FBQ0g7O0FBQ0Q7O0FBQ0osV0FBSyxTQUFMO0FBQ0ksWUFBR1csS0FBSyxLQUFLLEVBQWIsRUFBaUI7QUFDYk0sc0JBQVksR0FBRyxLQUFmO0FBQ0FELHlCQUFlLENBQUNoQixLQUFoQixHQUF3QixvREFBeEI7QUFDSCxTQUhELE1BR08sSUFBSUksYUFBYSxDQUFDcUIsSUFBZCxDQUFtQmQsS0FBbkIsQ0FBSixFQUErQjtBQUNsQyxjQUFNUyxJQUFHLEdBQUdPLFFBQVEsQ0FBQ2hCLEtBQUQsQ0FBcEI7O0FBQ0EsY0FBSVMsSUFBRyxJQUFJLENBQVAsSUFBWUEsSUFBRyxJQUFJLElBQXZCLEVBQTZCO0FBQ3pCSCx3QkFBWSxHQUFHLElBQWY7QUFDQUQsMkJBQWUsQ0FBQ2hCLEtBQWhCLEdBQXdCLEVBQXhCO0FBQ0gsV0FIRCxNQUdPO0FBQ0hpQix3QkFBWSxHQUFHLEtBQWY7QUFDQUQsMkJBQWUsQ0FBQ2hCLEtBQWhCLEdBQXdCLG9EQUF4QjtBQUNIO0FBQ0osU0FUTSxNQVNBO0FBQ0hpQixzQkFBWSxHQUFHLEtBQWY7QUFDQUQseUJBQWUsQ0FBQ2hCLEtBQWhCLEdBQXdCLG9DQUF4QjtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUF6RFI7O0FBMkRBRSxpQkFBYSxDQUFDYyxlQUFELENBQWI7QUFDQXRCLFNBQUssQ0FBQ29CLGtCQUFOLENBQXlCSCxLQUF6QjtBQUNBakIsU0FBSyxDQUFDeUIsa0JBQU4sQ0FBeUJGLFlBQXpCO0FBQ0g7O0FBRUQsV0FBU1csY0FBVCxHQUFpQztBQUFBOztBQUM3QixRQUFHLHNCQUFBbEMsS0FBSyxDQUFDRSxVQUFOLHdFQUFrQnNCLE1BQWxCLE1BQTZCLENBQTdCLElBQWtDeEIsS0FBSyxDQUFDZ0IsSUFBTixLQUFlLE9BQXBELEVBQTZEO0FBQ3pEaEIsV0FBSyxDQUFDb0Isa0JBQU4sQ0FBeUIsS0FBekI7QUFDSDtBQUNKOztBQUVELFNBQ0ksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFPLFdBQU8sRUFBRXBCLEtBQUssQ0FBQ2dCLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJoQixLQUFLLENBQUNtQyxZQUFuQyxNQURKLEVBRUksTUFBQyxzREFBRDtBQUNJLFNBQUssRUFBRW5DLEtBQUssQ0FBQ0ksVUFEakI7QUFFSSxNQUFFLEVBQUVKLEtBQUssQ0FBQ29DLEVBRmQ7QUFHSSxRQUFJLEVBQUVwQyxLQUFLLENBQUNnQixJQUhoQjtBQUlJLFFBQUksRUFBRWhCLEtBQUssQ0FBQ3FDLElBSmhCO0FBS0ksU0FBSyxFQUFFckMsS0FBSyxDQUFDRSxVQUxqQjtBQU1JLGVBQVcsRUFBRUYsS0FBSyxDQUFDc0MsV0FOdkI7QUFPSSxZQUFRLEVBQUUsa0JBQUN6QixDQUFELEVBQTJDO0FBQUNELHFCQUFlLENBQUNDLENBQUQsQ0FBZjtBQUFtQixLQVA3RTtBQVFJLFdBQU8sRUFBRSxtQkFBSztBQUFDcUIsb0JBQWM7QUFBRyxLQVJwQztBQVNJLFdBQU8sRUFBRSxtQkFBSztBQUFDQSxvQkFBYztBQUFHLEtBVHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQWFJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlM0IsVUFBVSxDQUFDRCxLQUExQixDQWJKLENBREo7QUFpQkgsQ0E5R0Q7O0dBQU1QLFM7O0tBQUFBLFM7QUFnSFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uYjczNmIzNTlkNDdjZTRmZWQ4ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0lucHV0QmxvY2ssIElucHV0LCBFcnJvck1lc3NhZ2UsIExhYmVsfSBmcm9tIFwiLi9JbnB1dEZvcm1TdHlsZWRcIjtcclxuXHJcbmludGVyZmFjZSBJbnB1dEZvcm1Qcm9wcyB7XHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcclxuICAgIGxhYmVsQ29udGVudDogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlOnN0cmluZyk6IHZvaWQsXHJcbiAgICBjYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZDogYm9vbGVhbik6IHZvaWQsXHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcsXHJcbiAgICBpbnB1dFZhbGlkOiBib29sZWFuLFxyXG59XHJcblxyXG5jb25zdCBJbnB1dEZvcm0gPSAocHJvcHM6SW5wdXRGb3JtUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5wdXRFcnJvciwgc2V0SW5wdXRFcnJvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZXJyb3I6ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBob25lUmVnZXhwID0gL1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS87XHJcbiAgICBjb25zdCBwYXltZW50UmVnZXhwID0gL15cXGQrJC87XHJcbiAgICBjb25zdCBsZXR0ZXJSZWdleHAgPSAvW9CwLdGP0JAt0K/RkdCBYS16QS1aXSskLztcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VySW5wdXQoZSA6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmlucHV0VmFsdWUpXHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICB2YWxpZGF0ZShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWUgOiBzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgPSBpbnB1dEVycm9yO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkVmFsdWUgPSBwcm9wcy5pbnB1dFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IHByb3BzLmlucHV0VmFsdWUubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRg9C00LDQu9GP0Y4nKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsLmpvaW4oJycpLCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDE0LCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID49IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrZWRWYWx1ZSA9IHZhbHVlLnNsaWNlKDAsIDE3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKGJsb2NrZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUubWF0Y2gobGV0dGVyUmVnZXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA+PSAxICYmIHZhbCA8PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5wdXRFcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xyXG4gICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGlzVmFsaWRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc0ZpcnN0VmFsdWUoKSA6IHZvaWQge1xyXG4gICAgICAgIGlmKHByb3BzLmlucHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCAmJiBwcm9wcy5uYW1lID09PSAncGhvbmUnKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSgnKzcoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbENvbnRlbnR9OjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ9e3Byb3BzLmlucHV0VmFsaWR9XHJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7aGFuZGxlVXNlcklucHV0KGUpfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+e2lucHV0RXJyb3IuZXJyb3J9PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZvcm0iXSwic291cmNlUm9vdCI6IiJ9