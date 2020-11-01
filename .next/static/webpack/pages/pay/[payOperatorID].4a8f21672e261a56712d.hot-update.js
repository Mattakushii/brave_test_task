webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable import/no-unresolved */

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function defer(fn) {
  return requestAnimationFrame(fn);
}
function cancelDefer(deferId) {
  cancelAnimationFrame(deferId);
}

function setInputSelection(input, start, end) {
  if (end === undefined) {
    end = start;
  }

  input.setSelectionRange(start, end);
}
function getInputSelection(input) {
  var start = input.selectionStart;
  var end = input.selectionEnd;
  return {
    start: start,
    end: end,
    length: end - start
  };
}
function isInputFocused(input) {
  var inputDocument = input.ownerDocument;
  return inputDocument.hasFocus() && inputDocument.activeElement === input;
}

// Element's window may differ from the one within React instance
// if element rendered within iframe.
// See https://github.com/sanniassin/react-input-mask/issues/182
function getElementDocument(element) {
  return element == null ? void 0 : element.ownerDocument;
}
function getElementWindow(element) {
  var _getElementDocument;

  return (_getElementDocument = getElementDocument(element)) == null ? void 0 : _getElementDocument.defaultView;
}
function isDOMElement(element) {
  var elementWindow = getElementWindow(element);
  return !!elementWindow && element instanceof elementWindow.HTMLElement;
}
function isFunction(value) {
  return typeof value === "function";
}
function findLastIndex(array, predicate) {
  for (var i = array.length - 1; i >= 0; i--) {
    var x = array[i];

    if (predicate(x, i)) {
      return i;
    }
  }

  return -1;
}
function repeat(string, n) {
  if (n === void 0) {
    n = 1;
  }

  var result = "";

  for (var i = 0; i < n; i++) {
    result += string;
  }

  return result;
}
function toString(value) {
  return "" + value;
}

function useInputElement(inputRef) {
  return React.useCallback(function () {
    var input = inputRef.current;
    var isDOMNode = typeof window !== "undefined" && isDOMElement(input); // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!input || !isDOMNode) {
      return null;
    }

    if (input.nodeName !== "INPUT") {
      input = input.querySelector("input");
    }

    if (!input) {
      throw new Error("react-input-mask: inputComponent doesn't contain input node");
    }

    return input;
  }, [inputRef]);
}

function useDeferLoop(callback) {
  var deferIdRef = React.useRef(null);
  var runLoop = React.useCallback(function () {
    // If there are simulated focus events, runLoop could be
    // called multiple times without blur or re-render
    if (deferIdRef.current !== null) {
      return;
    }

    function loop() {
      callback();
      deferIdRef.current = defer(loop);
    }

    loop();
  }, [callback]);
  var stopLoop = React.useCallback(function () {
    cancelDefer(deferIdRef.current);
    deferIdRef.current = null;
  }, []);
  React.useEffect(function () {
    if (deferIdRef.current) {
      stopLoop();
      runLoop();
    }
  }, [runLoop, stopLoop]);
  React.useEffect(cancelDefer, []);
  return [runLoop, stopLoop];
}

function useSelection(inputRef, isMasked) {
  var selectionRef = React.useRef({
    start: null,
    end: null
  });
  var getInputElement = useInputElement(inputRef);
  var getSelection = React.useCallback(function () {
    var input = getInputElement();
    return getInputSelection(input);
  }, [getInputElement]);
  var getLastSelection = React.useCallback(function () {
    return selectionRef.current;
  }, []);
  var setSelection = React.useCallback(function (selection) {
    var input = getInputElement(); // Don't change selection on unfocused input
    // because Safari sets focus on selection change (#154)

    if (!input || !isInputFocused(input)) {
      return;
    }

    setInputSelection(input, selection.start, selection.end); // Use actual selection in case the requested one was out of range

    selectionRef.current = getSelection();
  }, [getInputElement, getSelection]);
  var selectionLoop = React.useCallback(function () {
    selectionRef.current = getSelection();
  }, [getSelection]);

  var _useDeferLoop = useDeferLoop(selectionLoop),
      runSelectionLoop = _useDeferLoop[0],
      stopSelectionLoop = _useDeferLoop[1];

  React.useLayoutEffect(function () {
    if (!isMasked) {
      return;
    }

    var input = getInputElement();
    input.addEventListener("focus", runSelectionLoop);
    input.addEventListener("blur", stopSelectionLoop);

    if (isInputFocused(input)) {
      runSelectionLoop();
    }

    return function () {
      input.removeEventListener("focus", runSelectionLoop);
      input.removeEventListener("blur", stopSelectionLoop);
      stopSelectionLoop();
    };
  });
  return {
    getSelection: getSelection,
    getLastSelection: getLastSelection,
    setSelection: setSelection
  };
}

function useValue(inputRef, initialValue) {
  var getInputElement = useInputElement(inputRef);
  var valueRef = React.useRef(initialValue);
  var getValue = React.useCallback(function () {
    var input = getInputElement();
    return input.value;
  }, [getInputElement]);
  var getLastValue = React.useCallback(function () {
    return valueRef.current;
  }, []);
  var setValue = React.useCallback(function (newValue) {
    valueRef.current = newValue;
    var input = getInputElement();

    if (input) {
      input.value = newValue;
    }
  }, [getInputElement]);
  return {
    getValue: getValue,
    getLastValue: getLastValue,
    setValue: setValue
  };
}

function useInputState(initialValue, isMasked) {
  var inputRef = React.useRef();

  var _useSelection = useSelection(inputRef, isMasked),
      getSelection = _useSelection.getSelection,
      getLastSelection = _useSelection.getLastSelection,
      setSelection = _useSelection.setSelection;

  var _useValue = useValue(inputRef, initialValue),
      getValue = _useValue.getValue,
      getLastValue = _useValue.getLastValue,
      setValue = _useValue.setValue;

  function getLastInputState() {
    return {
      value: getLastValue(),
      selection: getLastSelection()
    };
  }

  function getInputState() {
    return {
      value: getValue(),
      selection: getSelection()
    };
  }

  function setInputState(_ref) {
    var value = _ref.value,
        selection = _ref.selection;
    setValue(value);
    setSelection(selection);
  }

  return {
    inputRef: inputRef,
    getInputState: getInputState,
    getLastInputState: getLastInputState,
    setInputState: setInputState
  };
}
function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var CONTROLLED_PROPS = ["disabled", "onBlur", "onChange", "onFocus", "onMouseDown", "readOnly", "value"];
var defaultFormatChars = {
  "9": /[0-9]/,
  a: /[A-Za-z]/,
  "*": /[A-Za-z0-9]/
};

function validateMaxLength(props) {
   true ? warning(!props.maxLength || !props.mask, "react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.") : undefined;
}
function validateMaskPlaceholder(props) {
  var mask = props.mask,
      maskPlaceholder = props.maskPlaceholder;
  !(!mask || !maskPlaceholder || maskPlaceholder.length === 1 || maskPlaceholder.length === mask.length) ?  true ? invariant(false, "react-input-mask: maskPlaceholder should either be a single character or have the same length as the mask:\n" + ("mask: " + mask + "\n") + ("maskPlaceholder: " + maskPlaceholder)) : undefined : void 0;
}
function validateChildren(props, inputElement) {
  var conflictProps = CONTROLLED_PROPS.filter(function (propId) {
    return inputElement.props[propId] != null && inputElement.props[propId] !== props[propId];
  });
  !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the InputMask component, not to children: " + conflictProps.join(",")) : undefined : void 0;
}

function parseMask (_ref) {
  var mask = _ref.mask,
      maskPlaceholder = _ref.maskPlaceholder;
  var permanents = [];

  if (!mask) {
    return {
      maskPlaceholder: null,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  if (typeof mask === "string") {
    var isPermanent = false;
    var parsedMaskString = "";
    mask.split("").forEach(function (character) {
      if (!isPermanent && character === "\\") {
        isPermanent = true;
      } else {
        if (isPermanent || !defaultFormatChars[character]) {
          permanents.push(parsedMaskString.length);
        }

        parsedMaskString += character;
        isPermanent = false;
      }
    });
    mask = parsedMaskString.split("").map(function (character, index) {
      if (permanents.indexOf(index) === -1) {
        return defaultFormatChars[character];
      }

      return character;
    });
  } else {
    mask.forEach(function (character, index) {
      if (typeof character === "string") {
        permanents.push(index);
      }
    });
  }

  if (maskPlaceholder) {
    if (maskPlaceholder.length === 1) {
      maskPlaceholder = mask.map(function (character, index) {
        if (permanents.indexOf(index) !== -1) {
          return character;
        }

        return maskPlaceholder;
      });
    } else {
      maskPlaceholder = maskPlaceholder.split("");
    }

    permanents.forEach(function (position) {
      maskPlaceholder[position] = mask[position];
    });
    maskPlaceholder = maskPlaceholder.join("");
  }

  var prefix = permanents.filter(function (position, index) {
    return position === index;
  }).map(function (position) {
    return mask[position];
  }).join("");
  var lastEditablePosition = mask.length - 1;

  while (permanents.indexOf(lastEditablePosition) !== -1) {
    lastEditablePosition--;
  }

  return {
    maskPlaceholder: maskPlaceholder,
    prefix: prefix,
    mask: mask,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */

var MaskUtils = function MaskUtils(options) {
  var _this = this;

  this.isCharacterAllowedAtPosition = function (character, position) {
    var maskPlaceholder = _this.maskOptions.maskPlaceholder;

    if (_this.isCharacterFillingPosition(character, position)) {
      return true;
    }

    if (!maskPlaceholder) {
      return false;
    }

    return maskPlaceholder[position] === character;
  };

  this.isCharacterFillingPosition = function (character, position) {
    var mask = _this.maskOptions.mask;

    if (!character || position >= mask.length) {
      return false;
    }

    if (!_this.isPositionEditable(position)) {
      return mask[position] === character;
    }

    var charRule = mask[position];
    return new RegExp(charRule).test(character);
  };

  this.isPositionEditable = function (position) {
    var _this$maskOptions = _this.maskOptions,
        mask = _this$maskOptions.mask,
        permanents = _this$maskOptions.permanents;
    return position < mask.length && permanents.indexOf(position) === -1;
  };

  this.isValueEmpty = function (value) {
    return value.split("").every(function (character, position) {
      return !_this.isPositionEditable(position) || !_this.isCharacterFillingPosition(character, position);
    });
  };

  this.isValueFilled = function (value) {
    return _this.getFilledLength(value) === _this.maskOptions.lastEditablePosition + 1;
  };

  this.getDefaultSelectionForValue = function (value) {
    var filledLength = _this.getFilledLength(value);

    var cursorPosition = _this.getRightEditablePosition(filledLength);

    return {
      start: cursorPosition,
      end: cursorPosition
    };
  };

  this.getFilledLength = function (value) {
    var characters = value.split("");
    var lastFilledIndex = findLastIndex(characters, function (character, position) {
      return _this.isPositionEditable(position) && _this.isCharacterFillingPosition(character, position);
    });
    return lastFilledIndex + 1;
  };

  this.getStringFillingLengthAtPosition = function (string, position) {
    var characters = string.split("");
    var insertedValue = characters.reduce(function (value, character) {
      return _this.insertCharacterAtPosition(value, character, value.length);
    }, repeat(" ", position));
    return insertedValue.length - position;
  };

  this.getLeftEditablePosition = function (position) {
    for (var i = position; i >= 0; i--) {
      if (_this.isPositionEditable(i)) {
        return i;
      }
    }

    return null;
  };

  this.getRightEditablePosition = function (position) {
    var mask = _this.maskOptions.mask;

    for (var i = position; i < mask.length; i++) {
      if (_this.isPositionEditable(i)) {
        return i;
      }
    }

    return null;
  };

  this.formatValue = function (value) {
    var _this$maskOptions2 = _this.maskOptions,
        maskPlaceholder = _this$maskOptions2.maskPlaceholder,
        mask = _this$maskOptions2.mask;

    if (!maskPlaceholder) {
      value = _this.insertStringAtPosition("", value, 0);

      while (value.length < mask.length && !_this.isPositionEditable(value.length)) {
        value += mask[value.length];
      }

      return value;
    }

    return _this.insertStringAtPosition(maskPlaceholder, value, 0);
  };

  this.clearRange = function (value, start, len) {
    if (!len) {
      return value;
    }

    var end = start + len;
    var _this$maskOptions3 = _this.maskOptions,
        maskPlaceholder = _this$maskOptions3.maskPlaceholder,
        mask = _this$maskOptions3.mask;
    var clearedValue = value.split("").map(function (character, i) {
      var isEditable = _this.isPositionEditable(i);

      if (!maskPlaceholder && i >= end && !isEditable) {
        return "";
      }

      if (i < start || i >= end) {
        return character;
      }

      if (!isEditable) {
        return mask[i];
      }

      if (maskPlaceholder) {
        return maskPlaceholder[i];
      }

      return "";
    }).join("");
    return _this.formatValue(clearedValue);
  };

  this.insertCharacterAtPosition = function (value, character, position) {
    var _this$maskOptions4 = _this.maskOptions,
        mask = _this$maskOptions4.mask,
        maskPlaceholder = _this$maskOptions4.maskPlaceholder;

    if (position >= mask.length) {
      return value;
    }

    var isAllowed = _this.isCharacterAllowedAtPosition(character, position);

    var isEditable = _this.isPositionEditable(position);

    var nextEditablePosition = _this.getRightEditablePosition(position);

    var isNextPlaceholder = maskPlaceholder && nextEditablePosition ? character === maskPlaceholder[nextEditablePosition] : null;
    var valueBefore = value.slice(0, position);

    if (isAllowed || !isEditable) {
      var insertedCharacter = isAllowed ? character : mask[position];
      value = valueBefore + insertedCharacter;
    }

    if (!isAllowed && !isEditable && !isNextPlaceholder) {
      value = _this.insertCharacterAtPosition(value, character, position + 1);
    }

    return value;
  };

  this.insertStringAtPosition = function (value, string, position) {
    var _this$maskOptions5 = _this.maskOptions,
        mask = _this$maskOptions5.mask,
        maskPlaceholder = _this$maskOptions5.maskPlaceholder;

    if (!string || position >= mask.length) {
      return value;
    }

    var characters = string.split("");
    var isFixedLength = _this.isValueFilled(value) || !!maskPlaceholder;
    var valueAfter = value.slice(position);
    value = characters.reduce(function (value, character) {
      return _this.insertCharacterAtPosition(value, character, value.length);
    }, value.slice(0, position));

    if (isFixedLength) {
      value += valueAfter.slice(value.length - position);
    } else if (_this.isValueFilled(value)) {
      value += mask.slice(value.length).join("");
    } else {
      var editableCharactersAfter = valueAfter.split("").filter(function (character, i) {
        return _this.isPositionEditable(position + i);
      });
      value = editableCharactersAfter.reduce(function (value, character) {
        var nextEditablePosition = _this.getRightEditablePosition(value.length);

        if (nextEditablePosition === null) {
          return value;
        }

        if (!_this.isPositionEditable(value.length)) {
          value += mask.slice(value.length, nextEditablePosition).join("");
        }

        return _this.insertCharacterAtPosition(value, character, value.length);
      }, value);
    }

    return value;
  };

  this.processChange = function (currentState, previousState) {
    var _this$maskOptions6 = _this.maskOptions,
        mask = _this$maskOptions6.mask,
        prefix = _this$maskOptions6.prefix,
        lastEditablePosition = _this$maskOptions6.lastEditablePosition;
    var value = currentState.value,
        selection = currentState.selection;
    var previousValue = previousState.value;
    var previousSelection = previousState.selection;
    var newValue = value;
    var enteredString = "";
    var formattedEnteredStringLength = 0;
    var removedLength = 0;
    var cursorPosition = Math.min(previousSelection.start, selection.start);

    if (selection.end > previousSelection.start) {
      enteredString = newValue.slice(previousSelection.start, selection.end);
      formattedEnteredStringLength = _this.getStringFillingLengthAtPosition(enteredString, cursorPosition);

      if (!formattedEnteredStringLength) {
        removedLength = 0;
      } else {
        removedLength = previousSelection.length;
      }
    } else if (newValue.length < previousValue.length) {
      removedLength = previousValue.length - newValue.length;
    }

    newValue = previousValue;

    if (removedLength) {
      if (removedLength === 1 && !previousSelection.length) {
        var deleteFromRight = previousSelection.start === selection.start;
        cursorPosition = deleteFromRight ? _this.getRightEditablePosition(selection.start) : _this.getLeftEditablePosition(selection.start);
      }

      newValue = _this.clearRange(newValue, cursorPosition, removedLength);
    }

    newValue = _this.insertStringAtPosition(newValue, enteredString, cursorPosition);
    cursorPosition += formattedEnteredStringLength;

    if (cursorPosition >= mask.length) {
      cursorPosition = mask.length;
    } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
      cursorPosition = prefix.length;
    } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
      cursorPosition = _this.getRightEditablePosition(cursorPosition);
    }

    newValue = _this.formatValue(newValue);
    return {
      value: newValue,
      enteredString: enteredString,
      selection: {
        start: cursorPosition,
        end: cursorPosition
      }
    };
  };

  this.maskOptions = parseMask(options);
};

var InputMaskChildrenWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputMaskChildrenWrapper, _React$Component);

  function InputMaskChildrenWrapper() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputMaskChildrenWrapper.prototype;

  _proto.render = function render() {
    // eslint-disable-next-line react/prop-types
    var _this$props = this.props,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    return React__default.cloneElement(children, props);
  };

  return InputMaskChildrenWrapper;
}(React__default.Component);

