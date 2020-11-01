webpackHotUpdate_N_E("pages/pay/[payOperatorID]",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PaymentPageStyled */ "./src/components/PaymentPageStyled.js");
/* harmony import */ var _components_inputComponent_FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/inputComponent/FormInput */ "./src/components/inputComponent/FormInput.js");



var _this = undefined,
    _jsxFileName = "C:\\GitHub\\brave_test_task\\src\\pages\\pay\\[payOperatorID].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var PaymentPage = function PaymentPage(_ref) {
  _s();

  var data = _ref.data;

  //добавить логические состояния validphone validpayment чтобы включать выключать кнопку
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      phone = _useState[0],
      setPhone = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPhone = _useState2[0],
      setValidPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      payment = _useState3[0],
      setPayment = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validPayment = _useState4[0],
      setValidPayment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validForm = _useState5[0],
      setValidForm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
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
        setPhone(value);
        validateForm(inputName, phone);
        break;

      case 'payment':
        setPayment(value);
        validateForm(inputName, payment);
        break;

      default:
        break;
    }
  }

  function validateForm(fieldName, value) {
    var validationErrors = errors;
    var is;
    console.log(fieldName, value);
  }

  function sendData(e) {
    console.log(phone, payment);
    e.preventDefault();
  }

  if (data && data.id) {
    return __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["PaymentContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 ", data.operatorName), __jsx("form", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx("input", {
      id: "phone",
      name: "phone",
      value: phone,
      type: "tel",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A")), __jsx(_components_PaymentPageStyled__WEBPACK_IMPORTED_MODULE_3__["InputBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"), __jsx("input", {
      id: "payment",
      name: "payment",
      value: payment,
      type: "text",
      onChange: function onChange(e) {
        return handleUserInput(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
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
        lineNumber: 74,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3JlYWN0LWlucHV0LW1hc2suZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbnB1dENvbXBvbmVudC9Gb3JtSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dFN0eWxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BheS9bcGF5T3BlcmF0b3JJRF0uanMiXSwibmFtZXMiOlsiUGF5bWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIklucHV0IiwiSW5wdXRNYXNrIiwiSW5wdXRzIiwiaW5wdXQiLCJJbnB1dEJsb2NrIiwiRm9ybUlucHV0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dDaGlsZCIsInNldFNob3dDaGlsZCIsInVzZUVmZmVjdCIsInZhbGlkIiwic2V0VmFsaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlSW5wdXRWYWx1ZSIsImUiLCJ0YXJnZXQiLCJyZWdFeHAiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImlkIiwibGFiZWxOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFzayIsInZhbGlkYXRpb25FdmVudHMiLCJpbnZhbGlkIiwiUGF5bWVudFBhZ2UiLCJkYXRhIiwicGhvbmUiLCJzZXRQaG9uZSIsInZhbGlkUGhvbmUiLCJzZXRWYWxpZFBob25lIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJ2YWxpZFBheW1lbnQiLCJzZXRWYWxpZFBheW1lbnQiLCJ2YWxpZEZvcm0iLCJzZXRWYWxpZEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVVc2VySW5wdXQiLCJpbnB1dE5hbWUiLCJuYW1lIiwidmFsaWRhdGVGb3JtIiwiZmllbGROYW1lIiwidmFsaWRhdGlvbkVycm9ycyIsImlzIiwic2VuZERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZXJhdG9yTmFtZSIsImVyck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicGF5T3BlcmF0b3JJRCIsInJlcyIsImpzb24iLCJ2YWxpZGF0aW9uUGhvbmVFdmVudHMiLCJib29sIiwidmFsaWRhdGlvblBheW1lbnRFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseUJBQXlCLEVBQUU7QUFDckU7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxrREFBVTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDLDJCQUEyQixtQkFBTyxDQUFDLHlGQUE0QjtBQUMvRCxxQkFBcUIsbUJBQU8sQ0FBQyxxRUFBa0I7O0FBRS9DO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2REFBNkQ7O0FBRTdEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsS0FBcUMsK01BQStNLFNBQU07QUFDNVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMkcsS0FBcUMsMk1BQTJNLFNBQWdCO0FBQzNXO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQixLQUFxQyx3SkFBd0osU0FBZ0I7QUFDeE87O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLG1CQUFtQjs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FGSixDQURKO0FBK0JILEdBaENELE1BZ0NPO0FBQ0gsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtjLElBQUksQ0FBQ3VCLFVBQVYsQ0FBUDtBQUNIO0FBQ0osQ0E1RUQ7O0dBQU14QixXOztLQUFBQSxXOztBQThFTkEsV0FBVyxDQUFDeUIsZUFBWjtBQUFBLCtMQUE4QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNSQyxLQUFLLCtDQUF3Q0QsR0FBRyxDQUFDRSxLQUFKLENBQVVDLGFBQWxELEVBREc7O0FBQUE7QUFDcEJDLGVBRG9CO0FBQUE7QUFBQSxtQkFFUEEsR0FBRyxDQUFDQyxJQUFKLEVBRk87O0FBQUE7QUFFcEI5QixnQkFGb0I7QUFBQSw2Q0FHbkI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQUhtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZUQsMEVBQWY7QUFFQSxJQUFNZ0MscUJBQXFCLEdBQUc7QUFDMUJsRCxPQUFLLEVBQUU7QUFDSEUsU0FBSyxFQUFFLFVBREo7QUFFSGlELFFBQUksRUFBRTtBQUZILEdBRG1CO0FBSzFCbEMsU0FBTyxFQUFFO0FBQ0xmLFNBQUssRUFBRSx5QkFERjtBQUVMaUQsUUFBSSxFQUFFO0FBRkQ7QUFMaUIsQ0FBOUI7QUFXQSxJQUFNQyx1QkFBdUIsR0FBRztBQUM1QnBELE9BQUssRUFBRTtBQUNIRSxTQUFLLEVBQUUsVUFESjtBQUVIaUQsUUFBSSxFQUFFO0FBRkgsR0FEcUI7QUFLNUJsQyxTQUFPLEVBQUU7QUFDTGYsU0FBSyxFQUFFLG1DQURGO0FBRUxpRCxRQUFJLEVBQUU7QUFGRDtBQUxtQixDQUFoQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXkvW3BheU9wZXJhdG9ySURdLmQ3NTdmZjAzZTVkZWMwNzY4YmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYi9yZWFjdC1pbnB1dC1tYXNrLnByb2R1Y3Rpb24ubWluLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9saWIvcmVhY3QtaW5wdXQtbWFzay5kZXZlbG9wbWVudC5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RfX2RlZmF1bHQgPSBfaW50ZXJvcERlZmF1bHQoUmVhY3QpO1xudmFyIHJlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3Byb3AtdHlwZXMnKSk7XG52YXIgaW52YXJpYW50ID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2ludmFyaWFudCcpKTtcbnZhciB3YXJuaW5nID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3dhcm5pbmcnKSk7XG5cbmZ1bmN0aW9uIF9kZWZhdWx0czIob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcblxuICBfZGVmYXVsdHMyKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGRlZmVyKGZuKSB7XG4gIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xufVxuZnVuY3Rpb24gY2FuY2VsRGVmZXIoZGVmZXJJZCkge1xuICBjYW5jZWxBbmltYXRpb25GcmFtZShkZWZlcklkKTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRTZWxlY3Rpb24oaW5wdXQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gc3RhcnQ7XG4gIH1cblxuICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbn1cbmZ1bmN0aW9uIGdldElucHV0U2VsZWN0aW9uKGlucHV0KSB7XG4gIHZhciBzdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICB2YXIgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBlbmQ6IGVuZCxcbiAgICBsZW5ndGg6IGVuZCAtIHN0YXJ0XG4gIH07XG59XG5mdW5jdGlvbiBpc0lucHV0Rm9jdXNlZChpbnB1dCkge1xuICB2YXIgaW5wdXREb2N1bWVudCA9IGlucHV0Lm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBpbnB1dERvY3VtZW50Lmhhc0ZvY3VzKCkgJiYgaW5wdXREb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnB1dDtcbn1cblxuLy8gRWxlbWVudCdzIHdpbmRvdyBtYXkgZGlmZmVyIGZyb20gdGhlIG9uZSB3aXRoaW4gUmVhY3QgaW5zdGFuY2Vcbi8vIGlmIGVsZW1lbnQgcmVuZGVyZWQgd2l0aGluIGlmcmFtZS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrL2lzc3Vlcy8xODJcbmZ1bmN0aW9uIGdldEVsZW1lbnREb2N1bWVudChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50V2luZG93KGVsZW1lbnQpIHtcbiAgdmFyIF9nZXRFbGVtZW50RG9jdW1lbnQ7XG5cbiAgcmV0dXJuIChfZ2V0RWxlbWVudERvY3VtZW50ID0gZ2V0RWxlbWVudERvY3VtZW50KGVsZW1lbnQpKSA9PSBudWxsID8gdm9pZCAwIDogX2dldEVsZW1lbnREb2N1bWVudC5kZWZhdWx0Vmlldztcbn1cbmZ1bmN0aW9uIGlzRE9NRWxlbWVudChlbGVtZW50KSB7XG4gIHZhciBlbGVtZW50V2luZG93ID0gZ2V0RWxlbWVudFdpbmRvdyhlbGVtZW50KTtcbiAgcmV0dXJuICEhZWxlbWVudFdpbmRvdyAmJiBlbGVtZW50IGluc3RhbmNlb2YgZWxlbWVudFdpbmRvdy5IVE1MRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gZmluZExhc3RJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciB4ID0gYXJyYXlbaV07XG5cbiAgICBpZiAocHJlZGljYXRlKHgsIGkpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiByZXBlYXQoc3RyaW5nLCBuKSB7XG4gIGlmIChuID09PSB2b2lkIDApIHtcbiAgICBuID0gMTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBcIlwiO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IHN0cmluZztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gXCJcIiArIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VJbnB1dEVsZW1lbnQoaW5wdXRSZWYpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnB1dFJlZi5jdXJyZW50O1xuICAgIHZhciBpc0RPTU5vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGlzRE9NRWxlbWVudChpbnB1dCk7IC8vIHdvcmthcm91bmQgZm9yIHJlYWN0LXRlc3QtcmVuZGVyZXJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrL2lzc3Vlcy8xNDdcblxuICAgIGlmICghaW5wdXQgfHwgIWlzRE9NTm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0Lm5vZGVOYW1lICE9PSBcIklOUFVUXCIpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIH1cblxuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJlYWN0LWlucHV0LW1hc2s6IGlucHV0Q29tcG9uZW50IGRvZXNuJ3QgY29udGFpbiBpbnB1dCBub2RlXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dDtcbiAgfSwgW2lucHV0UmVmXSk7XG59XG5cbmZ1bmN0aW9uIHVzZURlZmVyTG9vcChjYWxsYmFjaykge1xuICB2YXIgZGVmZXJJZFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHJ1bkxvb3AgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gSWYgdGhlcmUgYXJlIHNpbXVsYXRlZCBmb2N1cyBldmVudHMsIHJ1bkxvb3AgY291bGQgYmVcbiAgICAvLyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgd2l0aG91dCBibHVyIG9yIHJlLXJlbmRlclxuICAgIGlmIChkZWZlcklkUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIGRlZmVySWRSZWYuY3VycmVudCA9IGRlZmVyKGxvb3ApO1xuICAgIH1cblxuICAgIGxvb3AoKTtcbiAgfSwgW2NhbGxiYWNrXSk7XG4gIHZhciBzdG9wTG9vcCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxEZWZlcihkZWZlcklkUmVmLmN1cnJlbnQpO1xuICAgIGRlZmVySWRSZWYuY3VycmVudCA9IG51bGw7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGVmZXJJZFJlZi5jdXJyZW50KSB7XG4gICAgICBzdG9wTG9vcCgpO1xuICAgICAgcnVuTG9vcCgpO1xuICAgIH1cbiAgfSwgW3J1bkxvb3AsIHN0b3BMb29wXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChjYW5jZWxEZWZlciwgW10pO1xuICByZXR1cm4gW3J1bkxvb3AsIHN0b3BMb29wXTtcbn1cblxuZnVuY3Rpb24gdXNlU2VsZWN0aW9uKGlucHV0UmVmLCBpc01hc2tlZCkge1xuICB2YXIgc2VsZWN0aW9uUmVmID0gUmVhY3QudXNlUmVmKHtcbiAgICBzdGFydDogbnVsbCxcbiAgICBlbmQ6IG51bGxcbiAgfSk7XG4gIHZhciBnZXRJbnB1dEVsZW1lbnQgPSB1c2VJbnB1dEVsZW1lbnQoaW5wdXRSZWYpO1xuICB2YXIgZ2V0U2VsZWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgIHJldHVybiBnZXRJbnB1dFNlbGVjdGlvbihpbnB1dCk7XG4gIH0sIFtnZXRJbnB1dEVsZW1lbnRdKTtcbiAgdmFyIGdldExhc3RTZWxlY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvblJlZi5jdXJyZW50O1xuICB9LCBbXSk7XG4gIHZhciBzZXRTZWxlY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXRFbGVtZW50KCk7IC8vIERvbid0IGNoYW5nZSBzZWxlY3Rpb24gb24gdW5mb2N1c2VkIGlucHV0XG4gICAgLy8gYmVjYXVzZSBTYWZhcmkgc2V0cyBmb2N1cyBvbiBzZWxlY3Rpb24gY2hhbmdlICgjMTU0KVxuXG4gICAgaWYgKCFpbnB1dCB8fCAhaXNJbnB1dEZvY3VzZWQoaW5wdXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SW5wdXRTZWxlY3Rpb24oaW5wdXQsIHNlbGVjdGlvbi5zdGFydCwgc2VsZWN0aW9uLmVuZCk7IC8vIFVzZSBhY3R1YWwgc2VsZWN0aW9uIGluIGNhc2UgdGhlIHJlcXVlc3RlZCBvbmUgd2FzIG91dCBvZiByYW5nZVxuXG4gICAgc2VsZWN0aW9uUmVmLmN1cnJlbnQgPSBnZXRTZWxlY3Rpb24oKTtcbiAgfSwgW2dldElucHV0RWxlbWVudCwgZ2V0U2VsZWN0aW9uXSk7XG4gIHZhciBzZWxlY3Rpb25Mb29wID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNlbGVjdGlvblJlZi5jdXJyZW50ID0gZ2V0U2VsZWN0aW9uKCk7XG4gIH0sIFtnZXRTZWxlY3Rpb25dKTtcblxuICB2YXIgX3VzZURlZmVyTG9vcCA9IHVzZURlZmVyTG9vcChzZWxlY3Rpb25Mb29wKSxcbiAgICAgIHJ1blNlbGVjdGlvbkxvb3AgPSBfdXNlRGVmZXJMb29wWzBdLFxuICAgICAgc3RvcFNlbGVjdGlvbkxvb3AgPSBfdXNlRGVmZXJMb29wWzFdO1xuXG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc01hc2tlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbnB1dCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBydW5TZWxlY3Rpb25Mb29wKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBzdG9wU2VsZWN0aW9uTG9vcCk7XG5cbiAgICBpZiAoaXNJbnB1dEZvY3VzZWQoaW5wdXQpKSB7XG4gICAgICBydW5TZWxlY3Rpb25Mb29wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBydW5TZWxlY3Rpb25Mb29wKTtcbiAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHN0b3BTZWxlY3Rpb25Mb29wKTtcbiAgICAgIHN0b3BTZWxlY3Rpb25Mb29wKCk7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgZ2V0U2VsZWN0aW9uOiBnZXRTZWxlY3Rpb24sXG4gICAgZ2V0TGFzdFNlbGVjdGlvbjogZ2V0TGFzdFNlbGVjdGlvbixcbiAgICBzZXRTZWxlY3Rpb246IHNldFNlbGVjdGlvblxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VWYWx1ZShpbnB1dFJlZiwgaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBnZXRJbnB1dEVsZW1lbnQgPSB1c2VJbnB1dEVsZW1lbnQoaW5wdXRSZWYpO1xuICB2YXIgdmFsdWVSZWYgPSBSZWFjdC51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbiAgdmFyIGdldFZhbHVlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfSwgW2dldElucHV0RWxlbWVudF0pO1xuICB2YXIgZ2V0TGFzdFZhbHVlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2YWx1ZVJlZi5jdXJyZW50O1xuICB9LCBbXSk7XG4gIHZhciBzZXRWYWx1ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dEVsZW1lbnQoKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH0sIFtnZXRJbnB1dEVsZW1lbnRdKTtcbiAgcmV0dXJuIHtcbiAgICBnZXRWYWx1ZTogZ2V0VmFsdWUsXG4gICAgZ2V0TGFzdFZhbHVlOiBnZXRMYXN0VmFsdWUsXG4gICAgc2V0VmFsdWU6IHNldFZhbHVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUlucHV0U3RhdGUoaW5pdGlhbFZhbHVlLCBpc01hc2tlZCkge1xuICB2YXIgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICB2YXIgX3VzZVNlbGVjdGlvbiA9IHVzZVNlbGVjdGlvbihpbnB1dFJlZiwgaXNNYXNrZWQpLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZVNlbGVjdGlvbi5nZXRTZWxlY3Rpb24sXG4gICAgICBnZXRMYXN0U2VsZWN0aW9uID0gX3VzZVNlbGVjdGlvbi5nZXRMYXN0U2VsZWN0aW9uLFxuICAgICAgc2V0U2VsZWN0aW9uID0gX3VzZVNlbGVjdGlvbi5zZXRTZWxlY3Rpb247XG5cbiAgdmFyIF91c2VWYWx1ZSA9IHVzZVZhbHVlKGlucHV0UmVmLCBpbml0aWFsVmFsdWUpLFxuICAgICAgZ2V0VmFsdWUgPSBfdXNlVmFsdWUuZ2V0VmFsdWUsXG4gICAgICBnZXRMYXN0VmFsdWUgPSBfdXNlVmFsdWUuZ2V0TGFzdFZhbHVlLFxuICAgICAgc2V0VmFsdWUgPSBfdXNlVmFsdWUuc2V0VmFsdWU7XG5cbiAgZnVuY3Rpb24gZ2V0TGFzdElucHV0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBnZXRMYXN0VmFsdWUoKSxcbiAgICAgIHNlbGVjdGlvbjogZ2V0TGFzdFNlbGVjdGlvbigpXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElucHV0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBnZXRWYWx1ZSgpLFxuICAgICAgc2VsZWN0aW9uOiBnZXRTZWxlY3Rpb24oKVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnB1dFN0YXRlKF9yZWYpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgICBzZWxlY3Rpb24gPSBfcmVmLnNlbGVjdGlvbjtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgc2V0U2VsZWN0aW9uKHNlbGVjdGlvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlucHV0UmVmOiBpbnB1dFJlZixcbiAgICBnZXRJbnB1dFN0YXRlOiBnZXRJbnB1dFN0YXRlLFxuICAgIGdldExhc3RJbnB1dFN0YXRlOiBnZXRMYXN0SW5wdXRTdGF0ZSxcbiAgICBzZXRJbnB1dFN0YXRlOiBzZXRJbnB1dFN0YXRlXG4gIH07XG59XG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn1cblxudmFyIENPTlRST0xMRURfUFJPUFMgPSBbXCJkaXNhYmxlZFwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25Gb2N1c1wiLCBcIm9uTW91c2VEb3duXCIsIFwicmVhZE9ubHlcIiwgXCJ2YWx1ZVwiXTtcbnZhciBkZWZhdWx0Rm9ybWF0Q2hhcnMgPSB7XG4gIFwiOVwiOiAvWzAtOV0vLFxuICBhOiAvW0EtWmEtel0vLFxuICBcIipcIjogL1tBLVphLXowLTldL1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVNYXhMZW5ndGgocHJvcHMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghcHJvcHMubWF4TGVuZ3RoIHx8ICFwcm9wcy5tYXNrLCBcInJlYWN0LWlucHV0LW1hc2s6IG1heExlbmd0aCBwcm9wZXJ0eSBzaG91bGRuJ3QgYmUgcGFzc2VkIHRvIHRoZSBtYXNrZWQgaW5wdXQuIEl0IGJyZWFrcyBtYXNraW5nIGFuZCB1bm5lY2Vzc2FyeSBiZWNhdXNlIGxlbmd0aCBpcyBsaW1pdGVkIGJ5IHRoZSBtYXNrIGxlbmd0aC5cIikgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZU1hc2tQbGFjZWhvbGRlcihwcm9wcykge1xuICB2YXIgbWFzayA9IHByb3BzLm1hc2ssXG4gICAgICBtYXNrUGxhY2Vob2xkZXIgPSBwcm9wcy5tYXNrUGxhY2Vob2xkZXI7XG4gICEoIW1hc2sgfHwgIW1hc2tQbGFjZWhvbGRlciB8fCBtYXNrUGxhY2Vob2xkZXIubGVuZ3RoID09PSAxIHx8IG1hc2tQbGFjZWhvbGRlci5sZW5ndGggPT09IG1hc2subGVuZ3RoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJyZWFjdC1pbnB1dC1tYXNrOiBtYXNrUGxhY2Vob2xkZXIgc2hvdWxkIGVpdGhlciBiZSBhIHNpbmdsZSBjaGFyYWN0ZXIgb3IgaGF2ZSB0aGUgc2FtZSBsZW5ndGggYXMgdGhlIG1hc2s6XFxuXCIgKyAoXCJtYXNrOiBcIiArIG1hc2sgKyBcIlxcblwiKSArIChcIm1hc2tQbGFjZWhvbGRlcjogXCIgKyBtYXNrUGxhY2Vob2xkZXIpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkcmVuKHByb3BzLCBpbnB1dEVsZW1lbnQpIHtcbiAgdmFyIGNvbmZsaWN0UHJvcHMgPSBDT05UUk9MTEVEX1BST1BTLmZpbHRlcihmdW5jdGlvbiAocHJvcElkKSB7XG4gICAgcmV0dXJuIGlucHV0RWxlbWVudC5wcm9wc1twcm9wSWRdICE9IG51bGwgJiYgaW5wdXRFbGVtZW50LnByb3BzW3Byb3BJZF0gIT09IHByb3BzW3Byb3BJZF07XG4gIH0pO1xuICAhIWNvbmZsaWN0UHJvcHMubGVuZ3RoID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcInJlYWN0LWlucHV0LW1hc2s6IHRoZSBmb2xsb3dpbmcgcHJvcHMgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgSW5wdXRNYXNrIGNvbXBvbmVudCwgbm90IHRvIGNoaWxkcmVuOiBcIiArIGNvbmZsaWN0UHJvcHMuam9pbihcIixcIikpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VNYXNrIChfcmVmKSB7XG4gIHZhciBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgbWFza1BsYWNlaG9sZGVyID0gX3JlZi5tYXNrUGxhY2Vob2xkZXI7XG4gIHZhciBwZXJtYW5lbnRzID0gW107XG5cbiAgaWYgKCFtYXNrKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hc2tQbGFjZWhvbGRlcjogbnVsbCxcbiAgICAgIG1hc2s6IG51bGwsXG4gICAgICBwcmVmaXg6IG51bGwsXG4gICAgICBsYXN0RWRpdGFibGVQb3NpdGlvbjogbnVsbCxcbiAgICAgIHBlcm1hbmVudHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWFzayA9PT0gXCJzdHJpbmdcIikge1xuICAgIHZhciBpc1Blcm1hbmVudCA9IGZhbHNlO1xuICAgIHZhciBwYXJzZWRNYXNrU3RyaW5nID0gXCJcIjtcbiAgICBtYXNrLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgICAgaWYgKCFpc1Blcm1hbmVudCAmJiBjaGFyYWN0ZXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgIGlzUGVybWFuZW50ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1Blcm1hbmVudCB8fCAhZGVmYXVsdEZvcm1hdENoYXJzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICBwZXJtYW5lbnRzLnB1c2gocGFyc2VkTWFza1N0cmluZy5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyc2VkTWFza1N0cmluZyArPSBjaGFyYWN0ZXI7XG4gICAgICAgIGlzUGVybWFuZW50ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWFzayA9IHBhcnNlZE1hc2tTdHJpbmcuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGluZGV4KSB7XG4gICAgICBpZiAocGVybWFuZW50cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRGb3JtYXRDaGFyc1tjaGFyYWN0ZXJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG1hc2suZm9yRWFjaChmdW5jdGlvbiAoY2hhcmFjdGVyLCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcGVybWFuZW50cy5wdXNoKGluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChtYXNrUGxhY2Vob2xkZXIpIHtcbiAgICBpZiAobWFza1BsYWNlaG9sZGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbWFza1BsYWNlaG9sZGVyID0gbWFzay5tYXAoZnVuY3Rpb24gKGNoYXJhY3RlciwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHBlcm1hbmVudHMuaW5kZXhPZihpbmRleCkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXNrUGxhY2Vob2xkZXI7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFza1BsYWNlaG9sZGVyID0gbWFza1BsYWNlaG9sZGVyLnNwbGl0KFwiXCIpO1xuICAgIH1cblxuICAgIHBlcm1hbmVudHMuZm9yRWFjaChmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgIG1hc2tQbGFjZWhvbGRlcltwb3NpdGlvbl0gPSBtYXNrW3Bvc2l0aW9uXTtcbiAgICB9KTtcbiAgICBtYXNrUGxhY2Vob2xkZXIgPSBtYXNrUGxhY2Vob2xkZXIuam9pbihcIlwiKTtcbiAgfVxuXG4gIHZhciBwcmVmaXggPSBwZXJtYW5lbnRzLmZpbHRlcihmdW5jdGlvbiAocG9zaXRpb24sIGluZGV4KSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uID09PSBpbmRleDtcbiAgfSkubWFwKGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgIHJldHVybiBtYXNrW3Bvc2l0aW9uXTtcbiAgfSkuam9pbihcIlwiKTtcbiAgdmFyIGxhc3RFZGl0YWJsZVBvc2l0aW9uID0gbWFzay5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChwZXJtYW5lbnRzLmluZGV4T2YobGFzdEVkaXRhYmxlUG9zaXRpb24pICE9PSAtMSkge1xuICAgIGxhc3RFZGl0YWJsZVBvc2l0aW9uLS07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hc2tQbGFjZWhvbGRlcjogbWFza1BsYWNlaG9sZGVyLFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIG1hc2s6IG1hc2ssXG4gICAgbGFzdEVkaXRhYmxlUG9zaXRpb246IGxhc3RFZGl0YWJsZVBvc2l0aW9uLFxuICAgIHBlcm1hbmVudHM6IHBlcm1hbmVudHNcbiAgfTtcbn1cblxuLyogZXNsaW50IG5vLXVzZS1iZWZvcmUtZGVmaW5lOiBbXCJlcnJvclwiLCB7IGZ1bmN0aW9uczogZmFsc2UgfV0gKi9cblxudmFyIE1hc2tVdGlscyA9IGZ1bmN0aW9uIE1hc2tVdGlscyhvcHRpb25zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5pc0NoYXJhY3RlckFsbG93ZWRBdFBvc2l0aW9uID0gZnVuY3Rpb24gKGNoYXJhY3RlciwgcG9zaXRpb24pIHtcbiAgICB2YXIgbWFza1BsYWNlaG9sZGVyID0gX3RoaXMubWFza09wdGlvbnMubWFza1BsYWNlaG9sZGVyO1xuXG4gICAgaWYgKF90aGlzLmlzQ2hhcmFjdGVyRmlsbGluZ1Bvc2l0aW9uKGNoYXJhY3RlciwgcG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIW1hc2tQbGFjZWhvbGRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBtYXNrUGxhY2Vob2xkZXJbcG9zaXRpb25dID09PSBjaGFyYWN0ZXI7XG4gIH07XG5cbiAgdGhpcy5pc0NoYXJhY3RlckZpbGxpbmdQb3NpdGlvbiA9IGZ1bmN0aW9uIChjaGFyYWN0ZXIsIHBvc2l0aW9uKSB7XG4gICAgdmFyIG1hc2sgPSBfdGhpcy5tYXNrT3B0aW9ucy5tYXNrO1xuXG4gICAgaWYgKCFjaGFyYWN0ZXIgfHwgcG9zaXRpb24gPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIV90aGlzLmlzUG9zaXRpb25FZGl0YWJsZShwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiBtYXNrW3Bvc2l0aW9uXSA9PT0gY2hhcmFjdGVyO1xuICAgIH1cblxuICAgIHZhciBjaGFyUnVsZSA9IG1hc2tbcG9zaXRpb25dO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGNoYXJSdWxlKS50ZXN0KGNoYXJhY3Rlcik7XG4gIH07XG5cbiAgdGhpcy5pc1Bvc2l0aW9uRWRpdGFibGUgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMkbWFza09wdGlvbnMgPSBfdGhpcy5tYXNrT3B0aW9ucyxcbiAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICAgIHBlcm1hbmVudHMgPSBfdGhpcyRtYXNrT3B0aW9ucy5wZXJtYW5lbnRzO1xuICAgIHJldHVybiBwb3NpdGlvbiA8IG1hc2subGVuZ3RoICYmIHBlcm1hbmVudHMuaW5kZXhPZihwb3NpdGlvbikgPT09IC0xO1xuICB9O1xuXG4gIHRoaXMuaXNWYWx1ZUVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KFwiXCIpLmV2ZXJ5KGZ1bmN0aW9uIChjaGFyYWN0ZXIsIHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gIV90aGlzLmlzUG9zaXRpb25FZGl0YWJsZShwb3NpdGlvbikgfHwgIV90aGlzLmlzQ2hhcmFjdGVyRmlsbGluZ1Bvc2l0aW9uKGNoYXJhY3RlciwgcG9zaXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuaXNWYWx1ZUZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBfdGhpcy5nZXRGaWxsZWRMZW5ndGgodmFsdWUpID09PSBfdGhpcy5tYXNrT3B0aW9ucy5sYXN0RWRpdGFibGVQb3NpdGlvbiArIDE7XG4gIH07XG5cbiAgdGhpcy5nZXREZWZhdWx0U2VsZWN0aW9uRm9yVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgZmlsbGVkTGVuZ3RoID0gX3RoaXMuZ2V0RmlsbGVkTGVuZ3RoKHZhbHVlKTtcblxuICAgIHZhciBjdXJzb3JQb3NpdGlvbiA9IF90aGlzLmdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbihmaWxsZWRMZW5ndGgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBjdXJzb3JQb3NpdGlvbixcbiAgICAgIGVuZDogY3Vyc29yUG9zaXRpb25cbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuZ2V0RmlsbGVkTGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSB2YWx1ZS5zcGxpdChcIlwiKTtcbiAgICB2YXIgbGFzdEZpbGxlZEluZGV4ID0gZmluZExhc3RJbmRleChjaGFyYWN0ZXJzLCBmdW5jdGlvbiAoY2hhcmFjdGVyLCBwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIF90aGlzLmlzUG9zaXRpb25FZGl0YWJsZShwb3NpdGlvbikgJiYgX3RoaXMuaXNDaGFyYWN0ZXJGaWxsaW5nUG9zaXRpb24oY2hhcmFjdGVyLCBwb3NpdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhc3RGaWxsZWRJbmRleCArIDE7XG4gIH07XG5cbiAgdGhpcy5nZXRTdHJpbmdGaWxsaW5nTGVuZ3RoQXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdHJpbmcsIHBvc2l0aW9uKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBzdHJpbmcuc3BsaXQoXCJcIik7XG4gICAgdmFyIGluc2VydGVkVmFsdWUgPSBjaGFyYWN0ZXJzLnJlZHVjZShmdW5jdGlvbiAodmFsdWUsIGNoYXJhY3Rlcikge1xuICAgICAgcmV0dXJuIF90aGlzLmluc2VydENoYXJhY3RlckF0UG9zaXRpb24odmFsdWUsIGNoYXJhY3RlciwgdmFsdWUubGVuZ3RoKTtcbiAgICB9LCByZXBlYXQoXCIgXCIsIHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIGluc2VydGVkVmFsdWUubGVuZ3RoIC0gcG9zaXRpb247XG4gIH07XG5cbiAgdGhpcy5nZXRMZWZ0RWRpdGFibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgIGZvciAodmFyIGkgPSBwb3NpdGlvbjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChfdGhpcy5pc1Bvc2l0aW9uRWRpdGFibGUoaSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy5nZXRSaWdodEVkaXRhYmxlUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICB2YXIgbWFzayA9IF90aGlzLm1hc2tPcHRpb25zLm1hc2s7XG5cbiAgICBmb3IgKHZhciBpID0gcG9zaXRpb247IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX3RoaXMuaXNQb3NpdGlvbkVkaXRhYmxlKGkpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHRoaXMuZm9ybWF0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMkbWFza09wdGlvbnMyID0gX3RoaXMubWFza09wdGlvbnMsXG4gICAgICAgIG1hc2tQbGFjZWhvbGRlciA9IF90aGlzJG1hc2tPcHRpb25zMi5tYXNrUGxhY2Vob2xkZXIsXG4gICAgICAgIG1hc2sgPSBfdGhpcyRtYXNrT3B0aW9uczIubWFzaztcblxuICAgIGlmICghbWFza1BsYWNlaG9sZGVyKSB7XG4gICAgICB2YWx1ZSA9IF90aGlzLmluc2VydFN0cmluZ0F0UG9zaXRpb24oXCJcIiwgdmFsdWUsIDApO1xuXG4gICAgICB3aGlsZSAodmFsdWUubGVuZ3RoIDwgbWFzay5sZW5ndGggJiYgIV90aGlzLmlzUG9zaXRpb25FZGl0YWJsZSh2YWx1ZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhbHVlICs9IG1hc2tbdmFsdWUubGVuZ3RoXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcy5pbnNlcnRTdHJpbmdBdFBvc2l0aW9uKG1hc2tQbGFjZWhvbGRlciwgdmFsdWUsIDApO1xuICB9O1xuXG4gIHRoaXMuY2xlYXJSYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGxlbikge1xuICAgIGlmICghbGVuKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IHN0YXJ0ICsgbGVuO1xuICAgIHZhciBfdGhpcyRtYXNrT3B0aW9uczMgPSBfdGhpcy5tYXNrT3B0aW9ucyxcbiAgICAgICAgbWFza1BsYWNlaG9sZGVyID0gX3RoaXMkbWFza09wdGlvbnMzLm1hc2tQbGFjZWhvbGRlcixcbiAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zMy5tYXNrO1xuICAgIHZhciBjbGVhcmVkVmFsdWUgPSB2YWx1ZS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24gKGNoYXJhY3RlciwgaSkge1xuICAgICAgdmFyIGlzRWRpdGFibGUgPSBfdGhpcy5pc1Bvc2l0aW9uRWRpdGFibGUoaSk7XG5cbiAgICAgIGlmICghbWFza1BsYWNlaG9sZGVyICYmIGkgPj0gZW5kICYmICFpc0VkaXRhYmxlKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8IHN0YXJ0IHx8IGkgPj0gZW5kKSB7XG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNFZGl0YWJsZSkge1xuICAgICAgICByZXR1cm4gbWFza1tpXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hc2tQbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gbWFza1BsYWNlaG9sZGVyW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBfdGhpcy5mb3JtYXRWYWx1ZShjbGVhcmVkVmFsdWUpO1xuICB9O1xuXG4gIHRoaXMuaW5zZXJ0Q2hhcmFjdGVyQXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgY2hhcmFjdGVyLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpcyRtYXNrT3B0aW9uczQgPSBfdGhpcy5tYXNrT3B0aW9ucyxcbiAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zNC5tYXNrLFxuICAgICAgICBtYXNrUGxhY2Vob2xkZXIgPSBfdGhpcyRtYXNrT3B0aW9uczQubWFza1BsYWNlaG9sZGVyO1xuXG4gICAgaWYgKHBvc2l0aW9uID49IG1hc2subGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGlzQWxsb3dlZCA9IF90aGlzLmlzQ2hhcmFjdGVyQWxsb3dlZEF0UG9zaXRpb24oY2hhcmFjdGVyLCBwb3NpdGlvbik7XG5cbiAgICB2YXIgaXNFZGl0YWJsZSA9IF90aGlzLmlzUG9zaXRpb25FZGl0YWJsZShwb3NpdGlvbik7XG5cbiAgICB2YXIgbmV4dEVkaXRhYmxlUG9zaXRpb24gPSBfdGhpcy5nZXRSaWdodEVkaXRhYmxlUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgdmFyIGlzTmV4dFBsYWNlaG9sZGVyID0gbWFza1BsYWNlaG9sZGVyICYmIG5leHRFZGl0YWJsZVBvc2l0aW9uID8gY2hhcmFjdGVyID09PSBtYXNrUGxhY2Vob2xkZXJbbmV4dEVkaXRhYmxlUG9zaXRpb25dIDogbnVsbDtcbiAgICB2YXIgdmFsdWVCZWZvcmUgPSB2YWx1ZS5zbGljZSgwLCBwb3NpdGlvbik7XG5cbiAgICBpZiAoaXNBbGxvd2VkIHx8ICFpc0VkaXRhYmxlKSB7XG4gICAgICB2YXIgaW5zZXJ0ZWRDaGFyYWN0ZXIgPSBpc0FsbG93ZWQgPyBjaGFyYWN0ZXIgOiBtYXNrW3Bvc2l0aW9uXTtcbiAgICAgIHZhbHVlID0gdmFsdWVCZWZvcmUgKyBpbnNlcnRlZENoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlzQWxsb3dlZCAmJiAhaXNFZGl0YWJsZSAmJiAhaXNOZXh0UGxhY2Vob2xkZXIpIHtcbiAgICAgIHZhbHVlID0gX3RoaXMuaW5zZXJ0Q2hhcmFjdGVyQXRQb3NpdGlvbih2YWx1ZSwgY2hhcmFjdGVyLCBwb3NpdGlvbiArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICB0aGlzLmluc2VydFN0cmluZ0F0UG9zaXRpb24gPSBmdW5jdGlvbiAodmFsdWUsIHN0cmluZywgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMkbWFza09wdGlvbnM1ID0gX3RoaXMubWFza09wdGlvbnMsXG4gICAgICAgIG1hc2sgPSBfdGhpcyRtYXNrT3B0aW9uczUubWFzayxcbiAgICAgICAgbWFza1BsYWNlaG9sZGVyID0gX3RoaXMkbWFza09wdGlvbnM1Lm1hc2tQbGFjZWhvbGRlcjtcblxuICAgIGlmICghc3RyaW5nIHx8IHBvc2l0aW9uID49IG1hc2subGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBzdHJpbmcuc3BsaXQoXCJcIik7XG4gICAgdmFyIGlzRml4ZWRMZW5ndGggPSBfdGhpcy5pc1ZhbHVlRmlsbGVkKHZhbHVlKSB8fCAhIW1hc2tQbGFjZWhvbGRlcjtcbiAgICB2YXIgdmFsdWVBZnRlciA9IHZhbHVlLnNsaWNlKHBvc2l0aW9uKTtcbiAgICB2YWx1ZSA9IGNoYXJhY3RlcnMucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaW5zZXJ0Q2hhcmFjdGVyQXRQb3NpdGlvbih2YWx1ZSwgY2hhcmFjdGVyLCB2YWx1ZS5sZW5ndGgpO1xuICAgIH0sIHZhbHVlLnNsaWNlKDAsIHBvc2l0aW9uKSk7XG5cbiAgICBpZiAoaXNGaXhlZExlbmd0aCkge1xuICAgICAgdmFsdWUgKz0gdmFsdWVBZnRlci5zbGljZSh2YWx1ZS5sZW5ndGggLSBwb3NpdGlvbik7XG4gICAgfSBlbHNlIGlmIChfdGhpcy5pc1ZhbHVlRmlsbGVkKHZhbHVlKSkge1xuICAgICAgdmFsdWUgKz0gbWFzay5zbGljZSh2YWx1ZS5sZW5ndGgpLmpvaW4oXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlZGl0YWJsZUNoYXJhY3RlcnNBZnRlciA9IHZhbHVlQWZ0ZXIuc3BsaXQoXCJcIikuZmlsdGVyKGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmlzUG9zaXRpb25FZGl0YWJsZShwb3NpdGlvbiArIGkpO1xuICAgICAgfSk7XG4gICAgICB2YWx1ZSA9IGVkaXRhYmxlQ2hhcmFjdGVyc0FmdGVyLnJlZHVjZShmdW5jdGlvbiAodmFsdWUsIGNoYXJhY3Rlcikge1xuICAgICAgICB2YXIgbmV4dEVkaXRhYmxlUG9zaXRpb24gPSBfdGhpcy5nZXRSaWdodEVkaXRhYmxlUG9zaXRpb24odmFsdWUubGVuZ3RoKTtcblxuICAgICAgICBpZiAobmV4dEVkaXRhYmxlUG9zaXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV90aGlzLmlzUG9zaXRpb25FZGl0YWJsZSh2YWx1ZS5sZW5ndGgpKSB7XG4gICAgICAgICAgdmFsdWUgKz0gbWFzay5zbGljZSh2YWx1ZS5sZW5ndGgsIG5leHRFZGl0YWJsZVBvc2l0aW9uKS5qb2luKFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLmluc2VydENoYXJhY3RlckF0UG9zaXRpb24odmFsdWUsIGNoYXJhY3RlciwgdmFsdWUubGVuZ3RoKTtcbiAgICAgIH0sIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgdGhpcy5wcm9jZXNzQ2hhbmdlID0gZnVuY3Rpb24gKGN1cnJlbnRTdGF0ZSwgcHJldmlvdXNTdGF0ZSkge1xuICAgIHZhciBfdGhpcyRtYXNrT3B0aW9uczYgPSBfdGhpcy5tYXNrT3B0aW9ucyxcbiAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zNi5tYXNrLFxuICAgICAgICBwcmVmaXggPSBfdGhpcyRtYXNrT3B0aW9uczYucHJlZml4LFxuICAgICAgICBsYXN0RWRpdGFibGVQb3NpdGlvbiA9IF90aGlzJG1hc2tPcHRpb25zNi5sYXN0RWRpdGFibGVQb3NpdGlvbjtcbiAgICB2YXIgdmFsdWUgPSBjdXJyZW50U3RhdGUudmFsdWUsXG4gICAgICAgIHNlbGVjdGlvbiA9IGN1cnJlbnRTdGF0ZS5zZWxlY3Rpb247XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1N0YXRlLnZhbHVlO1xuICAgIHZhciBwcmV2aW91c1NlbGVjdGlvbiA9IHByZXZpb3VzU3RhdGUuc2VsZWN0aW9uO1xuICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgIHZhciBlbnRlcmVkU3RyaW5nID0gXCJcIjtcbiAgICB2YXIgZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCA9IDA7XG4gICAgdmFyIHJlbW92ZWRMZW5ndGggPSAwO1xuICAgIHZhciBjdXJzb3JQb3NpdGlvbiA9IE1hdGgubWluKHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0LCBzZWxlY3Rpb24uc3RhcnQpO1xuXG4gICAgaWYgKHNlbGVjdGlvbi5lbmQgPiBwcmV2aW91c1NlbGVjdGlvbi5zdGFydCkge1xuICAgICAgZW50ZXJlZFN0cmluZyA9IG5ld1ZhbHVlLnNsaWNlKHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0LCBzZWxlY3Rpb24uZW5kKTtcbiAgICAgIGZvcm1hdHRlZEVudGVyZWRTdHJpbmdMZW5ndGggPSBfdGhpcy5nZXRTdHJpbmdGaWxsaW5nTGVuZ3RoQXRQb3NpdGlvbihlbnRlcmVkU3RyaW5nLCBjdXJzb3JQb3NpdGlvbik7XG5cbiAgICAgIGlmICghZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCkge1xuICAgICAgICByZW1vdmVkTGVuZ3RoID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZWRMZW5ndGggPSBwcmV2aW91c1NlbGVjdGlvbi5sZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZS5sZW5ndGggPCBwcmV2aW91c1ZhbHVlLmxlbmd0aCkge1xuICAgICAgcmVtb3ZlZExlbmd0aCA9IHByZXZpb3VzVmFsdWUubGVuZ3RoIC0gbmV3VmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIG5ld1ZhbHVlID0gcHJldmlvdXNWYWx1ZTtcblxuICAgIGlmIChyZW1vdmVkTGVuZ3RoKSB7XG4gICAgICBpZiAocmVtb3ZlZExlbmd0aCA9PT0gMSAmJiAhcHJldmlvdXNTZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIHZhciBkZWxldGVGcm9tUmlnaHQgPSBwcmV2aW91c1NlbGVjdGlvbi5zdGFydCA9PT0gc2VsZWN0aW9uLnN0YXJ0O1xuICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IGRlbGV0ZUZyb21SaWdodCA/IF90aGlzLmdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbihzZWxlY3Rpb24uc3RhcnQpIDogX3RoaXMuZ2V0TGVmdEVkaXRhYmxlUG9zaXRpb24oc2VsZWN0aW9uLnN0YXJ0KTtcbiAgICAgIH1cblxuICAgICAgbmV3VmFsdWUgPSBfdGhpcy5jbGVhclJhbmdlKG5ld1ZhbHVlLCBjdXJzb3JQb3NpdGlvbiwgcmVtb3ZlZExlbmd0aCk7XG4gICAgfVxuXG4gICAgbmV3VmFsdWUgPSBfdGhpcy5pbnNlcnRTdHJpbmdBdFBvc2l0aW9uKG5ld1ZhbHVlLCBlbnRlcmVkU3RyaW5nLCBjdXJzb3JQb3NpdGlvbik7XG4gICAgY3Vyc29yUG9zaXRpb24gKz0gZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aDtcblxuICAgIGlmIChjdXJzb3JQb3NpdGlvbiA+PSBtYXNrLmxlbmd0aCkge1xuICAgICAgY3Vyc29yUG9zaXRpb24gPSBtYXNrLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGN1cnNvclBvc2l0aW9uIDwgcHJlZml4Lmxlbmd0aCAmJiAhZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCkge1xuICAgICAgY3Vyc29yUG9zaXRpb24gPSBwcmVmaXgubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoY3Vyc29yUG9zaXRpb24gPj0gcHJlZml4Lmxlbmd0aCAmJiBjdXJzb3JQb3NpdGlvbiA8IGxhc3RFZGl0YWJsZVBvc2l0aW9uICYmIGZvcm1hdHRlZEVudGVyZWRTdHJpbmdMZW5ndGgpIHtcbiAgICAgIGN1cnNvclBvc2l0aW9uID0gX3RoaXMuZ2V0UmlnaHRFZGl0YWJsZVBvc2l0aW9uKGN1cnNvclBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBuZXdWYWx1ZSA9IF90aGlzLmZvcm1hdFZhbHVlKG5ld1ZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgZW50ZXJlZFN0cmluZzogZW50ZXJlZFN0cmluZyxcbiAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICBzdGFydDogY3Vyc29yUG9zaXRpb24sXG4gICAgICAgIGVuZDogY3Vyc29yUG9zaXRpb25cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHRoaXMubWFza09wdGlvbnMgPSBwYXJzZU1hc2sob3B0aW9ucyk7XG59O1xuXG52YXIgSW5wdXRNYXNrQ2hpbGRyZW5XcmFwcGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElucHV0TWFza0NoaWxkcmVuV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5wdXRNYXNrQ2hpbGRyZW5XcmFwcGVyKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbnB1dE1hc2tDaGlsZHJlbldyYXBwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBwcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIElucHV0TWFza0NoaWxkcmVuV3JhcHBlcjtcbn0oUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50KTtcblxudmFyIElucHV0TWFzayA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gSW5wdXRNYXNrKHByb3BzLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIGFsd2F5c1Nob3dNYXNrID0gcHJvcHMuYWx3YXlzU2hvd01hc2ssXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgbWFzayA9IHByb3BzLm1hc2ssXG4gICAgICBtYXNrUGxhY2Vob2xkZXIgPSBwcm9wcy5tYXNrUGxhY2Vob2xkZXIsXG4gICAgICBiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZSA9IHByb3BzLmJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImFsd2F5c1Nob3dNYXNrXCIsIFwiY2hpbGRyZW5cIiwgXCJtYXNrXCIsIFwibWFza1BsYWNlaG9sZGVyXCIsIFwiYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2VcIl0pO1xuXG4gIHZhbGlkYXRlTWF4TGVuZ3RoKHByb3BzKTtcbiAgdmFsaWRhdGVNYXNrUGxhY2Vob2xkZXIocHJvcHMpO1xuICB2YXIgbWFza1V0aWxzID0gbmV3IE1hc2tVdGlscyh7XG4gICAgbWFzazogbWFzayxcbiAgICBtYXNrUGxhY2Vob2xkZXI6IG1hc2tQbGFjZWhvbGRlclxuICB9KTtcbiAgdmFyIGlzTWFza2VkID0gISFtYXNrO1xuICB2YXIgaXNFZGl0YWJsZSA9ICFyZXN0UHJvcHMuZGlzYWJsZWQgJiYgIXJlc3RQcm9wcy5yZWFkT25seTtcbiAgdmFyIGlzQ29udHJvbGxlZCA9IHByb3BzLnZhbHVlICE9PSBudWxsICYmIHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0lzTWFza2VkID0gdXNlUHJldmlvdXMoaXNNYXNrZWQpO1xuICB2YXIgaW5pdGlhbFZhbHVlID0gdG9TdHJpbmcoKGlzQ29udHJvbGxlZCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlKSB8fCBcIlwiKTtcblxuICB2YXIgX3VzZUlucHV0U3RhdGUgPSB1c2VJbnB1dFN0YXRlKGluaXRpYWxWYWx1ZSwgaXNNYXNrZWQpLFxuICAgICAgaW5wdXRSZWYgPSBfdXNlSW5wdXRTdGF0ZS5pbnB1dFJlZixcbiAgICAgIGdldElucHV0U3RhdGUgPSBfdXNlSW5wdXRTdGF0ZS5nZXRJbnB1dFN0YXRlLFxuICAgICAgc2V0SW5wdXRTdGF0ZSA9IF91c2VJbnB1dFN0YXRlLnNldElucHV0U3RhdGUsXG4gICAgICBnZXRMYXN0SW5wdXRTdGF0ZSA9IF91c2VJbnB1dFN0YXRlLmdldExhc3RJbnB1dFN0YXRlO1xuXG4gIHZhciBnZXRJbnB1dEVsZW1lbnQgPSB1c2VJbnB1dEVsZW1lbnQoaW5wdXRSZWYpO1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGdldElucHV0U3RhdGUoKTtcbiAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IGdldExhc3RJbnB1dFN0YXRlKCk7XG4gICAgdmFyIG5ld0lucHV0U3RhdGUgPSBtYXNrVXRpbHMucHJvY2Vzc0NoYW5nZShjdXJyZW50U3RhdGUsIHByZXZpb3VzU3RhdGUpO1xuXG4gICAgaWYgKGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlKSB7XG4gICAgICBuZXdJbnB1dFN0YXRlID0gYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2Uoe1xuICAgICAgICBjdXJyZW50U3RhdGU6IGN1cnJlbnRTdGF0ZSxcbiAgICAgICAgcHJldmlvdXNTdGF0ZTogcHJldmlvdXNTdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiBuZXdJbnB1dFN0YXRlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRJbnB1dFN0YXRlKG5ld0lucHV0U3RhdGUpO1xuXG4gICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Gb2N1cyhldmVudCkge1xuICAgIC8vIElmIGF1dG9Gb2N1cyBwcm9wZXJ0eSBpcyBzZXQsIGZvY3VzIGV2ZW50IGZpcmVzIGJlZm9yZSB0aGUgcmVmIGhhbmRsZXIgZ2V0cyBjYWxsZWRcbiAgICBpbnB1dFJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSBnZXRJbnB1dFN0YXRlKCkudmFsdWU7XG5cbiAgICBpZiAoaXNNYXNrZWQgJiYgIW1hc2tVdGlscy5pc1ZhbHVlRmlsbGVkKGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IG1hc2tVdGlscy5mb3JtYXRWYWx1ZShjdXJyZW50VmFsdWUpO1xuICAgICAgdmFyIG5ld1NlbGVjdGlvbiA9IG1hc2tVdGlscy5nZXREZWZhdWx0U2VsZWN0aW9uRm9yVmFsdWUobmV3VmFsdWUpO1xuICAgICAgdmFyIG5ld0lucHV0U3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgc2VsZWN0aW9uOiBuZXdTZWxlY3Rpb25cbiAgICAgIH07XG5cbiAgICAgIGlmIChiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZSkge1xuICAgICAgICBuZXdJbnB1dFN0YXRlID0gYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2Uoe1xuICAgICAgICAgIGN1cnJlbnRTdGF0ZTogZ2V0SW5wdXRTdGF0ZSgpLFxuICAgICAgICAgIG5leHRTdGF0ZTogbmV3SW5wdXRTdGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgbmV3VmFsdWUgPSBuZXdJbnB1dFN0YXRlLnZhbHVlO1xuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdJbnB1dFN0YXRlLnNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgc2V0SW5wdXRTdGF0ZShuZXdJbnB1dFN0YXRlKTtcblxuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjdXJyZW50VmFsdWUgJiYgcHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfSAvLyBDaHJvbWUgcmVzZXRzIHNlbGVjdGlvbiBhZnRlciBmb2N1cyBldmVudCxcbiAgICAgIC8vIHNvIHdlIHdhbnQgdG8gcmVzdG9yZSBpdCBsYXRlclxuXG5cbiAgICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0SW5wdXRTdGF0ZShnZXRMYXN0SW5wdXRTdGF0ZSgpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5vbkZvY3VzKSB7XG4gICAgICBwcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXIoZXZlbnQpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gZ2V0SW5wdXRTdGF0ZSgpLnZhbHVlO1xuICAgIHZhciBsYXN0VmFsdWUgPSBnZXRMYXN0SW5wdXRTdGF0ZSgpLnZhbHVlO1xuXG4gICAgaWYgKGlzTWFza2VkICYmICFhbHdheXNTaG93TWFzayAmJiBtYXNrVXRpbHMuaXNWYWx1ZUVtcHR5KGxhc3RWYWx1ZSkpIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IFwiXCI7XG4gICAgICB2YXIgbmV3SW5wdXRTdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgICBzdGFydDogbnVsbCxcbiAgICAgICAgICBlbmQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlKSB7XG4gICAgICAgIG5ld0lucHV0U3RhdGUgPSBiZWZvcmVNYXNrZWRTdGF0ZUNoYW5nZSh7XG4gICAgICAgICAgY3VycmVudFN0YXRlOiBnZXRJbnB1dFN0YXRlKCksXG4gICAgICAgICAgbmV4dFN0YXRlOiBuZXdJbnB1dFN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld0lucHV0U3RhdGUudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHNldElucHV0U3RhdGUobmV3SW5wdXRTdGF0ZSk7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSAhPT0gY3VycmVudFZhbHVlICYmIHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcHMub25CbHVyKSB7XG4gICAgICBwcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfSAvLyBUaW55IHVuaW50ZW50aW9uYWwgbW91c2UgbW92ZW1lbnRzIGNhbiBicmVhayBjdXJzb3JcbiAgLy8gcG9zaXRpb24gb24gZm9jdXMsIHNvIHdlIGhhdmUgdG8gcmVzdG9yZSBpdCBpbiB0aGF0IGNhc2VcbiAgLy9cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Nhbm5pYXNzaW4vcmVhY3QtaW5wdXQtbWFzay9pc3N1ZXMvMTA4XG5cblxuICBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHZhciBpbnB1dCA9IGdldElucHV0RWxlbWVudCgpO1xuXG4gICAgdmFyIF9nZXRJbnB1dFN0YXRlID0gZ2V0SW5wdXRTdGF0ZSgpLFxuICAgICAgICB2YWx1ZSA9IF9nZXRJbnB1dFN0YXRlLnZhbHVlO1xuXG4gICAgdmFyIGlucHV0RG9jdW1lbnQgPSBnZXRFbGVtZW50RG9jdW1lbnQoaW5wdXQpO1xuXG4gICAgaWYgKCFpc0lucHV0Rm9jdXNlZChpbnB1dCkgJiYgIW1hc2tVdGlscy5pc1ZhbHVlRmlsbGVkKHZhbHVlKSkge1xuICAgICAgdmFyIG1vdXNlRG93blggPSBldmVudC5jbGllbnRYO1xuICAgICAgdmFyIG1vdXNlRG93blkgPSBldmVudC5jbGllbnRZO1xuICAgICAgdmFyIG1vdXNlRG93blRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIG1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIobW91c2VVcEV2ZW50KSB7XG4gICAgICAgIGlucHV0RG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgICAgIGlmICghaXNJbnB1dEZvY3VzZWQoaW5wdXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlbHRhWCA9IE1hdGguYWJzKG1vdXNlVXBFdmVudC5jbGllbnRYIC0gbW91c2VEb3duWCk7XG4gICAgICAgIHZhciBkZWx0YVkgPSBNYXRoLmFicyhtb3VzZVVwRXZlbnQuY2xpZW50WSAtIG1vdXNlRG93blkpO1xuICAgICAgICB2YXIgYXhpc0RlbHRhID0gTWF0aC5tYXgoZGVsdGFYLCBkZWx0YVkpO1xuICAgICAgICB2YXIgdGltZURlbHRhID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBtb3VzZURvd25UaW1lO1xuXG4gICAgICAgIGlmIChheGlzRGVsdGEgPD0gMTAgJiYgdGltZURlbHRhIDw9IDIwMCB8fCBheGlzRGVsdGEgPD0gNSAmJiB0aW1lRGVsdGEgPD0gMzAwKSB7XG4gICAgICAgICAgdmFyIF9sYXN0U3RhdGUgPSBnZXRMYXN0SW5wdXRTdGF0ZSgpO1xuXG4gICAgICAgICAgdmFyIG5ld1NlbGVjdGlvbiA9IG1hc2tVdGlscy5nZXREZWZhdWx0U2VsZWN0aW9uRm9yVmFsdWUoX2xhc3RTdGF0ZS52YWx1ZSk7XG5cbiAgICAgICAgICB2YXIgbmV3U3RhdGUgPSBfZXh0ZW5kcyh7fSwgX2xhc3RTdGF0ZSwge1xuICAgICAgICAgICAgc2VsZWN0aW9uOiBuZXdTZWxlY3Rpb25cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNldElucHV0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpbnB1dERvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgIHByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gIH0gLy8gRm9yIGNvbnRyb2xsZWQgaW5wdXRzIHdlIHdhbnQgdG8gcHJvdmlkZSBwcm9wZXJseSBmb3JtYXR0ZWRcbiAgLy8gdmFsdWUgcHJvcFxuXG5cbiAgaWYgKGlzTWFza2VkICYmIGlzQ29udHJvbGxlZCkge1xuICAgIHZhciBpbnB1dCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgIHZhciBpc0ZvY3VzZWQgPSBpbnB1dCAmJiBpc0lucHV0Rm9jdXNlZChpbnB1dCk7XG4gICAgdmFyIG5ld1ZhbHVlID0gaXNGb2N1c2VkIHx8IGFsd2F5c1Nob3dNYXNrIHx8IHByb3BzLnZhbHVlID8gbWFza1V0aWxzLmZvcm1hdFZhbHVlKHByb3BzLnZhbHVlKSA6IHByb3BzLnZhbHVlO1xuXG4gICAgaWYgKGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlKSB7XG4gICAgICBuZXdWYWx1ZSA9IGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlKHtcbiAgICAgICAgbmV4dFN0YXRlOiB7XG4gICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICAgICAgICBlbmQ6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLnZhbHVlO1xuICAgIH1cblxuICAgIHNldElucHV0U3RhdGUoX2V4dGVuZHMoe30sIGdldExhc3RJbnB1dFN0YXRlKCksIHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgIH0pKTtcbiAgfVxuXG4gIHZhciBsYXN0U3RhdGUgPSBnZXRMYXN0SW5wdXRTdGF0ZSgpO1xuICB2YXIgbGFzdFNlbGVjdGlvbiA9IGxhc3RTdGF0ZS5zZWxlY3Rpb247XG4gIHZhciBsYXN0VmFsdWUgPSBsYXN0U3RhdGUudmFsdWU7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc01hc2tlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbnB1dCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgIHZhciBpc0ZvY3VzZWQgPSBpc0lucHV0Rm9jdXNlZChpbnB1dCk7XG4gICAgdmFyIHByZXZpb3VzU2VsZWN0aW9uID0gbGFzdFNlbGVjdGlvbjtcbiAgICB2YXIgY3VycmVudFN0YXRlID0gZ2V0SW5wdXRTdGF0ZSgpO1xuXG4gICAgdmFyIG5ld0lucHV0U3RhdGUgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0YXRlKTsgLy8gVXBkYXRlIHZhbHVlIGZvciB1bmNvbnRyb2xsZWQgaW5wdXRzIHRvIG1ha2Ugc3VyZVxuICAgIC8vIGl0J3MgYWx3YXlzIGluIHN5bmMgd2l0aCBtYXNrIHByb3BzXG5cblxuICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFN0YXRlLnZhbHVlO1xuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gbWFza1V0aWxzLmZvcm1hdFZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB2YXIgaXNWYWx1ZUVtcHR5ID0gbWFza1V0aWxzLmlzVmFsdWVFbXB0eShmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB2YXIgc2hvdWxkRm9ybWF0VmFsdWUgPSAhaXNWYWx1ZUVtcHR5IHx8IGlzRm9jdXNlZCB8fCBhbHdheXNTaG93TWFzaztcblxuICAgICAgaWYgKHNob3VsZEZvcm1hdFZhbHVlKSB7XG4gICAgICAgIG5ld0lucHV0U3RhdGUudmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNWYWx1ZUVtcHR5ICYmICFpc0ZvY3VzZWQpIHtcbiAgICAgICAgbmV3SW5wdXRTdGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzRm9jdXNlZCAmJiAhcHJldmlvdXNJc01hc2tlZCkge1xuICAgICAgLy8gQWRqdXN0IHNlbGVjdGlvbiBpZiBpbnB1dCBnb3QgbWFza2VkIHdoaWxlIGJlaW5nIGZvY3VzZWRcbiAgICAgIG5ld0lucHV0U3RhdGUuc2VsZWN0aW9uID0gbWFza1V0aWxzLmdldERlZmF1bHRTZWxlY3Rpb25Gb3JWYWx1ZShuZXdJbnB1dFN0YXRlLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzQ29udHJvbGxlZCAmJiBpc0ZvY3VzZWQgJiYgcHJldmlvdXNTZWxlY3Rpb24pIHtcbiAgICAgIC8vIFJlc3RvcmUgY3Vyc29yIHBvc2l0aW9uIGlmIHZhbHVlIGhhcyBjaGFuZ2VkIG91dHNpZGUgY2hhbmdlIGV2ZW50XG4gICAgICBpZiAocHJldmlvdXNTZWxlY3Rpb24uc3RhcnQgIT09IG51bGwgJiYgcHJldmlvdXNTZWxlY3Rpb24uZW5kICE9PSBudWxsKSB7XG4gICAgICAgIG5ld0lucHV0U3RhdGUuc2VsZWN0aW9uID0gcHJldmlvdXNTZWxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJlZm9yZU1hc2tlZFN0YXRlQ2hhbmdlKSB7XG4gICAgICBuZXdJbnB1dFN0YXRlID0gYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2Uoe1xuICAgICAgICBjdXJyZW50U3RhdGU6IGN1cnJlbnRTdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiBuZXdJbnB1dFN0YXRlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRJbnB1dFN0YXRlKG5ld0lucHV0U3RhdGUpO1xuICB9KTtcblxuICB2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgIG9uQmx1cjogb25CbHVyLFxuICAgIG9uQ2hhbmdlOiBpc01hc2tlZCAmJiBpc0VkaXRhYmxlID8gb25DaGFuZ2UgOiBwcm9wcy5vbkNoYW5nZSxcbiAgICBvbk1vdXNlRG93bjogaXNNYXNrZWQgJiYgaXNFZGl0YWJsZSA/IG9uTW91c2VEb3duIDogcHJvcHMub25Nb3VzZURvd24sXG4gICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgaW5wdXRSZWYuY3VycmVudCA9IHJlYWN0RG9tLmZpbmRET01Ob2RlKF9yZWYpO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihmb3J3YXJkZWRSZWYpKSB7XG4gICAgICAgIGZvcndhcmRlZFJlZihfcmVmKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9yd2FyZGVkUmVmICE9PSBudWxsICYmIHR5cGVvZiBmb3J3YXJkZWRSZWYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLmN1cnJlbnQgPSBfcmVmO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWU6IGlzTWFza2VkICYmIGlzQ29udHJvbGxlZCA/IGxhc3RWYWx1ZSA6IHByb3BzLnZhbHVlXG4gIH0pO1xuXG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhbGlkYXRlQ2hpbGRyZW4ocHJvcHMsIGNoaWxkcmVuKTsgLy8gV2Ugd3JhcCBjaGlsZHJlbiBpbnRvIGEgY2xhc3MgY29tcG9uZW50IHRvIGJlIGFibGUgdG8gZmluZFxuICAgIC8vIHRoZWlyIGlucHV0IGVsZW1lbnQgdXNpbmcgZmluZERPTU5vZGVcblxuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KElucHV0TWFza0NoaWxkcmVuV3JhcHBlciwgaW5wdXRQcm9wcywgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBpbnB1dFByb3BzKTtcbn0pO1xuSW5wdXRNYXNrLmRpc3BsYXlOYW1lID0gXCJJbnB1dE1hc2tcIjtcbklucHV0TWFzay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsd2F5c1Nob3dNYXNrOiBmYWxzZSxcbiAgbWFza1BsYWNlaG9sZGVyOiBcIl9cIlxufTtcbklucHV0TWFzay5wcm9wVHlwZXMgPSB7XG4gIGFsd2F5c1Nob3dNYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgYmVmb3JlTWFza2VkU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIG1hc2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlZ0V4cCldKSldKSxcbiAgbWFza1BsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRNYXNrO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMSA/IGxlbiAtIDEgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAxOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDFdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkobnVsbCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsImltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGF5bWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgd2lkdGg6IDk4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQoSW5wdXRNYXNrKWBcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcblxyXG4gICAgICAgIDpyZXF1aXJlZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6cmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmludmFsaWQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRzID0gc3R5bGVkLmlucHV0YFxyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuXHJcbiAgICAgICAgOnJlcXVpcmVkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjpyZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6aW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dEJsb2NrID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbiIsImltcG9ydCB7SW5wdXQsIElucHV0QmxvY2t9IGZyb20gJy4vRm9ybUlucHV0U3R5bGVkJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgRm9ybUlucHV0ID0gKHByb3BzKSA9PiB7IFxyXG4gICAgLy/QtNC70Y8g0LjQt9Cx0LXQttCw0L3QuNGPINC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40Y8gdXNlTGF5b3V0RWZmZWN0INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LBcclxuICAgIGNvbnN0IFtzaG93Q2hpbGQsIHNldFNob3dDaGlsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBzZXRTaG93Q2hpbGQodHJ1ZSkgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFt2YWxpZCwgc2V0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWUoZSkge1xyXG4gICAgICAgIGlmKHZhbHVlID09PSBlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1lbHNlIGlmKHByb3BzLnJlZ0V4cC50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkVmFsID0gcHJvcHMudmFsaWRhdGVNZXRob2QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBwcm9wcy5zdGF0ZUNhbGxiYWNrKHZhbGlkVmFsKTtcclxuICAgICAgICAgICAgLy8gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBzZXRWYWxpZCh0cnVlKTsgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgaW52YWxpZFZhbCA9IHByb3BzLnZhbGlkYXRlTWV0aG9kKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gcHJvcHMuc3RhdGVDYWxsYmFjayhpbnZhbGlkVmFsKTtcclxuICAgICAgICAgICAgLy8gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRWYWxpZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2hvd0NoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1lbHNlIHJldHVybihcclxuICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlkfT57cHJvcHMubGFiZWxOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIG1hc2s9e3Byb3BzLm1hc2sgfCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBoYW5kbGVJbnB1dFZhbHVlKGUpfT5cclxuICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICAgICAgPGRpdj57dmFsaWQgPyBwcm9wcy52YWxpZGF0aW9uRXZlbnRzLnZhbGlkLnZhbHVlIDogcHJvcHMudmFsaWRhdGlvbkV2ZW50cy5pbnZhbGlkLnZhbHVlfTwvZGl2PlxyXG4gICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUlucHV0IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkKElucHV0TWFzaylgXHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dEJsb2NrID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHtQYXltZW50Q29udGFpbmVyLCBJbnB1dEJsb2NrLElucHV0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheW1lbnRQYWdlU3R5bGVkJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50L0Zvcm1JbnB1dCdcclxuXHJcbmNvbnN0IFBheW1lbnRQYWdlID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C40YfQtdGB0LrQuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB2YWxpZHBob25lIHZhbGlkcGF5bWVudCDRh9GC0L7QsdGLINCy0LrQu9GO0YfQsNGC0Ywg0LLRi9C60LvRjtGH0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQaG9uZSwgc2V0VmFsaWRQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsaWRQYXltZW50LCBzZXRWYWxpZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbGlkRm9ybSwgc2V0VmFsaWRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIHBheW1lbnQ6ICcnLFxyXG4gICAgfSlcclxuICAgIC8v0YHQtNC10LvQsNGC0Ywg0LvQvtCz0LjQutGDINC00LvRjyDQvtGC0LrQu9GO0YfQtdC90LjRjyDQutC90L7Qv9C60LhcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzd2l0Y2goaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzogXHJcbiAgICAgICAgICAgICAgICBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oaW5wdXROYW1lLCBwaG9uZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGF5bWVudCc6XHJcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybShpbnB1dE5hbWUsIHBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkTmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbkVycm9ycyA9IGVycm9ycztcclxuICAgICAgICBsZXQgaXNcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWVsZE5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGhvbmUsIHBheW1lbnQpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXltZW50Q29udGFpbmVyPiAgXHJcbiAgICAgICAgICAgICAgICA8aDE+0J7Qv9C70LDRgtCwIHtkYXRhLm9wZXJhdG9yTmFtZX08L2gxPiAgICBcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IGhhbmRsZVVzZXJJbnB1dChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgtGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50XCI+0KHRg9C80LzQsCDQv9C70LDRgtC10LbQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlVXNlcklucHV0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGC0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiBvbkNsaWNrPXsoZSk9PiB7c2VuZERhdGEoZSl9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BheW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGgxPntkYXRhLmVyck1lc3NhZ2V9PC9oMT5cclxuICAgIH1cclxufVxyXG5cclxuUGF5bWVudFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3BlcmF0b3JzLyR7Y3R4LnF1ZXJ5LnBheU9wZXJhdG9ySUR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50UGFnZVxyXG5cclxuY29uc3QgdmFsaWRhdGlvblBob25lRXZlbnRzID0ge1xyXG4gICAgdmFsaWQ6IHtcclxuICAgICAgICB2YWx1ZTogJ9CS0LXRgNC90L4hISEnLCBcclxuICAgICAgICBib29sOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCcsXHJcbiAgICAgICAgYm9vbDogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdmFsaWRhdGlvblBheW1lbnRFdmVudHMgPSB7XHJcbiAgICB2YWxpZDoge1xyXG4gICAgICAgIHZhbHVlOiAn0JLQtdGA0L3QviEhIScsIFxyXG4gICAgICAgIGJvb2w6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgdmFsdWU6ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINC+0YIgMSDQtNC+IDEwMDAg0YDRg9Cx0LvQtdC5JyxcclxuICAgICAgICBib29sOiBmYWxzZVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==