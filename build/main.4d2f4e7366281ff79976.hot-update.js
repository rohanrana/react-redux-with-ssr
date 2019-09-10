exports.id = "main";
exports.modules = {

/***/ "./src/redux/Reducers/DataReducer.js":
false,

/***/ "./src/redux/Reducers/index.js":
false,

/***/ "./src/redux/store.js":
false,

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../common/store/configureStore'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../common/api/counter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/rohanrana/Documents/Rohan /razzel-app/src/server.js";










var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_4___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]("/home/rohanrana/Documents/Rohan /razzel-app/public")).get('/*', function (req, res) {
  !(function webpackMissingModule() { var e = new Error("Cannot find module '../common/api/counter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (apiResult) {
    // Read the counter from the request, if provided
    var params = qs__WEBPACK_IMPORTED_MODULE_5___default.a.parse(req.query);
    var counter = parseInt(params.counter, 10) || apiResult || 0; // Compile an initial state

    var preloadedState = {
      counter: counter
    }; // Create a new Redux store instance

    var store = !(function webpackMissingModule() { var e = new Error("Cannot find module '../common/store/configureStore'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(preloadedState); // Render the component to a string

    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }))); // Grab the initial state from our Redux store

    var finalState = store.getState();
    res.send("<!doctype html>\n    <html lang=\"\">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charSet='utf-8' />\n        <title>Razzle Redux Example</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n          ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n    </head>\n    <body>\n        <div id=\"root\">").concat(markup, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(finalState), "\n        </script>\n    </body>\n</html>"));
  });
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react-router-dom":
false,

/***/ "redux":
false,

/***/ "redux-thunk":
false,

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

};
//# sourceMappingURL=main.4d2f4e7366281ff79976.hot-update.js.map