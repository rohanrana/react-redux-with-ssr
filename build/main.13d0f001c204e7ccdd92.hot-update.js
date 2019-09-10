exports.id = "main";
exports.modules = {

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_TextInput_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TextInput/index */ "./src/components/TextInput/index.js");
/* harmony import */ var _components_EmailInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/EmailInput */ "./src/components/EmailInput/index.js");
/* harmony import */ var _components_SingleDropDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SingleDropDown */ "./src/components/SingleDropDown/index.js");
/* harmony import */ var _components_ChipsWithInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ChipsWithInput */ "./src/components/ChipsWithInput/index.js");
/* harmony import */ var _components_DependantDropDown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/DependantDropDown */ "./src/components/DependantDropDown/index.js");
/* harmony import */ var _components_MultiSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/MultiSelect */ "./src/components/MultiSelect/index.js");
/* harmony import */ var _components_SingleCheckBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/SingleCheckBox */ "./src/components/SingleCheckBox/index.js");
/* harmony import */ var _components_CheckBoxGroups__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/CheckBoxGroups */ "./src/components/CheckBoxGroups/index.js");
/* harmony import */ var _components_ReactDND__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/ReactDND */ "./src/components/ReactDND/index.js");
/* harmony import */ var _components_SingleDatePicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/SingleDatePicker */ "./src/components/SingleDatePicker/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Skeleton */ "./src/components/Skeleton/index.js");
/* harmony import */ var _components_RangePickerComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/RangePickerComponent */ "./src/components/RangePickerComponent/index.js");
/* harmony import */ var _components_TimePicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/TimePicker */ "./src/components/TimePicker/index.js");







var _jsxFileName = "/home/rohanrana/Documents/Rohan /razzel-app/src/containers/Home/index.js";

















var Content = antd__WEBPACK_IMPORTED_MODULE_8__["Layout"].Content;

