exports.id = "main";
exports.modules = {

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
  var store = Object(_helpers_creteStore__WEBPACK_IMPORTED_MODULE_3__["default"])(req);
  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["matchRoutes"])(_Routes__WEBPACK_IMPORTED_MODULE_2__["default"], req.path).map(function (_ref) {
    var route = _ref.route;
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
  });
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.99561c2eb6c547764f74.hot-update.js.map