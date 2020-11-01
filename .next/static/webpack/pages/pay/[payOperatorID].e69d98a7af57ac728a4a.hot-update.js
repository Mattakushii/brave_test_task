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
      console.log(e.target.value); // const validVal = props.validateMethod(e.target.value);
      // props.stateCallback(validVal);
      // setValue(e.target.value);
      // setValid(true);  
    } else {
      console.log(e.target.value); // const invalidVal = props.validateMethod(e.target.value);
      // props.stateCallback(invalidVal);
      // setValue(e.target.value);

      setValid(false);
    }
  }

  if (!showChild) {
    return null;
  } else return __jsx(_FormInputStyled__WEBPACK_IMPORTED_MODULE_1__["InputBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, props.labelName), __jsx(_FormInputStyled__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: props.id,
    type: props.type,
    placeholder: props.placeholder,
    mask: props.mask | '',
    onChange: function onChange(e) {
      return handleInputValue(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dCIsInByb3BzIiwidXNlU3RhdGUiLCJzaG93Q2hpbGQiLCJzZXRTaG93Q2hpbGQiLCJ1c2VFZmZlY3QiLCJ2YWxpZCIsInNldFZhbGlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwicmVnRXhwIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImxhYmVsTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hc2siLCJ2YWxpZGF0aW9uRXZlbnRzIiwiaW52YWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QjtBQUR5QixrQkFFU0Msc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFbEJDLFNBRmtCO0FBQUEsTUFFUEMsWUFGTzs7QUFHekJDLHlEQUFTLENBQUMsWUFBTTtBQUFFRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUFvQixHQUE3QixFQUErQixFQUEvQixDQUFUOztBQUh5QixtQkFLQ0Ysc0RBQVEsQ0FBQyxLQUFELENBTFQ7QUFBQSxNQUtsQkksS0FMa0I7QUFBQSxNQUtYQyxRQUxXOztBQUFBLG1CQU1DTCxzREFBUSxDQUFDLEVBQUQsQ0FOVDtBQUFBLE1BTWxCTSxLQU5rQjtBQUFBLE1BTVhDLFFBTlc7O0FBU3pCLFdBQVNDLGdCQUFULENBQTBCQyxDQUExQixFQUE2QjtBQUN6QixRQUFHSCxLQUFLLEtBQUtHLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUF0QixFQUE2QjtBQUN6QixhQUFPLElBQVA7QUFDSCxLQUZELE1BRU0sSUFBR1AsS0FBSyxDQUFDWSxNQUFOLENBQWFDLElBQWIsQ0FBa0JILENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUEzQixDQUFILEVBQXNDO0FBQ3hDTyxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQXJCLEVBRHdDLENBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FOSyxNQU1DO0FBQ0hPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBckIsRUFERyxDQUVIO0FBQ0E7QUFDQTs7QUFDQUQsY0FBUSxDQUFDLEtBQUQsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsTUFBSSxDQUFDSixTQUFMLEVBQWdCO0FBQ1osV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVNLE9BQ0YsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUVGLEtBQUssQ0FBQ2dCLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJoQixLQUFLLENBQUNpQixTQUFqQyxDQURKLEVBRUksTUFBQyxzREFBRDtBQUNJLE1BQUUsRUFBRWpCLEtBQUssQ0FBQ2dCLEVBRGQ7QUFFSSxRQUFJLEVBQUVoQixLQUFLLENBQUNrQixJQUZoQjtBQUdJLGVBQVcsRUFBRWxCLEtBQUssQ0FBQ21CLFdBSHZCO0FBSUksUUFBSSxFQUFFbkIsS0FBSyxDQUFDb0IsSUFBTixHQUFhLEVBSnZCO0FBS0ksWUFBUSxFQUFFLGtCQUFDVixDQUFEO0FBQUEsYUFBTUQsZ0JBQWdCLENBQUNDLENBQUQsQ0FBdEI7QUFBQSxLQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUwsS0FBSyxHQUFHTCxLQUFLLENBQUNxQixnQkFBTixDQUF1QmhCLEtBQXZCLENBQTZCRSxLQUFoQyxHQUF3Q1AsS0FBSyxDQUFDcUIsZ0JBQU4sQ0FBdUJDLE9BQXZCLENBQStCZixLQUFsRixDQVRKLENBREU7QUFhVCxDQTFDRDs7R0FBTVIsUzs7S0FBQUEsUztBQTRDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5lNjlkOThhN2FmNTdhYzcyOGE0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dCwgSW5wdXRCbG9ja30gZnJvbSAnLi9Gb3JtSW5wdXRTdHlsZWQnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBGb3JtSW5wdXQgPSAocHJvcHMpID0+IHsgXHJcbiAgICAvL9C00LvRjyDQuNC30LHQtdC20LDQvdC40Y8g0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjRjyB1c2VMYXlvdXRFZmZlY3Qg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsFxyXG4gICAgY29uc3QgW3Nob3dDaGlsZCwgc2V0U2hvd0NoaWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IHNldFNob3dDaGlsZCh0cnVlKSB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWx1ZShlKSB7XHJcbiAgICAgICAgaWYodmFsdWUgPT09IGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfWVsc2UgaWYocHJvcHMucmVnRXhwLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRWYWwgPSBwcm9wcy52YWxpZGF0ZU1ldGhvZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIHByb3BzLnN0YXRlQ2FsbGJhY2sodmFsaWRWYWwpO1xyXG4gICAgICAgICAgICAvLyBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIHNldFZhbGlkKHRydWUpOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBpbnZhbGlkVmFsID0gcHJvcHMudmFsaWRhdGVNZXRob2QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBwcm9wcy5zdGF0ZUNhbGxiYWNrKGludmFsaWRWYWwpO1xyXG4gICAgICAgICAgICAvLyBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFZhbGlkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzaG93Q2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfWVsc2UgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaWR9Pntwcm9wcy5sYWJlbE5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgbWFzaz17cHJvcHMubWFzayB8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZUlucHV0VmFsdWUoZSl9PlxyXG4gICAgICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2Pnt2YWxpZCA/IHByb3BzLnZhbGlkYXRpb25FdmVudHMudmFsaWQudmFsdWUgOiBwcm9wcy52YWxpZGF0aW9uRXZlbnRzLmludmFsaWQudmFsdWV9PC9kaXY+XHJcbiAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9