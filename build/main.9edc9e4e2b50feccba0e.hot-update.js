exports.id = "main";
exports.modules = {

/***/ "./src/containers/Employees/index.js":
/*!*******************************************!*\
  !*** ./src/containers/Employees/index.js ***!
  \*******************************************/
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/rohanrana/Documents/Rohan /react-redux-with-ssr/src/containers/Employees/index.js";




var Meta = antd__WEBPACK_IMPORTED_MODULE_8__["Card"].Meta;
var Header = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Footer;

var Empolyees =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Empolyees, _Component);

  function Empolyees(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Empolyees);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Empolyees).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Empolyees, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.OnDataRecevied();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(netxProps) {
      console.log(netxProps);
      this.setState({
        data: netxProps.data.data
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Header, {
        style: {
          position: "fixed",
          zIndex: 1,
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: ["2"],
        style: {
          lineHeight: "64px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Razzel With Redux "))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Content, {
        style: {
          padding: "0 50px",
          marginTop: 64
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loading_div",
        style: {
          padding: 24,
          minHeight: 380,
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.props.loading && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Spin"], {
        size: "large",
        spinning: true,
        tip: "Loading..",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.state.data.splice(0, 10).map(function (d, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          key: index,
          style: {
            marginTop: 10
          },
          span: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          hoverable: true,
          style: {
            width: 240
          },
          cover: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            alt: "example",
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Meta, {
          title: d.employee_name,
          description: "www.instagram.com",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        })));
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Footer, {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Made With love in India"));
    }
  }]);

  return Empolyees;
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
};

/* harmony default export */ __webpack_exports__["default"] = ({
  loadData: loadData,
  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Empolyees)
});

/***/ })

};
//# sourceMappingURL=main.9edc9e4e2b50feccba0e.hot-update.js.map