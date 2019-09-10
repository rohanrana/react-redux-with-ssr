exports.id = "main";
exports.modules = {

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/Home.css":
/*!**********************!*\
  !*** ./src/Home.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Home {\n  text-align: center;\n}\n\n.Home-logo {\n  animation: Home-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.Home-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.Home-intro {\n  font-size: large;\n}\n\n.Home-resources {\n  list-style: none;\n}\n\n.Home-resources > li {\n  display: inline-block;\n  padding: 1rem;\n}\n\n@keyframes Home-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
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
/* harmony import */ var _react_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./react.svg */ "./src/react.svg");
/* harmony import */ var _react_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Home.css */ "./src/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/rohanrana/Documents/Rohan /razzel-app/src/Home.js";




var Home =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _React$Component);

  function Home() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Home-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _react_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "Home-logo",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "Welsdsdsdasdssscccccccome to Razzle")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Home-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "rohan ranassss2222 get started, edit ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "src/App.js"), " or", ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "src/Home.js"), " and save to reload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "Home-resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/jaredpalmer/razzle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Docs")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/jaredpalmer/razzle/issues",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Issues")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://palmer.chat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Community Slack"))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = ({
  component: Home
});

/***/ }),

/***/ "./src/Routes/index.js":
/*!*****************************!*\
  !*** ./src/Routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home */ "./src/Home.js");
/* harmony import */ var _containers_Matches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Matches */ "./src/containers/Matches/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // refactoring code for ssr
// export default () => {
//   return <div>
//     <Route exact path="/" component={Home} />
//     <Route path='/users' component={usersList}/>
//   </div>;
// };

/* harmony default export */ __webpack_exports__["default"] = ([_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  routes: [_objectSpread({}, _Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: "/",
    exact: true
  }), _objectSpread({}, _containers_Matches__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "/admins"
  })]
})]);

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

/***/ "./src/react.svg":
/*!***********************!*\
  !*** ./src/react.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/react.9a28da9f.svg";

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
false,

/***/ "@babel/runtime/helpers/asyncToGenerator":
false,

/***/ "@babel/runtime/helpers/extends":
false,

/***/ "@babel/runtime/helpers/slicedToArray":
false,

/***/ "@babel/runtime/helpers/toConsumableArray":
false,

/***/ "@babel/runtime/regenerator":
false,

/***/ "antd":
false,

/***/ "moment":
false,

/***/ "prop-types":
false,

/***/ "rc-tween-one":
false,

/***/ "react-beautiful-dnd":
false,

/***/ "validator":
false

};
//# sourceMappingURL=main.61d6d6c4648e4d1b1e32.hot-update.js.map