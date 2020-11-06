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
  return __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PopupContainer"], {
    visible: props.popupFlag,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["OperationResult"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["Preloader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "preloader"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
    result: false,
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
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 94,
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
        lineNumber: 103,
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
        lineNumber: 112,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      popupFlag: popupFlag,
      message: responseData.message,
      operationResult: responseData.result,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "5zZ0r536Dy7SSuNwnYSgmtUtUsE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS50c3giXSwibmFtZXMiOlsiUG9wdXAiLCJwcm9wcyIsInBvcHVwRmxhZyIsIm1lc3NhZ2UiLCJQYXltZW50UGFnZSIsIm9wZXJhdG9yRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwicGhvbmUiLCJzZXRQaG9uZSIsInZhbGlkUGhvbmUiLCJzZXRJc1ZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldElzVmFsaWRQYXltZW50IiwidmFsaWRGb3JtIiwic2V0SXNWYWxpZEZvcm0iLCJyZXN1bHQiLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJzZXRQb3B1cEZsYWciLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lQXJyIiwibWF0Y2giLCJqb2luIiwicmVxQm9keSIsInBob25lTnVtYmVyIiwib3BlcmF0b3JOYW1lIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxIiwianNvbiIsInJlcyIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInJlcGxhY2UiLCJpZCIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBUUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFzQjtBQUNoQyxTQUNJLE1BQUMsMkRBQUQ7QUFBZ0IsV0FBTyxFQUFFQSxLQUFLLENBQUNDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Q1JmLEtBQUssK0NBQXdDZSxHQUFHLENBQUNDLEtBQUosQ0FBVUMsYUFBbEQsRUFERzs7QUFBQTtBQUNwQlQsZUFEb0I7QUFBQTtBQUFBLG1CQUVvQkEsR0FBRyxDQUFDRCxJQUFKLEVBRnBCOztBQUFBO0FBRXBCUixnQkFGb0I7QUFBQSw4Q0FHbkI7QUFBRTVCLDBCQUFZLEVBQUU0QjtBQUFoQixhQUhtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZTdCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uNDAwYjM4NzQ3NTg0NjE2NjkwMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0aW9uUmVzdWx0LCBQb3B1cENvbnRhaW5lciwgUHJlbG9hZGVyLCBQcmVsb2FkZXJUZXh0fSBmcm9tIFwiLi9Qb3B1cFN0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUG9wdXBQcm9wcyB7XHJcbiAgICBwb3B1cEZsYWc6IGJvb2xlYW4sXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBvcGVyYXRpb25SZXN1bHQ6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgUG9wdXAgPSAocHJvcHM6UG9wdXBQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQb3B1cENvbnRhaW5lciB2aXNpYmxlPXtwcm9wcy5wb3B1cEZsYWd9PlxyXG4gICAgICAgICAgICA8T3BlcmF0aW9uUmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgPFByZWxvYWRlcj5wcmVsb2FkZXI8L1ByZWxvYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3Byb3BzLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvT3BlcmF0aW9uUmVzdWx0PlxyXG4gICAgICAgIDwvUG9wdXBDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV4dFBhZ2VDb250ZXh0fSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtcclxuICAgIEZvcm1IZWFkZXIsXHJcbiAgICBQYXltZW50Q29udGFpbmVyLFxyXG4gICAgUGF5bWVudEZvcm0sXHJcbiAgICBTdWJtaXRCdXR0b24sXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBcIjtcclxuXHJcbmludGVyZmFjZSBQYXltZW50UHJvcHMge1xyXG4gICAgb3BlcmF0b3JEYXRhOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbmRpbmdEYXRhIHtcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBwYXltZW50OiBzdHJpbmcsXHJcbiAgICBvcGVyYXRvck5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7b3BlcmF0b3JEYXRhfTogUGF5bWVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRJc1ZhbGlkUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGF5bWVudCwgc2V0SXNWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0SXNWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlRGF0YSwgc2V0UmVzcG9uc2VEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICByZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6JydcclxuICAgIH0pXHJcbiAgICBjb25zdCBbcG9wdXBGbGFnLCBzZXRQb3B1cEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYodmFsaWRQaG9uZSAmJiB2YWxpZFBheW1lbnQpIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZERhdGEoZTogUmVhY3QuRm9ybUV2ZW50KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVBcnIgOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHBob25lLm1hdGNoKC9cXGQvZyk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRQaG9uZSA9IHBob25lQXJyPy5qb2luKCcnKTtcclxuICAgICAgICBjb25zdCByZXFCb2R5IDogU2VuZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB2YWxpZFBob25lLFxyXG4gICAgICAgICAgICBwYXltZW50OiBwYXltZW50LFxyXG4gICAgICAgICAgICBvcGVyYXRvck5hbWU6IG9wZXJhdG9yRGF0YT8uZGF0YS5vcGVyYXRvck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UG9wdXBGbGFnKHRydWUpXHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQv9C70LDRgtC10LbQsC4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9wdXBGbGFnKGZhbHNlKVxyXG4gICAgICAgICAgICByZWRpcmVjdChyZXMucmVzdWx0KVxyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWRpcmVjdChyZXN1bHQgOiBvYmplY3QpIHtcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQaG9uZSgnJyk7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRQaG9uZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFBheW1lbnQoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGF5bWVudChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChvcGVyYXRvckRhdGEgJiYgb3BlcmF0b3JEYXRhLmRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxQYXltZW50Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlYWRlcj7QntC/0LvQsNGC0LAge29wZXJhdG9yRGF0YS5kYXRhLm9wZXJhdG9yTmFtZX08L0Zvcm1IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGVsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIis3KDk5OSktOTk5LTk5LTk5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29udGVudD17XCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWxpZFN0YXRlPXtzZXRJc1ZhbGlkUGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29udGVudD17XCLQodGD0LzQvNCwINC/0LvQsNGC0LXQttCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWxpZFN0YXRlPXtzZXRJc1ZhbGlkUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b24gZGlzYWJsZWQ9eyF2YWxpZEZvcm19IG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PtCe0L/Qu9Cw0YLQuNGC0Yw8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cEZsYWc9e3BvcHVwRmxhZ31cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtyZXNwb25zZURhdGEubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25SZXN1bHQ9e3Jlc3BvbnNlRGF0YS5yZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntvcGVyYXRvckRhdGE/LmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9wZXJhdG9yRGF0YSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvckxpbms6IHN0cmluZyxcclxuICAgICAgICBpbWdVcmw/OiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBlcnJNZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBvazogYm9vbGVhblxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBvcGVyYXRvckRhdGE6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=