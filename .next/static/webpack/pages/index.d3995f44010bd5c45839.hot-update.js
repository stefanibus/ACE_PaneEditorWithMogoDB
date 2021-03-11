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
              }

              if (!(projectName == "")) {
                _context2.next = 8;
                break;
              }

              // alert("Please input project name");
              setSaving(false);
              return _context2.abrupt("return", false);

            case 8:
              if (!(htmlValue == "")) {
                _context2.next = 13;
                break;
              }

              // alert("Please add html file");
              setSaving(false);
              return _context2.abrupt("return", false);

            case 13:
              if (!(jsValue == "")) {
                _context2.next = 18;
                break;
              }

              // alert("Please add js file");
              setSaving(false);
              return _context2.abrupt("return", false);

            case 18:
              if (!(cssValue == "")) {
                _context2.next = 21;
                break;
              }

              // alert("Please add css file");
              setSaving(false);
              return _context2.abrupt("return", false);

            case 21:
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
              _context2.next = 24;
              return fetch("../api/pens/".concat(id), requestOptions);

            case 24:
              response = _context2.sent;
              _context2.next = 27;
              return response.json();

            case 27:
              _yield$response$json2 = _context2.sent;
              _yield$response$json3 = _yield$response$json2.data;
              updatedRecord = _yield$response$json3.updatedRecord;
              newRecordId = _yield$response$json3.newRecordId;
              setSaving(false);

              if (updatedRecord) {
                _context2.next = 35;
                break;
              }

              _context2.next = 35;
              return router.push("?id=".concat(newRecordId, "&user_id=").concat(userID));

            case 35:
              getProjects();

            case 36:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImhlaWdodFZhbHVlIiwic2V0SGVpZ2h0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNhdmluZyIsInNldFNhdmluZyIsImh0bWxWYWx1ZSIsInNldEh0bWxWYWx1ZSIsImpzVmFsdWUiLCJzZXRKc1ZhbHVlIiwiY3NzVmFsdWUiLCJzZXRDc3NWYWx1ZSIsInBhbmVWYWx1ZXMiLCJzZXRwYW5lVmFsdWVzIiwidXNlcklEIiwic2V0VXNlcklEIiwicHJvamVjdCIsInNldFByb2plY3QiLCJwcm9qZWN0SUQiLCJzZXRQcm9qZWN0SUQiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiZGVib3VuY2VkSHRtbCIsInVzZURlYm91bmNlIiwiZGVib3VuY2VkSnMiLCJkZWJvdW5jZWRDc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ2aXNpdG9ySUQiLCJzZXRWaXNpdG9ySUQiLCJxdWVyeSIsImlkIiwidXNlcl9pZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJsb2NhdGlvbiIsImhyZWYiLCJvbkRlbGV0ZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJnZXRQcm9qZWN0cyIsIkZpbmdlcnByaW50SlMiLCJsb2FkIiwiZnAiLCJnZXQiLCJyZXN1bHQiLCJ2aXNpdG9ySWQiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJzdGF0dXMiLCJodG1sIiwiY3NzIiwianMiLCJwYW5lT3V0cHV0Iiwic2F2ZSIsIm1ldGgiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZWRSZWNvcmQiLCJuZXdSZWNvcmRJZCIsInN0eWxlcyIsImhlYWRlciIsImJ1dHRvbiIsImUiLCJsZW5ndGgiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJpIiwiX2lkIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImhlaWdodCIsInByZXZpZXdJZnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQyxPQUFELENBRDVCO0FBQUEsTUFDWEMsV0FEVztBQUFBLE1BQ0VDLGNBREY7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsSUFBRCxDQUhwQjtBQUFBLE1BR1hHLE9BSFc7QUFBQSxNQUdGQyxVQUhFOztBQUFBLG1CQUlVSixzREFBUSxDQUFDLEtBQUQsQ0FKbEI7QUFBQSxNQUlYSyxNQUpXO0FBQUEsTUFJSEMsU0FKRzs7QUFBQSxtQkFNZ0JOLHNEQUFRLENBQUMsRUFBRCxDQU54QjtBQUFBLE1BTVhPLFNBTlc7QUFBQSxNQU1BQyxZQU5BOztBQUFBLG1CQU9ZUixzREFBUSxDQUFDLEVBQUQsQ0FQcEI7QUFBQSxNQU9YUyxPQVBXO0FBQUEsTUFPRkMsVUFQRTs7QUFBQSxtQkFRY1Ysc0RBQVEsQ0FBQyxFQUFELENBUnRCO0FBQUEsTUFRWFcsUUFSVztBQUFBLE1BUURDLFdBUkM7O0FBQUEsbUJBU2tCWixzREFBUSxDQUFDLEVBQUQsQ0FUMUI7QUFBQSxNQVNYYSxVQVRXO0FBQUEsTUFTQ0MsYUFURDs7QUFBQSxtQkFVVWQsc0RBQVEsQ0FBQyxFQUFELENBVmxCO0FBQUEsTUFVWGUsTUFWVztBQUFBLE1BVUhDLFNBVkc7O0FBQUEsbUJBV1loQixzREFBUSxDQUFDLEVBQUQsQ0FYcEI7QUFBQSxNQVdYaUIsT0FYVztBQUFBLE1BV0ZDLFVBWEU7O0FBQUEsb0JBWWdCbEIsc0RBQVEsQ0FBQyxFQUFELENBWnhCO0FBQUEsTUFZWG1CLFNBWlc7QUFBQSxNQVlBQyxZQVpBOztBQUFBLG9CQWFv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RUFBQyxVQUFqQjtBQUE0QixpQkFBTyxFQUFFLEtBQXJDO0FBQUEsa0NBQ0UscUVBQUMsNkRBQUQ7QUFDRSxrQkFBTSxFQUFFUCxXQURWO0FBRUUsaUJBQUssRUFBRVUsUUFGVDtBQUdFLG9CQUFRLEVBQUVDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FLHFFQUFDLG9FQUFEO0FBQ0Usa0JBQU0sRUFBRVgsV0FEVjtBQUVFLGlCQUFLLEVBQUVRLE9BRlQ7QUFHRSxvQkFBUSxFQUFFQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBMkJFO0FBQVEsY0FBTSxFQUFFRyxVQUFoQjtBQUE0QixpQkFBUyxFQUFFMEQsd0RBQU0sQ0FBQ2M7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Q0Y7QUFBQSxrQkFERjtBQXdFRCxDQXZQRDs7R0FBTXRGLEs7VUFla0J5Qiw4RCxFQUNGQSw4RCxFQUNDQSw4RCxFQUVOSSxxRDs7O0tBbkJYN0IsSztBQXlQU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDM5OTVmNDQwMTBiZDVjNDU4MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSBcInJlYWN0LXNwbGl0LXBhbmVcIjtcblxuaW1wb3J0IHsgQ3NzRWRpdG9yLCBIdG1sRWRpdG9yLCBKYXZhc2NyaXB0RWRpdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdG9yc1wiO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tIFwiLi4vdXRpbHMvdXNlRGVib3VuY2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRmluZ2VycHJpbnRKUyBmcm9tIFwiQGZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqc1wiO1xuXG5pbXBvcnQgeyBCc1RyYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbaGVpZ2h0VmFsdWUsIHNldEhlaWdodFZhbHVlXSA9IHVzZVN0YXRlKFwiNDg1cHhcIik7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2h0bWxWYWx1ZSwgc2V0SHRtbFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbanNWYWx1ZSwgc2V0SnNWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Nzc1ZhbHVlLCBzZXRDc3NWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BhbmVWYWx1ZXMsIHNldHBhbmVWYWx1ZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJvamVjdElELCBzZXRQcm9qZWN0SURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBkZWJvdW5jZWRIdG1sID0gdXNlRGVib3VuY2UoaHRtbFZhbHVlLCAxMDAwKTtcbiAgY29uc3QgZGVib3VuY2VkSnMgPSB1c2VEZWJvdW5jZShqc1ZhbHVlLCAxMDAwKTtcbiAgY29uc3QgZGVib3VuY2VkQ3NzID0gdXNlRGVib3VuY2UoY3NzVmFsdWUsIDEwMDApO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdmlzaXRvcklELCBzZXRWaXNpdG9ySURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgaWQsIHVzZXJfaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgIT0gXCJcIikge1xuICAgICAgcm91dGVyLnB1c2goYD9pZD0ke2V2ZW50LnRhcmdldC52YWx1ZX0mdXNlcl9pZD0ke3VzZXJJRH1gKTtcbiAgICAgIHNldFByb2plY3RJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICBzZXRQcm9qZWN0SUQoXCJcIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25EZWxldGUoaWQpIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wZW5zLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHsgc3VjY2VzcywgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICBzZXRQcm9qZWN0SUQoXCJcIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgY29uc3QgZnAgPSBhd2FpdCBGaW5nZXJwcmludEpTLmxvYWQoKTtcblxuICAgIC8vIFRoZSBGaW5nZXJwcmludEpTIGFnZW50IGlzIHJlYWR5LlxuICAgIC8vIEdldCBhIHZpc2l0b3IgaWRlbnRpZmllciB3aGVuIHlvdSdkIGxpa2UgdG8uXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZnAuZ2V0KCk7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSB2aXNpdG9yIGlkZW50aWZpZXI6XG4gICAgY29uc3QgdmlzaXRvcklkID0gcmVzdWx0LnZpc2l0b3JJZDtcbiAgICBzZXRVc2VySUQodmlzaXRvcklkKTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9O1xuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS91c2Vycy8ke3Zpc2l0b3JJZH1gLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3VzZXJzLyR7dmlzaXRvcklkfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRQcm9qZWN0KGRhdGEpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcGVucy8ke2lkfWApO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goXCIvNDA0XCIpO1xuICAgICAgfVxuICAgICAgc2V0UHJvamVjdE5hbWUoZGF0YS5wcm9qZWN0TmFtZSlcblxuICAgICAgc2V0SHRtbFZhbHVlKGRhdGEuaHRtbCk7XG4gICAgICBzZXRDc3NWYWx1ZShkYXRhLmNzcyk7XG4gICAgICBzZXRKc1ZhbHVlKGRhdGEuanMpO1xuICAgICAgc2V0UHJvamVjdElEKGlkKTtcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKGlkKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2lkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnF1ZXJ5KSB7XG4gICAgICBzZXRWaXNpdG9ySUQocm91dGVyLnF1ZXJ5LnVzZXJfaWQpO1xuICAgIH1cbiAgfSwgW3VzZXJfaWRdKTtcblxuICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3NzIGpzIGh0bWwgY2hhbmdlZCBBTkQgcGFuZU91dHB1dCBpcyBTRVQgd2l0aCBwYW5lT3V0cHV0IGJlZWluZyAnKVxuICAgIGNvbnN0IHBhbmVPdXRwdXQgPSBgPGh0bWw+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgJHtkZWJvdW5jZWRDc3N9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICAke2RlYm91bmNlZEh0bWx9XG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuICAgICAgICAgICAgICAgICAgICAke2RlYm91bmNlZEpzfVxuICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgICAgICAgPC9odG1sPmA7XG4gICAgc2V0cGFuZVZhbHVlcyhwYW5lT3V0cHV0KTtcblxuICAgIGdldFByb2plY3RzKCk7XG4gIH0sIFtkZWJvdW5jZWRIdG1sLCBkZWJvdW5jZWRDc3MsIGRlYm91bmNlZEpzXSk7XG5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgdmFyIG1ldGggPSBcIlBVVFwiO1xuICAgIGlmICh2aXNpdG9ySUQpIHtcbiAgICAgIGlmICh2aXNpdG9ySUQgPT0gdXNlcklEKSB7XG4gICAgICAgIG1ldGggPSAhaWQgPyBcIlBVVFwiIDogXCJQT1NUXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRoID0gXCJQVVRcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0aCA9IFwiUFVUXCI7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3ROYW1lID09IFwiXCIpIHtcbiAgICAgIC8vIGFsZXJ0KFwiUGxlYXNlIGlucHV0IHByb2plY3QgbmFtZVwiKTtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChodG1sVmFsdWUgPT0gXCJcIikge1xuICAgICAgLy8gYWxlcnQoXCJQbGVhc2UgYWRkIGh0bWwgZmlsZVwiKTtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGpzVmFsdWUgPT0gXCJcIikge1xuICAgICAgLy8gYWxlcnQoXCJQbGVhc2UgYWRkIGpzIGZpbGVcIik7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY3NzVmFsdWUgPT0gXCJcIikge1xuICAgICAgLy8gYWxlcnQoXCJQbGVhc2UgYWRkIGNzcyBmaWxlXCIpO1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogbWV0aCxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaHRtbDogaHRtbFZhbHVlLFxuICAgICAgICBjc3M6IGNzc1ZhbHVlLFxuICAgICAgICBqczoganNWYWx1ZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB1c2VySUQ6IHVzZXJJRCxcbiAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lXG4gICAgICB9KSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wZW5zLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgdXBkYXRlZFJlY29yZCwgbmV3UmVjb3JkSWQgfSxcbiAgICB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICBpZiAoIXVwZGF0ZWRSZWNvcmQpIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKGA/aWQ9JHtuZXdSZWNvcmRJZH0mdXNlcl9pZD0ke3VzZXJJRH1gKTtcbiAgICB9XG4gICAgZ2V0UHJvamVjdHMoKTtcbiAgfTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRQcm9qZWN0SUQoXCJcIik7XG4gICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV3XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3NhdmV9PlxuICAgICAgICAgICAge3NhdmluZyA/IFwiU2F2aW5nLi4uXCIgOiBcIlNhdmVcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWlucHV0XCIgdmFsdWU9e3Byb2plY3ROYW1lfSBwbGFjZWhvbGRlcj1cIlByb2plY3QgbmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRQcm9qZWN0TmFtZShlLnRhcmdldC52YWx1ZSkgfX0+PC9pbnB1dD5cbiAgICAgICAgICB7cHJvamVjdCAmJiBwcm9qZWN0Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RJRCA/IHByb2plY3RJRCA6IFwiXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlByb2plY3RJRDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7cHJvamVjdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtwcm9qZWN0ICYmIHByb2plY3QubGVuZ3RoID4gMCAmJiA8QnNUcmFzaCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBmb250U2l6ZTogMzYgfX0gb25DbGljaz17KCkgPT4gb25EZWxldGUocHJvamVjdElEKX0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTcGxpdFBhbmVcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjYwcHhcIiB9fVxuICAgICAgICBzcGxpdD1cImhvcml6b250YWxcIlxuICAgICAgICBtaW5TaXplPXtcIjUwJVwifVxuICAgICAgICBvbkRyYWdGaW5pc2hlZD17KGhlaWdodCkgPT4ge1xuICAgICAgICAgIHNldEhlaWdodFZhbHVlKGAke2hlaWdodCAtIDQwfXB4YCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9e1wiMzMlXCJ9PlxuICAgICAgICAgIDxIdG1sRWRpdG9yXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodFZhbHVlfVxuICAgICAgICAgICAgdmFsdWU9e2h0bWxWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRIdG1sVmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPXtcIjUwJVwifT5cbiAgICAgICAgICAgIDxDc3NFZGl0b3JcbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHRWYWx1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2Nzc1ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Q3NzVmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEphdmFzY3JpcHRFZGl0b3JcbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHRWYWx1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2pzVmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRKc1ZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgIDxpZnJhbWUgc3JjRG9jPXtwYW5lVmFsdWVzfSBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3SWZyYW1lfSAvPlxuICAgICAgPC9TcGxpdFBhbmU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=