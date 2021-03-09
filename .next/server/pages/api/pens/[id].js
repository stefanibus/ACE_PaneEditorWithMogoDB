module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/pens/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/pens/[id].js":
/*!********************************!*\
  !*** ./pages/api/pens/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/database */ "./utils/database.js");
 //import { connect, ObjectId } from "../../../utils/fake-Database";

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    query: {
      id
    },
    method
  } = req;
  const collectionName = "pensName";

  switch (method) {
    case "GET":
      try {
        const {
          db
        } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["connect"])();
        const data = await db.collection(collectionName).findOne({
          _id: Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["ObjectId"])(id)
        });

        if (!data) {
          res.status(404).json({
            success: false
          });
        }

        res.status(200).json({
          data
        });
      } catch (error) {
        res.status(500).json({
          success: false
        });
      }

      break;

    case "PUT":
      try {
        const {
          html,
          css,
          js
        } = req.body;
        const {
          db
        } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["connect"])();
        const result = await db.collection(collectionName).insertOne({
          html,
          css,
          js
        });
        res.status(200).json({
          success: true,
          data: {
            newRecordId: result.insertedId
          }
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false
        });
      }

      break;

    case "POST":
      try {
        const {
          html,
          css,
          js,
          id
        } = req.body;
        const {
          db
        } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["connect"])();
        await db.collection(collectionName).updateOne({
          _id: Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["ObjectId"])(id)
        }, {
          $set: {
            html: html,
            css: css,
            js: js
          }
        });
        res.status(200).json({
          success: true,
          data: {
            updatedRecord: true
          }
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false
        });
      }

      break;

    default:
      res.status(400).json({
        success: false,
        data: "default"
      });
      break;
  }
}); // // import { connect, ObjectId } from "../../../utils/database";
// // # OR fake db
// import { connect, ObjectId } from "../../../utils/fake-Database";
// export default async (req, res) => {
//   const {
//     query: { id },
//     method,
//   } = req;
//   switch (method) {
//     // case "PUT":
//     //   const randomId = Math.floor(Math.random() * (100 - 1) + 1);
//     //   // //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE
//     //   // await new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
//     //   res
//     //     .status(200)
//     //     .json({ success: true, data: { newRecordId: randomId } });
//     //   break;
//   case "PUT":
//       try {
//         const { html, css, js } = req.body;
//         const { db } = await connect();
//         const result = await db.collection(collectionName).insertOne({
//           html,
//           css,
//           js,
//         });
//         res
//           .status(200)
//           .json({ success: true, data: { newRecordId: result.insertedId } });
//       } catch (error) {
//         console.log(error);
//         res.status(400).json({ success: false });
//       }
//     break;
//     // case "POST":
//     //   // //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE
//     //   // await  new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
//     //   res.status(200).json({ success: true, data: { updatedRecord: true } });
//     //   break;
//     case "POST":
//         try {
//           const { html, css, js, id } = req.body;
//           const { db } = await connect();
//           await db
//             .collection(collectionName)
//             .updateOne(
//               { _id: ObjectId(id) },
//               { $set: { html: html, css: css, js: js } }
//             );
//           res
//             .status(200)
//             .json({ success: true, data: { updatedRecord: true } });
//         } catch (error) {
//           console.log(error);
//           res.status(400).json({ success: false });
//         }
//       break;
//     // case "GET":
//     //   const data = {
//     //     html: `<div>hello from pen ${id}</div>`,
//     //     css: `div { color: blue}`,
//     //     js: `console.log("hi there")`,
//     //   };
//     //   // //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE
//     //   // await new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
//     //   res.status(200).json({ data });
//     //   break;
//     case "GET":
//       try {
//         const { db } = await connect();
//         const data = await db
//           .collection(collectionName)
//           .findOne({ _id: ObjectId(id) });
//         if (!data) {
//           res.status(404).json({ success: false });
//         }
//         res.status(200).json({ data });
//       } catch (error) {
//         res.status(500).json({ success: false });
//       }
//     break;
//     default:
//       res.status(400).json({ success: false, data: "default" });
//       break;
//   }
// };

/***/ }),

/***/ "./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/*! exports provided: connect, ObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectId", function() { return mongodb__WEBPACK_IMPORTED_MODULE_0__["ObjectId"]; });



const dotenv = __webpack_require__(/*! dotenv */ "dotenv");

dotenv.config();
const dbName = process.env.DBNAME;
const url = process.env.URL;
const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"](url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db(dbName);
  return {
    db,
    client
  };
}



