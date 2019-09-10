exports.id = "main";
exports.modules = {

/***/ "./src/containers/Matches/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Matches/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_Actions_CommonActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/Actions/CommonActions */ "./src/redux/Actions/CommonActions.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! consola */ "consola");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/rohanrana/Documents/Rohan /razzel-app/src/containers/Matches/index.js";





var Matches =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Matches, _Component);

  function Matches(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Matches);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Matches).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Matches, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.OnDataRecevied();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(netxProps) {
      console.log("Data Next Props", netxProps.data.data); // if (netxProps.data.data.length > 0) {/

      this.setState({
        data: netxProps.data.data
      }); // }
    }
  }, {
    key: "render",
    value: function render() {
      //   consolaGlobalInstance.lo
      // console.log("DATA DTA A", this.props.data.data);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.state.data.map(function (d, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, d.employee_name);
      })));
    }
  }]);

  return Matches;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.data.loading,
    error: state.data.error,
    data: state.data.data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    OnDataRecevied: function OnDataRecevied() {
      return dispatch(Object(_redux_Actions_CommonActions__WEBPACK_IMPORTED_MODULE_7__["fetchData"])());
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(Object(_redux_Actions_CommonActions__WEBPACK_IMPORTED_MODULE_7__["fetchData"])());
  console.log("I m trying to load data");
};

/* harmony default export */ __webpack_exports__["default"] = ({
  loadData: loadData,
  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Matches)
});

/***/ }),

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
      if (data) {
        dispatch({
          type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"],
          payload: data
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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "consola":
/*!**************************!*\
  !*** external "consola" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("consola");

/***/ })

};
//# sourceMappingURL=main.d53cfd6a2d8e9b5904af.hot-update.js.map