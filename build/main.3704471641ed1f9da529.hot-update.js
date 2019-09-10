exports.id = "main";
exports.modules = {

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers */ "./src/redux/Reducers/index.js");




var configureStore = function configureStore(preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));

  if (true) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(!(function webpackMissingModule() { var e = new Error("Cannot find module '../reducers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
      var nextRootReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../Reducers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))["default"];

      store.replaceReducer(nextRootReducer);
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
  }

  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "redux-logger":
false

};
//# sourceMappingURL=main.3704471641ed1f9da529.hot-update.js.map