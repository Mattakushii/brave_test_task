webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./src/components/PaymentPageStyled.ts":
/*!*********************************************!*\
  !*** ./src/components/PaymentPageStyled.ts ***!
  \*********************************************/
/*! exports provided: PaymentContainer, PaymentForm, FormHeader, InputBlock, Input, ErrorMessage, ResultContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContainer", function() { return PaymentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForm", function() { return PaymentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeader", function() { return FormHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultContainer", function() { return ResultContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

;
var PaymentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__PaymentContainer",
  componentId: "sc-1h64qh5-0"
})(["width:980px;display:flex;@media all and (max-width:660px){width:100%;}"]);
var PaymentForm = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "PaymentPageStyled__PaymentForm",
  componentId: "sc-1h64qh5-1"
})(["display:flex;flex-direction:column;"]);
var FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__FormHeader",
  componentId: "sc-1h64qh5-2"
})([""]);
var InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__InputBlock",
  componentId: "sc-1h64qh5-3"
})(["display:flex;flex-direction:column;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "PaymentPageStyled__Input",
  componentId: "sc-1h64qh5-4"
})(["width:200px;padding:10px 25px;font-size:18px;border:none;outline:none;border-radius:5px;transition:0.5s;color:", ";box-shadow:", ""], function (props) {
  return props.valid ? "#000000" : "#D30000";
}, function (props) {
  return props.valid ? "none" : "inset 0 0 5px rgba(211,0,0,0.5)";
});
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__ErrorMessage",
  componentId: "sc-1h64qh5-5"
})(["  height:25px;color:#D30000;"]);
var ResultContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__ResultContainer",
  componentId: "sc-1h64qh5-6"
})([""]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentForm"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["FormHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      callbackValueState: setPhone,
      callbackValidState: setIsValidPhone,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "payment",
      name: "payment",
      type: "text",
      placeholder: "Введите сумму",
      callbackValueState: setPayment,
      callbackValidState: setIsValidPayment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }), __jsx("input", {
      disabled: !validForm,
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, responseData.message));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

_s(PaymentPage, "NegEqlXVDoxQVNulDrfNMWQfnbU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLnRzeCJdLCJuYW1lcyI6WyJQYXltZW50Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiUGF5bWVudEZvcm0iLCJmb3JtIiwiRm9ybUhlYWRlciIsIklucHV0QmxvY2siLCJJbnB1dCIsImlucHV0IiwicHJvcHMiLCJ2YWxpZCIsIkVycm9yTWVzc2FnZSIsIlJlc3VsdENvbnRhaW5lciIsIlBheW1lbnRQYWdlIiwib3BlcmF0b3JEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lQXJyIiwibWF0Y2giLCJqb2luIiwicmVxQm9keSIsInBob25lTnVtYmVyIiwib3BlcmF0b3JOYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcSIsImpzb24iLCJyZXMiLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJyZXBsYWNlIiwiaWQiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJwYXlPcGVyYXRvcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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YUFBS0EsWUFBTCx1QkFBS0EsWUFBWSxDQUFFNEMsVUFBbkIsQ0FBUDtBQUNIO0FBQ0osQ0E3RkQ7O0dBQU03QyxXO1VBQ2FHLHFEOzs7S0FEYkgsVzs7QUEwR05BLFdBQVcsQ0FBQzhDLGVBQVo7QUFBQSwrTEFBOEIsa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUmYsS0FBSywrQ0FBd0NlLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxhQUFsRCxFQURHOztBQUFBO0FBQ3BCVCxlQURvQjtBQUFBO0FBQUEsbUJBRW9CQSxHQUFHLENBQUNELElBQUosRUFGcEI7O0FBQUE7QUFFcEJWLGdCQUZvQjtBQUFBLDhDQUduQjtBQUFFNUIsMEJBQVksRUFBRTRCO0FBQWhCLGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lN0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS42OGRhOGFmNzgxNTBiOGE1YzAzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICAgIHJlYWRvbmx5IHZhbGlkICA6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGF5bWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogOTgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0QmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQ8VGl0bGVQcm9wcz5gXHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnZhbGlkID8gXCIjMDAwMDAwXCIgOiBcIiNEMzAwMDBcIn07XHJcbiAgICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnZhbGlkID8gXCJub25lXCI6IFwiaW5zZXQgMCAwIDVweCByZ2JhKDIxMSwwLDAsMC41KVwifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgIFxyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICNEMzAwMDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVzdWx0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG5gOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge05leHRQYWdlQ29udGV4dH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7XHJcbiAgICBGb3JtSGVhZGVyLFxyXG4gICAgUGF5bWVudENvbnRhaW5lcixcclxuICAgIFBheW1lbnRGb3JtXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFBheW1lbnRQcm9wcyB7XHJcbiAgICBvcGVyYXRvckRhdGE6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VuZGluZ0RhdGEge1xyXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHBheW1lbnQ6IHN0cmluZyxcclxuICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtvcGVyYXRvckRhdGF9OiBQYXltZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTonJ1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGlmKHZhbGlkUGhvbmUgJiYgdmFsaWRQYXltZW50KSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKGU6IFJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBob25lQXJyIDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBwaG9uZS5tYXRjaCgvXFxkL2cpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUGhvbmUgPSBwaG9uZUFycj8uam9pbignJyk7XHJcbiAgICAgICAgY29uc3QgcmVxQm9keSA6IFNlbmRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdmFsaWRQaG9uZSxcclxuICAgICAgICAgICAgcGF5bWVudDogcGF5bWVudCxcclxuICAgICAgICAgICAgb3BlcmF0b3JOYW1lOiBvcGVyYXRvckRhdGE/LmRhdGEub3BlcmF0b3JOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcUJvZHkpXHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQv9C70LDRgtC10LbQsC4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVkaXJlY3QocmVzLnJlc3VsdClcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QocmVzdWx0IDogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXI+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshdmFsaWRGb3JtfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fS8+XHJcbiAgICAgICAgICAgICAgICA8L1BheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57cmVzcG9uc2VEYXRhLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8aDE+e29wZXJhdG9yRGF0YT8uZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgT3BlcmF0b3JEYXRhIHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG9wZXJhdG9yTGluazogc3RyaW5nLFxyXG4gICAgICAgIGltZ1VybD86IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGVyck1lc3NhZ2U6IHN0cmluZyxcclxuICAgIG9rOiBib29sZWFuXHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhIDogT3BlcmF0b3JEYXRhIHwgdW5kZWZpbmVkID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IG9wZXJhdG9yRGF0YTogZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==