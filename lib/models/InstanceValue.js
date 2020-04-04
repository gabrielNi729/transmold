"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstanceValue = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _types = _interopRequireDefault(require("../constants/types/types"));

var _DefOperatorParameter = require("./DefOperatorParameter");

var _InstanceExpression = require("./InstanceExpression");

var _MetadataField = require("./MetadataField");

var _MetadataEnum = require("./MetadataEnum");

var InstanceValue = function () {
  function InstanceValue(_ref) {
    var parameter = _ref.parameter;
    (0, _classCallCheck2["default"])(this, InstanceValue);

    if (InstanceValue.validate.apply(InstanceValue, arguments)) {
      this.parameter = parameter;
      this.inputType = _types["default"].INPUT.CONSTANT;
      this.value = null;
      this.legitimate = false;
      this.actualResultDataType = null;
    }
  }

  (0, _createClass2["default"])(InstanceValue, [{
    key: "getHolder",
    value: function getHolder() {
      return this.parameter.getHolder();
    }
  }, {
    key: "getParameterDataType",
    value: function getParameterDataType() {
      return this.parameter.getDataType();
    }
  }, {
    key: "getDataType",
    value: function getDataType() {
      var type = this.getParameterDataType();

      if (!_types["default"].isUncertainDataType(type)) {
        return type;
      } else {
        return this.actualResultDataType;
      }
    }
  }, {
    key: "getCompatibleInputTypes",
    value: function getCompatibleInputTypes() {
      return this.parameter.getCompatibleInputTypes();
    }
  }, {
    key: "isInputCompatible",
    value: function isInputCompatible(type) {
      return this.parameter.isInputCompatible(type);
    }
  }, {
    key: "getRegulations",
    value: function getRegulations() {
      return this.parameter.getRegulations();
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      return this.inputType;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "isLegitimate",
    value: function isLegitimate() {
      return this.legitimate;
    }
  }, {
    key: "updateLegitimate",
    value: function updateLegitimate() {
      var uncertain = _types["default"].isUncertainDataType(this.getParameterDataType());

      if (this.value instanceof _InstanceExpression.InstanceExpression) {
        this.legitimate = (this.parameter.getDataType() === this.value.getResultDataType() || uncertain) && this.value.isLegitimate();
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var uncertain = _types["default"].isUncertainDataType(this.getParameterDataType());

      if (value instanceof _MetadataField.MetadataField) {
        this.inputType = _types["default"].INPUT.VARIABLE;
        this.legitimate = this.parameter.getDataType() === value.getDataType();

        if (uncertain) {
          this.actualResultDataType = value.getDataType();
          this.legitimate = true;
        }
      } else if (value instanceof _InstanceExpression.InstanceExpression) {
        this.inputType = _types["default"].INPUT.INSTANCE;
        this.legitimate = this.parameter.getDataType() === value.getResultDataType() && value.isLegitimate();

        if (uncertain) {
          this.actualResultDataType = value.getResultDataType();
          this.legitimate = value.isLegitimate();
        }
      } else if (value instanceof _MetadataEnum.MetadataEnum) {
        this.inputType = _types["default"].INPUT.ENUMERATE;
        this.legitimate = _types["default"].regTestMulti(this.getRegulations(), value.getCode());

        if (uncertain) {
          this.actualResultDataType = value.getDataType();
        }
      } else {
        this.inputType = _types["default"].INPUT.CONSTANT;
        this.legitimate = _types["default"].regTestMulti(this.getRegulations(), value);

        if (uncertain) {
          this.actualResultDataType = _types["default"].identifyDataType(value);
        }
      }

      if (!this.parameter.isInputCompatible(this.inputType)) {
        console.error("setting value: input type [".concat(this.inputType, "] not compatible here"));
      }

      this.value = value;
      return this;
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var parameter = _ref2.parameter;
      var prefix = "instantiating parameter";

      if (!(parameter instanceof _DefOperatorParameter.DefOperatorParameter)) {
        console.error("".concat(prefix, ": given object not an instance of Parameter"));
        return false;
      }

      return true;
    }
  }]);
  return InstanceValue;
}();

exports.InstanceValue = InstanceValue;