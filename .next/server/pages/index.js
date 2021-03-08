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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Editors.js":
/*!*******************************!*\
  !*** ./components/Editors.js ***!
  \*******************************/
/*! exports provided: JavascriptEditor, HtmlEditor, CssEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptEditor", function() { return JavascriptEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlEditor", function() { return HtmlEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssEditor", function() { return CssEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editors_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors.module.css */ "./components/editors.module.css");
/* harmony import */ var _editors_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editors_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\stefa\\Documents\\gitlab\\WBS\\ServerSide\\CodePen_Next\\my-code-pen\\components\\editors.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const JavascriptEditor = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Editor, _objectSpread({
    mode: "javascript",
    title: "JS"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};
const HtmlEditor = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Editor, _objectSpread({
    mode: "html",
    title: "HTML"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, undefined);
};
const CssEditor = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Editor, _objectSpread({
    mode: "css",
    title: "CSS"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, undefined);
}; // https://nextjs.org/docs/advanced-features/dynamic-import
// https://nextjs.org/docs/advanced-features/dynamic-import
// https://github.com/jaredpalmer/razzle/issues/1193#issuecomment-754596005
// https://www.npmjs.com/package/@next-tools/dynamic

const AcerEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async () => {
  const ace = await __webpack_require__(/*! react-ace */ "react-ace");

  __webpack_require__(/*! ace-builds/src-noconflict/mode-javascript */ "ace-builds/src-noconflict/mode-javascript");

  __webpack_require__(/*! ace-builds/src-noconflict/mode-html */ "ace-builds/src-noconflict/mode-html");

  __webpack_require__(/*! ace-builds/src-noconflict/mode-javascript */ "ace-builds/src-noconflict/mode-javascript");

  __webpack_require__(/*! ace-builds/src-noconflict/mode-css */ "ace-builds/src-noconflict/mode-css");

  __webpack_require__(/*! ace-builds/src-noconflict/theme-monokai */ "ace-builds/src-noconflict/theme-monokai");

  return ace;
}, {
  loading: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }, undefined),
  ssr: false
});

const Editor = ({
  mode,
  onChange,
  value,
  title,
  height
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _editors_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editorContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _editors_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editorTitle,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AcerEditor, {
      mode: mode,
      theme: "monokai",
      name: title,
      onChange: onChange,
      fontSize: 18,
      width: "100%",
      height: height,
      value: value,
      showPrintMargin: true,
      showGutter: true,
      tabSize: 2,
      setOptions: {
        useWorker: false
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/editors.module.css":
/*!***************************************!*\
  !*** ./components/editors.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"editorTitle": "editors_editorTitle__3JNYL",
	"editorContainer": "editors_editorContainer__395RT"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-split-pane */ "react-split-pane");
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_split_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Editors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Editors */ "./components/Editors.js");
/* harmony import */ var _utils_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useDebounce */ "./utils/useDebounce.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\stefa\\Documents\\gitlab\\WBS\\ServerSide\\CodePen_Next\\my-code-pen\\pages\\index.js";







const Index = () => {
  const {
    0: heightValue,
    1: setHeightValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("485px");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: saving,
    1: setSaving
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: htmlValue,
    1: setHtmlValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: jsValue,
    1: setJsValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: cssValue,
    1: setCssValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: outputValue,
    1: setOutputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const debouncedHtml = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(htmlValue, 1000);
  const debouncedJs = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(jsValue, 1000);
  const debouncedCss = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(cssValue, 1000);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function fetchData() {
      const response = await fetch(`../api/pens/${id}`);
      const {
        data
      } = await response.json();

      if (response.status !== 200) {
        await router.push("/404");
      }

      setHtmlValue(data.html);
      setCssValue(data.css);
      setJsValue(data.js);
      setLoading(false);
    }

    if (id) {
      setLoading(true);
      fetchData();
    } else {
      setLoading(false);
    }
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const output = `<html>
                    <style>
                    ${debouncedCss}
                    </style>
                    <body>
                    ${debouncedHtml}
                    <script type="text/javascript">
                    ${debouncedJs}
                    </script>
                    </body>
                  </html>`;
    setOutputValue(output);
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  const save = async () => {
    setSaving(true);
    const requestOptions = {
      method: !id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        html: htmlValue,
        css: cssValue,
        js: jsValue,
        id: id
      })
    };
    const response = await fetch(`../api/pens/${id}`, requestOptions);
    const {
      data: {
        updatedRecord,
        newRecordId
      }
    } = await response.json();
    setSaving(false);

    if (!updatedRecord) {
      await router.push(`?id=${newRecordId}`);
    }
  };

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.loading,
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
        onClick: () => location.href = "/",
        children: "New"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
        onClick: save,
        children: saving ? "Saving..." : "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_split_pane__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        marginTop: "60px"
      },
      split: "horizontal",
      minSize: "50%",
      onDragFinished: height => {
        setHeightValue(`${height - 40}px`);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_split_pane__WEBPACK_IMPORTED_MODULE_3___default.a, {
        split: "vertical",
        minSize: "33%",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_4__["HtmlEditor"], {
          height: heightValue,
          value: htmlValue,
          onChange: setHtmlValue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_split_pane__WEBPACK_IMPORTED_MODULE_3___default.a, {
          split: "vertical",
          minSize: "50%",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_4__["CssEditor"], {
            height: heightValue,
            value: cssValue,
            onChange: setCssValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_4__["JavascriptEditor"], {
            height: heightValue,
            value: jsValue,
            onChange: setJsValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
        srcDoc: outputValue,
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.previewIframe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"previewIframe": "index_previewIframe__z9-oj",
	"loading": "index_loading__3zDsI",
	"header": "index_header__1p3mc",
	"button": "index_button__14f7q"
};


/***/ }),

/***/ "./utils/useDebounce.js":
/*!******************************!*\
  !*** ./utils/useDebounce.js ***!
  \******************************/
/*! exports provided: useDebounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDebounce = (value, delay) => {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

/***/ }),

/***/ "ace-builds/src-noconflict/mode-css":
/*!*****************************************************!*\
  !*** external "ace-builds/src-noconflict/mode-css" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/mode-css");

/***/ }),

