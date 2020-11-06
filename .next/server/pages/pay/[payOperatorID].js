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

  function clear() {
    setInputValue('');
    setInputValid(false);
    setInputError({
      error: 'Поле должно быть заполнено'
    });
  }

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
          validationError.error = 'Поле должно быть заполнено';
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
          validationError.error = 'Поле содержит недопустимые символы';
        } else {
          isValidValue = false;
          validationError.error = 'Поле должно быть заполено';
        }

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
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: props.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, props.labelContent, ":"), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    valid: inputValid,
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
      lineNumber: 115,
      columnNumber: 13
    }
  }), __jsx(_InputFormStyled__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
  const {
    0: dropInputs,
    1: setDropInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validPhone && validPayment) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  });

  function useCallback(callback) {
    callback();
  }

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
        lineNumber: 95,
        columnNumber: 13
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_2__["PaymentForm"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_2__["FormHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
      clear: dropInputs,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3B1cENvbXBvbmVudC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBTdHlsZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlBheW1lbnRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQYXltZW50Rm9ybSIsImZvcm0iLCJGb3JtSGVhZGVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiRXJyb3JNZXNzYWdlIiwiSW5wdXRGb3JtIiwicHJvcHMiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInVzZVN0YXRlIiwiaW5wdXRWYWxpZCIsInNldElucHV0VmFsaWQiLCJpbnB1dEVycm9yIiwic2V0SW5wdXRFcnJvciIsImVycm9yIiwiY2xlYXIiLCJwaG9uZVJlZ2V4cCIsInBheW1lbnRSZWdleHAiLCJsZXR0ZXJSZWdleHAiLCJoYW5kbGVVc2VySW5wdXQiLCJlIiwiaW5wdXROYW1lIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidmFsaWRhdGUiLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1ZhbGlkVmFsdWUiLCJsZW5ndGgiLCJjYWxsYmFja1ZhbGlkU3RhdGUiLCJ2YWwiLCJzcGxpY2UiLCJqb2luIiwiYmxvY2tlZFZhbHVlIiwic2xpY2UiLCJ0ZXN0IiwibWF0Y2giLCJwYXJzZUludCIsImNhbGxiYWNrVmFsdWVTdGF0ZSIsInBhc3NGaXJzdFZhbHVlIiwibGFiZWxDb250ZW50IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJJbnB1dEJsb2NrIiwiTGFiZWwiLCJsYWJlbCIsIklucHV0IiwiaW5wdXQiLCJ2YWxpZCIsIlBvcHVwIiwicG9wdXBGbGFnIiwibWVzc2FnZSIsImFuaW1hdGlvbiIsImtleWZyYW1lcyIsIk9wZXJhdGlvblJlc3VsdCIsIlBvcHVwQ29udGFpbmVyIiwidmlzaWJsZSIsIlByZWxvYWRlciIsInNwYW4iLCJQcmVsb2FkZXJUZXh0IiwiUGF5bWVudFBhZ2UiLCJvcGVyYXRvckRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaG9uZSIsInNldFBob25lIiwidmFsaWRQaG9uZSIsInNldElzVmFsaWRQaG9uZSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwidmFsaWRQYXltZW50Iiwic2V0SXNWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRJc1ZhbGlkRm9ybSIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsInJlc3VsdCIsInNldFBvcHVwRmxhZyIsImRyb3BJbnB1dHMiLCJzZXREcm9wSW5wdXRzIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJjYWxsYmFjayIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJwaG9uZUFyciIsInJlcUJvZHkiLCJwaG9uZU51bWJlciIsIm9wZXJhdG9yTmFtZSIsImRhdGEiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJyZXBsYWNlIiwiZXJyTWVzc2FnZSIsImdldElu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QVVDLGFBQWMsRUFBaEUsQ0FBdkI7QUFDQSxRQUFNakIsSUFBK0IsR0FBRyxNQUFNUSxHQUFHLENBQUNDLElBQUosRUFBOUM7QUFDQSxTQUFPO0FBQUVyQyxnQkFBWSxFQUFFNEI7QUFBaEIsR0FBUDtBQUNILENBSkQ7O0FBTWU3QiwwRUFBZixFOzs7Ozs7Ozs7OztBQ2xKQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS50c3hcIik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDk4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIHdpZHRoOiA3NjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgICAgIHdpZHRoOiA0NzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgIH1cclxuICAgIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICB3aWR0aDogNzYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgICAgIHdpZHRoOiA0NzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gICAgXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgIFxyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICNEMzAwMDA7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0lucHV0QmxvY2ssIElucHV0LCBFcnJvck1lc3NhZ2UsIExhYmVsfSBmcm9tIFwiLi9JbnB1dEZvcm1TdHlsZWRcIjtcclxuXHJcbmludGVyZmFjZSBJbnB1dEZvcm1Qcm9wcyB7XHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcclxuICAgIGxhYmVsQ29udGVudDogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlOnN0cmluZyk6IHZvaWQsXHJcbiAgICBjYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZDogYm9vbGVhbik6IHZvaWQsXHJcbn1cclxuXHJcbmNvbnN0IElucHV0Rm9ybSA9IChwcm9wczpJbnB1dEZvcm1Qcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbGlkLCBzZXRJbnB1dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogJ9Cf0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0L/QvtC70L3QtdC90L4nLFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoJycpO1xyXG4gICAgICAgIHNldElucHV0VmFsaWQoZmFsc2UpO1xyXG4gICAgICAgIHNldElucHV0RXJyb3Ioe2Vycm9yOiAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3Qvid9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwaG9uZVJlZ2V4cCA9IC9cXCs3XFxzP1tcXChdezAsMX05WzAtOV17Mn1bXFwpXVstXXswLDF9XFxzP1xcZHszfVstXXswLDF9XFxkezJ9Wy1dezAsMX1cXGR7Mn0vO1xyXG4gICAgY29uc3QgcGF5bWVudFJlZ2V4cCA9IC9eXFxkKyQvO1xyXG4gICAgY29uc3QgbGV0dGVyUmVnZXhwID0gL1vQsC3Rj9CQLdCv0ZHQgWEtekEtWl0rJC87XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB2YWxpZGF0ZShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWUgOiBzdHJpbmcpIDogdm9pZHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3IgPSBpbnB1dEVycm9yO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkVmFsdWUgPSBpbnB1dFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IGlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWxpZFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3Qvic7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbC5qb2luKCcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxMSwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwuam9pbignJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTQsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsLmpvaW4oJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID49IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrZWRWYWx1ZSA9IHZhbHVlLnNsaWNlKDAsIDE3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShibG9ja2VkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBob25lUmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlLm1hdGNoKGxldHRlclJlZ2V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5lcnJvciA9ICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAn0J/QvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BheW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXltZW50UmVnZXhwLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPj0gMSAmJiB2YWwgPD0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IuZXJyb3IgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LIg0LfQsNC00LDQvdC90YvRhSDQs9GA0LDQvdC40YbQsNGFICjQvtGCIDHRgCDQtNC+IDEwMDDRgCknO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yLmVycm9yID0gJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INGB0LjQvNCy0L7Qu9GLJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElucHV0VmFsaWQoaXNWYWxpZFZhbHVlKTtcclxuICAgICAgICBzZXRJbnB1dEVycm9yKHZhbGlkYXRpb25FcnJvcik7XHJcbiAgICAgICAgcHJvcHMuY2FsbGJhY2tWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICAgICAgICBwcm9wcy5jYWxsYmFja1ZhbGlkU3RhdGUoaXNWYWxpZFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIDogdm9pZCB7XHJcbiAgICAgICAgaWYoaW5wdXRWYWx1ZS5sZW5ndGggPT09IDAgJiYgcHJvcHMubmFtZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcrNygnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsQ29udGVudH06PC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWxpZD17aW5wdXRWYWxpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtoYW5kbGVVc2VySW5wdXQoZSl9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7cGFzc0ZpcnN0VmFsdWUoKX19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+IHtwYXNzRmlyc3RWYWx1ZSgpfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZT57aW5wdXRFcnJvci5lcnJvcn08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Rm9ybSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW50ZXJmYWNlIFRpdGxlUHJvcHMge1xyXG4gICAgcmVhZG9ubHkgdmFsaWQgIDogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dEJsb2NrID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0PFRpdGxlUHJvcHM+YFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPyBcIiMwMDAwMDBcIiA6IFwiI0QzMDAwMFwifTtcclxuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPyBcImluc2V0IDAgMCA1cHggcmdiYSgwLDIxMSwwLDAuNSlcIjogXCJpbnNldCAwIDAgNXB4IHJnYmEoMjExLDAsMCwwLjUpXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjRDMwMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICB3aWR0aDogNzYwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAgICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XHJcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5gO1xyXG4iLCJpbXBvcnQge09wZXJhdGlvblJlc3VsdCwgUG9wdXBDb250YWluZXIsIFByZWxvYWRlciwgUHJlbG9hZGVyVGV4dH0gZnJvbSBcIi4vUG9wdXBTdHlsZWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFBvcHVwUHJvcHMge1xyXG4gICAgcG9wdXBGbGFnOiBib29sZWFuLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBQb3B1cCA9IChwcm9wczpQb3B1cFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFBvcHVwQ29udGFpbmVyIHZpc2libGU9e3Byb3BzLnBvcHVwRmxhZ30+XHJcbiAgICAgICAgICAgIDxPcGVyYXRpb25SZXN1bHQ+XHJcbiAgICAgICAgICAgICAgICA8UHJlbG9hZGVyLz5cclxuICAgICAgICAgICAgICAgIDxQcmVsb2FkZXJUZXh0Pntwcm9wcy5tZXNzYWdlfTwvUHJlbG9hZGVyVGV4dD5cclxuICAgICAgICAgICAgPC9PcGVyYXRpb25SZXN1bHQ+XHJcbiAgICAgICAgPC9Qb3B1cENvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXAiLCJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuLFxyXG59XHJcblxyXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVyYXRpb25SZXN1bHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKC40OCwwLDAsMS4wMSkpO1xyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3B1cENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAke3Byb3BzPT4gcHJvcHMudmlzaWJsZSA/IFwiMVwiIDogXCIwXCJ9O1xyXG4gICAgdmlzaWJpbGl0eTogJHtwcm9wcz0+IHByb3BzLnZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVsb2FkZXIgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gMXMgbGluZWFyIGluZmluaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZWxvYWRlclRleHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV4dFBhZ2VDb250ZXh0fSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtcclxuICAgIEZvcm1IZWFkZXIsXHJcbiAgICBQYXltZW50Q29udGFpbmVyLFxyXG4gICAgUGF5bWVudEZvcm0sXHJcbiAgICBTdWJtaXRCdXR0b24sXHJcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50UGFnZVN0eWxlZCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRGb3JtQ29tcG9uZW50L0lucHV0Rm9ybVwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQvUG9wdXBcIjtcclxuXHJcbmludGVyZmFjZSBQYXltZW50UHJvcHMge1xyXG4gICAgb3BlcmF0b3JEYXRhOiBPcGVyYXRvckRhdGEgfCB1bmRlZmluZWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbmRpbmdEYXRhIHtcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBwYXltZW50OiBzdHJpbmcsXHJcbiAgICBvcGVyYXRvck5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBQYXltZW50UGFnZSA9ICh7b3BlcmF0b3JEYXRhfTogUGF5bWVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRJc1ZhbGlkUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbGlkUGF5bWVudCwgc2V0SXNWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0SXNWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlRGF0YSwgc2V0UmVzcG9uc2VEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICByZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6JydcclxuICAgIH0pXHJcbiAgICBjb25zdCBbcG9wdXBGbGFnLCBzZXRQb3B1cEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Ryb3BJbnB1dHMsIHNldERyb3BJbnB1dHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBpZih2YWxpZFBob25lICYmIHZhbGlkUGF5bWVudCkge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkRm9ybShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjazooKT0+IHZvaWQpIHtcclxuICAgICAgICBjYWxsYmFjaygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZERhdGEoZTogUmVhY3QuRm9ybUV2ZW50KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVBcnIgOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHBob25lLm1hdGNoKC9cXGQvZyk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRQaG9uZSA9IHBob25lQXJyPy5qb2luKCcnKTtcclxuICAgICAgICBjb25zdCByZXFCb2R5IDogU2VuZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB2YWxpZFBob25lLFxyXG4gICAgICAgICAgICBwYXltZW50OiBwYXltZW50LFxyXG4gICAgICAgICAgICBvcGVyYXRvck5hbWU6IG9wZXJhdG9yRGF0YT8uZGF0YS5vcGVyYXRvck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UG9wdXBGbGFnKHRydWUpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlRGF0YSh7XHJcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfQntCx0YDQsNCx0L7RgtC60LAg0L/Qu9Cw0YLQtdC20LAuLi4nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGF5YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VEYXRhKHJlcyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvcHVwRmxhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlcy5yZXN1bHQpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KHJlc3VsdCA6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKCcnKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZFBob25lKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0UGF5bWVudCgnJyk7XHJcbiAgICAgICAgICAgIHNldElzVmFsaWRQYXltZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZEZvcm0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9wZXJhdG9yRGF0YSAmJiBvcGVyYXRvckRhdGEuZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyPtCe0L/Qu9Cw0YLQsCB7b3BlcmF0b3JEYXRhLmRhdGEub3BlcmF0b3JOYW1lfTwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBob25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGhvbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiKzcoOTk5KS05OTktOTktOTlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250ZW50PXtcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbHVlU3RhdGU9e3NldFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1ZhbGlkU3RhdGU9e3NldElzVmFsaWRQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI9e2Ryb3BJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcInBheW1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJwYXltZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29udGVudD17XCLQodGD0LzQvNCwINC/0LvQsNGC0LXQttCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVmFsdWVTdGF0ZT17c2V0UGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tWYWxpZFN0YXRlPXtzZXRJc1ZhbGlkUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b24gZGlzYWJsZWQ9eyF2YWxpZEZvcm19IG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PtCe0L/Qu9Cw0YLQuNGC0Yw8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUGF5bWVudEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cEZsYWc9e3BvcHVwRmxhZ31cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtyZXNwb25zZURhdGEubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8aDE+e29wZXJhdG9yRGF0YT8uZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgT3BlcmF0b3JEYXRhIHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9wZXJhdG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG9wZXJhdG9yTGluazogc3RyaW5nLFxyXG4gICAgICAgIGltZ1VybD86IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGVyck1lc3NhZ2U6IHN0cmluZyxcclxuICAgIG9rOiBib29sZWFuXHJcbn1cclxuXHJcblBheW1lbnRQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhIDogT3BlcmF0b3JEYXRhIHwgdW5kZWZpbmVkID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IG9wZXJhdG9yRGF0YTogZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRQYWdlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==