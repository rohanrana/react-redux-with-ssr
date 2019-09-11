exports.id = "main";
exports.modules = {

/***/ "./node_modules/react-redux-loading-bar/build/immutable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux-loading-bar/build/immutable.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _loading_bar = __webpack_require__(/*! ./loading_bar */ "./node_modules/react-redux-loading-bar/build/loading_bar.js");

var _loading_bar_ducks = __webpack_require__(/*! ./loading_bar_ducks */ "./node_modules/react-redux-loading-bar/build/loading_bar_ducks.js");

var mapImmutableStateToProps = function mapImmutableStateToProps(state, ownProps) {
  return {
    loading: state.get('loadingBar')[ownProps.scope || _loading_bar_ducks.DEFAULT_SCOPE]
  };
};

exports.default = (0, _reactRedux.connect)(mapImmutableStateToProps)(_loading_bar.LoadingBar);

/***/ }),

/***/ "./node_modules/react-redux-loading-bar/build/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-redux-loading-bar/build/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showLoading = exports.resetLoading = exports.loadingBarReducer = exports.loadingBarMiddleware = exports.LoadingBar = exports.ImmutableLoadingBar = exports.hideLoading = undefined;

var _loading_bar = __webpack_require__(/*! ./loading_bar */ "./node_modules/react-redux-loading-bar/build/loading_bar.js");

var _loading_bar2 = _interopRequireDefault(_loading_bar);

var _loading_bar_middleware = __webpack_require__(/*! ./loading_bar_middleware */ "./node_modules/react-redux-loading-bar/build/loading_bar_middleware.js");

var _loading_bar_middleware2 = _interopRequireDefault(_loading_bar_middleware);

var _loading_bar_ducks = __webpack_require__(/*! ./loading_bar_ducks */ "./node_modules/react-redux-loading-bar/build/loading_bar_ducks.js");

var _immutable = __webpack_require__(/*! ./immutable */ "./node_modules/react-redux-loading-bar/build/immutable.js");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hideLoading = _loading_bar_ducks.hideLoading;
exports.ImmutableLoadingBar = _immutable2.default;
exports.LoadingBar = _loading_bar.LoadingBar;
exports.loadingBarMiddleware = _loading_bar_middleware2.default;
exports.loadingBarReducer = _loading_bar_ducks.loadingBarReducer;
exports.resetLoading = _loading_bar_ducks.resetLoading;
exports.showLoading = _loading_bar_ducks.showLoading;
exports.default = _loading_bar2.default;

/***/ }),

