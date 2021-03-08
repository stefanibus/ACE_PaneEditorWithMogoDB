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


const dbName = "pensDB";
const url = `mongodb+srv://stefanibus:stefan007@cluster0.91hdr.mongodb.net/test?retryWrites=true&w=majority`;
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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3BlbnMvLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RhdGFiYXNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiY29sbGVjdGlvbk5hbWUiLCJkYiIsImNvbm5lY3QiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJfaWQiLCJPYmplY3RJZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJodG1sIiwiY3NzIiwianMiLCJib2R5IiwicmVzdWx0IiwiaW5zZXJ0T25lIiwibmV3UmVjb3JkSWQiLCJpbnNlcnRlZElkIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZU9uZSIsIiRzZXQiLCJ1cGRhdGVkUmVjb3JkIiwiZGJOYW1lIiwidXJsIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJpc0Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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QyxtREFBSixDQUFnQkYsR0FBaEIsRUFBcUI7QUFDbENHLGlCQUFlLEVBQUUsSUFEaUI7QUFFbENDLG9CQUFrQixFQUFFO0FBRmMsQ0FBckIsQ0FBZjs7QUFLQSxlQUFlNUIsT0FBZixHQUF5QjtBQUN2QixNQUFJLENBQUN5QixNQUFNLENBQUNJLFdBQVAsRUFBTCxFQUEyQixNQUFNSixNQUFNLENBQUN6QixPQUFQLEVBQU47QUFDekIsUUFBTUQsRUFBRSxHQUFHMEIsTUFBTSxDQUFDMUIsRUFBUCxDQUFVd0IsTUFBVixDQUFYO0FBQ0YsU0FBTztBQUFFeEIsTUFBRjtBQUFNMEI7QUFBTixHQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNkRCxvQyIsImZpbGUiOiJwYWdlcy9hcGkvcGVucy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvcGVucy9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IHsgY29ubmVjdCwgT2JqZWN0SWQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF0YWJhc2VcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0LCBPYmplY3RJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9mYWtlLURhdGFiYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgbWV0aG9kLFxyXG4gIH0gPSByZXE7XHJcbiAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSBcInBlbnNOYW1lXCI7XHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSlcclxuICAgICAgICAgIC5maW5kT25lKHsgX2lkOiBPYmplY3RJZChpZCkgfSk7XHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGh0bWwsIGNzcywganMgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSkuaW5zZXJ0T25lKHtcclxuICAgICAgICAgIGh0bWwsXHJcbiAgICAgICAgICBjc3MsXHJcbiAgICAgICAgICBqcyxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNcclxuICAgICAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAgICAgLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7IG5ld1JlY29yZElkOiByZXN1bHQuaW5zZXJ0ZWRJZCB9IH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGh0bWwsIGNzcywganMsIGlkIH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0KCk7XHJcblxyXG4gICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSlcclxuICAgICAgICAgIC51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgIHsgX2lkOiBPYmplY3RJZChpZCkgfSxcclxuICAgICAgICAgICAgeyAkc2V0OiB7IGh0bWw6IGh0bWwsIGNzczogY3NzLCBqczoganMgfSB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgdXBkYXRlZFJlY29yZDogdHJ1ZSB9IH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogXCJkZWZhdWx0XCIgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLy8gaW1wb3J0IHsgY29ubmVjdCwgT2JqZWN0SWQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF0YWJhc2VcIjtcclxuLy8gLy8gIyBPUiBmYWtlIGRiXHJcbi8vIGltcG9ydCB7IGNvbm5lY3QsIE9iamVjdElkIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Zha2UtRGF0YWJhc2VcIjtcclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHJcbi8vICAgY29uc3Qge1xyXG4vLyAgICAgcXVlcnk6IHsgaWQgfSxcclxuLy8gICAgIG1ldGhvZCxcclxuLy8gICB9ID0gcmVxO1xyXG4vLyAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbi8vICAgICAvLyBjYXNlIFwiUFVUXCI6XHJcbi8vICAgICAvLyAgIGNvbnN0IHJhbmRvbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDEpICsgMSk7XHJcbi8vICAgICAvLyAgIC8vIC8vRkFLRSBBIExPTkcgIExPQURJTkcgVElNRSAgSU4gT1JERVIgVE8gU0VFIFRIRSBMT0FESU5HIElOVEVSRkFDRSBURVNUV0lTRVxyXG4vLyAgICAgLy8gICAvLyBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDQwMDApOyAgfSk7XHJcbi8vICAgICAvLyAgIHJlc1xyXG4vLyAgICAgLy8gICAgIC5zdGF0dXMoMjAwKVxyXG4vLyAgICAgLy8gICAgIC5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBuZXdSZWNvcmRJZDogcmFuZG9tSWQgfSB9KTtcclxuLy8gICAgIC8vICAgYnJlYWs7XHJcblxyXG5cclxuLy8gICBjYXNlIFwiUFVUXCI6XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgeyBodG1sLCBjc3MsIGpzIH0gPSByZXEuYm9keTtcclxuLy8gICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0KCk7XHJcblxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpLmluc2VydE9uZSh7XHJcbi8vICAgICAgICAgICBodG1sLFxyXG4vLyAgICAgICAgICAgY3NzLFxyXG4vLyAgICAgICAgICAganMsXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgcmVzXHJcbi8vICAgICAgICAgICAuc3RhdHVzKDIwMClcclxuLy8gICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBuZXdSZWNvcmRJZDogcmVzdWx0Lmluc2VydGVkSWQgfSB9KTtcclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgYnJlYWs7XHJcblxyXG5cclxuXHJcbi8vICAgICAvLyBjYXNlIFwiUE9TVFwiOlxyXG4vLyAgICAgLy8gICAvLyAvL0ZBS0UgQSBMT05HICBMT0FESU5HIFRJTUUgIElOIE9SREVSIFRPIFNFRSBUSEUgTE9BRElORyBJTlRFUkZBQ0UgVEVTVFdJU0VcclxuLy8gICAgIC8vICAgLy8gYXdhaXQgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7ICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgNDAwMCk7ICB9KTtcclxuLy8gICAgIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7IHVwZGF0ZWRSZWNvcmQ6IHRydWUgfSB9KTtcclxuLy8gICAgIC8vICAgYnJlYWs7XHJcblxyXG4vLyAgICAgY2FzZSBcIlBPU1RcIjpcclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgY29uc3QgeyBodG1sLCBjc3MsIGpzLCBpZCB9ID0gcmVxLmJvZHk7XHJcbi8vICAgICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0KCk7XHJcblxyXG4vLyAgICAgICAgICAgYXdhaXQgZGJcclxuLy8gICAgICAgICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpXHJcbi8vICAgICAgICAgICAgIC51cGRhdGVPbmUoXHJcbi8vICAgICAgICAgICAgICAgeyBfaWQ6IE9iamVjdElkKGlkKSB9LFxyXG4vLyAgICAgICAgICAgICAgIHsgJHNldDogeyBodG1sOiBodG1sLCBjc3M6IGNzcywganM6IGpzIH0gfVxyXG4vLyAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgcmVzXHJcbi8vICAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxyXG4vLyAgICAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgdXBkYXRlZFJlY29yZDogdHJ1ZSB9IH0pO1xyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgYnJlYWs7XHJcblxyXG5cclxuXHJcblxyXG4vLyAgICAgLy8gY2FzZSBcIkdFVFwiOlxyXG4vLyAgICAgLy8gICBjb25zdCBkYXRhID0ge1xyXG4vLyAgICAgLy8gICAgIGh0bWw6IGA8ZGl2PmhlbGxvIGZyb20gcGVuICR7aWR9PC9kaXY+YCxcclxuLy8gICAgIC8vICAgICBjc3M6IGBkaXYgeyBjb2xvcjogYmx1ZX1gLFxyXG4vLyAgICAgLy8gICAgIGpzOiBgY29uc29sZS5sb2coXCJoaSB0aGVyZVwiKWAsXHJcbi8vICAgICAvLyAgIH07XHJcbi8vICAgICAvLyAgIC8vIC8vRkFLRSBBIExPTkcgIExPQURJTkcgVElNRSAgSU4gT1JERVIgVE8gU0VFIFRIRSBMT0FESU5HIElOVEVSRkFDRSBURVNUV0lTRVxyXG4vLyAgICAgLy8gICAvLyBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDQwMDApOyAgfSk7XHJcbi8vICAgICAvLyAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcclxuLy8gICAgIC8vICAgYnJlYWs7XHJcblxyXG4vLyAgICAgY2FzZSBcIkdFVFwiOlxyXG4vLyAgICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3QoKTtcclxuLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuLy8gICAgICAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKVxyXG4vLyAgICAgICAgICAgLmZpbmRPbmUoeyBfaWQ6IE9iamVjdElkKGlkKSB9KTtcclxuLy8gICAgICAgICBpZiAoIWRhdGEpIHtcclxuLy8gICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICBicmVhaztcclxuXHJcblxyXG5cclxuXHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBcImRlZmF1bHRcIiB9KTtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgfVxyXG4vLyB9OyIsImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCBkYk5hbWUgPSBcInBlbnNEQlwiO1xyXG5jb25zdCB1cmwgPSBgbW9uZ29kYitzcnY6Ly9zdGVmYW5pYnVzOnN0ZWZhbjAwN0BjbHVzdGVyMC45MWhkci5tb25nb2RiLm5ldC90ZXN0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJsLCB7XHJcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmICghY2xpZW50LmlzQ29ubmVjdGVkKCkpIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihkYk5hbWUpO1xyXG4gIHJldHVybiB7IGRiLCBjbGllbnQgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY29ubmVjdCwgT2JqZWN0SWQgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=