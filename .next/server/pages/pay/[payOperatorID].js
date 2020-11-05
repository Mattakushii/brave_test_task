module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/pay/[payOperatorID].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/PaymentPageStyled.ts":
/*!*********************************************!*\
  !*** ./src/components/PaymentPageStyled.ts ***!
  \*********************************************/
/*! exports provided: PaymentContainer, InputBlock, Input, ErrorMessage, ResultContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContainer", function() { return PaymentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultContainer", function() { return ResultContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

;
const PaymentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaymentPageStyled__PaymentContainer",
  componentId: "sc-1h64qh5-0"
})(["width:980px;height:100%;display:flex;flex-direction:column;"]);
const InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaymentPageStyled__InputBlock",
  componentId: "sc-1h64qh5-1"
})(["display:flex;flex-direction:column;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "PaymentPageStyled__Input",
  componentId: "sc-1h64qh5-2"
})(["width:200px;padding:10px 25px;font-size:18px;border:none;outline:none;border-radius:5px;transition:0.5s;color:", ";box-shadow:", ""], props => props.valid ? "#000000" : "#D30000", props => props.valid ? "none" : "inset 0 0 5px rgba(211,0,0,0.5)");
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaymentPageStyled__ErrorMessage",
  componentId: "sc-1h64qh5-3"
})(["  width:500px;height:25px;color:#D30000;"]);
const ResultContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaymentPageStyled__ResultContainer",
  componentId: "sc-1h64qh5-4"
})([""]);

/***/ }),

/***/ "./src/components/inputFormComponent/InputForm.tsx":
/*!*********************************************************!*\
  !*** ./src/components/inputFormComponent/InputForm.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputFormStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputFormStyled */ "./src/components/inputFormComponent/InputFormStyled.ts");
var _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\inputFormComponent\\InputForm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InputForm = props => {
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: inputValid,
    1: setInputValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: inputError,
    1: setInputError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    error: 'Поле должно быть заполнено'
  });
  const phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
  const paymentRegexp = /^\d+$/;
  const letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

  function handleUserInput(e) {
    const inputName = e.target.name;
    const value = e.target.value;
    setInputValue(value);
    validate(inputName, value);
  }

  function validate(inputName, value) {
    const validationError = inputError;
    let isValidValue = inputValid;

    switch (inputName) {
      case 'phone':
        if (value.length < inputValue.length) {
          setInputValue(value);
          props.callbackValidState(false);
          validationError.error = 'Поле должно быть заполено';
        } else {
          let val = [...value];

          if (value.length === 7) {
            val.splice(6, 0, ')', '-');
            setInputValue(val.join(''));
          }

          if (value.length === 12) {
            val.splice(11, 0, '-');
            setInputValue(val.join(''));
          }

          if (value.length === 15) {
            val.splice(14, 0, '-');
            setInputValue(val.join(''));
          }

          if (value.length >= 17) {
            const blockedValue = value.slice(0, 17);
            setInputValue(blockedValue);
          }
        }

        if (phoneRegexp.test(value)) {
          isValidValue = true;
          validationError.error = '';
        } else if (value.match(letterRegexp)) {
          isValidValue = false;
          validationError.error = 'Поле должно содержать только цифры';
        } else {
          isValidValue = false;
          validationError.error = 'Поле должно быть заполено';
        }

        console.log(isValidValue, inputValue, validationError);
        break;

      case 'payment':
        if (value === '') {
          isValidValue = false;
          validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
        } else if (paymentRegexp.test(value)) {
          const val = parseInt(value);

          if (val >= 1 && val <= 1000) {
            isValidValue = true;
            validationError.error = '';
          } else {
            isValidValue = false;
            validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
          }
        } else {
          isValidValue = false;
          validationError.error = 'Поле содержит недопустимые символы';
        }

        break;

      default:
        break;
    }

    setInputValid(isValidValue);
    setInputError(validationError);
    props.callbackValueState(value);
    props.callbackValidState(isValidValue);
  }

  function passFirstValue() {
    if (inputValue.length === 0 && props.name === 'phone') {
      setInputValue('+7(');
    }
  }

  return __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["InputBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: props.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: props.id,
    name: props.name,
    type: props.type,
    value: inputValue,
    placeholder: props.placeholder,
    onChange: e => {
      handleUserInput(e);
    },
    onClick: () => {
      passFirstValue();
    },
    onFocus: () => {
      passFirstValue();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, inputError.error));
};

