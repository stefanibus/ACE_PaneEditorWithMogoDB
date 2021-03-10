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
          js,
          userID,
          projectName
        } = req.body;
        const {
          db
        } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["connect"])();
        const result = await db.collection(collectionName).insertOne({
          html,
          css,
          js,
          userID,
          projectName
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
          id,
          userID,
          projectName
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
            js: js,
            userID: userID,
            projectName: projectName
          }
        }); //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE // await  new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });

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

    case "DELETE":
      try {
        const {
          db
        } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["connect"])();
        const data = await db.collection(collectionName).deleteOne({
          _id: Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__["ObjectId"])(id)
        });
        res.status(200).json({
          success: true,
          data
        });
      } catch (error) {
        res.status(500).json({
          success: false
        });
      }

      break;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3BlbnMvLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RhdGFiYXNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiY29sbGVjdGlvbk5hbWUiLCJkYiIsImNvbm5lY3QiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJfaWQiLCJPYmplY3RJZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJodG1sIiwiY3NzIiwianMiLCJ1c2VySUQiLCJwcm9qZWN0TmFtZSIsImJvZHkiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJuZXdSZWNvcmRJZCIsImluc2VydGVkSWQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlT25lIiwiJHNldCIsInVwZGF0ZWRSZWNvcmQiLCJkZWxldGVPbmUiLCJkb3RlbnYiLCJyZXF1aXJlIiwiY29uZmlnIiwiZGJOYW1lIiwicHJvY2VzcyIsImVudiIsIkRCTkFNRSIsInVybCIsIlVSTCIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiaXNDb25uZWN0ZWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtDQUNBOztBQUVlLHNFQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUM7QUFBRixLQURIO0FBRUpDO0FBRkksTUFHRkosR0FISjtBQUlBLFFBQU1LLGNBQWMsR0FBRyxVQUF2Qjs7QUFDQSxVQUFRRCxNQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU07QUFBRUU7QUFBRixZQUFTLE1BQU1DLCtEQUFPLEVBQTVCO0FBQ0EsY0FBTUMsSUFBSSxHQUFHLE1BQU1GLEVBQUUsQ0FDbEJHLFVBRGdCLENBQ0xKLGNBREssRUFFaEJLLE9BRmdCLENBRVI7QUFBRUMsYUFBRyxFQUFFQyxnRUFBUSxDQUFDVCxFQUFEO0FBQWYsU0FGUSxDQUFuQjs7QUFHQSxZQUFJLENBQUNLLElBQUwsRUFBVztBQUNUUCxhQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckI7QUFDRDs7QUFDRGQsV0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRU47QUFBRixTQUFyQjtBQUNELE9BVEQsQ0FTRSxPQUFPUSxLQUFQLEVBQWM7QUFDZGYsV0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0Q7O0FBQ0Q7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU07QUFBRUUsY0FBRjtBQUFRQyxhQUFSO0FBQWFDLFlBQWI7QUFBaUJDLGdCQUFqQjtBQUF5QkM7QUFBekIsWUFBeUNyQixHQUFHLENBQUNzQixJQUFuRDtBQUNBLGNBQU07QUFBRWhCO0FBQUYsWUFBUyxNQUFNQywrREFBTyxFQUE1QjtBQUVBLGNBQU1nQixNQUFNLEdBQUcsTUFBTWpCLEVBQUUsQ0FBQ0csVUFBSCxDQUFjSixjQUFkLEVBQThCbUIsU0FBOUIsQ0FBd0M7QUFDM0RQLGNBRDJEO0FBRTNEQyxhQUYyRDtBQUczREMsWUFIMkQ7QUFJM0RDLGdCQUoyRDtBQUszREM7QUFMMkQsU0FBeEMsQ0FBckI7QUFPQXBCLFdBQUcsQ0FDQVksTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQlAsY0FBSSxFQUFFO0FBQUVpQix1QkFBVyxFQUFFRixNQUFNLENBQUNHO0FBQXRCO0FBQXZCLFNBRlI7QUFHRCxPQWRELENBY0UsT0FBT1YsS0FBUCxFQUFjO0FBQ2RXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaO0FBQ0FmLFdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNEOztBQUNEOztBQUNGLFNBQUssTUFBTDtBQUNFLFVBQUk7QUFDRixjQUFNO0FBQUVFLGNBQUY7QUFBUUMsYUFBUjtBQUFhQyxZQUFiO0FBQWlCaEIsWUFBakI7QUFBcUJpQixnQkFBckI7QUFBNkJDO0FBQTdCLFlBQTZDckIsR0FBRyxDQUFDc0IsSUFBdkQ7QUFDQSxjQUFNO0FBQUVoQjtBQUFGLFlBQVMsTUFBTUMsK0RBQU8sRUFBNUI7QUFFQSxjQUFNRCxFQUFFLENBQ0xHLFVBREcsQ0FDUUosY0FEUixFQUVId0IsU0FGRyxDQUdGO0FBQUVsQixhQUFHLEVBQUVDLGdFQUFRLENBQUNULEVBQUQ7QUFBZixTQUhFLEVBSUY7QUFBRTJCLGNBQUksRUFBRTtBQUFFYixnQkFBSSxFQUFFQSxJQUFSO0FBQWNDLGVBQUcsRUFBRUEsR0FBbkI7QUFBd0JDLGNBQUUsRUFBRUEsRUFBNUI7QUFBZ0NDLGtCQUFNLEVBQUVBLE1BQXhDO0FBQWdEQyx1QkFBVyxFQUFFQTtBQUE3RDtBQUFSLFNBSkUsQ0FBTixDQUpFLENBVUE7O0FBQ0ZwQixXQUFHLENBQ0FZLE1BREgsQ0FDVSxHQURWLEVBRUdDLElBRkgsQ0FFUTtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJQLGNBQUksRUFBRTtBQUFFdUIseUJBQWEsRUFBRTtBQUFqQjtBQUF2QixTQUZSO0FBR0QsT0FkRCxDQWNFLE9BQU9mLEtBQVAsRUFBYztBQUNkVyxlQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUNBZixXQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDRDs7QUFDRDs7QUFDRjtBQUNFZCxTQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUUsS0FBWDtBQUFrQlAsWUFBSSxFQUFFO0FBQXhCLE9BQXJCO0FBQ0E7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU07QUFBRUY7QUFBRixZQUFTLE1BQU1DLCtEQUFPLEVBQTVCO0FBQ0EsY0FBTUMsSUFBSSxHQUFHLE1BQU1GLEVBQUUsQ0FDbEJHLFVBRGdCLENBQ0xKLGNBREssRUFDVzJCLFNBRFgsQ0FDcUI7QUFBRXJCLGFBQUcsRUFBRUMsZ0VBQVEsQ0FBQ1QsRUFBRDtBQUFmLFNBRHJCLENBQW5CO0FBRUFGLFdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQlA7QUFBakIsU0FBckI7QUFDRCxPQUxELENBS0UsT0FBT1EsS0FBUCxFQUFjO0FBQ2RmLFdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNEOztBQUNEO0FBbkVKO0FBcUVELENBM0VELEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBLE1BQU1rQixNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0FELE1BQU0sQ0FBQ0UsTUFBUDtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQTNCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBeEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsbURBQUosQ0FBZ0JILEdBQWhCLEVBQXFCO0FBQ2xDSSxpQkFBZSxFQUFFLElBRGlCO0FBRWxDQyxvQkFBa0IsRUFBRTtBQUZjLENBQXJCLENBQWY7O0FBS0EsZUFBZXRDLE9BQWYsR0FBeUI7QUFDdkIsTUFBSSxDQUFDbUMsTUFBTSxDQUFDSSxXQUFQLEVBQUwsRUFBMkIsTUFBTUosTUFBTSxDQUFDbkMsT0FBUCxFQUFOO0FBQ3pCLFFBQU1ELEVBQUUsR0FBR29DLE1BQU0sQ0FBQ3BDLEVBQVAsQ0FBVThCLE1BQVYsQ0FBWDtBQUNGLFNBQU87QUFBRTlCLE1BQUY7QUFBTW9DO0FBQU4sR0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEJELG1DOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9wZW5zL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wZW5zL1tpZF0uanNcIik7XG4iLCJpbXBvcnQgeyBjb25uZWN0LCBPYmplY3RJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXRhYmFzZVwiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QsIE9iamVjdElkIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Zha2UtRGF0YWJhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICBtZXRob2QsXHJcbiAgfSA9IHJlcTtcclxuICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IFwicGVuc05hbWVcIjtcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKVxyXG4gICAgICAgICAgLmZpbmRPbmUoeyBfaWQ6IE9iamVjdElkKGlkKSB9KTtcclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaHRtbCwgY3NzLCBqcywgdXNlcklELCBwcm9qZWN0TmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKS5pbnNlcnRPbmUoe1xyXG4gICAgICAgICAgaHRtbCxcclxuICAgICAgICAgIGNzcyxcclxuICAgICAgICAgIGpzLFxyXG4gICAgICAgICAgdXNlcklELFxyXG4gICAgICAgICAgcHJvamVjdE5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNcclxuICAgICAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAgICAgLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7IG5ld1JlY29yZElkOiByZXN1bHQuaW5zZXJ0ZWRJZCB9IH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGh0bWwsIGNzcywganMsIGlkLCB1c2VySUQsIHByb2plY3ROYW1lIH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0KCk7XHJcblxyXG4gICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSlcclxuICAgICAgICAgIC51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgIHsgX2lkOiBPYmplY3RJZChpZCkgfSxcclxuICAgICAgICAgICAgeyAkc2V0OiB7IGh0bWw6IGh0bWwsIGNzczogY3NzLCBqczoganMsIHVzZXJJRDogdXNlcklELCBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUgfSB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy9GQUtFIEEgTE9ORyAgTE9BRElORyBUSU1FICBJTiBPUkRFUiBUTyBTRUUgVEhFIExPQURJTkcgSU5URVJGQUNFIFRFU1RXSVNFIC8vIGF3YWl0ICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDQwMDApOyAgfSk7XHJcbiAgICAgICAgcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyB1cGRhdGVkUmVjb3JkOiB0cnVlIH0gfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBcImRlZmF1bHRcIiB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpLmRlbGV0ZU9uZSh7IF9pZDogT2JqZWN0SWQoaWQpIH0pO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YSB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuXHJcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmNvbnN0IGRiTmFtZSA9IHByb2Nlc3MuZW52LkRCTkFNRTtcclxuY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuVVJMO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVybCwge1xyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICBpZiAoIWNsaWVudC5pc0Nvbm5lY3RlZCgpKSBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoZGJOYW1lKTtcclxuICByZXR1cm4geyBkYiwgY2xpZW50IH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbm5lY3QsIE9iamVjdElkIH07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==