exports.id = "main";
exports.modules = {

/***/ "./src/redux/Actions/CommonActions.js":
/*!********************************************!*\
  !*** ./src/redux/Actions/CommonActions.js ***!
  \********************************************/
/*! exports provided: fetchStart, fetchSuccess, fetchError, fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return fetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return fetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return fetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionTypes */ "./src/redux/ActionTypes/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var fetchStart = function fetchStart() {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
  };
};
var fetchSuccess = function fetchSuccess() {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
  };
};
var fetchError = function fetchError(error) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"],
    payload: error
  };
};
var fetchData = function fetchData() {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://dummy.restapiexample.com/api/v1/employees").then(function (data) {
      if (data.code === "OK") {
        dispatch({
          type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
        });
        console.log("Data In Redux", data);
      } else {
        dispatch({
          type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"],
          payload: data.error
        });
      }
    })["catch"](function (error) {
      dispatch({
        type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"],
        payload: error.message
      });
      console.log("Error****:", error.message);
    });
  };
};

/***/ })

};
//# sourceMappingURL=main.5cb89497b4bbbeaa5abc.hot-update.js.map