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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\Footer\\Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Footer = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
  vertical: true,
  as: "footer",
  style: {
    padding: '4em 0em',
    marginTop: '3em',
    borderTop: '1px solid #f2f2f2'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  text: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
  stackable: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
  width: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
  as: "h4",
  content: "Nosotros",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 15
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 19
  }
}, "Conoce m\xE1s"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
  width: 5,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
  as: "h4",
  content: "Servicios",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 13
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 15
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 19
  }
}, "Todos los productos"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
  width: 7,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
  as: "h4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}, "Hecho para"), __jsx("p", {
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://platzi.com/",
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 15
  }
}, "Platzi y su curso de Next.JS"), " de Platzi dictado por", ' ', __jsx("a", {
  href: "https://twitter.com/jonalvarezz",
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 15
  }
}, "@jonalvarezz")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
  horizontal: true,
  style: {
    display: 'flex'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 13
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
  icon: "twitter",
  style: {
    display: 'flex'
  },
  content: __jsx("a", {
    href: "https://twitter.com/jonalvarezz",
    className: "jsx-2456406465",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 26
    }
  }, "Twitter"),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 15
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
  icon: "github",
  style: {
    display: 'flex'
  },
  content: __jsx("a", {
    href: "https://github.com/jonalvarezz/platzi-nextjs",
    className: "jsx-2456406465",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "GitHub"),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 15
  }
}))))), __jsx("div", {
  className: "jsx-2456406465" + " " + "colophon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 7
  }
}, __jsx("p", {
  className: "jsx-2456406465" + " " + "colophon-entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }
}, "Icons made by", ' ', __jsx("a", {
  target: "_blank",
  href: "https://www.flaticon.com/authors/freepik",
  title: "Freepik",
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
}, "Freepik"), ' from ', __jsx("a", {
  target: "_blank",
  href: "https://www.flaticon.com/",
  title: "Flaticon",
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 11
  }
}, "www.flaticon.com")), __jsx("p", {
  className: "jsx-2456406465" + " " + "colophon-entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }
}, "Avocado images taken from", ' ', __jsx("a", {
  target: "_blank",
  href: "https://www.californiaavocado.com/avocado101/avocado-varieties",
  title: "California Avocado",
  className: "jsx-2456406465" + " " + "acnor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 11
  }
}, "Avocado 101"), ' at ', __jsx("a", {
  target: "_blank",
  href: "https://www.californiaavocado.com",
  title: "Flaticon",
  className: "jsx-2456406465",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 11
  }
}, "California Avocado")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2456406465",
  __self: undefined
}, ".colophon.jsx-2456406465{text-align:center;margin-top:3.2rem;font-size:0.8rem;}.colophon-entry.jsx-2456406465{color:grey;margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBEaWVnb1xcRG9jdW1lbnRzXFxFc2N1ZWxhIGRlIGRlc2Fycm9sbG8gd2ViXFxOZXh0IEpTXFxwcm95ZWN0byBBdm9jYWRvXFxjb21wb25lbnRzXFxGb290ZXJcXEZvb3Rlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0dnQixBQUcyQixBQUtQLFdBQ0ssT0FMRSxTQU1wQixTQUxtQixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKdWFuIERpZWdvXFxEb2N1bWVudHNcXEVzY3VlbGEgZGUgZGVzYXJyb2xsbyB3ZWJcXE5leHQgSlNcXHByb3llY3RvIEF2b2NhZG9cXGNvbXBvbmVudHNcXEZvb3RlclxcRm9vdGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBTZWdtZW50LCBDb250YWluZXIsIEdyaWQsIExpc3QsIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxTZWdtZW50XHJcbiAgICB2ZXJ0aWNhbFxyXG4gICAgYXM9XCJmb290ZXJcIlxyXG4gICAgc3R5bGU9e3tcclxuICAgICAgcGFkZGluZzogJzRlbSAwZW0nLFxyXG4gICAgICBtYXJnaW5Ub3A6ICczZW0nLFxyXG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2YyZjJmMicsXHJcbiAgICB9fVxyXG4gID5cclxuICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoNFwiIGNvbnRlbnQ9XCJOb3NvdHJvc1wiIC8+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkNvbm9jZSBtw6FzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs1fT5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIlNlcnZpY2lvc1wiIC8+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Ub2RvcyBsb3MgcHJvZHVjdG9zPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs3fT5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCI+SGVjaG8gcGFyYTwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF0emkuY29tL1wiPlBsYXR6aSB5IHN1IGN1cnNvIGRlIE5leHQuSlM8L2E+IGRlXHJcbiAgICAgICAgICAgICAgUGxhdHppIGRpY3RhZG8gcG9yeycgJ31cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9qb25hbHZhcmV6elwiPkBqb25hbHZhcmV6ejwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8TGlzdCBob3Jpem9udGFsIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICBpY29uPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2pvbmFsdmFyZXp6XCI+VHdpdHRlcjwvYT59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vam9uYWx2YXJlenovcGxhdHppLW5leHRqc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Bob25cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xvcGhvbi1lbnRyeVwiPlxyXG4gICAgICAgICAgSWNvbnMgbWFkZSBieXsnICd9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRnJlZXBpa1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEZyZWVwaWtcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIHsnIGZyb20gJ31cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vXCIgdGl0bGU9XCJGbGF0aWNvblwiPlxyXG4gICAgICAgICAgICB3d3cuZmxhdGljb24uY29tXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9waG9uLWVudHJ5XCI+XHJcbiAgICAgICAgICBBdm9jYWRvIGltYWdlcyB0YWtlbiBmcm9teycgJ31cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjbm9yXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNhbGlmb3JuaWFhdm9jYWRvLmNvbS9hdm9jYWRvMTAxL2F2b2NhZG8tdmFyaWV0aWVzXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJDYWxpZm9ybmlhIEF2b2NhZG9cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBdm9jYWRvIDEwMVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgeycgYXQgJ31cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5jYWxpZm9ybmlhYXZvY2Fkby5jb21cIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkZsYXRpY29uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FsaWZvcm5pYSBBdm9jYWRvXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbG9waG9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMy4ycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb2xvcGhvbi1lbnRyeSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvU2VnbWVudD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Juan Diego\\\\Documents\\\\Escuela de desarrollo web\\\\Next JS\\\\proyecto Avocado\\\\components\\\\Footer\\\\Footer.tsx */"));
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/KawaiiHeader/AnimatedHeader.tsx":
/*!****************************************************!*\
  !*** ./components/KawaiiHeader/AnimatedHeader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/SVGIcons */ "./components/SVGIcons/index.ts");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\KawaiiHeader\\AnimatedHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AnimatedHeader = ({
  visible,
  onClick,
  onComplete
}) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  size: "huge",
  as: "h1",
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}, "Platzi", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
  animation: "jiggle",
  visible: visible,
  duration: 900,
  onComplete: onComplete,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_2__["Avocado"], {
  size: "58px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
})), "Avo");
/* harmony default export */ __webpack_exports__["default"] = (AnimatedHeader);

/***/ }),

/***/ "./components/KawaiiHeader/KawaiiHeader.tsx":
/*!**************************************************!*\
  !*** ./components/KawaiiHeader/KawaiiHeader.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimatedHeader */ "./components/KawaiiHeader/AnimatedHeader.tsx");
/* harmony import */ var _RottenHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RottenHeader */ "./components/KawaiiHeader/RottenHeader.tsx");
/* harmony import */ var _ModalHeaderContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalHeaderContent */ "./components/KawaiiHeader/ModalHeaderContent.tsx");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\KawaiiHeader\\KawaiiHeader.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const KawaiiHeader = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: meMori,
    1: setMeMori
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: modalOpen,
    1: setModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const closeModal = () => setModalOpen(false);
  const toggleVisible = () => setVisible(prevVisible => !prevVisible);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.setTimeout(toggleVisible, 350);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (count === 4) {
      setMeMori(true);
      setModalOpen(true);
    }
  }, [count]);
  return __jsx("div", {
    className: "jsx-927310824" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, meMori ? __jsx(_RottenHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }) : __jsx(_AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visible: visible,
    onClick: toggleVisible,
    onComplete: () => setCount(prevCount => prevCount + 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Confirm"], {
    open: modalOpen,
    content: _ModalHeaderContent__WEBPACK_IMPORTED_MODULE_5__["default"],
    onCancel: closeModal,
    onConfirm: closeModal,
    cancelButton: "Ay, lo siento",
    confirmButton: "OK",
    closeOnDimmerClick: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "927310824",
    __self: undefined
  }, ".container.jsx-927310824{margin:2rem 0 3rem;}.container.jsx-927310824 .header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBEaWVnb1xcRG9jdW1lbnRzXFxFc2N1ZWxhIGRlIGRlc2Fycm9sbG8gd2ViXFxOZXh0IEpTXFxwcm95ZWN0byBBdm9jYWRvXFxjb21wb25lbnRzXFxLYXdhaWlIZWFkZXJcXEthd2FpaUhlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RTLEFBR2dDLEFBR04sbUJBRmYsdURBR3FCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXEp1YW4gRGllZ29cXERvY3VtZW50c1xcRXNjdWVsYSBkZSBkZXNhcnJvbGxvIHdlYlxcTmV4dCBKU1xccHJveWVjdG8gQXZvY2Fkb1xcY29tcG9uZW50c1xcS2F3YWlpSGVhZGVyXFxLYXdhaWlIZWFkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29uZmlybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IFB1ZXNWaXZvIGZyb20gJy4vQW5pbWF0ZWRIZWFkZXInXHJcbmltcG9ydCBQdWVzTXVlcm8gZnJvbSAnLi9Sb3R0ZW5IZWFkZXInXHJcbmltcG9ydCBNb2RhbEhlYWRlckNvbnRlbnQgZnJvbSAnLi9Nb2RhbEhlYWRlckNvbnRlbnQnXHJcblxyXG5jb25zdCBLYXdhaWlIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbbWVNb3JpLCBzZXRNZU1vcmldID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbihmYWxzZSlcclxuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4gc2V0VmlzaWJsZSgocHJldlZpc2libGUpID0+ICFwcmV2VmlzaWJsZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRvZ2dsZVZpc2libGUsIDM1MClcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjb3VudCA9PT0gNCkge1xyXG4gICAgICBzZXRNZU1vcmkodHJ1ZSlcclxuICAgICAgc2V0TW9kYWxPcGVuKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW2NvdW50XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIHttZU1vcmkgPyAoXHJcbiAgICAgICAgPFB1ZXNNdWVybyAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxQdWVzVml2b1xyXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVZpc2libGV9XHJcbiAgICAgICAgICBvbkNvbXBsZXRlPXsoKSA9PiBzZXRDb3VudCgocHJldkNvdW50KSA9PiBwcmV2Q291bnQgKyAxKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPENvbmZpcm1cclxuICAgICAgICBvcGVuPXttb2RhbE9wZW59XHJcbiAgICAgICAgY29udGVudD17TW9kYWxIZWFkZXJDb250ZW50fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIG9uQ29uZmlybT17Y2xvc2VNb2RhbH1cclxuICAgICAgICBjYW5jZWxCdXR0b249XCJBeSwgbG8gc2llbnRvXCJcclxuICAgICAgICBjb25maXJtQnV0dG9uPVwiT0tcIlxyXG4gICAgICAgIGNsb3NlT25EaW1tZXJDbGljaz17ZmFsc2V9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDAgM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250YWluZXIgOmdsb2JhbCguaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEthd2FpaUhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Juan Diego\\\\Documents\\\\Escuela de desarrollo web\\\\Next JS\\\\proyecto Avocado\\\\components\\\\KawaiiHeader\\\\KawaiiHeader.tsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (KawaiiHeader);

/***/ }),

/***/ "./components/KawaiiHeader/ModalHeaderContent.tsx":
/*!********************************************************!*\
  !*** ./components/KawaiiHeader/ModalHeaderContent.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/SVGIcons */ "./components/SVGIcons/index.ts");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\KawaiiHeader\\ModalHeaderContent.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ModalHeaderContent = () => {
  return __jsx("div", {
    className: "jsx-3586822566" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    columns: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    verticalAlign: 'middle',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_3__["PosMeMuero"], {
    size: "154px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: "11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Mataste el aguacate"), __jsx("p", {
    className: "jsx-3586822566",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Lo tocaste tanto que lo mataste."), __jsx("p", {
    className: "jsx-3586822566",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Por otro lado, eres una persona muy curiosa y has descubierto esto. :)")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3586822566",
    __self: undefined
  }, ".container.jsx-3586822566{padding:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBEaWVnb1xcRG9jdW1lbnRzXFxFc2N1ZWxhIGRlIGRlc2Fycm9sbG8gd2ViXFxOZXh0IEpTXFxwcm95ZWN0byBBdm9jYWRvXFxjb21wb25lbnRzXFxLYXdhaWlIZWFkZXJcXE1vZGFsSGVhZGVyQ29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUd3QixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSnVhbiBEaWVnb1xcRG9jdW1lbnRzXFxFc2N1ZWxhIGRlIGRlc2Fycm9sbG8gd2ViXFxOZXh0IEpTXFxwcm95ZWN0byBBdm9jYWRvXFxjb21wb25lbnRzXFxLYXdhaWlIZWFkZXJcXE1vZGFsSGVhZGVyQ29udGVudC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdyaWQsIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IHsgUG9zTWVNdWVybyB9IGZyb20gJ0Bjb21wb25lbnRzL1NWR0ljb25zJ1xyXG5cclxuY29uc3QgTW9kYWxIZWFkZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cclxuICAgICAgICA8R3JpZC5Sb3cgdmVydGljYWxBbGlnbj17J21pZGRsZSd9PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPVwiNVwiPlxyXG4gICAgICAgICAgICA8UG9zTWVNdWVybyBzaXplPVwiMTU0cHhcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD1cIjExXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMlwiPk1hdGFzdGUgZWwgYWd1YWNhdGU8L0hlYWRlcj5cclxuICAgICAgICAgICAgPHA+TG8gdG9jYXN0ZSB0YW50byBxdWUgbG8gbWF0YXN0ZS48L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFBvciBvdHJvIGxhZG8sIGVyZXMgdW5hIHBlcnNvbmEgbXV5IGN1cmlvc2EgeSBoYXMgZGVzY3ViaWVydG9cclxuICAgICAgICAgICAgICBlc3RvLiA6KVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsSGVhZGVyQ29udGVudFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Juan Diego\\\\Documents\\\\Escuela de desarrollo web\\\\Next JS\\\\proyecto Avocado\\\\components\\\\KawaiiHeader\\\\ModalHeaderContent.tsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (ModalHeaderContent);

/***/ }),

/***/ "./components/KawaiiHeader/RottenHeader.tsx":
/*!**************************************************!*\
  !*** ./components/KawaiiHeader/RottenHeader.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/SVGIcons */ "./components/SVGIcons/index.ts");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\KawaiiHeader\\RottenHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const RottenHeader = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  size: "huge",
  as: "h1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, "Platzi", __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_2__["PosMeMuero"], {
  size: "58px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), "Avo");
/* harmony default export */ __webpack_exports__["default"] = (RottenHeader);

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Navbar/Navbar */ "./components/Navbar/Navbar.tsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Footer/Footer */ "./components/Footer/Footer.tsx");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\Layout\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  as: "main",
  text: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, children), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/SVGIcons */ "./components/SVGIcons/index.ts");
/* harmony import */ var _ShoppingCartIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShoppingCartIcon */ "./components/Navbar/ShoppingCartIcon.tsx");
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/Cart */ "./store/Cart.tsx");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\Navbar\\Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Navbar = () => {
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    count: cartCount
  } = Object(_store_Cart__WEBPACK_IMPORTED_MODULE_7__["useCart"])();
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    size: "huge",
    borderless: true,
    pointing: true,
    as: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    active: pathname === '/',
    title: "Inicio | Todos los productos",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_5__["Avocado"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), "Avo Store")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Menu, {
    position: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cart",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    active: pathname === '/cart',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_ShoppingCartIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cartCount: cartCount,
    name: "Canasta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1732775377",
    __self: undefined
  }, ".ui.menu.huge{font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBEaWVnb1xcRG9jdW1lbnRzXFxFc2N1ZWxhIGRlIGRlc2Fycm9sbG8gd2ViXFxOZXh0IEpTXFxwcm95ZWN0byBBdm9jYWRvXFxjb21wb25lbnRzXFxOYXZiYXJcXE5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUN5QixBQUc0QixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKdWFuIERpZWdvXFxEb2N1bWVudHNcXEVzY3VlbGEgZGUgZGVzYXJyb2xsbyB3ZWJcXE5leHQgSlNcXHByb3llY3RvIEF2b2NhZG9cXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE1lbnUsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IHsgQXZvY2FkbyB9IGZyb20gJ0Bjb21wb25lbnRzL1NWR0ljb25zJ1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICcuL1Nob3BwaW5nQ2FydEljb24nXHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICdAc3RvcmUvQ2FydCdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgY291bnQ6IGNhcnRDb3VudCB9ID0gdXNlQ2FydCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBzaXplPVwiaHVnZVwiIGJvcmRlcmxlc3MgcG9pbnRpbmcgYXM9XCJoZWFkZXJcIj5cclxuICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgIGFjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ31cclxuICAgICAgICAgICAgdGl0bGU9XCJJbmljaW8gfCBUb2RvcyBsb3MgcHJvZHVjdG9zXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEF2b2NhZG8gLz5cclxuICAgICAgICAgICAgQXZvIFN0b3JlXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBhY3RpdmU9e3BhdGhuYW1lID09PSAnL2NhcnQnfT5cclxuICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiBjYXJ0Q291bnQ9e2NhcnRDb3VudH0gbmFtZT1cIkNhbmFzdGFcIiAvPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuTWVudT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnVpLm1lbnUuaHVnZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTWVudT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Juan Diego\\\\Documents\\\\Escuela de desarrollo web\\\\Next JS\\\\proyecto Avocado\\\\components\\\\Navbar\\\\Navbar.tsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Navbar/ShoppingCartIcon.tsx":
