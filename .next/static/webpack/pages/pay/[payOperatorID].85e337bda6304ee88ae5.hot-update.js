webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context */ "./src/Context.ts");
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.ts");
/* harmony import */ var _components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/inputFormComponent/InputForm */ "./src/components/inputFormComponent/InputForm.tsx");



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PaymentPage = function PaymentPage(_ref) {
  _s();

  var operatorData = _ref.operatorData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_4__["Context"]),
      switchBackground = _useContext.switchBackground;

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
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_5__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_5__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_5__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 93,
        columnNumber: 21
      }
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 102,
        columnNumber: 21
      }
    }), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_5__["SubmitButton"], {
      disabled: !validForm,
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_5__["OperationResult"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "Zed5WvJjMxHzIkA+EwiOmS0lfoE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLnRzeCJdLCJuYW1lcyI6WyJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiUGF5bWVudFBhZ2UiLCJvcGVyYXRvckRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0Iiwic3dpdGNoQmFja2dyb3VuZCIsInVzZVN0YXRlIiwicGhvbmUiLCJzZXRQaG9uZSIsInZhbGlkUGhvbmUiLCJzZXRJc1ZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldElzVmFsaWRQYXltZW50IiwidmFsaWRGb3JtIiwic2V0SXNWYWxpZEZvcm0iLCJyZXN1bHQiLCJtZXNzYWdlIiwicmVzcG9uc2VEYXRhIiwic2V0UmVzcG9uc2VEYXRhIiwidXNlRWZmZWN0Iiwic2VuZERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJwaG9uZUFyciIsIm1hdGNoIiwiam9pbiIsInJlcUJvZHkiLCJwaG9uZU51bWJlciIsIm9wZXJhdG9yTmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXEiLCJqc29uIiwicmVzIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicmVwbGFjZSIsImlkIiwiZXJyTWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxPQUFPLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQSxNQVhKLEVBb0JJLE1BQUMsMEVBQUQ7QUFBYyxjQUFRLEVBQUUsQ0FBQ0MsU0FBekI7QUFBb0MsYUFBTyxFQUFFLGlCQUFDUSxDQUFELEVBQU07QUFBQ0QsZ0JBQVEsQ0FBQ0MsQ0FBRCxDQUFSO0FBQVksT0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFwQkosQ0FESixFQXVCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQURKLENBdkJKLENBREo7QUE2QkgsR0E5QkQsTUE4Qk87QUFDSCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS3RCLFlBQUwsYUFBS0EsWUFBTCx1QkFBS0EsWUFBWSxDQUFFOEMsVUFBbkIsQ0FBUDtBQUNIO0FBQ0osQ0FsR0Q7O0dBQU0vQyxXO1VBQ2FHLHFEOzs7S0FEYkgsVzs7QUErR05BLFdBQVcsQ0FBQ2dELGVBQVo7QUFBQSwrTEFBOEIsa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUmYsS0FBSywrQ0FBd0NlLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxhQUFsRCxFQURHOztBQUFBO0FBQ3BCVCxlQURvQjtBQUFBO0FBQUEsbUJBRW9CQSxHQUFHLENBQUNELElBQUosRUFGcEI7O0FBQUE7QUFFcEJWLGdCQUZvQjtBQUFBLDhDQUduQjtBQUFFOUIsMEJBQVksRUFBRThCO0FBQWhCLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lL0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS44NWUzMzdiZGE2MzA0ZWU4OGFlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbmludGVyZmFjZSBDb250ZXh0UHJvcHMge1xyXG5cclxufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge05leHRQYWdlQ29udGV4dH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7Q29udGV4dH0gZnJvbSBcIi4uLy4uL0NvbnRleHRcIjtcclxuaW1wb3J0IHtcclxuICAgIEZvcm1IZWFkZXIsXHJcbiAgICBQYXltZW50Q29udGFpbmVyLFxyXG4gICAgUGF5bWVudEZvcm0sXHJcbiAgICBPcGVyYXRpb25SZXN1bHQsIFN1Ym1pdEJ1dHRvblxyXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0Rm9ybUNvbXBvbmVudC9JbnB1dEZvcm1cIjtcclxuXHJcbmludGVyZmFjZSBQYXltZW50UHJvcHMge1xyXG4gICAgb3BlcmF0b3JEYXRhOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbmRpbmdEYXRhIHtcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBwYXltZW50OiBzdHJpbmcsXHJcbiAgICBvcGVyYXRvck5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7b3BlcmF0b3JEYXRhfTogUGF5bWVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtzd2l0Y2hCYWNrZ3JvdW5kfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRJc1ZhbGlkUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGF5bWVudCwgc2V0SXNWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0SXNWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlRGF0YSwgc2V0UmVzcG9uc2VEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICByZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6JydcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBpZih2YWxpZFBob25lICYmIHZhbGlkUGF5bWVudCkge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZW5kRGF0YShlOiBSZWFjdC5Gb3JtRXZlbnQpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwaG9uZUFyciA6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gcGhvbmUubWF0Y2goL1xcZC9nKTtcclxuICAgICAgICBjb25zdCB2YWxpZFBob25lID0gcGhvbmVBcnI/LmpvaW4oJycpO1xyXG4gICAgICAgIGNvbnN0IHJlcUJvZHkgOiBTZW5kaW5nRGF0YSA9IHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHZhbGlkUGhvbmUsXHJcbiAgICAgICAgICAgIHBheW1lbnQ6IHBheW1lbnQsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yTmFtZTogb3BlcmF0b3JEYXRhPy5kYXRhLm9wZXJhdG9yTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXFCb2R5KVxyXG4gICAgICAgIHNldFJlc3BvbnNlRGF0YSh7XHJcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfQntCx0YDQsNCx0L7RgtC60LAg0L/Qu9Cw0YLQtdC20LAuLi4nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGF5YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHJlcyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlcy5yZXN1bHQpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHJlc3VsdCA6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBob25lKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0UGF5bWVudCgnJyk7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRQYXltZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9wZXJhdG9yRGF0YSAmJiBvcGVyYXRvckRhdGEuZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyPtCe0L/Qu9Cw0YLQsCB7b3BlcmF0b3JEYXRhLmRhdGEub3BlcmF0b3JOYW1lfTwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiBkaXNhYmxlZD17IXZhbGlkRm9ybX0gb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+0J7Qv9C70LDRgtC40YLRjDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYXltZW50Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblJlc3VsdD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC48L09wZXJhdGlvblJlc3VsdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntvcGVyYXRvckRhdGE/LmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9wZXJhdG9yRGF0YSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvckxpbms6IHN0cmluZyxcclxuICAgICAgICBpbWdVcmw/OiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBlcnJNZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBvazogYm9vbGVhblxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBvcGVyYXRvckRhdGE6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=