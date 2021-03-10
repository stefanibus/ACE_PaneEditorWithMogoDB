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

    if (projectName == "") {
      alert("Please input project name");
      setSaving(false);
      return false;
    } else if (htmlValue == "") {
      alert("Please add html file");
      setSaving(false);
      return false;
    } else if (jsValue == "") {
      alert("Please add js file");
      setSaving(false);
      return false;
    } else if (cssValue == "") {
      alert("Please add css file");
      setSaving(false);
      return false;
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
      lineNumber: 185,
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
          lineNumber: 192,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
          onClick: save,
          children: saving ? "Saving..." : "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
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
          lineNumber: 207,
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
            lineNumber: 215,
            columnNumber: 15
          }, undefined), project.map((item, i) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item._id,
              children: item._id
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 19
            }, undefined);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, undefined), project && project.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__["BsTrash"], {
          style: {
            color: "white",
            fontSize: 36
          },
          onClick: () => onDelete(projectID)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 45
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
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
          lineNumber: 238,
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
            lineNumber: 244,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_4__["JavascriptEditor"], {
            height: heightValue,
            value: jsValue,
            onChange: setJsValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
        srcDoc: paneValues,
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.previewIframe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0b3JzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdG9ycy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlRGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtaHRtbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1tb25va2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFjZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3BsaXQtcGFuZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkphdmFzY3JpcHRFZGl0b3IiLCJwcm9wcyIsIkh0bWxFZGl0b3IiLCJDc3NFZGl0b3IiLCJBY2VyRWRpdG9yIiwiZHluYW1pYyIsImFjZSIsInJlcXVpcmUiLCJsb2FkaW5nIiwic3NyIiwiRWRpdG9yIiwibW9kZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0aXRsZSIsImhlaWdodCIsInN0eWxlcyIsImVkaXRvckNvbnRhaW5lciIsImVkaXRvclRpdGxlIiwidXNlV29ya2VyIiwiSW5kZXgiLCJoZWlnaHRWYWx1ZSIsInNldEhlaWdodFZhbHVlIiwidXNlU3RhdGUiLCJzZXRMb2FkaW5nIiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaHRtbFZhbHVlIiwic2V0SHRtbFZhbHVlIiwianNWYWx1ZSIsInNldEpzVmFsdWUiLCJjc3NWYWx1ZSIsInNldENzc1ZhbHVlIiwicGFuZVZhbHVlcyIsInNldHBhbmVWYWx1ZXMiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsInByb2plY3RJRCIsInNldFByb2plY3RJRCIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJkZWJvdW5jZWRIdG1sIiwidXNlRGVib3VuY2UiLCJkZWJvdW5jZWRKcyIsImRlYm91bmNlZENzcyIsInJvdXRlciIsInVzZVJvdXRlciIsInZpc2l0b3JJRCIsInNldFZpc2l0b3JJRCIsImlkIiwidXNlcl9pZCIsInF1ZXJ5IiwiZXZlbnQiLCJ0YXJnZXQiLCJwdXNoIiwibG9jYXRpb24iLCJocmVmIiwib25EZWxldGUiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImZldGNoIiwic3VjY2VzcyIsImRhdGEiLCJqc29uIiwiZ2V0UHJvamVjdHMiLCJmcCIsIkZpbmdlcnByaW50SlMiLCJsb2FkIiwicmVzdWx0IiwiZ2V0IiwidmlzaXRvcklkIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwic3RhdHVzIiwiaHRtbCIsImNzcyIsImpzIiwicGFuZU91dHB1dCIsInNhdmUiLCJtZXRoIiwiYWxlcnQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZWRSZWNvcmQiLCJuZXdSZWNvcmRJZCIsImhlYWRlciIsImJ1dHRvbiIsImUiLCJsZW5ndGgiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJpIiwiX2lkIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInByZXZpZXdJZnJhbWUiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ3pDLHNCQUFPLHFFQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUMsWUFBYjtBQUEwQixTQUFLLEVBQUU7QUFBakMsS0FBMkNBLEtBQTNDO0FBQUE7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Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0VkaXRvcnMubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEphdmFzY3JpcHRFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gPEVkaXRvciBtb2RlPVwiamF2YXNjcmlwdFwiIHRpdGxlPXtcIkpTXCJ9IHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSHRtbEVkaXRvciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8RWRpdG9yIG1vZGU9XCJodG1sXCIgdGl0bGU9e1wiSFRNTFwifSB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENzc0VkaXRvciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8RWRpdG9yIG1vZGU9XCJjc3NcIiB0aXRsZT17XCJDU1NcIn0gey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gV29ya2Fyb3VuZCBmb3IgIGlzc3VlOiAgXCJ3aW5kb3cgaXMgbm90IGRlZmluZWRcIlxyXG4vLyBpdCBvY2N1cnJlZCB3aGVuIHRyeWluZyB0byBydW4gdGhlICByZW5kZXIgb24gdGhlIEhlcm9rdSBzZXJ2ZXJcclxuLy8gY3JlYXRlZCBhIHNvLWNhbGxlZCBOb1NTUiBjb21wb25lbnQ6XHJcbi8vIEkgaGFkIHRvIHdvcmsgYXJvdW5kIGFuIGlzc3VlIHdpdGggQWNlckVkaXRvci1Db21wb25lbnQgbm90IGJlZWluZyBwcmVzZW50IHdoaWxlIHRoZSBzZXJ2ZXIgd2FudGVkIHRvIHJlbmRlciBpdFxyXG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9hZHZhbmNlZC1mZWF0dXJlcy9keW5hbWljLWltcG9ydFxyXG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9hZHZhbmNlZC1mZWF0dXJlcy9keW5hbWljLWltcG9ydFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFyZWRwYWxtZXIvcmF6emxlL2lzc3Vlcy8xMTkzI2lzc3VlY29tbWVudC03NTQ1OTYwMDVcclxuLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQG5leHQtdG9vbHMvZHluYW1pY1xyXG5jb25zdCBBY2VyRWRpdG9yID0gZHluYW1pYyhcclxuICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY2UgPSBhd2FpdCByZXF1aXJlKFwicmVhY3QtYWNlXCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtamF2YXNjcmlwdFwiKTtcclxuICAgICAgICByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWh0bWxcIik7XHJcbiAgICAgICAgcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtY3NzXCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLW1vbm9rYWlcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2U7XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvYWRpbmc6ICgpID0+IChcclxuICAgICAgICAgICAgPHA+TG9hZGluZzwvcD5cclxuICAgICAgICApLFxyXG4gICAgICAgIHNzcjogZmFsc2UsXHJcbiAgICB9LFxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgRWRpdG9yID0gKHsgbW9kZSwgb25DaGFuZ2UsIHZhbHVlLCB0aXRsZSwgaGVpZ2h0IH0pID0+IHtcclxuICByZXR1cm4gIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3JUaXRsZX0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICA8QWNlckVkaXRvclxyXG4gICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgdGhlbWU9XCJtb25va2FpXCJcclxuICAgICAgICBuYW1lPXt0aXRsZX1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgZm9udFNpemU9ezE4fVxyXG4gICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgc2hvd1ByaW50TWFyZ2luPXt0cnVlfVxyXG4gICAgICAgIHNob3dHdXR0ZXI9e3RydWV9XHJcbiAgICAgICAgdGFiU2l6ZT17Mn1cclxuICAgICAgICBzZXRPcHRpb25zPXt7IHVzZVdvcmtlcjogZmFsc2UgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZWRpdG9yVGl0bGVcIjogXCJFZGl0b3JzX2VkaXRvclRpdGxlX18yNHd2aVwiLFxuXHRcImVkaXRvckNvbnRhaW5lclwiOiBcIkVkaXRvcnNfZWRpdG9yQ29udGFpbmVyX19jOEt6blwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tIFwicmVhY3Qtc3BsaXQtcGFuZVwiO1xuXG5pbXBvcnQgeyBDc3NFZGl0b3IsIEh0bWxFZGl0b3IsIEphdmFzY3JpcHRFZGl0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FZGl0b3JzXCI7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gXCIuLi91dGlscy91c2VEZWJvdW5jZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBGaW5nZXJwcmludEpTIGZyb20gXCJAZmluZ2VycHJpbnRqcy9maW5nZXJwcmludGpzXCI7XG5cbmltcG9ydCB7IEJzVHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtoZWlnaHRWYWx1ZSwgc2V0SGVpZ2h0VmFsdWVdID0gdXNlU3RhdGUoXCI0ODVweFwiKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbaHRtbFZhbHVlLCBzZXRIdG1sVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtqc1ZhbHVlLCBzZXRKc1ZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3NzVmFsdWUsIHNldENzc1ZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFuZVZhbHVlcywgc2V0cGFuZVZhbHVlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9qZWN0SUQsIHNldFByb2plY3RJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IGRlYm91bmNlZEh0bWwgPSB1c2VEZWJvdW5jZShodG1sVmFsdWUsIDEwMDApO1xuICBjb25zdCBkZWJvdW5jZWRKcyA9IHVzZURlYm91bmNlKGpzVmFsdWUsIDEwMDApO1xuICBjb25zdCBkZWJvdW5jZWRDc3MgPSB1c2VEZWJvdW5jZShjc3NWYWx1ZSwgMTAwMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt2aXNpdG9ySUQsIHNldFZpc2l0b3JJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBpZCwgdXNlcl9pZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICByb3V0ZXIucHVzaChgP2lkPSR7ZXZlbnQudGFyZ2V0LnZhbHVlfSZ1c2VyX2lkPSR7dXNlcklEfWApO1xuICAgICAgc2V0UHJvamVjdElEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgIHNldFByb2plY3RJRChcIlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkRlbGV0ZShpZCkge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3BlbnMvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgeyBzdWNjZXNzLCBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgIHNldFByb2plY3RJRChcIlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBmcCA9IGF3YWl0IEZpbmdlcnByaW50SlMubG9hZCgpO1xuXG4gICAgLy8gVGhlIEZpbmdlcnByaW50SlMgYWdlbnQgaXMgcmVhZHkuXG4gICAgLy8gR2V0IGEgdmlzaXRvciBpZGVudGlmaWVyIHdoZW4geW91J2QgbGlrZSB0by5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmcC5nZXQoKTtcblxuICAgIC8vIFRoaXMgaXMgdGhlIHZpc2l0b3IgaWRlbnRpZmllcjpcbiAgICBjb25zdCB2aXNpdG9ySWQgPSByZXN1bHQudmlzaXRvcklkO1xuICAgIHNldFVzZXJJRCh2aXNpdG9ySWQpO1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH07XG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3VzZXJzLyR7dmlzaXRvcklkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvdXNlcnMvJHt2aXNpdG9ySWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldFByb2plY3QoZGF0YSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wZW5zLyR7aWR9YCk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi80MDRcIik7XG4gICAgICB9XG4gICAgICBzZXRQcm9qZWN0TmFtZShkYXRhLnByb2plY3ROYW1lKVxuXG4gICAgICBzZXRIdG1sVmFsdWUoZGF0YS5odG1sKTtcbiAgICAgIHNldENzc1ZhbHVlKGRhdGEuY3NzKTtcbiAgICAgIHNldEpzVmFsdWUoZGF0YS5qcyk7XG4gICAgICBzZXRQcm9qZWN0SUQoaWQpO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIucXVlcnkpIHtcbiAgICAgIHNldFZpc2l0b3JJRChyb3V0ZXIucXVlcnkudXNlcl9pZCk7XG4gICAgfVxuICB9LCBbdXNlcl9pZF0pO1xuXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjc3MganMgaHRtbCBjaGFuZ2VkIEFORCBwYW5lT3V0cHV0IGlzIFNFVCB3aXRoIHBhbmVPdXRwdXQgYmVlaW5nICcpXG4gICAgY29uc3QgcGFuZU91dHB1dCA9IGA8aHRtbD5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAke2RlYm91bmNlZENzc31cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVib3VuY2VkSHRtbH1cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVib3VuY2VkSnN9XG4gICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICAgICAgICA8L2h0bWw+YDtcbiAgICBzZXRwYW5lVmFsdWVzKHBhbmVPdXRwdXQpO1xuXG4gICAgZ2V0UHJvamVjdHMoKTtcbiAgfSwgW2RlYm91bmNlZEh0bWwsIGRlYm91bmNlZENzcywgZGVib3VuY2VkSnNdKTtcblxuICBjb25zdCBzYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICB2YXIgbWV0aCA9IFwiUFVUXCI7XG4gICAgaWYgKHZpc2l0b3JJRCkge1xuICAgICAgaWYgKHZpc2l0b3JJRCA9PSB1c2VySUQpIHtcbiAgICAgICAgbWV0aCA9ICFpZCA/IFwiUFVUXCIgOiBcIlBPU1RcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGggPSBcIlBVVFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXRoID0gXCJQVVRcIjtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5wdXQgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGh0bWxWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBhZGQgaHRtbCBmaWxlXCIpO1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoanNWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBhZGQganMgZmlsZVwiKTtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjc3NWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBhZGQgY3NzIGZpbGVcIik7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBtZXRoLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBodG1sOiBodG1sVmFsdWUsXG4gICAgICAgIGNzczogY3NzVmFsdWUsXG4gICAgICAgIGpzOiBqc1ZhbHVlLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHVzZXJJRDogdXNlcklELFxuICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWVcbiAgICAgIH0pLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3BlbnMvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YTogeyB1cGRhdGVkUmVjb3JkLCBuZXdSZWNvcmRJZCB9LFxuICAgIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIGlmICghdXBkYXRlZFJlY29yZCkge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goYD9pZD0ke25ld1JlY29yZElkfSZ1c2VyX2lkPSR7dXNlcklEfWApO1xuICAgIH1cbiAgICBnZXRQcm9qZWN0cygpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ30+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFByb2plY3RJRChcIlwiKTtcbiAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXdcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17c2F2ZX0+XG4gICAgICAgICAgICB7c2F2aW5nID8gXCJTYXZpbmcuLi5cIiA6IFwiU2F2ZVwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0taW5wdXRcIiB2YWx1ZT17cHJvamVjdE5hbWV9IHBsYWNlaG9sZGVyPVwiUHJvamVjdCBuYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFByb2plY3ROYW1lKGUudGFyZ2V0LnZhbHVlKSB9fT48L2lucHV0PlxuICAgICAgICAgIHtwcm9qZWN0ICYmIHByb2plY3QubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxuICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdElEID8gcHJvamVjdElEIDogXCJcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+UHJvamVjdElEPC9vcHRpb24+XG4gICAgICAgICAgICAgIHtwcm9qZWN0Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2l0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uX2lkfVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3Byb2plY3QgJiYgcHJvamVjdC5sZW5ndGggPiAwICYmIDxCc1RyYXNoIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiAzNiB9fSBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShwcm9qZWN0SUQpfS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwbGl0UGFuZVxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNjBweFwiIH19XG4gICAgICAgIHNwbGl0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgIG1pblNpemU9e1wiNTAlXCJ9XG4gICAgICAgIG9uRHJhZ0ZpbmlzaGVkPXsoaGVpZ2h0KSA9PiB7XG4gICAgICAgICAgc2V0SGVpZ2h0VmFsdWUoYCR7aGVpZ2h0IC0gNDB9cHhgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT17XCIzMyVcIn0+XG4gICAgICAgICAgPEh0bWxFZGl0b3JcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICB2YWx1ZT17aHRtbFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldEh0bWxWYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9e1wiNTAlXCJ9PlxuICAgICAgICAgICAgPENzc0VkaXRvclxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodFZhbHVlfVxuICAgICAgICAgICAgICB2YWx1ZT17Y3NzVmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDc3NWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SmF2YXNjcmlwdEVkaXRvclxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodFZhbHVlfVxuICAgICAgICAgICAgICB2YWx1ZT17anNWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEpzVmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgPGlmcmFtZSBzcmNEb2M9e3BhbmVWYWx1ZXN9IGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXdJZnJhbWV9IC8+XG4gICAgICA8L1NwbGl0UGFuZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJldmlld0lmcmFtZVwiOiBcImluZGV4X3ByZXZpZXdJZnJhbWVfX3o5LW9qXCIsXG5cdFwibG9hZGluZ1wiOiBcImluZGV4X2xvYWRpbmdfXzN6RHNJXCIsXG5cdFwiaGVhZGVyXCI6IFwiaW5kZXhfaGVhZGVyX18xcDNtY1wiLFxuXHRcImJ1dHRvblwiOiBcImluZGV4X2J1dHRvbl9fMTRmN3FcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZURlYm91bmNlID0gKHZhbHVlLCBkZWxheSkgPT4ge1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9LCBkZWxheSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbdmFsdWUsIGRlbGF5XSk7XHJcblxyXG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmluZ2VycHJpbnRqcy9maW5nZXJwcmludGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWh0bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1tb25va2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hY2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3BsaXQtcGFuZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==