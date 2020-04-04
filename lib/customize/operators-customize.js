"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizedParameter = exports.CustomizedTemplate = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _DefOperatorTemplate2 = require("../models/DefOperatorTemplate");

var _DefOperatorParameter2 = require("../models/DefOperatorParameter");

var _operators = require("../operators/operators");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var starterId = 10000;
var currentId = starterId;

var CustomizedTemplate = function (_DefOperatorTemplate) {
  (0, _inherits2["default"])(CustomizedTemplate, _DefOperatorTemplate);

  var _super = _createSuper(CustomizedTemplate);

  function CustomizedTemplate(name, context, templateDisplay, templateCode, resultDataType, params) {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomizedTemplate);
    _this = _super.call(this, {
      id: currentId,
      name: name,
      alias: '',
      context: context,
      templateDisplay: templateDisplay,
      templateCode: templateCode,
      resultDataType: resultDataType,
      params: params,
      customized: true
    });
    currentId++;
    (0, _operators.addOp)((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(CustomizedTemplate, [{
    key: "as",
    value: function as(alias) {
      this.setAlias(alias);
      (0, _operators.mapOp)(this);
      return this;
    }
  }]);
  return CustomizedTemplate;
}(_DefOperatorTemplate2.DefOperatorTemplate);

exports.CustomizedTemplate = CustomizedTemplate;

var CustomizedParameter = function (_DefOperatorParameter) {
  (0, _inherits2["default"])(CustomizedParameter, _DefOperatorParameter);

  var _super2 = _createSuper(CustomizedParameter);

  function CustomizedParameter(dataType, inputTypes, regulations) {
    (0, _classCallCheck2["default"])(this, CustomizedParameter);
    return _super2.call(this, {
      dataType: dataType,
      inputTypes: inputTypes,
      regulations: regulations
    });
  }

  return CustomizedParameter;
}(_DefOperatorParameter2.DefOperatorParameter);

exports.CustomizedParameter = CustomizedParameter;