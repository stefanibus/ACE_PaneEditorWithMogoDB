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
/* harmony import */ var _Editors_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Editors.module.css */ "./components/Editors.module.css");
/* harmony import */ var _Editors_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Editors_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\stefa\\Documents\\gitlab\\WBS\\ServerSide\\CodePen_Next\\my-code-pen\\components\\Editors.js";

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
}; // Workaround for  issue:  "window is not defined"
// it occurred when trying to run the  render on the Heroku server
// created a so-called NoSSR component:
// I had to work around an issue with AcerEditor-Component not beeing present while the server wanted to render it
// https://nextjs.org/docs/advanced-features/dynamic-import
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
    lineNumber: 40,
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
    className: _Editors_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editorContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Editors_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editorTitle,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Editors.module.css":
/*!***************************************!*\
  !*** ./components/Editors.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"editorTitle": "Editors_editorTitle__24wvi",
	"editorContainer": "Editors_editorContainer__c8Kzn"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0b3JzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdG9ycy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlRGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWNzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1odG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLW1vbm9rYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3BsaXQtcGFuZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkphdmFzY3JpcHRFZGl0b3IiLCJwcm9wcyIsIkh0bWxFZGl0b3IiLCJDc3NFZGl0b3IiLCJBY2VyRWRpdG9yIiwiZHluYW1pYyIsImFjZSIsInJlcXVpcmUiLCJsb2FkaW5nIiwic3NyIiwiRWRpdG9yIiwibW9kZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0aXRsZSIsImhlaWdodCIsInN0eWxlcyIsImVkaXRvckNvbnRhaW5lciIsImVkaXRvclRpdGxlIiwidXNlV29ya2VyIiwiSW5kZXgiLCJoZWlnaHRWYWx1ZSIsInNldEhlaWdodFZhbHVlIiwidXNlU3RhdGUiLCJzZXRMb2FkaW5nIiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaHRtbFZhbHVlIiwic2V0SHRtbFZhbHVlIiwianNWYWx1ZSIsInNldEpzVmFsdWUiLCJjc3NWYWx1ZSIsInNldENzc1ZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImRlYm91bmNlZEh0bWwiLCJ1c2VEZWJvdW5jZSIsImRlYm91bmNlZEpzIiwiZGVib3VuY2VkQ3NzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInB1c2giLCJodG1sIiwiY3NzIiwianMiLCJvdXRwdXQiLCJzYXZlIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVkUmVjb3JkIiwibmV3UmVjb3JkSWQiLCJoZWFkZXIiLCJidXR0b24iLCJsb2NhdGlvbiIsImhyZWYiLCJtYXJnaW5Ub3AiLCJwcmV2aWV3SWZyYW1lIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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ZixFOzs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNZ0IsV0FBVyxHQUFHLENBQUN2QixLQUFELEVBQVF5RCxLQUFSLEtBQWtCO0FBQzNDLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDakQsc0RBQVEsQ0FBQ1YsS0FBRCxDQUFwRDtBQUVBOEIseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTThCLE9BQU8sR0FBR0MsVUFBVSxDQUFDLE1BQU07QUFDL0JGLHVCQUFpQixDQUFDM0QsS0FBRCxDQUFqQjtBQUNELEtBRnlCLEVBRXZCeUQsS0FGdUIsQ0FBMUI7QUFJQSxXQUFPLE1BQU07QUFDWEssa0JBQVksQ0FBQ0YsT0FBRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDNUQsS0FBRCxFQUFReUQsS0FBUixDQVJNLENBQVQ7QUFVQSxTQUFPQyxjQUFQO0FBQ0QsQ0FkTSxDOzs7Ozs7Ozs7OztBQ0ZQLCtEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0VkaXRvcnMubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEphdmFzY3JpcHRFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gPEVkaXRvciBtb2RlPVwiamF2YXNjcmlwdFwiIHRpdGxlPXtcIkpTXCJ9IHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSHRtbEVkaXRvciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8RWRpdG9yIG1vZGU9XCJodG1sXCIgdGl0bGU9e1wiSFRNTFwifSB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENzc0VkaXRvciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8RWRpdG9yIG1vZGU9XCJjc3NcIiB0aXRsZT17XCJDU1NcIn0gey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gV29ya2Fyb3VuZCBmb3IgIGlzc3VlOiAgXCJ3aW5kb3cgaXMgbm90IGRlZmluZWRcIlxyXG4vLyBpdCBvY2N1cnJlZCB3aGVuIHRyeWluZyB0byBydW4gdGhlICByZW5kZXIgb24gdGhlIEhlcm9rdSBzZXJ2ZXJcclxuLy8gY3JlYXRlZCBhIHNvLWNhbGxlZCBOb1NTUiBjb21wb25lbnQ6XHJcbi8vIEkgaGFkIHRvIHdvcmsgYXJvdW5kIGFuIGlzc3VlIHdpdGggQWNlckVkaXRvci1Db21wb25lbnQgbm90IGJlZWluZyBwcmVzZW50IHdoaWxlIHRoZSBzZXJ2ZXIgd2FudGVkIHRvIHJlbmRlciBpdFxyXG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9hZHZhbmNlZC1mZWF0dXJlcy9keW5hbWljLWltcG9ydFxyXG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9hZHZhbmNlZC1mZWF0dXJlcy9keW5hbWljLWltcG9ydFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFyZWRwYWxtZXIvcmF6emxlL2lzc3Vlcy8xMTkzI2lzc3VlY29tbWVudC03NTQ1OTYwMDVcclxuLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQG5leHQtdG9vbHMvZHluYW1pY1xyXG5jb25zdCBBY2VyRWRpdG9yID0gZHluYW1pYyhcclxuICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY2UgPSBhd2FpdCByZXF1aXJlKFwicmVhY3QtYWNlXCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtamF2YXNjcmlwdFwiKTtcclxuICAgICAgICByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWh0bWxcIik7XHJcbiAgICAgICAgcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtY3NzXCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLW1vbm9rYWlcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2U7XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvYWRpbmc6ICgpID0+IChcclxuICAgICAgICAgICAgPHA+TG9hZGluZzwvcD5cclxuICAgICAgICApLFxyXG4gICAgICAgIHNzcjogZmFsc2UsXHJcbiAgICB9LFxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgRWRpdG9yID0gKHsgbW9kZSwgb25DaGFuZ2UsIHZhbHVlLCB0aXRsZSwgaGVpZ2h0IH0pID0+IHtcclxuICByZXR1cm4gIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3JUaXRsZX0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICA8QWNlckVkaXRvclxyXG4gICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgdGhlbWU9XCJtb25va2FpXCJcclxuICAgICAgICBuYW1lPXt0aXRsZX1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgZm9udFNpemU9ezE4fVxyXG4gICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgc2hvd1ByaW50TWFyZ2luPXt0cnVlfVxyXG4gICAgICAgIHNob3dHdXR0ZXI9e3RydWV9XHJcbiAgICAgICAgdGFiU2l6ZT17Mn1cclxuICAgICAgICBzZXRPcHRpb25zPXt7IHVzZVdvcmtlcjogZmFsc2UgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZWRpdG9yVGl0bGVcIjogXCJFZGl0b3JzX2VkaXRvclRpdGxlX18yNHd2aVwiLFxuXHRcImVkaXRvckNvbnRhaW5lclwiOiBcIkVkaXRvcnNfZWRpdG9yQ29udGFpbmVyX19jOEt6blwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tIFwicmVhY3Qtc3BsaXQtcGFuZVwiO1xuXG5pbXBvcnQgeyBDc3NFZGl0b3IsIEh0bWxFZGl0b3IsIEphdmFzY3JpcHRFZGl0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FZGl0b3JzXCI7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gXCIuLi91dGlscy91c2VEZWJvdW5jZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtoZWlnaHRWYWx1ZSwgc2V0SGVpZ2h0VmFsdWVdID0gdXNlU3RhdGUoXCI0ODVweFwiKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbaHRtbFZhbHVlLCBzZXRIdG1sVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtqc1ZhbHVlLCBzZXRKc1ZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3NzVmFsdWUsIHNldENzc1ZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3V0cHV0VmFsdWUsIHNldE91dHB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGRlYm91bmNlZEh0bWwgPSB1c2VEZWJvdW5jZShodG1sVmFsdWUsIDEwMDApO1xuICBjb25zdCBkZWJvdW5jZWRKcyA9IHVzZURlYm91bmNlKGpzVmFsdWUsIDEwMDApO1xuICBjb25zdCBkZWJvdW5jZWRDc3MgPSB1c2VEZWJvdW5jZShjc3NWYWx1ZSwgMTAwMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wZW5zLyR7aWR9YCk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiLzQwNFwiKTtcbiAgICAgIH1cblxuICAgICAgc2V0SHRtbFZhbHVlKGRhdGEuaHRtbCk7XG4gICAgICBzZXRDc3NWYWx1ZShkYXRhLmNzcyk7XG4gICAgICBzZXRKc1ZhbHVlKGRhdGEuanMpO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dCA9IGA8aHRtbD5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAke2RlYm91bmNlZENzc31cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVib3VuY2VkSHRtbH1cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVib3VuY2VkSnN9XG4gICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICAgICAgICA8L2h0bWw+YDtcbiAgICBzZXRPdXRwdXRWYWx1ZShvdXRwdXQpO1xuICB9LCBbZGVib3VuY2VkSHRtbCwgZGVib3VuY2VkQ3NzLCBkZWJvdW5jZWRKc10pO1xuXG4gICAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICFpZCA/IFwiUFVUXCIgOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaHRtbDogaHRtbFZhbHVlLFxuICAgICAgICAgIGNzczogY3NzVmFsdWUsXG4gICAgICAgICAganM6IGpzVmFsdWUsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICB9KSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wZW5zLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgdXBkYXRlZFJlY29yZCwgbmV3UmVjb3JkSWQgfSxcbiAgICB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICBpZiAoIXVwZGF0ZWRSZWNvcmQpIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKGA/aWQ9JHtuZXdSZWNvcmRJZH1gKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gKGxvY2F0aW9uLmhyZWYgPSBcIi9cIil9XG4gICAgICA+XG4gICAgICAgIE5ld1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17c2F2ZX0+XG4gICAgICAgIHtzYXZpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlXCJ9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8U3BsaXRQYW5lXG4gICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNjBweFwiIH19XG4gICAgICBzcGxpdD1cImhvcml6b250YWxcIlxuICAgICAgbWluU2l6ZT17XCI1MCVcIn1cbiAgICAgIG9uRHJhZ0ZpbmlzaGVkPXsoaGVpZ2h0KSA9PiB7XG4gICAgICAgIHNldEhlaWdodFZhbHVlKGAke2hlaWdodCAtIDQwfXB4YCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9e1wiMzMlXCJ9PlxuICAgICAgICA8SHRtbEVkaXRvclxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgdmFsdWU9e2h0bWxWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17c2V0SHRtbFZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPXtcIjUwJVwifT5cbiAgICAgICAgICA8Q3NzRWRpdG9yXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodFZhbHVlfVxuICAgICAgICAgICAgdmFsdWU9e2Nzc1ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldENzc1ZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEphdmFzY3JpcHRFZGl0b3JcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICB2YWx1ZT17anNWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRKc1ZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICA8aWZyYW1lIHNyY0RvYz17b3V0cHV0VmFsdWV9IGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXdJZnJhbWV9IC8+XG4gICAgPC9TcGxpdFBhbmU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcmV2aWV3SWZyYW1lXCI6IFwiaW5kZXhfcHJldmlld0lmcmFtZV9fejktb2pcIixcblx0XCJsb2FkaW5nXCI6IFwiaW5kZXhfbG9hZGluZ19fM3pEc0lcIixcblx0XCJoZWFkZXJcIjogXCJpbmRleF9oZWFkZXJfXzFwM21jXCIsXG5cdFwiYnV0dG9uXCI6IFwiaW5kZXhfYnV0dG9uX18xNGY3cVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGVib3VuY2UgPSAodmFsdWUsIGRlbGF5KSA9PiB7XHJcbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcclxuICAgIH0sIGRlbGF5KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFt2YWx1ZSwgZGVsYXldKTtcclxuXHJcbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWh0bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1tb25va2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hY2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3BsaXQtcGFuZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==