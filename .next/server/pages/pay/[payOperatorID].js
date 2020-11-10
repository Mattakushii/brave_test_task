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

/***/ "./public/CONSTANTS.js":
/*!*****************************!*\
  !*** ./public/CONSTANTS.js ***!
  \*****************************/
/*! exports provided: PAGE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_URL", function() { return PAGE_URL; });
const PAGE_URL = "http://localhost:3000";

/***/ }),

/***/ "./src/components/PaymentPageStyled.ts":
/*!*********************************************!*\
  !*** ./src/components/PaymentPageStyled.ts ***!
  \*********************************************/
/*! exports provided: PaymentContainer, PaymentForm, FormHeader, SubmitButton, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContainer", function() { return PaymentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForm", function() { return PaymentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeader", function() { return FormHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaymentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaymentPageStyled__PaymentContainer",
  componentId: "sc-1h64qh5-0"
})(["width:980px;display:flex;flex-direction:column;align-items:center;@media screen and (max-width:991px){width:760px;}@media screen and (max-width:767px){width:470px;}@media screen and (max-width:479px){width:320px;}"]);
const PaymentForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "PaymentPageStyled__PaymentForm",
  componentId: "sc-1h64qh5-1"
})(["width:760px;display:flex;flex-direction:column;@media screen and (max-width:767px){width:470px;}@media screen and (max-width:479px){width:310px;}"]);
const FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaymentPageStyled__FormHeader",
  componentId: "sc-1h64qh5-2"
})(["width:100%;height:35px;font-size:28px;font-weight:bold;text-align:center;margin-top:30px;margin-bottom:30px;"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "PaymentPageStyled__SubmitButton",
  componentId: "sc-1h64qh5-3"
})(["width:160px;height:40px;align-self:center;margin-top:10px;font-size:14px;font-weight:bold;border:none;background-color:#000000;color:#FFFFFF;border-radius:5px;transition:all 1s cubic-bezier(.25,.8,.25,1);&:disabled{background-color:#404040;color:#9e9e9e;}"]);
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaymentPageStyled__ErrorMessage",
  componentId: "sc-1h64qh5-4"
})(["  height:25px;color:#D30000;"]);

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
    props.callbackValueState(value);
    validate(inputName, value);
  }

  function validate(inputName, value) {
    const validationError = inputError;
    let isValidValue = props.inputValid;

    switch (inputName) {
      case 'phone':
        if (value.length < props.inputValue.length) {
          props.callbackValueState(value);
          props.callbackValidState(false);
          validationError.error = 'Поле должно быть заполнено';
        } else {
          let val = [...value];

          if (value.length === 7) {
            val.splice(6, 0, ')', '-');
            props.callbackValueState(val.join(''));
            console.log(val.join(''), value);
          }

          if (value.length === 12) {
            val.splice(11, 0, '-');
            props.callbackValueState(val.join(''));
            console.log(val);
          }

          if (value.length === 15) {
            val.splice(14, 0, '-');
            props.callbackValueState(val.join(''));
          }

          if (value.length >= 17) {
            const blockedValue = value.slice(0, 17);
            props.callbackValueState(blockedValue);
          }
        }

        if (phoneRegexp.test(value)) {
          isValidValue = true;
          validationError.error = '';
        } else if (value.match(letterRegexp)) {
          isValidValue = false;
          validationError.error = 'Поле содержит недопустимые символы';
        } else {
          isValidValue = false;
          validationError.error = 'Поле должно быть заполено';
        }

        break;

      case 'payment':
        if (value === '') {
          props.callbackValueState(value);
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

    setInputError(validationError);
    props.callbackValidState(isValidValue);
  }

  function passFirstValue() {
    var _props$inputValue;

    if (((_props$inputValue = props.inputValue) === null || _props$inputValue === void 0 ? void 0 : _props$inputValue.length) === 0 && props.name === 'phone') {
      props.callbackValueState('+7(');
    }
  }

  return __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["InputBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: props.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, props.labelContent, ":"), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    valid: props.inputValid,
    id: props.id,
    name: props.name,
    type: props.type,
    value: props.inputValue,
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
      lineNumber: 108,
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
/*! exports provided: InputBlock, Label, Input, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

;
const InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputFormStyled__InputBlock",
  componentId: "sc-1dzklt4-0"
})(["display:flex;flex-direction:column;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "InputFormStyled__Label",
  componentId: "sc-1dzklt4-1"
})(["font-size:18px;font-weight:500;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "InputFormStyled__Input",
  componentId: "sc-1dzklt4-2"
})(["width:200px;padding:10px 25px;margin-top:10px;font-size:18px;border:none;outline:none;border-radius:5px;transition:0.5s;color:", ";box-shadow:", ""], props => props.valid ? "#000000" : "#D30000", props => props.valid ? "inset 0 0 5px rgba(0,211,0,0.5)" : "inset 0 0 5px rgba(211,0,0,0.5)");
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputFormStyled__ErrorMessage",
  componentId: "sc-1dzklt4-3"
})(["height:40px;color:#D30000;margin-top:10px;@media screen and (max-width:991px){width:760px;}@media screen and (max-width:767px){width:470px;}@media screen and (max-width:479px){width:310px;}"]);

/***/ }),

