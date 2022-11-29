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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cors-middleware.ts":
/*!****************************!*\
  !*** ./cors-middleware.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hey there you curious :)
 *
 * By default, NextJS APIs are same-site origin only.
 * But since *I needed the main project*
 * to have public API access, I had to configure CORS.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
 * @see https://github.com/expressjs/cors#configuration-options
 */
const CORS_OPTIONS = {
  methods: ['GET', 'OPTIONS']
};
function promisifyMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Initialize the cors middleware
const cors = promisifyMiddleware(cors__WEBPACK_IMPORTED_MODULE_0___default()(CORS_OPTIONS));
/* harmony default export */ __webpack_exports__["default"] = (cors);

/***/ }),

/***/ "./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    attributes: {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description: "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado'
    }
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado'
    }
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description: "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado'
    }
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado'
    }
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.ts");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)

class Database {
  constructor() {}
  async getAll() {
    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    await randomDelay();
    return asArray;
  }
  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__["default"], id)) {
      return null;
    }
    const entry = _data__WEBPACK_IMPORTED_MODULE_0__["default"][id];
    await randomDelay();
    return entry;
  }
}

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});
/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/avo/index.ts":
/*!********************************!*\
  !*** ./pages/api/avo/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cors */ "./cors-middleware.ts");


