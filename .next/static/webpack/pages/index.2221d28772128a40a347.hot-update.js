webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-split-pane */ "./node_modules/react-split-pane/dist/index.esm.js");
/* harmony import */ var _components_Editors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Editors */ "./components/Editors.js");
/* harmony import */ var _utils_useDebounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useDebounce */ "./utils/useDebounce.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fingerprintjs/fingerprintjs */ "./node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");





var _jsxFileName = "C:\\Users\\stefa\\Documents\\gitlab\\WBS\\ServerSide\\CodePen_Next\\my-code-pen\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("485px"),
      heightValue = _useState[0],
      setHeightValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      saving = _useState3[0],
      setSaving = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      htmlValue = _useState4[0],
      setHtmlValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      jsValue = _useState5[0],
      setJsValue = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      cssValue = _useState6[0],
      setCssValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      paneValues = _useState7[0],
      setpaneValues = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      userID = _useState8[0],
      setUserID = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      project = _useState9[0],
      setProject = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      projectID = _useState10[0],
      setProjectID = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      projectName = _useState11[0],
      setProjectName = _useState11[1];

  var debouncedHtml = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_7__["useDebounce"])(htmlValue, 1000);
  var debouncedJs = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_7__["useDebounce"])(jsValue, 1000);
  var debouncedCss = Object(_utils_useDebounce__WEBPACK_IMPORTED_MODULE_7__["useDebounce"])(cssValue, 1000);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      visitorID = _useState12[0],
      setVisitorID = _useState12[1];

  var _router$query = router.query,
      id = _router$query.id,
      user_id = _router$query.user_id;

  function onChange(event) {
    if (event.target.value != "") {
      router.push("?id=".concat(event.target.value, "&user_id=").concat(userID));
      setProjectID(event.target.value);
    } else {
      location.href = "/";
      setProjectID("");
    }
  }

  function onDelete(_x) {
    return _onDelete.apply(this, arguments);
  }

  function _onDelete() {
    _onDelete = Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id) {
      var requestOptions, response, _yield$response$json4, success, data;

      return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              requestOptions = {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
              };
              _context3.next = 3;
              return fetch("../api/pens/".concat(id), requestOptions);

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return response.json();

            case 6:
              _yield$response$json4 = _context3.sent;
              success = _yield$response$json4.success;
              data = _yield$response$json4.data;

              if (success) {
                location.href = "/";
                setProjectID("");
              }

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onDelete.apply(this, arguments);
  }

  function getProjects() {
    return _getProjects.apply(this, arguments);
  }

  function _getProjects() {
    _getProjects = Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var fp, result, visitorId, requestOptions, response, _yield$response$json5, data;

      return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_9__["default"].load();

            case 2:
              fp = _context4.sent;
              _context4.next = 5;
              return fp.get();

            case 5:
              result = _context4.sent;
              // This is the visitor identifier:
              visitorId = result.visitorId;
              setUserID(visitorId);
              requestOptions = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              }; // const response = await fetch(`../api/users/${visitorId}`, requestOptions);

              _context4.next = 11;
              return fetch("../api/users/".concat(visitorId), requestOptions);

            case 11:
              response = _context4.sent;
              _context4.next = 14;
              return response.json();

            case 14:
              _yield$response$json5 = _context4.sent;
              data = _yield$response$json5.data;
              setProject(data);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _getProjects.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response, _yield$response$json, data;

        return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("../api/pens/".concat(id));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                _yield$response$json = _context.sent;
                data = _yield$response$json.data;

                if (!(response.status !== 200)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 10;
                return router.push("/404");

              case 10:
                setProjectName(data.projectName);
                setHtmlValue(data.html);
                setCssValue(data.css);
                setJsValue(data.js);
                setProjectID(id);
                setLoading(false);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    if (id) {
      setLoading(true);
      fetchData();
    } else {
      setLoading(false);
    }
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (router.query) {
      setVisitorID(router.query.user_id);
    }
  }, [user_id]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // console.log('css js html changed AND paneOutput is SET with paneOutput beeing ')
    var paneOutput = "<html>\n                    <style>\n                    ".concat(debouncedCss, "\n                    </style>\n                    <body>\n                    ").concat(debouncedHtml, "\n                    <script type=\"text/javascript\">\n                    ").concat(debouncedJs, "\n                    </script>\n                    </body>\n                  </html>");
    setpaneValues(paneOutput);
    getProjects();
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  var save = /*#__PURE__*/function () {
    var _ref = Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var meth, requestOptions, response, _yield$response$json2, _yield$response$json3, updatedRecord, newRecordId;

      return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setSaving(true);
              meth = "PUT";

              if (visitorID) {
                if (visitorID == userID) {
                  meth = !id ? "PUT" : "POST";
                } else {
                  meth = "PUT";
                }
              } else {
                meth = "PUT";
              } // if (projectName == "") {
              //   // alert("Please input project name");
              //   // setSaving(false);
              //   return false;
              // } else if (htmlValue == "") {
              //   // alert("Please add html file");
              //   // setSaving(false);
              //   return false;
              // }
              // else if (jsValue == "") {
              //   // alert("Please add js file");
              //   // setSaving(false);
              //   return false;
              // } else if (cssValue == "") {
              //   // alert("Please add css file");
              //   // setSaving(false);
              //   return false;
              // }


              requestOptions = {
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
              _context2.next = 6;
              return fetch("../api/pens/".concat(id), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              _yield$response$json2 = _context2.sent;
              _yield$response$json3 = _yield$response$json2.data;
              updatedRecord = _yield$response$json3.updatedRecord;
              newRecordId = _yield$response$json3.newRecordId;
              setSaving(false);

              if (updatedRecord) {
                _context2.next = 17;
                break;
              }

              _context2.next = 17;
              return router.push("?id=".concat(newRecordId, "&user_id=").concat(userID));

            case 17:
              getProjects();

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }();

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.loading,
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button,
          onClick: function onClick() {
            setProjectID("");
            location.href = "/";
          },
          children: "New"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button,
          onClick: save,
          children: saving ? "Saving..." : "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "custom-select",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control form-input",
          value: projectName,
          placeholder: "Project name",
          onChange: function onChange(e) {
            setProjectName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, _this), project && project.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
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
          }, _this), project.map(function (item, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item._id,
              children: item._id
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, _this), project && project.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__["BsTrash"], {
          style: {
            color: "white",
            fontSize: 36
          },
          onClick: function onClick() {
            return onDelete(projectID);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 45
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_split_pane__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        marginTop: "60px"
      },
      split: "horizontal",
      minSize: "50%",
      onDragFinished: function onDragFinished(height) {
        setHeightValue("".concat(height - 40, "px"));
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_split_pane__WEBPACK_IMPORTED_MODULE_5__["default"], {
        split: "vertical",
        minSize: "33%",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_6__["HtmlEditor"], {
          height: heightValue,
          value: htmlValue,
          onChange: setHtmlValue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_split_pane__WEBPACK_IMPORTED_MODULE_5__["default"], {
          split: "vertical",
          minSize: "50%",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_6__["CssEditor"], {
            height: heightValue,
            value: cssValue,
            onChange: setCssValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Editors__WEBPACK_IMPORTED_MODULE_6__["JavascriptEditor"], {
            height: heightValue,
            value: jsValue,
            onChange: setJsValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
        srcDoc: paneValues,
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.previewIframe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Index, "sZXATD4xszW3JI/mjv6h445+d20=", false, function () {
  return [_utils_useDebounce__WEBPACK_IMPORTED_MODULE_7__["useDebounce"], _utils_useDebounce__WEBPACK_IMPORTED_MODULE_7__["useDebounce"], _utils_useDebounce__WEBPACK_IMPORTED_MODULE_7__["useDebounce"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImhlaWdodFZhbHVlIiwic2V0SGVpZ2h0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNhdmluZyIsInNldFNhdmluZyIsImh0bWxWYWx1ZSIsInNldEh0bWxWYWx1ZSIsImpzVmFsdWUiLCJzZXRKc1ZhbHVlIiwiY3NzVmFsdWUiLCJzZXRDc3NWYWx1ZSIsInBhbmVWYWx1ZXMiLCJzZXRwYW5lVmFsdWVzIiwidXNlcklEIiwic2V0VXNlcklEIiwicHJvamVjdCIsInNldFByb2plY3QiLCJwcm9qZWN0SUQiLCJzZXRQcm9qZWN0SUQiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiZGVib3VuY2VkSHRtbCIsInVzZURlYm91bmNlIiwiZGVib3VuY2VkSnMiLCJkZWJvdW5jZWRDc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ2aXNpdG9ySUQiLCJzZXRWaXNpdG9ySUQiLCJxdWVyeSIsImlkIiwidXNlcl9pZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJsb2NhdGlvbiIsImhyZWYiLCJvbkRlbGV0ZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJnZXRQcm9qZWN0cyIsIkZpbmdlcnByaW50SlMiLCJsb2FkIiwiZnAiLCJnZXQiLCJyZXN1bHQiLCJ2aXNpdG9ySWQiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJzdGF0dXMiLCJodG1sIiwiY3NzIiwianMiLCJwYW5lT3V0cHV0Iiwic2F2ZSIsIm1ldGgiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZWRSZWNvcmQiLCJuZXdSZWNvcmRJZCIsInN0eWxlcyIsImhlYWRlciIsImJ1dHRvbiIsImUiLCJsZW5ndGgiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJpIiwiX2lkIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImhlaWdodCIsInByZXZpZXdJZnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQyxPQUFELENBRDVCO0FBQUEsTUFDWEMsV0FEVztBQUFBLE1BQ0VDLGNBREY7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsSUFBRCxDQUhwQjtBQUFBLE1BR1hHLE9BSFc7QUFBQSxNQUdGQyxVQUhFOztBQUFBLG1CQUlVSixzREFBUSxDQUFDLEtBQUQsQ0FKbEI7QUFBQSxNQUlYSyxNQUpXO0FBQUEsTUFJSEMsU0FKRzs7QUFBQSxtQkFNZ0JOLHNEQUFRLENBQUMsRUFBRCxDQU54QjtBQUFBLE1BTVhPLFNBTlc7QUFBQSxNQU1BQyxZQU5BOztBQUFBLG1CQU9ZUixzREFBUSxDQUFDLEVBQUQsQ0FQcEI7QUFBQSxNQU9YUyxPQVBXO0FBQUEsTUFPRkMsVUFQRTs7QUFBQSxtQkFRY1Ysc0RBQVEsQ0FBQyxFQUFELENBUnRCO0FBQUEsTUFRWFcsUUFSVztBQUFBLE1BUURDLFdBUkM7O0FBQUEsbUJBU2tCWixzREFBUSxDQUFDLEVBQUQsQ0FUMUI7QUFBQSxNQVNYYSxVQVRXO0FBQUEsTUFTQ0MsYUFURDs7QUFBQSxtQkFVVWQsc0RBQVEsQ0FBQyxFQUFELENBVmxCO0FBQUEsTUFVWGUsTUFWVztBQUFBLE1BVUhDLFNBVkc7O0FBQUEsbUJBV1loQixzREFBUSxDQUFDLEVBQUQsQ0FYcEI7QUFBQSxNQVdYaUIsT0FYVztBQUFBLE1BV0ZDLFVBWEU7O0FBQUEsb0JBWWdCbEIsc0RBQVEsQ0FBQyxFQUFELENBWnhCO0FBQUEsTUFZWG1CLFNBWlc7QUFBQSxNQVlBQyxZQVpBOztBQUFBLG9CQWFv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ZUFSRixlQTJCRTtBQUFRLGNBQU0sRUFBRUcsVUFBaEI7QUFBNEIsaUJBQVMsRUFBRTBELHdEQUFNLENBQUNjO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeENGO0FBQUEsa0JBREY7QUF3RUQsQ0F2UEQ7O0dBQU10RixLO1VBZWtCeUIsOEQsRUFDRkEsOEQsRUFDQ0EsOEQsRUFFTkkscUQ7OztLQW5CWDdCLEs7QUF5UFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyMjFkMjg3NzIxMjhhNDBhMzQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCJyZWFjdC1zcGxpdC1wYW5lXCI7XG5cbmltcG9ydCB7IENzc0VkaXRvciwgSHRtbEVkaXRvciwgSmF2YXNjcmlwdEVkaXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXRvcnNcIjtcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSBcIi4uL3V0aWxzL3VzZURlYm91bmNlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEZpbmdlcnByaW50SlMgZnJvbSBcIkBmaW5nZXJwcmludGpzL2ZpbmdlcnByaW50anNcIjtcblxuaW1wb3J0IHsgQnNUcmFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2hlaWdodFZhbHVlLCBzZXRIZWlnaHRWYWx1ZV0gPSB1c2VTdGF0ZShcIjQ4NXB4XCIpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtodG1sVmFsdWUsIHNldEh0bWxWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2pzVmFsdWUsIHNldEpzVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjc3NWYWx1ZSwgc2V0Q3NzVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYW5lVmFsdWVzLCBzZXRwYW5lVmFsdWVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlcklELCBzZXRVc2VySURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Byb2plY3RJRCwgc2V0UHJvamVjdElEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgZGVib3VuY2VkSHRtbCA9IHVzZURlYm91bmNlKGh0bWxWYWx1ZSwgMTAwMCk7XG4gIGNvbnN0IGRlYm91bmNlZEpzID0gdXNlRGVib3VuY2UoanNWYWx1ZSwgMTAwMCk7XG4gIGNvbnN0IGRlYm91bmNlZENzcyA9IHVzZURlYm91bmNlKGNzc1ZhbHVlLCAxMDAwKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Zpc2l0b3JJRCwgc2V0VmlzaXRvcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7IGlkLCB1c2VyX2lkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKGA/aWQ9JHtldmVudC50YXJnZXQudmFsdWV9JnVzZXJfaWQ9JHt1c2VySUR9YCk7XG4gICAgICBzZXRQcm9qZWN0SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgc2V0UHJvamVjdElEKFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uRGVsZXRlKGlkKSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCB7IHN1Y2Nlc3MsIGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgc2V0UHJvamVjdElEKFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIGNvbnN0IGZwID0gYXdhaXQgRmluZ2VycHJpbnRKUy5sb2FkKCk7XG5cbiAgICAvLyBUaGUgRmluZ2VycHJpbnRKUyBhZ2VudCBpcyByZWFkeS5cbiAgICAvLyBHZXQgYSB2aXNpdG9yIGlkZW50aWZpZXIgd2hlbiB5b3UnZCBsaWtlIHRvLlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZwLmdldCgpO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgdmlzaXRvciBpZGVudGlmaWVyOlxuICAgIGNvbnN0IHZpc2l0b3JJZCA9IHJlc3VsdC52aXNpdG9ySWQ7XG4gICAgc2V0VXNlcklEKHZpc2l0b3JJZCk7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfTtcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvdXNlcnMvJHt2aXNpdG9ySWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS91c2Vycy8ke3Zpc2l0b3JJZH1gLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0UHJvamVjdChkYXRhKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3BlbnMvJHtpZH1gKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiLzQwNFwiKTtcbiAgICAgIH1cbiAgICAgIHNldFByb2plY3ROYW1lKGRhdGEucHJvamVjdE5hbWUpXG5cbiAgICAgIHNldEh0bWxWYWx1ZShkYXRhLmh0bWwpO1xuICAgICAgc2V0Q3NzVmFsdWUoZGF0YS5jc3MpO1xuICAgICAgc2V0SnNWYWx1ZShkYXRhLmpzKTtcbiAgICAgIHNldFByb2plY3RJRChpZCk7XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtpZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5xdWVyeSkge1xuICAgICAgc2V0VmlzaXRvcklEKHJvdXRlci5xdWVyeS51c2VyX2lkKTtcbiAgICB9XG4gIH0sIFt1c2VyX2lkXSk7XG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NzcyBqcyBodG1sIGNoYW5nZWQgQU5EIHBhbmVPdXRwdXQgaXMgU0VUIHdpdGggcGFuZU91dHB1dCBiZWVpbmcgJylcbiAgICBjb25zdCBwYW5lT3V0cHV0ID0gYDxodG1sPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVib3VuY2VkQ3NzfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRIdG1sfVxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRKc31cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgICAgICAgIDwvaHRtbD5gO1xuICAgIHNldHBhbmVWYWx1ZXMocGFuZU91dHB1dCk7XG5cbiAgICBnZXRQcm9qZWN0cygpO1xuICB9LCBbZGVib3VuY2VkSHRtbCwgZGVib3VuY2VkQ3NzLCBkZWJvdW5jZWRKc10pO1xuXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U2F2aW5nKHRydWUpO1xuICAgIHZhciBtZXRoID0gXCJQVVRcIjtcbiAgICBpZiAodmlzaXRvcklEKSB7XG4gICAgICBpZiAodmlzaXRvcklEID09IHVzZXJJRCkge1xuICAgICAgICBtZXRoID0gIWlkID8gXCJQVVRcIiA6IFwiUE9TVFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0aCA9IFwiUFVUXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGggPSBcIlBVVFwiO1xuICAgIH1cblxuICAgIC8vIGlmIChwcm9qZWN0TmFtZSA9PSBcIlwiKSB7XG4gICAgLy8gICAvLyBhbGVydChcIlBsZWFzZSBpbnB1dCBwcm9qZWN0IG5hbWVcIik7XG4gICAgLy8gICAvLyBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH0gZWxzZSBpZiAoaHRtbFZhbHVlID09IFwiXCIpIHtcbiAgICAvLyAgIC8vIGFsZXJ0KFwiUGxlYXNlIGFkZCBodG1sIGZpbGVcIik7XG4gICAgLy8gICAvLyBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChqc1ZhbHVlID09IFwiXCIpIHtcbiAgICAvLyAgIC8vIGFsZXJ0KFwiUGxlYXNlIGFkZCBqcyBmaWxlXCIpO1xuICAgIC8vICAgLy8gc2V0U2F2aW5nKGZhbHNlKTtcbiAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9IGVsc2UgaWYgKGNzc1ZhbHVlID09IFwiXCIpIHtcbiAgICAvLyAgIC8vIGFsZXJ0KFwiUGxlYXNlIGFkZCBjc3MgZmlsZVwiKTtcbiAgICAvLyAgIC8vIHNldFNhdmluZyhmYWxzZSk7XG4gICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IG1ldGgsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGh0bWw6IGh0bWxWYWx1ZSxcbiAgICAgICAgY3NzOiBjc3NWYWx1ZSxcbiAgICAgICAganM6IGpzVmFsdWUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdXNlcklEOiB1c2VySUQsXG4gICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVxuICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHVwZGF0ZWRSZWNvcmQsIG5ld1JlY29yZElkIH0sXG4gICAgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgaWYgKCF1cGRhdGVkUmVjb3JkKSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChgP2lkPSR7bmV3UmVjb3JkSWR9JnVzZXJfaWQ9JHt1c2VySUR9YCk7XG4gICAgfVxuICAgIGdldFByb2plY3RzKCk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UHJvamVjdElEKFwiXCIpO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5ld1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtzYXZlfT5cbiAgICAgICAgICAgIHtzYXZpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1pbnB1dFwiIHZhbHVlPXtwcm9qZWN0TmFtZX0gcGxhY2Vob2xkZXI9XCJQcm9qZWN0IG5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHsgc2V0UHJvamVjdE5hbWUoZS50YXJnZXQudmFsdWUpIH19PjwvaW5wdXQ+XG4gICAgICAgICAge3Byb2plY3QgJiYgcHJvamVjdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0SUQgPyBwcm9qZWN0SUQgOiBcIlwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Qcm9qZWN0SUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAge3Byb2plY3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5faWR9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7cHJvamVjdCAmJiBwcm9qZWN0Lmxlbmd0aCA+IDAgJiYgPEJzVHJhc2ggc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IDM2IH19IG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHByb2plY3RJRCl9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BsaXRQYW5lXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2MHB4XCIgfX1cbiAgICAgICAgc3BsaXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgbWluU2l6ZT17XCI1MCVcIn1cbiAgICAgICAgb25EcmFnRmluaXNoZWQ9eyhoZWlnaHQpID0+IHtcbiAgICAgICAgICBzZXRIZWlnaHRWYWx1ZShgJHtoZWlnaHQgLSA0MH1weGApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPXtcIjMzJVwifT5cbiAgICAgICAgICA8SHRtbEVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHRWYWx1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtodG1sVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0SHRtbFZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT17XCI1MCVcIn0+XG4gICAgICAgICAgICA8Q3NzRWRpdG9yXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtjc3NWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENzc1ZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxKYXZhc2NyaXB0RWRpdG9yXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtqc1ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SnNWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICA8aWZyYW1lIHNyY0RvYz17cGFuZVZhbHVlc30gY2xhc3NOYW1lPXtzdHlsZXMucHJldmlld0lmcmFtZX0gLz5cbiAgICAgIDwvU3BsaXRQYW5lPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9