/*!************************************************!*\
  !*** ./components/Navbar/ShoppingCartIcon.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/SVGIcons */ "./components/SVGIcons/index.ts");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\Navbar\\ShoppingCartIcon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ShoppingCartIcon = ({
  cartCount,
  name
}) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`;
    }
    if (cartCount > 9) {
      return __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, "9", __jsx("sup", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 12
        }
      }, "+"));
    }
    return `(${cartCount})`;
  };
  return __jsx("div", {
    className: "jsx-3475005549" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_2__["Basket"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-3475005549" + " " + "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, ` ${name} `, showCartCount()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3475005549",
    __self: undefined
  }, ".container.jsx-3475005549{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-3475005549{margin-left:0.5rem;}.text.jsx-3475005549 span.jsx-3475005549{font-size:smaller;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBEaWVnb1xcRG9jdW1lbnRzXFxFc2N1ZWxhIGRlIGRlc2Fycm9sbG8gd2ViXFxOZXh0IEpTXFxwcm95ZWN0byBBdm9jYWRvXFxjb21wb25lbnRzXFxOYXZiYXJcXFNob3BwaW5nQ2FydEljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCa0IsQUFHd0IsQUFJTSxBQUdELGtCQUNwQixDQUhBLHVEQUpxQiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKdWFuIERpZWdvXFxEb2N1bWVudHNcXEVzY3VlbGEgZGUgZGVzYXJyb2xsbyB3ZWJcXE5leHQgSlNcXHByb3llY3RvIEF2b2NhZG9cXGNvbXBvbmVudHNcXE5hdmJhclxcU2hvcHBpbmdDYXJ0SWNvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJhc2tldCB9IGZyb20gJ0Bjb21wb25lbnRzL1NWR0ljb25zJ1xyXG5cclxudHlwZSBTaG9wcGluZ0NhcnRJY29uUHJvcHMgPSB7XHJcbiAgY2FydENvdW50OiBudW1iZXJcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgU2hvcHBpbmdDYXJ0SWNvbiA9ICh7IGNhcnRDb3VudCwgbmFtZSB9OiBTaG9wcGluZ0NhcnRJY29uUHJvcHMpID0+IHtcclxuICBjb25zdCBzaG93Q2FydENvdW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjYXJ0Q291bnQpIHtcclxuICAgICAgcmV0dXJuIGAoMClgXHJcbiAgICB9XHJcbiAgICBpZiAoY2FydENvdW50ID4gOSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgOTxzdXA+Kzwvc3VwPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAoJHtjYXJ0Q291bnR9KWBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8QmFza2V0IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgIHtgICR7bmFtZX0gYH1cclxuICAgICAgICB7c2hvd0NhcnRDb3VudCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0NhcnRJY29uXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Juan Diego\\\\Documents\\\\Escuela de desarrollo web\\\\Next JS\\\\proyecto Avocado\\\\components\\\\Navbar\\\\ShoppingCartIcon.tsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartIcon);

/***/ }),

/***/ "./components/ProductList/ProductList.tsx":
/*!************************************************!*\
  !*** ./components/ProductList/ProductList.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\ProductList\\ProductList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const mapProductsToCards = products => products.map(({
  name,
  id,
  price,
  image
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  key: id,
  href: "/product/[id]",
  as: `/product/${id}`,
  passHref: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  as: "a",
  header: name,
  image: image,
  meta: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    style: {
      color: 'dimgray'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, price),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
})));
const ProductList = ({
  products
}) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
  itemsPerRow: 2,
  stackable: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }
}, mapProductsToCards(products));
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./components/SVGIcons/Avocado.tsx":
/*!*****************************************!*\
  !*** ./components/SVGIcons/Avocado.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\SVGIcons\\Avocado.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Avocado = _ref => {
  let {
      size = '34px'
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, ["size"]);
  return __jsx("svg", _extends({
    width: size,
    height: size,
    viewBox: "-99 0 511 512"
  }, otherProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }), __jsx("path", {
    d: "M187.8 38.09c-20.324 20.32-27.742 48.996-30.41 69.043-1.723 12.91 9.266 23.895 22.176 22.176 20.047-2.672 48.719-10.09 69.043-30.41 20.32-20.324 27.742-48.996 30.41-69.047 1.719-12.906-9.266-23.895-22.176-22.176-20.047 2.672-48.723 10.09-69.043 30.414z",
    fill: "#8ee2cf",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M198.63 95.566a7.496 7.496 0 01-5.305-2.195 7.509 7.509 0 010-10.61l39.145-39.144c2.93-2.926 7.68-2.926 10.605 0a7.502 7.502 0 010 10.609L203.93 93.37a7.48 7.48 0 01-5.3 2.195z",
    fill: "#6fce91",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M156.62 115.68c-8.629 0-15.621-6.992-15.621-15.621 0-22.523-18.324-40.848-40.848-40.848-8.629 0-15.625-6.992-15.625-15.621s6.996-15.625 15.625-15.625c39.75 0 72.094 32.344 72.094 72.094 0 8.629-6.996 15.621-15.625 15.621z",
    fill: "#e1b89a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M172.24 100.06a71.81 71.81 0 00-2.86-20.043 123.29 123.29 0 00-33.098 1.031c3 5.684 4.712 12.148 4.712 19.012 0 8.63 6.992 15.621 15.62 15.621 8.63 0 15.626-6.992 15.626-15.62z",
    fill: "#d2996f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M156.62 504.5C74.671 504.5 8 437.828 8 355.88c0-44.492 13.129-67.688 24.711-88.152 10.344-18.281 18.52-32.723 18.52-65.512 0-58.109 47.277-105.39 105.39-105.39 58.109 0 105.39 47.277 105.39 105.39 0 32.789 8.172 47.23 18.52 65.512 11.582 20.465 24.711 43.66 24.711 88.152 0 81.945-66.672 148.62-148.62 148.62z",
    fill: "#4e5660",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M250.63 470.89C89.4 448.304 64.94 206.77 120.97 103.04c-40.621 14.645-69.742 53.57-69.742 99.18 0 32.789-8.176 47.227-18.52 65.508-11.586 20.465-24.711 43.66-24.711 88.152 0 81.949 66.668 148.62 148.62 148.62 35.641 0 68.383-12.613 94.016-33.605z",
    fill: "#383c43",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M34.039 355.88c0-75.926 43.23-75.051 43.23-153.66 0-43.824 35.523-79.348 79.348-79.348 43.824 0 79.352 35.523 79.352 79.348 0 78.613 43.23 77.738 43.23 153.66 0 67.699-54.883 122.58-122.58 122.58-67.699 0-122.58-54.879-122.58-122.58z",
    fill: "#89d47f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M105.57 141.48c-17.301 14.555-28.305 36.355-28.305 60.738 0 78.609-43.23 77.734-43.23 153.66 0 67.699 54.879 122.58 122.58 122.58 22.035 0 42.707-5.816 60.578-15.992-115.52-43.246-142.49-215.11-111.62-320.98z",
    fill: "#5ec783",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M199.05 313.44c-23.438-23.438-61.438-23.438-84.875 0s-23.438 61.434 0 84.871 61.438 23.438 84.875 0 23.438-61.434 0-84.871z",
    fill: "#e1b89a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M205.79 390.27c-64.918 10.973-95.234-59.492-62.641-92.875-26.656 6.117-46.547 29.969-46.547 58.48 0 33.145 26.871 60.016 60.016 60.016 20.348 0 38.316-10.137 49.172-25.621z",
    fill: "#d2996f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M120.71 275.37c0-9.234-9.398-16.719-20.996-16.719-11.594 0-20.996 7.484-20.996 16.719 0 9.234 9.402 16.719 20.996 16.719 11.598 0 20.996-7.484 20.996-16.719zM234.52 275.37c0-9.234-9.398-16.719-20.996-16.719-11.594 0-20.996 7.484-20.996 16.719 0 9.234 9.402 16.719 20.996 16.719 11.598 0 20.996-7.484 20.996-16.719z",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M201.29 266.19a7.5 7.5 0 007.5-7.5v-7.414a7.5 7.5 0 00-7.5-7.5 7.497 7.497 0 00-7.5 7.5v7.414c0 4.144 3.356 7.5 7.5 7.5zM156.622 423.4c37.23 0 67.516-30.289 67.516-67.516 0-37.23-30.285-67.516-67.516-67.516-37.227 0-67.516 30.285-67.516 67.516 0 37.227 30.289 67.516 67.516 67.516zm0-120.03c28.957 0 52.516 23.559 52.516 52.516 0 28.957-23.559 52.516-52.516 52.516-28.957 0-52.516-23.559-52.516-52.516 0-28.957 23.559-52.516 52.516-52.516zm130.43-39.332c-10.184-17.996-17.543-31-17.543-61.812 0-32.555-13.859-61.93-35.977-82.551 7.688-4.445 14.527-9.613 20.383-15.465 5.121-5.121 9.762-11.02 13.793-17.527a7.507 7.507 0 00-2.426-10.328 7.501 7.501 0 00-10.324 2.426c-3.426 5.531-7.347 10.516-11.652 14.82-6.18 6.18-13.703 11.508-22.41 15.879-12.328-8.57-26.43-14.754-41.645-17.863a79.24 79.24 0 00-4.734-19.902c4.812-11.242 11.043-20.773 18.586-28.312 18.746-18.746 45.547-25.727 64.73-28.281 3.816-.508 7.566.758 10.28 3.473 2.716 2.714 3.981 6.46 3.474 10.28-.883 6.626-2.157 13.09-3.782 19.216a7.501 7.501 0 005.32 9.175c4.005 1.055 8.11-1.32 9.176-5.324 1.79-6.738 3.188-13.832 4.153-21.086 1.133-8.488-1.688-16.824-7.73-22.867-6.048-6.047-14.38-8.867-22.872-7.734-21.477 2.86-51.64 10.828-73.355 32.543-6.379 6.379-11.945 13.89-16.637 22.422a80.293 80.293 0 00-10.227-12.152c-14.953-14.566-34.656-22.59-55.484-22.59-12.75 0-23.125 10.37-23.125 23.125 0 12.75 10.375 23.12 23.125 23.12 15.57 0 28.72 10.657 32.352 25.22-50.695 11.078-88.77 56.316-88.77 110.29 0 30.812-7.36 43.816-17.547 61.82C14.145 285.323.5 309.432.5 355.893c0 32.602 9.989 63.852 28.883 90.383a7.5 7.5 0 0010.461 1.754c3.371-2.403 4.16-7.086 1.758-10.457C24.524 413.6 15.5 385.353 15.5 355.893c0-42.512 12.609-64.793 23.738-84.457 10.457-18.48 19.492-34.438 19.492-69.203 0-53.977 43.914-97.887 97.887-97.887 4.836 0 9.586.355 14.23 1.035.07.015.145.02.219.031 47.148 7.004 83.44 47.754 83.44 96.82 0 34.766 9.032 50.723 19.493 69.207 11.129 19.66 23.738 41.941 23.738 84.453 0 77.816-63.305 141.12-141.12 141.12-33.891 0-66.676-12.246-92.32-34.48-3.13-2.715-7.867-2.375-10.582.754a7.506 7.506 0 00.754 10.582c28.37 24.598 64.648 38.145 102.15 38.145 86.086 0 156.12-70.035 156.12-156.12 0-46.465-13.645-70.574-25.688-91.848zm-130.43-174.7c-3.113 0-6.195.133-9.246.379-4.746-21.844-24.145-37.996-47.223-37.996-4.48 0-8.125-3.645-8.125-8.121 0-4.48 3.644-8.125 8.125-8.125 16.895 0 32.883 6.512 45.016 18.332 10.016 9.758 16.48 22.23 18.69 35.77a113.892 113.892 0 00-7.237-.238zm0 396.63c71.727 0 130.08-58.352 130.08-130.08 0-39.609-11.34-59.645-22.309-79.02-10.762-19.016-20.926-36.973-20.926-74.645 0-47.891-38.957-86.852-86.848-86.852s-86.852 38.961-86.852 86.852c0 37.672-10.164 55.629-20.922 74.645-10.969 19.375-22.309 39.41-22.309 79.02.004 71.727 58.355 130.08 130.08 130.08zm-94.719-201.71c11.242-19.867 22.871-40.406 22.871-82.031 0-39.617 32.23-71.848 71.848-71.848 39.617 0 71.852 32.23 71.852 71.848 0 41.625 11.625 62.164 22.871 82.031 10.469 18.5 20.359 35.977 20.359 71.633 0 63.453-51.625 115.08-115.08 115.08-63.453 0-115.08-51.625-115.08-115.08 0-35.656 9.89-53.133 20.359-71.633zm50.055-18.059a7.5 7.5 0 007.5-7.5v-7.414a7.5 7.5 0 00-7.5-7.5 7.497 7.497 0 00-7.5 7.5v7.414c0 4.144 3.356 7.5 7.5 7.5zm44.664 5.695a23.107 23.107 0 0017.43-7.941 7.492 7.492 0 00-.727-10.578 7.497 7.497 0 00-10.582.726c-1.543 1.774-3.777 2.793-6.12 2.793s-4.575-1.019-6.122-2.793a7.492 7.492 0 00-10.578-.726 7.496 7.496 0 00-.73 10.578 23.112 23.112 0 0017.43 7.941z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Avocado);

/***/ }),

/***/ "./components/SVGIcons/Basket.tsx":
/*!****************************************!*\
  !*** ./components/SVGIcons/Basket.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\SVGIcons\\Basket.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Basket = ({
  size = '34px'
}) => __jsx("svg", {
  width: size,
  height: size,
  viewBox: "0 0 512 512",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M490.1 292.03H21.9c-7.953 0-14.4-6.447-14.4-14.4v-34.391c0-7.953 6.447-14.4 14.4-14.4h468.2c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.952-6.447 14.4-14.4 14.4z",
  fill: "#FAD97E",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M490.1 228.84h-38.076c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.953-6.447 14.4-14.4 14.4H490.1c7.953 0 14.4-6.447 14.4-14.4V243.24c0-7.953-6.447-14.4-14.4-14.4z",
  opacity: 0.1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M466.42 292.03H45.57l21.084 153.34c2.439 17.741 17.599 30.959 35.507 30.959h307.67c17.908 0 33.068-13.218 35.507-30.959l21.084-153.34z",
  fill: "#A16B4E",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M45.576 292.03l3.561 25.899h375.65l-17.523 127.44c-2.439 17.741-17.599 30.959-35.507 30.959h38.076c17.908 0 33.068-13.218 35.507-30.959l17.523-127.44 3.561-25.899H45.574z",
  opacity: 0.1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M427.22 228.84h-47.241v-94.743c0-28.224-22.962-51.186-51.186-51.186h-145.59c-28.224 0-51.186 22.962-51.186 51.186v94.743H84.776v-94.743c0-54.272 44.154-98.427 98.427-98.427h145.59c54.273 0 98.427 44.154 98.427 98.427v94.743z",
  fill: "#A16B4E",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), __jsx("path", {
  opacity: 0.1,
  d: "M84.78 202.94H132.02V228.84199999999998H84.78z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}), __jsx("path", {
  opacity: 0.1,
  d: "M379.98 202.94H427.22V228.84199999999998H379.98z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}), __jsx("path", {
  fill: "#FAD97E",
  d: "M193.91 35.672H318.09000000000003V82.912H193.91z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}), __jsx("g", {
  opacity: 0.1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M152.94 438.94l6.718-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717-6.717-6.718 6.717-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.607 10.606l6.717 6.718-6.717 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 13.435 13.435-6.718 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 6.717 6.717c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197a7.5 7.5 0 000-10.606l-6.721-6.718zM426.23 363.1l6.718-6.718a7.5 7.5 0 00-.001-10.607 7.498 7.498 0 00-10.606 0l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.606 0 7.5 7.5 0 00-.001 10.607l6.718 6.718-6.718 6.718a7.5 7.5 0 00.001 10.607c1.464 1.465 3.384 2.197 5.303 2.197s3.839-.732 5.304-2.197l6.717-6.717 6.717 6.717a7.476 7.476 0 005.304 2.197 7.474 7.474 0 005.303-2.197 7.5 7.5 0 00.001-10.607l-6.72-6.718z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
})), __jsx("g", {
  fill: "#F15B70",
  opacity: 0.3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}, __jsx("ellipse", {
  cx: 193.02,
  cy: 369.52,
  rx: 26.96,
  ry: 11.698,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}), __jsx("ellipse", {
  cx: 318.98,
  cy: 369.52,
  rx: 26.96,
  ry: 11.698,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
})), __jsx("path", {
  d: "M490.1 221.34h-55.378v-87.243c0-58.408-47.519-105.93-105.93-105.93h-145.59c-58.408 0-105.93 47.519-105.93 105.93v87.243H21.894c-12.076 0-21.9 9.824-21.9 21.9v34.391c0 12.076 9.824 21.9 21.9 21.9h17.137l14.35 104.36a7.5 7.5 0 1014.859-2.044l-14.07-102.32h346.6c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5H21.9a6.907 6.907 0 01-6.9-6.9v-34.391c0-3.805 3.096-6.9 6.9-6.9h62.868l.01.001.01-.001h47.221l.01.001.01-.001h247.94l.01.001.01-.001h47.221l.01.001.01-.001h62.867c3.805 0 6.9 3.095 6.9 6.9v34.391c0 3.805-3.096 6.9-6.9 6.9h-56.094c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h23.817l-19.913 144.82c-1.92 13.956-13.99 24.48-28.077 24.48H102.16c-14.087 0-26.157-10.524-28.077-24.481l-1.696-12.333a7.5 7.5 0 10-14.859 2.044l1.696 12.332c2.935 21.343 21.394 37.438 42.937 37.438h307.67c21.543 0 40.002-16.095 42.936-37.438l20.193-146.86h17.137c12.076 0 21.9-9.824 21.9-21.9v-34.391c0-12.073-9.824-21.899-21.9-21.899zM296.76 43.17h13.835v32.241H296.76V43.17zm-33.255 0h18.255v32.241h-18.255V43.17zm-33.255 0h18.255v32.241H230.25V43.17zm-28.835 0h13.835v32.241h-13.835V43.17zm171.07 178.17h-232.96v-48.044c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v48.044h-32.24v-87.243c0-50.137 40.79-90.927 90.927-90.927h3.205v32.241h-3.205c-32.36 0-58.686 26.327-58.686 58.686V143c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-8.903c0-24.088 19.598-43.686 43.686-43.686h145.59c24.089 0 43.687 19.598 43.687 43.686v87.243h-.002zm47.241 0h-32.24v-87.243c0-32.359-26.326-58.686-58.687-58.686h-3.205v-32.24h3.205c50.137 0 90.927 40.79 90.927 90.927v87.242zm-93.24 122.15v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zm-125.96 0v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455a7.5 7.5 0 0015 0zm55.482 15.528a29.528 29.528 0 0022.26-10.137 7.499 7.499 0 00-.727-10.582 7.5 7.5 0 00-10.582.726c-2.765 3.173-6.757 4.993-10.951 4.993s-8.186-1.82-10.951-4.993a7.5 7.5 0 00-10.582-.726 7.5 7.5 0 00-.727 10.582 29.524 29.524 0 0022.26 10.137z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ }),

/***/ "./components/SVGIcons/PosMeMuero.tsx":
/*!********************************************!*\
  !*** ./components/SVGIcons/PosMeMuero.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\components\\SVGIcons\\PosMeMuero.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Original Icon from Freepik, set: Cinco de Mayo.
 * And edited por yo merengues.
 * www.flaticon.com
 */
const PosMeMuero = _ref => {
  let {
      size = '58px'
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, ["size"]);
  return __jsx("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 640 640"
  }, otherProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("path", {
    id: "a",
    d: "M329.21 133.97c-2.16 16.15 11.58 29.89 27.73 27.74 25.07-3.35 60.92-12.62 86.34-38.03 25.41-25.42 34.69-61.28 38.03-86.35 2.15-16.14-11.59-29.88-27.73-27.73-25.07 3.34-60.93 12.62-86.35 38.03-25.41 25.41-34.69 61.27-38.02 86.34z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "b",
    d: "M375.04 117.25c-3.66-3.66-3.66-9.6 0-13.26 4.89-4.9 44.05-44.06 48.95-48.95 3.66-3.66 9.6-3.66 13.26 0a9.361 9.361 0 010 13.26c-4.89 4.9-44.05 44.06-48.95 48.95-1.83 1.83-4.23 2.75-6.63 2.75s-4.8-.92-6.63-2.75z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "c",
    d: "M308.7 125.13c0-28.17-22.91-51.08-51.08-51.08-10.79 0-19.54-8.75-19.54-19.54s8.75-19.54 19.54-19.54c49.71 0 90.16 40.45 90.16 90.16 0 10.79-8.75 19.53-19.54 19.53s-19.54-8.74-19.54-19.53z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "d",
    d: "M344.2 100.06c-5.24-.54-10.57-.82-15.96-.82-8.66 0-17.15.73-25.43 2.11a50.803 50.803 0 015.89 23.78c0 10.79 8.75 19.53 19.54 19.53s19.54-8.74 19.54-19.53c0-8.7-1.27-17.1-3.58-25.07z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "e",
    d: "M142.39 445.04c0-55.64 16.41-84.64 30.9-110.24 12.93-22.86 23.16-40.92 23.16-81.92 0-72.67 59.12-131.79 131.79-131.79s131.79 59.12 131.79 131.79c0 41 10.22 59.06 23.16 81.92 14.49 25.6 30.91 54.6 30.91 110.24 0 102.48-83.38 185.85-185.86 185.85s-185.85-83.37-185.85-185.85z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "f",
    d: "M283.66 128.85c-50.8 18.32-87.21 67-87.21 124.03 0 41.01-10.23 59.06-23.16 81.92-14.49 25.6-30.9 54.6-30.9 110.24 0 102.48 83.37 185.85 185.85 185.85 44.57 0 85.51-15.77 117.57-42.02-201.63-28.25-232.21-330.29-162.15-460.02z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "g",
    d: "M229.01 252.88c0-54.81 44.42-99.23 99.23-99.23 54.8 0 99.23 44.42 99.23 99.23 0 98.31 54.06 97.21 54.06 192.16 0 84.66-68.63 153.29-153.29 153.29S174.95 529.7 174.95 445.04c0-94.95 54.06-93.85 54.06-192.16z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "h",
    d: "M229.01 252.88c0 98.31-54.06 97.21-54.06 192.16 0 84.66 68.63 153.29 153.29 153.29 27.55 0 53.41-7.27 75.75-20-144.46-54.08-178.19-269-139.58-401.4-21.64 18.2-35.4 45.46-35.4 75.95z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "i",
    d: "M275.16 391.98c-29.31 29.31-29.31 76.83 0 106.14s76.83 29.31 106.14 0 29.31-76.83 0-106.14-76.83-29.31-106.14 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "j",
    d: "M311.4 371.91c-33.34 7.65-58.21 37.48-58.21 73.13 0 41.45 33.6 75.05 75.05 75.05 25.44 0 47.91-12.67 61.49-32.04-81.18 13.73-119.09-74.39-78.33-116.14z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "k",
    d: "M393.48 323.5v-9.27c0-5.19-4.2-9.38-9.38-9.38-5.19 0-9.38 4.19-9.38 9.38v9.27c0 5.18 4.19 9.38 9.38 9.38 5.18 0 9.38-4.2 9.38-9.38zm19.19 121.54c0-46.56-37.87-84.43-84.43-84.43s-84.43 37.87-84.43 84.43c0 46.55 37.87 84.43 84.43 84.43s84.43-37.88 84.43-84.43zm-18.76 0c0 36.21-29.46 65.67-65.67 65.67s-65.67-29.46-65.67-65.67 29.46-65.67 65.67-65.67 65.67 29.46 65.67 65.67zm75.5-192.16c0-40.71-17.33-77.44-44.99-103.23 9.62-5.56 18.17-12.02 25.49-19.34 6.41-6.4 12.21-13.78 17.25-21.92 2.73-4.4 1.37-10.18-3.03-12.91s-10.19-1.37-12.91 3.03c-4.29 6.92-9.19 13.15-14.58 18.53-7.72 7.73-17.13 14.39-28.02 19.86-15.42-10.72-33.05-18.45-52.08-22.34-.91-8.59-2.89-16.94-5.92-24.89 6.02-14.06 13.81-25.98 23.24-35.4 23.45-23.45 56.96-32.18 80.95-35.37 4.77-.64 9.46.95 12.86 4.34 3.39 3.4 4.98 8.08 4.34 12.86-1.1 8.28-2.69 16.37-4.73 24.03a9.374 9.374 0 006.66 11.47c5 1.32 10.14-1.65 11.47-6.66 2.24-8.42 3.99-17.29 5.19-26.36 1.42-10.62-2.11-21.04-9.66-28.6-7.57-7.56-17.99-11.09-28.6-9.67C425.48 3.88 387.76 13.85 360.6 41c-7.98 7.98-14.94 17.37-20.8 28.04-3.72-5.41-7.99-10.51-12.79-15.19-18.7-18.22-43.34-28.25-69.39-28.25-15.94 0-28.92 12.97-28.92 28.92 0 15.94 12.98 28.91 28.92 28.91 19.47 0 35.92 13.33 40.46 31.54-63.4 13.85-111.01 70.42-111.01 137.91 0 38.53-9.2 54.8-21.94 77.31-15.06 26.6-32.12 56.75-32.12 114.85 0 40.77 12.49 79.85 36.12 113.03 3 4.21 8.86 5.2 13.08 2.19 4.21-3 5.2-8.86 2.2-13.08-21.36-29.97-32.64-65.3-32.64-102.14 0-53.16 15.76-81.03 29.68-105.62 13.08-23.11 24.38-43.06 24.38-86.54 0-67.5 54.91-122.41 122.41-122.41 6.05 0 11.99.45 17.79 1.3.09.02.18.02.28.03 58.96 8.76 104.34 59.72 104.34 121.08 0 43.48 11.3 63.43 24.38 86.55 13.92 24.58 29.69 52.45 29.69 105.61 0 97.31-79.17 176.48-176.48 176.48-42.38 0-83.38-15.32-115.45-43.12-3.91-3.4-9.84-2.97-13.24.94a9.388 9.388 0 00.95 13.24c35.48 30.76 80.84 47.7 127.74 47.7 107.65 0 195.23-87.58 195.23-195.24 0-58.11-17.06-88.26-32.12-114.86-12.73-22.5-21.94-38.77-21.94-77.3zm-152.73-140.7c-5.94-27.31-30.2-47.51-59.06-47.51-5.6 0-10.16-4.56-10.16-10.16s4.56-10.16 10.16-10.16c21.13 0 41.12 8.14 56.3 22.92 12.52 12.21 20.61 27.8 23.37 44.74-2.99-.19-6.01-.3-9.05-.3-3.89 0-7.75.16-11.56.47zm174.23 332.86c0-49.53-14.18-74.59-27.9-98.82-13.45-23.78-26.17-46.23-26.17-93.34 0-59.89-48.71-108.61-108.6-108.61s-108.61 48.72-108.61 108.61c0 47.11-12.71 69.56-26.17 93.34-13.71 24.23-27.89 49.29-27.89 98.82 0 89.7 72.97 162.67 162.67 162.67s162.67-72.97 162.67-162.67zM238.39 252.88c0-49.55 40.31-89.85 89.85-89.85s89.85 40.3 89.85 89.85c0 52.05 14.54 77.74 28.6 102.58 13.09 23.14 25.46 44.99 25.46 89.58 0 79.35-64.56 143.91-143.91 143.91s-143.91-64.56-143.91-143.91c0-44.59 12.37-66.44 25.46-89.58 14.06-24.84 28.6-50.53 28.6-102.58zm43.37 70.62v-9.27c0-5.19-4.2-9.38-9.38-9.38s-9.37 4.19-9.37 9.38v9.27c0 5.18 4.19 9.38 9.37 9.38s9.38-4.2 9.38-9.38zm68.27 6.57c3.41-3.9 3-9.83-.9-13.23-3.91-3.4-9.83-3-13.24.91-1.93 2.22-4.72 3.49-7.65 3.49s-5.72-1.27-7.66-3.49c-3.4-3.91-9.32-4.31-13.22-.91-3.91 3.4-4.32 9.33-.92 13.23 5.5 6.31 13.45 9.93 21.8 9.93 8.36 0 16.3-3.62 21.79-9.93z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "l",
    d: "M291.25 294.42c4.27 4.27 4.27 11.2 0 15.47l-32.57 32.57a10.936 10.936 0 01-15.48 0c-1.54-1.54 1.55 1.55 0 0-4.27-4.27-4.27-11.19 0-15.47 8.07-8.06 24.51-24.51 32.58-32.57 4.27-4.27 11.19-4.27 15.47 0 1.54 1.55-1.55-1.54 0 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "m",
    d: "M291.82 341.25c-4.27 4.27-11.2 4.27-15.47 0l-32.57-32.57a10.955 10.955 0 010-15.48c1.55-1.54-1.55 1.55 0 0 4.27-4.27 11.2-4.27 15.47 0 8.06 8.07 24.51 24.51 32.57 32.58 4.27 4.27 4.27 11.19 0 15.47-1.55 1.54 1.55-1.55 0 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "n",
    d: "M303.11 300h50.22v50h-50.22v-50z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "o",
    d: "M414.25 296.59c4.27 4.27 4.27 11.2 0 15.47l-32.57 32.57a10.955 10.955 0 01-15.48 0c-1.54-1.55 1.55 1.55 0 0-4.27-4.27-4.27-11.2 0-15.47 8.07-8.06 24.51-24.51 32.58-32.57 4.27-4.27 11.19-4.27 15.47 0 1.54 1.55-1.55-1.55 0 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "p",
    d: "M414.82 343.41c-4.27 4.27-11.2 4.27-15.47 0l-32.57-32.57c-4.27-4.27-4.27-11.2 0-15.47 1.55-1.55-1.55 1.55 0 0 4.27-4.27 11.2-4.27 15.47 0l32.57 32.57c4.27 4.27 4.27 11.2 0 15.47-1.55 1.55 1.55-1.55 0 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("path", {
    id: "q",
    d: "M333.96 316l1.29.2 1.27.25 1.25.3 1.22.36 1.21.41 1.18.45 1.16.51 1.13.55 1.1.6 1.08.64 1.05.68 1.01.73.99.76.95.81.91.84.88.88.85.92.8.95.77.98.73 1.02.68 1.05.64 1.07.6 1.11.55 1.13.5 1.16.46 1.18.41 1.2.35 1.23.31 1.25.25 1.27.2 1.29.14 1.3.08 1.18h-13.11l-.13-1.2-.25-1.26-.34-1.22-.42-1.19-.51-1.15-.59-1.1-.67-1.04-.74-1-.81-.93-.88-.88-.93-.81-1-.74-1.04-.67-1.1-.59-1.15-.51-1.19-.42-1.22-.34-1.27-.25-1.29-.15-1.32-.05-1.32.05-1.29.15-1.27.25-1.22.34-1.19.42-1.15.51-1.1.59-1.04.67-1 .74-.93.81-.88.88-.81.93-.74 1-.67 1.04-.59 1.1-.51 1.15-.42 1.19-.34 1.22-.25 1.26-.13 1.2h-13.11l.08-1.18.14-1.3.2-1.29.25-1.27.31-1.25.35-1.23.41-1.2.46-1.18.5-1.16.55-1.13.6-1.11.64-1.07.68-1.05.73-1.02.77-.98.8-.95.85-.92.88-.88.91-.84.95-.81.99-.76 1.01-.73 1.05-.68 1.08-.64 1.1-.6 1.13-.55 1.16-.51 1.18-.45 1.21-.41 1.22-.36 1.25-.3 1.27-.25 1.29-.2 1.3-.15 1.32-.08 1.34-.03 1.34.03 1.32.08 1.3.15z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  })), __jsx("use", {
    fill: "#153830",
    xlinkHref: "#a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#021107",
    xlinkHref: "#b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#754c2e",
    xlinkHref: "#c",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#c",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#2c1708",
    xlinkHref: "#d",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#d",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#4e5660",
    xlinkHref: "#e",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#e",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#383c43",
    xlinkHref: "#f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#7a8179",
    xlinkHref: "#g",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#g",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#202923",
    xlinkHref: "#h",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#h",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#754c2e",
    xlinkHref: "#i",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#i",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#2c1708",
    xlinkHref: "#j",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#j",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }), __jsx("use", {
    xlinkHref: "#k",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }), __jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#k",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }), __jsx("use", {
    xlinkHref: "#l",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }), __jsx("use", {
    xlinkHref: "#m",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }), __jsx("use", {
    fill: "#7a8179",
    xlinkHref: "#n",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }), __jsx("use", {
    xlinkHref: "#o",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }), __jsx("use", {
    xlinkHref: "#p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }), __jsx("use", {
    xlinkHref: "#q",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (PosMeMuero);

/***/ }),

/***/ "./components/SVGIcons/index.ts":
/*!**************************************!*\
  !*** ./components/SVGIcons/index.ts ***!
  \**************************************/
/*! exports provided: Avocado, Basket, PosMeMuero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avocado__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avocado */ "./components/SVGIcons/Avocado.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avocado", function() { return _Avocado__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Basket */ "./components/SVGIcons/Basket.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return _Basket__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PosMeMuero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PosMeMuero */ "./components/SVGIcons/PosMeMuero.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PosMeMuero", function() { return _PosMeMuero__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser???s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won???t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_KawaiiHeader_KawaiiHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/KawaiiHeader/KawaiiHeader */ "./components/KawaiiHeader/KawaiiHeader.tsx");
/* harmony import */ var _components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ProductList/ProductList */ "./components/ProductList/ProductList.tsx");
var _jsxFileName = "C:\\Users\\Juan Diego\\Documents\\Escuela de desarrollo web\\Next JS\\proyecto Avocado\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HomePage = () => {
  const {
    0: productList,
    1: setProductList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.fetch('/api/avo').then(response => response.json()).then(({
      data
    }) => {
      setProductList(data);
    });
  }, []);
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components_KawaiiHeader_KawaiiHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    products: productList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9LYXdhaWlIZWFkZXIvQW5pbWF0ZWRIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvS2F3YWlpSGVhZGVyL0thd2FpaUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9LYXdhaWlIZWFkZXIvTW9kYWxIZWFkZXJDb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0thd2FpaUhlYWRlci9Sb3R0ZW5IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci9TaG9wcGluZ0NhcnRJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0L1Byb2R1Y3RMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NWR0ljb25zL0F2b2NhZG8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU1ZHSWNvbnMvQmFza2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NWR0ljb25zL1Bvc01lTXVlcm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU1ZHSWNvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0b3JlL0NhcnQudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkZvb3RlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJib3JkZXJUb3AiLCJkaXNwbGF5IiwiQW5pbWF0ZWRIZWFkZXIiLCJ2aXNpYmxlIiwib25DbGljayIsIm9uQ29tcGxldGUiLCJLYXdhaWlIZWFkZXIiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJtZU1vcmkiLCJzZXRNZU1vcmkiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjb3VudCIsInNldENvdW50IiwiY2xvc2VNb2RhbCIsInRvZ2dsZVZpc2libGUiLCJwcmV2VmlzaWJsZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwcmV2Q291bnQiLCJNb2RhbEhlYWRlckNvbnRlbnQiLCJSb3R0ZW5IZWFkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdmJhciIsInBhdGhuYW1lIiwidXNlUm91dGVyIiwiY2FydENvdW50IiwidXNlQ2FydCIsIlNob3BwaW5nQ2FydEljb24iLCJuYW1lIiwic2hvd0NhcnRDb3VudCIsIm1hcFByb2R1Y3RzVG9DYXJkcyIsInByb2R1Y3RzIiwibWFwIiwiaWQiLCJwcmljZSIsImltYWdlIiwiY29sb3IiLCJQcm9kdWN0TGlzdCIsIkF2b2NhZG8iLCJzaXplIiwib3RoZXJQcm9wcyIsIkJhc2tldCIsIlBvc01lTXVlcm8iLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsImNoaWxkRWxtIiwic2V0Q2hpbGRFbG0iLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInZhbHVlIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiZmlsdGVyIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsInBhZ2UiLCJmZXRjaENvbXBvbmVudCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIkhvbWVQYWdlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImZldGNoIiwicmVzcG9uc2UiLCJkZWZhdWx0U3RhdGUiLCJDYXJ0SXRlbXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnREaXNwYXRjaENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJjYXJ0UmVkdWNlcnMiLCJxdWFudGl0eSIsInF0eVRvQWRkIiwiZXhpc3RpbmdDYXJ0SXRlbSIsIm5ld0NhcnRJdGVtcyIsImdldENhcnRTdWJUb3RhbCIsInN1bSIsImdldENhcnRDb3VudCIsIml0ZW1zQnlJZCIsIml0ZW1zIiwidmFsdWVzIiwicmVkdWNlIiwic3ViVG90YWwiLCJ1c2VDYXJ0TXV0YXRpb25zIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInJlbW92ZUZyb21DYXJ0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMx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QUFFLENBQUU7SUFBQyxNQUFNLEVBQUMsTUFBTTtJQUFDLGFBQWEsRUFBRSxDQUFFO0lBQUMsU0FBUyxFQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3RFO0lBQUssSUFBSSxFQUFDLFNBQVM7SUFBQyxTQUFTLEVBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDckM7SUFBSyxXQUFXLEVBQUUsQ0FBRTtJQUFDLE1BQU0sRUFBQyxNQUFNO0lBQUMsYUFBYSxFQUFFLENBQUU7SUFBQyxTQUFTLEVBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDdEU7SUFBSyxJQUFJLEVBQUMsU0FBUztJQUFDLFNBQVMsRUFBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNyQztJQUFLLFdBQVcsRUFBRSxDQUFFO0lBQUMsTUFBTSxFQUFDLE1BQU07SUFBQyxhQUFhLEVBQUUsQ0FBRTtJQUFDLFNBQVMsRUFBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUN0RTtJQUFLLElBQUksRUFBQyxTQUFTO0lBQUMsU0FBUyxFQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3JDO0lBQUssV0FBVyxFQUFFLENBQUU7SUFBQyxNQUFNLEVBQUMsTUFBTTtJQUFDLGFBQWEsRUFBRSxDQUFFO0lBQUMsU0FBUyxFQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3RFO0lBQUssSUFBSSxFQUFDLFNBQVM7SUFBQyxTQUFTLEVBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDckM7SUFBSyxXQUFXLEVBQUUsQ0FBRTtJQUFDLE1BQU0sRUFBQyxNQUFNO0lBQUMsYUFBYSxFQUFFLENBQUU7SUFBQyxTQUFTLEVBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDdEU7SUFBSyxJQUFJLEVBQUMsU0FBUztJQUFDLFNBQVMsRUFBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNyQztJQUFLLFdBQVcsRUFBRSxDQUFFO0lBQUMsTUFBTSxFQUFDLE1BQU07SUFBQyxhQUFhLEVBQUUsQ0FBRTtJQUFDLFNBQVMsRUFBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUN0RTtJQUFLLElBQUksRUFBQyxTQUFTO0lBQUMsU0FBUyxFQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3JDO0lBQUssV0FBVyxFQUFFLENBQUU7SUFBQyxNQUFNLEVBQUMsTUFBTTtJQUFDLGFBQWEsRUFBRSxDQUFFO0lBQUMsU0FBUyxFQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3RFO0lBQUssSUFBSSxFQUFDLFNBQVM7SUFBQyxTQUFTLEVBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDckM7SUFBSyxXQUFXLEVBQUUsQ0FBRTtJQUFDLE1BQU0sRUFBQyxNQUFNO0lBQUMsYUFBYSxFQUFFLENBQUU7SUFBQyxTQUFTLEVBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDdEU7SUFBSyxJQUFJLEVBQUMsU0FBUztJQUFDLFNBQVMsRUFBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNyQztJQUFLLFdBQVcsRUFBRSxDQUFFO0lBQUMsTUFBTSxFQUFDLE1BQU07SUFBQyxhQUFhLEVBQUUsQ0FBRTtJQUFDLFNBQVMsRUFBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEs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TUFBTWtCLFNBQVMsR0FBRyxDQUFDQyxPQUFpQixFQUFFZCxRQUFpQixLQUNyREgsUUFBUSxDQUFDO0lBQ1B0VixJQUFJLEVBQUUsS0FBSztJQUNYdVIsSUFBSSxFQUFFZ0YsT0FBTztJQUNiZDtFQUNGLENBQUMsQ0FBQztFQUVKLE1BQU1lLGNBQWMsR0FBSUQsT0FBaUIsSUFDdkNqQixRQUFRLENBQUM7SUFDUHRWLElBQUksRUFBRSxRQUFRO0lBQ2R1UixJQUFJLEVBQUVnRjtFQUNSLENBQUMsQ0FBQztFQUVKLE9BQU87SUFDTEQsU0FBUztJQUNURTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBRWNuQiwyRUFBWSxFOzs7Ozs7Ozs7OztBQ3hJM0Isd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IFNlZ21lbnQsIENvbnRhaW5lciwgR3JpZCwgTGlzdCwgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPFNlZ21lbnRcclxuICAgIHZlcnRpY2FsXHJcbiAgICBhcz1cImZvb3RlclwiXHJcbiAgICBzdHlsZT17e1xyXG4gICAgICBwYWRkaW5nOiAnNGVtIDBlbScsXHJcbiAgICAgIG1hcmdpblRvcDogJzNlbScsXHJcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZjJmMmYyJyxcclxuICAgIH19XHJcbiAgPlxyXG4gICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICA8R3JpZCBzdGFja2FibGU+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIk5vc290cm9zXCIgLz5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+Q29ub2NlIG3DoXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezV9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb250ZW50PVwiU2VydmljaW9zXCIgLz5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlRvZG9zIGxvcyBwcm9kdWN0b3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIj5IZWNobyBwYXJhPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXR6aS5jb20vXCI+UGxhdHppIHkgc3UgY3Vyc28gZGUgTmV4dC5KUzwvYT4gZGVcclxuICAgICAgICAgICAgICBQbGF0emkgZGljdGFkbyBwb3J7JyAnfVxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2pvbmFsdmFyZXp6XCI+QGpvbmFsdmFyZXp6PC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaXN0IGhvcml6b250YWwgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vam9uYWx2YXJlenpcIj5Ud2l0dGVyPC9hPn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgIGljb249XCJnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qb25hbHZhcmV6ei9wbGF0emktbmV4dGpzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvcGhvblwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9waG9uLWVudHJ5XCI+XHJcbiAgICAgICAgICBJY29ucyBtYWRlIGJ5eycgJ31cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9mcmVlcGlrXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJGcmVlcGlrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRnJlZXBpa1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgeycgZnJvbSAnfVxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+XHJcbiAgICAgICAgICAgIHd3dy5mbGF0aWNvbi5jb21cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sb3Bob24tZW50cnlcIj5cclxuICAgICAgICAgIEF2b2NhZG8gaW1hZ2VzIHRha2VuIGZyb217JyAnfVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNub3JcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY2FsaWZvcm5pYWF2b2NhZG8uY29tL2F2b2NhZG8xMDEvYXZvY2Fkby12YXJpZXRpZXNcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkNhbGlmb3JuaWEgQXZvY2Fkb1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEF2b2NhZG8gMTAxXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB7JyBhdCAnfVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNhbGlmb3JuaWFhdm9jYWRvLmNvbVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRmxhdGljb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYWxpZm9ybmlhIEF2b2NhZG9cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29sb3Bob24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzLjJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmNvbG9waG9uLWVudHJ5IHtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9TZWdtZW50PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIFRyYW5zaXRpb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCB7IEF2b2NhZG8gfSBmcm9tICdAY29tcG9uZW50cy9TVkdJY29ucydcclxuXHJcbnR5cGUgQW5pbWF0ZWRIZWFkZXJQcm9wcyA9IHtcclxuICB2aXNpYmxlOiBib29sZWFuXHJcbiAgb25DbGljazogKCkgPT4gdm9pZFxyXG4gIG9uQ29tcGxldGU6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQW5pbWF0ZWRIZWFkZXIgPSAoe1xyXG4gIHZpc2libGUsXHJcbiAgb25DbGljayxcclxuICBvbkNvbXBsZXRlLFxyXG59OiBBbmltYXRlZEhlYWRlclByb3BzKSA9PiAoXHJcbiAgPEhlYWRlciBzaXplPVwiaHVnZVwiIGFzPVwiaDFcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgIFBsYXR6aVxyXG4gICAgPFRyYW5zaXRpb25cclxuICAgICAgYW5pbWF0aW9uPVwiamlnZ2xlXCJcclxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgZHVyYXRpb249ezkwMH1cclxuICAgICAgb25Db21wbGV0ZT17b25Db21wbGV0ZX1cclxuICAgID5cclxuICAgICAgPEF2b2NhZG8gc2l6ZT1cIjU4cHhcIiAvPlxyXG4gICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgQXZvXHJcbiAgPC9IZWFkZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbmZpcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCBQdWVzVml2byBmcm9tICcuL0FuaW1hdGVkSGVhZGVyJ1xyXG5pbXBvcnQgUHVlc011ZXJvIGZyb20gJy4vUm90dGVuSGVhZGVyJ1xyXG5pbXBvcnQgTW9kYWxIZWFkZXJDb250ZW50IGZyb20gJy4vTW9kYWxIZWFkZXJDb250ZW50J1xyXG5cclxuY29uc3QgS2F3YWlpSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW21lTW9yaSwgc2V0TWVNb3JpXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oZmFsc2UpXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHNldFZpc2libGUoKHByZXZWaXNpYmxlKSA9PiAhcHJldlZpc2libGUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCh0b2dnbGVWaXNpYmxlLCAzNTApXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY291bnQgPT09IDQpIHtcclxuICAgICAgc2V0TWVNb3JpKHRydWUpXHJcbiAgICAgIHNldE1vZGFsT3Blbih0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtjb3VudF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICB7bWVNb3JpID8gKFxyXG4gICAgICAgIDxQdWVzTXVlcm8gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8UHVlc1Zpdm9cclxuICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfVxyXG4gICAgICAgICAgb25Db21wbGV0ZT17KCkgPT4gc2V0Q291bnQoKHByZXZDb3VudCkgPT4gcHJldkNvdW50ICsgMSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxDb25maXJtXHJcbiAgICAgICAgb3Blbj17bW9kYWxPcGVufVxyXG4gICAgICAgIGNvbnRlbnQ9e01vZGFsSGVhZGVyQ29udGVudH1cclxuICAgICAgICBvbkNhbmNlbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICBvbkNvbmZpcm09e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgY2FuY2VsQnV0dG9uPVwiQXksIGxvIHNpZW50b1wiXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbj1cIk9LXCJcclxuICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2s9e2ZhbHNlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwIDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGFpbmVyIDpnbG9iYWwoLmhlYWRlcikge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYXdhaWlIZWFkZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHcmlkLCBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCB7IFBvc01lTXVlcm8gfSBmcm9tICdAY29tcG9uZW50cy9TVkdJY29ucydcclxuXHJcbmNvbnN0IE1vZGFsSGVhZGVyQ29udGVudCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEdyaWQgY29sdW1ucz17Mn0+XHJcbiAgICAgICAgPEdyaWQuUm93IHZlcnRpY2FsQWxpZ249eydtaWRkbGUnfT5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD1cIjVcIj5cclxuICAgICAgICAgICAgPFBvc01lTXVlcm8gc2l6ZT1cIjE1NHB4XCIgLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9XCIxMVwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDJcIj5NYXRhc3RlIGVsIGFndWFjYXRlPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwPkxvIHRvY2FzdGUgdGFudG8gcXVlIGxvIG1hdGFzdGUuPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBQb3Igb3RybyBsYWRvLCBlcmVzIHVuYSBwZXJzb25hIG11eSBjdXJpb3NhIHkgaGFzIGRlc2N1YmllcnRvXHJcbiAgICAgICAgICAgICAgZXN0by4gOilcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEhlYWRlckNvbnRlbnRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIFRyYW5zaXRpb24sIENvbmZpcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCB7IFBvc01lTXVlcm8gfSBmcm9tICdAY29tcG9uZW50cy9TVkdJY29ucydcclxuXHJcbmNvbnN0IFJvdHRlbkhlYWRlciA9ICgpID0+IChcclxuICA8SGVhZGVyIHNpemU9XCJodWdlXCIgYXM9XCJoMVwiPlxyXG4gICAgUGxhdHppXHJcbiAgICA8UG9zTWVNdWVybyBzaXplPVwiNThweFwiIC8+XHJcbiAgICBBdm9cclxuICA8L0hlYWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm90dGVuSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnQGNvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xyXG5cclxudHlwZSBMYXlvdXRQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykgPT4gKFxyXG4gIDw+XHJcbiAgICA8TmF2YmFyIC8+XHJcbiAgICA8Q29udGFpbmVyIGFzPVwibWFpblwiIHRleHQ+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgTWVudSwgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5pbXBvcnQgeyBBdm9jYWRvIH0gZnJvbSAnQGNvbXBvbmVudHMvU1ZHSWNvbnMnXHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJy4vU2hvcHBpbmdDYXJ0SWNvbidcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJ0BzdG9yZS9DYXJ0J1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBjb3VudDogY2FydENvdW50IH0gPSB1c2VDYXJ0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IHNpemU9XCJodWdlXCIgYm9yZGVybGVzcyBwb2ludGluZyBhcz1cImhlYWRlclwiPlxyXG4gICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgYWN0aXZlPXtwYXRobmFtZSA9PT0gJy8nfVxyXG4gICAgICAgICAgICB0aXRsZT1cIkluaWNpbyB8IFRvZG9zIGxvcyBwcm9kdWN0b3NcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXZvY2FkbyAvPlxyXG4gICAgICAgICAgICBBdm8gU3RvcmVcclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGFjdGl2ZT17cGF0aG5hbWUgPT09ICcvY2FydCd9PlxyXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIGNhcnRDb3VudD17Y2FydENvdW50fSBuYW1lPVwiQ2FuYXN0YVwiIC8+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAudWkubWVudS5odWdlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9NZW51PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQmFza2V0IH0gZnJvbSAnQGNvbXBvbmVudHMvU1ZHSWNvbnMnXHJcblxyXG50eXBlIFNob3BwaW5nQ2FydEljb25Qcm9wcyA9IHtcclxuICBjYXJ0Q291bnQ6IG51bWJlclxyXG4gIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTaG9wcGluZ0NhcnRJY29uID0gKHsgY2FydENvdW50LCBuYW1lIH06IFNob3BwaW5nQ2FydEljb25Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNob3dDYXJ0Q291bnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNhcnRDb3VudCkge1xyXG4gICAgICByZXR1cm4gYCgwKWBcclxuICAgIH1cclxuICAgIGlmIChjYXJ0Q291bnQgPiA5KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA5PHN1cD4rPC9zdXA+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCgke2NhcnRDb3VudH0pYFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxCYXNrZXQgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAge2AgJHtuYW1lfSBgfVxyXG4gICAgICAgIHtzaG93Q2FydENvdW50KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nQ2FydEljb25cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbnR5cGUgUHJvZHVjdExpc3RQcm9wcyA9IHtcclxuICBwcm9kdWN0czogVFByb2R1Y3RbXVxyXG59XHJcblxyXG5jb25zdCBtYXBQcm9kdWN0c1RvQ2FyZHMgPSAocHJvZHVjdHM6IFRQcm9kdWN0W10pID0+XHJcbiAgcHJvZHVjdHMubWFwKCh7IG5hbWUsIGlkLCBwcmljZSwgaW1hZ2UgfSkgPT4gKFxyXG4gICAgPExpbmsga2V5PXtpZH0gaHJlZj1cIi9wcm9kdWN0L1tpZF1cIiBhcz17YC9wcm9kdWN0LyR7aWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICBoZWFkZXI9e25hbWV9XHJcbiAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgIG1ldGE9ezxDYXJkLk1ldGEgc3R5bGU9e3sgY29sb3I6ICdkaW1ncmF5JyB9fT57cHJpY2V9PC9DYXJkLk1ldGE+fVxyXG4gICAgICAvPlxyXG4gICAgPC9MaW5rPlxyXG4gICkpXHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7IHByb2R1Y3RzIH06IFByb2R1Y3RMaXN0UHJvcHMpID0+IChcclxuICA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gc3RhY2thYmxlPlxyXG4gICAge21hcFByb2R1Y3RzVG9DYXJkcyhwcm9kdWN0cyl9XHJcbiAgPC9DYXJkLkdyb3VwPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNWR0ljb25Qcm9wcyB9IGZyb20gJy4vc3ZnLnR5cGVzJ1xyXG5cclxuY29uc3QgQXZvY2FkbyA9ICh7IHNpemUgPSAnMzRweCcsIC4uLm90aGVyUHJvcHMgfTogU1ZHSWNvblByb3BzKSA9PiAoXHJcbiAgPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiLTk5IDAgNTExIDUxMlwiIHsuLi5vdGhlclByb3BzfT5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTg3LjggMzguMDljLTIwLjMyNCAyMC4zMi0yNy43NDIgNDguOTk2LTMwLjQxIDY5LjA0My0xLjcyMyAxMi45MSA5LjI2NiAyMy44OTUgMjIuMTc2IDIyLjE3NiAyMC4wNDctMi42NzIgNDguNzE5LTEwLjA5IDY5LjA0My0zMC40MSAyMC4zMi0yMC4zMjQgMjcuNzQyLTQ4Ljk5NiAzMC40MS02OS4wNDcgMS43MTktMTIuOTA2LTkuMjY2LTIzLjg5NS0yMi4xNzYtMjIuMTc2LTIwLjA0NyAyLjY3Mi00OC43MjMgMTAuMDktNjkuMDQzIDMwLjQxNHpcIlxyXG4gICAgICBmaWxsPVwiIzhlZTJjZlwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xOTguNjMgOTUuNTY2YTcuNDk2IDcuNDk2IDAgMDEtNS4zMDUtMi4xOTUgNy41MDkgNy41MDkgMCAwMTAtMTAuNjFsMzkuMTQ1LTM5LjE0NGMyLjkzLTIuOTI2IDcuNjgtMi45MjYgMTAuNjA1IDBhNy41MDIgNy41MDIgMCAwMTAgMTAuNjA5TDIwMy45MyA5My4zN2E3LjQ4IDcuNDggMCAwMS01LjMgMi4xOTV6XCJcclxuICAgICAgZmlsbD1cIiM2ZmNlOTFcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTU2LjYyIDExNS42OGMtOC42MjkgMC0xNS42MjEtNi45OTItMTUuNjIxLTE1LjYyMSAwLTIyLjUyMy0xOC4zMjQtNDAuODQ4LTQwLjg0OC00MC44NDgtOC42MjkgMC0xNS42MjUtNi45OTItMTUuNjI1LTE1LjYyMXM2Ljk5Ni0xNS42MjUgMTUuNjI1LTE1LjYyNWMzOS43NSAwIDcyLjA5NCAzMi4zNDQgNzIuMDk0IDcyLjA5NCAwIDguNjI5LTYuOTk2IDE1LjYyMS0xNS42MjUgMTUuNjIxelwiXHJcbiAgICAgIGZpbGw9XCIjZTFiODlhXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTE3Mi4yNCAxMDAuMDZhNzEuODEgNzEuODEgMCAwMC0yLjg2LTIwLjA0MyAxMjMuMjkgMTIzLjI5IDAgMDAtMzMuMDk4IDEuMDMxYzMgNS42ODQgNC43MTIgMTIuMTQ4IDQuNzEyIDE5LjAxMiAwIDguNjMgNi45OTIgMTUuNjIxIDE1LjYyIDE1LjYyMSA4LjYzIDAgMTUuNjI2LTYuOTkyIDE1LjYyNi0xNS42MnpcIlxyXG4gICAgICBmaWxsPVwiI2QyOTk2ZlwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xNTYuNjIgNTA0LjVDNzQuNjcxIDUwNC41IDggNDM3LjgyOCA4IDM1NS44OGMwLTQ0LjQ5MiAxMy4xMjktNjcuNjg4IDI0LjcxMS04OC4xNTIgMTAuMzQ0LTE4LjI4MSAxOC41Mi0zMi43MjMgMTguNTItNjUuNTEyIDAtNTguMTA5IDQ3LjI3Ny0xMDUuMzkgMTA1LjM5LTEwNS4zOSA1OC4xMDkgMCAxMDUuMzkgNDcuMjc3IDEwNS4zOSAxMDUuMzkgMCAzMi43ODkgOC4xNzIgNDcuMjMgMTguNTIgNjUuNTEyIDExLjU4MiAyMC40NjUgMjQuNzExIDQzLjY2IDI0LjcxMSA4OC4xNTIgMCA4MS45NDUtNjYuNjcyIDE0OC42Mi0xNDguNjIgMTQ4LjYyelwiXHJcbiAgICAgIGZpbGw9XCIjNGU1NjYwXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTI1MC42MyA0NzAuODlDODkuNCA0NDguMzA0IDY0Ljk0IDIwNi43NyAxMjAuOTcgMTAzLjA0Yy00MC42MjEgMTQuNjQ1LTY5Ljc0MiA1My41Ny02OS43NDIgOTkuMTggMCAzMi43ODktOC4xNzYgNDcuMjI3LTE4LjUyIDY1LjUwOC0xMS41ODYgMjAuNDY1LTI0LjcxMSA0My42Ni0yNC43MTEgODguMTUyIDAgODEuOTQ5IDY2LjY2OCAxNDguNjIgMTQ4LjYyIDE0OC42MiAzNS42NDEgMCA2OC4zODMtMTIuNjEzIDk0LjAxNi0zMy42MDV6XCJcclxuICAgICAgZmlsbD1cIiMzODNjNDNcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMzQuMDM5IDM1NS44OGMwLTc1LjkyNiA0My4yMy03NS4wNTEgNDMuMjMtMTUzLjY2IDAtNDMuODI0IDM1LjUyMy03OS4zNDggNzkuMzQ4LTc5LjM0OCA0My44MjQgMCA3OS4zNTIgMzUuNTIzIDc5LjM1MiA3OS4zNDggMCA3OC42MTMgNDMuMjMgNzcuNzM4IDQzLjIzIDE1My42NiAwIDY3LjY5OS01NC44ODMgMTIyLjU4LTEyMi41OCAxMjIuNTgtNjcuNjk5IDAtMTIyLjU4LTU0Ljg3OS0xMjIuNTgtMTIyLjU4elwiXHJcbiAgICAgIGZpbGw9XCIjODlkNDdmXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTEwNS41NyAxNDEuNDhjLTE3LjMwMSAxNC41NTUtMjguMzA1IDM2LjM1NS0yOC4zMDUgNjAuNzM4IDAgNzguNjA5LTQzLjIzIDc3LjczNC00My4yMyAxNTMuNjYgMCA2Ny42OTkgNTQuODc5IDEyMi41OCAxMjIuNTggMTIyLjU4IDIyLjAzNSAwIDQyLjcwNy01LjgxNiA2MC41NzgtMTUuOTkyLTExNS41Mi00My4yNDYtMTQyLjQ5LTIxNS4xMS0xMTEuNjItMzIwLjk4elwiXHJcbiAgICAgIGZpbGw9XCIjNWVjNzgzXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTE5OS4wNSAzMTMuNDRjLTIzLjQzOC0yMy40MzgtNjEuNDM4LTIzLjQzOC04NC44NzUgMHMtMjMuNDM4IDYxLjQzNCAwIDg0Ljg3MSA2MS40MzggMjMuNDM4IDg0Ljg3NSAwIDIzLjQzOC02MS40MzQgMC04NC44NzF6XCJcclxuICAgICAgZmlsbD1cIiNlMWI4OWFcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMjA1Ljc5IDM5MC4yN2MtNjQuOTE4IDEwLjk3My05NS4yMzQtNTkuNDkyLTYyLjY0MS05Mi44NzUtMjYuNjU2IDYuMTE3LTQ2LjU0NyAyOS45NjktNDYuNTQ3IDU4LjQ4IDAgMzMuMTQ1IDI2Ljg3MSA2MC4wMTYgNjAuMDE2IDYwLjAxNiAyMC4zNDggMCAzOC4zMTYtMTAuMTM3IDQ5LjE3Mi0yNS42MjF6XCJcclxuICAgICAgZmlsbD1cIiNkMjk5NmZcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTIwLjcxIDI3NS4zN2MwLTkuMjM0LTkuMzk4LTE2LjcxOS0yMC45OTYtMTYuNzE5LTExLjU5NCAwLTIwLjk5NiA3LjQ4NC0yMC45OTYgMTYuNzE5IDAgOS4yMzQgOS40MDIgMTYuNzE5IDIwLjk5NiAxNi43MTkgMTEuNTk4IDAgMjAuOTk2LTcuNDg0IDIwLjk5Ni0xNi43MTl6TTIzNC41MiAyNzUuMzdjMC05LjIzNC05LjM5OC0xNi43MTktMjAuOTk2LTE2LjcxOS0xMS41OTQgMC0yMC45OTYgNy40ODQtMjAuOTk2IDE2LjcxOSAwIDkuMjM0IDkuNDAyIDE2LjcxOSAyMC45OTYgMTYuNzE5IDExLjU5OCAwIDIwLjk5Ni03LjQ4NCAyMC45OTYtMTYuNzE5elwiXHJcbiAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aCBkPVwiTTIwMS4yOSAyNjYuMTlhNy41IDcuNSAwIDAwNy41LTcuNXYtNy40MTRhNy41IDcuNSAwIDAwLTcuNS03LjUgNy40OTcgNy40OTcgMCAwMC03LjUgNy41djcuNDE0YzAgNC4xNDQgMy4zNTYgNy41IDcuNSA3LjV6TTE1Ni42MjIgNDIzLjRjMzcuMjMgMCA2Ny41MTYtMzAuMjg5IDY3LjUxNi02Ny41MTYgMC0zNy4yMy0zMC4yODUtNjcuNTE2LTY3LjUxNi02Ny41MTYtMzcuMjI3IDAtNjcuNTE2IDMwLjI4NS02Ny41MTYgNjcuNTE2IDAgMzcuMjI3IDMwLjI4OSA2Ny41MTYgNjcuNTE2IDY3LjUxNnptMC0xMjAuMDNjMjguOTU3IDAgNTIuNTE2IDIzLjU1OSA1Mi41MTYgNTIuNTE2IDAgMjguOTU3LTIzLjU1OSA1Mi41MTYtNTIuNTE2IDUyLjUxNi0yOC45NTcgMC01Mi41MTYtMjMuNTU5LTUyLjUxNi01Mi41MTYgMC0yOC45NTcgMjMuNTU5LTUyLjUxNiA1Mi41MTYtNTIuNTE2em0xMzAuNDMtMzkuMzMyYy0xMC4xODQtMTcuOTk2LTE3LjU0My0zMS0xNy41NDMtNjEuODEyIDAtMzIuNTU1LTEzLjg1OS02MS45My0zNS45NzctODIuNTUxIDcuNjg4LTQuNDQ1IDE0LjUyNy05LjYxMyAyMC4zODMtMTUuNDY1IDUuMTIxLTUuMTIxIDkuNzYyLTExLjAyIDEzLjc5My0xNy41MjdhNy41MDcgNy41MDcgMCAwMC0yLjQyNi0xMC4zMjggNy41MDEgNy41MDEgMCAwMC0xMC4zMjQgMi40MjZjLTMuNDI2IDUuNTMxLTcuMzQ3IDEwLjUxNi0xMS42NTIgMTQuODItNi4xOCA2LjE4LTEzLjcwMyAxMS41MDgtMjIuNDEgMTUuODc5LTEyLjMyOC04LjU3LTI2LjQzLTE0Ljc1NC00MS42NDUtMTcuODYzYTc5LjI0IDc5LjI0IDAgMDAtNC43MzQtMTkuOTAyYzQuODEyLTExLjI0MiAxMS4wNDMtMjAuNzczIDE4LjU4Ni0yOC4zMTIgMTguNzQ2LTE4Ljc0NiA0NS41NDctMjUuNzI3IDY0LjczLTI4LjI4MSAzLjgxNi0uNTA4IDcuNTY2Ljc1OCAxMC4yOCAzLjQ3MyAyLjcxNiAyLjcxNCAzLjk4MSA2LjQ2IDMuNDc0IDEwLjI4LS44ODMgNi42MjYtMi4xNTcgMTMuMDktMy43ODIgMTkuMjE2YTcuNTAxIDcuNTAxIDAgMDA1LjMyIDkuMTc1YzQuMDA1IDEuMDU1IDguMTEtMS4zMiA5LjE3Ni01LjMyNCAxLjc5LTYuNzM4IDMuMTg4LTEzLjgzMiA0LjE1My0yMS4wODYgMS4xMzMtOC40ODgtMS42ODgtMTYuODI0LTcuNzMtMjIuODY3LTYuMDQ4LTYuMDQ3LTE0LjM4LTguODY3LTIyLjg3Mi03LjczNC0yMS40NzcgMi44Ni01MS42NCAxMC44MjgtNzMuMzU1IDMyLjU0My02LjM3OSA2LjM3OS0xMS45NDUgMTMuODktMTYuNjM3IDIyLjQyMmE4MC4yOTMgODAuMjkzIDAgMDAtMTAuMjI3LTEyLjE1MmMtMTQuOTUzLTE0LjU2Ni0zNC42NTYtMjIuNTktNTUuNDg0LTIyLjU5LTEyLjc1IDAtMjMuMTI1IDEwLjM3LTIzLjEyNSAyMy4xMjUgMCAxMi43NSAxMC4zNzUgMjMuMTIgMjMuMTI1IDIzLjEyIDE1LjU3IDAgMjguNzIgMTAuNjU3IDMyLjM1MiAyNS4yMi01MC42OTUgMTEuMDc4LTg4Ljc3IDU2LjMxNi04OC43NyAxMTAuMjkgMCAzMC44MTItNy4zNiA0My44MTYtMTcuNTQ3IDYxLjgyQzE0LjE0NSAyODUuMzIzLjUgMzA5LjQzMi41IDM1NS44OTNjMCAzMi42MDIgOS45ODkgNjMuODUyIDI4Ljg4MyA5MC4zODNhNy41IDcuNSAwIDAwMTAuNDYxIDEuNzU0YzMuMzcxLTIuNDAzIDQuMTYtNy4wODYgMS43NTgtMTAuNDU3QzI0LjUyNCA0MTMuNiAxNS41IDM4NS4zNTMgMTUuNSAzNTUuODkzYzAtNDIuNTEyIDEyLjYwOS02NC43OTMgMjMuNzM4LTg0LjQ1NyAxMC40NTctMTguNDggMTkuNDkyLTM0LjQzOCAxOS40OTItNjkuMjAzIDAtNTMuOTc3IDQzLjkxNC05Ny44ODcgOTcuODg3LTk3Ljg4NyA0LjgzNiAwIDkuNTg2LjM1NSAxNC4yMyAxLjAzNS4wNy4wMTUuMTQ1LjAyLjIxOS4wMzEgNDcuMTQ4IDcuMDA0IDgzLjQ0IDQ3Ljc1NCA4My40NCA5Ni44MiAwIDM0Ljc2NiA5LjAzMiA1MC43MjMgMTkuNDkzIDY5LjIwNyAxMS4xMjkgMTkuNjYgMjMuNzM4IDQxLjk0MSAyMy43MzggODQuNDUzIDAgNzcuODE2LTYzLjMwNSAxNDEuMTItMTQxLjEyIDE0MS4xMi0zMy44OTEgMC02Ni42NzYtMTIuMjQ2LTkyLjMyLTM0LjQ4LTMuMTMtMi43MTUtNy44NjctMi4zNzUtMTAuNTgyLjc1NGE3LjUwNiA3LjUwNiAwIDAwLjc1NCAxMC41ODJjMjguMzcgMjQuNTk4IDY0LjY0OCAzOC4xNDUgMTAyLjE1IDM4LjE0NSA4Ni4wODYgMCAxNTYuMTItNzAuMDM1IDE1Ni4xMi0xNTYuMTIgMC00Ni40NjUtMTMuNjQ1LTcwLjU3NC0yNS42ODgtOTEuODQ4em0tMTMwLjQzLTE3NC43Yy0zLjExMyAwLTYuMTk1LjEzMy05LjI0Ni4zNzktNC43NDYtMjEuODQ0LTI0LjE0NS0zNy45OTYtNDcuMjIzLTM3Ljk5Ni00LjQ4IDAtOC4xMjUtMy42NDUtOC4xMjUtOC4xMjEgMC00LjQ4IDMuNjQ0LTguMTI1IDguMTI1LTguMTI1IDE2Ljg5NSAwIDMyLjg4MyA2LjUxMiA0NS4wMTYgMTguMzMyIDEwLjAxNiA5Ljc1OCAxNi40OCAyMi4yMyAxOC42OSAzNS43N2ExMTMuODkyIDExMy44OTIgMCAwMC03LjIzNy0uMjM4em0wIDM5Ni42M2M3MS43MjcgMCAxMzAuMDgtNTguMzUyIDEzMC4wOC0xMzAuMDggMC0zOS42MDktMTEuMzQtNTkuNjQ1LTIyLjMwOS03OS4wMi0xMC43NjItMTkuMDE2LTIwLjkyNi0zNi45NzMtMjAuOTI2LTc0LjY0NSAwLTQ3Ljg5MS0zOC45NTctODYuODUyLTg2Ljg0OC04Ni44NTJzLTg2Ljg1MiAzOC45NjEtODYuODUyIDg2Ljg1MmMwIDM3LjY3Mi0xMC4xNjQgNTUuNjI5LTIwLjkyMiA3NC42NDUtMTAuOTY5IDE5LjM3NS0yMi4zMDkgMzkuNDEtMjIuMzA5IDc5LjAyLjAwNCA3MS43MjcgNTguMzU1IDEzMC4wOCAxMzAuMDggMTMwLjA4em0tOTQuNzE5LTIwMS43MWMxMS4yNDItMTkuODY3IDIyLjg3MS00MC40MDYgMjIuODcxLTgyLjAzMSAwLTM5LjYxNyAzMi4yMy03MS44NDggNzEuODQ4LTcxLjg0OCAzOS42MTcgMCA3MS44NTIgMzIuMjMgNzEuODUyIDcxLjg0OCAwIDQxLjYyNSAxMS42MjUgNjIuMTY0IDIyLjg3MSA4Mi4wMzEgMTAuNDY5IDE4LjUgMjAuMzU5IDM1Ljk3NyAyMC4zNTkgNzEuNjMzIDAgNjMuNDUzLTUxLjYyNSAxMTUuMDgtMTE1LjA4IDExNS4wOC02My40NTMgMC0xMTUuMDgtNTEuNjI1LTExNS4wOC0xMTUuMDggMC0zNS42NTYgOS44OS01My4xMzMgMjAuMzU5LTcxLjYzM3ptNTAuMDU1LTE4LjA1OWE3LjUgNy41IDAgMDA3LjUtNy41di03LjQxNGE3LjUgNy41IDAgMDAtNy41LTcuNSA3LjQ5NyA3LjQ5NyAwIDAwLTcuNSA3LjV2Ny40MTRjMCA0LjE0NCAzLjM1NiA3LjUgNy41IDcuNXptNDQuNjY0IDUuNjk1YTIzLjEwNyAyMy4xMDcgMCAwMDE3LjQzLTcuOTQxIDcuNDkyIDcuNDkyIDAgMDAtLjcyNy0xMC41NzggNy40OTcgNy40OTcgMCAwMC0xMC41ODIuNzI2Yy0xLjU0MyAxLjc3NC0zLjc3NyAyLjc5My02LjEyIDIuNzkzcy00LjU3NS0xLjAxOS02LjEyMi0yLjc5M2E3LjQ5MiA3LjQ5MiAwIDAwLTEwLjU3OC0uNzI2IDcuNDk2IDcuNDk2IDAgMDAtLjczIDEwLjU3OCAyMy4xMTIgMjMuMTEyIDAgMDAxNy40MyA3Ljk0MXpcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdm9jYWRvXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU1ZHSWNvblByb3BzIH0gZnJvbSAnLi9zdmcudHlwZXMnXHJcblxyXG5jb25zdCBCYXNrZXQgPSAoeyBzaXplID0gJzM0cHgnIH06IFNWR0ljb25Qcm9wcykgPT4gKFxyXG4gIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTQ5MC4xIDI5Mi4wM0gyMS45Yy03Ljk1MyAwLTE0LjQtNi40NDctMTQuNC0xNC40di0zNC4zOTFjMC03Ljk1MyA2LjQ0Ny0xNC40IDE0LjQtMTQuNGg0NjguMmM3Ljk1MyAwIDE0LjQgNi40NDcgMTQuNCAxNC40djM0LjM5MWMwIDcuOTUyLTYuNDQ3IDE0LjQtMTQuNCAxNC40elwiXHJcbiAgICAgIGZpbGw9XCIjRkFEOTdFXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTQ5MC4xIDIyOC44NGgtMzguMDc2YzcuOTUzIDAgMTQuNCA2LjQ0NyAxNC40IDE0LjR2MzQuMzkxYzAgNy45NTMtNi40NDcgMTQuNC0xNC40IDE0LjRINDkwLjFjNy45NTMgMCAxNC40LTYuNDQ3IDE0LjQtMTQuNFYyNDMuMjRjMC03Ljk1My02LjQ0Ny0xNC40LTE0LjQtMTQuNHpcIlxyXG4gICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk00NjYuNDIgMjkyLjAzSDQ1LjU3bDIxLjA4NCAxNTMuMzRjMi40MzkgMTcuNzQxIDE3LjU5OSAzMC45NTkgMzUuNTA3IDMwLjk1OWgzMDcuNjdjMTcuOTA4IDAgMzMuMDY4LTEzLjIxOCAzNS41MDctMzAuOTU5bDIxLjA4NC0xNTMuMzR6XCJcclxuICAgICAgZmlsbD1cIiNBMTZCNEVcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNNDUuNTc2IDI5Mi4wM2wzLjU2MSAyNS44OTloMzc1LjY1bC0xNy41MjMgMTI3LjQ0Yy0yLjQzOSAxNy43NDEtMTcuNTk5IDMwLjk1OS0zNS41MDcgMzAuOTU5aDM4LjA3NmMxNy45MDggMCAzMy4wNjgtMTMuMjE4IDM1LjUwNy0zMC45NTlsMTcuNTIzLTEyNy40NCAzLjU2MS0yNS44OTlINDUuNTc0elwiXHJcbiAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTQyNy4yMiAyMjguODRoLTQ3LjI0MXYtOTQuNzQzYzAtMjguMjI0LTIyLjk2Mi01MS4xODYtNTEuMTg2LTUxLjE4NmgtMTQ1LjU5Yy0yOC4yMjQgMC01MS4xODYgMjIuOTYyLTUxLjE4NiA1MS4xODZ2OTQuNzQzSDg0Ljc3NnYtOTQuNzQzYzAtNTQuMjcyIDQ0LjE1NC05OC40MjcgOTguNDI3LTk4LjQyN2gxNDUuNTljNTQuMjczIDAgOTguNDI3IDQ0LjE1NCA5OC40MjcgOTguNDI3djk0Ljc0M3pcIlxyXG4gICAgICBmaWxsPVwiI0ExNkI0RVwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGggb3BhY2l0eT17MC4xfSBkPVwiTTg0Ljc4IDIwMi45NEgxMzIuMDJWMjI4Ljg0MTk5OTk5OTk5OTk4SDg0Ljc4elwiIC8+XHJcbiAgICA8cGF0aCBvcGFjaXR5PXswLjF9IGQ9XCJNMzc5Ljk4IDIwMi45NEg0MjcuMjJWMjI4Ljg0MTk5OTk5OTk5OTk4SDM3OS45OHpcIiAvPlxyXG4gICAgPHBhdGggZmlsbD1cIiNGQUQ5N0VcIiBkPVwiTTE5My45MSAzNS42NzJIMzE4LjA5MDAwMDAwMDAwMDAzVjgyLjkxMkgxOTMuOTF6XCIgLz5cclxuICAgIDxnIG9wYWNpdHk9ezAuMX0+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUyLjk0IDQzOC45NGw2LjcxOC02LjcxOGE3LjUgNy41IDAgMDAtMTAuNjA3LTEwLjYwNmwtNi43MTcgNi43MTctNi43MTctNi43MTctNi43MTctNi43MTggNi43MTctNi43MThhNy41IDcuNSAwIDAwLTEwLjYwNy0xMC42MDZsLTYuNzE3IDYuNzE3LTYuNzE3LTYuNzE3YTcuNSA3LjUgMCAwMC0xMC42MDcgMTAuNjA2bDYuNzE3IDYuNzE4LTYuNzE3IDYuNzE4YTcuNSA3LjUgMCAwMDUuMzA0IDEyLjgwMyA3LjQ3OCA3LjQ3OCAwIDAwNS4zMDQtMi4xOTdsNi43MTctNi43MTcgMTMuNDM1IDEzLjQzNS02LjcxOCA2LjcxOGE3LjUgNy41IDAgMDA1LjMwNCAxMi44MDMgNy40NzggNy40NzggMCAwMDUuMzA0LTIuMTk3bDYuNzE3LTYuNzE3IDYuNzE3IDYuNzE3YzEuNDY1IDEuNDY0IDMuMzg1IDIuMTk3IDUuMzA0IDIuMTk3czMuODM5LS43MzIgNS4zMDQtMi4xOTdhNy41IDcuNSAwIDAwMC0xMC42MDZsLTYuNzIxLTYuNzE4ek00MjYuMjMgMzYzLjFsNi43MTgtNi43MThhNy41IDcuNSAwIDAwLS4wMDEtMTAuNjA3IDcuNDk4IDcuNDk4IDAgMDAtMTAuNjA2IDBsLTYuNzE3IDYuNzE3LTYuNzE3LTYuNzE3YTcuNSA3LjUgMCAwMC0xMC42MDYgMCA3LjUgNy41IDAgMDAtLjAwMSAxMC42MDdsNi43MTggNi43MTgtNi43MTggNi43MThhNy41IDcuNSAwIDAwLjAwMSAxMC42MDdjMS40NjQgMS40NjUgMy4zODQgMi4xOTcgNS4zMDMgMi4xOTdzMy44MzktLjczMiA1LjMwNC0yLjE5N2w2LjcxNy02LjcxNyA2LjcxNyA2LjcxN2E3LjQ3NiA3LjQ3NiAwIDAwNS4zMDQgMi4xOTcgNy40NzQgNy40NzQgMCAwMDUuMzAzLTIuMTk3IDcuNSA3LjUgMCAwMC4wMDEtMTAuNjA3bC02LjcyLTYuNzE4elwiIC8+XHJcbiAgICA8L2c+XHJcbiAgICA8ZyBmaWxsPVwiI0YxNUI3MFwiIG9wYWNpdHk9ezAuM30+XHJcbiAgICAgIDxlbGxpcHNlIGN4PXsxOTMuMDJ9IGN5PXszNjkuNTJ9IHJ4PXsyNi45Nn0gcnk9ezExLjY5OH0gLz5cclxuICAgICAgPGVsbGlwc2UgY3g9ezMxOC45OH0gY3k9ezM2OS41Mn0gcng9ezI2Ljk2fSByeT17MTEuNjk4fSAvPlxyXG4gICAgPC9nPlxyXG4gICAgPHBhdGggZD1cIk00OTAuMSAyMjEuMzRoLTU1LjM3OHYtODcuMjQzYzAtNTguNDA4LTQ3LjUxOS0xMDUuOTMtMTA1LjkzLTEwNS45M2gtMTQ1LjU5Yy01OC40MDggMC0xMDUuOTMgNDcuNTE5LTEwNS45MyAxMDUuOTN2ODcuMjQzSDIxLjg5NGMtMTIuMDc2IDAtMjEuOSA5LjgyNC0yMS45IDIxLjl2MzQuMzkxYzAgMTIuMDc2IDkuODI0IDIxLjkgMjEuOSAyMS45aDE3LjEzN2wxNC4zNSAxMDQuMzZhNy41IDcuNSAwIDEwMTQuODU5LTIuMDQ0bC0xNC4wNy0xMDIuMzJoMzQ2LjZjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVIMjEuOWE2LjkwNyA2LjkwNyAwIDAxLTYuOS02Ljl2LTM0LjM5MWMwLTMuODA1IDMuMDk2LTYuOSA2LjktNi45aDYyLjg2OGwuMDEuMDAxLjAxLS4wMDFoNDcuMjIxbC4wMS4wMDEuMDEtLjAwMWgyNDcuOTRsLjAxLjAwMS4wMS0uMDAxaDQ3LjIyMWwuMDEuMDAxLjAxLS4wMDFoNjIuODY3YzMuODA1IDAgNi45IDMuMDk1IDYuOSA2Ljl2MzQuMzkxYzAgMy44MDUtMy4wOTYgNi45LTYuOSA2LjloLTU2LjA5NGMtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWgyMy44MTdsLTE5LjkxMyAxNDQuODJjLTEuOTIgMTMuOTU2LTEzLjk5IDI0LjQ4LTI4LjA3NyAyNC40OEgxMDIuMTZjLTE0LjA4NyAwLTI2LjE1Ny0xMC41MjQtMjguMDc3LTI0LjQ4MWwtMS42OTYtMTIuMzMzYTcuNSA3LjUgMCAxMC0xNC44NTkgMi4wNDRsMS42OTYgMTIuMzMyYzIuOTM1IDIxLjM0MyAyMS4zOTQgMzcuNDM4IDQyLjkzNyAzNy40MzhoMzA3LjY3YzIxLjU0MyAwIDQwLjAwMi0xNi4wOTUgNDIuOTM2LTM3LjQzOGwyMC4xOTMtMTQ2Ljg2aDE3LjEzN2MxMi4wNzYgMCAyMS45LTkuODI0IDIxLjktMjEuOXYtMzQuMzkxYzAtMTIuMDczLTkuODI0LTIxLjg5OS0yMS45LTIxLjg5OXpNMjk2Ljc2IDQzLjE3aDEzLjgzNXYzMi4yNDFIMjk2Ljc2VjQzLjE3em0tMzMuMjU1IDBoMTguMjU1djMyLjI0MWgtMTguMjU1VjQzLjE3em0tMzMuMjU1IDBoMTguMjU1djMyLjI0MUgyMzAuMjVWNDMuMTd6bS0yOC44MzUgMGgxMy44MzV2MzIuMjQxaC0xMy44MzVWNDMuMTd6bTE3MS4wNyAxNzguMTdoLTIzMi45NnYtNDguMDQ0YzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVzLTcuNSAzLjM1OC03LjUgNy41djQ4LjA0NGgtMzIuMjR2LTg3LjI0M2MwLTUwLjEzNyA0MC43OS05MC45MjcgOTAuOTI3LTkwLjkyN2gzLjIwNXYzMi4yNDFoLTMuMjA1Yy0zMi4zNiAwLTU4LjY4NiAyNi4zMjctNTguNjg2IDU4LjY4NlYxNDNjMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtOC45MDNjMC0yNC4wODggMTkuNTk4LTQzLjY4NiA0My42ODYtNDMuNjg2aDE0NS41OWMyNC4wODkgMCA0My42ODcgMTkuNTk4IDQzLjY4NyA0My42ODZ2ODcuMjQzaC0uMDAyem00Ny4yNDEgMGgtMzIuMjR2LTg3LjI0M2MwLTMyLjM1OS0yNi4zMjYtNTguNjg2LTU4LjY4Ny01OC42ODZoLTMuMjA1di0zMi4yNGgzLjIwNWM1MC4xMzcgMCA5MC45MjcgNDAuNzkgOTAuOTI3IDkwLjkyN3Y4Ny4yNDJ6bS05My4yNCAxMjIuMTV2LTEwLjQ1NWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNXYxMC40NTVjMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXptLTEyNS45NiAwdi0xMC40NTVjMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU4LTcuNSA3LjV2MTAuNDU1YTcuNSA3LjUgMCAwMDE1IDB6bTU1LjQ4MiAxNS41MjhhMjkuNTI4IDI5LjUyOCAwIDAwMjIuMjYtMTAuMTM3IDcuNDk5IDcuNDk5IDAgMDAtLjcyNy0xMC41ODIgNy41IDcuNSAwIDAwLTEwLjU4Mi43MjZjLTIuNzY1IDMuMTczLTYuNzU3IDQuOTkzLTEwLjk1MSA0Ljk5M3MtOC4xODYtMS44Mi0xMC45NTEtNC45OTNhNy41IDcuNSAwIDAwLTEwLjU4Mi0uNzI2IDcuNSA3LjUgMCAwMC0uNzI3IDEwLjU4MiAyOS41MjQgMjkuNTI0IDAgMDAyMi4yNiAxMC4xMzd6XCIgLz5cclxuICA8L3N2Zz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFza2V0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU1ZHSWNvblByb3BzIH0gZnJvbSAnLi9zdmcudHlwZXMnXHJcblxyXG4vKipcclxuICogT3JpZ2luYWwgSWNvbiBmcm9tIEZyZWVwaWssIHNldDogQ2luY28gZGUgTWF5by5cclxuICogQW5kIGVkaXRlZCBwb3IgeW8gbWVyZW5ndWVzLlxyXG4gKiB3d3cuZmxhdGljb24uY29tXHJcbiAqL1xyXG5jb25zdCBQb3NNZU11ZXJvID0gKHsgc2l6ZSA9ICc1OHB4JywgLi4ub3RoZXJQcm9wcyB9OiBTVkdJY29uUHJvcHMpID0+IChcclxuICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgNjQwIDY0MFwiIHsuLi5vdGhlclByb3BzfT5cclxuICAgIDxkZWZzPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGlkPVwiYVwiXHJcbiAgICAgICAgZD1cIk0zMjkuMjEgMTMzLjk3Yy0yLjE2IDE2LjE1IDExLjU4IDI5Ljg5IDI3LjczIDI3Ljc0IDI1LjA3LTMuMzUgNjAuOTItMTIuNjIgODYuMzQtMzguMDMgMjUuNDEtMjUuNDIgMzQuNjktNjEuMjggMzguMDMtODYuMzUgMi4xNS0xNi4xNC0xMS41OS0yOS44OC0yNy43My0yNy43My0yNS4wNyAzLjM0LTYwLjkzIDEyLjYyLTg2LjM1IDM4LjAzLTI1LjQxIDI1LjQxLTM0LjY5IDYxLjI3LTM4LjAyIDg2LjM0elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgaWQ9XCJiXCJcclxuICAgICAgICBkPVwiTTM3NS4wNCAxMTcuMjVjLTMuNjYtMy42Ni0zLjY2LTkuNiAwLTEzLjI2IDQuODktNC45IDQ0LjA1LTQ0LjA2IDQ4Ljk1LTQ4Ljk1IDMuNjYtMy42NiA5LjYtMy42NiAxMy4yNiAwYTkuMzYxIDkuMzYxIDAgMDEwIDEzLjI2Yy00Ljg5IDQuOS00NC4wNSA0NC4wNi00OC45NSA0OC45NS0xLjgzIDEuODMtNC4yMyAyLjc1LTYuNjMgMi43NXMtNC44LS45Mi02LjYzLTIuNzV6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cImNcIlxyXG4gICAgICAgIGQ9XCJNMzA4LjcgMTI1LjEzYzAtMjguMTctMjIuOTEtNTEuMDgtNTEuMDgtNTEuMDgtMTAuNzkgMC0xOS41NC04Ljc1LTE5LjU0LTE5LjU0czguNzUtMTkuNTQgMTkuNTQtMTkuNTRjNDkuNzEgMCA5MC4xNiA0MC40NSA5MC4xNiA5MC4xNiAwIDEwLjc5LTguNzUgMTkuNTMtMTkuNTQgMTkuNTNzLTE5LjU0LTguNzQtMTkuNTQtMTkuNTN6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cImRcIlxyXG4gICAgICAgIGQ9XCJNMzQ0LjIgMTAwLjA2Yy01LjI0LS41NC0xMC41Ny0uODItMTUuOTYtLjgyLTguNjYgMC0xNy4xNS43My0yNS40MyAyLjExYTUwLjgwMyA1MC44MDMgMCAwMTUuODkgMjMuNzhjMCAxMC43OSA4Ljc1IDE5LjUzIDE5LjU0IDE5LjUzczE5LjU0LTguNzQgMTkuNTQtMTkuNTNjMC04LjctMS4yNy0xNy4xLTMuNTgtMjUuMDd6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cImVcIlxyXG4gICAgICAgIGQ9XCJNMTQyLjM5IDQ0NS4wNGMwLTU1LjY0IDE2LjQxLTg0LjY0IDMwLjktMTEwLjI0IDEyLjkzLTIyLjg2IDIzLjE2LTQwLjkyIDIzLjE2LTgxLjkyIDAtNzIuNjcgNTkuMTItMTMxLjc5IDEzMS43OS0xMzEuNzlzMTMxLjc5IDU5LjEyIDEzMS43OSAxMzEuNzljMCA0MSAxMC4yMiA1OS4wNiAyMy4xNiA4MS45MiAxNC40OSAyNS42IDMwLjkxIDU0LjYgMzAuOTEgMTEwLjI0IDAgMTAyLjQ4LTgzLjM4IDE4NS44NS0xODUuODYgMTg1Ljg1cy0xODUuODUtODMuMzctMTg1Ljg1LTE4NS44NXpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGlkPVwiZlwiXHJcbiAgICAgICAgZD1cIk0yODMuNjYgMTI4Ljg1Yy01MC44IDE4LjMyLTg3LjIxIDY3LTg3LjIxIDEyNC4wMyAwIDQxLjAxLTEwLjIzIDU5LjA2LTIzLjE2IDgxLjkyLTE0LjQ5IDI1LjYtMzAuOSA1NC42LTMwLjkgMTEwLjI0IDAgMTAyLjQ4IDgzLjM3IDE4NS44NSAxODUuODUgMTg1Ljg1IDQ0LjU3IDAgODUuNTEtMTUuNzcgMTE3LjU3LTQyLjAyLTIwMS42My0yOC4yNS0yMzIuMjEtMzMwLjI5LTE2Mi4xNS00NjAuMDJ6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cImdcIlxyXG4gICAgICAgIGQ9XCJNMjI5LjAxIDI1Mi44OGMwLTU0LjgxIDQ0LjQyLTk5LjIzIDk5LjIzLTk5LjIzIDU0LjggMCA5OS4yMyA0NC40MiA5OS4yMyA5OS4yMyAwIDk4LjMxIDU0LjA2IDk3LjIxIDU0LjA2IDE5Mi4xNiAwIDg0LjY2LTY4LjYzIDE1My4yOS0xNTMuMjkgMTUzLjI5UzE3NC45NSA1MjkuNyAxNzQuOTUgNDQ1LjA0YzAtOTQuOTUgNTQuMDYtOTMuODUgNTQuMDYtMTkyLjE2elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgaWQ9XCJoXCJcclxuICAgICAgICBkPVwiTTIyOS4wMSAyNTIuODhjMCA5OC4zMS01NC4wNiA5Ny4yMS01NC4wNiAxOTIuMTYgMCA4NC42NiA2OC42MyAxNTMuMjkgMTUzLjI5IDE1My4yOSAyNy41NSAwIDUzLjQxLTcuMjcgNzUuNzUtMjAtMTQ0LjQ2LTU0LjA4LTE3OC4xOS0yNjktMTM5LjU4LTQwMS40LTIxLjY0IDE4LjItMzUuNCA0NS40Ni0zNS40IDc1Ljk1elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgaWQ9XCJpXCJcclxuICAgICAgICBkPVwiTTI3NS4xNiAzOTEuOThjLTI5LjMxIDI5LjMxLTI5LjMxIDc2LjgzIDAgMTA2LjE0czc2LjgzIDI5LjMxIDEwNi4xNCAwIDI5LjMxLTc2LjgzIDAtMTA2LjE0LTc2LjgzLTI5LjMxLTEwNi4xNCAwelwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgaWQ9XCJqXCJcclxuICAgICAgICBkPVwiTTMxMS40IDM3MS45MWMtMzMuMzQgNy42NS01OC4yMSAzNy40OC01OC4yMSA3My4xMyAwIDQxLjQ1IDMzLjYgNzUuMDUgNzUuMDUgNzUuMDUgMjUuNDQgMCA0Ny45MS0xMi42NyA2MS40OS0zMi4wNC04MS4xOCAxMy43My0xMTkuMDktNzQuMzktNzguMzMtMTE2LjE0elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgaWQ9XCJrXCJcclxuICAgICAgICBkPVwiTTM5My40OCAzMjMuNXYtOS4yN2MwLTUuMTktNC4yLTkuMzgtOS4zOC05LjM4LTUuMTkgMC05LjM4IDQuMTktOS4zOCA5LjM4djkuMjdjMCA1LjE4IDQuMTkgOS4zOCA5LjM4IDkuMzggNS4xOCAwIDkuMzgtNC4yIDkuMzgtOS4zOHptMTkuMTkgMTIxLjU0YzAtNDYuNTYtMzcuODctODQuNDMtODQuNDMtODQuNDNzLTg0LjQzIDM3Ljg3LTg0LjQzIDg0LjQzYzAgNDYuNTUgMzcuODcgODQuNDMgODQuNDMgODQuNDNzODQuNDMtMzcuODggODQuNDMtODQuNDN6bS0xOC43NiAwYzAgMzYuMjEtMjkuNDYgNjUuNjctNjUuNjcgNjUuNjdzLTY1LjY3LTI5LjQ2LTY1LjY3LTY1LjY3IDI5LjQ2LTY1LjY3IDY1LjY3LTY1LjY3IDY1LjY3IDI5LjQ2IDY1LjY3IDY1LjY3em03NS41LTE5Mi4xNmMwLTQwLjcxLTE3LjMzLTc3LjQ0LTQ0Ljk5LTEwMy4yMyA5LjYyLTUuNTYgMTguMTctMTIuMDIgMjUuNDktMTkuMzQgNi40MS02LjQgMTIuMjEtMTMuNzggMTcuMjUtMjEuOTIgMi43My00LjQgMS4zNy0xMC4xOC0zLjAzLTEyLjkxcy0xMC4xOS0xLjM3LTEyLjkxIDMuMDNjLTQuMjkgNi45Mi05LjE5IDEzLjE1LTE0LjU4IDE4LjUzLTcuNzIgNy43My0xNy4xMyAxNC4zOS0yOC4wMiAxOS44Ni0xNS40Mi0xMC43Mi0zMy4wNS0xOC40NS01Mi4wOC0yMi4zNC0uOTEtOC41OS0yLjg5LTE2Ljk0LTUuOTItMjQuODkgNi4wMi0xNC4wNiAxMy44MS0yNS45OCAyMy4yNC0zNS40IDIzLjQ1LTIzLjQ1IDU2Ljk2LTMyLjE4IDgwLjk1LTM1LjM3IDQuNzctLjY0IDkuNDYuOTUgMTIuODYgNC4zNCAzLjM5IDMuNCA0Ljk4IDguMDggNC4zNCAxMi44Ni0xLjEgOC4yOC0yLjY5IDE2LjM3LTQuNzMgMjQuMDNhOS4zNzQgOS4zNzQgMCAwMDYuNjYgMTEuNDdjNSAxLjMyIDEwLjE0LTEuNjUgMTEuNDctNi42NiAyLjI0LTguNDIgMy45OS0xNy4yOSA1LjE5LTI2LjM2IDEuNDItMTAuNjItMi4xMS0yMS4wNC05LjY2LTI4LjYtNy41Ny03LjU2LTE3Ljk5LTExLjA5LTI4LjYtOS42N0M0MjUuNDggMy44OCAzODcuNzYgMTMuODUgMzYwLjYgNDFjLTcuOTggNy45OC0xNC45NCAxNy4zNy0yMC44IDI4LjA0LTMuNzItNS40MS03Ljk5LTEwLjUxLTEyLjc5LTE1LjE5LTE4LjctMTguMjItNDMuMzQtMjguMjUtNjkuMzktMjguMjUtMTUuOTQgMC0yOC45MiAxMi45Ny0yOC45MiAyOC45MiAwIDE1Ljk0IDEyLjk4IDI4LjkxIDI4LjkyIDI4LjkxIDE5LjQ3IDAgMzUuOTIgMTMuMzMgNDAuNDYgMzEuNTQtNjMuNCAxMy44NS0xMTEuMDEgNzAuNDItMTExLjAxIDEzNy45MSAwIDM4LjUzLTkuMiA1NC44LTIxLjk0IDc3LjMxLTE1LjA2IDI2LjYtMzIuMTIgNTYuNzUtMzIuMTIgMTE0Ljg1IDAgNDAuNzcgMTIuNDkgNzkuODUgMzYuMTIgMTEzLjAzIDMgNC4yMSA4Ljg2IDUuMiAxMy4wOCAyLjE5IDQuMjEtMyA1LjItOC44NiAyLjItMTMuMDgtMjEuMzYtMjkuOTctMzIuNjQtNjUuMy0zMi42NC0xMDIuMTQgMC01My4xNiAxNS43Ni04MS4wMyAyOS42OC0xMDUuNjIgMTMuMDgtMjMuMTEgMjQuMzgtNDMuMDYgMjQuMzgtODYuNTQgMC02Ny41IDU0LjkxLTEyMi40MSAxMjIuNDEtMTIyLjQxIDYuMDUgMCAxMS45OS40NSAxNy43OSAxLjMuMDkuMDIuMTguMDIuMjguMDMgNTguOTYgOC43NiAxMDQuMzQgNTkuNzIgMTA0LjM0IDEyMS4wOCAwIDQzLjQ4IDExLjMgNjMuNDMgMjQuMzggODYuNTUgMTMuOTIgMjQuNTggMjkuNjkgNTIuNDUgMjkuNjkgMTA1LjYxIDAgOTcuMzEtNzkuMTcgMTc2LjQ4LTE3Ni40OCAxNzYuNDgtNDIuMzggMC04My4zOC0xNS4zMi0xMTUuNDUtNDMuMTItMy45MS0zLjQtOS44NC0yLjk3LTEzLjI0Ljk0YTkuMzg4IDkuMzg4IDAgMDAuOTUgMTMuMjRjMzUuNDggMzAuNzYgODAuODQgNDcuNyAxMjcuNzQgNDcuNyAxMDcuNjUgMCAxOTUuMjMtODcuNTggMTk1LjIzLTE5NS4yNCAwLTU4LjExLTE3LjA2LTg4LjI2LTMyLjEyLTExNC44Ni0xMi43My0yMi41LTIxLjk0LTM4Ljc3LTIxLjk0LTc3LjN6bS0xNTIuNzMtMTQwLjdjLTUuOTQtMjcuMzEtMzAuMi00Ny41MS01OS4wNi00Ny41MS01LjYgMC0xMC4xNi00LjU2LTEwLjE2LTEwLjE2czQuNTYtMTAuMTYgMTAuMTYtMTAuMTZjMjEuMTMgMCA0MS4xMiA4LjE0IDU2LjMgMjIuOTIgMTIuNTIgMTIuMjEgMjAuNjEgMjcuOCAyMy4zNyA0NC43NC0yLjk5LS4xOS02LjAxLS4zLTkuMDUtLjMtMy44OSAwLTcuNzUuMTYtMTEuNTYuNDd6bTE3NC4yMyAzMzIuODZjMC00OS41My0xNC4xOC03NC41OS0yNy45LTk4LjgyLTEzLjQ1LTIzLjc4LTI2LjE3LTQ2LjIzLTI2LjE3LTkzLjM0IDAtNTkuODktNDguNzEtMTA4LjYxLTEwOC42LTEwOC42MXMtMTA4LjYxIDQ4LjcyLTEwOC42MSAxMDguNjFjMCA0Ny4xMS0xMi43MSA2OS41Ni0yNi4xNyA5My4zNC0xMy43MSAyNC4yMy0yNy44OSA0OS4yOS0yNy44OSA5OC44MiAwIDg5LjcgNzIuOTcgMTYyLjY3IDE2Mi42NyAxNjIuNjdzMTYyLjY3LTcyLjk3IDE2Mi42Ny0xNjIuNjd6TTIzOC4zOSAyNTIuODhjMC00OS41NSA0MC4zMS04OS44NSA4OS44NS04OS44NXM4OS44NSA0MC4zIDg5Ljg1IDg5Ljg1YzAgNTIuMDUgMTQuNTQgNzcuNzQgMjguNiAxMDIuNTggMTMuMDkgMjMuMTQgMjUuNDYgNDQuOTkgMjUuNDYgODkuNTggMCA3OS4zNS02NC41NiAxNDMuOTEtMTQzLjkxIDE0My45MXMtMTQzLjkxLTY0LjU2LTE0My45MS0xNDMuOTFjMC00NC41OSAxMi4zNy02Ni40NCAyNS40Ni04OS41OCAxNC4wNi0yNC44NCAyOC42LTUwLjUzIDI4LjYtMTAyLjU4em00My4zNyA3MC42MnYtOS4yN2MwLTUuMTktNC4yLTkuMzgtOS4zOC05LjM4cy05LjM3IDQuMTktOS4zNyA5LjM4djkuMjdjMCA1LjE4IDQuMTkgOS4zOCA5LjM3IDkuMzhzOS4zOC00LjIgOS4zOC05LjM4em02OC4yNyA2LjU3YzMuNDEtMy45IDMtOS44My0uOS0xMy4yMy0zLjkxLTMuNC05LjgzLTMtMTMuMjQuOTEtMS45MyAyLjIyLTQuNzIgMy40OS03LjY1IDMuNDlzLTUuNzItMS4yNy03LjY2LTMuNDljLTMuNC0zLjkxLTkuMzItNC4zMS0xMy4yMi0uOTEtMy45MSAzLjQtNC4zMiA5LjMzLS45MiAxMy4yMyA1LjUgNi4zMSAxMy40NSA5LjkzIDIxLjggOS45MyA4LjM2IDAgMTYuMy0zLjYyIDIxLjc5LTkuOTN6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cImxcIlxyXG4gICAgICAgIGQ9XCJNMjkxLjI1IDI5NC40MmM0LjI3IDQuMjcgNC4yNyAxMS4yIDAgMTUuNDdsLTMyLjU3IDMyLjU3YTEwLjkzNiAxMC45MzYgMCAwMS0xNS40OCAwYy0xLjU0LTEuNTQgMS41NSAxLjU1IDAgMC00LjI3LTQuMjctNC4yNy0xMS4xOSAwLTE1LjQ3IDguMDctOC4wNiAyNC41MS0yNC41MSAzMi41OC0zMi41NyA0LjI3LTQuMjcgMTEuMTktNC4yNyAxNS40NyAwIDEuNTQgMS41NS0xLjU1LTEuNTQgMCAwelwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgaWQ9XCJtXCJcclxuICAgICAgICBkPVwiTTI5MS44MiAzNDEuMjVjLTQuMjcgNC4yNy0xMS4yIDQuMjctMTUuNDcgMGwtMzIuNTctMzIuNTdhMTAuOTU1IDEwLjk1NSAwIDAxMC0xNS40OGMxLjU1LTEuNTQtMS41NSAxLjU1IDAgMCA0LjI3LTQuMjcgMTEuMi00LjI3IDE1LjQ3IDAgOC4wNiA4LjA3IDI0LjUxIDI0LjUxIDMyLjU3IDMyLjU4IDQuMjcgNC4yNyA0LjI3IDExLjE5IDAgMTUuNDctMS41NSAxLjU0IDEuNTUtMS41NSAwIDB6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggaWQ9XCJuXCIgZD1cIk0zMDMuMTEgMzAwaDUwLjIydjUwaC01MC4yMnYtNTB6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cIm9cIlxyXG4gICAgICAgIGQ9XCJNNDE0LjI1IDI5Ni41OWM0LjI3IDQuMjcgNC4yNyAxMS4yIDAgMTUuNDdsLTMyLjU3IDMyLjU3YTEwLjk1NSAxMC45NTUgMCAwMS0xNS40OCAwYy0xLjU0LTEuNTUgMS41NSAxLjU1IDAgMC00LjI3LTQuMjctNC4yNy0xMS4yIDAtMTUuNDcgOC4wNy04LjA2IDI0LjUxLTI0LjUxIDMyLjU4LTMyLjU3IDQuMjctNC4yNyAxMS4xOS00LjI3IDE1LjQ3IDAgMS41NCAxLjU1LTEuNTUtMS41NSAwIDB6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cInBcIlxyXG4gICAgICAgIGQ9XCJNNDE0LjgyIDM0My40MWMtNC4yNyA0LjI3LTExLjIgNC4yNy0xNS40NyAwbC0zMi41Ny0zMi41N2MtNC4yNy00LjI3LTQuMjctMTEuMiAwLTE1LjQ3IDEuNTUtMS41NS0xLjU1IDEuNTUgMCAwIDQuMjctNC4yNyAxMS4yLTQuMjcgMTUuNDcgMGwzMi41NyAzMi41N2M0LjI3IDQuMjcgNC4yNyAxMS4yIDAgMTUuNDctMS41NSAxLjU1IDEuNTUtMS41NSAwIDB6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBpZD1cInFcIlxyXG4gICAgICAgIGQ9XCJNMzMzLjk2IDMxNmwxLjI5LjIgMS4yNy4yNSAxLjI1LjMgMS4yMi4zNiAxLjIxLjQxIDEuMTguNDUgMS4xNi41MSAxLjEzLjU1IDEuMS42IDEuMDguNjQgMS4wNS42OCAxLjAxLjczLjk5Ljc2Ljk1LjgxLjkxLjg0Ljg4Ljg4Ljg1LjkyLjguOTUuNzcuOTguNzMgMS4wMi42OCAxLjA1LjY0IDEuMDcuNiAxLjExLjU1IDEuMTMuNSAxLjE2LjQ2IDEuMTguNDEgMS4yLjM1IDEuMjMuMzEgMS4yNS4yNSAxLjI3LjIgMS4yOS4xNCAxLjMuMDggMS4xOGgtMTMuMTFsLS4xMy0xLjItLjI1LTEuMjYtLjM0LTEuMjItLjQyLTEuMTktLjUxLTEuMTUtLjU5LTEuMS0uNjctMS4wNC0uNzQtMS0uODEtLjkzLS44OC0uODgtLjkzLS44MS0xLS43NC0xLjA0LS42Ny0xLjEtLjU5LTEuMTUtLjUxLTEuMTktLjQyLTEuMjItLjM0LTEuMjctLjI1LTEuMjktLjE1LTEuMzItLjA1LTEuMzIuMDUtMS4yOS4xNS0xLjI3LjI1LTEuMjIuMzQtMS4xOS40Mi0xLjE1LjUxLTEuMS41OS0xLjA0LjY3LTEgLjc0LS45My44MS0uODguODgtLjgxLjkzLS43NCAxLS42NyAxLjA0LS41OSAxLjEtLjUxIDEuMTUtLjQyIDEuMTktLjM0IDEuMjItLjI1IDEuMjYtLjEzIDEuMmgtMTMuMTFsLjA4LTEuMTguMTQtMS4zLjItMS4yOS4yNS0xLjI3LjMxLTEuMjUuMzUtMS4yMy40MS0xLjIuNDYtMS4xOC41LTEuMTYuNTUtMS4xMy42LTEuMTEuNjQtMS4wNy42OC0xLjA1LjczLTEuMDIuNzctLjk4LjgtLjk1Ljg1LS45Mi44OC0uODguOTEtLjg0Ljk1LS44MS45OS0uNzYgMS4wMS0uNzMgMS4wNS0uNjggMS4wOC0uNjQgMS4xLS42IDEuMTMtLjU1IDEuMTYtLjUxIDEuMTgtLjQ1IDEuMjEtLjQxIDEuMjItLjM2IDEuMjUtLjMgMS4yNy0uMjUgMS4yOS0uMiAxLjMtLjE1IDEuMzItLjA4IDEuMzQtLjAzIDEuMzQuMDMgMS4zMi4wOCAxLjMuMTV6XCJcclxuICAgICAgLz5cclxuICAgIDwvZGVmcz5cclxuICAgIDx1c2UgZmlsbD1cIiMxNTM4MzBcIiB4bGlua0hyZWY9XCIjYVwiIC8+XHJcbiAgICA8dXNlIGZpbGxPcGFjaXR5PXswfSBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlT3BhY2l0eT17MH0geGxpbmtIcmVmPVwiI2FcIiAvPlxyXG4gICAgPHVzZSBmaWxsPVwiIzAyMTEwN1wiIHhsaW5rSHJlZj1cIiNiXCIgLz5cclxuICAgIDx1c2UgZmlsbE9wYWNpdHk9ezB9IHN0cm9rZT1cIiMwMDBcIiBzdHJva2VPcGFjaXR5PXswfSB4bGlua0hyZWY9XCIjYlwiIC8+XHJcbiAgICA8dXNlIGZpbGw9XCIjNzU0YzJlXCIgeGxpbmtIcmVmPVwiI2NcIiAvPlxyXG4gICAgPHVzZSBmaWxsT3BhY2l0eT17MH0gc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZU9wYWNpdHk9ezB9IHhsaW5rSHJlZj1cIiNjXCIgLz5cclxuICAgIDx1c2UgZmlsbD1cIiMyYzE3MDhcIiB4bGlua0hyZWY9XCIjZFwiIC8+XHJcbiAgICA8dXNlIGZpbGxPcGFjaXR5PXswfSBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlT3BhY2l0eT17MH0geGxpbmtIcmVmPVwiI2RcIiAvPlxyXG4gICAgPHVzZSBmaWxsPVwiIzRlNTY2MFwiIHhsaW5rSHJlZj1cIiNlXCIgLz5cclxuICAgIDx1c2UgZmlsbE9wYWNpdHk9ezB9IHN0cm9rZT1cIiMwMDBcIiBzdHJva2VPcGFjaXR5PXswfSB4bGlua0hyZWY9XCIjZVwiIC8+XHJcbiAgICA8dXNlIGZpbGw9XCIjMzgzYzQzXCIgeGxpbmtIcmVmPVwiI2ZcIiAvPlxyXG4gICAgPHVzZSBmaWxsT3BhY2l0eT17MH0gc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZU9wYWNpdHk9ezB9IHhsaW5rSHJlZj1cIiNmXCIgLz5cclxuICAgIDx1c2UgZmlsbD1cIiM3YTgxNzlcIiB4bGlua0hyZWY9XCIjZ1wiIC8+XHJcbiAgICA8dXNlIGZpbGxPcGFjaXR5PXswfSBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlT3BhY2l0eT17MH0geGxpbmtIcmVmPVwiI2dcIiAvPlxyXG4gICAgPHVzZSBmaWxsPVwiIzIwMjkyM1wiIHhsaW5rSHJlZj1cIiNoXCIgLz5cclxuICAgIDx1c2UgZmlsbE9wYWNpdHk9ezB9IHN0cm9rZT1cIiMwMDBcIiBzdHJva2VPcGFjaXR5PXswfSB4bGlua0hyZWY9XCIjaFwiIC8+XHJcbiAgICA8dXNlIGZpbGw9XCIjNzU0YzJlXCIgeGxpbmtIcmVmPVwiI2lcIiAvPlxyXG4gICAgPHVzZSBmaWxsT3BhY2l0eT17MH0gc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZU9wYWNpdHk9ezB9IHhsaW5rSHJlZj1cIiNpXCIgLz5cclxuICAgIDx1c2UgZmlsbD1cIiMyYzE3MDhcIiB4bGlua0hyZWY9XCIjalwiIC8+XHJcbiAgICA8dXNlIGZpbGxPcGFjaXR5PXswfSBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlT3BhY2l0eT17MH0geGxpbmtIcmVmPVwiI2pcIiAvPlxyXG4gICAgPHVzZSB4bGlua0hyZWY9XCIja1wiIC8+XHJcbiAgICA8dXNlIGZpbGxPcGFjaXR5PXswfSBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlT3BhY2l0eT17MH0geGxpbmtIcmVmPVwiI2tcIiAvPlxyXG4gICAgPHVzZSB4bGlua0hyZWY9XCIjbFwiIC8+XHJcbiAgICA8dXNlIHhsaW5rSHJlZj1cIiNtXCIgLz5cclxuICAgIDx1c2UgZmlsbD1cIiM3YTgxNzlcIiB4bGlua0hyZWY9XCIjblwiIC8+XHJcbiAgICA8dXNlIHhsaW5rSHJlZj1cIiNvXCIgLz5cclxuICAgIDx1c2UgeGxpbmtIcmVmPVwiI3BcIiAvPlxyXG4gICAgPHVzZSB4bGlua0hyZWY9XCIjcVwiIC8+XHJcbiAgPC9zdmc+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc01lTXVlcm9cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBdm9jYWRvIH0gZnJvbSAnLi9Bdm9jYWRvJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2tldCB9IGZyb20gJy4vQmFza2V0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvc01lTXVlcm8gfSBmcm9tICcuL1Bvc01lTXVlcm8nXHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL0xheW91dC9MYXlvdXQnXHJcbmltcG9ydCBLYXdhaWlIZWFkZXIgZnJvbSAnQGNvbXBvbmVudHMvS2F3YWlpSGVhZGVyL0thd2FpaUhlYWRlcidcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJ0Bjb21wb25lbnRzL1Byb2R1Y3RMaXN0L1Byb2R1Y3RMaXN0J1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZTxUUHJvZHVjdFtdPihbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvd1xyXG4gICAgICAuZmV0Y2goJy9hcGkvYXZvJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfTogVEFQSUF2b1Jlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZHVjdExpc3QoZGF0YSlcclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxLYXdhaWlIZWFkZXIgLz5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0TGlzdH0gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIiwiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgdHlwZSBDYXJ0SXRlbVR5cGUgPSBUUHJvZHVjdCAmIHsgcXVhbnRpdHk6IG51bWJlciB9XHJcblxyXG5leHBvcnQgdHlwZSBDYXJ0U3RhdGUgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogQ2FydEl0ZW1UeXBlXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPSB7XHJcbiAgdHlwZTogJ2FkZCcgfCAncmVtb3ZlJ1xyXG4gIGl0ZW06IFRQcm9kdWN0XHJcbiAgcXVhbnRpdHk/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge30gYXMgQ2FydFN0YXRlXHJcblxyXG5jb25zdCBDYXJ0SXRlbXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0U3RhdGUpXHJcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCgoKSA9PiB7fSkgYXMgRGlzcGF0Y2g8XHJcbiAgQ2FydEFjdGlvblxyXG4+KVxyXG5cclxuY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXJzLCBkZWZhdWx0U3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9DYXJ0SXRlbXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gY2FydFJlZHVjZXJzKFxyXG4gIHN0YXRlOiBDYXJ0U3RhdGUsXHJcbiAgeyBpdGVtLCB0eXBlLCBxdWFudGl0eTogcXR5VG9BZGQgPSAxIH06IENhcnRBY3Rpb25cclxuKSB7XHJcbiAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9IHN0YXRlW2l0ZW0uaWRdXHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnYWRkJzoge1xyXG4gICAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGV4aXN0aW5nQ2FydEl0ZW0ucXVhbnRpdHkgKyBxdHlUb0FkZFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIFtpdGVtLmlkXToge1xyXG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFtpdGVtLmlkXToge1xyXG4gICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgIHF1YW50aXR5OiBxdHlUb0FkZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAncmVtb3ZlJzoge1xyXG4gICAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcXVhbnRpdHkgPSBleGlzdGluZ0NhcnRJdGVtLnF1YW50aXR5IC0gMVxyXG4gICAgICBpZiAocXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XHJcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nQ2FydEl0ZW0sXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld0NhcnRJdGVtcyA9IHsgLi4uc3RhdGUgfVxyXG4gICAgICBkZWxldGUgbmV3Q2FydEl0ZW1zW2l0ZW0uaWRdXHJcbiAgICAgIHJldHVybiBuZXdDYXJ0SXRlbXNcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke3R5cGV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldENhcnRTdWJUb3RhbCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiB7XHJcbiAgc3VtICs9IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5XHJcbiAgcmV0dXJuIHN1bVxyXG59XHJcbmNvbnN0IGdldENhcnRDb3VudCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiBzdW0gKyBpdGVtLnF1YW50aXR5XHJcbi8qKlxyXG4gKiBIZXkgdGhlcmUgaW5zYXRpYWJseSBicmFpbixcclxuICogQXJlIHlvdSBpbnRlcmVzdGVkIGluIHRoaXMgcGF0dGVybiB3aGVyZSB0aGUgQ29udGV4dCB2YWx1ZXMgYXJlXHJcbiAqIGV4cG9zZWQgd2l0aG91dCBhY3R1YWxseSBwcm92aW5kaW5nIGFjY2VzcyB0byB0aGUgQ29udGV4dCBpdHNlbGYgOilcclxuICogaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS9ibG9nL2hvdy10by11c2UtcmVhY3QtY29udGV4dC1lZmZlY3RpdmVseVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXRlbXNCeUlkID0gdXNlQ29udGV4dChDYXJ0SXRlbXNDb250ZXh0KVxyXG4gIGNvbnN0IGl0ZW1zID0gT2JqZWN0LnZhbHVlcyhpdGVtc0J5SWQpXHJcbiAgLy8gTm90IGZhbWlsaWFyIHdpdGggQXJyYXkucmVkdWNlPyA6KVxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZVxyXG4gIGNvbnN0IGNvdW50ID0gaXRlbXMucmVkdWNlKGdldENhcnRDb3VudCwgMClcclxuICBjb25zdCBzdWJUb3RhbCA9IGl0ZW1zLnJlZHVjZShnZXRDYXJ0U3ViVG90YWwsIDApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtcyxcclxuICAgIGl0ZW1zQnlJZCxcclxuICAgIGNvdW50LFxyXG4gICAgc3ViVG90YWwsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0TXV0YXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KVxyXG5cclxuICBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdDogVFByb2R1Y3QsIHF1YW50aXR5PzogbnVtYmVyKSA9PlxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgaXRlbTogcHJvZHVjdCxcclxuICAgICAgcXVhbnRpdHksXHJcbiAgICB9KVxyXG5cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCkgPT5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ3JlbW92ZScsXHJcbiAgICAgIGl0ZW06IHByb2R1Y3QsXHJcbiAgICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkVG9DYXJ0LFxyXG4gICAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9