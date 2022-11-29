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

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.css */ "./global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Cart */ "./store/Cart.tsx");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const MyApp = ({
  Component,
  pageProps
}) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return __jsx(_store_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/Cart.tsx":
/*!************************!*\
  !*** ./store/Cart.tsx ***!
  \************************/
/*! exports provided: useCart, useCartMutations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartMutations", function() { return useCartMutations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\store\\Cart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const defaultState = {};
const CartItemsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultState);
const CartDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(() => {});
const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(cartReducers, defaultState);
  return __jsx(CartItemsContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(CartDispatchContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, children));
};
function cartReducers(state, {
  item,
  type,
  quantity: qtyToAdd = 1
}) {
  const existingCartItem = state[item.id];
  switch (type) {
    case 'add':
      {
        if (existingCartItem != undefined) {
          const quantity = existingCartItem.quantity + qtyToAdd;
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }
        return _objectSpread(_objectSpread({}, state), {}, {
          [item.id]: _objectSpread(_objectSpread({}, item), {}, {
            quantity: qtyToAdd
          })
        });
      }
    case 'remove':
      {
        if (existingCartItem == undefined) {
          return state;
        }
        const quantity = existingCartItem.quantity - 1;
        if (quantity > 0) {
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }
        const newCartItems = _objectSpread({}, state);
        delete newCartItems[item.id];
        return newCartItems;
      }
    default:
      {
        throw new Error(`Unhandled action type: ${type}`);
      }
  }
}
const getCartSubTotal = (sum, item) => {
  sum += item.price * item.quantity;
  return sum;
};
const getCartCount = (sum, item) => sum + item.quantity;
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */
const useCart = () => {
  const itemsById = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CartItemsContext);
  const items = Object.values(itemsById);
  // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);
  return {
    items,
    itemsById,
    count,
    subTotal
  };
};
const useCartMutations = () => {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CartDispatchContext);
  const addToCart = (product, quantity) => dispatch({
    type: 'add',
    item: product,
    quantity
  });
  const removeFromCart = product => dispatch({
    type: 'remove',
    item: product
  });
  return {
    addToCart,
    removeFromCart
  };
};
/* harmony default export */ __webpack_exports__["default"] = (CartProvider);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ2FydC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlZmF1bHRTdGF0ZSIsIkNhcnRJdGVtc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJDYXJ0RGlzcGF0Y2hDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImNhcnRSZWR1Y2VycyIsIml0ZW0iLCJ0eXBlIiwicXVhbnRpdHkiLCJxdHlUb0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJpZCIsInVuZGVmaW5lZCIsIm5ld0NhcnRJdGVtcyIsIkVycm9yIiwiZ2V0Q2FydFN1YlRvdGFsIiwic3VtIiwicHJpY2UiLCJnZXRDYXJ0Q291bnQiLCJ1c2VDYXJ0IiwiaXRlbXNCeUlkIiwidXNlQ29udGV4dCIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiY291bnQiLCJyZWR1Y2UiLCJzdWJUb3RhbCIsInVzZUNhcnRNdXRhdGlvbnMiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicmVtb3ZlRnJvbUNhcnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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d0IsT0FBTztJQUNidEI7RUFDRixDQUFDLENBQUM7RUFFSixNQUFNdUIsY0FBYyxHQUFJRCxPQUFpQixJQUN2QzNCLFFBQVEsQ0FBQztJQUNQSSxJQUFJLEVBQUUsUUFBUTtJQUNkRCxJQUFJLEVBQUV3QjtFQUNSLENBQUMsQ0FBQztFQUVKLE9BQU87SUFDTEQsU0FBUztJQUNURTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBRWMvQiwyRUFBWSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJM0Isa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnXHJcbmltcG9ydCAnLi4vZ2xvYmFsLmNzcydcclxuXHJcbmltcG9ydCBDYXJ0UHJvdmlkZXIgZnJvbSAnQHN0b3JlL0NhcnQnXHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XHJcbiAgLy8gQWRpdGlvbmFsIHByb3BzXHJcbiAgLy8gQWRpdGlvbmFsIGxheW91dFxyXG4gIC8vIE1hbmVqYXIgZXJyb3JlcyAtIGNvbXBvbmVudERpZENhdGNoXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0UHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQ2FydFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgdHlwZSBDYXJ0SXRlbVR5cGUgPSBUUHJvZHVjdCAmIHsgcXVhbnRpdHk6IG51bWJlciB9XHJcblxyXG5leHBvcnQgdHlwZSBDYXJ0U3RhdGUgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogQ2FydEl0ZW1UeXBlXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPSB7XHJcbiAgdHlwZTogJ2FkZCcgfCAncmVtb3ZlJ1xyXG4gIGl0ZW06IFRQcm9kdWN0XHJcbiAgcXVhbnRpdHk/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge30gYXMgQ2FydFN0YXRlXHJcblxyXG5jb25zdCBDYXJ0SXRlbXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0U3RhdGUpXHJcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCgoKSA9PiB7fSkgYXMgRGlzcGF0Y2g8XHJcbiAgQ2FydEFjdGlvblxyXG4+KVxyXG5cclxuY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXJzLCBkZWZhdWx0U3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9DYXJ0SXRlbXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gY2FydFJlZHVjZXJzKFxyXG4gIHN0YXRlOiBDYXJ0U3RhdGUsXHJcbiAgeyBpdGVtLCB0eXBlLCBxdWFudGl0eTogcXR5VG9BZGQgPSAxIH06IENhcnRBY3Rpb25cclxuKSB7XHJcbiAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9IHN0YXRlW2l0ZW0uaWRdXHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnYWRkJzoge1xyXG4gICAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGV4aXN0aW5nQ2FydEl0ZW0ucXVhbnRpdHkgKyBxdHlUb0FkZFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIFtpdGVtLmlkXToge1xyXG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFtpdGVtLmlkXToge1xyXG4gICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgIHF1YW50aXR5OiBxdHlUb0FkZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAncmVtb3ZlJzoge1xyXG4gICAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcXVhbnRpdHkgPSBleGlzdGluZ0NhcnRJdGVtLnF1YW50aXR5IC0gMVxyXG4gICAgICBpZiAocXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XHJcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nQ2FydEl0ZW0sXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld0NhcnRJdGVtcyA9IHsgLi4uc3RhdGUgfVxyXG4gICAgICBkZWxldGUgbmV3Q2FydEl0ZW1zW2l0ZW0uaWRdXHJcbiAgICAgIHJldHVybiBuZXdDYXJ0SXRlbXNcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke3R5cGV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldENhcnRTdWJUb3RhbCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiB7XHJcbiAgc3VtICs9IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5XHJcbiAgcmV0dXJuIHN1bVxyXG59XHJcbmNvbnN0IGdldENhcnRDb3VudCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiBzdW0gKyBpdGVtLnF1YW50aXR5XHJcbi8qKlxyXG4gKiBIZXkgdGhlcmUgaW5zYXRpYWJseSBicmFpbixcclxuICogQXJlIHlvdSBpbnRlcmVzdGVkIGluIHRoaXMgcGF0dGVybiB3aGVyZSB0aGUgQ29udGV4dCB2YWx1ZXMgYXJlXHJcbiAqIGV4cG9zZWQgd2l0aG91dCBhY3R1YWxseSBwcm92aW5kaW5nIGFjY2VzcyB0byB0aGUgQ29udGV4dCBpdHNlbGYgOilcclxuICogaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS9ibG9nL2hvdy10by11c2UtcmVhY3QtY29udGV4dC1lZmZlY3RpdmVseVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXRlbXNCeUlkID0gdXNlQ29udGV4dChDYXJ0SXRlbXNDb250ZXh0KVxyXG4gIGNvbnN0IGl0ZW1zID0gT2JqZWN0LnZhbHVlcyhpdGVtc0J5SWQpXHJcbiAgLy8gTm90IGZhbWlsaWFyIHdpdGggQXJyYXkucmVkdWNlPyA6KVxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZVxyXG4gIGNvbnN0IGNvdW50ID0gaXRlbXMucmVkdWNlKGdldENhcnRDb3VudCwgMClcclxuICBjb25zdCBzdWJUb3RhbCA9IGl0ZW1zLnJlZHVjZShnZXRDYXJ0U3ViVG90YWwsIDApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtcyxcclxuICAgIGl0ZW1zQnlJZCxcclxuICAgIGNvdW50LFxyXG4gICAgc3ViVG90YWwsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0TXV0YXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KVxyXG5cclxuICBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdDogVFByb2R1Y3QsIHF1YW50aXR5PzogbnVtYmVyKSA9PlxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgaXRlbTogcHJvZHVjdCxcclxuICAgICAgcXVhbnRpdHksXHJcbiAgICB9KVxyXG5cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCkgPT5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ3JlbW92ZScsXHJcbiAgICAgIGl0ZW06IHByb2R1Y3QsXHJcbiAgICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkVG9DYXJ0LFxyXG4gICAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==