var Home =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      user_name: "",
      email: "",
      // stateName: '',
      // cityName: '',
      sortedArray: [],
      showChild: false,
      state_id: null,
      child_id: null,
      selectedMain: null,
      loading: false,
      open: false,
      options: [{
        label: "India",
        value: "India",
        disabled: false
      }, {
        label: "UK",
        value: "UK",
        disabled: false
      }, {
        label: "USA",
        value: "USA",
        disabled: true
      }],
      mainArray: [{
        label: "Gujrat",
        id: 1,
        img_url: "http://tourism.gov.in/sites/default/files/gallery/Picture98.jpg"
      }, {
        label: "Rajasthan",
        id: 2,
        img_url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Thar_Khuri.jpg"
      }, {
        label: "Maharashtra",
        id: 3,
        img_url: "https://content3.jdmagicbox.com/comp/pune/74/020p5073874/catalogue/maharashtra-tourism-development-corporation-sasoon-road-pune-government-organisations-2wi8e0a.jpg"
      }, {
        label: "Jammu&Kashmir",
        id: 4,
        img_url: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/02/Best-Places-to-Visit-in-Kashmir.jpg"
      }],
      ChildArray: [{
        label: "Udaypur",
        id: 1,
        parent_id: 2
      }, {
        label: "Mumbai",
        id: 2,
        parent_id: 3
      }, {
        label: "Pune",
        id: 3,
        parent_id: 3
      }, {
        label: "Surat",
        id: 4,
        parent_id: 1
      }, {
        label: "Jaipur",
        id: 5,
        parent_id: 2
      }, {
        label: "Navsari",
        id: 6,
        parent_id: 1
      }, {
        label: "Shirinagar",
        id: 7,
        parent_id: 4
      }],
      tags: [],
      childArray: [],
      checked: false,
      selectedTime: null
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleInput", function (e) {
      console.log("Name", e.target.name);

      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, e.target.name, e.target.value));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleSubmit", function (e) {
      e.preventDefault();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleDropDownChange", function (value) {
      console.log("Drop Down Value", value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMainDropDownChange", function (value) {
      console.log("IDDDD", value);
      console.log("Main Drop Down Value", _this.state.ChildArray.filter(function (d) {
        return d.parent_id === value;
      }));

      _this.setState({
        state_id: value,
        child_id: null,
        childArray: _this.state.ChildArray.filter(function (d) {
          return d.parent_id === value;
        }),
        showChild: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChildDropDownChange", function (value) {
      console.log("child IDDDD", value);

      _this.setState({
        child_id: value // childArray: this.state.ChildArray.filter(d => d.parent_id === value),
        // showChild: true

      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMultiDropDownChange", function (values) {
      console.log("Multi IDDDD", values);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getTags", function (tags) {
      console.log("Tags IN", tags); // this.props.getIndexTags(tags);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChangeCheckBox", function (e) {
      console.log("Checked Single", e.target.checked);

      _this.setState({
        checked: e.target.checked
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChangeChekboxGroup", function (values) {
      console.log("Checked Groups", values);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "GetReorderedItems", function (items) {
      console.log("Reordered Items", items);

      _this.setState({
        sortedArray: items
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "disabledDateFunc", function (current) {
      //we can customize it
      return current && current < moment__WEBPACK_IMPORTED_MODULE_19___default()().endOf("day");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onDateChange", function (date, dateString) {
      console.log("Selected Date", dateString); // this.setState({ open: false });

      _this.calendar.onClose(); //  console.log('Cale',this.calendar.onCl)

    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "showSkeleton", function () {
      _this.setState({
        loading: true
      });

      setTimeout(function () {
        _this.setState({
          loading: false
        });
      }, 3000);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onTimeChange", function (time, timeString) {
      _this.setState({
        selectedTime: timeString
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          checked = _this$state.checked,
          user_name = _this$state.user_name,
          email = _this$state.email,
          options = _this$state.options,
          tags = _this$state.tags,
          mainArray = _this$state.mainArray,
          childArray = _this$state.childArray,
          state_id = _this$state.state_id,
          child_id = _this$state.child_id,
          showChild = _this$state.showChild;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["BackTop"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TextInput_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
        inputType: "text",
        name: "user_name",
        title: "Username Rohan 2222",
        controlFunc: this.handleInput,
        content: user_name,
        placeholder: "Enter A  Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_EmailInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ref: function ref(emailRef) {
          return _this2.eref = emailRef;
        },
        inputType: "email",
        name: "email",
        isRequired: true,
        title: "Email",
        controlFunc: this.handleInput,
        content: email,
        validateCallback: function validateCallback(isValid) {
          console.log("Validater", isValid);

          _this2.setState({
            isEmailValid: isValid
          });
        },
        placeholder: "Enter A  Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SingleDropDown__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Country" // defaultValue={'India'}
        ,
        options: options,
        handleDropDownChange: this.handleDropDownChange,
        placeholder: "Select Country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ChipsWithInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
        tags: tags,
        title: "Chips",
        textLabl: "Add Languages",
        getTags: this.getTags,
        numberOfChipsAllowed: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_DependantDropDown__WEBPACK_IMPORTED_MODULE_13__["default"], {
        mainArray: mainArray,
        childArray: childArray,
        selectedMain: state_id,
        selectedChild: child_id,
        showChild: showChild,
        handleMainDropDownChange: this.handleMainDropDownChange,
        handleChildDropDownChange: this.handleChildDropDownChange,
        mainPlacholder: "Select State",
        childPlaceholder: "Select City",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MultiSelect__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Multi Select" // defaultValue={'India'}
        ,
        options: options,
        handleMultiDropDownChange: this.handleMultiDropDownChange,
        placeholder: "Select Multiple options",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SingleCheckBox__WEBPACK_IMPORTED_MODULE_15__["default"], {
        checked: checked,
        className: "form-input",
        chklbl: "test it",
        onChangeCheckBox: this.onChangeCheckBox,
        title: "Single Checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CheckBoxGroups__WEBPACK_IMPORTED_MODULE_16__["default"], {
        options: options,
        onChangeChekboxGroup: this.onChangeChekboxGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, "Drag And Drop With Sorting Component Yeahhhh"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        style: {
          marginRight: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, this.state.sortedArray.map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: d.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          }
        }, d.label);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ReactDND__WEBPACK_IMPORTED_MODULE_17__["default"], {
        GetReorderedItems: this.GetReorderedItems,
        array: mainArray,
        direction: "horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, "Date Picker"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SingleDatePicker__WEBPACK_IMPORTED_MODULE_18__["default"], {
        ref: function ref(input) {
          return _this2.calendar = input;
        },
        onDateChange: this.onDateChange,
        disabledDateFunc: this.disabledDateFunc,
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, "Range Picker"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_RangePickerComponent__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onDateChange: this.onDateChange,
        disabledDateFunc: this.disabledDateFunc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, "Time Picker"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TimePicker__WEBPACK_IMPORTED_MODULE_22__["default"], {
        selectedTime: this.state.selectedTime //  format={'HH:mm'}
        //  defaultValue={moment()}
        ,
        use12Hours: true,
        onChange: this.onTimeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, "Skeleton"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          background: "white",
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, this.state.loading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Skeleton__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: "skeleton-custom",
        rows: 4,
        isAvtar: true,
        isAnimation: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        disabled: this.state.loading,
        onClick: this.showSkeleton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, "Show Skeleton")))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.13d0f001c204e7ccdd92.hot-update.js.map