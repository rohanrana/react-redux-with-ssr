exports.id = "main";
exports.modules = {

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./node_modules/react-router-config/esm/react-router-config.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-router-config/esm/react-router-config.js ***!
  \*********************************************************************/
/*! exports provided: matchRoutes, renderRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchRoutes", function() { return matchRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRoutes", function() { return renderRoutes; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "@babel/runtime/helpers/esm/extends");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_0__["Router"].computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Switch"], switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(route.component, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}




/***/ }),

/***/ "./src/App.css":
false,

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/Header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _jsxFileName = "/home/rohanrana/Documents/Rohan /razzel-app/src/App.js";



 // import 'semantic-ui-css/semantic.min.css'

var App = function App(_ref) {
  var route = _ref.route;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module './components/Header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: App // loadData: ({dispatch}) => dispatch(fetchCurrentUser())

});

/***/ }),

/***/ "./src/components/CheckBoxGroups/index.js":
false,

/***/ "./src/components/ChipsWithInput/index.js":
false,

/***/ "./src/components/DependantDropDown/index.js":
false,

/***/ "./src/components/EmailInput/index.js":
false,

/***/ "./src/components/MultiSelect/index.js":
false,

/***/ "./src/components/RangePickerComponent/index.js":
false,

/***/ "./src/components/ReactDND/index.js":
false,

/***/ "./src/components/SingleCheckBox/index.js":
false,

/***/ "./src/components/SingleDatePicker/index.js":
false,

/***/ "./src/components/SingleDropDown/index.js":
false,

/***/ "./src/components/Skeleton/index.js":
false,

/***/ "./src/components/TextInput/index.js":
false,

/***/ "./src/components/TimePicker/index.js":
false,

/***/ "./src/containers/Home/index.js":
false,

/***/ "./src/containers/Matches/index.js":
false,

/***/ "./src/redux/Actions/CommonActions.js":
false,

/***/ "@babel/runtime/helpers/assertThisInitialized":
false,

/***/ "@babel/runtime/helpers/asyncToGenerator":
false,

/***/ "@babel/runtime/helpers/classCallCheck":
false,

/***/ "@babel/runtime/helpers/createClass":
false,

/***/ "@babel/runtime/helpers/esm/extends":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/esm/extends" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/extends");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
false,

/***/ "@babel/runtime/helpers/getPrototypeOf":
false,

/***/ "@babel/runtime/helpers/inherits":
false,

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
false,

/***/ "@babel/runtime/helpers/slicedToArray":
false,

/***/ "@babel/runtime/helpers/toConsumableArray":
false,

/***/ "@babel/runtime/regenerator":
false,

/***/ "antd":
false,

/***/ "axios":
false,

/***/ "consola":
false,

/***/ "moment":
false,

/***/ "prop-types":
false,

/***/ "rc-tween-one":
false,

/***/ "react-beautiful-dnd":
false,

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom/Route":
false,

/***/ "react-router-dom/Switch":
false,

/***/ "validator":
false

};
//# sourceMappingURL=main.b477f46eaa8d38ddb967.hot-update.js.map