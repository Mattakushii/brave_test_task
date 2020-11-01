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
      log;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dCIsInByb3BzIiwidXNlU3RhdGUiLCJzaG93Q2hpbGQiLCJzZXRTaG93Q2hpbGQiLCJ1c2VFZmZlY3QiLCJ2YWxpZCIsInNldFZhbGlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwicmVnRXhwIiwidGVzdCIsImxvZyIsInZhbGlkVmFsIiwidmFsaWRhdGVNZXRob2QiLCJzdGF0ZUNhbGxiYWNrIiwiaW52YWxpZFZhbCIsImlkIiwibGFiZWxOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFzayIsInZhbGlkYXRpb25FdmVudHMiLCJpbnZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCO0FBRHlCLGtCQUVTQyxzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVsQkMsU0FGa0I7QUFBQSxNQUVQQyxZQUZPOztBQUd6QkMseURBQVMsQ0FBQyxZQUFNO0FBQUVELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQW9CLEdBQTdCLEVBQStCLEVBQS9CLENBQVQ7O0FBSHlCLG1CQUtDRixzREFBUSxDQUFDLEtBQUQsQ0FMVDtBQUFBLE1BS2xCSSxLQUxrQjtBQUFBLE1BS1hDLFFBTFc7O0FBQUEsbUJBTUNMLHNEQUFRLENBQUMsRUFBRCxDQU5UO0FBQUEsTUFNbEJNLEtBTmtCO0FBQUEsTUFNWEMsUUFOVzs7QUFTekIsV0FBU0MsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQ3pCLFFBQUdILEtBQUssS0FBS0csQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQXRCLEVBQTZCO0FBQ3pCLGFBQU8sSUFBUDtBQUNILEtBRkQsTUFFTSxJQUFHUCxLQUFLLENBQUNZLE1BQU4sQ0FBYUMsSUFBYixDQUFrQkgsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQTNCLENBQUgsRUFBc0M7QUFDeENPLFNBQUc7QUFDSCxVQUFNQyxRQUFRLEdBQUdmLEtBQUssQ0FBQ2dCLGNBQU4sQ0FBcUJOLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUE5QixDQUFqQjtBQUNBUCxXQUFLLENBQUNpQixhQUFOLENBQW9CRixRQUFwQjtBQUNBUCxjQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQVI7QUFDQUQsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNILEtBTkssTUFNQztBQUNILFVBQU1ZLFVBQVUsR0FBR2xCLEtBQUssQ0FBQ2dCLGNBQU4sQ0FBcUJOLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUE5QixDQUFuQjtBQUNBUCxXQUFLLENBQUNpQixhQUFOLENBQW9CQyxVQUFwQjtBQUNBVixjQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQVI7QUFDQUQsY0FBUSxDQUFDLEtBQUQsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsTUFBSSxDQUFDSixTQUFMLEVBQWdCO0FBQ1osV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVNLE9BQ0YsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUVGLEtBQUssQ0FBQ21CLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJuQixLQUFLLENBQUNvQixTQUFqQyxDQURKLEVBRUksTUFBQyxzREFBRDtBQUNJLE1BQUUsRUFBRXBCLEtBQUssQ0FBQ21CLEVBRGQ7QUFFSSxRQUFJLEVBQUVuQixLQUFLLENBQUNxQixJQUZoQjtBQUdJLGVBQVcsRUFBRXJCLEtBQUssQ0FBQ3NCLFdBSHZCO0FBSUksUUFBSSxFQUFFdEIsS0FBSyxDQUFDdUIsSUFBTixJQUFjLEVBSnhCO0FBS0ksWUFBUSxFQUFFLGtCQUFDYixDQUFEO0FBQUEsYUFBTUQsZ0JBQWdCLENBQUNDLENBQUQsQ0FBdEI7QUFBQSxLQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUwsS0FBSyxHQUFHTCxLQUFLLENBQUN3QixnQkFBTixDQUF1Qm5CLEtBQXZCLENBQTZCRSxLQUFoQyxHQUF3Q1AsS0FBSyxDQUFDd0IsZ0JBQU4sQ0FBdUJDLE9BQXZCLENBQStCbEIsS0FBbEYsQ0FUSixDQURFO0FBYVQsQ0F6Q0Q7O0dBQU1SLFM7O0tBQUFBLFM7QUEyQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uMGNlYjRiOTFiZTEwNjQ2MzU0MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXQsIElucHV0QmxvY2t9IGZyb20gJy4vRm9ybUlucHV0U3R5bGVkJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgRm9ybUlucHV0ID0gKHByb3BzKSA9PiB7IFxyXG4gICAgLy/QtNC70Y8g0LjQt9Cx0LXQttCw0L3QuNGPINC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40Y8gdXNlTGF5b3V0RWZmZWN0INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LBcclxuICAgIGNvbnN0IFtzaG93Q2hpbGQsIHNldFNob3dDaGlsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBzZXRTaG93Q2hpbGQodHJ1ZSkgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFt2YWxpZCwgc2V0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWUoZSkge1xyXG4gICAgICAgIGlmKHZhbHVlID09PSBlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1lbHNlIGlmKHByb3BzLnJlZ0V4cC50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBsb2dcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRWYWwgPSBwcm9wcy52YWxpZGF0ZU1ldGhvZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHByb3BzLnN0YXRlQ2FsbGJhY2sodmFsaWRWYWwpO1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFZhbGlkKHRydWUpOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaW52YWxpZFZhbCA9IHByb3BzLnZhbGlkYXRlTWV0aG9kKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgcHJvcHMuc3RhdGVDYWxsYmFjayhpbnZhbGlkVmFsKTtcclxuICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRWYWxpZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2hvd0NoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1lbHNlIHJldHVybihcclxuICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlkfT57cHJvcHMubGFiZWxOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIG1hc2s9e3Byb3BzLm1hc2sgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlSW5wdXRWYWx1ZShlKX0+XHJcbiAgICAgICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgICAgIDxkaXY+e3ZhbGlkID8gcHJvcHMudmFsaWRhdGlvbkV2ZW50cy52YWxpZC52YWx1ZSA6IHByb3BzLnZhbGlkYXRpb25FdmVudHMuaW52YWxpZC52YWx1ZX08L2Rpdj5cclxuICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1JbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=