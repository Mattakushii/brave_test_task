webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/pages/pay/[payOperatorID].js":
/*!******************************************!*\
  !*** ./src/pages/pay/[payOperatorID].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.js");
/* harmony import */ var _components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputComponent/FormInput */ "./src/components/inputComponent/FormInput.js");




var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var PaymentPage = function PaymentPage(_ref) {
  _s();

  var data = _ref.data;

  //для избежания предупреждения useLayoutEffect на стороне сервера
  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      showChild = _useState2[0],
      setShowChild = _useState2[1];

  useEffect(function () {
    setShowChild(true);
  }, []); //добавить логические состояния validphone validpayment чтобы включать выключать кнопку

  var _useState3 = useState(''),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      validPhone = _useState6[0],
      setValidPhone = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      payment = _useState8[0],
      setPayment = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      validPayment = _useState10[0],
      setValidPayment = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      validForm = _useState12[0],
      setValidForm = _useState12[1]; //сделать логику для отключения кнопки


  function sendData(e) {
    console.log('work');
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      id: "phone",
      value: "phone",
      type: "tel",
      mask: "+7(999)-999-99-99",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx("input", {
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 12
      }
    }, data.errMessage);
  }
};

_s(PaymentPage, "xgoWxAE1uZ4KUmsy679R8sPxnrw=");

_c = PaymentPage;

PaymentPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://localhost:3000/api/operators/".concat(ctx.query.payOperatorID));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (PaymentPage);
var validationPhoneEvents = {
  valid: {
    value: 'Верно!!!',
    bool: true
  },
  invalid: {
    value: 'Заполните поле до конца',
    bool: false
  }
};
var validationPaymentEvents = {
  valid: {
    value: 'Верно!!!',
    bool: true
  },
  invalid: {
    value: 'Введите сумму от 1 до 1000 рублей',
    bool: false
  }
};

var _c;

$RefreshReg$(_c, "PaymentPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5qcyJdLCJuYW1lcyI6WyJQYXltZW50UGFnZSIsImRhdGEiLCJ1c2VTdGF0ZSIsInNob3dDaGlsZCIsInNldFNob3dDaGlsZCIsInVzZUVmZmVjdCIsInBob25lIiwic2V0UGhvbmUiLCJ2YWxpZFBob25lIiwic2V0VmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0VmFsaWRQYXltZW50IiwidmFsaWRGb3JtIiwic2V0VmFsaWRGb3JtIiwic2VuZERhdGEiLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJvcGVyYXRvck5hbWUiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiLCJyZXMiLCJqc29uIiwidmFsaWRhdGlvblBob25lRXZlbnRzIiwidmFsaWQiLCJ2YWx1ZSIsImJvb2wiLCJpbnZhbGlkIiwidmFsaWRhdGlvblBheW1lbnRFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDWTtBQUNZO0FBQ3RCO0FBQ2pDO0FBQ2YsU0FBUywrREFBYyxTQUFTLHFFQUFvQixZQUFZLDJFQUEwQixZQUFZLGdFQUFlO0FBQ3JILEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFrRDtBQUNuQztBQUNmO0FBQ0Esb0NBQW9DLGlFQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsaUVBQWdCO0FBQ3RHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFFNUI7QUFGNEIsa0JBR01DLFFBQVEsQ0FBQyxLQUFELENBSGQ7QUFBQTtBQUFBLE1BR3JCQyxTQUhxQjtBQUFBLE1BR1ZDLFlBSFU7O0FBSTVCQyxXQUFTLENBQUMsWUFBTTtBQUFFRCxnQkFBWSxD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QUFFTEMsUUFBSSxFQUFFO0FBRkQ7QUFMaUIsQ0FBOUI7QUFXQSxJQUFNRSx1QkFBdUIsR0FBRztBQUM1QkosT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxVQURKO0FBRUhDLFFBQUksRUFBRTtBQUZILEdBRHFCO0FBSzVCQyxTQUFPLEVBQUU7QUFDTEYsU0FBSyxFQUFFLG1DQURGO0FBRUxDLFFBQUksRUFBRTtBQUZEO0FBTG1CLENBQWhDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uYzcxOTNiNjc3M2ZhOGRmZTcyZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQge3VzZVN0YXRl0LF9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7UGF5bWVudENvbnRhaW5lciwgSW5wdXRCbG9jayxJbnB1dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudC9Gb3JtSW5wdXQnXHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7ZGF0YX0pID0+IHtcclxuXHJcbiAgICAvL9C00LvRjyDQuNC30LHQtdC20LDQvdC40Y8g0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjRjyB1c2VMYXlvdXRFZmZlY3Qg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsFxyXG4gICAgY29uc3QgW3Nob3dDaGlsZCwgc2V0U2hvd0NoaWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IHNldFNob3dDaGlsZCh0cnVlKSB9LCBbXSk7XHJcblxyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C40YfQtdGB0LrQuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB2YWxpZHBob25lIHZhbGlkcGF5bWVudCDRh9GC0L7QsdGLINCy0LrQu9GO0YfQsNGC0Ywg0LLRi9C60LvRjtGH0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0VmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0VmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy/RgdC00LXQu9Cw0YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dvcmsnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPiAgXHJcbiAgICAgICAgICAgICAgICA8aDE+0J7Qv9C70LDRgtCwIHtkYXRhLm9wZXJhdG9yTmFtZX08L2gxPiAgICBcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwaG9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwiKzcoOTk5KS05OTktOTktOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxoMT57ZGF0YS5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2VcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QaG9uZUV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QYXltZW50RXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQvtGCIDEg0LTQviAxMDAwINGA0YPQsdC70LXQuScsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=