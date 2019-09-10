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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Routes */ "./src/Routes/index.js");






var server = express__WEBPACK_IMPORTED_MODULE_2___default()();
server.disable("x-powered-by").use(express__WEBPACK_IMPORTED_MODULE_2___default.a["static"]("/home/rohanrana/Documents/Rohan /razzel-app/public")).get("/*", function (req, res) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(req);
  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__["matchRoutes"])(_Routes__WEBPACK_IMPORTED_MODULE_5__["default"], req.path).map(function (_ref) {
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
    var content = renderer(req, store, context);
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

/***/ }),

/***/ "react-dom/server":
false,

/***/ "react-router-dom":
false,

/***/ "redux-logger":
false,

/***/ "redux-thunk":
false,

/***/ "serialize-javascript":
false

};
//# sourceMappingURL=main.dbefb8d9e4f9e0ea776b.hot-update.js.map