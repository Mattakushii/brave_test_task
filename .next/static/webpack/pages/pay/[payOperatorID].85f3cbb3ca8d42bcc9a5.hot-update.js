webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/inputComponent/FormInput.js":
/*!****************************************************!*\
  !*** ./src/components/inputComponent/FormInput.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormInputStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInputStyled */ "./src/components/inputComponent/FormInputStyled.js");
var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\inputComponent\\FormInput.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FormInput = function FormInput(props) {
  _s();

  //для избежания предупреждения useLayoutEffect на стороне сервера
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showChild = _useState[0],
      setShowChild = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShowChild(true);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      valid = _useState2[0],
      setValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      value = _useState3[0],
      setValue = _useState3[1];

  function handleInputValue(e) {
    if (value === e.target.value) {
      return true;
    } else if (props.regExp.test(e.target.value)) {
      console.log();
      var validVal = props.validateMethod(e.target.value);
      props.stateCallback(validVal);
      setValue(e.target.value);
      setValid(true);
    } else {
      var invalidVal = props.validateMethod(e.target.value);
      props.stateCallback(invalidVal);
      setValue(e.target.value);
      setValid(false);
    }
  }

  if (!showChild) {
    return null;
  } else return __jsx(_FormInputStyled__WEBPACK_IMPORTED_MODULE_1__["InputBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, props.labelName), __jsx(_FormInputStyled__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: props.id,
    type: props.type,
    placeholder: props.placeholder,
    mask: props.mask || '',
    onChange: function onChange(e) {
      return handleInputValue(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, valid ? props.validationEvents.valid.value : props.validationEvents.invalid.value));
};

_s(FormInput, "8nxCTN+/EmjDIesQhHbyoMBV0dY=");

_c = FormInput;
/* harmony default export */ __webpack_exports__["default"] = (FormInput);

var _c;

$RefreshReg$(_c, "FormInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dCIsInByb3BzIiwidXNlU3RhdGUiLCJzaG93Q2hpbGQiLCJzZXRTaG93Q2hpbGQiLCJ1c2VFZmZlY3QiLCJ2YWxpZCIsInNldFZhbGlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwicmVnRXhwIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZFZhbCIsInZhbGlkYXRlTWV0aG9kIiwic3RhdGVDYWxsYmFjayIsImludmFsaWRWYWwiLCJpZCIsImxhYmVsTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hc2siLCJ2YWxpZGF0aW9uRXZlbnRzIiwiaW52YWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QjtBQUR5QixrQkFFU0Msc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFbEJDLFNBRmtCO0FBQUEsTUFFUEMsWUFGTzs7QUFHekJDLHlEQUFTLENBQUMsWUFBTTtBQUFFRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUFvQixHQUE3QixFQUErQixFQUEvQixDQUFUOztBQUh5QixtQkFLQ0Ysc0RBQVEsQ0FBQyxLQUFELENBTFQ7QUFBQSxNQUtsQkksS0FMa0I7QUFBQSxNQUtYQyxRQUxXOztBQUFBLG1CQU1DTCxzREFBUSxDQUFDLEVBQUQsQ0FOVDtBQUFBLE1BTWxCTSxLQU5rQjtBQUFBLE1BTVhDLFFBTlc7O0FBU3pCLFdBQVNDLGdCQUFULENBQTBCQyxDQUExQixFQUE2QjtBQUN6QixRQUFHSCxLQUFLLEtBQUtHLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUF0QixFQUE2QjtBQUN6QixhQUFPLElBQVA7QUFDSCxLQUZELE1BRU0sSUFBR1AsS0FBSyxDQUFDWSxNQUFOLENBQWFDLElBQWIsQ0FBa0JILENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUEzQixDQUFILEVBQXNDO0FBQ3hDTyxhQUFPLENBQUNDLEdBQVI7QUFDQSxVQUFNQyxRQUFRLEdBQUdoQixLQUFLLENBQUNpQixjQUFOLENBQXFCUCxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBOUIsQ0FBakI7QUFDQVAsV0FBSyxDQUFDa0IsYUFBTixDQUFvQkYsUUFBcEI7QUFDQVIsY0FBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBVixDQUFSO0FBQ0FELGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDSCxLQU5LLE1BTUM7QUFDSCxVQUFNYSxVQUFVLEdBQUduQixLQUFLLENBQUNpQixjQUFOLENBQXFCUCxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBOUIsQ0FBbkI7QUFDQVAsV0FBSyxDQUFDa0IsYUFBTixDQUFvQkMsVUFBcEI7QUFDQVgsY0FBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBVixDQUFSO0FBQ0FELGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKOztBQUVELE1BQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNaLFdBQU8sSUFBUDtBQUNILEdBRkQsTUFFTSxPQUNGLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFFRixLQUFLLENBQUNvQixFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCcEIsS0FBSyxDQUFDcUIsU0FBakMsQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFDSSxNQUFFLEVBQUVyQixLQUFLLENBQUNvQixFQURkO0FBRUksUUFBSSxFQUFFcEIsS0FBSyxDQUFDc0IsSUFGaEI7QUFHSSxlQUFXLEVBQUV0QixLQUFLLENBQUN1QixXQUh2QjtBQUlJLFFBQUksRUFBRXZCLEtBQUssQ0FBQ3dCLElBQU4sSUFBYyxFQUp4QjtBQUtJLFlBQVEsRUFBRSxrQkFBQ2QsQ0FBRDtBQUFBLGFBQU1ELGdCQUFnQixDQUFDQyxDQUFELENBQXRCO0FBQUEsS0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1MLEtBQUssR0FBR0wsS0FBSyxDQUFDeUIsZ0JBQU4sQ0FBdUJwQixLQUF2QixDQUE2QkUsS0FBaEMsR0FBd0NQLEtBQUssQ0FBQ3lCLGdCQUFOLENBQXVCQyxPQUF2QixDQUErQm5CLEtBQWxGLENBVEosQ0FERTtBQWFULENBekNEOztHQUFNUixTOztLQUFBQSxTO0FBMkNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLjg1ZjNjYmIzY2E4ZDQyYmNjOWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0LCBJbnB1dEJsb2NrfSBmcm9tICcuL0Zvcm1JbnB1dFN0eWxlZCc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEZvcm1JbnB1dCA9IChwcm9wcykgPT4geyBcclxuICAgIC8v0LTQu9GPINC40LfQsdC10LbQsNC90LjRjyDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNGPIHVzZUxheW91dEVmZmVjdCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwXHJcbiAgICBjb25zdCBbc2hvd0NoaWxkLCBzZXRTaG93Q2hpbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgc2V0U2hvd0NoaWxkKHRydWUpIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbdmFsaWQsIHNldFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbHVlKGUpIHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9ZWxzZSBpZihwcm9wcy5yZWdFeHAudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRWYWwgPSBwcm9wcy52YWxpZGF0ZU1ldGhvZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHByb3BzLnN0YXRlQ2FsbGJhY2sodmFsaWRWYWwpO1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFZhbGlkKHRydWUpOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaW52YWxpZFZhbCA9IHByb3BzLnZhbGlkYXRlTWV0aG9kKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgcHJvcHMuc3RhdGVDYWxsYmFjayhpbnZhbGlkVmFsKTtcclxuICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRWYWxpZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2hvd0NoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1lbHNlIHJldHVybihcclxuICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlkfT57cHJvcHMubGFiZWxOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIG1hc2s9e3Byb3BzLm1hc2sgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlSW5wdXRWYWx1ZShlKX0+XHJcbiAgICAgICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgICAgIDxkaXY+e3ZhbGlkID8gcHJvcHMudmFsaWRhdGlvbkV2ZW50cy52YWxpZC52YWx1ZSA6IHByb3BzLnZhbGlkYXRpb25FdmVudHMuaW52YWxpZC52YWx1ZX08L2Rpdj5cclxuICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1JbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=