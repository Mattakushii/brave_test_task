module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

/***/ }),

/***/ "./src/components/CustomAppStyled.js":
/*!*******************************************!*\
  !*** ./src/components/CustomAppStyled.js ***!
  \*******************************************/
/*! exports provided: AppContainer, MainContainer, Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CustomAppStyled__AppContainer",
  componentId: "sc-1eovp18-0"
})(["height:100vh;width:100%;background-color:#f5f5f5;display:flex;flex-direction:column;justify-content:center;"]);
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "CustomAppStyled__MainContainer",
  componentId: "sc-1eovp18-1"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CustomAppStyled__Background",
  componentId: "sc-1eovp18-2"
})(["width:100%;height:100vh;position:absolute;top:0;left:0;background-color:rgba(0,0,0,0.15);display:", ";"], props => props.visible ? "block" : "none");

/***/ }),

/***/ "./src/components/footerComponent/Footer.js":
/*!**************************************************!*\
  !*** ./src/components/footerComponent/Footer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterStyled */ "./src/components/footerComponent/FooterStyled.js");
var _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\footerComponent\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx(_FooterStyled__WEBPACK_IMPORTED_MODULE_1__["FooterContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "#TypeScript #Next.js #React"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Test task by Vakhtel Maksim 2020"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Brave Terminal")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "#TypeScript #Next.js #React"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footerComponent/FooterStyled.js":
/*!********************************************************!*\
  !*** ./src/components/footerComponent/FooterStyled.js ***!
  \********************************************************/
/*! exports provided: FooterContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContainer", function() { return FooterContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "FooterStyled__FooterContainer",
  componentId: "sc-1qc9gfj-0"
})(["min-height:50px;width:100%;font-weight:300;font-size:14px;display:flex;justify-content:space-around;align-items:center;"]);

/***/ }),

/***/ "./src/components/headerComponent/Header.js":
/*!**************************************************!*\
  !*** ./src/components/headerComponent/Header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderStyled */ "./src/components/headerComponent/HeaderStyled.js");
var _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\headerComponent\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => {
  return __jsx(_HeaderStyled__WEBPACK_IMPORTED_MODULE_1__["HeaderContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(_HeaderStyled__WEBPACK_IMPORTED_MODULE_1__["HeaderLogo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Brave developers terminal")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/headerComponent/HeaderStyled.js":
/*!********************************************************!*\
  !*** ./src/components/headerComponent/HeaderStyled.js ***!
  \********************************************************/
/*! exports provided: HeaderContent, HeaderLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogo", function() { return HeaderLogo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "HeaderStyled__HeaderContent",
  componentId: "bl6l2v-0"
})(["width:100%;min-height:60px;display:flex;justify-content:flex-start;align-items:center;background-color:#000000;"]);
const HeaderLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HeaderStyled__HeaderLogo",
  componentId: "bl6l2v-1"
})(["color:#FFFFFF;font-size:20px;text-decoration:none;margin-left:25px;"]);

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./src/Context.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_headerComponent_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/headerComponent/Header */ "./src/components/headerComponent/Header.js");
/* harmony import */ var _components_footerComponent_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footerComponent/Footer */ "./src/components/footerComponent/Footer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_CustomAppStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CustomAppStyled */ "./src/components/CustomAppStyled.js");
var _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"]`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`;

function App({
  Component,
  pageProps
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Brave developers terminal")), __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"].Provider, {
    value: {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_components_CustomAppStyled__WEBPACK_IMPORTED_MODULE_6__["AppContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_components_headerComponent_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx(_components_CustomAppStyled__WEBPACK_IMPORTED_MODULE_6__["MainContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }))), __jsx(_components_footerComponent_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQXBwU3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3RlckNvbXBvbmVudC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyQ29tcG9uZW50L0Zvb3RlclN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXJDb21wb25lbnQvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlckNvbXBvbmVudC9IZWFkZXJTdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTWFpbkNvbnRhaW5lciIsIm1haW4iLCJCYWNrZ3JvdW5kIiwicHJvcHMiLCJ2aXNpYmxlIiwiRm9vdGVyIiwiRm9vdGVyQ29udGFpbmVyIiwiZm9vdGVyIiwiSGVhZGVyIiwiSGVhZGVyQ29udGVudCIsImhlYWRlciIsIkhlYWRlckxvZ28iLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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O0FBQUE7QUFBQSxJQUxKLENBREosQ0FUSixDQURKO0FBcUJIOztBQUVjRixrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG4gICBleHBvcnQgY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYDtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGA7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgZGlzcGxheTogJHtwcm9wcyA9PiBwcm9wcy52aXNpYmxlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG4gICAgYDtcclxuXHJcbiIsImltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gJy4vRm9vdGVyU3R5bGVkJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9vdGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2PiNUeXBlU2NyaXB0ICNOZXh0LmpzICNSZWFjdDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5UZXN0IHRhc2sgYnkgVmFraHRlbCBNYWtzaW0gMjAyMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5CcmF2ZSBUZXJtaW5hbDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj4jVHlwZVNjcmlwdCAjTmV4dC5qcyAjUmVhY3Q8L2Rpdj5cclxuICAgICAgICA8L0Zvb3RlckNvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDsiLCJpbXBvcnQgeyBIZWFkZXJDb250ZW50LCBIZWFkZXJMb2dvIH0gZnJvbSAnLi9IZWFkZXJTdHlsZWQnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXJMb2dvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5CcmF2ZSBkZXZlbG9wZXJzIHRlcm1pbmFsPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyTG9nbz5cclxuICAgICAgICA8L0hlYWRlckNvbnRlbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuaGVhZGVyYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5gOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29udGV4dH0gZnJvbSAnLi4vQ29udGV4dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlckNvbXBvbmVudC9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJDb21wb25lbnQvRm9vdGVyXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQXBwQ29udGFpbmVyLCBNYWluQ29udGFpbmVyfSBmcm9tICcuLi9jb21wb25lbnRzL0N1c3RvbUFwcFN0eWxlZCc7XHJcblxyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICB9XHJcbmBcclxuXHJcblxyXG5mdW5jdGlvbiBBcHAgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMFwiLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QnJhdmUgZGV2ZWxvcGVycyB0ZXJtaW5hbDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlLz5cclxuICAgICAgICAgICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t9fT5cclxuICAgICAgICAgICAgICAgIDxBcHBDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==