exports.id = "main";
exports.modules = {

/***/ "./src/redux/Reducers/DataReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/Reducers/DataReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionTypes */ "./src/redux/ActionTypes/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INIT_STATE = {
  error: "",
  loading: false,
  message: "",
  data: []
};

var DataReducer = function DataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_START"]:
      {
        return _objectSpread({}, state, {
          error: "",
          message: "",
          loading: true
        });
      }

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUCCESS"]:
      {
        return _objectSpread({}, state, {
          error: "",
          message: "",
          loading: false,
          data: action.payload
        });
      }

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ERROR"]:
      {
        return _objectSpread({}, state, {
          loading: false,
          error: action.payload,
          message: ""
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (DataReducer);

/***/ })

};
//# sourceMappingURL=main.089c5e295ff00ae36ff6.hot-update.js.map