const allAvos = async (req, res) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const allEntries = await db.getAll();
    const lenght = allEntries.length;

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      lenght,
      data: allEntries
    }));
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(JSON.stringify({
      length: 0,
      data: [],
      error: 'Something went wrong'
    }));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (allAvos);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29ycy1taWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL2RhdGFiYXNlL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F2by9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiXSwibmFtZXMiOlsiQ09SU19PUFRJT05TIiwibWV0aG9kcyIsInByb21pc2lmeU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImNvcnMiLCJjb3JzV3JhcHBlciIsImRhdGEiLCJuYW1lIiwiaWQiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSIsImI4dXRoZTJ5IiwiZXd4c2Q2eGIiLCJmcHI3Mm05ayIsInQ5ZHYyNWdzIiwidDM0NXc0OHkiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImFsbERhdGEiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbnRyeSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImFsbEF2b3MiLCJlbmFibGVQdWJsaWNBY2Nlc3MiLCJkYiIsIkRCIiwiYWxsRW50cmllcyIsImxlbmdodCIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFDLENBQUM7RUFDdkQsQ0FBQyxDQUFDLE9BQU9RLENBQUMsRUFBRTtJQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO0lBQ2hCeEQsR0FBRyxDQUFDbUQsVUFBVSxHQUFHLEdBQUc7SUFDcEJuRCxHQUFHLENBQUNxRCxHQUFHLENBQ0xDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO01BQUVMLE1BQU0sRUFBRSxDQUFDO01BQUUxQyxJQUFJLEVBQUUsRUFBRTtNQUFFa0QsS0FBSyxFQUFFO0lBQXVCLENBQUMsQ0FBQyxDQUN2RTtFQUNIO0FBQ0YsQ0FBQztBQUVjZCxzRUFBTyxFOzs7Ozs7Ozs7OztBQzlCdEIsaUMiLCJmaWxlIjoicGFnZXMvYXBpL2F2by5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F2by9pbmRleC50c1wiKTtcbiIsImltcG9ydCBjb3JzV3JhcHBlciBmcm9tICdjb3JzJ1xyXG5pbXBvcnQge1JlcXVlc3RIYW5kbGVyfSBmcm9tICdleHByZXNzJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBIZXkgdGhlcmUgeW91IGN1cmlvdXMgOilcclxuICpcclxuICogQnkgZGVmYXVsdCwgTmV4dEpTIEFQSXMgYXJlIHNhbWUtc2l0ZSBvcmlnaW4gb25seS5cclxuICogQnV0IHNpbmNlICpJIG5lZWRlZCB0aGUgbWFpbiBwcm9qZWN0KlxyXG4gKiB0byBoYXZlIHB1YmxpYyBBUEkgYWNjZXNzLCBJIGhhZCB0byBjb25maWd1cmUgQ09SUy5cclxuICpcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvYXBpLXJvdXRlcy1jb3JzXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xyXG4gKi9cclxuY29uc3QgQ09SU19PUFRJT05TID0ge1xyXG4gIG1ldGhvZHM6IFsnR0VUJywgJ09QVElPTlMnXSxcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvbWlzaWZ5TWlkZGxld2FyZShtaWRkbGV3YXJlOiBSZXF1ZXN0SGFuZGxlcikge1xyXG4gIHJldHVybiAocmVxOiBhbnksIHJlczogYW55KSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0OiBFcnJvciB8IHVua25vd24pID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcclxuY29uc3QgY29ycyA9IHByb21pc2lmeU1pZGRsZXdhcmUoY29yc1dyYXBwZXIoQ09SU19PUFRJT05TKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvcnNcclxuIiwiY29uc3QgZGF0YTogUmVjb3JkPFRQcm9kdWN0SWQsIFRQcm9kdWN0PiA9IHtcclxuICAnMnpkMzNiOGMnOiB7XHJcbiAgICBuYW1lOiAnTWFsdW1hIEhhc3MgQXZvY2FkbycsXHJcbiAgICBpZDogJzJ6ZDMzYjhjJyxcclxuICAgIHNrdTogJ05VUjcyS0NNJyxcclxuICAgIHByaWNlOiAxLjE1LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21hbHVtYS5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnQSByZWxhdGl2ZWx5IG5ldyBjdWx0aXZhciwgaXQgd2FzLCB0aGUgcHJldHR5IGJveSBiYWJ5LCBkaXNjb3ZlcmVkIGluIFNvdXRoIEFmcmljYSBpbiB0aGUgZWFybHkgMTk5MHMgYnkgTXIuIEEuRy4gKERyaWVzKSBKb3ViZXJ0LiBNYWx1bWEgQmFieXkuIEl0IGlzIGEgY2hhbmNlIHNlZWRsaW5nIG9mIHVua25vd24gcGFyZW50YWdlJyxcclxuICAgICAgc2hhcGU6ICdPdmFsJyxcclxuICAgICAgaGFyZGluZXNzOiAnMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0NhdGNoeSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgJzZ0cmZna2tqJzoge1xyXG4gICAgbmFtZTogJ0Z1ZXJ0ZSBBdm9jYWRvJyxcclxuICAgIGlkOiAnNnRyZmdra2onLFxyXG4gICAgc2t1OiAnQVg0TThTSlYnLFxyXG4gICAgcHJpY2U6IDEuMjEsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvZnVlcnRlLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGUgRnVlcnRlIGF2b2NhZG8gaXMgdGhlIHNlY29uZCBsYXJnZXN0IGNvbW1lcmNpYWwgdmFyaWV0eSBiZWhpbmQgSGFzcy4gSXQgaXMgYSBsb25nIHRpbWUgQ2FsaWZvcm5pYSBjb21tZXJjaWFsIHZhcmlldHkgdmFsdWVkIGZvciBpdHMgd2ludGVyIHNlYXNvbiByaXBlbmluZyBhbmQgaXRzIEItVHlwZSBibG9zc29tIHR5cGUgd2hpY2ggbW9zdCBncm93ZXJzIHBsYW50IGFkamFjZW50IHRvIHRoZSBIYXNzIGZvciBhIG1vcmUgY29uc2lzdGVudCBwcm9kdWN0aW9uIGN5Y2xlLiBUaGlzIGF2b2NhZG8gdGVuZHMgdG8gcHJvZHVjZSBoZWF2aWx5IGluIGFsdGVybmF0ZSB5ZWFycy4nLFxyXG4gICAgICBzaGFwZTogJ1BlYXInLFxyXG4gICAgICBoYXJkaW5lc3M6ICctMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ01hZ25pZmljZW50LCBpcyBhIHN0cm9uZyBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAnN2JjcjQ5ZW0nOiB7XHJcbiAgICBuYW1lOiAnR3dlbiBIYXNzIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICc3YmNyNDllbScsXHJcbiAgICBza3U6ICdIWUE3OEY2SicsXHJcbiAgICBwcmljZTogMS4yNSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9nd2VuLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQSBzZWVkbGluZyBicmVkIGZyb20gJ0hhc3MnIHggJ1RoaWxsZScgaW4gMTk4MiwgJ0d3ZW4nIGlzIGhpZ2hlciB5aWVsZGluZyBhbmQgbW9yZSBkd2FyZmluZyB0aGFuICdIYXNzJyBpbiBDYWxpZm9ybmlhLiBUaGUgZnJ1aXQgaGFzIGFuIG92YWwgc2hhcGUsIHNsaWdodGx5IHNtYWxsZXIgdGhhbiAnSGFzcycgKDEwMOKAkzIwMCBnIG9yIDMuNeKAkzcuMSBveiksIHdpdGggYSByaWNoLCBudXR0eSBmbGF2b3IuIFRoZSBza2luIHRleHR1cmUgaXMgbW9yZSBmaW5lbHkgcGViYmxlZCB0aGFuICdIYXNzJywgYW5kIGlzIGR1bGwgZ3JlZW4gd2hlbiByaXBlLiBJdCBpcyBmcm9zdC1oYXJkeSBkb3duIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXHJcbiAgICAgIHNoYXBlOiAnUGx1bXAnLFxyXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnU3VwZXJiLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAnMDk4MzIza3MnOiB7XHJcbiAgICBuYW1lOiAnQmFjb24gQXZvY2FkbycsXHJcbiAgICBpZDogJzA5ODMyM2tzJyxcclxuICAgIHNrdTogJ0JYRDEwMEJMSycsXHJcbiAgICBwcmljZTogMS41MSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9iYWNvbi5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnRGV2ZWxvcGVkIGJ5IGEgZmFybWVyLCBKYW1lcyBCYWNvbiwgaW4gMTk1NCwgQmFjb24gaGFzIG1lZGl1bS1zaXplZCBmcnVpdCB3aXRoIHNtb290aCwgZ3JlZW4gc2tpbiB3aXRoIHllbGxvdy1ncmVlbiwgbGlnaHQtdGFzdGluZyBmbGVzaC4gV2hlbiByaXBlLCB0aGUgc2tpbiByZW1haW5zIGdyZWVuLCBidXQgZGFya2VucyBzbGlnaHRseSwgYW5kIGZydWl0IHlpZWxkcyB0byBnZW50bGUgcHJlc3N1cmUuIEl0IGlzIGNvbGQtaGFyZHkgZG93biB0byDiiJI1IMKwQyAoMjMgwrBGKScsXHJcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjUgwrBDJyxcclxuICAgICAgdGFzdGU6ICdDcmVhbXksIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGI4dXRoZTJ5OiB7XHJcbiAgICBuYW1lOiAnSGFzcyBBdm9jYWRvJyxcclxuICAgIGlkOiAnYjh1dGhlMnknLFxyXG4gICAgc2t1OiAnUk1SQ1pON0UnLFxyXG4gICAgcHJpY2U6IDEuMzksXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvaGFzcy5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoZSAnSGFzcycgaXMgdGhlIG1vc3QgY29tbW9uIGN1bHRpdmFyIG9mIGF2b2NhZG8uIEl0IHByb2R1Y2VzIGZydWl0IHllYXItcm91bmQgYW5kIGFjY291bnRzIGZvciA4MCUgb2YgY3VsdGl2YXRlZCBhdm9jYWRvcyBpbiB0aGUgd29ybGQuWzIxXVs1NV0gQWxsICdIYXNzJyB0cmVlcyBhcmUgZGVzY2VuZGVkIGZyb20gYSBzaW5nbGUgJ21vdGhlciB0cmVlJyByYWlzZWQgYnkgYSBtYWlsIGNhcnJpZXIgbmFtZWQgUnVkb2xwaCBIYXNzLCBvZiBMYSBIYWJyYSBIZWlnaHRzLCBDYWxpZm9ybmlhLlsyMF1bNTVdIEhhc3MgcGF0ZW50ZWQgdGhlIHByb2R1Y3RpdmUgdHJlZSBpbiAxOTM1LiBUaGUgJ21vdGhlciB0cmVlJywgb2YgdW5jZXJ0YWluIHN1YnNwZWNpZXMsIGRpZWQgb2Ygcm9vdCByb3QgYW5kIHdhcyBjdXQgZG93biBpbiBTZXB0ZW1iZXIgMjAwMi5bMjFdWzU1XVs1Nl0gJ0hhc3MnIHRyZWVzIGhhdmUgbWVkaXVtLXNpemVkICgxNTDigJMyNTAgZyBvciA1LjPigJM4Ljggb3opLCBvdmF0ZSBmcnVpdCB3aXRoIGEgYmxhY2ssIHBlYmJsZWQgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIG51dHR5LCByaWNoIGZsYXZvciB3aXRoIDE5JSBvaWwuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSBjYW4gd2l0aHN0YW5kIHRlbXBlcmF0dXJlcyB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxyXG4gICAgICBzaGFwZTogJ092YWwnLFxyXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnR29yZ2VvdXMsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGV3eHNkNnhiOiB7XHJcbiAgICBuYW1lOiAnTGFtYiBIYXNzIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICdld3hzZDZ4YicsXHJcbiAgICBza3U6ICdONTUyMjlaQScsXHJcbiAgICBwcmljZTogMS4zNCxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9sYW1iLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGUgTGFtYiBIYXNzIGF2b2NhZG8gaXMgYSBjcm9zcyBiZXR3ZWVuIGEgSGFzcyBhbmQgR3dlbiBhdm9jYWRvLiBUaGUgZnJ1aXRzIGFyZSBsYXJnZXIgaW4gc2l6ZSBhbmQgbGF0ZXIgbWF0dXJpbmcgdGhhbiBIYXNzLiBJdCBpcyBnYWluaW5nIGluIHBvcHVsYXJpdHkgYXMgYSBjb21tZXJjaWFsIGFuZCBiYWNreWFyZCB2YXJpZXR5IGR1ZSB0byBpdHMgZXhjZXB0aW9uYWwgZmxhdm9yIGFuZCBlYXN5IHBlZWxpbmcgcXVhbGl0aWVzLiBUaGUgdHJlZSBoYXMgYW4gdXByaWdodCwgY29tcGFjdCBoYWJpdC4nLFxyXG4gICAgICBzaGFwZTogJ09ib3ZhdGUnLFxyXG4gICAgICBoYXJkaW5lc3M6ICctMiDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0dyZWF0LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmcHI3Mm05azoge1xyXG4gICAgbmFtZTogJ1BpbmtlcnRvbiBBdm9jYWRvJyxcclxuICAgIGlkOiAnZnByNzJtOWsnLFxyXG4gICAgc2t1OiAnQjRIWjQyVE0nLFxyXG4gICAgcHJpY2U6IDEuMjcsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcGlua2VydG9uLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiRmlyc3QgZ3Jvd24gb24gdGhlIFBpbmtlcnRvbiBSYW5jaCBpbiBTYXRpY295LCBDYWxpZm9ybmlhLCBpbiB0aGUgZWFybHkgMTk3MHMsICdQaW5rZXJ0b24nIGlzIGEgc2VlZGxpbmcgb2YgJ0hhc3MnIHggJ1JpbmNvbicuIFRoZSBsYXJnZSBmcnVpdCBoYXMgYSBzbWFsbCBzZWVkLCBhbmQgaXRzIGdyZWVuIHNraW4gZGVlcGVucyBpbiBjb2xvciBhcyBpdCByaXBlbnMuIFRoZSB0aGljayBmbGVzaCBoYXMgYSBzbW9vdGgsIGNyZWFteSB0ZXh0dXJlLCBwYWxlIGdyZWVuIGNvbG9yLCBnb29kIGZsYXZvciwgYW5kIGhpZ2ggb2lsIGNvbnRlbnQuIEl0IHNob3dzIHNvbWUgY29sZCB0b2xlcmFuY2UsIHRvIOKIkjEgwrBDICgzMCDCsEYpIGFuZCBiZWFycyBjb25zaXN0ZW50bHkgaGVhdnkgY3JvcHMuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSwgaXQgaGFzIGV4Y2VsbGVudCBwZWVsaW5nIGNoYXJhY3RlcmlzdGljc1wiLFxyXG4gICAgICBzaGFwZTogJ0xvbmcgcGVhcicsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgdGFzdGU6ICdNYXJ2ZWxvdXMsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHQ5ZHYyNWdzOiB7XHJcbiAgICBuYW1lOiAnUmVlZCBBdm9jYWRvJyxcclxuICAgIGlkOiAndDlkdjI1Z3MnLFxyXG4gICAgc2t1OiAnWlkzVDlYWEMnLFxyXG4gICAgcHJpY2U6IDEuMTgsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcmVlZC5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnRGV2ZWxvcGVkIGZyb20gYSBjaGFuY2Ugc2VlZGxpbmcgZm91bmQgaW4gMTk0OCBieSBKYW1lcyBTLiBSZWVkIGluIENhbGlmb3JuaWEsIHRoaXMgY3VsdGl2YXIgaGFzIGxhcmdlLCByb3VuZCwgZ3JlZW4gZnJ1aXQgd2l0aCBhIHNtb290aCB0ZXh0dXJlIGFuZCBkYXJrLCB0aGljaywgZ2xvc3N5IHNraW4uIFNtb290aCBhbmQgZGVsaWNhdGUsIHRoZSBmbGVzaCBoYXMgYSBzbGlnaHRseSBudXR0eSBmbGF2b3IuIFRoZSBza2luIHJpcGVucyBncmVlbi4gQSBHdWF0ZW1hbGFuIHR5cGUsIGl0IGlzIGhhcmR5IHRvIOKIkjEgwrBDICgzMCDCsEYpLiBUcmVlIHNpemUgaXMgYWJvdXQgNSBieSA0IG0gKDE2LjQgYnkgMTMuMSBmdCknLFxyXG4gICAgICBzaGFwZTogJ1JvdW5kJyxcclxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0V4cXVpc2l0ZSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdDM0NXc0OHk6IHtcclxuICAgIG5hbWU6ICdadXRhbm8gQXZvY2FkbycsXHJcbiAgICBpZDogJ3QzNDV3NDh5JyxcclxuICAgIHNrdTogJ01XNzlaWjZZJyxcclxuICAgIHByaWNlOiAxLjI1LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3p1dGFuby5qcGcnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnVGhlIFp1dGFubyBhdm9jYWRvIGlzIGEgY29sZCBoYXJkeSwgY29uc2lzdGVudCBwcm9kdWNpbmcgYXZvY2FkbyB2YXJpZXR5LiBJdCByZXNlbWJsZXMgdGhlIEZ1ZXJ0ZSBpbiBhcHBlYXJhbmNlIGJ1dCBpcyBsZXNzIGZsYXZvcmZ1bCBidXQgbW9yZSBjb2xkIGhhcmR5LiBUaGUgZ3JlZW4gZnJ1aXRzIGFyZSBvYm92YXRlIGluIHNoYXBlIHdpdGggd2F4eSBidW1wcyBvbiB0aGUgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIGxvdyBvaWwgYnV0IGhpZ2ggd2F0ZXIgY29udGVudCB3aGljaCBjYXVzZXMgaXQgdG8gaGF2ZSBhIG1vcmUgZmlicm91cyB0ZXh0dXJlLicsXHJcbiAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgIGhhcmRpbmVzczogJy01IMKwQycsXHJcbiAgICAgIHRhc3RlOiAnU3BsZW5kaWQsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhXHJcbiIsIi8vIE9oIHlvdSBjdXJpb3VzLi4uXHJcbi8vIFRoaXMgaXMgbm90IGEgcmVhbCBkYXRhYmFzZSxcclxuLy8gQnV0IGxldCdzIGltYWdpbmUgaXQgaXMgb25lIDopXHJcbmltcG9ydCBhbGxEYXRhIGZyb20gJy4vZGF0YSdcclxuXHJcbmNsYXNzIERhdGFiYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPFRQcm9kdWN0W10+IHtcclxuICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpXHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpXHJcbiAgICByZXR1cm4gYXNBcnJheVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxUUHJvZHVjdCB8IG51bGw+IHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbERhdGEsIGlkKSkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gYWxsRGF0YVtpZF1cclxuICAgIGF3YWl0IHJhbmRvbURlbGF5KClcclxuICAgIHJldHVybiBlbnRyeVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGV0J3MgYWxzbyBhZGQgYSBkZWxheSB0byBtYWtlIGl0IGEgYml0IGNsb3NlciB0byByZWFsaXR5XHJcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gMzUwXHJcbiAgICBjb25zdCBtaW4gPSAxMDBcclxuICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxyXG5cclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpXHJcbiAgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlXHJcbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xyXG5pbXBvcnQgREIgZnJvbSAnQGRhdGFiYXNlJ1xyXG5pbXBvcnQgZW5hYmxlUHVibGljQWNjZXNzIGZyb20gJ0Bjb3JzJ1xyXG5cclxuXHJcbmNvbnN0IGFsbEF2b3MgPSBhc3luYyAocmVxOiBJbmNvbWluZ01lc3NhZ2UsIHJlczogU2VydmVyUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gR2VuZXJhbGx5LCB5b3Ugd291bGQgbm90IHdhbnQgdGhpcyBpbiB5b3VyIGFwcHMuXHJcbiAgICAvLyBTZWUgbW9yZSBpbiAnY29ycy5qcydcclxuICAgIGF3YWl0IGVuYWJsZVB1YmxpY0FjY2VzcyhyZXEsIHJlcylcclxuXHJcbiAgICBjb25zdCBkYiA9IG5ldyBEQigpXHJcbiAgICBjb25zdCBhbGxFbnRyaWVzID0gYXdhaXQgZGIuZ2V0QWxsKClcclxuICAgIGNvbnN0IGxlbmdodCA9IGFsbEVudHJpZXMubGVuZ3RoXHJcblxyXG4gICAgLy8gTm90aWNlOiBXZSdyZSBtYW51YWxseSBzZXR0aW5nIHRoZSByZXNwb25zZSBvYmplY3RcclxuICAgIC8vIEhvd2V2ZXIgTmV4dC5KUyBvZmZlcnMgRXhwcmVzcy1saWtlIGhlbHBlcnMgOilcclxuICAgIC8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvcmVzcG9uc2UtaGVscGVyc1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBsZW5naHQsIGRhdGE6IGFsbEVudHJpZXMgfSkpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDBcclxuICAgIHJlcy5lbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGVuZ3RoOiAwLCBkYXRhOiBbXSwgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSlcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbEF2b3NcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9