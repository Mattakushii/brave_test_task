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
      console.log(e.ta);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dCIsInByb3BzIiwidXNlU3RhdGUiLCJzaG93Q2hpbGQiLCJzZXRTaG93Q2hpbGQiLCJ1c2VFZmZlY3QiLCJ2YWxpZCIsInNldFZhbGlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwicmVnRXhwIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJ0YSIsInZhbGlkVmFsIiwidmFsaWRhdGVNZXRob2QiLCJzdGF0ZUNhbGxiYWNrIiwiaW52YWxpZFZhbCIsImlkIiwibGFiZWxOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFzayIsInZhbGlkYXRpb25FdmVudHMiLCJpbnZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCO0FBRHlCLGtCQUVTQyxzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVsQkMsU0FGa0I7QUFBQSxNQUVQQyxZQUZPOztBQUd6QkMseURBQVMsQ0FBQyxZQUFNO0FBQUVELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQW9CLEdBQTdCLEVBQStCLEVBQS9CLENBQVQ7O0FBSHlCLG1CQUtDRixzREFBUSxDQUFDLEtBQUQsQ0FMVDtBQUFBLE1BS2xCSSxLQUxrQjtBQUFBLE1BS1hDLFFBTFc7O0FBQUEsbUJBTUNMLHNEQUFRLENBQUMsRUFBRCxDQU5UO0FBQUEsTUFNbEJNLEtBTmtCO0FBQUEsTUFNWEMsUUFOVzs7QUFTekIsV0FBU0MsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQ3pCLFFBQUdILEtBQUssS0FBS0csQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQXRCLEVBQTZCO0FBQ3pCLGFBQU8sSUFBUDtBQUNILEtBRkQsTUFFTSxJQUFHUCxLQUFLLENBQUNZLE1BQU4sQ0FBYUMsSUFBYixDQUFrQkgsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQTNCLENBQUgsRUFBc0M7QUFDeENPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFDLENBQUNNLEVBQWQ7QUFDQSxVQUFNQyxRQUFRLEdBQUdqQixLQUFLLENBQUNrQixjQUFOLENBQXFCUixDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBOUIsQ0FBakI7QUFDQVAsV0FBSyxDQUFDbUIsYUFBTixDQUFvQkYsUUFBcEI7QUFDQVQsY0FBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBVixDQUFSO0FBQ0FELGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDSCxLQU5LLE1BTUM7QUFDSCxVQUFNYyxVQUFVLEdBQUdwQixLQUFLLENBQUNrQixjQUFOLENBQXFCUixDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBOUIsQ0FBbkI7QUFDQVAsV0FBSyxDQUFDbUIsYUFBTixDQUFvQkMsVUFBcEI7QUFDQVosY0FBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBVixDQUFSO0FBQ0FELGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKOztBQUVELE1BQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNaLFdBQU8sSUFBUDtBQUNILEdBRkQsTUFFTSxPQUNGLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFFRixLQUFLLENBQUNxQixFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCckIsS0FBSyxDQUFDc0IsU0FBakMsQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFDSSxNQUFFLEVBQUV0QixLQUFLLENBQUNxQixFQURkO0FBRUksUUFBSSxFQUFFckIsS0FBSyxDQUFDdUIsSUFGaEI7QUFHSSxlQUFXLEVBQUV2QixLQUFLLENBQUN3QixXQUh2QjtBQUlJLFFBQUksRUFBRXhCLEtBQUssQ0FBQ3lCLElBQU4sSUFBYyxFQUp4QjtBQUtJLFlBQVEsRUFBRSxrQkFBQ2YsQ0FBRDtBQUFBLGFBQU1ELGdCQUFnQixDQUFDQyxDQUFELENBQXRCO0FBQUEsS0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1MLEtBQUssR0FBR0wsS0FBSyxDQUFDMEIsZ0JBQU4sQ0FBdUJyQixLQUF2QixDQUE2QkUsS0FBaEMsR0FBd0NQLEtBQUssQ0FBQzBCLGdCQUFOLENBQXVCQyxPQUF2QixDQUErQnBCLEtBQWxGLENBVEosQ0FERTtBQWFULENBekNEOztHQUFNUixTOztLQUFBQSxTO0FBMkNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLmE3OWVhMTA5YTQyNWI1YmE3YWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0LCBJbnB1dEJsb2NrfSBmcm9tICcuL0Zvcm1JbnB1dFN0eWxlZCc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEZvcm1JbnB1dCA9IChwcm9wcykgPT4geyBcclxuICAgIC8v0LTQu9GPINC40LfQsdC10LbQsNC90LjRjyDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNGPIHVzZUxheW91dEVmZmVjdCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwXHJcbiAgICBjb25zdCBbc2hvd0NoaWxkLCBzZXRTaG93Q2hpbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgc2V0U2hvd0NoaWxkKHRydWUpIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbdmFsaWQsIHNldFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbHVlKGUpIHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9ZWxzZSBpZihwcm9wcy5yZWdFeHAudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkVmFsID0gcHJvcHMudmFsaWRhdGVNZXRob2QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBwcm9wcy5zdGF0ZUNhbGxiYWNrKHZhbGlkVmFsKTtcclxuICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRWYWxpZCh0cnVlKTsgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRWYWwgPSBwcm9wcy52YWxpZGF0ZU1ldGhvZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHByb3BzLnN0YXRlQ2FsbGJhY2soaW52YWxpZFZhbCk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgc2V0VmFsaWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXNob3dDaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9ZWxzZSByZXR1cm4oXHJcbiAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pZH0+e3Byb3BzLmxhYmVsTmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBtYXNrPXtwcm9wcy5tYXNrIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZUlucHV0VmFsdWUoZSl9PlxyXG4gICAgICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2Pnt2YWxpZCA/IHByb3BzLnZhbGlkYXRpb25FdmVudHMudmFsaWQudmFsdWUgOiBwcm9wcy52YWxpZGF0aW9uRXZlbnRzLmludmFsaWQudmFsdWV9PC9kaXY+XHJcbiAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9