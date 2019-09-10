exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./src/Routes/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");





var server = express__WEBPACK_IMPORTED_MODULE_0___default()();
server.disable("x-powered-by").use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("/home/rohanrana/Documents/Rohan /razzel-app/public")).get("/*", function (req, res) {
  // console.log("REQ STORE",req)
  var store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_3__["default"])(req);
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
    var content = Object(_renderer__WEBPACK_IMPORTED_MODULE_4__["default"])(req, store, context);
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
}); // server.listen(3000,('Listenig...')

server.listen(3000, function () {
  console.log("Listening To Port 3000");
}); // export default server;

/***/ })

};
//# sourceMappingURL=main.b66a9c12d1ca4fcece9f.hot-update.js.map