exports.id = "main";
exports.modules = {

/***/ "./src/helpers/creteStore.js":
/*!***********************************!*\
  !*** ./src/helpers/creteStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/Reducers */ "./src/redux/Reducers/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
  return store;
});

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './Routes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/rohanrana/Documents/Rohan /razzel-app/src/helpers/renderer.js";









var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

/* harmony default export */ __webpack_exports__["default"] = (function (req, store, context) {
  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.path,
    context: context,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__["renderRoutes"])(!(function webpackMissingModule() { var e = new Error("Cannot find module './Routes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))));
  return "<!doctype html>\n  <html lang=\"\">\n  <head>\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n      <meta charSet='utf-8' />\n      <title>Razzle Redux Example</title>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : "", "\n        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n  </head>\n  <body>\n      <div id=\"root\">").concat(content, "</div>\n      <script>\n        window.INTIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), "\n      </script>\n  </body>\n</html>");
});

/***/ }),

/***/ "./src/redux/store.js":
false,

/***/ "./src/renderer.js":
false,

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./src/Routes/index.js");
/* harmony import */ var _helpers_creteStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/creteStore */ "./src/helpers/creteStore.js");
/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/renderer */ "./src/helpers/renderer.js");





var server = express__WEBPACK_IMPORTED_MODULE_0___default()();
server.disable("x-powered-by").use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("/home/rohanrana/Documents/Rohan /razzel-app/public")).get("/*", function (req, res) {
  // console.log("REQ STORE",req)
  var store = Object(_helpers_creteStore__WEBPACK_IMPORTED_MODULE_3__["default"])(req);
  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["matchRoutes"])(_Routes__WEBPACK_IMPORTED_MODULE_2__["default"], req.path).map(function (_ref) {
    var route = _ref.route;
    console.log("routes", route);
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve)["catch"](resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_4__["default"])(req, store, context);
    console.log("Context", context);

    if (context.url) {
      res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  }); //     console.log("Request",req)
  //     const context = {};
  //     const markup = renderToString(
  //       <Provider store={store}>
  //         <StaticRouter context={context} location={req.url}>
  //           <App />
  //         </StaticRouter>
  //       </Provider>
  //     );
  //     if (context.url) {
  //       res.redirect(context.url);
  //     } else {
  //       res.status(200).send(
  //         `<!doctype html>
  //     <html lang="">
  //     <head>
  //         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //         <meta charset="utf-8" />
  //         <title>Welcome to Razzle</title>
  //         <meta name="viewport" content="width=device-width, initial-scale=1">
  //         ${
  //           assets.client.css
  //             ? `<link rel="stylesheet" href="${assets.client.css}">`
  //             : ""
  //         }
  //         ${
  //           process.env.NODE_ENV === "production"
  //             ? `<script src="${assets.client.js}" defer></script>`
  //             : `<script src="${assets.client.js}" defer crossorigin></script>`
  //         }
  //         <script>
  //         window.INTIAL_STATE =${serialize(store.getState())}
  //        </script>
  //     </head>
  //     <body>
  //         <div id="root">${markup}</div>
  //     </body>
  // </html>`
  //       );
  //     }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.72cae9dbf4a4248e4ec5.hot-update.js.map