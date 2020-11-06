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

/***/ "./src/SETTINGS.js":
/*!*************************!*\
  !*** ./src/SETTINGS.js ***!
  \*************************/
/*! exports provided: SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
const SETTINGS = {
  URL: '192.168.0.4:3000'
};

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
/* harmony import */ var _SETTINGS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SETTINGS */ "./src/SETTINGS.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.ts");
/* harmony import */ var _components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/inputFormComponent/InputForm */ "./src/components/inputFormComponent/InputForm.tsx");
/* harmony import */ var _components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/popupComponent/Popup */ "./src/components/popupComponent/Popup.tsx");
var _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const PaymentPage = ({
  operatorData
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: validPhone,
    1: setIsValidPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: payment,
    1: setPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: validPayment,
    1: setIsValidPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: validForm,
    1: setIsValidForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: responseData,
    1: setResponseData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    result: false,
    message: ''
  });
  const {
    0: popupFlag,
    1: setPopupFlag
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  console.log(phone);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
    const req = await fetch(`http://${_SETTINGS__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].URL}/api/pay`, {
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
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["PaymentContainer"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["PaymentForm"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["FormHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", operatorData.data.operatorName), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }), __jsx(_components_inputFormComponent_InputForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["SubmitButton"], {
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
    }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C")), __jsx(_components_popupComponent_Popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  const res = await fetch(`http://${_SETTINGS__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].URL}/api/operators/${ctx.query.payOperatorID}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NFVFRJTkdTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0Rm9ybUNvbXBvbmVudC9JbnB1dEZvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0Rm9ybUNvbXBvbmVudC9JbnB1dEZvcm1TdHlsZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvcHVwQ29tcG9uZW50L1BvcHVwU3R5bGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTRVRUSU5HUyIsIlVSTCIsIlBheW1lbnRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQYXltZW50Rm9ybSIsImZvcm0iLCJGb3JtSGVhZGVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiRXJyb3JNZXNzYWdlIiwiSW5wdXRGb3JtIiwicHJvcHMiLCJpbnB1dEVycm9yIiwic2V0SW5wdXRFcnJvciIsInVzZVN0YXRlIiwiZXJyb3IiLCJwaG9uZVJlZ2V4cCIsInBheW1lbnRSZWdleHAiLCJsZXR0ZXJSZWdleHAiLCJoYW5kbGVVc2VySW5wdXQiLCJlIiwiaW5wdXROYW1lIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2FsbGJhY2tWYWx1ZVN0YXRlIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1ZhbGlkVmFsdWUiLCJpbnB1dFZhbGlkIiwibGVuZ3RoIiwiaW5wdXRWYWx1ZSIsImNhbGxiYWNrVmFsaWRTdGF0ZSIsInZhbCIsInNwbGljZSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiYmxvY2tlZFZhbHVlIiwic2xpY2UiLCJ0ZXN0IiwibWF0Y2giLCJwYXJzZUludCIsInBhc3NGaXJzdFZhbHVlIiwibGFiZWxDb250ZW50IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJJbnB1dEJsb2NrIiwiTGFiZWwiLCJsYWJlbCIsIklucHV0IiwiaW5wdXQiLCJ2YWxpZCIsIlBvcHVwIiwicG9wdXBGbGFnIiwibWVzc2FnZSIsImFuaW1hdGlvbiIsImtleWZyYW1lcyIsIk9wZXJhdGlvblJlc3VsdCIsIlBvcHVwQ29udGFpbmVyIiwidmlzaWJsZSIsIlByZWxvYWRlciIsInNwYW4iLCJQcmVsb2FkZXJUZXh0IiwiUGF5bWVudFBhZ2UiLCJvcGVyYXRvckRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsInJlc3VsdCIsInNldFBvcHVwRmxhZyIsInVzZUVmZmVjdCIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJwaG9uZUFyciIsInJlcUJvZHkiLCJwaG9uZU51bWJlciIsIm9wZXJhdG9yTmFtZSIsImRhdGEiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJyZXBsYWNlIiwiZXJyTWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5IiwicGF5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S0FBSixDQUFVQyxhQUFjLEVBQWpFLENBQXZCO0FBQ0EsUUFBTWpCLElBQStCLEdBQUcsTUFBTVEsR0FBRyxDQUFDQyxJQUFKLEVBQTlDO0FBQ0EsU0FBTztBQUFFakMsZ0JBQVksRUFBRXdCO0FBQWhCLEdBQVA7QUFDSCxDQUpEOztBQU1lekIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNsSkEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0udHN4XCIpO1xuIiwiZXhwb3J0IGNvbnN0IFNFVFRJTkdTID0ge1xyXG4gICAgVVJMOiAnMTkyLjE2OC4wLjQ6MzAwMCdcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgUGF5bWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogOTgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDc2MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAgICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGF5bWVudEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICAgIHdpZHRoOiA3NjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAgICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1IZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbiAgICBcclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmAgXHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI0QzMDAwMDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXRCbG9jaywgSW5wdXQsIEVycm9yTWVzc2FnZSwgTGFiZWx9IGZyb20gXCIuL0lucHV0Rm9ybVN0eWxlZFwiO1xyXG5cclxuaW50ZXJmYWNlIElucHV0Rm9ybVByb3BzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxyXG4gICAgbGFiZWxDb250ZW50OiBzdHJpbmcsXHJcbiAgICBjYWxsYmFja1ZhbHVlU3RhdGUodmFsdWU6c3RyaW5nKTogdm9pZCxcclxuICAgIGNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkOiBib29sZWFuKTogdm9pZCxcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIGlucHV0VmFsaWQ6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0RXJyb3IsIHNldElucHV0RXJyb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3QvicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9eXFxkKyQvO1xyXG4gICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC87XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUodmFsdWUpO1xyXG4gICAgICAgIHZhbGlkYXRlKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGlucHV0TmFtZTogc3RyaW5nLCB2YWx1ZSA6IHN0cmluZykgOiB2b2lke1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvciA9IGlucHV0RXJyb3I7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRWYWx1ZSA9IHByb3BzLmlucHV0VmFsaWQ7XHJcbiAgICAgICAgc3dpdGNoIChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoIDwgcHJvcHMuaW5wdXRWYWx1ZS5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdC+JztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gWy4uLnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSg2LCAwLCAnKScsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwuam9pbignJyksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTEsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+PSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja2VkVmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAxNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrVmFsdWVTdGF0ZShibG9ja2VkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBob25lUmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlLm1hdGNoKGxldHRlclJlZ2V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA+PSAxICYmIHZhbCA8PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQsiDQt9Cw0LTQsNC90L3Ri9GFINCz0YDQsNC90LjRhtCw0YUgKNC+0YIgMdGAINC00L4gMTAwMNGAKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70YsnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5wdXRFcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xyXG4gICAgICAgIHByb3BzLmNhbGxiYWNrVmFsaWRTdGF0ZShpc1ZhbGlkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NGaXJzdFZhbHVlKCkgOiB2b2lkIHtcclxuICAgICAgICBpZihwcm9wcy5pbnB1dFZhbHVlPy5sZW5ndGggPT09IDAgJiYgcHJvcHMubmFtZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbHVlU3RhdGUoJys3KCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPElucHV0QmxvY2s+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWxDb250ZW50fTo8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbGlkPXtwcm9wcy5pbnB1dFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge2hhbmRsZVVzZXJJbnB1dChlKX19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4ge3Bhc3NGaXJzdFZhbHVlKCl9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntpbnB1dEVycm9yLmVycm9yfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbnRlcmZhY2UgVGl0bGVQcm9wcyB7XHJcbiAgICByZWFkb25seSB2YWxpZCAgOiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0QmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQ8VGl0bGVQcm9wcz5gXHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy52YWxpZCA/IFwiIzAwMDAwMFwiIDogXCIjRDMwMDAwXCJ9O1xyXG4gICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy52YWxpZCA/IFwiaW5zZXQgMCAwIDVweCByZ2JhKDAsMjExLDAsMC41KVwiOiBcImluc2V0IDAgMCA1cHggcmdiYSgyMTEsMCwwLDAuNSlcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICNEMzAwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIHdpZHRoOiA3NjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAgICB3aWR0aDogNDcwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KXtcclxuICAgICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcbmA7XHJcbiIsImltcG9ydCB7T3BlcmF0aW9uUmVzdWx0LCBQb3B1cENvbnRhaW5lciwgUHJlbG9hZGVyLCBQcmVsb2FkZXJUZXh0fSBmcm9tIFwiLi9Qb3B1cFN0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUG9wdXBQcm9wcyB7XHJcbiAgICBwb3B1cEZsYWc6IGJvb2xlYW4sXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IFBvcHVwID0gKHByb3BzOlBvcHVwUHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UG9wdXBDb250YWluZXIgdmlzaWJsZT17cHJvcHMucG9wdXBGbGFnfT5cclxuICAgICAgICAgICAgPE9wZXJhdGlvblJlc3VsdD5cclxuICAgICAgICAgICAgICAgIDxQcmVsb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgPFByZWxvYWRlclRleHQ+e3Byb3BzLm1lc3NhZ2V9PC9QcmVsb2FkZXJUZXh0PlxyXG4gICAgICAgICAgICA8L09wZXJhdGlvblJlc3VsdD5cclxuICAgICAgICA8L1BvcHVwQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cCIsImltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlYWRvbmx5IHZpc2libGU6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmNvbnN0IGFuaW1hdGlvbiA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDUwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE9wZXJhdGlvblJlc3VsdCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoLjQ4LDAsMCwxLjAxKSk7XHJcbiAgICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBvcHVwQ29udGFpbmVyID0gc3R5bGVkLmRpdjxQcm9wcz5gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6ICR7cHJvcHM9PiBwcm9wcy52aXNpYmxlID8gXCIxXCIgOiBcIjBcIn07XHJcbiAgICB2aXNpYmlsaXR5OiAke3Byb3BzPT4gcHJvcHMudmlzaWJsZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjhzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZWxvYWRlciA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG4iLCJpbXBvcnQge1NFVFRJTkdTfSBmcm9tICcuLi8uLi9TRVRUSU5HUyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge05leHRQYWdlQ29udGV4dH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7XHJcbiAgICBGb3JtSGVhZGVyLFxyXG4gICAgUGF5bWVudENvbnRhaW5lcixcclxuICAgIFBheW1lbnRGb3JtLFxyXG4gICAgU3VibWl0QnV0dG9uLFxyXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0Rm9ybUNvbXBvbmVudC9JbnB1dEZvcm1cIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BvcHVwQ29tcG9uZW50L1BvcHVwXCI7XHJcblxyXG5pbnRlcmZhY2UgUGF5bWVudFByb3BzIHtcclxuICAgIG9wZXJhdG9yRGF0YTogT3BlcmF0b3JEYXRhIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTZW5kaW5nRGF0YSB7XHJcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgcGF5bWVudDogc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcclxufVxyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe29wZXJhdG9yRGF0YX06IFBheW1lbnRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0SXNWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldElzVmFsaWRQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZEZvcm0sIHNldElzVmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZURhdGEsIHNldFJlc3BvbnNlRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOicnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3BvcHVwRmxhZywgc2V0UG9wdXBGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwaG9uZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYodmFsaWRQaG9uZSAmJiB2YWxpZFBheW1lbnQpIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKGU6IFJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBob25lQXJyIDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBwaG9uZS5tYXRjaCgvXFxkL2cpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUGhvbmUgPSBwaG9uZUFycj8uam9pbignJyk7XHJcbiAgICAgICAgY29uc3QgcmVxQm9keSA6IFNlbmRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdmFsaWRQaG9uZSxcclxuICAgICAgICAgICAgcGF5bWVudDogcGF5bWVudCxcclxuICAgICAgICAgICAgb3BlcmF0b3JOYW1lOiBvcGVyYXRvckRhdGE/LmRhdGEub3BlcmF0b3JOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFBvcHVwRmxhZyh0cnVlKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEoe1xyXG4gICAgICAgICAgICByZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn0J7QsdGA0LDQsdC+0YLQutCwINC/0LvQsNGC0LXQttCwLi4uJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwOi8vJHtTRVRUSU5HUy5VUkx9L2FwaS9wYXlgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBzZXRSZXNwb25zZURhdGEocmVzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9wdXBGbGFnKGZhbHNlKTtcclxuICAgICAgICAgICAgcmVkaXJlY3QocmVzLnJlc3VsdCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QocmVzdWx0IDogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUoJycpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkUGhvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50KCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBheW1lbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3BlcmF0b3JEYXRhICYmIG9wZXJhdG9yRGF0YS5kYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXI+0J7Qv9C70LDRgtCwIHtvcGVyYXRvckRhdGEuZGF0YS5vcGVyYXRvck5hbWV9PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIrNyg5OTkpLTk5OS05OS05OVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ9e1wi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsaWRTdGF0ZT17c2V0SXNWYWxpZFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbGlkPXt2YWxpZFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wicGF5bWVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCS0LLQtdC00LjRgtC1INGB0YPQvNC80YNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCh0YPQvNC80LAg0L/Qu9Cw0YLQtdC20LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWx1ZVN0YXRlPXtzZXRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbGlkPXt2YWxpZFBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e3BheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXshdmFsaWRGb3JtfSBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT7QntC/0LvQsNGC0LjRgtGMPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1BheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBGbGFnPXtwb3B1cEZsYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17cmVzcG9uc2VEYXRhLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntvcGVyYXRvckRhdGE/LmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9wZXJhdG9yRGF0YSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBvcGVyYXRvckxpbms6IHN0cmluZyxcclxuICAgICAgICBpbWdVcmw/OiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBlcnJNZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBvazogYm9vbGVhblxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vJHtTRVRUSU5HUy5VUkx9L2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgb3BlcmF0b3JEYXRhOiBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFBhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9