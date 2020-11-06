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
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giXSwibmFtZXMiOlsiSW5wdXRGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRWYWxpZCIsInNldElucHV0VmFsaWQiLCJlcnJvciIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwicGhvbmVSZWdleHAiLCJwYXltZW50UmVnZXhwIiwibGV0dGVyUmVnZXhwIiwiaGFuZGxlVXNlcklucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInZhbGlkYXRlIiwidmFsaWRhdGlvbkVycm9yIiwiaXNWYWxpZFZhbHVlIiwibGVuZ3RoIiwiY2FsbGJhY2tWYWxpZFN0YXRlIiwidmFsIiwic3BsaWNlIiwiam9pbiIsImJsb2NrZWRWYWx1ZSIsInNsaWNlIiwidGVzdCIsIm1hdGNoIiwicGFyc2VJbnQiLCJjYWxsYmFja1ZhbHVlU3RhdGUiLCJwYXNzRmlyc3RWYWx1ZSIsImxhYmVsQ29udGVudCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFZQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQTBCO0FBQUE7O0FBQUEsa0JBRUpDLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFakNDLFVBRmlDO0FBQUEsTUFFckJDLGFBRnFCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BR2pDRyxVQUhpQztBQUFBLE1BR3JCQyxhQUhxQjs7QUFBQSxtQkFJSkosc0RBQVEsQ0FBQztBQUN6Q0ssU0FBSyxFQUFFO0FBRGtDLEdBQUQsQ0FKSjtBQUFBLE1BSWpDQyxVQUppQztBQUFBLE1BSXJCQyxhQUpxQjs7QUFTeEMsTUFBTUMsV0FBVyxHQUFHLHdFQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxPQUF0QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxvQkFBckI7O0FBRUEsV0FBU0MsZUFBVCxDQUF5QkMsQ0FBekIsRUFBa0U7QUFDOUQsUUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFBM0I7QUFDQSxRQUFNQyxLQUFLLEdBQUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUF2QjtBQUNBZCxpQkFBYSxDQUFDYyxLQUFELENBQWI7QUFDQUMsWUFBUSxDQUFDSixTQUFELEVBQVlHLEtBQVosQ0FBUjtBQUNIOztBQUVELFdBQVNDLFFBQVQsQ0FBa0JKLFNBQWxCLEVBQXFDRyxLQUFyQyxFQUEyRDtBQUN2RCxRQUFNRSxlQUFlLEdBQUdaLFVBQXhCO0FBQ0EsUUFBSWEsWUFBWSxHQUFHaEIsVUFBbkI7O0FBQ0EsWUFBUVUsU0FBUjtBQUNJLFdBQUssT0FBTDtBQUNJLFlBQUdHLEtBQUssQ0FBQ0ksTUFBTixHQUFlbkIsVUFBVSxDQUFDbUIsTUFBN0IsRUFBcUM7QUFDakNsQix1QkFBYSxDQUFDYyxLQUFELENBQWI7QUFDQWpCLGVBQUssQ0FBQ3NCLGtCQUFOLENBQXlCLEtBQXpCO0FBQ0FILHlCQUFlLENBQUNiLEtBQWhCLEdBQXdCLDRCQUF4QjtBQUNILFNBSkQsTUFJTTtBQUNGLGNBQUlpQixHQUFHLEdBQUcsNkZBQUlOLEtBQVAsQ0FBUDs7QUFDQSxjQUFHQSxLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkJFLGVBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCO0FBQ0FyQix5QkFBYSxDQUFDb0IsR0FBRyxDQUFDRSxJQUFKLENBQVMsRUFBVCxDQUFELENBQWI7QUFDSDs7QUFDRCxjQUFHUixLQUFLLENBQUNJLE1BQU4sS0FBaUIsRUFBcEIsRUFBd0I7QUFDcEJFLGVBQUcsQ0FBQ0MsTUFBSixDQUFXLEVBQVgsRUFBZSxDQUFmLEVBQWtCLEdBQWxCO0FBQ0FyQix5QkFBYSxDQUFDb0IsR0FBRyxDQUFDRSxJQUFKLENBQVMsRUFBVCxDQUFELENBQWI7QUFDSDs7QUFDRCxjQUFHUixLQUFLLENBQUNJLE1BQU4sS0FBaUIsRUFBcEIsRUFBd0I7QUFDcEJFLGVBQUcsQ0FBQ0MsTUFBSixDQUFXLEVBQVgsRUFBZSxDQUFmLEVBQWtCLEdBQWxCO0FBQ0FyQix5QkFBYSxDQUFDb0IsR0FBRyxDQUFDRSxJQUFKLENBQVMsRUFBVCxDQUFELENBQWI7QUFDSDs7QUFDRCxjQUFHUixLQUFLLENBQUNJLE1BQU4sSUFBZ0IsRUFBbkIsRUFBdUI7QUFDbkIsZ0JBQU1LLFlBQVksR0FBR1QsS0FBSyxDQUFDVSxLQUFOLENBQVksQ0FBWixFQUFlLEVBQWYsQ0FBckI7QUFDQXhCLHlCQUFhLENBQUN1QixZQUFELENBQWI7QUFDSDtBQUNKOztBQUNELFlBQUdqQixXQUFXLENBQUNtQixJQUFaLENBQWlCWCxLQUFqQixDQUFILEVBQTRCO0FBQ3hCRyxzQkFBWSxHQUFHLElBQWY7QUFDQUQseUJBQWUsQ0FBQ2IsS0FBaEIsR0FBd0IsRUFBeEI7QUFDSCxTQUhELE1BR08sSUFBR1csS0FBSyxDQUFDWSxLQUFOLENBQVlsQixZQUFaLENBQUgsRUFBNkI7QUFDaENTLHNCQUFZLEdBQUcsS0FBZjtBQUNBRCx5QkFBZSxDQUFDYixLQUFoQixHQUF3QixvQ0FBeEI7QUFDSCxTQUhNLE1BR0Q7QUFDRmMsc0JBQVksR0FBRSxLQUFkO0FBQ0FELHlCQUFlLENBQUNiLEtBQWhCLEdBQXdCLDJCQUF4QjtBQUNIOztBQUNEOztBQUNKLFdBQUssU0FBTDtBQUNJLFlBQUdXLEtBQUssS0FBSyxFQUFiLEVBQWlCO0FBQ2JHLHNCQUFZLEdBQUcsS0FBZjtBQUNBRCx5QkFBZSxDQUFDYixLQUFoQixHQUF3QixvREFBeEI7QUFDSCxTQUhELE1BR08sSUFBSUksYUFBYSxDQUFDa0IsSUFBZCxDQUFtQlgsS0FBbkIsQ0FBSixFQUErQjtBQUNsQyxjQUFNTSxJQUFHLEdBQUdPLFFBQVEsQ0FBQ2IsS0FBRCxDQUFwQjs7QUFDQSxjQUFJTSxJQUFHLElBQUksQ0FBUCxJQUFZQSxJQUFHLElBQUksSUFBdkIsRUFBNkI7QUFDekJILHdCQUFZLEdBQUcsSUFBZjtBQUNBRCwyQkFBZSxDQUFDYixLQUFoQixHQUF3QixFQUF4QjtBQUNILFdBSEQsTUFHTztBQUNIYyx3QkFBWSxHQUFHLEtBQWY7QUFDQUQsMkJBQWUsQ0FBQ2IsS0FBaEIsR0FBd0Isb0RBQXhCO0FBQ0g7QUFDSixTQVRNLE1BU0E7QUFDSGMsc0JBQVksR0FBRyxLQUFmO0FBQ0FELHlCQUFlLENBQUNiLEtBQWhCLEdBQXdCLG9DQUF4QjtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUF2RFI7O0FBeURBRCxpQkFBYSxDQUFDZSxZQUFELENBQWI7QUFDQVosaUJBQWEsQ0FBQ1csZUFBRCxDQUFiO0FBQ0FuQixTQUFLLENBQUMrQixrQkFBTixDQUF5QmQsS0FBekI7QUFDQWpCLFNBQUssQ0FBQ3NCLGtCQUFOLENBQXlCRixZQUF6QjtBQUNIOztBQUVELFdBQVNZLGNBQVQsR0FBaUM7QUFDN0IsUUFBRzlCLFVBQVUsQ0FBQ21CLE1BQVgsS0FBc0IsQ0FBdEIsSUFBMkJyQixLQUFLLENBQUNnQixJQUFOLEtBQWUsT0FBN0MsRUFBc0Q7QUFDbERiLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0g7QUFDSjs7QUFFRCxTQUNJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTyxXQUFPLEVBQUVILEtBQUssQ0FBQ2dCLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJoQixLQUFLLENBQUNpQyxZQUFuQyxNQURKLEVBRUksTUFBQyxzREFBRDtBQUNJLFNBQUssRUFBRTdCLFVBRFg7QUFFSSxNQUFFLEVBQUVKLEtBQUssQ0FBQ2tDLEVBRmQ7QUFHSSxRQUFJLEVBQUVsQyxLQUFLLENBQUNnQixJQUhoQjtBQUlJLFFBQUksRUFBRWhCLEtBQUssQ0FBQ21DLElBSmhCO0FBS0ksU0FBSyxFQUFFakMsVUFMWDtBQU1JLGVBQVcsRUFBRUYsS0FBSyxDQUFDb0MsV0FOdkI7QUFPSSxZQUFRLEVBQUUsa0JBQUN2QixDQUFELEVBQTJDO0FBQUNELHFCQUFlLENBQUNDLENBQUQsQ0FBZjtBQUFtQixLQVA3RTtBQVFJLFdBQU8sRUFBRSxtQkFBSztBQUFDbUIsb0JBQWM7QUFBRyxLQVJwQztBQVNJLFdBQU8sRUFBRSxtQkFBSztBQUFDQSxvQkFBYztBQUFHLEtBVHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQWFJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlekIsVUFBVSxDQUFDRCxLQUExQixDQWJKLENBREo7QUFpQkgsQ0E3R0Q7O0dBQU1QLFM7O0tBQUFBLFM7QUErR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uZDBmNjliN2Q3NTlkM2U1M2M0NTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0lucHV0QmxvY2ssIElucHV0LCBFcnJvck1lc3NhZ2UsIExhYmVsfSBmcm9tIFwiLi9JbnB1dEZvcm1TdHlsZWRcIjtcclxuXHJcbmludGVyZmFjZSBJbnB1dEZvcm1Qcm9wcyB7XHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcclxuICAgIGxhYmVsQ29udGVudDogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlOnN0cmluZyk6IHZvaWQsXHJcbiAgICBjYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZDogYm9vbGVhbik6IHZvaWQsXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbGlkLCBzZXRJbnB1dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L4nLFxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9eXFxkKyQvO1xyXG4gICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC87XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB2YWxpZGF0ZShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWUgOiBzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgPSBpbnB1dEVycm9yO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkVmFsdWUgPSBpbnB1dFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IGlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxMSwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID49IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrZWRWYWx1ZSA9IHZhbHVlLnNsaWNlKDAsIDE3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShibG9ja2VkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBob25lUmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlLm1hdGNoKGxldHRlclJlZ2V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXltZW50UmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPj0gMSAmJiB2YWwgPD0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElucHV0VmFsaWQoaXNWYWxpZFZhbHVlKTtcclxuICAgICAgICBzZXRJbnB1dEVycm9yKHZhbGlkYXRpb25FcnJvcik7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIDogdm9pZCB7XHJcbiAgICAgICAgaWYoaW5wdXRWYWx1ZS5sZW5ndGggPT09IDAgJiYgcHJvcHMubmFtZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcrNygnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsQ29udGVudH06PC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWxpZD17aW5wdXRWYWxpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtoYW5kbGVVc2VySW5wdXQoZSl9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZT57aW5wdXRFcnJvci5lcnJvcn08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=