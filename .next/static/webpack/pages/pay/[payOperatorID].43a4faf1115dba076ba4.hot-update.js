webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/popupComponent/Popup.tsx":
/*!*************************************************!*\
  !*** ./src/components/popupComponent/Popup.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _PaymentPageStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PaymentPageStyled */ "./src/components/PaymentPageStyled.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\popupComponent\\Popup.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Popup = function Popup(props) {
  return __jsx(_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_0__["PopupContainer"], {
    visible: props.popupFlag,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_0__["OperationResult"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing."));
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
    result: false,
    message: ''
  }),
      responseData = _useState6[0],
      setResponseData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
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
              console.log(reqBody);
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
                setPopupFlag(true);
                redirect(res.result);
              }, 1000);
              return _context.abrupt("return", res);

            case 15:
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
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
        lineNumber: 97,
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
        lineNumber: 106,
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
        lineNumber: 115,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      popupFlag: popupFlag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "GKoFBJs4yCqDJzgOB35bU0x2c3Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS50c3giXSwibmFtZXMiOlsiUG9wdXAiLCJwcm9wcyIsInBvcHVwRmxhZyIsIlBheW1lbnRQYWdlIiwib3BlcmF0b3JEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJzZXRQb3B1cEZsYWciLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lQXJyIiwibWF0Y2giLCJqb2luIiwicmVxQm9keSIsInBob25lTnVtYmVyIiwib3BlcmF0b3JOYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcSIsImpzb24iLCJyZXMiLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJyZXBsYWNlIiwiaWQiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU1BLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBc0I7QUFDaEMsU0FDSSxNQUFDLGlFQUFEO0FBQWdCLFdBQU8sRUFBRUEsS0FBSyxDQUFDQyxTQUEvQjtBQUFBO0FBQUE7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZTlCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uNDNhNGZhZjExMTVkYmEwNzZiYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0aW9uUmVzdWx0LCBQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4uL1BheW1lbnRQYWdlU3R5bGVkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQb3B1cFByb3BzIHtcclxuICAgIHBvcHVwRmxhZzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBQb3B1cCA9IChwcm9wczpQb3B1cFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFBvcHVwQ29udGFpbmVyIHZpc2libGU9e3Byb3BzLnBvcHVwRmxhZ30+XHJcbiAgICAgICAgICAgIDxPcGVyYXRpb25SZXN1bHQ+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nLjwvT3BlcmF0aW9uUmVzdWx0PlxyXG4gICAgICAgIDwvUG9wdXBDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV4dFBhZ2VDb250ZXh0fSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vLi4vQ29udGV4dFwiO1xyXG5pbXBvcnQge1xyXG4gICAgRm9ybUhlYWRlcixcclxuICAgIFBheW1lbnRDb250YWluZXIsXHJcbiAgICBQYXltZW50Rm9ybSxcclxuICAgIE9wZXJhdGlvblJlc3VsdCxcclxuICAgIFN1Ym1pdEJ1dHRvbixcclxuICAgIFBvcHVwQ29udGFpbmVyLFxyXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0Rm9ybUNvbXBvbmVudC9JbnB1dEZvcm1cIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BvcHVwQ29tcG9uZW50L1BvcHVwXCI7XHJcblxyXG5pbnRlcmZhY2UgUGF5bWVudFByb3BzIHtcclxuICAgIG9wZXJhdG9yRGF0YTogT3BlcmF0b3JEYXRhIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTZW5kaW5nRGF0YSB7XHJcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgcGF5bWVudDogc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcclxufVxyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe29wZXJhdG9yRGF0YX06IFBheW1lbnRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0SXNWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldElzVmFsaWRQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZEZvcm0sIHNldElzVmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZURhdGEsIHNldFJlc3BvbnNlRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOicnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3BvcHVwRmxhZywgc2V0UG9wdXBGbGFnXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYodmFsaWRQaG9uZSAmJiB2YWxpZFBheW1lbnQpIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZERhdGEoZTogUmVhY3QuRm9ybUV2ZW50KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVBcnIgOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHBob25lLm1hdGNoKC9cXGQvZyk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRQaG9uZSA9IHBob25lQXJyPy5qb2luKCcnKTtcclxuICAgICAgICBjb25zdCByZXFCb2R5IDogU2VuZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB2YWxpZFBob25lLFxyXG4gICAgICAgICAgICBwYXltZW50OiBwYXltZW50LFxyXG4gICAgICAgICAgICBvcGVyYXRvck5hbWU6IG9wZXJhdG9yRGF0YT8uZGF0YS5vcGVyYXRvck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxQm9keSlcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEoe1xyXG4gICAgICAgICAgICByZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn0J7QsdGA0LDQsdC+0YLQutCwINC/0LvQsNGC0LXQttCwLi4uJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3BheWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlRGF0YShyZXMpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3B1cEZsYWcodHJ1ZSlcclxuICAgICAgICAgICAgcmVkaXJlY3QocmVzLnJlc3VsdClcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QocmVzdWx0IDogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXI+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ9e1wi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsaWRTdGF0ZT17c2V0SXNWYWxpZFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLQstC10LTQuNGC0LUg0YHRg9C80LzRg1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ9e1wi0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsaWRTdGF0ZT17c2V0SXNWYWxpZFBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXshdmFsaWRGb3JtfSBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT7QntC/0LvQsNGC0LjRgtGMPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1BheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBGbGFnPXtwb3B1cEZsYWd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntvcGVyYXRvckRhdGE/LmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9wZXJhdG9yRGF0YSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvckxpbms6IHN0cmluZyxcclxuICAgICAgICBpbWdVcmw/OiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBlcnJNZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBvazogYm9vbGVhblxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBvcGVyYXRvckRhdGE6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=