/* harmony default export */ __webpack_exports__["default"] = (InputForm);

/***/ }),

/***/ "./src/components/inputFormComponent/InputFormStyled.ts":
/*!**************************************************************!*\
  !*** ./src/components/inputFormComponent/InputFormStyled.ts ***!
  \**************************************************************/
/*! exports provided: InputBlock, Input, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputFormStyled__InputBlock",
  componentId: "sc-1dzklt4-0"
})(["display:flex;flex-direction:column;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "InputFormStyled__Input",
  componentId: "sc-1dzklt4-1"
})(["width:200px;padding:10px 25px;font-size:18px;border:none;outline:none;border-radius:5px;transition:0.5s;color:", ";box-shadow:", ""], props => props.valid ? "#000000" : "#D30000", props => props.valid ? "none" : "inset 0 0 5px rgba(211,0,0,0.5)");
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputFormStyled__ErrorMessage",
  componentId: "sc-1dzklt4-2"
})(["  width:500px;height:25px;color:#D30000;"]);

/***/ }),

/***/ "./src/pages/pay/[payOperatorID].tsx":
/*!*******************************************!*\
  !*** ./src/pages/pay/[payOperatorID].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.ts");
/* harmony import */ var _components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inputFormComponent/InputForm */ "./src/components/inputFormComponent/InputForm.tsx");
var _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PaymentPage = ({
  operatorData
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: validPhone,
    1: setIsValidPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: payment,
    1: setPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: validPayment,
    1: setIsValidPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: validForm,
    1: setIsValidForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: responseData,
    1: setResponseData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    result: false,
    message: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validPhone && validPayment) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }

    console.log(validForm, validPhone, validPayment);
  }); //сделать useEffect и обновлять кнопку формы

  async function sendData(e) {
    e.preventDefault();
    const phoneArr = phone.match(/\d/g);
    const validPhone = phoneArr === null || phoneArr === void 0 ? void 0 : phoneArr.join('');
    const reqBody = {
      phoneNumber: validPhone,
      payment: payment,
      operatorName: operatorData === null || operatorData === void 0 ? void 0 : operatorData.data.operatorName
    };
    console.log(reqBody);
    setResponseData({
      result: false,
      message: 'Обработка платежа...'
    });
    const req = await fetch(`http://localhost:3000/api/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    });
    const res = await req.json();
    setResponseData(res);
    setTimeout(() => {
      redirect(res.result);
    }, 1000);
    return res;
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
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_2__["PaymentContainer"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx("form", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      callbackValueState: setPhone,
      callbackValidState: setIsValidPhone,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "payment",
      name: "payment",
      type: "text",
      placeholder: "Введите сумму",
      callbackValueState: setPayment,
      callbackValidState: setIsValidPayment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }), __jsx("input", {
      disabled: !validForm,
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: e => {
        sendData(e);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, responseData.message));
  } else {
    return __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

PaymentPage.getInitialProps = async ctx => {
  const res = await fetch(`http://localhost:3000/api/operators/${ctx.query.payOperatorID}`);
  const data = await res.json();
  return {
    operatorData: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentPage);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiUGF5bWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIklucHV0QmxvY2siLCJJbnB1dCIsImlucHV0IiwicHJvcHMiLCJ2YWxpZCIsIkVycm9yTWVzc2FnZSIsIlJlc3VsdENvbnRhaW5lciIsIklucHV0Rm9ybSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidXNlU3RhdGUiLCJpbnB1dFZhbGlkIiwic2V0SW5wdXRWYWxpZCIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwiZXJyb3IiLCJwaG9uZVJlZ2V4cCIsInBheW1lbnRSZWdleHAiLCJsZXR0ZXJSZWdleHAiLCJoYW5kbGVVc2VySW5wdXQiLCJlIiwiaW5wdXROYW1lIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1ZhbGlkVmFsdWUiLCJsZW5ndGgiLCJjYWxsYmFja1ZhbGlkU3RhdGUiLCJ2YWwiLCJzcGxpY2UiLCJqb2luIiwiYmxvY2tlZFZhbHVlIiwic2xpY2UiLCJ0ZXN0IiwibWF0Y2giLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJjYWxsYmFja1ZhbHVlU3RhdGUiLCJwYXNzRmlyc3RWYWx1ZSIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiUGF5bWVudFBhZ2UiLCJvcGVyYXRvckRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwicGhvbmVBcnIiLCJyZXFCb2R5IiwicGhvbmVOdW1iZXIiLCJvcGVyYXRvck5hbWUiLCJkYXRhIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicmVwbGFjZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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SCxHQTFCRCxNQTBCTztBQUNILFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLaEIsWUFBTCxhQUFLQSxZQUFMLHVCQUFLQSxZQUFZLENBQUVxQyxVQUFuQixDQUFQO0FBQ0g7QUFDSixDQWhHRDs7QUE2R0F0QyxXQUFXLENBQUN1QyxlQUFaLEdBQThCLE1BQU9DLEdBQVAsSUFBZ0M7QUFDMUQsUUFBTVAsR0FBRyxHQUFHLE1BQU1OLEtBQUssQ0FBRSx1Q0FBc0NhLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxhQUFjLEVBQWhFLENBQXZCO0FBQ0EsUUFBTWpCLElBQStCLEdBQUcsTUFBTVEsR0FBRyxDQUFDQyxJQUFKLEVBQTlDO0FBQ0EsU0FBTztBQUFFakMsZ0JBQVksRUFBRXdCO0FBQWhCLEdBQVA7QUFDSCxDQUpEOztBQU1lekIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUN4SUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0udHN4XCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICAgIHJlYWRvbmx5IHZhbGlkICA6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGF5bWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgd2lkdGg6IDk4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRCbG9jayA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0PFRpdGxlUHJvcHM+YFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy52YWxpZCA/IFwiIzAwMDAwMFwiIDogXCIjRDMwMDAwXCJ9O1xyXG4gICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy52YWxpZCA/IFwibm9uZVwiOiBcImluc2V0IDAgMCA1cHggcmdiYSgyMTEsMCwwLDAuNSlcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YCBcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiAjRDMwMDAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuYDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZX0gZnJvbSBcIi4vSW5wdXRGb3JtU3R5bGVkXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Rm9ybVByb3BzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlOnN0cmluZyk6IHZvaWQsXHJcbiAgICBjYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZDogYm9vbGVhbik6IHZvaWQsXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsaWQsIHNldElucHV0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lucHV0RXJyb3IsIHNldElucHV0RXJyb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3QvicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9eXFxkKyQvO1xyXG4gICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC87XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB2YWxpZGF0ZShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWUgOiBzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgOiBhbnkgPSBpbnB1dEVycm9yXHJcbiAgICAgICAgbGV0IGlzVmFsaWRWYWx1ZSA6IGJvb2xlYW4gPSBpbnB1dFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IGlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBbLi4udmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDYsIDAsICcpJywgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxMSwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+PSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja2VkVmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAxNylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShibG9ja2VkVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUubWF0Y2gobGV0dGVyUmVnZXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0YLQvtC70YzQutC+INGG0LjRhNGA0YsnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpc1ZhbGlkVmFsdWUsIGlucHV0VmFsdWUsIHZhbGlkYXRpb25FcnJvcilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCyINC30LDQtNCw0L3QvdGL0YUg0LPRgNCw0L3QuNGG0LDRhSAo0L7RgiAx0YAg0LTQviAxMDAw0YApJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXltZW50UmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPj0gMSAmJiB2YWwgPD0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElucHV0VmFsaWQoaXNWYWxpZFZhbHVlKTtcclxuICAgICAgICBzZXRJbnB1dEVycm9yKHZhbGlkYXRpb25FcnJvcik7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkgOiB2b2lkIHtcclxuICAgICAgICBpZihpbnB1dFZhbHVlLmxlbmd0aCA9PT0gMCAmJiBwcm9wcy5uYW1lID09PSAncGhvbmUnKSB7XHJcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoJys3KCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Lz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7aGFuZGxlVXNlcklucHV0KGUpfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+e2lucHV0RXJyb3IuZXJyb3J9PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZvcm0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0QmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dDxUaXRsZVByb3BzPmBcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPyBcIiMwMDAwMDBcIiA6IFwiI0QzMDAwMFwifTtcclxuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPyBcIm5vbmVcIjogXCJpbnNldCAwIDAgNXB4IHJnYmEoMjExLDAsMCwwLjUpXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmAgXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI0QzMDAwMDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV4dFBhZ2VDb250ZXh0fSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtcclxuICAgIFBheW1lbnRDb250YWluZXIsXHJcbiAgICBJbnB1dEJsb2NrLFxyXG4gICAgRXJyb3JNZXNzYWdlLFxyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFBheW1lbnRQcm9wcyB7XHJcbiAgICBvcGVyYXRvckRhdGE6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VuZGluZ0RhdGEge1xyXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHBheW1lbnQ6IHN0cmluZyxcclxuICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtvcGVyYXRvckRhdGF9OiBQYXltZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGhvbmUsIHNldElzVmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRJc1ZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRJc1ZhbGlkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTonJ1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGlmKHZhbGlkUGhvbmUgJiYgdmFsaWRQYXltZW50KSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRGb3JtKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsaWRGb3JtLCB2YWxpZFBob25lLCB2YWxpZFBheW1lbnQpXHJcbiAgICB9KVxyXG5cclxuICAgIC8v0YHQtNC10LvQsNGC0YwgdXNlRWZmZWN0INC4INC+0LHQvdC+0LLQu9GP0YLRjCDQutC90L7Qv9C60YMg0YTQvtGA0LzRi1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKGU6IFJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBob25lQXJyIDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBwaG9uZS5tYXRjaCgvXFxkL2cpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUGhvbmUgPSBwaG9uZUFycj8uam9pbignJyk7XHJcbiAgICAgICAgY29uc3QgcmVxQm9keSA6IFNlbmRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdmFsaWRQaG9uZSxcclxuICAgICAgICAgICAgcGF5bWVudDogcGF5bWVudCxcclxuICAgICAgICAgICAgb3BlcmF0b3JOYW1lOiBvcGVyYXRvckRhdGE/LmRhdGEub3BlcmF0b3JOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcUJvZHkpXHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQv9C70LDRgtC10LbQsC4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVkaXJlY3QocmVzLnJlc3VsdClcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QocmVzdWx0IDogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWxpZFN0YXRlPXtzZXRJc1ZhbGlkUGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWxpZFN0YXRlPXtzZXRJc1ZhbGlkUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17IXZhbGlkRm9ybX0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57cmVzcG9uc2VEYXRhLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8aDE+e29wZXJhdG9yRGF0YT8uZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdG9yRGF0YSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvckxpbms6IHN0cmluZyxcclxuICAgICAgICBpbWdVcmw/OiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBlcnJNZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBvazogYm9vbGVhblxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBvcGVyYXRvckRhdGE6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=