var InputMask = React.forwardRef(function InputMask(props, forwardedRef) {
  var alwaysShowMask = props.alwaysShowMask,
      children = props.children,
      mask = props.mask,
      maskPlaceholder = props.maskPlaceholder,
      beforeMaskedStateChange = props.beforeMaskedStateChange,
      restProps = _objectWithoutPropertiesLoose(props, ["alwaysShowMask", "children", "mask", "maskPlaceholder", "beforeMaskedStateChange"]);

  validateMaxLength(props);
  validateMaskPlaceholder(props);
  var maskUtils = new MaskUtils({
    mask: mask,
    maskPlaceholder: maskPlaceholder
  });
  var isMasked = !!mask;
  var isEditable = !restProps.disabled && !restProps.readOnly;
  var isControlled = props.value !== null && props.value !== undefined;
  var previousIsMasked = usePrevious(isMasked);
  var initialValue = toString((isControlled ? props.value : props.defaultValue) || "");

  var _useInputState = useInputState(initialValue, isMasked),
      inputRef = _useInputState.inputRef,
      getInputState = _useInputState.getInputState,
      setInputState = _useInputState.setInputState,
      getLastInputState = _useInputState.getLastInputState;

  var getInputElement = useInputElement(inputRef);

  function onChange(event) {
    var currentState = getInputState();
    var previousState = getLastInputState();
    var newInputState = maskUtils.processChange(currentState, previousState);

    if (beforeMaskedStateChange) {
      newInputState = beforeMaskedStateChange({
        currentState: currentState,
        previousState: previousState,
        nextState: newInputState
      });
    }

    setInputState(newInputState);

    if (props.onChange) {
      props.onChange(event);
    }
  }

  function onFocus(event) {
    // If autoFocus property is set, focus event fires before the ref handler gets called
    inputRef.current = event.target;
    var currentValue = getInputState().value;

    if (isMasked && !maskUtils.isValueFilled(currentValue)) {
      var newValue = maskUtils.formatValue(currentValue);
      var newSelection = maskUtils.getDefaultSelectionForValue(newValue);
      var newInputState = {
        value: newValue,
        selection: newSelection
      };

      if (beforeMaskedStateChange) {
        newInputState = beforeMaskedStateChange({
          currentState: getInputState(),
          nextState: newInputState
        });
        newValue = newInputState.value;
        newSelection = newInputState.selection;
      }

      setInputState(newInputState);

      if (newValue !== currentValue && props.onChange) {
        props.onChange(event);
      } // Chrome resets selection after focus event,
      // so we want to restore it later


      defer(function () {
        setInputState(getLastInputState());
      });
    }

    if (props.onFocus) {
      props.onFocus(event);
    }
  }

  function onBlur(event) {
    var currentValue = getInputState().value;
    var lastValue = getLastInputState().value;

    if (isMasked && !alwaysShowMask && maskUtils.isValueEmpty(lastValue)) {
      var newValue = "";
      var newInputState = {
        value: newValue,
        selection: {
          start: null,
          end: null
        }
      };

      if (beforeMaskedStateChange) {
        newInputState = beforeMaskedStateChange({
          currentState: getInputState(),
          nextState: newInputState
        });
        newValue = newInputState.value;
      }

      setInputState(newInputState);

      if (newValue !== currentValue && props.onChange) {
        props.onChange(event);
      }
    }

    if (props.onBlur) {
      props.onBlur(event);
    }
  } // Tiny unintentional mouse movements can break cursor
  // position on focus, so we have to restore it in that case
  //
  // https://github.com/sanniassin/react-input-mask/issues/108


  function onMouseDown(event) {
    var input = getInputElement();

    var _getInputState = getInputState(),
        value = _getInputState.value;

    var inputDocument = getElementDocument(input);

    if (!isInputFocused(input) && !maskUtils.isValueFilled(value)) {
      var mouseDownX = event.clientX;
      var mouseDownY = event.clientY;
      var mouseDownTime = new Date().getTime();

      var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
        inputDocument.removeEventListener("mouseup", mouseUpHandler);

        if (!isInputFocused(input)) {
          return;
        }

        var deltaX = Math.abs(mouseUpEvent.clientX - mouseDownX);
        var deltaY = Math.abs(mouseUpEvent.clientY - mouseDownY);
        var axisDelta = Math.max(deltaX, deltaY);
        var timeDelta = new Date().getTime() - mouseDownTime;

        if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
          var _lastState = getLastInputState();

          var newSelection = maskUtils.getDefaultSelectionForValue(_lastState.value);

          var newState = _extends({}, _lastState, {
            selection: newSelection
          });

          setInputState(newState);
        }
      };

      inputDocument.addEventListener("mouseup", mouseUpHandler);
    }

    if (props.onMouseDown) {
      props.onMouseDown(event);
    }
  } // For controlled inputs we want to provide properly formatted
  // value prop


  if (isMasked && isControlled) {
    var input = getInputElement();
    var isFocused = input && isInputFocused(input);
    var newValue = isFocused || alwaysShowMask || props.value ? maskUtils.formatValue(props.value) : props.value;

    if (beforeMaskedStateChange) {
      newValue = beforeMaskedStateChange({
        nextState: {
          value: newValue,
          selection: {
            start: null,
            end: null
          }
        }
      }).value;
    }

    setInputState(_extends({}, getLastInputState(), {
      value: newValue
    }));
  }

  var lastState = getLastInputState();
  var lastSelection = lastState.selection;
  var lastValue = lastState.value;
  React.useLayoutEffect(function () {
    if (!isMasked) {
      return;
    }

    var input = getInputElement();
    var isFocused = isInputFocused(input);
    var previousSelection = lastSelection;
    var currentState = getInputState();

    var newInputState = _extends({}, currentState); // Update value for uncontrolled inputs to make sure
    // it's always in sync with mask props


    if (!isControlled) {
      var currentValue = currentState.value;
      var formattedValue = maskUtils.formatValue(currentValue);
      var isValueEmpty = maskUtils.isValueEmpty(formattedValue);
      var shouldFormatValue = !isValueEmpty || isFocused || alwaysShowMask;

      if (shouldFormatValue) {
        newInputState.value = formattedValue;
      } else if (isValueEmpty && !isFocused) {
        newInputState.value = "";
      }
    }

    if (isFocused && !previousIsMasked) {
      // Adjust selection if input got masked while being focused
      newInputState.selection = maskUtils.getDefaultSelectionForValue(newInputState.value);
    } else if (isControlled && isFocused && previousSelection) {
      // Restore cursor position if value has changed outside change event
      if (previousSelection.start !== null && previousSelection.end !== null) {
        newInputState.selection = previousSelection;
      }
    }

    if (beforeMaskedStateChange) {
      newInputState = beforeMaskedStateChange({
        currentState: currentState,
        nextState: newInputState
      });
    }

    setInputState(newInputState);
  });

  var inputProps = _extends({}, restProps, {
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: isMasked && isEditable ? onChange : props.onChange,
    onMouseDown: isMasked && isEditable ? onMouseDown : props.onMouseDown,
    ref: function ref(_ref) {
      inputRef.current = reactDom.findDOMNode(_ref);

      if (isFunction(forwardedRef)) {
        forwardedRef(_ref);
      } else if (forwardedRef !== null && typeof forwardedRef === "object") {
        forwardedRef.current = _ref;
      }
    },
    value: isMasked && isControlled ? lastValue : props.value
  });

  if (children) {
    validateChildren(props, children); // We wrap children into a class component to be able to find
    // their input element using findDOMNode

    return React__default.createElement(InputMaskChildrenWrapper, inputProps, children);
  }

  return React__default.createElement("input", inputProps);
});
InputMask.displayName = "InputMask";
InputMask.defaultProps = {
  alwaysShowMask: false,
  maskPlaceholder: "_"
};
InputMask.propTypes = {
  alwaysShowMask: PropTypes.bool,
  beforeMaskedStateChange: PropTypes.func,
  children: PropTypes.element,
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]))]),
  maskPlaceholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onMouseDown: PropTypes.func
};

