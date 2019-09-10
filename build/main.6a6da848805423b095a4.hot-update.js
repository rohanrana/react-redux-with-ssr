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
  } // componentDidMount() {
  //   this.props.OnDataRecevied();
  // }
  // componentWillReceiveProps(netxProps) {
  //   this.setState({ data: netxProps.data.data });
  //   // }
  // }


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Matches, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Header, {
        style: {
          position: "fixed",
          zIndex: 1,
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Menu, {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: ["2"],
        style: {
          lineHeight: "64px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Menu.Item, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "nav 1"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Menu.Item, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "nav 2"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Menu.Item, {
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "nav 3"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Content, {
        style: {
          padding: "0 50px",
          marginTop: 64
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Breadcrumb, {
        style: {
          margin: "16px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Breadcrumb.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Breadcrumb.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "List"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Breadcrumb.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "App")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Content")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Footer, {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Ant Design \xA92018 Created by Ant UED"));
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

/***/ })

};
//# sourceMappingURL=main.6a6da848805423b095a4.hot-update.js.map