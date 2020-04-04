"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefOperatorParameter = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _types = _interopRequireDefault(require("../constants/types/types"));

var DefOperatorParameter = function () {
  function DefOperatorParameter(_ref) {
    var dataType = _ref.dataType,
        _ref$inputTypes = _ref.inputTypes,
        inputTypes = _ref$inputTypes === void 0 ? [] : _ref$inputTypes,
        _ref$regulations = _ref.regulations,
        regulations = _ref$regulations === void 0 ? [] : _ref$regulations;
    (0, _classCallCheck2["default"])(this, DefOperatorParameter);

    if (DefOperatorParameter.validate.apply(DefOperatorParameter, arguments)) {
      this.templateId = null;
      this.holder = null;
      this.dataType = dataType;
      this.inputTypes = inputTypes.length === 0 ? [_types["default"].INPUT.CONSTANT, _types["default"].INPUT.ENUMERATE, _types["default"].INPUT.VARIABLE, _types["default"].INPUT.INSTANCE] : inputTypes;
      this.regulations = regulations.length === 0 ? [dataType] : regulations;
    }
  }

  (0, _createClass2["default"])(DefOperatorParameter, [{
    key: "getTemplateId",
    value: function getTemplateId() {
      return this.templateId;
    }
  }, {
    key: "getHolder",
    value: function getHolder() {
      return this.holder;
    }
  }, {
    key: "getDataType",
    value: function getDataType() {
      return this.dataType;
    }
  }, {
    key: "getCompatibleInputTypes",
    value: function getCompatibleInputTypes() {
      return this.inputTypes;
    }
  }, {
    key: "isInputCompatible",
    value: function isInputCompatible(type) {
      if (_types["default"].isLegalInputType(type)) {
        return this.inputTypes.includes(type);
      } else {
        console.error("checking compatibility: input type [".concat(type, "] does not exist"));
      }
    }
  }, {
    key: "getRegulations",
    value: function getRegulations() {
      return this.regulations;
    }
  }, {
    key: "setTemplateId",
    value: function setTemplateId(templateId) {
      this.templateId = templateId;
    }
  }, {
    key: "setHolder",
    value: function setHolder(holder) {
      this.holder = holder;
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var dataType = _ref2.dataType,
          _ref2$inputTypes = _ref2.inputTypes,
          inputTypes = _ref2$inputTypes === void 0 ? [] : _ref2$inputTypes,
          _ref2$regulations = _ref2.regulations,
          regulations = _ref2$regulations === void 0 ? [] : _ref2$regulations;
      var prefix = "defining parameter";

      if (!_types["default"].isLegalDataType(dataType)) {
        console.error("".concat(prefix, ": data type can not be [").concat(dataType, "]"));
        return false;
      }

      if (!inputTypes.every(function (type) {
        return _types["default"].isLegalInputType(type);
      })) {
        console.error("".concat(prefix, ": input type does not exist"));
        return false;
      }

      if (!regulations.every(function (type) {
        return _types["default"].isLegalDataType(type);
      })) {
        console.error("".concat(prefix, ": regular type does not exist"));
        return false;
      }

      return true;
    }
  }]);
  return DefOperatorParameter;
}();

exports.DefOperatorParameter = DefOperatorParameter;