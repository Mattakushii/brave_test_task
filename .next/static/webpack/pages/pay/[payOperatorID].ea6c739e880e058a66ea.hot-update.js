webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/popupComponent/Popup.tsx":
/*!*************************************************!*\
  !*** ./src/components/popupComponent/Popup.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _PopupStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupStyled */ "./src/components/popupComponent/PopupStyled.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\popupComponent\\Popup.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Popup = function Popup(props) {
  console.log(props.operationResult);
  return __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PopupContainer"], {
    visible: props.popupFlag,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["OperationResult"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["Preloader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PreloaderText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, props.message)));
};

_c = Popup;
/* harmony default export */ __webpack_exports__["default"] = (Popup);

var _c;

$RefreshReg$(_c, "Popup");

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

/***/ }),

/***/ "./src/pages/pay/[payOperatorID].tsx":
/*!*******************************************!*\
  !*** ./src/pages/pay/[payOperatorID].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.ts");
/* harmony import */ var _components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputFormComponent/InputForm */ "./src/components/inputFormComponent/InputForm.tsx");
/* harmony import */ var _components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/popupComponent/Popup */ "./src/components/popupComponent/Popup.tsx");



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PaymentPage = function PaymentPage(_ref) {
  _s();

  var operatorData = _ref.operatorData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      phone = _useState[0],
      setPhone = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPhone = _useState2[0],
      setIsValidPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      payment = _useState3[0],
      setPayment = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPayment = _useState4[0],
      setIsValidPayment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validForm = _useState5[0],
      setIsValidForm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    result: '',
    message: ''
  }),
      responseData = _useState6[0],
      setResponseData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      popupFlag = _useState7[0],
      setPopupFlag = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (validPhone && validPayment) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  });

  function sendData(_x) {
    return _sendData.apply(this, arguments);
  }

  function _sendData() {
    _sendData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var phoneArr, validPhone, reqBody, req, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              phoneArr = phone.match(/\d/g);
              validPhone = phoneArr === null || phoneArr === void 0 ? void 0 : phoneArr.join('');
              reqBody = {
                phoneNumber: validPhone,
                payment: payment,
                operatorName: operatorData === null || operatorData === void 0 ? void 0 : operatorData.data.operatorName
              };
              setPopupFlag(true);
              setResponseData({
                result: false,
                message: 'Обработка платежа...'
              });
              _context.next = 8;
              return fetch("http://localhost:3000/api/pay", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
              });

            case 8:
              req = _context.sent;
              _context.next = 11;
              return req.json();

            case 11:
              res = _context.sent;
              setResponseData(res);
              setTimeout(function () {
                setPopupFlag(false);
                redirect(res.result);
              }, 2000);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _sendData.apply(this, arguments);
  }

  function redirect(result) {
    if (result) {
      router.replace('/');
    } else {
      setPhone('');
      setIsValidPhone(false);
      setPayment('');
      setIsValidPayment(false);
      setIsValidForm(false);
    }
  }

  if (operatorData && operatorData.data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      labelContent: "Номер телефона",
      callbackValueState: setPhone,
      callbackValidState: setIsValidPhone,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "payment",
      name: "payment",
      type: "text",
      placeholder: "Введите сумму",
      labelContent: "Сумма платежа",
      callbackValueState: setPayment,
      callbackValidState: setIsValidPayment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }
    }), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["SubmitButton"], {
      disabled: !validForm,
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      popupFlag: popupFlag,
      message: responseData.message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "e8YYBlH/VNT1+fj2tAUURUmDiFc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = PaymentPage;

PaymentPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://localhost:3000/api/operators/".concat(ctx.query.payOperatorID));

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", {
              operatorData: data
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (PaymentPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS50c3giXSwibmFtZXMiOlsiUG9wdXAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJvcGVyYXRpb25SZXN1bHQiLCJwb3B1cEZsYWciLCJtZXNzYWdlIiwiUGF5bWVudFBhZ2UiLCJvcGVyYXRvckRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInBob25lIiwic2V0UGhvbmUiLCJ2YWxpZFBob25lIiwic2V0SXNWYWxpZFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJ2YWxpZFBheW1lbnQiLCJzZXRJc1ZhbGlkUGF5bWVudCIsInZhbGlkRm9ybSIsInNldElzVmFsaWRGb3JtIiwicmVzdWx0IiwicmVzcG9uc2VEYXRhIiwic2V0UmVzcG9uc2VEYXRhIiwic2V0UG9wdXBGbGFnIiwidXNlRWZmZWN0Iiwic2VuZERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJwaG9uZUFyciIsIm1hdGNoIiwiam9pbiIsInJlcUJvZHkiLCJwaG9uZU51bWJlciIsIm9wZXJhdG9yTmFtZSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcSIsImpzb24iLCJyZXMiLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJyZXBsYWNlIiwiaWQiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBc0I7QUFFaENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLGVBQWxCO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUmYsS0FBSywrQ0FBd0NlLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxhQUFsRCxFQURHOztBQUFBO0FBQ3BCVCxlQURvQjtBQUFBO0FBQUEsbUJBRW9CQSxHQUFHLENBQUNELElBQUosRUFGcEI7O0FBQUE7QUFFcEJSLGdCQUZvQjtBQUFBLDhDQUduQjtBQUFFNUIsMEJBQVksRUFBRTRCO0FBQWhCLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lN0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5lYTZjNzM5ZTg4MGUwNThhNjZlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRpb25SZXN1bHQsIFBvcHVwQ29udGFpbmVyLCBQcmVsb2FkZXIsIFByZWxvYWRlclRleHR9IGZyb20gXCIuL1BvcHVwU3R5bGVkXCI7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQb3B1cFByb3BzIHtcclxuICAgIHBvcHVwRmxhZzogYm9vbGVhbixcclxuICAgIG1lc3NhZ2U6IHN0cmluZyxcclxuICAgIG9wZXJhdGlvblJlc3VsdDogYm9vbGVhbiB8IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBQb3B1cCA9IChwcm9wczpQb3B1cFByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvcHMub3BlcmF0aW9uUmVzdWx0KVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQb3B1cENvbnRhaW5lciB2aXNpYmxlPXtwcm9wcy5wb3B1cEZsYWd9PlxyXG4gICAgICAgICAgICA8T3BlcmF0aW9uUmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgPFByZWxvYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8UHJlbG9hZGVyVGV4dD57cHJvcHMubWVzc2FnZX08L1ByZWxvYWRlclRleHQ+XHJcbiAgICAgICAgICAgIDwvT3BlcmF0aW9uUmVzdWx0PlxyXG4gICAgICAgIDwvUG9wdXBDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV4dFBhZ2VDb250ZXh0fSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtcclxuICAgIEZvcm1IZWFkZXIsXHJcbiAgICBQYXltZW50Q29udGFpbmVyLFxyXG4gICAgUGF5bWVudEZvcm0sXHJcbiAgICBTdWJtaXRCdXR0b24sXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBcIjtcclxuXHJcbmludGVyZmFjZSBQYXltZW50UHJvcHMge1xyXG4gICAgb3BlcmF0b3JEYXRhOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbmRpbmdEYXRhIHtcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBwYXltZW50OiBzdHJpbmcsXHJcbiAgICBvcGVyYXRvck5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVzcG9uc2Uge1xyXG4gICAgcmVzdWx0OiBzdHJpbmcgfCBib29sZWFuLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtvcGVyYXRvckRhdGF9OiBQYXltZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGU8UmVzcG9uc2U+KHtcclxuICAgICAgICByZXN1bHQ6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6JydcclxuICAgIH0pXHJcbiAgICBjb25zdCBbcG9wdXBGbGFnLCBzZXRQb3B1cEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYodmFsaWRQaG9uZSAmJiB2YWxpZFBheW1lbnQpIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZERhdGEoZTogUmVhY3QuRm9ybUV2ZW50KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVBcnIgOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHBob25lLm1hdGNoKC9cXGQvZyk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRQaG9uZSA9IHBob25lQXJyPy5qb2luKCcnKTtcclxuICAgICAgICBjb25zdCByZXFCb2R5IDogU2VuZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB2YWxpZFBob25lLFxyXG4gICAgICAgICAgICBwYXltZW50OiBwYXltZW50LFxyXG4gICAgICAgICAgICBvcGVyYXRvck5hbWU6IG9wZXJhdG9yRGF0YT8uZGF0YS5vcGVyYXRvck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UG9wdXBGbGFnKHRydWUpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlRGF0YSh7XHJcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfQntCx0YDQsNCx0L7RgtC60LAg0L/Qu9Cw0YLQtdC20LAuLi4nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGF5YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHJlcyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvcHVwRmxhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlcy5yZXN1bHQpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHJlc3VsdCA6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBob25lKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0UGF5bWVudCgnJyk7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRQYXltZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9wZXJhdG9yRGF0YSAmJiBvcGVyYXRvckRhdGEuZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyPtCe0L/Qu9Cw0YLQsCB7b3BlcmF0b3JEYXRhLmRhdGEub3BlcmF0b3JOYW1lfTwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiBkaXNhYmxlZD17IXZhbGlkRm9ybX0gb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+0J7Qv9C70LDRgtC40YLRjDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYXltZW50Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwRmxhZz17cG9wdXBGbGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3Jlc3BvbnNlRGF0YS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57b3BlcmF0b3JEYXRhPy5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcGVyYXRvckRhdGEge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JMaW5rOiBzdHJpbmcsXHJcbiAgICAgICAgaW1nVXJsPzogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZXJyTWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb2s6IGJvb2xlYW5cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgb3BlcmF0b3JEYXRhOiBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9