/***/ "./node_modules/react-redux-loading-bar/build/loading_bar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux-loading-bar/build/loading_bar.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoadingBar = exports.TERMINATING_ANIMATION_DURATION = exports.ANIMATION_DURATION = exports.PROGRESS_INCREASE = exports.MAX_PROGRESS = exports.UPDATE_TIME = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "react-lifecycles-compat");

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _loading_bar_ducks = __webpack_require__(/*! ./loading_bar_ducks */ "./node_modules/react-redux-loading-bar/build/loading_bar_ducks.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UPDATE_TIME = exports.UPDATE_TIME = 400;
var MAX_PROGRESS = exports.MAX_PROGRESS = 99;
var PROGRESS_INCREASE = exports.PROGRESS_INCREASE = 20;
var ANIMATION_DURATION = exports.ANIMATION_DURATION = UPDATE_TIME * 2;
var TERMINATING_ANIMATION_DURATION = exports.TERMINATING_ANIMATION_DURATION = UPDATE_TIME / 2;

var initialState = {
  percent: 0,
  status: 'hidden'
};

var LoadingBar = function (_Component) {
  _inherits(LoadingBar, _Component);

  function LoadingBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoadingBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadingBar.__proto__ || Object.getPrototypeOf(LoadingBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, initialState), _this.reset = function () {
      _this.terminatingAnimationTimeoutId = null;
      _this.setState(initialState);
    }, _this.newPercent = function (percent, progressIncrease) {
      // Use cosine as a smoothing function
      // It could be any function to slow down progress near the ending 100%
      var smoothedProgressIncrease = progressIncrease * Math.cos(percent * (Math.PI / 2 / 100));

      return percent + smoothedProgressIncrease;
    }, _this.simulateProgress = function () {
      _this.setState(function (prevState, _ref2) {
        var maxProgress = _ref2.maxProgress,
            progressIncrease = _ref2.progressIncrease;
        var percent = prevState.percent;

        var newPercent = _this.newPercent(percent, progressIncrease);

        if (newPercent <= maxProgress) {
          percent = newPercent;
        }

        return { percent: percent };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoadingBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var status = this.state.status;

      if (status === 'starting') {
        this.start();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var status = this.state.status;

      if (prevState.status !== status) {
        if (status === 'starting') {
          this.start();
        }

        if (status === 'stopping') {
          this.stop();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.progressIntervalId);
      clearTimeout(this.terminatingAnimationTimeoutId);
    }
  }, {
    key: 'start',
    value: function start() {
      var updateTime = this.props.updateTime;

      this.progressIntervalId = setInterval(this.simulateProgress, updateTime);
      this.setState({ status: 'running' });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var showFastActions = this.props.showFastActions;

      clearInterval(this.progressIntervalId);
      this.progressIntervalId = null;

      var terminatingAnimationDuration = this.isShown() || showFastActions ? TERMINATING_ANIMATION_DURATION : 0;

      this.terminatingAnimationTimeoutId = setTimeout(this.reset, terminatingAnimationDuration);

      this.setState({ percent: 100 });
    }
  }, {
    key: 'isShown',
    value: function isShown() {
      var percent = this.state.percent;

      return percent > 0 && percent <= 100;
    }
  }, {
    key: 'buildStyle',
    value: function buildStyle() {
      var _state = this.state,
          status = _state.status,
          percent = _state.percent;
      var _props = this.props,
          direction = _props.direction,
          className = _props.className,
          customStyle = _props.style;


      var animationDuration = status === 'stopping' ? TERMINATING_ANIMATION_DURATION : ANIMATION_DURATION;

      var coefficient = direction === 'rtl' ? 1 : -1;
      var tx = (100 - percent) * coefficient;

      var style = {
        opacity: '1',
        transform: 'translate3d(' + tx + '%, 0px, 0px)',
        msTransform: 'translate3d(' + tx + '%, 0px, 0px)',
        WebkitTransform: 'translate3d(' + tx + '%, 0px, 0px)',
        MozTransform: 'translate3d(' + tx + '%, 0px, 0px)',
        OTransform: 'translate3d(' + tx + '%, 0px, 0px)',
        transition: 'transform ' + animationDuration + 'ms linear 0s',
        msTransition: '-ms-transform ' + animationDuration + 'ms linear 0s',
        WebkitTransition: '-webkit-transform ' + animationDuration + 'ms linear 0s',
        MozTransition: '-moz-transform ' + animationDuration + 'ms linear 0s',
        OTransition: '-o-transform ' + animationDuration + 'ms linear 0s',
        width: '100%',
        willChange: 'transform, opacity'
        // Use default styling if there's no CSS class applied
      };if (!className) {
        style.height = '3px';
        style.backgroundColor = 'red';
        style.position = 'absolute';
      }

      if (this.isShown()) {
        style.opacity = '1';
      } else {
        style.opacity = '0';
      }

      return _extends({}, style, customStyle);
    }
  }, {
    key: 'render',
    value: function render() {
      var status = this.state.status;
      var className = this.props.className;

      if (status === 'hidden') {
        return _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { style: this.buildStyle(), className: className }),
        _react2.default.createElement('div', { style: { display: 'table', clear: 'both' } })
      );
    }
  }], [{
    key: 'shouldStart',
    value: function shouldStart(props, state) {
      return props.loading > 0 && ['hidden', 'stopping'].indexOf(state.status) >= 0;
    }
  }, {
    key: 'shouldStop',
    value: function shouldStop(props, state) {
      return props.loading === 0 && ['starting', 'running'].indexOf(state.status) >= 0;
    }
  }, {
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (LoadingBar.shouldStart(nextProps, prevState)) {
        return { status: 'starting' };
      }

      if (LoadingBar.shouldStop(nextProps, prevState)) {
        return { status: 'stopping' };
      }

      return null;
    }
  }]);

  return LoadingBar;
}(_react.Component);