/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3BlbnMvLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RhdGFiYXNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiY29sbGVjdGlvbk5hbWUiLCJkYiIsImNvbm5lY3QiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJfaWQiLCJPYmplY3RJZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJodG1sIiwiY3NzIiwianMiLCJib2R5IiwicmVzdWx0IiwiaW5zZXJ0T25lIiwibmV3UmVjb3JkSWQiLCJpbnNlcnRlZElkIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZU9uZSIsIiRzZXQiLCJ1cGRhdGVkUmVjb3JkIiwiZG90ZW52IiwicmVxdWlyZSIsImNvbmZpZyIsImRiTmFtZSIsInByb2Nlc3MiLCJlbnYiLCJEQk5BTUUiLCJ1cmwiLCJVUkwiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImlzQ29ubmVjdGVkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFp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QUE7QUFBQTtBQUFBOztBQUNBLE1BQU1zQixNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0FELE1BQU0sQ0FBQ0UsTUFBUDtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQTNCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBeEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsbURBQUosQ0FBZ0JILEdBQWhCLEVBQXFCO0FBQ2xDSSxpQkFBZSxFQUFFLElBRGlCO0FBRWxDQyxvQkFBa0IsRUFBRTtBQUZjLENBQXJCLENBQWY7O0FBS0EsZUFBZW5DLE9BQWYsR0FBeUI7QUFDdkIsTUFBSSxDQUFDZ0MsTUFBTSxDQUFDSSxXQUFQLEVBQUwsRUFBMkIsTUFBTUosTUFBTSxDQUFDaEMsT0FBUCxFQUFOO0FBQ3pCLFFBQU1ELEVBQUUsR0FBR2lDLE1BQU0sQ0FBQ2pDLEVBQVAsQ0FBVTJCLE1BQVYsQ0FBWDtBQUNGLFNBQU87QUFBRTNCLE1BQUY7QUFBTWlDO0FBQU4sR0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEJELG1DOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9wZW5zL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wZW5zL1tpZF0uanNcIik7XG4iLCJpbXBvcnQgeyBjb25uZWN0LCBPYmplY3RJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXRhYmFzZVwiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QsIE9iamVjdElkIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Zha2UtRGF0YWJhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICBtZXRob2QsXHJcbiAgfSA9IHJlcTtcclxuICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IFwicGVuc05hbWVcIjtcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKVxyXG4gICAgICAgICAgLmZpbmRPbmUoeyBfaWQ6IE9iamVjdElkKGlkKSB9KTtcclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaHRtbCwgY3NzLCBqcyB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKS5pbnNlcnRPbmUoe1xyXG4gICAgICAgICAgaHRtbCxcclxuICAgICAgICAgIGNzcyxcclxuICAgICAgICAgIGpzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgbmV3UmVjb3JkSWQ6IHJlc3VsdC5pbnNlcnRlZElkIH0gfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaHRtbCwgY3NzLCBqcywgaWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKVxyXG4gICAgICAgICAgLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgeyBfaWQ6IE9iamVjdElkKGlkKSB9LFxyXG4gICAgICAgICAgICB7ICRzZXQ6IHsgaHRtbDogaHRtbCwgY3NzOiBjc3MsIGpzOiBqcyB9IH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyB1cGRhdGVkUmVjb3JkOiB0cnVlIH0gfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBcImRlZmF1bHRcIiB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAvLyBpbXBvcnQgeyBjb25uZWN0LCBPYmplY3RJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXRhYmFzZVwiO1xyXG4vLyAvLyAjIE9SIGZha2UgZGJcclxuLy8gaW1wb3J0IHsgY29ubmVjdCwgT2JqZWN0SWQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZmFrZS1EYXRhYmFzZVwiO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuLy8gICBjb25zdCB7XHJcbi8vICAgICBxdWVyeTogeyBpZCB9LFxyXG4vLyAgICAgbWV0aG9kLFxyXG4vLyAgIH0gPSByZXE7XHJcbi8vICAgc3dpdGNoIChtZXRob2QpIHtcclxuLy8gICAgIC8vIGNhc2UgXCJQVVRcIjpcclxuLy8gICAgIC8vICAgY29uc3QgcmFuZG9tSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gMSkgKyAxKTtcclxuLy8gICAgIC8vICAgLy8gLy9GQUtFIEEgTE9ORyAgTE9BRElORyBUSU1FICBJTiBPUkRFUiBUTyBTRUUgVEhFIExPQURJTkcgSU5URVJGQUNFIFRFU1RXSVNFXHJcbi8vICAgICAvLyAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7ICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgNDAwMCk7ICB9KTtcclxuLy8gICAgIC8vICAgcmVzXHJcbi8vICAgICAvLyAgICAgLnN0YXR1cygyMDApXHJcbi8vICAgICAvLyAgICAgLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7IG5ld1JlY29yZElkOiByYW5kb21JZCB9IH0pO1xyXG4vLyAgICAgLy8gICBicmVhaztcclxuXHJcblxyXG4vLyAgIGNhc2UgXCJQVVRcIjpcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCB7IGh0bWwsIGNzcywganMgfSA9IHJlcS5ib2R5O1xyXG4vLyAgICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3QoKTtcclxuXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSkuaW5zZXJ0T25lKHtcclxuLy8gICAgICAgICAgIGh0bWwsXHJcbi8vICAgICAgICAgICBjc3MsXHJcbi8vICAgICAgICAgICBqcyxcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICByZXNcclxuLy8gICAgICAgICAgIC5zdGF0dXMoMjAwKVxyXG4vLyAgICAgICAgICAgLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7IG5ld1JlY29yZElkOiByZXN1bHQuaW5zZXJ0ZWRJZCB9IH0pO1xyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICBicmVhaztcclxuXHJcblxyXG5cclxuLy8gICAgIC8vIGNhc2UgXCJQT1NUXCI6XHJcbi8vICAgICAvLyAgIC8vIC8vRkFLRSBBIExPTkcgIExPQURJTkcgVElNRSAgSU4gT1JERVIgVE8gU0VFIFRIRSBMT0FESU5HIElOVEVSRkFDRSBURVNUV0lTRVxyXG4vLyAgICAgLy8gICAvLyBhd2FpdCAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCA0MDAwKTsgIH0pO1xyXG4vLyAgICAgLy8gICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgdXBkYXRlZFJlY29yZDogdHJ1ZSB9IH0pO1xyXG4vLyAgICAgLy8gICBicmVhaztcclxuXHJcbi8vICAgICBjYXNlIFwiUE9TVFwiOlxyXG4vLyAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICBjb25zdCB7IGh0bWwsIGNzcywganMsIGlkIH0gPSByZXEuYm9keTtcclxuLy8gICAgICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3QoKTtcclxuXHJcbi8vICAgICAgICAgICBhd2FpdCBkYlxyXG4vLyAgICAgICAgICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSlcclxuLy8gICAgICAgICAgICAgLnVwZGF0ZU9uZShcclxuLy8gICAgICAgICAgICAgICB7IF9pZDogT2JqZWN0SWQoaWQpIH0sXHJcbi8vICAgICAgICAgICAgICAgeyAkc2V0OiB7IGh0bWw6IGh0bWwsIGNzczogY3NzLCBqczoganMgfSB9XHJcbi8vICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICByZXNcclxuLy8gICAgICAgICAgICAgLnN0YXR1cygyMDApXHJcbi8vICAgICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyB1cGRhdGVkUmVjb3JkOiB0cnVlIH0gfSk7XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICBicmVhaztcclxuXHJcblxyXG5cclxuXHJcbi8vICAgICAvLyBjYXNlIFwiR0VUXCI6XHJcbi8vICAgICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbi8vICAgICAvLyAgICAgaHRtbDogYDxkaXY+aGVsbG8gZnJvbSBwZW4gJHtpZH08L2Rpdj5gLFxyXG4vLyAgICAgLy8gICAgIGNzczogYGRpdiB7IGNvbG9yOiBibHVlfWAsXHJcbi8vICAgICAvLyAgICAganM6IGBjb25zb2xlLmxvZyhcImhpIHRoZXJlXCIpYCxcclxuLy8gICAgIC8vICAgfTtcclxuLy8gICAgIC8vICAgLy8gLy9GQUtFIEEgTE9ORyAgTE9BRElORyBUSU1FICBJTiBPUkRFUiBUTyBTRUUgVEhFIExPQURJTkcgSU5URVJGQUNFIFRFU1RXSVNFXHJcbi8vICAgICAvLyAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7ICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgNDAwMCk7ICB9KTtcclxuLy8gICAgIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhIH0pO1xyXG4vLyAgICAgLy8gICBicmVhaztcclxuXHJcbi8vICAgICBjYXNlIFwiR0VUXCI6XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4vLyAgICAgICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpXHJcbi8vICAgICAgICAgICAuZmluZE9uZSh7IF9pZDogT2JqZWN0SWQoaWQpIH0pO1xyXG4vLyAgICAgICAgIGlmICghZGF0YSkge1xyXG4vLyAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhIH0pO1xyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIGJyZWFrO1xyXG5cclxuXHJcblxyXG5cclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IFwiZGVmYXVsdFwiIH0pO1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICB9XHJcbi8vIH07IiwiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKTtcclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuY29uc3QgZGJOYW1lID0gcHJvY2Vzcy5lbnYuREJOQU1FO1xyXG5jb25zdCB1cmwgPSBwcm9jZXNzLmVudi5VUkw7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJsLCB7XHJcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmICghY2xpZW50LmlzQ29ubmVjdGVkKCkpIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihkYk5hbWUpO1xyXG4gIHJldHVybiB7IGRiLCBjbGllbnQgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY29ubmVjdCwgT2JqZWN0SWQgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9