module.exports = InputMask;


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./src/components/PaymentPageStyled.js":
/*!*********************************************!*\
  !*** ./src/components/PaymentPageStyled.js ***!
  \*********************************************/
/*! exports provided: PaymentContainer, Input, Inputs, InputBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContainer", function() { return PaymentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inputs", function() { return Inputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_1__);


var PaymentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__PaymentContainer",
  componentId: "sc-1dpncqb-0"
})(["width:980px;height:100%;display:flex;flex-direction:column;"]);
var Input = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_input_mask__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "PaymentPageStyled__Input",
  componentId: "sc-1dpncqb-1"
})(["width:250px;:required{border-color:red;}:invalid{border-color:green;}"]);
var Inputs = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "PaymentPageStyled__Inputs",
  componentId: "sc-1dpncqb-2"
})(["width:250px;:required{border-color:red;}:invalid{border-color:green;}"]);
var InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PaymentPageStyled__InputBlock",
  componentId: "sc-1dpncqb-3"
})(["display:flex;flex-direction:column;"]);

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

/***/ "./src/components/inputComponent/FormInput.js":
/*!****************************************************!*\
  !*** ./src/components/inputComponent/FormInput.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormInputStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInputStyled */ "./src/components/inputComponent/FormInputStyled.js");
var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\components\\inputComponent\\FormInput.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FormInput = function FormInput(props) {
  _s();

  //для избежания предупреждения useLayoutEffect на стороне сервера
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showChild = _useState[0],
      setShowChild = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShowChild(true);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      valid = _useState2[0],
      setValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      value = _useState3[0],
      setValue = _useState3[1];

  function handleInputValue(e) {
    if (value === e.target.value) {
      return true;
    } else if (props.regExp.test(e.target.value)) {
      console.log(e.target.value); // const validVal = props.validateMethod(e.target.value);
      // props.stateCallback(validVal);
      // setValue(e.target.value);
      // setValid(true);  
    } else {
      console.log(e.target.value); // const invalidVal = props.validateMethod(e.target.value);
      // props.stateCallback(invalidVal);
      // setValue(e.target.value);

      setValid(false);
    }
  }

  if (!showChild) {
    return null;
  } else return __jsx(_FormInputStyled__WEBPACK_IMPORTED_MODULE_1__["InputBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, props.labelName), __jsx(_FormInputStyled__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: props.id,
    type: props.type,
    placeholder: props.placeholder,
    mask: props.mask | '',
    onChange: function onChange(e) {
      return handleInputValue(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, valid ? props.validationEvents.valid.value : props.validationEvents.invalid.value));
};

_s(FormInput, "8nxCTN+/EmjDIesQhHbyoMBV0dY=");

_c = FormInput;
/* harmony default export */ __webpack_exports__["default"] = (FormInput);

var _c;

$RefreshReg$(_c, "FormInput");

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

/***/ "./src/components/inputComponent/FormInputStyled.js":
/*!**********************************************************!*\
  !*** ./src/components/inputComponent/FormInputStyled.js ***!
  \**********************************************************/
/*! exports provided: Input, InputBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_1__);


var Input = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_input_mask__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "FormInputStyled__Input",
  componentId: "sc-5d38j4-0"
})(["width:200px;padding:10px 25px;font-size:18px;border:none;border-radius:5px;text-align:center;"]);
var InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FormInputStyled__InputBlock",
  componentId: "sc-5d38j4-1"
})(["display:flex;flex-direction:column;"]);

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

/***/ "./src/pages/pay/[payOperatorID].js":
/*!******************************************!*\
  !*** ./src/pages/pay/[payOperatorID].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.js");
/* harmony import */ var _components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputComponent/FormInput */ "./src/components/inputComponent/FormInput.js");




var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var PaymentPage = function PaymentPage(_ref) {
  _s();

  var data = _ref.data;

  //добавить логические состояния validphone validpayment чтобы включать выключать кнопку
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      phone = _useState[0],
      setPhone = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validPhone = _useState2[0],
      setValidPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      payment = _useState3[0],
      setPayment = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validPayment = _useState4[0],
      setValidPayment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validForm = _useState5[0],
      setValidForm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    phone: '',
    payment: ''
  }),
      errors = _useState6[0],
      setErrors = _useState6[1]; //сделать логику для отключения кнопки


  function handleUserInput(e) {
    var inputName = e.target.name;
    var value = e.target.value;

    switch (inputName) {
      case 'phone':
        validateForm(inputName, value);
        break;

      case 'payment':
        setPayment(value);
        validateForm(inputName, value);
        break;

      default:
        break;
    }
  }

  function validateForm(fieldName, value) {
    var validationErrors = errors;
    var isValidPhone = validPhone;
    var isValidPayment = validPayment;
    var phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;

    switch (fieldName) {
      case 'phone':
        if (value.length == 7) {
          var _value = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
              val = _value.slice(0);

          val.splice(6, 0, ')', '-');
          setPhone(val.join(''));
        }

        if (value.length == 12) {
          var _value2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
              _val = _value2.slice(0);

          _val.splice(11, 0, '-');

          setPhone(_val.join(''));
        }

        if (value.length == 15) {
          var _value3 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
              _val2 = _value3.slice(0);

          _val2.splice(14, 0, '-');

          setPhone(_val2.join(''));
        }

        if (value.length == 17) {
          value.slice(0, 16);
          console.log(value);
          setPhone(value);
        }

        if (phoneRegexp.test(value)) {
          console.log('Прикол, работает');
        } else {
          console.log('прикол, реально работает');
        }

        break;

      case 'payment':
        console.log(value);

      default:
        break;
    }
  }

  function passFirstValue() {
    if (phone.length == 0) {
      setPhone('+7(');
    }
  }

  function sendData(e) {
    console.log(phone, payment);
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx("input", {
      id: "phone",
      name: "phone",
      value: phone,
      type: "tel",
      placeholder: "+7(999)-999-99-99",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      onClick: function onClick() {
        return passFirstValue();
      },
      onFocus: function onFocus() {
        return passFirstValue();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"), __jsx("input", {
      id: "payment",
      name: "payment",
      value: payment,
      type: "text",
      placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043E\u0442 1 \u0434\u043E 1000\u0440",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx("input", {
      type: "submit",
      value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      onClick: function onClick(e) {
        sendData(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 16
      }
    }, data.errMessage);
  }
};

_s(PaymentPage, "BvywJkavmB4IUnHScjeznr3GFmU=");

_c = PaymentPage;

PaymentPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://localhost:3000/api/operators/".concat(ctx.query.payOperatorID));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (PaymentPage);
var validationPhoneEvents = {
  valid: {
    value: 'Верно!!!',
    bool: true
  },
  invalid: {
    value: 'Заполните поле до конца',
    bool: false
  }
};
var validationPaymentEvents = {
  valid: {
    value: 'Верно!!!',
    bool: true
  },
  invalid: {
    value: 'Введите сумму от 1 до 1000 рублей',
    bool: false
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3JlYWN0LWlucHV0LW1hc2suZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbnB1dENvbXBvbmVudC9Gb3JtSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dFN0eWxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIklucHV0IiwiSW5wdXRNYXNrIiwiSW5wdXRzIiwiaW5wdXQiLCJJbnB1dEJsb2NrIiwiRm9ybUlucHV0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dDaGlsZCIsInNldFNob3dDaGlsZCIsInVzZUVmZmVjdCIsInZhbGlkIiwic2V0VmFsaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlSW5wdXRWYWx1ZSIsImUiLCJ0YXJnZXQiLCJyZWdFeHAiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImlkIiwibGFiZWxOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFzayIsInZhbGlkYXRpb25FdmVudHMiLCJpbnZhbGlkIiwiUGF5bWVudFBhZ2UiLCJkYXRhIiwicGhvbmUiLCJzZXRQaG9uZSIsInZhbGlkUGhvbmUiLCJzZXRWYWxpZFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJ2YWxpZFBheW1lbnQiLCJzZXRWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRWYWxpZEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVVc2VySW5wdXQiLCJpbnB1dE5hbWUiLCJuYW1lIiwidmFsaWRhdGVGb3JtIiwiZmllbGROYW1lIiwidmFsaWRhdGlvbkVycm9ycyIsImlzVmFsaWRQaG9uZSIsImlzVmFsaWRQYXltZW50IiwicGhvbmVSZWdleHAiLCJsZW5ndGgiLCJ2YWwiLCJzcGxpY2UiLCJqb2luIiwic2xpY2UiLCJwYXNzRmlyc3RWYWx1ZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJvcGVyYXRvck5hbWUiLCJlcnJNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJxdWVyeSIsInBheU9wZXJhdG9ySUQiLCJyZXMiLCJqc29uIiwidmFsaWRhdGlvblBob25lRXZlbnRzIiwiYm9vbCIsInZhbGlkYXRpb25QYXltZW50RXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ0U7QUFDc0I7QUFDdEI7QUFDakM7QUFDZixTQUFTLCtEQUFjLFNBQVMsZ0VBQWUsU0FBUywyRUFBMEIsU0FBUyxnRUFBZTtBQUMxRyxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBa0Q7QUFDbkM7QUFDZjtBQUNBLG9DQUFvQyxpRUFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLGlFQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixjQUFjLG1CQUFPLENBQUMsa0RBQVU7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGdGQUFlOztBQUVwQywyQkFBMkIsbUJBQU8sQ0FBQyx5RkFBNEI7QUFDL0QscUJBQXFCLG1CQUFPLENBQUMscUVBQWtCOztBQUUvQztBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkRBQTZEOztBQUU3RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLEtBQXFDLCtNQUErTSxTQUFNO0FBQzVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkdBQTJHLEtBQXFDLDJNQUEyTSxTQUFnQjtBQUMzVztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwyQkFBMkIsS0FBcUMsd0pBQXdKLFNBQWdCO0FBQ3hPOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxtQkFBbUI7O0FBRTlEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DO0FBQ3BDO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7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QUFBQTtBQUFBO0FBQUE7O0FBTWVELDBFQUFmO0FBRUEsSUFBTXdDLHFCQUFxQixHQUFHO0FBQzFCMUQsT0FBSyxFQUFFO0FBQ0hFLFNBQUssRUFBRSxVQURKO0FBRUh5RCxRQUFJLEVBQUU7QUFGSCxHQURtQjtBQUsxQjFDLFNBQU8sRUFBRTtBQUNMZixTQUFLLEVBQUUseUJBREY7QUFFTHlELFFBQUksRUFBRTtBQUZEO0FBTGlCLENBQTlCO0FBV0EsSUFBTUMsdUJBQXVCLEdBQUc7QUFDNUI1RCxPQUFLLEVBQUU7QUFDSEUsU0FBSyxFQUFFLFVBREo7QUFFSHlELFFBQUksRUFBRTtBQUZILEdBRHFCO0FBSzVCMUMsU0FBTyxFQUFFO0FBQ0xmLFNBQUssRUFBRSxtQ0FERjtBQUVMeUQsUUFBSSxFQUFFO0FBRkQ7QUFMbUIsQ0FBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5L1twYXlPcGVyYXRvcklEXS40YThmMjE2NzJlMjYxYTU2NzEyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbGliL3JlYWN0LWlucHV0LW1hc2sucHJvZHVjdGlvbi5taW4uanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYi9yZWFjdC1pbnB1dC1tYXNrLmRldmVsb3BtZW50LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgncHJvcC10eXBlcycpKTtcbnZhciBpbnZhcmlhbnQgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnaW52YXJpYW50JykpO1xudmFyIHdhcm5pbmcgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnd2FybmluZycpKTtcblxuZnVuY3Rpb24gX2RlZmF1bHRzMihvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuXG4gIF9kZWZhdWx0czIoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gZGVmZXIoZm4pIHtcbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XG59XG5mdW5jdGlvbiBjYW5jZWxEZWZlcihkZWZlcklkKSB7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGRlZmVySWQpO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFNlbGVjdGlvbihpbnB1dCwgc3RhcnQsIGVuZCkge1xuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSBzdGFydDtcbiAgfVxuXG4gIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xufVxuZnVuY3Rpb24gZ2V0SW5wdXRTZWxlY3Rpb24oaW5wdXQpIHtcbiAgdmFyIHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gIHZhciBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGVuZDogZW5kLFxuICAgIGxlbmd0aDogZW5kIC0gc3RhcnRcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzSW5wdXRGb2N1c2VkKGlucHV0KSB7XG4gIHZhciBpbnB1dERvY3VtZW50ID0gaW5wdXQub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIGlucHV0RG9jdW1lbnQuaGFzRm9jdXMoKSAmJiBpbnB1dERvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGlucHV0O1xufVxuXG4vLyBFbGVtZW50J3Mgd2luZG93IG1heSBkaWZmZXIgZnJvbSB0aGUgb25lIHdpdGhpbiBSZWFjdCBpbnN0YW5jZVxuLy8gaWYgZWxlbWVudCByZW5kZXJlZCB3aXRoaW4gaWZyYW1lLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW5uaWFzc2luL3JlYWN0LWlucHV0LW1hc2svaXNzdWVzLzE4MlxuZnVuY3Rpb24gZ2V0RWxlbWVudERvY3VtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRXaW5kb3coZWxlbWVudCkge1xuICB2YXIgX2dldEVsZW1lbnREb2N1bWVudDtcblxuICByZXR1cm4gKF9nZXRFbGVtZW50RG9jdW1lbnQgPSBnZXRFbGVtZW50RG9jdW1lbnQoZWxlbWVudCkpID09IG51bGwgPyB2b2lkIDAgOiBfZ2V0RWxlbWVudERvY3VtZW50LmRlZmF1bHRWaWV3O1xufVxuZnVuY3Rpb24gaXNET01FbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIGVsZW1lbnRXaW5kb3cgPSBnZXRFbGVtZW50V2luZG93KGVsZW1lbnQpO1xuICByZXR1cm4gISFlbGVtZW50V2luZG93ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBlbGVtZW50V2luZG93LkhUTUxFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBmaW5kTGFzdEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHggPSBhcnJheVtpXTtcblxuICAgIGlmIChwcmVkaWNhdGUoeCwgaSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIHJlcGVhdChzdHJpbmcsIG4pIHtcbiAgaWYgKG4gPT09IHZvaWQgMCkge1xuICAgIG4gPSAxO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFwiXCI7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICByZXN1bHQgKz0gc3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBcIlwiICsgdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVzZUlucHV0RWxlbWVudChpbnB1dFJlZikge1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGlucHV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIGlzRE9NTm9kZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgaXNET01FbGVtZW50KGlucHV0KTsgLy8gd29ya2Fyb3VuZCBmb3IgcmVhY3QtdGVzdC1yZW5kZXJlclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW5uaWFzc2luL3JlYWN0LWlucHV0LW1hc2svaXNzdWVzLzE0N1xuXG4gICAgaWYgKCFpbnB1dCB8fCAhaXNET01Ob2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubm9kZU5hbWUgIT09IFwiSU5QVVRcIikge1xuICAgICAgaW5wdXQgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgfVxuXG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVhY3QtaW5wdXQtbWFzazogaW5wdXRDb21wb25lbnQgZG9lc24ndCBjb250YWluIGlucHV0IG5vZGVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlucHV0O1xuICB9LCBbaW5wdXRSZWZdKTtcbn1cblxuZnVuY3Rpb24gdXNlRGVmZXJMb29wKGNhbGxiYWNrKSB7XG4gIHZhciBkZWZlcklkUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgcnVuTG9vcCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBJZiB0aGVyZSBhcmUgc2ltdWxhdGVkIGZvY3VzIGV2ZW50cywgcnVuTG9vcCBjb3VsZCBiZVxuICAgIC8vIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyB3aXRob3V0IGJsdXIgb3IgcmUtcmVuZGVyXG4gICAgaWYgKGRlZmVySWRSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgZGVmZXJJZFJlZi5jdXJyZW50ID0gZGVmZXIobG9vcCk7XG4gICAgfVxuXG4gICAgbG9vcCgpO1xuICB9LCBbY2FsbGJhY2tdKTtcbiAgdmFyIHN0b3BMb29wID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGNhbmNlbERlZmVyKGRlZmVySWRSZWYuY3VycmVudCk7XG4gICAgZGVmZXJJZFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChkZWZlcklkUmVmLmN1cnJlbnQpIHtcbiAgICAgIHN0b3BMb29wKCk7XG4gICAgICBydW5Mb29wKCk7XG4gICAgfVxuICB9LCBbcnVuTG9vcCwgc3RvcExvb3BdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGNhbmNlbERlZmVyLCBbXSk7XG4gIHJldHVybiBbcnVuTG9vcCwgc3RvcExvb3BdO1xufVxuXG5mdW5jdGlvbiB1c2VTZWxlY3Rpb24oaW5wdXRSZWYsIGlzTWFza2VkKSB7XG4gIHZhciBzZWxlY3Rpb25SZWYgPSBSZWFjdC51c2VSZWYoe1xuICAgIHN0YXJ0OiBudWxsLFxuICAgIGVuZDogbnVsbFxuICB9KTtcbiAgdmFyIGdldElucHV0RWxlbWVudCA9IHVzZUlucHV0RWxlbWVudChpbnB1dFJlZik7XG4gIHZhciBnZXRTZWxlY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgcmV0dXJuIGdldElucHV0U2VsZWN0aW9uKGlucHV0KTtcbiAgfSwgW2dldElucHV0RWxlbWVudF0pO1xuICB2YXIgZ2V0TGFzdFNlbGVjdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uUmVmLmN1cnJlbnQ7XG4gIH0sIFtdKTtcbiAgdmFyIHNldFNlbGVjdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dEVsZW1lbnQoKTsgLy8gRG9uJ3QgY2hhbmdlIHNlbGVjdGlvbiBvbiB1bmZvY3VzZWQgaW5wdXRcbiAgICAvLyBiZWNhdXNlIFNhZmFyaSBzZXRzIGZvY3VzIG9uIHNlbGVjdGlvbiBjaGFuZ2UgKCMxNTQpXG5cbiAgICBpZiAoIWlucHV0IHx8ICFpc0lucHV0Rm9jdXNlZChpbnB1dCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJbnB1dFNlbGVjdGlvbihpbnB1dCwgc2VsZWN0aW9uLnN0YXJ0LCBzZWxlY3Rpb24uZW5kKTsgLy8gVXNlIGFjdHVhbCBzZWxlY3Rpb24gaW4gY2FzZSB0aGUgcmVxdWVzdGVkIG9uZSB3YXMgb3V0IG9mIHJhbmdlXG5cbiAgICBzZWxlY3Rpb25SZWYuY3VycmVudCA9IGdldFNlbGVjdGlvbigpO1xuICB9LCBbZ2V0SW5wdXRFbGVtZW50LCBnZXRTZWxlY3Rpb25dKTtcbiAgdmFyIHNlbGVjdGlvbkxvb3AgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc2VsZWN0aW9uUmVmLmN1cnJlbnQgPSBnZXRTZWxlY3Rpb24oKTtcbiAgfSwgW2dldFNlbGVjdGlvbl0pO1xuXG4gIHZhciBfdXNlRGVmZXJMb29wID0gdXNlRGVmZXJMb29wKHNlbGVjdGlvbkxvb3ApLFxuICAgICAgcnVuU2VsZWN0aW9uTG9vcCA9IF91c2VEZWZlckxvb3BbMF0sXG4gICAgICBzdG9wU2VsZWN0aW9uTG9vcCA9IF91c2VEZWZlckxvb3BbMV07XG5cbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzTWFza2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHJ1blNlbGVjdGlvbkxvb3ApO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHN0b3BTZWxlY3Rpb25Mb29wKTtcblxuICAgIGlmIChpc0lucHV0Rm9jdXNlZChpbnB1dCkpIHtcbiAgICAgIHJ1blNlbGVjdGlvbkxvb3AoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHJ1blNlbGVjdGlvbkxvb3ApO1xuICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc3RvcFNlbGVjdGlvbkxvb3ApO1xuICAgICAgc3RvcFNlbGVjdGlvbkxvb3AoKTtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBnZXRTZWxlY3Rpb246IGdldFNlbGVjdGlvbixcbiAgICBnZXRMYXN0U2VsZWN0aW9uOiBnZXRMYXN0U2VsZWN0aW9uLFxuICAgIHNldFNlbGVjdGlvbjogc2V0U2VsZWN0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVZhbHVlKGlucHV0UmVmLCBpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGdldElucHV0RWxlbWVudCA9IHVzZUlucHV0RWxlbWVudChpbnB1dFJlZik7XG4gIHZhciB2YWx1ZVJlZiA9IFJlYWN0LnVzZVJlZihpbml0aWFsVmFsdWUpO1xuICB2YXIgZ2V0VmFsdWUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICB9LCBbZ2V0SW5wdXRFbGVtZW50XSk7XG4gIHZhciBnZXRMYXN0VmFsdWUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhbHVlUmVmLmN1cnJlbnQ7XG4gIH0sIFtdKTtcbiAgdmFyIHNldFZhbHVlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgdmFsdWVSZWYuY3VycmVudCA9IG5ld1ZhbHVlO1xuICAgIHZhciBpbnB1dCA9IGdldElucHV0RWxlbWVudCgpO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfSwgW2dldElucHV0RWxlbWVudF0pO1xuICByZXR1cm4ge1xuICAgIGdldFZhbHVlOiBnZXRWYWx1ZSxcbiAgICBnZXRMYXN0VmFsdWU6IGdldExhc3RWYWx1ZSxcbiAgICBzZXRWYWx1ZTogc2V0VmFsdWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlSW5wdXRTdGF0ZShpbml0aWFsVmFsdWUsIGlzTWFza2VkKSB7XG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIHZhciBfdXNlU2VsZWN0aW9uID0gdXNlU2VsZWN0aW9uKGlucHV0UmVmLCBpc01hc2tlZCksXG4gICAgICBnZXRTZWxlY3Rpb24gPSBfdXNlU2VsZWN0aW9uLmdldFNlbGVjdGlvbixcbiAgICAgIGdldExhc3RTZWxlY3Rpb24gPSBfdXNlU2VsZWN0aW9uLmdldExhc3RTZWxlY3Rpb24sXG4gICAgICBzZXRTZWxlY3Rpb24gPSBfdXNlU2VsZWN0aW9uLnNldFNlbGVjdGlvbjtcblxuICB2YXIgX3VzZVZhbHVlID0gdXNlVmFsdWUoaW5wdXRSZWYsIGluaXRpYWxWYWx1ZSksXG4gICAgICBnZXRWYWx1ZSA9IF91c2VWYWx1ZS5nZXRWYWx1ZSxcbiAgICAgIGdldExhc3RWYWx1ZSA9IF91c2VWYWx1ZS5nZXRMYXN0VmFsdWUsXG4gICAgICBzZXRWYWx1ZSA9IF91c2VWYWx1ZS5zZXRWYWx1ZTtcblxuICBmdW5jdGlvbiBnZXRMYXN0SW5wdXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdldExhc3RWYWx1ZSgpLFxuICAgICAgc2VsZWN0aW9uOiBnZXRMYXN0U2VsZWN0aW9uKClcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5wdXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdldFZhbHVlKCksXG4gICAgICBzZWxlY3Rpb246IGdldFNlbGVjdGlvbigpXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldElucHV0U3RhdGUoX3JlZikge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgIHNlbGVjdGlvbiA9IF9yZWYuc2VsZWN0aW9uO1xuICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5wdXRSZWY6IGlucHV0UmVmLFxuICAgIGdldElucHV0U3RhdGU6IGdldElucHV0U3RhdGUsXG4gICAgZ2V0TGFzdElucHV0U3RhdGU6IGdldExhc3RJbnB1dFN0YXRlLFxuICAgIHNldElucHV0U3RhdGU6IHNldElucHV0U3RhdGVcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuXG52YXIgQ09OVFJPTExFRF9QUk9QUyA9IFtcImRpc2FibGVkXCIsIFwib25CbHVyXCIsIFwib25DaGFuZ2VcIiwgXCJvbkZvY3VzXCIsIFwib25Nb3VzZURvd25cIiwgXCJyZWFkT25seVwiLCBcInZhbHVlXCJdO1xudmFyIGRlZmF1bHRGb3JtYXRDaGFycyA9IHtcbiAgXCI5XCI6IC9bMC05XS8sXG4gIGE6IC9bQS1aYS16XS8sXG4gIFwiKlwiOiAvW0EtWmEtejAtOV0vXG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU1heExlbmd0aChwcm9wcykge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFwcm9wcy5tYXhMZW5ndGggfHwgIXByb3BzLm1hc2ssIFwicmVhY3QtaW5wdXQtbWFzazogbWF4TGVuZ3RoIHByb3BlcnR5IHNob3VsZG4ndCBiZSBwYXNzZWQgdG8gdGhlIG1hc2tlZCBpbnB1dC4gSXQgYnJlYWtzIG1hc2tpbmcgYW5kIHVubmVjZXNzYXJ5IGJlY2F1c2UgbGVuZ3RoIGlzIGxpbWl0ZWQgYnkgdGhlIG1hc2sgbGVuZ3RoLlwiKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlTWFza1BsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBtYXNrID0gcHJvcHMubWFzayxcbiAgICAgIG1hc2tQbGFjZWhvbGRlciA9IHByb3BzLm1hc2tQbGFjZWhvbGRlcjtcbiAgISghbWFzayB8fCAhbWFza1BsYWNlaG9sZGVyIHx8IG1hc2tQbGFjZWhvbGRlci5sZW5ndGggPT09IDEgfHwgbWFza1BsYWNlaG9sZGVyLmxlbmd0aCA9PT0gbWFzay5sZW5ndGgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcInJlYWN0LWlucHV0LW1hc2s6IG1hc2tQbGFjZWhvbGRlciBzaG91bGQgZWl0aGVyIGJlIGEgc2luZ2xlIGNoYXJhY3RlciBvciBoYXZlIHRoZSBzYW1lIGxlbmd0aCBhcyB0aGUgbWFzazpcXG5cIiArIChcIm1hc2s6IFwiICsgbWFzayArIFwiXFxuXCIpICsgKFwibWFza1BsYWNlaG9sZGVyOiBcIiArIG1hc2tQbGFjZWhvbGRlcikpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRyZW4ocHJvcHMsIGlucHV0RWxlbWVudCkge1xuICB2YXIgY29uZmxpY3RQcm9wcyA9IENPTlRST0xMRURfUFJPUFMuZmlsdGVyKGZ1bmN0aW9uIChwcm9wSWQpIHtcbiAgICByZXR1cm4gaW5wdXRFbGVtZW50LnByb3BzW3Byb3BJZF0gIT0gbnVsbCAmJiBpbnB1dEVsZW1lbnQucHJvcHNbcHJvcElkXSAhPT0gcHJvcHNbcHJvcElkXTtcbiAgfSk7XG4gICEhY29uZmxpY3RQcm9wcy5sZW5ndGggPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwicmVhY3QtaW5wdXQtbWFzazogdGhlIGZvbGxvd2luZyBwcm9wcyBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBJbnB1dE1hc2sgY29tcG9uZW50LCBub3QgdG8gY2hpbGRyZW46IFwiICsgY29uZmxpY3RQcm9wcy5qb2luKFwiLFwiKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1hc2sgKF9yZWYpIHtcbiAgdmFyIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBtYXNrUGxhY2Vob2xkZXIgPSBfcmVmLm1hc2tQbGFjZWhvbGRlcjtcbiAgdmFyIHBlcm1hbmVudHMgPSBbXTtcblxuICBpZiAoIW1hc2spIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFza1BsYWNlaG9sZGVyOiBudWxsLFxuICAgICAgbWFzazogbnVsbCxcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGxhc3RFZGl0YWJsZVBvc2l0aW9uOiBudWxsLFxuICAgICAgcGVybWFuZW50czogW11cbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBtYXNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgdmFyIGlzUGVybWFuZW50ID0gZmFsc2U7XG4gICAgdmFyIHBhcnNlZE1hc2tTdHJpbmcgPSBcIlwiO1xuICAgIG1hc2suc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgICBpZiAoIWlzUGVybWFuZW50ICYmIGNoYXJhY3RlciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgaXNQZXJtYW5lbnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzUGVybWFuZW50IHx8ICFkZWZhdWx0Rm9ybWF0Q2hhcnNbY2hhcmFjdGVyXSkge1xuICAgICAgICAgIHBlcm1hbmVudHMucHVzaChwYXJzZWRNYXNrU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZWRNYXNrU3RyaW5nICs9IGNoYXJhY3RlcjtcbiAgICAgICAgaXNQZXJtYW5lbnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBtYXNrID0gcGFyc2VkTWFza1N0cmluZy5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24gKGNoYXJhY3RlciwgaW5kZXgpIHtcbiAgICAgIGlmIChwZXJtYW5lbnRzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdEZvcm1hdENoYXJzW2NoYXJhY3Rlcl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbWFzay5mb3JFYWNoKGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIGNoYXJhY3RlciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBwZXJtYW5lbnRzLnB1c2goaW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1hc2tQbGFjZWhvbGRlcikge1xuICAgIGlmIChtYXNrUGxhY2Vob2xkZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICBtYXNrUGxhY2Vob2xkZXIgPSBtYXNrLm1hcChmdW5jdGlvbiAoY2hhcmFjdGVyLCBpbmRleCkge1xuICAgICAgICBpZiAocGVybWFuZW50cy5pbmRleE9mKGluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hc2tQbGFjZWhvbGRlcjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXNrUGxhY2Vob2xkZXIgPSBtYXNrUGxhY2Vob2xkZXIuc3BsaXQoXCJcIik7XG4gICAgfVxuXG4gICAgcGVybWFuZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgbWFza1BsYWNlaG9sZGVyW3Bvc2l0aW9uXSA9IG1hc2tbcG9zaXRpb25dO1xuICAgIH0pO1xuICAgIG1hc2tQbGFjZWhvbGRlciA9IG1hc2tQbGFjZWhvbGRlci5qb2luKFwiXCIpO1xuICB9XG5cbiAgdmFyIHByZWZpeCA9IHBlcm1hbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChwb3NpdGlvbiwgaW5kZXgpIHtcbiAgICByZXR1cm4gcG9zaXRpb24gPT09IGluZGV4O1xuICB9KS5tYXAoZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIG1hc2tbcG9zaXRpb25dO1xuICB9KS5qb2luKFwiXCIpO1xuICB2YXIgbGFzdEVkaXRhYmxlUG9zaXRpb24gPSBtYXNrLmxlbmd0aCAtIDE7XG5cbiAgd2hpbGUgKHBlcm1hbmVudHMuaW5kZXhPZihsYXN0RWRpdGFibGVQb3NpdGlvbikgIT09IC0xKSB7XG4gICAgbGFzdEVkaXRhYmxlUG9zaXRpb24tLTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFza1BsYWNlaG9sZGVyOiBtYXNrUGxhY2Vob2xkZXIsXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgbWFzazogbWFzayxcbiAgICBsYXN0RWRpdGFibGVQb3NpdGlvbjogbGFzdEVkaXRhYmxlUG9zaXRpb24sXG4gICAgcGVybWFuZW50czogcGVybWFuZW50c1xuICB9O1xufVxuXG4vKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFtcImVycm9yXCIsIHsgZnVuY3Rpb25zOiBmYWxzZSB9XSAqL1xuXG52YXIgTWFza1V0aWxzID0gZnVuY3Rpb24gTWFza1V0aWxzKG9wdGlvbnMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLmlzQ2hhcmFjdGVyQWxsb3dlZEF0UG9zaXRpb24gPSBmdW5jdGlvbiAoY2hhcmFjdGVyLCBwb3NpdGlvbikge1xuICAgIHZhciBtYXNrUGxhY2Vob2xkZXIgPSBfdGhpcy5tYXNrT3B0aW9ucy5tYXNrUGxhY2Vob2xkZXI7XG5cbiAgICBpZiAoX3RoaXMuaXNDaGFyYWN0ZXJGaWxsaW5nUG9zaXRpb24oY2hhcmFjdGVyLCBwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghbWFza1BsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hc2tQbGFjZWhvbGRlcltwb3NpdGlvbl0gPT09IGNoYXJhY3RlcjtcbiAgfTtcblxuICB0aGlzLmlzQ2hhcmFjdGVyRmlsbGluZ1Bvc2l0aW9uID0gZnVuY3Rpb24gKGNoYXJhY3RlciwgcG9zaXRpb24pIHtcbiAgICB2YXIgbWFzayA9IF90aGlzLm1hc2tPcHRpb25zLm1hc2s7XG5cbiAgICBpZiAoIWNoYXJhY3RlciB8fCBwb3NpdGlvbiA+PSBtYXNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKHBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIG1hc2tbcG9zaXRpb25dID09PSBjaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJSdWxlID0gbWFza1twb3NpdGlvbl07XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoY2hhclJ1bGUpLnRlc3QoY2hhcmFjdGVyKTtcbiAgfTtcblxuICB0aGlzLmlzUG9zaXRpb25FZGl0YWJsZSA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgIHZhciBfdGhpcyRtYXNrT3B0aW9ucyA9IF90aGlzLm1hc2tPcHRpb25zLFxuICAgICAgICBtYXNrID0gX3RoaXMkbWFza09wdGlvbnMubWFzayxcbiAgICAgICAgcGVybWFuZW50cyA9IF90aGlzJG1hc2tPcHRpb25zLnBlcm1hbmVudHM7XG4gICAgcmV0dXJuIHBvc2l0aW9uIDwgbWFzay5sZW5ndGggJiYgcGVybWFuZW50cy5pbmRleE9mKHBvc2l0aW9uKSA9PT0gLTE7XG4gIH07XG5cbiAgdGhpcy5pc1ZhbHVlRW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoXCJcIikuZXZlcnkoZnVuY3Rpb24gKGNoYXJhY3RlciwgcG9zaXRpb24pIHtcbiAgICAgIHJldHVybiAhX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKHBvc2l0aW9uKSB8fCAhX3RoaXMuaXNDaGFyYWN0ZXJGaWxsaW5nUG9zaXRpb24oY2hhcmFjdGVyLCBwb3NpdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5pc1ZhbHVlRmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIF90aGlzLmdldEZpbGxlZExlbmd0aCh2YWx1ZSkgPT09IF90aGlzLm1hc2tPcHRpb25zLmxhc3RFZGl0YWJsZVBvc2l0aW9uICsgMTtcbiAgfTtcblxuICB0aGlzLmdldERlZmF1bHRTZWxlY3Rpb25Gb3JWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBmaWxsZWRMZW5ndGggPSBfdGhpcy5nZXRGaWxsZWRMZW5ndGgodmFsdWUpO1xuXG4gICAgdmFyIGN1cnNvclBvc2l0aW9uID0gX3RoaXMuZ2V0UmlnaHRFZGl0YWJsZVBvc2l0aW9uKGZpbGxlZExlbmd0aCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IGN1cnNvclBvc2l0aW9uLFxuICAgICAgZW5kOiBjdXJzb3JQb3NpdGlvblxuICAgIH07XG4gIH07XG5cbiAgdGhpcy5nZXRGaWxsZWRMZW5ndGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IHZhbHVlLnNwbGl0KFwiXCIpO1xuICAgIHZhciBsYXN0RmlsbGVkSW5kZXggPSBmaW5kTGFzdEluZGV4KGNoYXJhY3RlcnMsIGZ1bmN0aW9uIChjaGFyYWN0ZXIsIHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKHBvc2l0aW9uKSAmJiBfdGhpcy5pc0NoYXJhY3RlckZpbGxpbmdQb3NpdGlvbihjaGFyYWN0ZXIsIHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGFzdEZpbGxlZEluZGV4ICsgMTtcbiAgfTtcblxuICB0aGlzLmdldFN0cmluZ0ZpbGxpbmdMZW5ndGhBdFBvc2l0aW9uID0gZnVuY3Rpb24gKHN0cmluZywgcG9zaXRpb24pIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IHN0cmluZy5zcGxpdChcIlwiKTtcbiAgICB2YXIgaW5zZXJ0ZWRWYWx1ZSA9IGNoYXJhY3RlcnMucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaW5zZXJ0Q2hhcmFjdGVyQXRQb3NpdGlvbih2YWx1ZSwgY2hhcmFjdGVyLCB2YWx1ZS5sZW5ndGgpO1xuICAgIH0sIHJlcGVhdChcIiBcIiwgcG9zaXRpb24pKTtcbiAgICByZXR1cm4gaW5zZXJ0ZWRWYWx1ZS5sZW5ndGggLSBwb3NpdGlvbjtcbiAgfTtcblxuICB0aGlzLmdldExlZnRFZGl0YWJsZVBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgZm9yICh2YXIgaSA9IHBvc2l0aW9uOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKF90aGlzLmlzUG9zaXRpb25FZGl0YWJsZShpKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLmdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgIHZhciBtYXNrID0gX3RoaXMubWFza09wdGlvbnMubWFzaztcblxuICAgIGZvciAodmFyIGkgPSBwb3NpdGlvbjsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfdGhpcy5pc1Bvc2l0aW9uRWRpdGFibGUoaSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy5mb3JtYXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBfdGhpcyRtYXNrT3B0aW9uczIgPSBfdGhpcy5tYXNrT3B0aW9ucyxcbiAgICAgICAgbWFza1BsYWNlaG9sZGVyID0gX3RoaXMkbWFza09wdGlvbnMyLm1hc2tQbGFjZWhvbGRlcixcbiAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zMi5tYXNrO1xuXG4gICAgaWYgKCFtYXNrUGxhY2Vob2xkZXIpIHtcbiAgICAgIHZhbHVlID0gX3RoaXMuaW5zZXJ0U3RyaW5nQXRQb3NpdGlvbihcIlwiLCB2YWx1ZSwgMCk7XG5cbiAgICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPCBtYXNrLmxlbmd0aCAmJiAhX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKHZhbHVlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFsdWUgKz0gbWFza1t2YWx1ZS5sZW5ndGhdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzLmluc2VydFN0cmluZ0F0UG9zaXRpb24obWFza1BsYWNlaG9sZGVyLCB2YWx1ZSwgMCk7XG4gIH07XG5cbiAgdGhpcy5jbGVhclJhbmdlID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgbGVuKSB7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gICAgdmFyIF90aGlzJG1hc2tPcHRpb25zMyA9IF90aGlzLm1hc2tPcHRpb25zLFxuICAgICAgICBtYXNrUGxhY2Vob2xkZXIgPSBfdGhpcyRtYXNrT3B0aW9uczMubWFza1BsYWNlaG9sZGVyLFxuICAgICAgICBtYXNrID0gX3RoaXMkbWFza09wdGlvbnMzLm1hc2s7XG4gICAgdmFyIGNsZWFyZWRWYWx1ZSA9IHZhbHVlLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbiAoY2hhcmFjdGVyLCBpKSB7XG4gICAgICB2YXIgaXNFZGl0YWJsZSA9IF90aGlzLmlzUG9zaXRpb25FZGl0YWJsZShpKTtcblxuICAgICAgaWYgKCFtYXNrUGxhY2Vob2xkZXIgJiYgaSA+PSBlbmQgJiYgIWlzRWRpdGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDwgc3RhcnQgfHwgaSA+PSBlbmQpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0VkaXRhYmxlKSB7XG4gICAgICAgIHJldHVybiBtYXNrW2ldO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFza1BsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBtYXNrUGxhY2Vob2xkZXJbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0pLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIF90aGlzLmZvcm1hdFZhbHVlKGNsZWFyZWRWYWx1ZSk7XG4gIH07XG5cbiAgdGhpcy5pbnNlcnRDaGFyYWN0ZXJBdFBvc2l0aW9uID0gZnVuY3Rpb24gKHZhbHVlLCBjaGFyYWN0ZXIsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzJG1hc2tPcHRpb25zNCA9IF90aGlzLm1hc2tPcHRpb25zLFxuICAgICAgICBtYXNrID0gX3RoaXMkbWFza09wdGlvbnM0Lm1hc2ssXG4gICAgICAgIG1hc2tQbGFjZWhvbGRlciA9IF90aGlzJG1hc2tPcHRpb25zNC5tYXNrUGxhY2Vob2xkZXI7XG5cbiAgICBpZiAocG9zaXRpb24gPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgaXNBbGxvd2VkID0gX3RoaXMuaXNDaGFyYWN0ZXJBbGxvd2VkQXRQb3NpdGlvbihjaGFyYWN0ZXIsIHBvc2l0aW9uKTtcblxuICAgIHZhciBpc0VkaXRhYmxlID0gX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKHBvc2l0aW9uKTtcblxuICAgIHZhciBuZXh0RWRpdGFibGVQb3NpdGlvbiA9IF90aGlzLmdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICB2YXIgaXNOZXh0UGxhY2Vob2xkZXIgPSBtYXNrUGxhY2Vob2xkZXIgJiYgbmV4dEVkaXRhYmxlUG9zaXRpb24gPyBjaGFyYWN0ZXIgPT09IG1hc2tQbGFjZWhvbGRlcltuZXh0RWRpdGFibGVQb3NpdGlvbl0gOiBudWxsO1xuICAgIHZhciB2YWx1ZUJlZm9yZSA9IHZhbHVlLnNsaWNlKDAsIHBvc2l0aW9uKTtcblxuICAgIGlmIChpc0FsbG93ZWQgfHwgIWlzRWRpdGFibGUpIHtcbiAgICAgIHZhciBpbnNlcnRlZENoYXJhY3RlciA9IGlzQWxsb3dlZCA/IGNoYXJhY3RlciA6IG1hc2tbcG9zaXRpb25dO1xuICAgICAgdmFsdWUgPSB2YWx1ZUJlZm9yZSArIGluc2VydGVkQ2hhcmFjdGVyO1xuICAgIH1cblxuICAgIGlmICghaXNBbGxvd2VkICYmICFpc0VkaXRhYmxlICYmICFpc05leHRQbGFjZWhvbGRlcikge1xuICAgICAgdmFsdWUgPSBfdGhpcy5pbnNlcnRDaGFyYWN0ZXJBdFBvc2l0aW9uKHZhbHVlLCBjaGFyYWN0ZXIsIHBvc2l0aW9uICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIHRoaXMuaW5zZXJ0U3RyaW5nQXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RyaW5nLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpcyRtYXNrT3B0aW9uczUgPSBfdGhpcy5tYXNrT3B0aW9ucyxcbiAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zNS5tYXNrLFxuICAgICAgICBtYXNrUGxhY2Vob2xkZXIgPSBfdGhpcyRtYXNrT3B0aW9uczUubWFza1BsYWNlaG9sZGVyO1xuXG4gICAgaWYgKCFzdHJpbmcgfHwgcG9zaXRpb24gPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IHN0cmluZy5zcGxpdChcIlwiKTtcbiAgICB2YXIgaXNGaXhlZExlbmd0aCA9IF90aGlzLmlzVmFsdWVGaWxsZWQodmFsdWUpIHx8ICEhbWFza1BsYWNlaG9sZGVyO1xuICAgIHZhciB2YWx1ZUFmdGVyID0gdmFsdWUuc2xpY2UocG9zaXRpb24pO1xuICAgIHZhbHVlID0gY2hhcmFjdGVycy5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbnNlcnRDaGFyYWN0ZXJBdFBvc2l0aW9uKHZhbHVlLCBjaGFyYWN0ZXIsIHZhbHVlLmxlbmd0aCk7XG4gICAgfSwgdmFsdWUuc2xpY2UoMCwgcG9zaXRpb24pKTtcblxuICAgIGlmIChpc0ZpeGVkTGVuZ3RoKSB7XG4gICAgICB2YWx1ZSArPSB2YWx1ZUFmdGVyLnNsaWNlKHZhbHVlLmxlbmd0aCAtIHBvc2l0aW9uKTtcbiAgICB9IGVsc2UgaWYgKF90aGlzLmlzVmFsdWVGaWxsZWQodmFsdWUpKSB7XG4gICAgICB2YWx1ZSArPSBtYXNrLnNsaWNlKHZhbHVlLmxlbmd0aCkuam9pbihcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVkaXRhYmxlQ2hhcmFjdGVyc0FmdGVyID0gdmFsdWVBZnRlci5zcGxpdChcIlwiKS5maWx0ZXIoZnVuY3Rpb24gKGNoYXJhY3RlciwgaSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKHBvc2l0aW9uICsgaSk7XG4gICAgICB9KTtcbiAgICAgIHZhbHVlID0gZWRpdGFibGVDaGFyYWN0ZXJzQWZ0ZXIucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gICAgICAgIHZhciBuZXh0RWRpdGFibGVQb3NpdGlvbiA9IF90aGlzLmdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbih2YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmIChuZXh0RWRpdGFibGVQb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKHZhbHVlLmxlbmd0aCkpIHtcbiAgICAgICAgICB2YWx1ZSArPSBtYXNrLnNsaWNlKHZhbHVlLmxlbmd0aCwgbmV4dEVkaXRhYmxlUG9zaXRpb24pLmpvaW4oXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuaW5zZXJ0Q2hhcmFjdGVyQXRQb3NpdGlvbih2YWx1ZSwgY2hhcmFjdGVyLCB2YWx1ZS5sZW5ndGgpO1xuICAgICAgfSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICB0aGlzLnByb2Nlc3NDaGFuZ2UgPSBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBwcmV2aW91c1N0YXRlKSB7XG4gICAgdmFyIF90aGlzJG1hc2tPcHRpb25zNiA9IF90aGlzLm1hc2tPcHRpb25zLFxuICAgICAgICBtYXNrID0gX3RoaXMkbWFza09wdGlvbnM2Lm1hc2ssXG4gICAgICAgIHByZWZpeCA9IF90aGlzJG1hc2tPcHRpb25zNi5wcmVmaXgsXG4gICAgICAgIGxhc3RFZGl0YWJsZVBvc2l0aW9uID0gX3RoaXMkbWFza09wdGlvbnM2Lmxhc3RFZGl0YWJsZVBvc2l0aW9uO1xuICAgIHZhciB2YWx1ZSA9IGN1cnJlbnRTdGF0ZS52YWx1ZSxcbiAgICAgICAgc2VsZWN0aW9uID0gY3VycmVudFN0YXRlLnNlbGVjdGlvbjtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzU3RhdGUudmFsdWU7XG4gICAgdmFyIHByZXZpb3VzU2VsZWN0aW9uID0gcHJldmlvdXNTdGF0ZS5zZWxlY3Rpb247XG4gICAgdmFyIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgdmFyIGVudGVyZWRTdHJpbmcgPSBcIlwiO1xuICAgIHZhciBmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoID0gMDtcbiAgICB2YXIgcmVtb3ZlZExlbmd0aCA9IDA7XG4gICAgdmFyIGN1cnNvclBvc2l0aW9uID0gTWF0aC5taW4ocHJldmlvdXNTZWxlY3Rpb24uc3RhcnQsIHNlbGVjdGlvbi5zdGFydCk7XG5cbiAgICBpZiAoc2VsZWN0aW9uLmVuZCA+IHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0KSB7XG4gICAgICBlbnRlcmVkU3RyaW5nID0gbmV3VmFsdWUuc2xpY2UocHJldmlvdXNTZWxlY3Rpb24uc3RhcnQsIHNlbGVjdGlvbi5lbmQpO1xuICAgICAgZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCA9IF90aGlzLmdldFN0cmluZ0ZpbGxpbmdMZW5ndGhBdFBvc2l0aW9uKGVudGVyZWRTdHJpbmcsIGN1cnNvclBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoKSB7XG4gICAgICAgIHJlbW92ZWRMZW5ndGggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlZExlbmd0aCA9IHByZXZpb3VzU2VsZWN0aW9uLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLmxlbmd0aCA8IHByZXZpb3VzVmFsdWUubGVuZ3RoKSB7XG4gICAgICByZW1vdmVkTGVuZ3RoID0gcHJldmlvdXNWYWx1ZS5sZW5ndGggLSBuZXdWYWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlO1xuXG4gICAgaWYgKHJlbW92ZWRMZW5ndGgpIHtcbiAgICAgIGlmIChyZW1vdmVkTGVuZ3RoID09PSAxICYmICFwcmV2aW91c1NlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGRlbGV0ZUZyb21SaWdodCA9IHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0ID09PSBzZWxlY3Rpb24uc3RhcnQ7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uID0gZGVsZXRlRnJvbVJpZ2h0ID8gX3RoaXMuZ2V0UmlnaHRFZGl0YWJsZVBvc2l0aW9uKHNlbGVjdGlvbi5zdGFydCkgOiBfdGhpcy5nZXRMZWZ0RWRpdGFibGVQb3NpdGlvbihzZWxlY3Rpb24uc3RhcnQpO1xuICAgICAgfVxuXG4gICAgICBuZXdWYWx1ZSA9IF90aGlzLmNsZWFyUmFuZ2UobmV3VmFsdWUsIGN1cnNvclBvc2l0aW9uLCByZW1vdmVkTGVuZ3RoKTtcbiAgICB9XG5cbiAgICBuZXdWYWx1ZSA9IF90aGlzLmluc2VydFN0cmluZ0F0UG9zaXRpb24obmV3VmFsdWUsIGVudGVyZWRTdHJpbmcsIGN1cnNvclBvc2l0aW9uKTtcbiAgICBjdXJzb3JQb3NpdGlvbiArPSBmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoO1xuXG4gICAgaWYgKGN1cnNvclBvc2l0aW9uID49IG1hc2subGVuZ3RoKSB7XG4gICAgICBjdXJzb3JQb3NpdGlvbiA9IG1hc2subGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoY3Vyc29yUG9zaXRpb24gPCBwcmVmaXgubGVuZ3RoICYmICFmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoKSB7XG4gICAgICBjdXJzb3JQb3NpdGlvbiA9IHByZWZpeC5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChjdXJzb3JQb3NpdGlvbiA+PSBwcmVmaXgubGVuZ3RoICYmIGN1cnNvclBvc2l0aW9uIDwgbGFzdEVkaXRhYmxlUG9zaXRpb24gJiYgZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCkge1xuICAgICAgY3Vyc29yUG9zaXRpb24gPSBfdGhpcy5nZXRSaWdodEVkaXRhYmxlUG9zaXRpb24oY3Vyc29yUG9zaXRpb24pO1xuICAgIH1cblxuICAgIG5ld1ZhbHVlID0gX3RoaXMuZm9ybWF0VmFsdWUobmV3VmFsdWUpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICBlbnRlcmVkU3RyaW5nOiBlbnRlcmVkU3RyaW5nLFxuICAgICAgc2VsZWN0aW9uOiB7XG4gICAgICAgIHN0YXJ0OiBjdXJzb3JQb3NpdGlvbixcbiAgICAgICAgZW5kOiBjdXJzb3JQb3NpdGlvblxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdGhpcy5tYXNrT3B0aW9ucyA9IHBhcnNlTWFzayhvcHRpb25zKTtcbn07XG5cbnZhciBJbnB1dE1hc2tDaGlsZHJlbldyYXBwZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5wdXRNYXNrQ2hpbGRyZW5XcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnB1dE1hc2tDaGlsZHJlbldyYXBwZXIoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IElucHV0TWFza0NoaWxkcmVuV3JhcHBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gSW5wdXRNYXNrQ2hpbGRyZW5XcmFwcGVyO1xufShSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQpO1xuXG52YXIgSW5wdXRNYXNrID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dE1hc2socHJvcHMsIGZvcndhcmRlZFJlZikge1xuICB2YXIgYWx3YXlzU2hvd01hc2sgPSBwcm9wcy5hbHdheXNTaG93TWFzayxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBtYXNrID0gcHJvcHMubWFzayxcbiAgICAgIG1hc2tQbGFjZWhvbGRlciA9IHByb3BzLm1hc2tQbGFjZWhvbGRlcixcbiAgICAgIGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlID0gcHJvcHMuYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2UsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiYWx3YXlzU2hvd01hc2tcIiwgXCJjaGlsZHJlblwiLCBcIm1hc2tcIiwgXCJtYXNrUGxhY2Vob2xkZXJcIiwgXCJiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZVwiXSk7XG5cbiAgdmFsaWRhdGVNYXhMZW5ndGgocHJvcHMpO1xuICB2YWxpZGF0ZU1hc2tQbGFjZWhvbGRlcihwcm9wcyk7XG4gIHZhciBtYXNrVXRpbHMgPSBuZXcgTWFza1V0aWxzKHtcbiAgICBtYXNrOiBtYXNrLFxuICAgIG1hc2tQbGFjZWhvbGRlcjogbWFza1BsYWNlaG9sZGVyXG4gIH0pO1xuICB2YXIgaXNNYXNrZWQgPSAhIW1hc2s7XG4gIHZhciBpc0VkaXRhYmxlID0gIXJlc3RQcm9wcy5kaXNhYmxlZCAmJiAhcmVzdFByb3BzLnJlYWRPbmx5O1xuICB2YXIgaXNDb250cm9sbGVkID0gcHJvcHMudmFsdWUgIT09IG51bGwgJiYgcHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzSXNNYXNrZWQgPSB1c2VQcmV2aW91cyhpc01hc2tlZCk7XG4gIHZhciBpbml0aWFsVmFsdWUgPSB0b1N0cmluZygoaXNDb250cm9sbGVkID8gcHJvcHMudmFsdWUgOiBwcm9wcy5kZWZhdWx0VmFsdWUpIHx8IFwiXCIpO1xuXG4gIHZhciBfdXNlSW5wdXRTdGF0ZSA9IHVzZUlucHV0U3RhdGUoaW5pdGlhbFZhbHVlLCBpc01hc2tlZCksXG4gICAgICBpbnB1dFJlZiA9IF91c2VJbnB1dFN0YXRlLmlucHV0UmVmLFxuICAgICAgZ2V0SW5wdXRTdGF0ZSA9IF91c2VJbnB1dFN0YXRlLmdldElucHV0U3RhdGUsXG4gICAgICBzZXRJbnB1dFN0YXRlID0gX3VzZUlucHV0U3RhdGUuc2V0SW5wdXRTdGF0ZSxcbiAgICAgIGdldExhc3RJbnB1dFN0YXRlID0gX3VzZUlucHV0U3RhdGUuZ2V0TGFzdElucHV0U3RhdGU7XG5cbiAgdmFyIGdldElucHV0RWxlbWVudCA9IHVzZUlucHV0RWxlbWVudChpbnB1dFJlZik7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgY3VycmVudFN0YXRlID0gZ2V0SW5wdXRTdGF0ZSgpO1xuICAgIHZhciBwcmV2aW91c1N0YXRlID0gZ2V0TGFzdElucHV0U3RhdGUoKTtcbiAgICB2YXIgbmV3SW5wdXRTdGF0ZSA9IG1hc2tVdGlscy5wcm9jZXNzQ2hhbmdlKGN1cnJlbnRTdGF0ZSwgcHJldmlvdXNTdGF0ZSk7XG5cbiAgICBpZiAoYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2UpIHtcbiAgICAgIG5ld0lucHV0U3RhdGUgPSBiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZSh7XG4gICAgICAgIGN1cnJlbnRTdGF0ZTogY3VycmVudFN0YXRlLFxuICAgICAgICBwcmV2aW91c1N0YXRlOiBwcmV2aW91c1N0YXRlLFxuICAgICAgICBuZXh0U3RhdGU6IG5ld0lucHV0U3RhdGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldElucHV0U3RhdGUobmV3SW5wdXRTdGF0ZSk7XG5cbiAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkZvY3VzKGV2ZW50KSB7XG4gICAgLy8gSWYgYXV0b0ZvY3VzIHByb3BlcnR5IGlzIHNldCwgZm9jdXMgZXZlbnQgZmlyZXMgYmVmb3JlIHRoZSByZWYgaGFuZGxlciBnZXRzIGNhbGxlZFxuICAgIGlucHV0UmVmLmN1cnJlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGdldElucHV0U3RhdGUoKS52YWx1ZTtcblxuICAgIGlmIChpc01hc2tlZCAmJiAhbWFza1V0aWxzLmlzVmFsdWVGaWxsZWQoY3VycmVudFZhbHVlKSkge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gbWFza1V0aWxzLmZvcm1hdFZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB2YXIgbmV3U2VsZWN0aW9uID0gbWFza1V0aWxzLmdldERlZmF1bHRTZWxlY3Rpb25Gb3JWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB2YXIgbmV3SW5wdXRTdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICBzZWxlY3Rpb246IG5ld1NlbGVjdGlvblxuICAgICAgfTtcblxuICAgICAgaWYgKGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlKSB7XG4gICAgICAgIG5ld0lucHV0U3RhdGUgPSBiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZSh7XG4gICAgICAgICAgY3VycmVudFN0YXRlOiBnZXRJbnB1dFN0YXRlKCksXG4gICAgICAgICAgbmV4dFN0YXRlOiBuZXdJbnB1dFN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld0lucHV0U3RhdGUudmFsdWU7XG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld0lucHV0U3RhdGUuc2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBzZXRJbnB1dFN0YXRlKG5ld0lucHV0U3RhdGUpO1xuXG4gICAgICBpZiAobmV3VmFsdWUgIT09IGN1cnJlbnRWYWx1ZSAmJiBwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9IC8vIENocm9tZSByZXNldHMgc2VsZWN0aW9uIGFmdGVyIGZvY3VzIGV2ZW50LFxuICAgICAgLy8gc28gd2Ugd2FudCB0byByZXN0b3JlIGl0IGxhdGVyXG5cblxuICAgICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRJbnB1dFN0YXRlKGdldExhc3RJbnB1dFN0YXRlKCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1cihldmVudCkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSBnZXRJbnB1dFN0YXRlKCkudmFsdWU7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IGdldExhc3RJbnB1dFN0YXRlKCkudmFsdWU7XG5cbiAgICBpZiAoaXNNYXNrZWQgJiYgIWFsd2F5c1Nob3dNYXNrICYmIG1hc2tVdGlscy5pc1ZhbHVlRW1wdHkobGFzdFZhbHVlKSkge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gXCJcIjtcbiAgICAgIHZhciBuZXdJbnB1dFN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgICAgIGVuZDogbnVsbFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2UpIHtcbiAgICAgICAgbmV3SW5wdXRTdGF0ZSA9IGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlKHtcbiAgICAgICAgICBjdXJyZW50U3RhdGU6IGdldElucHV0U3RhdGUoKSxcbiAgICAgICAgICBuZXh0U3RhdGU6IG5ld0lucHV0U3RhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1ZhbHVlID0gbmV3SW5wdXRTdGF0ZS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgc2V0SW5wdXRTdGF0ZShuZXdJbnB1dFN0YXRlKTtcblxuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjdXJyZW50VmFsdWUgJiYgcHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5vbkJsdXIpIHtcbiAgICAgIHByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9IC8vIFRpbnkgdW5pbnRlbnRpb25hbCBtb3VzZSBtb3ZlbWVudHMgY2FuIGJyZWFrIGN1cnNvclxuICAvLyBwb3NpdGlvbiBvbiBmb2N1cywgc28gd2UgaGF2ZSB0byByZXN0b3JlIGl0IGluIHRoYXQgY2FzZVxuICAvL1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrL2lzc3Vlcy8xMDhcblxuXG4gIGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG5cbiAgICB2YXIgX2dldElucHV0U3RhdGUgPSBnZXRJbnB1dFN0YXRlKCksXG4gICAgICAgIHZhbHVlID0gX2dldElucHV0U3RhdGUudmFsdWU7XG5cbiAgICB2YXIgaW5wdXREb2N1bWVudCA9IGdldEVsZW1lbnREb2N1bWVudChpbnB1dCk7XG5cbiAgICBpZiAoIWlzSW5wdXRGb2N1c2VkKGlucHV0KSAmJiAhbWFza1V0aWxzLmlzVmFsdWVGaWxsZWQodmFsdWUpKSB7XG4gICAgICB2YXIgbW91c2VEb3duWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB2YXIgbW91c2VEb3duWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICB2YXIgbW91c2VEb3duVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICB2YXIgbW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihtb3VzZVVwRXZlbnQpIHtcbiAgICAgICAgaW5wdXREb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICAgICAgaWYgKCFpc0lucHV0Rm9jdXNlZChpbnB1dCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnMobW91c2VVcEV2ZW50LmNsaWVudFggLSBtb3VzZURvd25YKTtcbiAgICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKG1vdXNlVXBFdmVudC5jbGllbnRZIC0gbW91c2VEb3duWSk7XG4gICAgICAgIHZhciBheGlzRGVsdGEgPSBNYXRoLm1heChkZWx0YVgsIGRlbHRhWSk7XG4gICAgICAgIHZhciB0aW1lRGVsdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG1vdXNlRG93blRpbWU7XG5cbiAgICAgICAgaWYgKGF4aXNEZWx0YSA8PSAxMCAmJiB0aW1lRGVsdGEgPD0gMjAwIHx8IGF4aXNEZWx0YSA8PSA1ICYmIHRpbWVEZWx0YSA8PSAzMDApIHtcbiAgICAgICAgICB2YXIgX2xhc3RTdGF0ZSA9IGdldExhc3RJbnB1dFN0YXRlKCk7XG5cbiAgICAgICAgICB2YXIgbmV3U2VsZWN0aW9uID0gbWFza1V0aWxzLmdldERlZmF1bHRTZWxlY3Rpb25Gb3JWYWx1ZShfbGFzdFN0YXRlLnZhbHVlKTtcblxuICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IF9leHRlbmRzKHt9LCBfbGFzdFN0YXRlLCB7XG4gICAgICAgICAgICBzZWxlY3Rpb246IG5ld1NlbGVjdGlvblxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2V0SW5wdXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlucHV0RG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcEhhbmRsZXIpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5vbk1vdXNlRG93bikge1xuICAgICAgcHJvcHMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgfSAvLyBGb3IgY29udHJvbGxlZCBpbnB1dHMgd2Ugd2FudCB0byBwcm92aWRlIHByb3Blcmx5IGZvcm1hdHRlZFxuICAvLyB2YWx1ZSBwcm9wXG5cblxuICBpZiAoaXNNYXNrZWQgJiYgaXNDb250cm9sbGVkKSB7XG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgdmFyIGlzRm9jdXNlZCA9IGlucHV0ICYmIGlzSW5wdXRGb2N1c2VkKGlucHV0KTtcbiAgICB2YXIgbmV3VmFsdWUgPSBpc0ZvY3VzZWQgfHwgYWx3YXlzU2hvd01hc2sgfHwgcHJvcHMudmFsdWUgPyBtYXNrVXRpbHMuZm9ybWF0VmFsdWUocHJvcHMudmFsdWUpIDogcHJvcHMudmFsdWU7XG5cbiAgICBpZiAoYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2UpIHtcbiAgICAgIG5ld1ZhbHVlID0gYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2Uoe1xuICAgICAgICBuZXh0U3RhdGU6IHtcbiAgICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgc2VsZWN0aW9uOiB7XG4gICAgICAgICAgICBzdGFydDogbnVsbCxcbiAgICAgICAgICAgIGVuZDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0SW5wdXRTdGF0ZShfZXh0ZW5kcyh7fSwgZ2V0TGFzdElucHV0U3RhdGUoKSwge1xuICAgICAgdmFsdWU6IG5ld1ZhbHVlXG4gICAgfSkpO1xuICB9XG5cbiAgdmFyIGxhc3RTdGF0ZSA9IGdldExhc3RJbnB1dFN0YXRlKCk7XG4gIHZhciBsYXN0U2VsZWN0aW9uID0gbGFzdFN0YXRlLnNlbGVjdGlvbjtcbiAgdmFyIGxhc3RWYWx1ZSA9IGxhc3RTdGF0ZS52YWx1ZTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzTWFza2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgdmFyIGlzRm9jdXNlZCA9IGlzSW5wdXRGb2N1c2VkKGlucHV0KTtcbiAgICB2YXIgcHJldmlvdXNTZWxlY3Rpb24gPSBsYXN0U2VsZWN0aW9uO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSBnZXRJbnB1dFN0YXRlKCk7XG5cbiAgICB2YXIgbmV3SW5wdXRTdGF0ZSA9IF9leHRlbmRzKHt9LCBjdXJyZW50U3RhdGUpOyAvLyBVcGRhdGUgdmFsdWUgZm9yIHVuY29udHJvbGxlZCBpbnB1dHMgdG8gbWFrZSBzdXJlXG4gICAgLy8gaXQncyBhbHdheXMgaW4gc3luYyB3aXRoIG1hc2sgcHJvcHNcblxuXG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50U3RhdGUudmFsdWU7XG4gICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBtYXNrVXRpbHMuZm9ybWF0VmFsdWUoY3VycmVudFZhbHVlKTtcbiAgICAgIHZhciBpc1ZhbHVlRW1wdHkgPSBtYXNrVXRpbHMuaXNWYWx1ZUVtcHR5KGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIHZhciBzaG91bGRGb3JtYXRWYWx1ZSA9ICFpc1ZhbHVlRW1wdHkgfHwgaXNGb2N1c2VkIHx8IGFsd2F5c1Nob3dNYXNrO1xuXG4gICAgICBpZiAoc2hvdWxkRm9ybWF0VmFsdWUpIHtcbiAgICAgICAgbmV3SW5wdXRTdGF0ZS52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChpc1ZhbHVlRW1wdHkgJiYgIWlzRm9jdXNlZCkge1xuICAgICAgICBuZXdJbnB1dFN0YXRlLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNGb2N1c2VkICYmICFwcmV2aW91c0lzTWFza2VkKSB7XG4gICAgICAvLyBBZGp1c3Qgc2VsZWN0aW9uIGlmIGlucHV0IGdvdCBtYXNrZWQgd2hpbGUgYmVpbmcgZm9jdXNlZFxuICAgICAgbmV3SW5wdXRTdGF0ZS5zZWxlY3Rpb24gPSBtYXNrVXRpbHMuZ2V0RGVmYXVsdFNlbGVjdGlvbkZvclZhbHVlKG5ld0lucHV0U3RhdGUudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNDb250cm9sbGVkICYmIGlzRm9jdXNlZCAmJiBwcmV2aW91c1NlbGVjdGlvbikge1xuICAgICAgLy8gUmVzdG9yZSBjdXJzb3IgcG9zaXRpb24gaWYgdmFsdWUgaGFzIGNoYW5nZWQgb3V0c2lkZSBjaGFuZ2UgZXZlbnRcbiAgICAgIGlmIChwcmV2aW91c1NlbGVjdGlvbi5zdGFydCAhPT0gbnVsbCAmJiBwcmV2aW91c1NlbGVjdGlvbi5lbmQgIT09IG51bGwpIHtcbiAgICAgICAgbmV3SW5wdXRTdGF0ZS5zZWxlY3Rpb24gPSBwcmV2aW91c1NlbGVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2UpIHtcbiAgICAgIG5ld0lucHV0U3RhdGUgPSBiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZSh7XG4gICAgICAgIGN1cnJlbnRTdGF0ZTogY3VycmVudFN0YXRlLFxuICAgICAgICBuZXh0U3RhdGU6IG5ld0lucHV0U3RhdGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldElucHV0U3RhdGUobmV3SW5wdXRTdGF0ZSk7XG4gIH0pO1xuXG4gIHZhciBpbnB1dFByb3BzID0gX2V4dGVuZHMoe30sIHJlc3RQcm9wcywge1xuICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgb25CbHVyOiBvbkJsdXIsXG4gICAgb25DaGFuZ2U6IGlzTWFza2VkICYmIGlzRWRpdGFibGUgPyBvbkNoYW5nZSA6IHByb3BzLm9uQ2hhbmdlLFxuICAgIG9uTW91c2VEb3duOiBpc01hc2tlZCAmJiBpc0VkaXRhYmxlID8gb25Nb3VzZURvd24gOiBwcm9wcy5vbk1vdXNlRG93bixcbiAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50ID0gcmVhY3REb20uZmluZERPTU5vZGUoX3JlZik7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKGZvcndhcmRlZFJlZikpIHtcbiAgICAgICAgZm9yd2FyZGVkUmVmKF9yZWYpO1xuICAgICAgfSBlbHNlIGlmIChmb3J3YXJkZWRSZWYgIT09IG51bGwgJiYgdHlwZW9mIGZvcndhcmRlZFJlZiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3J3YXJkZWRSZWYuY3VycmVudCA9IF9yZWY7XG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZTogaXNNYXNrZWQgJiYgaXNDb250cm9sbGVkID8gbGFzdFZhbHVlIDogcHJvcHMudmFsdWVcbiAgfSk7XG5cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgdmFsaWRhdGVDaGlsZHJlbihwcm9wcywgY2hpbGRyZW4pOyAvLyBXZSB3cmFwIGNoaWxkcmVuIGludG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYmUgYWJsZSB0byBmaW5kXG4gICAgLy8gdGhlaXIgaW5wdXQgZWxlbWVudCB1c2luZyBmaW5kRE9NTm9kZVxuXG4gICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSW5wdXRNYXNrQ2hpbGRyZW5XcmFwcGVyLCBpbnB1dFByb3BzLCBjaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIGlucHV0UHJvcHMpO1xufSk7XG5JbnB1dE1hc2suZGlzcGxheU5hbWUgPSBcIklucHV0TWFza1wiO1xuSW5wdXRNYXNrLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx3YXlzU2hvd01hc2s6IGZhbHNlLFxuICBtYXNrUGxhY2Vob2xkZXI6IFwiX1wiXG59O1xuSW5wdXRNYXNrLnByb3BUeXBlcyA9IHtcbiAgYWx3YXlzU2hvd01hc2s6IFByb3BUeXBlcy5ib29sLFxuICBiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbWFzazogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVnRXhwKV0pKV0pLFxuICBtYXNrUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dE1hc2s7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXltZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgICAgICB3aWR0aDogOTgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZChJbnB1dE1hc2spYFxyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuXHJcbiAgICAgICAgOnJlcXVpcmVkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjpyZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6aW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dHMgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgICAgICA6cmVxdWlyZWQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOnJlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDppbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0QmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuIiwiaW1wb3J0IHtJbnB1dCwgSW5wdXRCbG9ja30gZnJvbSAnLi9Gb3JtSW5wdXRTdHlsZWQnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBGb3JtSW5wdXQgPSAocHJvcHMpID0+IHsgXHJcbiAgICAvL9C00LvRjyDQuNC30LHQtdC20LDQvdC40Y8g0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjRjyB1c2VMYXlvdXRFZmZlY3Qg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsFxyXG4gICAgY29uc3QgW3Nob3dDaGlsZCwgc2V0U2hvd0NoaWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IHNldFNob3dDaGlsZCh0cnVlKSB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWx1ZShlKSB7XHJcbiAgICAgICAgaWYodmFsdWUgPT09IGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfWVsc2UgaWYocHJvcHMucmVnRXhwLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRWYWwgPSBwcm9wcy52YWxpZGF0ZU1ldGhvZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIHByb3BzLnN0YXRlQ2FsbGJhY2sodmFsaWRWYWwpO1xyXG4gICAgICAgICAgICAvLyBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIHNldFZhbGlkKHRydWUpOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBpbnZhbGlkVmFsID0gcHJvcHMudmFsaWRhdGVNZXRob2QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBwcm9wcy5zdGF0ZUNhbGxiYWNrKGludmFsaWRWYWwpO1xyXG4gICAgICAgICAgICAvLyBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFZhbGlkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzaG93Q2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfWVsc2UgcmV0dXJuKFxyXG4gICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaWR9Pntwcm9wcy5sYWJlbE5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgbWFzaz17cHJvcHMubWFzayB8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZUlucHV0VmFsdWUoZSl9PlxyXG4gICAgICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2Pnt2YWxpZCA/IHByb3BzLnZhbGlkYXRpb25FdmVudHMudmFsaWQudmFsdWUgOiBwcm9wcy52YWxpZGF0aW9uRXZlbnRzLmludmFsaWQudmFsdWV9PC9kaXY+XHJcbiAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtSW5wdXQiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQoSW5wdXRNYXNrKWBcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0QmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQge1BheW1lbnRDb250YWluZXIsIElucHV0QmxvY2ssSW5wdXR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5bWVudFBhZ2VTdHlsZWQnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQvRm9ybUlucHV0J1xyXG5cclxuY29uc3QgUGF5bWVudFBhZ2UgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICAvL9C00L7QsdCw0LLQuNGC0Ywg0LvQvtCz0LjRh9C10YHQutC40LUg0YHQvtGB0YLQvtGP0L3QuNGPIHZhbGlkcGhvbmUgdmFsaWRwYXltZW50INGH0YLQvtCx0Ysg0LLQutC70Y7Rh9Cw0YLRjCDQstGL0LrQu9GO0YfQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBob25lLCBzZXRWYWxpZFBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWxpZFBheW1lbnQsIHNldFZhbGlkUGF5bWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRGb3JtLCBzZXRWYWxpZEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgcGF5bWVudDogJycsXHJcbiAgICB9KVxyXG4gICAgLy/RgdC00LXQu9Cw0YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaChpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtKGlucHV0TmFtZSwgdmFsdWUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybShpbnB1dE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25FcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQaG9uZSA9IHZhbGlkUGhvbmU7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRQYXltZW50ID0gdmFsaWRQYXltZW50O1xyXG4gICAgICAgIGNvbnN0IHBob25lUmVnZXhwID0gL1xcKzdcXHM/W1xcKF17MCwxfTlbMC05XXsyfVtcXCldWy1dezAsMX1cXHM/XFxkezN9Wy1dezAsMX1cXGR7Mn1bLV17MCwxfVxcZHsyfS9cclxuXHJcbiAgICAgICAgc3dpdGNoKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoNiwgMCwgJyknLCAnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbC5qb2luKCcnKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbLi4udmFsXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoMTEsIDAsICctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUodmFsLmpvaW4oJycpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFsuLi52YWxdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZSgxNCwgMCwgJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWwuam9pbignJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZSgwLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob25lKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGhvbmVSZWdleHAudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J/RgNC40LrQvtC7LCDRgNCw0LHQvtGC0LDQtdGCJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9GA0LjQutC+0LssINGA0LXQsNC70YzQvdC+INGA0LDQsdC+0YLQsNC10YInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwYXltZW50JzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzRmlyc3RWYWx1ZSgpIHtcclxuICAgICAgICBpZihwaG9uZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRQaG9uZSgnKzcoJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBob25lLCBwYXltZW50KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGF5bWVudENvbnRhaW5lcj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0L/Qu9Cw0YLQsCB7ZGF0YS5vcGVyYXRvck5hbWV9PC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPtCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzcoOTk5KS05OTktOTktOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVVzZXJJbnB1dChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gcGFzc0ZpcnN0VmFsdWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4gcGFzc0ZpcnN0VmFsdWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgtGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50XCI+0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0L7RgiAxINC00L4gMTAwMNGAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVVc2VySW5wdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YLRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIG9uQ2xpY2s9eyhlKT0+IHtzZW5kRGF0YShlKX19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGF5bWVudENvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8aDE+e2RhdGEuZXJyTWVzc2FnZX08L2gxPlxyXG4gICAgfVxyXG59XHJcblxyXG5QYXltZW50UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcGVyYXRvcnMvJHtjdHgucXVlcnkucGF5T3BlcmF0b3JJRH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRQYWdlXHJcblxyXG5jb25zdCB2YWxpZGF0aW9uUGhvbmVFdmVudHMgPSB7XHJcbiAgICB2YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQtdGA0L3QviEhIScsIFxyXG4gICAgICAgIGJvb2w6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUg0LTQviDQutC+0L3RhtCwJyxcclxuICAgICAgICBib29sOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uUGF5bWVudEV2ZW50cyA9IHtcclxuICAgIHZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktC10YDQvdC+ISEhJywgXHJcbiAgICAgICAgYm9vbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0L7RgiAxINC00L4gMTAwMCDRgNGD0LHQu9C10LknLFxyXG4gICAgICAgIGJvb2w6IGZhbHNlXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9