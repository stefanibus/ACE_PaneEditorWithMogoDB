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
    _onDelete = Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id) {
      var requestOptions, response, _yield$response$json4, success, data;

      return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              requestOptions = {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
              };
              _context4.next = 3;
              return fetch("../api/pens/".concat(id), requestOptions);

            case 3:
              response = _context4.sent;
              _context4.next = 6;
              return response.json();

            case 6:
              _yield$response$json4 = _context4.sent;
              success = _yield$response$json4.success;
              data = _yield$response$json4.data;

              if (success) {
                location.href = "/";
                setProjectID("");
              }

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onDelete.apply(this, arguments);
  }

  function getProjects() {
    return _getProjects.apply(this, arguments);
  }

  function _getProjects() {
    _getProjects = Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var fp, result, visitorId, requestOptions, response, _yield$response$json5, data;

      return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_9__["default"].load();

            case 2:
              fp = _context5.sent;
              _context5.next = 5;
              return fp.get();

            case 5:
              result = _context5.sent;
              // This is the visitor identifier:
              visitorId = result.visitorId;
              setUserID(visitorId);
              requestOptions = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              }; // const response = await fetch(`../api/users/${visitorId}`, requestOptions);

              _context5.next = 11;
              return fetch("../api/users/".concat(visitorId), requestOptions);

            case 11:
              response = _context5.sent;
              _context5.next = 14;
              return response.json();

            case 14:
              _yield$response$json5 = _context5.sent;
              data = _yield$response$json5.data;
              setProject(data);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var paneOutput;
    return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // console.log('css js html changed AND paneOutput is SET with paneOutput beeing ')
            paneOutput = "<html>\n                    <style>\n                    ".concat(debouncedCss, "\n                    </style>\n                    <body>\n                    ").concat(debouncedHtml, "\n                    <script type=\"text/javascript\">\n                    ").concat(debouncedJs, "\n                    </script>\n                    </body>\n                  </html>");
            setpaneValues(paneOutput);
            getProjects();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [debouncedHtml, debouncedCss, debouncedJs]);

  var save = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var meth, requestOptions, response, _yield$response$json2, _yield$response$json3, updatedRecord, newRecordId;

      return C_Users_stefa_Documents_gitlab_WBS_ServerSide_CodePen_Next_my_code_pen_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
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
              }

              if (!(projectName == "")) {
                _context3.next = 9;
                break;
              }

              alert("Please input project name");
              setSaving(false);
              return _context3.abrupt("return", false);

            case 9:
              if (!(htmlValue == "")) {
                _context3.next = 15;
                break;
              }

              alert("Please add html file");
              setSaving(false);
              return _context3.abrupt("return", false);

            case 15:
              if (!(jsValue == "")) {
                _context3.next = 21;
                break;
              }

              alert("Please add js file");
              setSaving(false);
              return _context3.abrupt("return", false);

            case 21:
              if (!(cssValue == "")) {
                _context3.next = 25;
                break;
              }

              alert("Please add css file");
              setSaving(false);
              return _context3.abrupt("return", false);

            case 25:
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
              _context3.next = 28;
              return fetch("../api/pens/".concat(id), requestOptions);

            case 28:
              response = _context3.sent;
              _context3.next = 31;
              return response.json();

            case 31:
              _yield$response$json2 = _context3.sent;
              _yield$response$json3 = _yield$response$json2.data;
              updatedRecord = _yield$response$json3.updatedRecord;
              newRecordId = _yield$response$json3.newRecordId;
              setSaving(false);

              if (updatedRecord) {
                _context3.next = 39;
                break;
              }

              _context3.next = 39;
              return router.push("?id=".concat(newRecordId, "&user_id=").concat(userID));

            case 39:
              getProjects();

            case 40:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function save() {
      return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImhlaWdodFZhbHVlIiwic2V0SGVpZ2h0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNhdmluZyIsInNldFNhdmluZyIsImh0bWxWYWx1ZSIsInNldEh0bWxWYWx1ZSIsImpzVmFsdWUiLCJzZXRKc1ZhbHVlIiwiY3NzVmFsdWUiLCJzZXRDc3NWYWx1ZSIsInBhbmVWYWx1ZXMiLCJzZXRwYW5lVmFsdWVzIiwidXNlcklEIiwic2V0VXNlcklEIiwicHJvamVjdCIsInNldFByb2plY3QiLCJwcm9qZWN0SUQiLCJzZXRQcm9qZWN0SUQiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiZGVib3VuY2VkSHRtbCIsInVzZURlYm91bmNlIiwiZGVib3VuY2VkSnMiLCJkZWJvdW5jZWRDc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ2aXNpdG9ySUQiLCJzZXRWaXNpdG9ySUQiLCJxdWVyeSIsImlkIiwidXNlcl9pZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJsb2NhdGlvbiIsImhyZWYiLCJvbkRlbGV0ZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJnZXRQcm9qZWN0cyIsIkZpbmdlcnByaW50SlMiLCJsb2FkIiwiZnAiLCJnZXQiLCJyZXN1bHQiLCJ2aXNpdG9ySWQiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJzdGF0dXMiLCJodG1sIiwiY3NzIiwianMiLCJwYW5lT3V0cHV0Iiwic2F2ZSIsIm1ldGgiLCJhbGVydCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlZFJlY29yZCIsIm5ld1JlY29yZElkIiwic3R5bGVzIiwiaGVhZGVyIiwiYnV0dG9uIiwiZSIsImxlbmd0aCIsIndpZHRoIiwibWFwIiwiaXRlbSIsImkiLCJfaWQiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwiaGVpZ2h0IiwicHJldmlld0lmcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ29CQyxzREFBUSxDQUFDLE9BQUQsQ0FENUI7QUFBQSxNQUNYQyxXQURXO0FBQUEsTUFDRUMsY0FERjs7QUFBQSxtQkFHWUYsc0RBQVEsQ0FBQyxJQUFELENBSHBCO0FBQUEsTUFHWEcsT0FIVztBQUFBLE1BR0ZDLFVBSEU7O0FBQUEsbUJBSVVKLHNEQUFRLENBQUMsS0FBRCxDQUpsQjtBQUFBLE1BSVhLLE1BSlc7QUFBQSxNQUlIQyxTQUpHOztBQUFBLG1CQU1nQk4sc0RBQVEsQ0FBQyxFQUFELENBTnhCO0FBQUEsTUFNWE8sU0FOVztBQUFBLE1BTUFDLFlBTkE7O0FBQUEsbUJBT1lSLHNEQUFRLENBQUMsRUFBRCxDQVBwQjtBQUFBLE1BT1hTLE9BUFc7QUFBQSxNQU9GQyxVQVBFOztBQUFBLG1CQVFjVixzREFBUSxDQUFDLEVBQUQsQ0FSdEI7QUFBQSxNQVFYVyxRQVJXO0FBQUEsTUFRREMsV0FSQzs7QUFBQSxtQkFTa0JaLHNEQUFRLENBQUMsRUFBRCxDQVQxQjtBQUFBLE1BU1hhLFVBVFc7QUFBQSxNQVNDQyxhQVREOztBQUFBLG1CQVVVZCxzREFBUSxDQUFDLEVBQUQsQ0FWbEI7QUFBQSxNQVVYZSxNQVZXO0FBQUEsTUFVSEMsU0FWRzs7QUFBQSxtQkFXWWhCLHNEQUFRLENBQUMsRUFBRCxDQVhwQjtBQUFBLE1BV1hpQixPQVhXO0FBQUEsTUFXRkMsVUFYRTs7QUFBQSxvQkFZZ0JsQixzREFBUSxDQUFDLEVBQUQsQ0FaeEI7QUFBQSxNQVlYbUIsU0FaVztBQUFBLE1BWUFDLFlBWkE7O0FBQUEsb0JBYW9CcEIsc0RBQVEsQ0FBQyxFQUFELENBYjVCO0FBQUEsTUFhWHFCLFdBYlc7QUFBQSxNQWFFQyxjQWJGOztBQWVsQixNQUFNQyxhQUFhLEdBQUdDLHNFQUFXLENBQUNqQixTQUFELEVBQVksSUFBWixDQUFqQztBQUNBLE1BQU1rQixXQUFXLEdBQUdELHNFQUFXLENBQUNmLE9BQUQsRUFBVSxJQUFWLENBQS9CO0FBQ0EsTUFBTWlCLFlBQVksR0FBR0Ysc0VBQVcsQ0FBQ2IsUUFBRCxFQUFXLElBQVgsQ0FBaEM7QUFFQSxNQUFNZ0IsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFuQmtCLG9CQW9CZ0I1QixzREFBUSxDQUFDLEVBQUQsQ0FwQnhCO0FBQUEsTUFvQlg2QixTQXBCVztBQUFBLE1Bb0JBQyxZQXBCQTs7QUFBQSxzQkFxQk1ILE1BQU0sQ0FBQ0ksS0FyQmI7QUFBQSxNQXFCVkMsRUFyQlUsaUJBcUJWQSxFQXJCVTtBQUFBLE1BcUJOQyxPQXJCTSxpQkFxQk5BLE9BckJNOztBQXVCbEIsV0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsSUFBc0IsRUFBMUIsRUFBOEI7QUFDNUJWLFlBQU0sQ0FBQ1csSUFBUCxlQUFtQkgsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWhDLHNCQUFpRHRCLE1BQWpEO0FBQ0FLLGtCQUFZLENBQUNlLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVo7QUFDRCxLQUhELE1BR087QUFDTEUsY0FBUSxDQUFDQyxJQUFULEdBQWdCLEdBQWhCO0FBQ0FwQixrQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNEO0FBQ0Y7O0FBL0JpQixXQWlDSHFCLFFBakNHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVXQWlDbEIsa0JBQXdCVCxFQUF4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FVLDRCQURSLEdBQ3lCO0FBQ3JCQyxzQkFBTSxFQUFFLFFBRGE7QUFFckJDLHVCQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEI7QUFGWSxlQUR6QjtBQUFBO0FBQUEscUJBS3lCQyxLQUFLLHVCQUFnQmIsRUFBaEIsR0FBc0JVLGNBQXRCLENBTDlCOztBQUFBO0FBS1FJLHNCQUxSO0FBQUE7QUFBQSxxQkFNa0NBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5sQzs7QUFBQTtBQUFBO0FBTVVDLHFCQU5WLHlCQU1VQSxPQU5WO0FBTW1CQyxrQkFObkIseUJBTW1CQSxJQU5uQjs7QUFPRSxrQkFBSUQsT0FBSixFQUFhO0FBQ1hULHdCQUFRLENBQUNDLElBQVQsR0FBZ0IsR0FBaEI7QUFDQXBCLDRCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0Q7O0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqQ2tCO0FBQUE7QUFBQTs7QUFBQSxXQThDSDhCLFdBOUNHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBXQThDbEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ21CQyxvRUFBYSxDQUFDQyxJQUFkLEVBRG5COztBQUFBO0FBQ1FDLGdCQURSO0FBQUE7QUFBQSxxQkFLdUJBLEVBQUUsQ0FBQ0MsR0FBSCxFQUx2Qjs7QUFBQTtBQUtRQyxvQkFMUjtBQU9FO0FBQ01DLHVCQVJSLEdBUW9CRCxNQUFNLENBQUNDLFNBUjNCO0FBU0V4Qyx1QkFBUyxDQUFDd0MsU0FBRCxDQUFUO0FBQ01kLDRCQVZSLEdBVXlCO0FBQ3JCQyxzQkFBTSxFQUFFLEtBRGE7QUFFckJDLHVCQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEI7QUFGWSxlQVZ6QixFQWNFOztBQWRGO0FBQUEscUJBZXlCQyxLQUFLLHdCQUFpQlcsU0FBakIsR0FBOEJkLGNBQTlCLENBZjlCOztBQUFBO0FBZVFJLHNCQWZSO0FBQUE7QUFBQSxxQkFnQnlCQSxRQUFRLENBQUNDLElBQVQsRUFoQnpCOztBQUFBO0FBQUE7QUFnQlVFLGtCQWhCVix5QkFnQlVBLElBaEJWO0FBaUJFL0Isd0JBQVUsQ0FBQytCLElBQUQsQ0FBVjs7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E5Q2tCO0FBQUE7QUFBQTs7QUFrRWxCUSx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDQyxTQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBXQUNkO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN5QmIsS0FBSyx1QkFBZ0JiLEVBQWhCLEVBRDlCOztBQUFBO0FBQ1FjLHdCQURSO0FBQUE7QUFBQSx1QkFFeUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZ6Qjs7QUFBQTtBQUFBO0FBRVVFLG9CQUZWLHdCQUVVQSxJQUZWOztBQUFBLHNCQUdNSCxRQUFRLENBQUNhLE1BQVQsS0FBb0IsR0FIMUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFJVWhDLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLE1BQVosQ0FKVjs7QUFBQTtBQU1FaEIsOEJBQWMsQ0FBQzJCLElBQUksQ0FBQzVCLFdBQU4sQ0FBZDtBQUVBYiw0QkFBWSxDQUFDeUMsSUFBSSxDQUFDVyxJQUFOLENBQVo7QUFDQWhELDJCQUFXLENBQUNxQyxJQUFJLENBQUNZLEdBQU4sQ0FBWDtBQUNBbkQsMEJBQVUsQ0FBQ3VDLElBQUksQ0FBQ2EsRUFBTixDQUFWO0FBQ0ExQyw0QkFBWSxDQUFDWSxFQUFELENBQVo7QUFFQTVCLDBCQUFVLENBQUMsS0FBRCxDQUFWOztBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQWlCZCxRQUFJNEIsRUFBSixFQUFRO0FBQ041QixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBc0QsZUFBUztBQUNWLEtBSEQsTUFHTztBQUNMdEQsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLEdBdkJRLEVBdUJOLENBQUM0QixFQUFELENBdkJNLENBQVQ7QUF5QkF5Qix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJOUIsTUFBTSxDQUFDSSxLQUFYLEVBQWtCO0FBQ2hCRCxrQkFBWSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUUsT0FBZCxDQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7QUFNQXdCLHlEQUFTLHNXQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSO0FBQ01NLHNCQUZFLHNFQUlVckMsWUFKViw2RkFPVUgsYUFQViwwRkFTVUUsV0FUVjtBQWFSWCx5QkFBYSxDQUFDaUQsVUFBRCxDQUFiO0FBRUFiLHVCQUFXOztBQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFnQk4sQ0FBQzNCLGFBQUQsRUFBZ0JHLFlBQWhCLEVBQThCRCxXQUE5QixDQWhCTSxDQUFUOztBQWtCQSxNQUFNdUMsSUFBSTtBQUFBLHVXQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWDFELHVCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0kyRCxrQkFGTyxHQUVBLEtBRkE7O0FBR1gsa0JBQUlwQyxTQUFKLEVBQWU7QUFDYixvQkFBSUEsU0FBUyxJQUFJZCxNQUFqQixFQUF5QjtBQUN2QmtELHNCQUFJLEdBQUcsQ0FBQ2pDLEVBQUQsR0FBTSxLQUFOLEdBQWMsTUFBckI7QUFDRCxpQkFGRCxNQUVPO0FBQ0xpQyxzQkFBSSxHQUFHLEtBQVA7QUFDRDtBQUNGLGVBTkQsTUFNTztBQUNMQSxvQkFBSSxHQUFHLEtBQVA7QUFDRDs7QUFYVSxvQkFhUDVDLFdBQVcsSUFBSSxFQWJSO0FBQUE7QUFBQTtBQUFBOztBQWNUNkMsbUJBQUssQ0FBQywyQkFBRCxDQUFMO0FBQ0E1RCx1QkFBUyxDQUFDLEtBQUQsQ0FBVDtBQWZTLGdEQWdCRixLQWhCRTs7QUFBQTtBQUFBLG9CQWlCQUMsU0FBUyxJQUFJLEVBakJiO0FBQUE7QUFBQTtBQUFBOztBQWtCVDJELG1CQUFLLENBQUMsc0JBQUQsQ0FBTDtBQUNBNUQsdUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFuQlMsZ0RBb0JGLEtBcEJFOztBQUFBO0FBQUEsb0JBc0JGRyxPQUFPLElBQUksRUF0QlQ7QUFBQTtBQUFBO0FBQUE7O0FBdUJUeUQsbUJBQUssQ0FBQyxvQkFBRCxDQUFMO0FBQ0E1RCx1QkFBUyxDQUFDLEtBQUQsQ0FBVDtBQXhCUyxnREF5QkYsS0F6QkU7O0FBQUE7QUFBQSxvQkEwQkFLLFFBQVEsSUFBSSxFQTFCWjtBQUFBO0FBQUE7QUFBQTs7QUEyQlR1RCxtQkFBSyxDQUFDLHFCQUFELENBQUw7QUFDQTVELHVCQUFTLENBQUMsS0FBRCxDQUFUO0FBNUJTLGdEQTZCRixLQTdCRTs7QUFBQTtBQWdDTG9DLDRCQWhDSyxHQWdDWTtBQUNyQkMsc0JBQU0sRUFBRXNCLElBRGE7QUFFckJyQix1QkFBTyxFQUFFO0FBQUUsa0NBQWdCO0FBQWxCLGlCQUZZO0FBR3JCdUIsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJULHNCQUFJLEVBQUVyRCxTQURhO0FBRW5Cc0QscUJBQUcsRUFBRWxELFFBRmM7QUFHbkJtRCxvQkFBRSxFQUFFckQsT0FIZTtBQUluQnVCLG9CQUFFLEVBQUVBLEVBSmU7QUFLbkJqQix3QkFBTSxFQUFFQSxNQUxXO0FBTW5CTSw2QkFBVyxFQUFFQTtBQU5NLGlCQUFmO0FBSGUsZUFoQ1o7QUFBQTtBQUFBLHFCQTRDWXdCLEtBQUssdUJBQWdCYixFQUFoQixHQUFzQlUsY0FBdEIsQ0E1Q2pCOztBQUFBO0FBNENMSSxzQkE1Q0s7QUFBQTtBQUFBLHFCQStDREEsUUFBUSxDQUFDQyxJQUFULEVBL0NDOztBQUFBO0FBQUE7QUFBQSw0REE4Q1RFLElBOUNTO0FBOENEcUIsMkJBOUNDLHlCQThDREEsYUE5Q0M7QUE4Q2NDLHlCQTlDZCx5QkE4Q2NBLFdBOUNkO0FBaURYakUsdUJBQVMsQ0FBQyxLQUFELENBQVQ7O0FBakRXLGtCQWtETmdFLGFBbERNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBbURIM0MsTUFBTSxDQUFDVyxJQUFQLGVBQW1CaUMsV0FBbkIsc0JBQTBDeEQsTUFBMUMsRUFuREc7O0FBQUE7QUFxRFhtQyx5QkFBVzs7QUFyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSmMsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQXdEQSxNQUFJN0QsT0FBSixFQUFhO0FBQ1gsd0JBQU87QUFBSyxlQUFTLEVBQUVxRSx3REFBTSxDQUFDckUsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVxRSx3REFBTSxDQUFDQyxNQUF2QjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFFRCx3REFBTSxDQUFDRSxNQURwQjtBQUVFLGlCQUFPLEVBQUUsbUJBQU07QUFDYnRELHdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0FtQixvQkFBUSxDQUFDQyxJQUFULEdBQWdCLEdBQWhCO0FBQ0QsV0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQVEsbUJBQVMsRUFBRWdDLHdEQUFNLENBQUNFLE1BQTFCO0FBQWtDLGlCQUFPLEVBQUVWLElBQTNDO0FBQUEsb0JBQ0czRCxNQUFNLEdBQUcsV0FBSCxHQUFpQjtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZ0JFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBTyxtQkFBUyxFQUFDLHlCQUFqQjtBQUEyQyxlQUFLLEVBQUVnQixXQUFsRDtBQUErRCxxQkFBVyxFQUFDLGNBQTNFO0FBQTBGLGtCQUFRLEVBQUUsa0JBQUNzRCxDQUFELEVBQU87QUFBRXJELDBCQUFjLENBQUNxRCxDQUFDLENBQUN2QyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFnQztBQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdwQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJELE1BQVIsR0FBaUIsQ0FBNUIsaUJBQ0M7QUFDRSxtQkFBUyxFQUFDLHlCQURaO0FBRUUsZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVCxXQUZUO0FBR0UsZUFBSyxFQUFFMUQsU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFIakM7QUFJRSxrQkFBUSxFQUFFZSxRQUpaO0FBQUEsa0NBTUU7QUFBUSxpQkFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsRUFPR2pCLE9BQU8sQ0FBQzZELEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN4QixnQ0FDRTtBQUFnQixtQkFBSyxFQUFFRCxJQUFJLENBQUNFLEdBQTVCO0FBQUEsd0JBQ0dGLElBQUksQ0FBQ0U7QUFEUixlQUFhRCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFLRCxXQU5BLENBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLEVBb0JHL0QsT0FBTyxJQUFJQSxPQUFPLENBQUMyRCxNQUFSLEdBQWlCLENBQTVCLGlCQUFpQyxxRUFBQyx1REFBRDtBQUFTLGVBQUssRUFBRTtBQUFFTSxpQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLG9CQUFRLEVBQUU7QUFBNUIsV0FBaEI7QUFBa0QsaUJBQU8sRUFBRTtBQUFBLG1CQUFNMUMsUUFBUSxDQUFDdEIsU0FBRCxDQUFkO0FBQUE7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXdDRSxxRUFBQyx3REFBRDtBQUNFLFdBQUssRUFBRTtBQUFFaUUsaUJBQVMsRUFBRTtBQUFiLE9BRFQ7QUFFRSxXQUFLLEVBQUMsWUFGUjtBQUdFLGFBQU8sRUFBRSxLQUhYO0FBSUUsb0JBQWMsRUFBRSx3QkFBQ0MsTUFBRCxFQUFZO0FBQzFCbkYsc0JBQWMsV0FBSW1GLE1BQU0sR0FBRyxFQUFiLFFBQWQ7QUFDRCxPQU5IO0FBQUEsOEJBUUUscUVBQUMsd0RBQUQ7QUFBVyxhQUFLLEVBQUMsVUFBakI7QUFBNEIsZUFBTyxFQUFFLEtBQXJDO0FBQUEsZ0NBQ0UscUVBQUMsOERBQUQ7QUFDRSxnQkFBTSxFQUFFcEYsV0FEVjtBQUVFLGVBQUssRUFBRU0sU0FGVDtBQUdFLGtCQUFRLEVBQUVDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FLHFFQUFDLHdEQUFEO0FBQVcsZUFBSyxFQUFDLFVBQWpCO0FBQTRCLGlCQUFPLEVBQUUsS0FBckM7QUFBQSxrQ0FDRSxxRUFBQyw2REFBRDtBQUNFLGtCQUFNLEVBQUVQLFdBRFY7QUFFRSxpQkFBSyxFQUFFVSxRQUZUO0FBR0Usb0JBQVEsRUFBRUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUUscUVBQUMsb0VBQUQ7QUFDRSxrQkFBTSxFQUFFWCxXQURWO0FBRUUsaUJBQUssRUFBRVEsT0FGVDtBQUdFLG9CQUFRLEVBQUVDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUEyQkU7QUFBUSxjQUFNLEVBQUVHLFVBQWhCO0FBQTRCLGlCQUFTLEVBQUUyRCx3REFBTSxDQUFDYztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDRjtBQUFBLGtCQURGO0FBd0VELENBdlBEOztHQUFNdkYsSztVQWVrQnlCLDhELEVBQ0ZBLDhELEVBQ0NBLDhELEVBRU5JLHFEOzs7S0FuQlg3QixLO0FBeVBTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MjZmZWVlYzgwY2Q4ZDg4MTc3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tIFwicmVhY3Qtc3BsaXQtcGFuZVwiO1xuXG5pbXBvcnQgeyBDc3NFZGl0b3IsIEh0bWxFZGl0b3IsIEphdmFzY3JpcHRFZGl0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FZGl0b3JzXCI7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gXCIuLi91dGlscy91c2VEZWJvdW5jZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBGaW5nZXJwcmludEpTIGZyb20gXCJAZmluZ2VycHJpbnRqcy9maW5nZXJwcmludGpzXCI7XG5cbmltcG9ydCB7IEJzVHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtoZWlnaHRWYWx1ZSwgc2V0SGVpZ2h0VmFsdWVdID0gdXNlU3RhdGUoXCI0ODVweFwiKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbaHRtbFZhbHVlLCBzZXRIdG1sVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtqc1ZhbHVlLCBzZXRKc1ZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3NzVmFsdWUsIHNldENzc1ZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFuZVZhbHVlcywgc2V0cGFuZVZhbHVlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9qZWN0SUQsIHNldFByb2plY3RJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IGRlYm91bmNlZEh0bWwgPSB1c2VEZWJvdW5jZShodG1sVmFsdWUsIDEwMDApO1xuICBjb25zdCBkZWJvdW5jZWRKcyA9IHVzZURlYm91bmNlKGpzVmFsdWUsIDEwMDApO1xuICBjb25zdCBkZWJvdW5jZWRDc3MgPSB1c2VEZWJvdW5jZShjc3NWYWx1ZSwgMTAwMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt2aXNpdG9ySUQsIHNldFZpc2l0b3JJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBpZCwgdXNlcl9pZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICByb3V0ZXIucHVzaChgP2lkPSR7ZXZlbnQudGFyZ2V0LnZhbHVlfSZ1c2VyX2lkPSR7dXNlcklEfWApO1xuICAgICAgc2V0UHJvamVjdElEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgIHNldFByb2plY3RJRChcIlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkRlbGV0ZShpZCkge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3BlbnMvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgeyBzdWNjZXNzLCBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgIHNldFByb2plY3RJRChcIlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBmcCA9IGF3YWl0IEZpbmdlcnByaW50SlMubG9hZCgpO1xuXG4gICAgLy8gVGhlIEZpbmdlcnByaW50SlMgYWdlbnQgaXMgcmVhZHkuXG4gICAgLy8gR2V0IGEgdmlzaXRvciBpZGVudGlmaWVyIHdoZW4geW91J2QgbGlrZSB0by5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmcC5nZXQoKTtcblxuICAgIC8vIFRoaXMgaXMgdGhlIHZpc2l0b3IgaWRlbnRpZmllcjpcbiAgICBjb25zdCB2aXNpdG9ySWQgPSByZXN1bHQudmlzaXRvcklkO1xuICAgIHNldFVzZXJJRCh2aXNpdG9ySWQpO1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH07XG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3VzZXJzLyR7dmlzaXRvcklkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvdXNlcnMvJHt2aXNpdG9ySWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldFByb2plY3QoZGF0YSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wZW5zLyR7aWR9YCk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBhd2FpdCByb3V0ZXIucHVzaChcIi80MDRcIik7XG4gICAgICB9XG4gICAgICBzZXRQcm9qZWN0TmFtZShkYXRhLnByb2plY3ROYW1lKVxuXG4gICAgICBzZXRIdG1sVmFsdWUoZGF0YS5odG1sKTtcbiAgICAgIHNldENzc1ZhbHVlKGRhdGEuY3NzKTtcbiAgICAgIHNldEpzVmFsdWUoZGF0YS5qcyk7XG4gICAgICBzZXRQcm9qZWN0SUQoaWQpO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIucXVlcnkpIHtcbiAgICAgIHNldFZpc2l0b3JJRChyb3V0ZXIucXVlcnkudXNlcl9pZCk7XG4gICAgfVxuICB9LCBbdXNlcl9pZF0pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NzcyBqcyBodG1sIGNoYW5nZWQgQU5EIHBhbmVPdXRwdXQgaXMgU0VUIHdpdGggcGFuZU91dHB1dCBiZWVpbmcgJylcbiAgICBjb25zdCBwYW5lT3V0cHV0ID0gYDxodG1sPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVib3VuY2VkQ3NzfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRIdG1sfVxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRKc31cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgICAgICAgIDwvaHRtbD5gO1xuICAgIHNldHBhbmVWYWx1ZXMocGFuZU91dHB1dCk7XG5cbiAgICBnZXRQcm9qZWN0cygpO1xuICB9LCBbZGVib3VuY2VkSHRtbCwgZGVib3VuY2VkQ3NzLCBkZWJvdW5jZWRKc10pO1xuXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U2F2aW5nKHRydWUpO1xuICAgIHZhciBtZXRoID0gXCJQVVRcIjtcbiAgICBpZiAodmlzaXRvcklEKSB7XG4gICAgICBpZiAodmlzaXRvcklEID09IHVzZXJJRCkge1xuICAgICAgICBtZXRoID0gIWlkID8gXCJQVVRcIiA6IFwiUE9TVFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0aCA9IFwiUFVUXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGggPSBcIlBVVFwiO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0TmFtZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnB1dCBwcm9qZWN0IG5hbWVcIik7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaHRtbFZhbHVlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBodG1sIGZpbGVcIik7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChqc1ZhbHVlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBqcyBmaWxlXCIpO1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNzc1ZhbHVlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBjc3MgZmlsZVwiKTtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IG1ldGgsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGh0bWw6IGh0bWxWYWx1ZSxcbiAgICAgICAgY3NzOiBjc3NWYWx1ZSxcbiAgICAgICAganM6IGpzVmFsdWUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdXNlcklEOiB1c2VySUQsXG4gICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVxuICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHVwZGF0ZWRSZWNvcmQsIG5ld1JlY29yZElkIH0sXG4gICAgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgaWYgKCF1cGRhdGVkUmVjb3JkKSB7XG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChgP2lkPSR7bmV3UmVjb3JkSWR9JnVzZXJfaWQ9JHt1c2VySUR9YCk7XG4gICAgfVxuICAgIGdldFByb2plY3RzKCk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UHJvamVjdElEKFwiXCIpO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5ld1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtzYXZlfT5cbiAgICAgICAgICAgIHtzYXZpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1pbnB1dFwiIHZhbHVlPXtwcm9qZWN0TmFtZX0gcGxhY2Vob2xkZXI9XCJQcm9qZWN0IG5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHsgc2V0UHJvamVjdE5hbWUoZS50YXJnZXQudmFsdWUpIH19PjwvaW5wdXQ+XG4gICAgICAgICAge3Byb2plY3QgJiYgcHJvamVjdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0SUQgPyBwcm9qZWN0SUQgOiBcIlwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Qcm9qZWN0SUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAge3Byb2plY3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5faWR9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7cHJvamVjdCAmJiBwcm9qZWN0Lmxlbmd0aCA+IDAgJiYgPEJzVHJhc2ggc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IDM2IH19IG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHByb2plY3RJRCl9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BsaXRQYW5lXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2MHB4XCIgfX1cbiAgICAgICAgc3BsaXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgbWluU2l6ZT17XCI1MCVcIn1cbiAgICAgICAgb25EcmFnRmluaXNoZWQ9eyhoZWlnaHQpID0+IHtcbiAgICAgICAgICBzZXRIZWlnaHRWYWx1ZShgJHtoZWlnaHQgLSA0MH1weGApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPXtcIjMzJVwifT5cbiAgICAgICAgICA8SHRtbEVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHRWYWx1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtodG1sVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0SHRtbFZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT17XCI1MCVcIn0+XG4gICAgICAgICAgICA8Q3NzRWRpdG9yXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtjc3NWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENzc1ZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxKYXZhc2NyaXB0RWRpdG9yXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0VmFsdWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtqc1ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SnNWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICA8aWZyYW1lIHNyY0RvYz17cGFuZVZhbHVlc30gY2xhc3NOYW1lPXtzdHlsZXMucHJldmlld0lmcmFtZX0gLz5cbiAgICAgIDwvU3BsaXRQYW5lPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9