LoadingBar.propTypes = {
  className: _propTypes.string,
  direction: _propTypes.string,
  loading: _propTypes.number,
  maxProgress: _propTypes.number,
  progressIncrease: _propTypes.number,
  scope: _propTypes.string,
  showFastActions: _propTypes.bool,
  style: _propTypes.object,
  updateTime: _propTypes.number
};
LoadingBar.defaultProps = {
  className: '',
  direction: 'ltr',
  loading: 0,
  maxProgress: MAX_PROGRESS,
  progressIncrease: PROGRESS_INCREASE,
  scope: _loading_bar_ducks.DEFAULT_SCOPE,
  showFastActions: false,
  style: {},
  updateTime: UPDATE_TIME
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    loading: state.loadingBar[ownProps.scope || _loading_bar_ducks.DEFAULT_SCOPE]
  };
};

(0, _reactLifecyclesCompat.polyfill)(LoadingBar);
var ConnectedLoadingBar = (0, _reactRedux.connect)(mapStateToProps)(LoadingBar);

exports.LoadingBar = LoadingBar;
exports.default = ConnectedLoadingBar;

/***/ }),

/***/ "./node_modules/react-redux-loading-bar/build/loading_bar_ducks.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-redux-loading-bar/build/loading_bar_ducks.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.showLoading = showLoading;
exports.hideLoading = hideLoading;
exports.resetLoading = resetLoading;
exports.loadingBarReducer = loadingBarReducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHOW = exports.SHOW = 'loading-bar/SHOW';
var HIDE = exports.HIDE = 'loading-bar/HIDE';
var RESET = exports.RESET = 'loading-bar/RESET';

var DEFAULT_SCOPE = exports.DEFAULT_SCOPE = 'default';

function showLoading() {
  var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCOPE;

  return {
    type: SHOW,
    payload: {
      scope: scope
    }
  };
}

function hideLoading() {
  var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCOPE;

  return {
    type: HIDE,
    payload: {
      scope: scope
    }
  };
}

function resetLoading() {
  var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCOPE;

  return {
    type: RESET,
    payload: {
      scope: scope
    }
  };
}

function loadingBarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref = action.payload || {},
      _ref$scope = _ref.scope,
      scope = _ref$scope === undefined ? DEFAULT_SCOPE : _ref$scope;

  switch (action.type) {
    case SHOW:
      return _extends({}, state, _defineProperty({}, scope, (state[scope] || 0) + 1));
    case HIDE:
      return _extends({}, state, _defineProperty({}, scope, Math.max(0, (state[scope] || 1) - 1)));
    case RESET:
      return _extends({}, state, _defineProperty({}, scope, 0));
    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/react-redux-loading-bar/build/loading_bar_middleware.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-redux-loading-bar/build/loading_bar_middleware.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = loadingBarMiddleware;

var _loading_bar_ducks = __webpack_require__(/*! ./loading_bar_ducks */ "./node_modules/react-redux-loading-bar/build/loading_bar_ducks.js");

var defaultTypeSuffixes = ['PENDING', 'FULFILLED', 'REJECTED'];

function loadingBarMiddleware() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypeSuffixes;
  var scope = config.scope || _loading_bar_ducks.DEFAULT_SCOPE;

  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type) {
          var _promiseTypeSuffixes = _slicedToArray(promiseTypeSuffixes, 3),
              PENDING = _promiseTypeSuffixes[0],
              FULFILLED = _promiseTypeSuffixes[1],
              REJECTED = _promiseTypeSuffixes[2];

          var isPending = new RegExp(PENDING + '$', 'g');
          var isFulfilled = new RegExp(FULFILLED + '$', 'g');
          var isRejected = new RegExp(REJECTED + '$', 'g');

          var actionScope = action.meta && action.meta.scope || action.scope || scope;

          if (action.type.match(isPending)) {
            dispatch((0, _loading_bar_ducks.showLoading)(actionScope));
          } else if (action.type.match(isFulfilled) || action.type.match(isRejected)) {
            dispatch((0, _loading_bar_ducks.hideLoading)(actionScope));
          }
        }

        return next(action);
      };
    };
  };
}

/***/ }),

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
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-loading-bar */ "./node_modules/react-redux-loading-bar/build/index.js");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/rohanrana/Documents/Rohan /react-redux-with-ssr/src/App.js";





var App = function App(_ref) {
  var route = _ref.route;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: App
});

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react-lifecycles-compat":
/*!******************************************!*\
  !*** external "react-lifecycles-compat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lifecycles-compat");

/***/ })

};
//# sourceMappingURL=main.53fb053ac6f3dcf9d165.hot-update.js.map