/***/ "./src/components/popupComponent/Popup.tsx":
/*!*************************************************!*\
  !*** ./src/components/popupComponent/Popup.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopupStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupStyled */ "./src/components/popupComponent/PopupStyled.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\popupComponent\\Popup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Popup = props => {
  return __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PopupContainer"], {
    visible: props.popupFlag,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["OperationResult"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["Preloader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx(_PopupStyled__WEBPACK_IMPORTED_MODULE_0__["PreloaderText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, props.message)));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./src/components/popupComponent/PopupStyled.ts":
/*!******************************************************!*\
  !*** ./src/components/popupComponent/PopupStyled.ts ***!
  \******************************************************/
/*! exports provided: OperationResult, PopupContainer, Preloader, PreloaderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResult", function() { return OperationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupContainer", function() { return PopupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return Preloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderText", function() { return PreloaderText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const animation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:scale(1,1);opacity:1;}50%{transform:scale(0,0);opacity:0}100%{transform:scale(1,1);opacity:1;}"]);
const OperationResult = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PopupStyled__OperationResult",
  componentId: "sc-1x2p9k2-0"
})(["width:300px;height:200px;background-color:white;border-radius:5px;display:flex;flex-direction:column;justify-content:space-around;align-items:center;transition:all 1s cubic-bezier(.48,0,0,1.01));"]);
const PopupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PopupStyled__PopupContainer",
  componentId: "sc-1x2p9k2-1"
})(["position:absolute;top:0;left:0;width:100%;height:100vh;background-color:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;opacity:", ";visibility:", ";transition:all .8s cubic-bezier(.25,.8,.25,1);"], props => props.visible ? "1" : "0", props => props.visible ? "visible" : "hidden");
const Preloader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "PopupStyled__Preloader",
  componentId: "sc-1x2p9k2-2"
})(["display:block;width:80px;height:80px;border-radius:50%;background-color:#000000;animation:", " 1s linear infinite;"], animation);
const PreloaderText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PopupStyled__PreloaderText",
  componentId: "sc-1x2p9k2-3"
})(["font-size:18px;font-weight:500;"]);

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
/* harmony import */ var _components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/popupComponent/Popup */ "./src/components/popupComponent/Popup.tsx");
/* harmony import */ var _public_CONSTANTS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/CONSTANTS */ "./public/CONSTANTS.js");
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
  const {
    0: popupFlag,
    1: setPopupFlag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  console.log(phone);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validPhone && validPayment) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  });

  async function sendData(e) {
    e.preventDefault();
    const phoneArr = phone.match(/\d/g);
    const validPhone = phoneArr === null || phoneArr === void 0 ? void 0 : phoneArr.join('');
    const reqBody = {
      phoneNumber: validPhone,
      payment: payment,
      operatorName: operatorData === null || operatorData === void 0 ? void 0 : operatorData.data.operatorName
    };
    setPopupFlag(true);
    setResponseData({
      result: false,
      message: 'Обработка платежа...'
    });
    const req = await fetch(`${_public_CONSTANTS__WEBPACK_IMPORTED_MODULE_5__["PAGE_URL"]}/api/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    });
    const res = await req.json();
    setResponseData(res);
    setTimeout(() => {
      setPopupFlag(false);
      redirect(res.result);
    }, 2000);
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
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_2__["PaymentForm"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_2__["FormHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      labelContent: "Номер телефона",
      callbackValueState: setPhone,
      callbackValidState: setIsValidPhone,
      inputValid: validPhone,
      inputValue: phone,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "payment",
      name: "payment",
      type: "text",
      placeholder: "Введите сумму",
      labelContent: "Сумма платежа",
      callbackValueState: setPayment,
      callbackValidState: setIsValidPayment,
      inputValid: validPayment,
      inputValue: payment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_2__["SubmitButton"], {
      disabled: !validForm,
      onClick: e => {
        sendData(e);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      popupFlag: popupFlag,
      message: responseData.message,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 16
      }
    }, operatorData === null || operatorData === void 0 ? void 0 : operatorData.errMessage);
  }
};

PaymentPage.getInitialProps = async ctx => {
  const res = await fetch(`${_public_CONSTANTS__WEBPACK_IMPORTED_MODULE_5__["PAGE_URL"]}/api/operators/${ctx.query.payOperatorID}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0NPTlNUQU5UUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dEZvcm1Db21wb25lbnQvSW5wdXRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dEZvcm1Db21wb25lbnQvSW5wdXRGb3JtU3R5bGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvcHVwQ29tcG9uZW50L1BvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3B1cENvbXBvbmVudC9Qb3B1cFN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiUEFHRV9VUkwiLCJQYXltZW50Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiUGF5bWVudEZvcm0iLCJmb3JtIiwiRm9ybUhlYWRlciIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsIkVycm9yTWVzc2FnZSIsIklucHV0Rm9ybSIsInByb3BzIiwiaW5wdXRFcnJvciIsInNldElucHV0RXJyb3IiLCJ1c2VTdGF0ZSIsImVycm9yIiwicGhvbmVSZWdleHAiLCJwYXltZW50UmVnZXhwIiwibGV0dGVyUmVnZXhwIiwiaGFuZGxlVXNlcklucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNhbGxiYWNrVmFsdWVTdGF0ZSIsInZhbGlkYXRlIiwidmFsaWRhdGlvbkVycm9yIiwiaXNWYWxpZFZhbHVlIiwiaW5wdXRWYWxpZCIsImxlbmd0aCIsImlucHV0VmFsdWUiLCJjYWxsYmFja1ZhbGlkU3RhdGUiLCJ2YWwiLCJzcGxpY2UiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImJsb2NrZWRWYWx1ZSIsInNsaWNlIiwidGVzdCIsIm1hdGNoIiwicGFyc2VJbnQiLCJwYXNzRmlyc3RWYWx1ZSIsImxhYmVsQ29udGVudCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiSW5wdXRCbG9jayIsIkxhYmVsIiwibGFiZWwiLCJJbnB1dCIsImlucHV0IiwidmFsaWQiLCJQb3B1cCIsInBvcHVwRmxhZyIsIm1lc3NhZ2UiLCJhbmltYXRpb24iLCJrZXlmcmFtZXMiLCJPcGVyYXRpb25SZXN1bHQiLCJQb3B1cENvbnRhaW5lciIsInZpc2libGUiLCJQcmVsb2FkZXIiLCJzcGFuIiwiUHJlbG9hZGVyVGV4dCIsIlBheW1lbnRQYWdlIiwib3BlcmF0b3JEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwicGhvbmUiLCJzZXRQaG9uZSIsInZhbGlkUGhvbmUiLCJzZXRJc1ZhbGlkUGhvbmUiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsInZhbGlkUGF5bWVudCIsInNldElzVmFsaWRQYXltZW50IiwidmFsaWRGb3JtIiwic2V0SXNWYWxpZEZvcm0iLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJyZXN1bHQiLCJzZXRQb3B1cEZsYWciLCJ1c2VFZmZlY3QiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwicGhvbmVBcnIiLCJyZXFCb2R5IiwicGhvbmVOdW1iZXIiLCJvcGVyYXRvck5hbWUiLCJkYXRhIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicmVwbGFjZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInBheU9w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TVEsR0FBRyxDQUFDQyxJQUFKLEVBQTlDO0FBQ0EsU0FBTztBQUFFakMsZ0JBQVksRUFBRXdCO0FBQWhCLEdBQVA7QUFDSCxDQUpEOztBQU1lekIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNsSkEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0udHN4XCIpO1xuIiwiZXhwb3J0IGNvbnN0IFBBR0VfVVJMID0gcHJvY2Vzcy5lbnYuUEFHRV9VUkwiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDk4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIHdpZHRoOiA3NjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgICAgIHdpZHRoOiA0NzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgIH1cclxuICAgIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICB3aWR0aDogNzYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgICAgIHdpZHRoOiA0NzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gICAgXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgIFxyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICNEMzAwMDA7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0lucHV0QmxvY2ssIElucHV0LCBFcnJvck1lc3NhZ2UsIExhYmVsfSBmcm9tIFwiLi9JbnB1dEZvcm1TdHlsZWRcIjtcclxuXHJcbmludGVyZmFjZSBJbnB1dEZvcm1Qcm9wcyB7XHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcclxuICAgIGxhYmVsQ29udGVudDogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlOnN0cmluZyk6IHZvaWQsXHJcbiAgICBjYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZDogYm9vbGVhbik6IHZvaWQsXHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcsXHJcbiAgICBpbnB1dFZhbGlkOiBib29sZWFuLFxyXG59XHJcblxyXG5jb25zdCBJbnB1dEZvcm0gPSAocHJvcHM6SW5wdXRGb3JtUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVSZWdleHAgPSAvXFwrN1xccz9bXFwoXXswLDF9OVswLTldezJ9W1xcKV1bLV17MCwxfVxccz9cXGR7M31bLV17MCwxfVxcZHsyfVstXXswLDF9XFxkezJ9LztcclxuICAgIGNvbnN0IHBheW1lbnRSZWdleHAgPSAvXlxcZCskLztcclxuICAgIGNvbnN0IGxldHRlclJlZ2V4cCA9IC9b0LAt0Y/QkC3Qr9GR0IFhLXpBLVpdKyQvO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlIDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICB2YWxpZGF0ZShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWUgOiBzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgPSBpbnB1dEVycm9yO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkVmFsdWUgPSBwcm9wcy5pbnB1dFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IHByb3BzLmlucHV0VmFsdWUubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsLmpvaW4oJycpLCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKDExLCAwLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUoYmxvY2tlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwaG9uZVJlZ2V4cC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZS5tYXRjaChsZXR0ZXJSZWdleHApKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXltZW50UmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPj0gMSAmJiB2YWwgPD0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElucHV0RXJyb3IodmFsaWRhdGlvbkVycm9yKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIDogdm9pZCB7XHJcbiAgICAgICAgaWYocHJvcHMuaW5wdXRWYWx1ZT8ubGVuZ3RoID09PSAwICYmIHByb3BzLm5hbWUgPT09ICdwaG9uZScpIHtcclxuICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKCcrNygnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsQ29udGVudH06PC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWxpZD17cHJvcHMuaW5wdXRWYWxpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtoYW5kbGVVc2VySW5wdXQoZSl9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZT57aW5wdXRFcnJvci5lcnJvcn08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Rm9ybSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW50ZXJmYWNlIFRpdGxlUHJvcHMge1xyXG4gICAgcmVhZG9ubHkgdmFsaWQgIDogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dEJsb2NrID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0PFRpdGxlUHJvcHM+YFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPyBcIiMwMDAwMDBcIiA6IFwiI0QzMDAwMFwifTtcclxuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPyBcImluc2V0IDAgMCA1cHggcmdiYSgwLDIxMSwwLDAuNSlcIjogXCJpbnNldCAwIDAgNXB4IHJnYmEoMjExLDAsMCwwLjUpXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjRDMwMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICB3aWR0aDogNzYwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAgICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5gO1xyXG4iLCJpbXBvcnQge09wZXJhdGlvblJlc3VsdCwgUG9wdXBDb250YWluZXIsIFByZWxvYWRlciwgUHJlbG9hZGVyVGV4dH0gZnJvbSBcIi4vUG9wdXBTdHlsZWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFBvcHVwUHJvcHMge1xyXG4gICAgcG9wdXBGbGFnOiBib29sZWFuLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBQb3B1cCA9IChwcm9wczpQb3B1cFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFBvcHVwQ29udGFpbmVyIHZpc2libGU9e3Byb3BzLnBvcHVwRmxhZ30+XHJcbiAgICAgICAgICAgIDxPcGVyYXRpb25SZXN1bHQ+XHJcbiAgICAgICAgICAgICAgICA8UHJlbG9hZGVyLz5cclxuICAgICAgICAgICAgICAgIDxQcmVsb2FkZXJUZXh0Pntwcm9wcy5tZXNzYWdlfTwvUHJlbG9hZGVyVGV4dD5cclxuICAgICAgICAgICAgPC9PcGVyYXRpb25SZXN1bHQ+XHJcbiAgICAgICAgPC9Qb3B1cENvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXAiLCJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuLFxyXG59XHJcblxyXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVyYXRpb25SZXN1bHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKC40OCwwLDAsMS4wMSkpO1xyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3B1cENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAke3Byb3BzPT4gcHJvcHMudmlzaWJsZSA/IFwiMVwiIDogXCIwXCJ9O1xyXG4gICAgdmlzaWJpbGl0eTogJHtwcm9wcz0+IHByb3BzLnZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVsb2FkZXIgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gMXMgbGluZWFyIGluZmluaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZWxvYWRlclRleHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV4dFBhZ2VDb250ZXh0fSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtcclxuICAgIEZvcm1IZWFkZXIsXHJcbiAgICBQYXltZW50Q29udGFpbmVyLFxyXG4gICAgUGF5bWVudEZvcm0sXHJcbiAgICBTdWJtaXRCdXR0b24sXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBcIjtcclxuaW1wb3J0IHsgUEFHRV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL0NPTlNUQU5UU1wiXHJcblxyXG5pbnRlcmZhY2UgUGF5bWVudFByb3BzIHtcclxuICAgIG9wZXJhdG9yRGF0YTogT3BlcmF0b3JEYXRhIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTZW5kaW5nRGF0YSB7XHJcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgcGF5bWVudDogc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcclxufVxyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe29wZXJhdG9yRGF0YX06IFBheW1lbnRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0SXNWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldElzVmFsaWRQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZEZvcm0sIHNldElzVmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZURhdGEsIHNldFJlc3BvbnNlRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOicnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3BvcHVwRmxhZywgc2V0UG9wdXBGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwaG9uZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYodmFsaWRQaG9uZSAmJiB2YWxpZFBheW1lbnQpIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKGU6IFJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBob25lQXJyIDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBwaG9uZS5tYXRjaCgvXFxkL2cpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUGhvbmUgPSBwaG9uZUFycj8uam9pbignJyk7XHJcbiAgICAgICAgY29uc3QgcmVxQm9keSA6IFNlbmRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdmFsaWRQaG9uZSxcclxuICAgICAgICAgICAgcGF5bWVudDogcGF5bWVudCxcclxuICAgICAgICAgICAgb3BlcmF0b3JOYW1lOiBvcGVyYXRvckRhdGE/LmRhdGEub3BlcmF0b3JOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFBvcHVwRmxhZyh0cnVlKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEoe1xyXG4gICAgICAgICAgICByZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn0J7QsdGA0LDQsdC+0YLQutCwINC/0LvQsNGC0LXQttCwLi4uJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGAke1BBR0VfVVJMfS9hcGkvcGF5YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHJlcyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvcHVwRmxhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlcy5yZXN1bHQpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHJlc3VsdCA6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBob25lKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0UGF5bWVudCgnJyk7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRQYXltZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9wZXJhdG9yRGF0YSAmJiBvcGVyYXRvckRhdGEuZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyPtCe0L/Qu9Cw0YLQsCB7b3BlcmF0b3JEYXRhLmRhdGEub3BlcmF0b3JOYW1lfTwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWxpZD17dmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29udGVudD17XCLQodGD0LzQvNCwINC/0LvQsNGC0LXQttCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWxpZFN0YXRlPXtzZXRJc1ZhbGlkUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWxpZD17dmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtwYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiBkaXNhYmxlZD17IXZhbGlkRm9ybX0gb25DbGljaz17KGUpPT4ge3NlbmREYXRhKGUpfX0+0J7Qv9C70LDRgtC40YLRjDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYXltZW50Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwRmxhZz17cG9wdXBGbGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3Jlc3BvbnNlRGF0YS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57b3BlcmF0b3JEYXRhPy5lcnJNZXNzYWdlfTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcGVyYXRvckRhdGEge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgb3BlcmF0b3JMaW5rOiBzdHJpbmcsXHJcbiAgICAgICAgaW1nVXJsPzogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZXJyTWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb2s6IGJvb2xlYW5cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtQQUdFX1VSTH0vYXBpL29wZXJhdG9ycy8ke2N0eC5xdWVyeS5wYXlPcGVyYXRvcklEfWApO1xyXG4gICAgY29uc3QgZGF0YSA6IE9wZXJhdG9yRGF0YSB8IHVuZGVmaW5lZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBvcGVyYXRvckRhdGE6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=