/***/ "ace-builds/src-noconflict/mode-html":
/*!******************************************************!*\
  !*** external "ace-builds/src-noconflict/mode-html" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/mode-html");

/***/ }),

/***/ "ace-builds/src-noconflict/mode-javascript":
/*!************************************************************!*\
  !*** external "ace-builds/src-noconflict/mode-javascript" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/mode-javascript");

/***/ }),

/***/ "ace-builds/src-noconflict/theme-monokai":
/*!**********************************************************!*\
  !*** external "ace-builds/src-noconflict/theme-monokai" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/theme-monokai");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-ace":
/*!****************************!*\
  !*** external "react-ace" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ace");

/***/ }),

/***/ "react-split-pane":
/*!***********************************!*\
  !*** external "react-split-pane" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-split-pane");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lZGl0b3JzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZWRpdG9ycy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlRGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWNzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1odG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLW1vbm9rYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3BsaXQtcGFuZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkphdmFzY3JpcHRFZGl0b3IiLCJwcm9wcyIsIkh0bWxFZGl0b3IiLCJDc3NFZGl0b3IiLCJBY2VyRWRpdG9yIiwiZHluYW1pYyIsImFjZSIsInJlcXVpcmUiLCJsb2FkaW5nIiwic3NyIiwiRWRpdG9yIiwibW9kZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0aXRsZSIsImhlaWdodCIsInN0eWxlcyIsImVkaXRvckNvbnRhaW5lciIsImVkaXRvclRpdGxlIiwidXNlV29ya2VyIiwiSW5kZXgiLCJoZWlnaHRWYWx1ZSIsInNldEhlaWdodFZhbHVlIiwidXNlU3RhdGUiLCJzZXRMb2FkaW5nIiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaHRtbFZhbHVlIiwic2V0SHRtbFZhbHVlIiwianNWYWx1ZSIsInNldEpzVmFsdWUiLCJjc3NWYWx1ZSIsInNldENzc1ZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImRlYm91bmNlZEh0bWwiLCJ1c2VEZWJvdW5jZSIsImRlYm91bmNlZEpzIiwiZGVib3VuY2VkQ3NzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInB1c2giLCJodG1sIiwiY3NzIiwianMiLCJvdXRwdXQiLCJzYXZlIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVkUmVjb3JkIiwibmV3UmVjb3JkSWQiLCJoZWFkZXIiLCJidXR0b24iLCJsb2NhdGlvbiIsImhyZWYiLCJtYXJnaW5Ub3AiLCJwcmV2aWV3SWZyYW1lIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTWdCLFdBQVcsR0FBRyxDQUFDdkIsS0FBRCxFQUFReUQsS0FBUixLQUFrQjtBQUMzQyxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ2pELHNEQUFRLENBQUNWLEtBQUQsQ0FBcEQ7QUFFQThCLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU04QixPQUFPLEdBQUdDLFVBQVUsQ0FBQyxNQUFNO0FBQy9CRix1QkFBaUIsQ0FBQzNELEtBQUQsQ0FBakI7QUFDRCxLQUZ5QixFQUV2QnlELEtBRnVCLENBQTFCO0FBSUEsV0FBTyxNQUFNO0FBQ1hLLGtCQUFZLENBQUNGLE9BQUQsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQzVELEtBQUQsRUFBUXlELEtBQVIsQ0FSTSxDQUFUO0FBVUEsU0FBT0MsY0FBUDtBQUNELENBZE0sQzs7Ozs7Ozs7Ozs7QUNGUCwrRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9lZGl0b3JzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBKYXZhc2NyaXB0RWRpdG9yID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxFZGl0b3IgbW9kZT1cImphdmFzY3JpcHRcIiB0aXRsZT17XCJKU1wifSB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEh0bWxFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gPEVkaXRvciBtb2RlPVwiaHRtbFwiIHRpdGxlPXtcIkhUTUxcIn0gey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDc3NFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gPEVkaXRvciBtb2RlPVwiY3NzXCIgdGl0bGU9e1wiQ1NTXCJ9IHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5cclxuLy8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYWR2YW5jZWQtZmVhdHVyZXMvZHluYW1pYy1pbXBvcnRcclxuLy8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYWR2YW5jZWQtZmVhdHVyZXMvZHluYW1pYy1pbXBvcnRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2phcmVkcGFsbWVyL3JhenpsZS9pc3N1ZXMvMTE5MyNpc3N1ZWNvbW1lbnQtNzU0NTk2MDA1XHJcbi8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0BuZXh0LXRvb2xzL2R5bmFtaWNcclxuY29uc3QgQWNlckVkaXRvciA9IGR5bmFtaWMoXHJcbiAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWNlID0gYXdhaXQgcmVxdWlyZShcInJlYWN0LWFjZVwiKTtcclxuICAgICAgICByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWphdmFzY3JpcHRcIik7XHJcbiAgICAgICAgcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1odG1sXCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtamF2YXNjcmlwdFwiKTtcclxuICAgICAgICByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWNzc1wiKTtcclxuICAgICAgICByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1tb25va2FpXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNlO1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsb2FkaW5nOiAoKSA9PiAoXHJcbiAgICAgICAgICAgIDxwPkxvYWRpbmc8L3A+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBzc3I6IGZhbHNlLFxyXG4gICAgfSxcclxuKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEVkaXRvciA9ICh7IG1vZGUsIG9uQ2hhbmdlLCB2YWx1ZSwgdGl0bGUsIGhlaWdodCB9KSA9PiB7XHJcbiAgcmV0dXJuICAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvckNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yVGl0bGV9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgPEFjZXJFZGl0b3JcclxuICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgIHRoZW1lPVwibW9ub2thaVwiXHJcbiAgICAgICAgbmFtZT17dGl0bGV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgIGZvbnRTaXplPXsxOH1cclxuICAgICAgICB3aWR0aD17XCIxMDAlXCJ9XHJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIHNob3dQcmludE1hcmdpbj17dHJ1ZX1cclxuICAgICAgICBzaG93R3V0dGVyPXt0cnVlfVxyXG4gICAgICAgIHRhYlNpemU9ezJ9XHJcbiAgICAgICAgc2V0T3B0aW9ucz17eyB1c2VXb3JrZXI6IGZhbHNlIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVkaXRvclRpdGxlXCI6IFwiZWRpdG9yc19lZGl0b3JUaXRsZV9fM0pOWUxcIixcblx0XCJlZGl0b3JDb250YWluZXJcIjogXCJlZGl0b3JzX2VkaXRvckNvbnRhaW5lcl9fMzk1UlRcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSBcInJlYWN0LXNwbGl0LXBhbmVcIjtcblxuaW1wb3J0IHsgQ3NzRWRpdG9yLCBIdG1sRWRpdG9yLCBKYXZhc2NyaXB0RWRpdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdG9yc1wiO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tIFwiLi4vdXRpbHMvdXNlRGVib3VuY2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbaGVpZ2h0VmFsdWUsIHNldEhlaWdodFZhbHVlXSA9IHVzZVN0YXRlKFwiNDg1cHhcIik7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2h0bWxWYWx1ZSwgc2V0SHRtbFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbanNWYWx1ZSwgc2V0SnNWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Nzc1ZhbHVlLCBzZXRDc3NWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW291dHB1dFZhbHVlLCBzZXRPdXRwdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBkZWJvdW5jZWRIdG1sID0gdXNlRGVib3VuY2UoaHRtbFZhbHVlLCAxMDAwKTtcbiAgY29uc3QgZGVib3VuY2VkSnMgPSB1c2VEZWJvdW5jZShqc1ZhbHVlLCAxMDAwKTtcbiAgY29uc3QgZGVib3VuY2VkQ3NzID0gdXNlRGVib3VuY2UoY3NzVmFsdWUsIDEwMDApO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWApO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi80MDRcIik7XG4gICAgICB9XG5cbiAgICAgIHNldEh0bWxWYWx1ZShkYXRhLmh0bWwpO1xuICAgICAgc2V0Q3NzVmFsdWUoZGF0YS5jc3MpO1xuICAgICAgc2V0SnNWYWx1ZShkYXRhLmpzKTtcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKGlkKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2lkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvdXRwdXQgPSBgPGh0bWw+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRDc3N9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICAke2RlYm91bmNlZEh0bWx9XG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuICAgICAgICAgICAgICAgICAgICAke2RlYm91bmNlZEpzfVxuICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgICAgICAgPC9odG1sPmA7XG4gICAgc2V0T3V0cHV0VmFsdWUob3V0cHV0KTtcbiAgfSwgW2RlYm91bmNlZEh0bWwsIGRlYm91bmNlZENzcywgZGVib3VuY2VkSnNdKTtcblxuICAgIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAhaWQgPyBcIlBVVFwiIDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGh0bWw6IGh0bWxWYWx1ZSxcbiAgICAgICAgICBjc3M6IGNzc1ZhbHVlLFxuICAgICAgICAgIGpzOiBqc1ZhbHVlLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHVwZGF0ZWRSZWNvcmQsIG5ld1JlY29yZElkIH0sXG4gICAgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgaWYgKCF1cGRhdGVkUmVjb3JkKSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChgP2lkPSR7bmV3UmVjb3JkSWR9YCk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ30+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChsb2NhdGlvbi5ocmVmID0gXCIvXCIpfVxuICAgICAgPlxuICAgICAgICBOZXdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3NhdmV9PlxuICAgICAgICB7c2F2aW5nID8gXCJTYXZpbmcuLi5cIiA6IFwiU2F2ZVwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPFNwbGl0UGFuZVxuICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjYwcHhcIiB9fVxuICAgICAgc3BsaXQ9XCJob3Jpem9udGFsXCJcbiAgICAgIG1pblNpemU9e1wiNTAlXCJ9XG4gICAgICBvbkRyYWdGaW5pc2hlZD17KGhlaWdodCkgPT4ge1xuICAgICAgICBzZXRIZWlnaHRWYWx1ZShgJHtoZWlnaHQgLSA0MH1weGApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPXtcIjMzJVwifT5cbiAgICAgICAgPEh0bWxFZGl0b3JcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodFZhbHVlfVxuICAgICAgICAgIHZhbHVlPXtodG1sVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldEh0bWxWYWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT17XCI1MCVcIn0+XG4gICAgICAgICAgPENzc0VkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHRWYWx1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtjc3NWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDc3NWYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxKYXZhc2NyaXB0RWRpdG9yXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodFZhbHVlfVxuICAgICAgICAgICAgdmFsdWU9e2pzVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0SnNWYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgPGlmcmFtZSBzcmNEb2M9e291dHB1dFZhbHVlfSBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3SWZyYW1lfSAvPlxuICAgIDwvU3BsaXRQYW5lPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJldmlld0lmcmFtZVwiOiBcImluZGV4X3ByZXZpZXdJZnJhbWVfX3o5LW9qXCIsXG5cdFwibG9hZGluZ1wiOiBcImluZGV4X2xvYWRpbmdfXzN6RHNJXCIsXG5cdFwiaGVhZGVyXCI6IFwiaW5kZXhfaGVhZGVyX18xcDNtY1wiLFxuXHRcImJ1dHRvblwiOiBcImluZGV4X2J1dHRvbl9fMTRmN3FcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZURlYm91bmNlID0gKHZhbHVlLCBkZWxheSkgPT4ge1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9LCBkZWxheSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbdmFsdWUsIGRlbGF5XSk7XHJcblxyXG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtY3NzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1odG1sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtbW9ub2thaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwbGl0LXBhbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=