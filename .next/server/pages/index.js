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
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fingerprintjs/fingerprintjs */ "@fingerprintjs/fingerprintjs");
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__);


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
    0: paneValues,
    1: setpaneValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: userID,
    1: setUserID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: project,
    1: setProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: projectID,
    1: setProjectID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: projectName,
    1: setProjectName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const debouncedHtml = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(htmlValue, 1000);
  const debouncedJs = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(jsValue, 1000);
  const debouncedCss = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(cssValue, 1000);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: visitorID,
    1: setVisitorID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    id,
    user_id
  } = router.query;

  function onChange(event) {
    if (event.target.value != "") {
      router.push(`?id=${event.target.value}&user_id=${userID}`);
      setProjectID(event.target.value);
    } else {
      location.href = "/";
      setProjectID("");
    }
  }

  async function onDelete(id) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(`../api/pens/${id}`, requestOptions);
    const {
      success,
      data
    } = await response.json();

    if (success) {
      location.href = "/";
      setProjectID("");
    }
  }

  async function getProjects() {
    const fp = await _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_7___default.a.load(); // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.

    const result = await fp.get(); // This is the visitor identifier:

    const visitorId = result.visitorId;
    setUserID(visitorId);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }; // const response = await fetch(`../api/users/${visitorId}`, requestOptions);

    const response = await fetch(`../api/users/${visitorId}`, requestOptions);
    const {
      data
    } = await response.json();
    setProject(data);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function fetchData() {
      const response = await fetch(`../api/pens/${id}`);
      const {
        data
      } = await response.json();

      if (response.status !== 200) {
        await router.push("/404");
      }

      setProjectName(data.projectName);
      setHtmlValue(data.html);
      setCssValue(data.css);
      setJsValue(data.js);
      setProjectID(id);
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
    if (router.query) {
      setVisitorID(router.query.user_id);
    }
  }, [user_id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // console.log('css js html changed AND paneOutput is SET with paneOutput beeing ')
    const paneOutput = `<html>
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
    setpaneValues(paneOutput);
    getProjects();
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  const save = async () => {
    setSaving(true);
    var meth = "PUT";

    if (visitorID) {
      if (visitorID == userID) {
        meth = !id ? "PUT" : "POST";
      } else {
        meth = "PUT";
      }
    } else {
      meth = "PUT";
    }

    const requestOptions = {
      method: meth,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        html: htmlValue,
        css: cssValue,
        js: jsValue,
        id: id,
        userID: userID,
        projectName: projectName
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
      await router.push(`?id=${newRecordId}&user_id=${userID}`);
    }

    getProjects();
  };

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.loading,
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
          onClick: () => {
            setProjectID("");
            location.href = "/";
          },
          children: "New"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
          onClick: save,
          children: saving ? "Saving..." : "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "custom-select",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control form-input",
          value: projectName,
          placeholder: "Project name",
          onChange: e => {
            setProjectName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, undefined), project && project.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "form-control form-input",
          style: {
            width: 240
          },
          value: projectID ? projectID : "",
          onChange: onChange,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "",
            children: "ProjectID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 15
          }, undefined), project.map((item, i) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item._id,
              children: item._id
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 19
            }, undefined);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 13
        }, undefined), project && project.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__["BsTrash"], {
          style: {
            color: "white",
            fontSize: 36
          },
          onClick: () => onDelete(projectID)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 45
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
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
          lineNumber: 220,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_split_pane__WEBPACK_IMPORTED_MODULE_3___default.a, {
          split: "vertical",
          minSize: "50%",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_4__["CssEditor"], {
            height: heightValue,
            value: cssValue,
            onChange: setCssValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_4__["JavascriptEditor"], {
            height: heightValue,
            value: jsValue,
            onChange: setJsValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
        srcDoc: paneValues,
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.previewIframe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
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

/***/ "@fingerprintjs/fingerprintjs":
/*!***********************************************!*\
  !*** external "@fingerprintjs/fingerprintjs" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fingerprintjs/fingerprintjs");

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

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0b3JzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdG9ycy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlRGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtaHRtbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1tb25va2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFjZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3BsaXQtcGFuZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkphdmFzY3JpcHRFZGl0b3IiLCJwcm9wcyIsIkh0bWxFZGl0b3IiLCJDc3NFZGl0b3IiLCJBY2VyRWRpdG9yIiwiZHluYW1pYyIsImFjZSIsInJlcXVpcmUiLCJsb2FkaW5nIiwic3NyIiwiRWRpdG9yIiwibW9kZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0aXRsZSIsImhlaWdodCIsInN0eWxlcyIsImVkaXRvckNvbnRhaW5lciIsImVkaXRvclRpdGxlIiwidXNlV29ya2VyIiwiSW5kZXgiLCJoZWlnaHRWYWx1ZSIsInNldEhlaWdodFZhbHVlIiwidXNlU3RhdGUiLCJzZXRMb2FkaW5nIiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaHRtbFZhbHVlIiwic2V0SHRtbFZhbHVlIiwianNWYWx1ZSIsInNldEpzVmFsdWUiLCJjc3NWYWx1ZSIsInNldENzc1ZhbHVlIiwicGFuZVZhbHVlcyIsInNldHBhbmVWYWx1ZXMiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsInByb2plY3RJRCIsInNldFByb2plY3RJRCIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJkZWJvdW5jZWRIdG1sIiwidXNlRGVib3VuY2UiLCJkZWJvdW5jZWRKcyIsImRlYm91bmNlZENzcyIsInJvdXRlciIsInVzZVJvdXRlciIsInZpc2l0b3JJRCIsInNldFZpc2l0b3JJRCIsImlkIiwidXNlcl9pZCIsInF1ZXJ5IiwiZXZlbnQiLCJ0YXJnZXQiLCJwdXNoIiwibG9jYXRpb24iLCJocmVmIiwib25EZWxldGUiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImZldGNoIiwic3VjY2VzcyIsImRhdGEiLCJqc29uIiwiZ2V0UHJvamVjdHMiLCJmcCIsIkZpbmdlcnByaW50SlMiLCJsb2FkIiwicmVzdWx0IiwiZ2V0IiwidmlzaXRvcklkIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwic3RhdHVzIiwiaHRtbCIsImNzcyIsImpzIiwicGFuZU91dHB1dCIsInNhdmUiLCJtZXRoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVkUmVjb3JkIiwibmV3UmVjb3JkSWQiLCJoZWFkZXIiLCJidXR0b24iLCJlIiwibGVuZ3RoIiwid2lkdGgiLCJtYXAiLCJpdGVtIiwiaSIsIl9pZCIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJwcmV2aWV3SWZyYW1lIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUN6QyxzQkFBTyxxRUFBQyxNQUFEO0FBQVEsUUFBSSxFQUFDLFlBQWI7QUFBMEIsU0FBSyxFQUFFO0FBQWpDLEtBQTJDQSxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTUMsVUFBVSxHQUFJRCxLQUFELElBQVc7QUFDbkMsc0JBQU8scUVBQUMsTUFBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFNBQUssRUFBRTtBQUEzQixLQUF1Q0EsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1FLFNBQVMsR0FBSUYsS0FBRCxJQUFXO0FBQ2xDLHNCQUFPLHFFQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUMsS0FBYjtBQUFtQixTQUFLLEVBQUU7QUFBMUIsS0FBcUNBLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRk0sQyxDQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHQyxtREFBTyxDQUN0QixZQUFZO0FBQ1IsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLG1CQUFPLENBQUMsNEJBQUQsQ0FBekI7O0FBQ0FBLHFCQUFPLENBQUMsNEZBQUQsQ0FBUDs7QUFDQUEscUJBQU8sQ0FBQyxnRkFBRCxDQUFQOztBQUNBQSxxQkFBTyxDQUFDLDRGQUFELENBQVA7O0FBQ0FBLHFCQUFPLENBQUMsOEVBQUQsQ0FBUDs7QUFDQUEscUJBQU8sQ0FBQyx3RkFBRCxDQUFQOztBQUVBLFNBQU9ELEdBQVA7QUFDSCxDQVZxQixFQVd0QjtBQUNJRSxTQUFPLEVBQUUsbUJBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQVhzQixDQUExQjs7QUFzQkEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxVQUFSO0FBQWtCQyxPQUFsQjtBQUF5QkMsT0FBekI7QUFBZ0NDO0FBQWhDLENBQUQsS0FBOEM7QUFDM0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLGVBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDBEQUFNLENBQUNFLFdBQXZCO0FBQUEsZ0JBQXFDSjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsVUFBRDtBQUNFLFVBQUksRUFBRUgsSUFEUjtBQUVFLFdBQUssRUFBQyxTQUZSO0FBR0UsVUFBSSxFQUFFRyxLQUhSO0FBSUUsY0FBUSxFQUFFRixRQUpaO0FBS0UsY0FBUSxFQUFFLEVBTFo7QUFNRSxXQUFLLEVBQUUsTUFOVDtBQU9FLFlBQU0sRUFBRUcsTUFQVjtBQVFFLFdBQUssRUFBRUYsS0FSVDtBQVNFLHFCQUFlLEVBQUUsSUFUbkI7QUFVRSxnQkFBVSxFQUFFLElBVmQ7QUFXRSxhQUFPLEVBQUUsQ0FYWDtBQVlFLGdCQUFVLEVBQUU7QUFBRU0saUJBQVMsRUFBRTtBQUFiO0FBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQXBCRCxDOzs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxPQUFELENBQTlDO0FBRUEsUUFBTTtBQUFBLE9BQUNmLE9BQUQ7QUFBQSxPQUFVZ0I7QUFBVixNQUF3QkQsc0RBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNFLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSCxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFFQSxRQUFNO0FBQUEsT0FBQ0ksU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJMLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDTSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlAsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNRLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCVCxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1UsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJYLHNEQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDWSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQmIsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNjLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCZixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2dCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCakIsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNrQixXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ25CLHNEQUFRLENBQUMsRUFBRCxDQUE5QztBQUVBLFFBQU1vQixhQUFhLEdBQUdDLHNFQUFXLENBQUNqQixTQUFELEVBQVksSUFBWixDQUFqQztBQUNBLFFBQU1rQixXQUFXLEdBQUdELHNFQUFXLENBQUNmLE9BQUQsRUFBVSxJQUFWLENBQS9CO0FBQ0EsUUFBTWlCLFlBQVksR0FBR0Ysc0VBQVcsQ0FBQ2IsUUFBRCxFQUFXLElBQVgsQ0FBaEM7QUFFQSxRQUFNZ0IsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QjNCLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBRTRCLE1BQUY7QUFBTUM7QUFBTixNQUFrQkwsTUFBTSxDQUFDTSxLQUEvQjs7QUFFQSxXQUFTekMsUUFBVCxDQUFrQjBDLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhMUMsS0FBYixJQUFzQixFQUExQixFQUE4QjtBQUM1QmtDLFlBQU0sQ0FBQ1MsSUFBUCxDQUFhLE9BQU1GLEtBQUssQ0FBQ0MsTUFBTixDQUFhMUMsS0FBTSxZQUFXc0IsTUFBTyxFQUF4RDtBQUNBSyxrQkFBWSxDQUFDYyxLQUFLLENBQUNDLE1BQU4sQ0FBYTFDLEtBQWQsQ0FBWjtBQUNELEtBSEQsTUFHTztBQUNMNEMsY0FBUSxDQUFDQyxJQUFULEdBQWdCLEdBQWhCO0FBQ0FsQixrQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsaUJBQWVtQixRQUFmLENBQXdCUixFQUF4QixFQUE0QjtBQUMxQixVQUFNUyxjQUFjLEdBQUc7QUFDckJDLFlBQU0sRUFBRSxRQURhO0FBRXJCQyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEI7QUFGWSxLQUF2QjtBQUlBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsZUFBY2IsRUFBRyxFQUFuQixFQUFzQlMsY0FBdEIsQ0FBNUI7QUFDQSxVQUFNO0FBQUVLLGFBQUY7QUFBV0M7QUFBWCxRQUFvQixNQUFNSCxRQUFRLENBQUNJLElBQVQsRUFBaEM7O0FBQ0EsUUFBSUYsT0FBSixFQUFhO0FBQ1hSLGNBQVEsQ0FBQ0MsSUFBVCxHQUFnQixHQUFoQjtBQUNBbEIsa0JBQVksQ0FBQyxFQUFELENBQVo7QUFDRDtBQUNGOztBQUVELGlCQUFlNEIsV0FBZixHQUE2QjtBQUMzQixVQUFNQyxFQUFFLEdBQUcsTUFBTUMsbUVBQWEsQ0FBQ0MsSUFBZCxFQUFqQixDQUQyQixDQUczQjtBQUNBOztBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNSCxFQUFFLENBQUNJLEdBQUgsRUFBckIsQ0FMMkIsQ0FPM0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHRixNQUFNLENBQUNFLFNBQXpCO0FBQ0F0QyxhQUFTLENBQUNzQyxTQUFELENBQVQ7QUFDQSxVQUFNZCxjQUFjLEdBQUc7QUFDckJDLFlBQU0sRUFBRSxLQURhO0FBRXJCQyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEI7QUFGWSxLQUF2QixDQVYyQixDQWMzQjs7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLGdCQUFlVSxTQUFVLEVBQTNCLEVBQThCZCxjQUE5QixDQUE1QjtBQUNBLFVBQU07QUFBRU07QUFBRixRQUFXLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUF2QjtBQUNBN0IsY0FBVSxDQUFDNEIsSUFBRCxDQUFWO0FBQ0Q7O0FBRURTLHlEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlQyxTQUFmLEdBQTJCO0FBQ3pCLFlBQU1iLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsZUFBY2IsRUFBRyxFQUFuQixDQUE1QjtBQUNBLFlBQU07QUFBRWU7QUFBRixVQUFXLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUF2Qjs7QUFDQSxVQUFJSixRQUFRLENBQUNjLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsY0FBTTlCLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLE1BQVosQ0FBTjtBQUNEOztBQUNEZCxvQkFBYyxDQUFDd0IsSUFBSSxDQUFDekIsV0FBTixDQUFkO0FBRUFiLGtCQUFZLENBQUNzQyxJQUFJLENBQUNZLElBQU4sQ0FBWjtBQUNBOUMsaUJBQVcsQ0FBQ2tDLElBQUksQ0FBQ2EsR0FBTixDQUFYO0FBQ0FqRCxnQkFBVSxDQUFDb0MsSUFBSSxDQUFDYyxFQUFOLENBQVY7QUFDQXhDLGtCQUFZLENBQUNXLEVBQUQsQ0FBWjtBQUVBM0IsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDs7QUFFRCxRQUFJMkIsRUFBSixFQUFRO0FBQ04zQixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBb0QsZUFBUztBQUNWLEtBSEQsTUFHTztBQUNMcEQsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLEdBdkJRLEVBdUJOLENBQUMyQixFQUFELENBdkJNLENBQVQ7QUF5QkF3Qix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJNUIsTUFBTSxDQUFDTSxLQUFYLEVBQWtCO0FBQ2hCSCxrQkFBWSxDQUFDSCxNQUFNLENBQUNNLEtBQVAsQ0FBYUQsT0FBZCxDQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7QUFNQXVCLHlEQUFTLENBQUUsTUFBTTtBQUNmO0FBQ0EsVUFBTU0sVUFBVSxHQUFJO0FBQ3hCO0FBQ0Esc0JBQXNCbkMsWUFBYTtBQUNuQztBQUNBO0FBQ0Esc0JBQXNCSCxhQUFjO0FBQ3BDO0FBQ0Esc0JBQXNCRSxXQUFZO0FBQ2xDO0FBQ0E7QUFDQSwwQkFWSTtBQVdBWCxpQkFBYSxDQUFDK0MsVUFBRCxDQUFiO0FBRUFiLGVBQVc7QUFDWixHQWhCUSxFQWdCTixDQUFDekIsYUFBRCxFQUFnQkcsWUFBaEIsRUFBOEJELFdBQTlCLENBaEJNLENBQVQ7O0FBa0JBLFFBQU1xQyxJQUFJLEdBQUcsWUFBWTtBQUN2QnhELGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQSxRQUFJeUQsSUFBSSxHQUFHLEtBQVg7O0FBQ0EsUUFBSWxDLFNBQUosRUFBZTtBQUNiLFVBQUlBLFNBQVMsSUFBSWQsTUFBakIsRUFBeUI7QUFDdkJnRCxZQUFJLEdBQUcsQ0FBQ2hDLEVBQUQsR0FBTSxLQUFOLEdBQWMsTUFBckI7QUFDRCxPQUZELE1BRU87QUFDTGdDLFlBQUksR0FBRyxLQUFQO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTEEsVUFBSSxHQUFHLEtBQVA7QUFDRDs7QUFHRCxVQUFNdkIsY0FBYyxHQUFHO0FBQ3JCQyxZQUFNLEVBQUVzQixJQURhO0FBRXJCckIsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRlk7QUFHckJzQixVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CUixZQUFJLEVBQUVuRCxTQURhO0FBRW5Cb0QsV0FBRyxFQUFFaEQsUUFGYztBQUduQmlELFVBQUUsRUFBRW5ELE9BSGU7QUFJbkJzQixVQUFFLEVBQUVBLEVBSmU7QUFLbkJoQixjQUFNLEVBQUVBLE1BTFc7QUFNbkJNLG1CQUFXLEVBQUVBO0FBTk0sT0FBZjtBQUhlLEtBQXZCO0FBWUEsVUFBTXNCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsZUFBY2IsRUFBRyxFQUFuQixFQUFzQlMsY0FBdEIsQ0FBNUI7QUFDQSxVQUFNO0FBQ0pNLFVBQUksRUFBRTtBQUFFcUIscUJBQUY7QUFBaUJDO0FBQWpCO0FBREYsUUFFRixNQUFNekIsUUFBUSxDQUFDSSxJQUFULEVBRlY7QUFJQXpDLGFBQVMsQ0FBQyxLQUFELENBQVQ7O0FBQ0EsUUFBSSxDQUFDNkQsYUFBTCxFQUFvQjtBQUNsQixZQUFNeEMsTUFBTSxDQUFDUyxJQUFQLENBQWEsT0FBTWdDLFdBQVksWUFBV3JELE1BQU8sRUFBakQsQ0FBTjtBQUNEOztBQUNEaUMsZUFBVztBQUNaLEdBcENEOztBQXNDQSxNQUFJNUQsT0FBSixFQUFhO0FBQ1gsd0JBQU87QUFBSyxlQUFTLEVBQUVRLHdEQUFNLENBQUNSLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRVEsd0RBQU0sQ0FBQ3lFLE1BQXZCO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUV6RSx3REFBTSxDQUFDMEUsTUFEcEI7QUFFRSxpQkFBTyxFQUFFLE1BQU07QUFDYmxELHdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0FpQixvQkFBUSxDQUFDQyxJQUFULEdBQWdCLEdBQWhCO0FBQ0QsV0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVVFO0FBQVEsbUJBQVMsRUFBRTFDLHdEQUFNLENBQUMwRSxNQUExQjtBQUFrQyxpQkFBTyxFQUFFUixJQUEzQztBQUFBLG9CQUNHekQsTUFBTSxHQUFHLFdBQUgsR0FBaUI7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFnQkU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDRTtBQUFPLG1CQUFTLEVBQUMseUJBQWpCO0FBQTJDLGVBQUssRUFBRWdCLFdBQWxEO0FBQStELHFCQUFXLEVBQUMsY0FBM0U7QUFBMEYsa0JBQVEsRUFBR2tELENBQUQsSUFBTztBQUFFakQsMEJBQWMsQ0FBQ2lELENBQUMsQ0FBQ3BDLE1BQUYsQ0FBUzFDLEtBQVYsQ0FBZDtBQUFnQztBQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUd3QixPQUFPLElBQUlBLE9BQU8sQ0FBQ3VELE1BQVIsR0FBaUIsQ0FBNUIsaUJBQ0M7QUFDRSxtQkFBUyxFQUFDLHlCQURaO0FBRUUsZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVCxXQUZUO0FBR0UsZUFBSyxFQUFFdEQsU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFIakM7QUFJRSxrQkFBUSxFQUFFM0IsUUFKWjtBQUFBLGtDQU1FO0FBQVEsaUJBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLEVBT0d5QixPQUFPLENBQUN5RCxHQUFSLENBQVksQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQWE7QUFDeEIsZ0NBQ0U7QUFBZ0IsbUJBQUssRUFBRUQsSUFBSSxDQUFDRSxHQUE1QjtBQUFBLHdCQUNHRixJQUFJLENBQUNFO0FBRFIsZUFBYUQsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBS0QsV0FOQSxDQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixFQW9CRzNELE9BQU8sSUFBSUEsT0FBTyxDQUFDdUQsTUFBUixHQUFpQixDQUE1QixpQkFBaUMscUVBQUMsc0RBQUQ7QUFBUyxlQUFLLEVBQUU7QUFBRU0saUJBQUssRUFBRSxPQUFUO0FBQWtCQyxvQkFBUSxFQUFFO0FBQTVCLFdBQWhCO0FBQWtELGlCQUFPLEVBQUUsTUFBTXhDLFFBQVEsQ0FBQ3BCLFNBQUQ7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBd0NFLHFFQUFDLHVEQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQUU2RCxpQkFBUyxFQUFFO0FBQWIsT0FEVDtBQUVFLFdBQUssRUFBQyxZQUZSO0FBR0UsYUFBTyxFQUFFLEtBSFg7QUFJRSxvQkFBYyxFQUFHckYsTUFBRCxJQUFZO0FBQzFCTyxzQkFBYyxDQUFFLEdBQUVQLE1BQU0sR0FBRyxFQUFHLElBQWhCLENBQWQ7QUFDRCxPQU5IO0FBQUEsOEJBUUUscUVBQUMsdURBQUQ7QUFBVyxhQUFLLEVBQUMsVUFBakI7QUFBNEIsZUFBTyxFQUFFLEtBQXJDO0FBQUEsZ0NBQ0UscUVBQUMsOERBQUQ7QUFDRSxnQkFBTSxFQUFFTSxXQURWO0FBRUUsZUFBSyxFQUFFTSxTQUZUO0FBR0Usa0JBQVEsRUFBRUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUUscUVBQUMsdURBQUQ7QUFBVyxlQUFLLEVBQUMsVUFBakI7QUFBNEIsaUJBQU8sRUFBRSxLQUFyQztBQUFBLGtDQUNFLHFFQUFDLDZEQUFEO0FBQ0Usa0JBQU0sRUFBRVAsV0FEVjtBQUVFLGlCQUFLLEVBQUVVLFFBRlQ7QUFHRSxvQkFBUSxFQUFFQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFNRSxxRUFBQyxvRUFBRDtBQUNFLGtCQUFNLEVBQUVYLFdBRFY7QUFFRSxpQkFBSyxFQUFFUSxPQUZUO0FBR0Usb0JBQVEsRUFBRUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUEyQkU7QUFBUSxjQUFNLEVBQUVHLFVBQWhCO0FBQTRCLGlCQUFTLEVBQUVqQix3REFBTSxDQUFDcUY7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhDRjtBQUFBLGtCQURGO0FBd0VELENBck9EOztBQXVPZWpGLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU13QixXQUFXLEdBQUcsQ0FBQy9CLEtBQUQsRUFBUXlGLEtBQVIsS0FBa0I7QUFDM0MsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NqRixzREFBUSxDQUFDVixLQUFELENBQXBEO0FBRUE4RCx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNOEIsT0FBTyxHQUFHQyxVQUFVLENBQUMsTUFBTTtBQUMvQkYsdUJBQWlCLENBQUMzRixLQUFELENBQWpCO0FBQ0QsS0FGeUIsRUFFdkJ5RixLQUZ1QixDQUExQjtBQUlBLFdBQU8sTUFBTTtBQUNYSyxrQkFBWSxDQUFDRixPQUFELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUM1RixLQUFELEVBQVF5RixLQUFSLENBUk0sQ0FBVDtBQVVBLFNBQU9DLGNBQVA7QUFDRCxDQWRNLEM7Ozs7Ozs7Ozs7O0FDRlAseUQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRWRpdG9ycy5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSmF2YXNjcmlwdEVkaXRvciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8RWRpdG9yIG1vZGU9XCJqYXZhc2NyaXB0XCIgdGl0bGU9e1wiSlNcIn0gey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIdG1sRWRpdG9yID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxFZGl0b3IgbW9kZT1cImh0bWxcIiB0aXRsZT17XCJIVE1MXCJ9IHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ3NzRWRpdG9yID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxFZGl0b3IgbW9kZT1cImNzc1wiIHRpdGxlPXtcIkNTU1wifSB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBXb3JrYXJvdW5kIGZvciAgaXNzdWU6ICBcIndpbmRvdyBpcyBub3QgZGVmaW5lZFwiXHJcbi8vIGl0IG9jY3VycmVkIHdoZW4gdHJ5aW5nIHRvIHJ1biB0aGUgIHJlbmRlciBvbiB0aGUgSGVyb2t1IHNlcnZlclxyXG4vLyBjcmVhdGVkIGEgc28tY2FsbGVkIE5vU1NSIGNvbXBvbmVudDpcclxuLy8gSSBoYWQgdG8gd29yayBhcm91bmQgYW4gaXNzdWUgd2l0aCBBY2VyRWRpdG9yLUNvbXBvbmVudCBub3QgYmVlaW5nIHByZXNlbnQgd2hpbGUgdGhlIHNlcnZlciB3YW50ZWQgdG8gcmVuZGVyIGl0XHJcbi8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FkdmFuY2VkLWZlYXR1cmVzL2R5bmFtaWMtaW1wb3J0XHJcbi8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FkdmFuY2VkLWZlYXR1cmVzL2R5bmFtaWMtaW1wb3J0XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXJlZHBhbG1lci9yYXp6bGUvaXNzdWVzLzExOTMjaXNzdWVjb21tZW50LTc1NDU5NjAwNVxyXG4vLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9AbmV4dC10b29scy9keW5hbWljXHJcbmNvbnN0IEFjZXJFZGl0b3IgPSBkeW5hbWljKFxyXG4gICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjZSA9IGF3YWl0IHJlcXVpcmUoXCJyZWFjdC1hY2VcIik7XHJcbiAgICAgICAgcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtaHRtbFwiKTtcclxuICAgICAgICByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWphdmFzY3JpcHRcIik7XHJcbiAgICAgICAgcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1jc3NcIik7XHJcbiAgICAgICAgcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtbW9ub2thaVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjZTtcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbG9hZGluZzogKCkgPT4gKFxyXG4gICAgICAgICAgICA8cD5Mb2FkaW5nPC9wPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgc3NyOiBmYWxzZSxcclxuICAgIH0sXHJcbik7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBFZGl0b3IgPSAoeyBtb2RlLCBvbkNoYW5nZSwgdmFsdWUsIHRpdGxlLCBoZWlnaHQgfSkgPT4ge1xyXG4gIHJldHVybiAgKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3JDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvclRpdGxlfT57dGl0bGV9PC9kaXY+XHJcbiAgICAgIDxBY2VyRWRpdG9yXHJcbiAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICB0aGVtZT1cIm1vbm9rYWlcIlxyXG4gICAgICAgIG5hbWU9e3RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICBmb250U2l6ZT17MTh9XHJcbiAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxyXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBzaG93UHJpbnRNYXJnaW49e3RydWV9XHJcbiAgICAgICAgc2hvd0d1dHRlcj17dHJ1ZX1cclxuICAgICAgICB0YWJTaXplPXsyfVxyXG4gICAgICAgIHNldE9wdGlvbnM9e3sgdXNlV29ya2VyOiBmYWxzZSB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlZGl0b3JUaXRsZVwiOiBcIkVkaXRvcnNfZWRpdG9yVGl0bGVfXzI0d3ZpXCIsXG5cdFwiZWRpdG9yQ29udGFpbmVyXCI6IFwiRWRpdG9yc19lZGl0b3JDb250YWluZXJfX2M4S3puXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCJyZWFjdC1zcGxpdC1wYW5lXCI7XG5cbmltcG9ydCB7IENzc0VkaXRvciwgSHRtbEVkaXRvciwgSmF2YXNjcmlwdEVkaXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXRvcnNcIjtcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSBcIi4uL3V0aWxzL3VzZURlYm91bmNlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEZpbmdlcnByaW50SlMgZnJvbSBcIkBmaW5nZXJwcmludGpzL2ZpbmdlcnByaW50anNcIjtcblxuaW1wb3J0IHsgQnNUcmFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2hlaWdodFZhbHVlLCBzZXRIZWlnaHRWYWx1ZV0gPSB1c2VTdGF0ZShcIjQ4NXB4XCIpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtodG1sVmFsdWUsIHNldEh0bWxWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2pzVmFsdWUsIHNldEpzVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjc3NWYWx1ZSwgc2V0Q3NzVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYW5lVmFsdWVzLCBzZXRwYW5lVmFsdWVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlcklELCBzZXRVc2VySURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Byb2plY3RJRCwgc2V0UHJvamVjdElEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgZGVib3VuY2VkSHRtbCA9IHVzZURlYm91bmNlKGh0bWxWYWx1ZSwgMTAwMCk7XG4gIGNvbnN0IGRlYm91bmNlZEpzID0gdXNlRGVib3VuY2UoanNWYWx1ZSwgMTAwMCk7XG4gIGNvbnN0IGRlYm91bmNlZENzcyA9IHVzZURlYm91bmNlKGNzc1ZhbHVlLCAxMDAwKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Zpc2l0b3JJRCwgc2V0VmlzaXRvcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7IGlkLCB1c2VyX2lkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKGA/aWQ9JHtldmVudC50YXJnZXQudmFsdWV9JnVzZXJfaWQ9JHt1c2VySUR9YCk7XG4gICAgICBzZXRQcm9qZWN0SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgc2V0UHJvamVjdElEKFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uRGVsZXRlKGlkKSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCB7IHN1Y2Nlc3MsIGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgc2V0UHJvamVjdElEKFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIGNvbnN0IGZwID0gYXdhaXQgRmluZ2VycHJpbnRKUy5sb2FkKCk7XG5cbiAgICAvLyBUaGUgRmluZ2VycHJpbnRKUyBhZ2VudCBpcyByZWFkeS5cbiAgICAvLyBHZXQgYSB2aXNpdG9yIGlkZW50aWZpZXIgd2hlbiB5b3UnZCBsaWtlIHRvLlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZwLmdldCgpO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgdmlzaXRvciBpZGVudGlmaWVyOlxuICAgIGNvbnN0IHZpc2l0b3JJZCA9IHJlc3VsdC52aXNpdG9ySWQ7XG4gICAgc2V0VXNlcklEKHZpc2l0b3JJZCk7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfTtcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvdXNlcnMvJHt2aXNpdG9ySWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS91c2Vycy8ke3Zpc2l0b3JJZH1gLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0UHJvamVjdChkYXRhKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3BlbnMvJHtpZH1gKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiLzQwNFwiKTtcbiAgICAgIH1cbiAgICAgIHNldFByb2plY3ROYW1lKGRhdGEucHJvamVjdE5hbWUpXG5cbiAgICAgIHNldEh0bWxWYWx1ZShkYXRhLmh0bWwpO1xuICAgICAgc2V0Q3NzVmFsdWUoZGF0YS5jc3MpO1xuICAgICAgc2V0SnNWYWx1ZShkYXRhLmpzKTtcbiAgICAgIHNldFByb2plY3RJRChpZCk7XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtpZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5xdWVyeSkge1xuICAgICAgc2V0VmlzaXRvcklEKHJvdXRlci5xdWVyeS51c2VyX2lkKTtcbiAgICB9XG4gIH0sIFt1c2VyX2lkXSk7XG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NzcyBqcyBodG1sIGNoYW5nZWQgQU5EIHBhbmVPdXRwdXQgaXMgU0VUIHdpdGggcGFuZU91dHB1dCBiZWVpbmcgJylcbiAgICBjb25zdCBwYW5lT3V0cHV0ID0gYDxodG1sPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVib3VuY2VkQ3NzfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRIdG1sfVxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRKc31cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgICAgICAgIDwvaHRtbD5gO1xuICAgIHNldHBhbmVWYWx1ZXMocGFuZU91dHB1dCk7XG5cbiAgICBnZXRQcm9qZWN0cygpO1xuICB9LCBbZGVib3VuY2VkSHRtbCwgZGVib3VuY2VkQ3NzLCBkZWJvdW5jZWRKc10pO1xuXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U2F2aW5nKHRydWUpO1xuICAgIHZhciBtZXRoID0gXCJQVVRcIjtcbiAgICBpZiAodmlzaXRvcklEKSB7XG4gICAgICBpZiAodmlzaXRvcklEID09IHVzZXJJRCkge1xuICAgICAgICBtZXRoID0gIWlkID8gXCJQVVRcIiA6IFwiUE9TVFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0aCA9IFwiUFVUXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGggPSBcIlBVVFwiO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IG1ldGgsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGh0bWw6IGh0bWxWYWx1ZSxcbiAgICAgICAgY3NzOiBjc3NWYWx1ZSxcbiAgICAgICAganM6IGpzVmFsdWUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdXNlcklEOiB1c2VySUQsXG4gICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVxuICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHVwZGF0ZWRSZWNvcmQsIG5ld1JlY29yZElkIH0sXG4gICAgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgaWYgKCF1cGRhdGVkUmVjb3JkKSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChgP2lkPSR7bmV3UmVjb3JkSWR9JnVzZXJfaWQ9JHt1c2VySUR9YCk7XG4gICAgfVxuICAgIGdldFByb2plY3RzKCk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UHJvamVjdElEKFwiXCIpO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5ld1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtzYXZlfT5cbiAgICAgICAgICAgIHtzYXZpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1pbnB1dFwiIHZhbHVlPXtwcm9qZWN0TmFtZX0gcGxhY2Vob2xkZXI9XCJQcm9qZWN0IG5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHsgc2V0UHJvamVjdE5hbWUoZS50YXJnZXQudmFsdWUpIH19PjwvaW5wdXQ+XG4gICAgICAgICAge3Byb2plY3QgJiYgcHJvamVjdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0SUQgPyBwcm9qZWN0SUQgOiBcIlwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Qcm9qZWN0SUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAge3Byb2plY3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5faWR9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7cHJvamVjdCAmJiBwcm9qZWN0Lmxlbmd0aCA+IDAgJiYgPEJzVHJhc2ggc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IDM2IH19IG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHByb2plY3RJRCl9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BsaXRQYW5lXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2MHB4XCIgfX1cbiAgICAgICAgc3BsaXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgbWluU2l6ZT17XCI1MCVcIn1cbiAgICAgICAgb25EcmFnRmluaXNoZWQ9eyhoZWlnaHQpID0+IHtcbiAgICAgICAgICBzZXRIZWlnaHRWYWx1ZShgJHtoZWlnaHQgLSA0MH1weGApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPXtcIjMzJVwifT5cbiAgICAgICAgICA8SHRtbEVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHRWYWx1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtodG1sVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0SHRtbFZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT17XCI1MCVcIn0+XG4gICAgICAgICAgICA8Q3NzRWRpdG9yXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtjc3NWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENzc1ZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxKYXZhc2NyaXB0RWRpdG9yXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtqc1ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SnNWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICA8aWZyYW1lIHNyY0RvYz17cGFuZVZhbHVlc30gY2xhc3NOYW1lPXtzdHlsZXMucHJldmlld0lmcmFtZX0gLz5cbiAgICAgIDwvU3BsaXRQYW5lPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcmV2aWV3SWZyYW1lXCI6IFwiaW5kZXhfcHJldmlld0lmcmFtZV9fejktb2pcIixcblx0XCJsb2FkaW5nXCI6IFwiaW5kZXhfbG9hZGluZ19fM3pEc0lcIixcblx0XCJoZWFkZXJcIjogXCJpbmRleF9oZWFkZXJfXzFwM21jXCIsXG5cdFwiYnV0dG9uXCI6IFwiaW5kZXhfYnV0dG9uX18xNGY3cVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGVib3VuY2UgPSAodmFsdWUsIGRlbGF5KSA9PiB7XHJcbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcclxuICAgIH0sIGRlbGF5KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFt2YWx1ZSwgZGVsYXldKTtcclxuXHJcbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmaW5nZXJwcmludGpzL2ZpbmdlcnByaW50anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWNzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtaHRtbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLW1vbm9rYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFjZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcGxpdC1wYW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9