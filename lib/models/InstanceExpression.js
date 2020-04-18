"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstanceExpression = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = _interopRequireDefault(require("../constants/types/types"));

var _DefOperatorTemplate = require("./DefOperatorTemplate");

var _DefOperatorParameter = require("./DefOperatorParameter");

var _DefOperatorText = require("./DefOperatorText");

var _InstanceValue = require("./InstanceValue");

var InstanceExpression = function () {
  function InstanceExpression(_ref) {
    var template = _ref.template,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'unnamed' : _ref$name;
    (0, _classCallCheck2["default"])(this, InstanceExpression);

    if (InstanceExpression.validate.apply(InstanceExpression, arguments)) {
      this.template = template;
      this.name = name;
      this.values = {};
      this.actualResultDataType = null;
      this.segmentsDisplay = [];
      this.segmentsCode = [];
      this.instancesQuoters = [];
      this.outWrap = '';
      this.initValuesAndSegments();
    }
  }

  (0, _createClass2["default"])(InstanceExpression, [{
    key: "getTemplateId",
    value: function getTemplateId() {
      return this.template.getId();
    }
  }, {
    key: "getTemplateName",
    value: function getTemplateName() {
      return this.template.getName();
    }
  }, {
    key: "getTemplateResultDataType",
    value: function getTemplateResultDataType() {
      return this.template.getResultDataType();
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getResultDataType",
    value: function getResultDataType() {
      var type = this.getTemplateResultDataType();

      if (_types["default"].isLegalDataType(type)) {
        return type;
      } else {
        return this.actualResultDataType;
      }
    }
  }, {
    key: "getSegmentsDisplay",
    value: function getSegmentsDisplay() {
      return this.segmentsDisplay;
    }
  }, {
    key: "getSegmentsCode",
    value: function getSegmentsCode() {
      return this.segmentsCode;
    }
  }, {
    key: "getParamSize",
    value: function getParamSize() {
      return this.template.getParamSize();
    }
  }, {
    key: "getFirstParamIndex",
    value: function getFirstParamIndex() {
      return this.template.getFirstParamIndex();
    }
  }, {
    key: "getFirstTextIndex",
    value: function getFirstTextIndex() {
      return this.template.getFirstTextIndex();
    }
  }, {
    key: "getFirstTextNeighbors",
    value: function getFirstTextNeighbors(pos) {
      var index = pos === 'post' ? 1 : 0;
      return this.template.getFirstTextNeighbors()[index];
    }
  }, {
    key: "getInstanceQuoters",
    value: function getInstanceQuoters() {
      return this.instancesQuoters;
    }
  }, {
    key: "addInstanceQuoter",
    value: function addInstanceQuoter(instance) {
      this.instancesQuoters.push(instance);
    }
  }, {
    key: "removeInstanceQuoter",
    value: function removeInstanceQuoter(instance) {
      this.instancesQuoters = this.instancesQuoters.filter(function (i) {
        return i !== instance;
      });
    }
  }, {
    key: "bindInstanceQuotes",
    value: function bindInstanceQuotes(holder, value) {
      if (this.values[holder].getValue() instanceof InstanceExpression) {
        this.values[holder].getValue().removeInstanceQuoter(this);
      }

      if (value instanceof InstanceExpression) {
        value.addInstanceQuoter(this);
      }
    }
  }, {
    key: "isLegitimate",
    value: function isLegitimate() {
      var _this = this;

      return Object.keys(this.values).every(function (key) {
        return _this.values[key].isLegitimate();
      });
    }
  }, {
    key: "updateLegitimate",
    value: function updateLegitimate() {
      var _this2 = this;

      Object.keys(this.values).forEach(function (key) {
        return _this2.values[key].updateLegitimate();
      });
    }
  }, {
    key: "updateQuotersLegitimate",
    value: function updateQuotersLegitimate() {
      this.instancesQuoters.forEach(function (i) {
        return i.updateLegitimate();
      });
    }
  }, {
    key: "getOutWrap",
    value: function getOutWrap(forceUpdate) {
      if (forceUpdate === true) {
        this.outWrap = this.outputWrapper();
      }

      return this.outWrap;
    }
  }, {
    key: "setValue",
    value: function setValue(holder, value) {
      if (this === value) {
        console.error("setting value: an instance's value can not be the instance itself");
      } else if (!this.values[holder]) {
        console.error("setting value: holder [".concat(holder, "] not found on instance"));
      } else {
        this.bindInstanceQuotes(holder, value);
        this.values[holder].setValue(this.convertConstantToEnumerate(holder, value));

        if (holder === this.getTemplateResultDataType()) {
          this.actualResultDataType = this.values[holder].getDataType();
        }

        this.updateQuotersLegitimate();
      }

      this.outWrap = this.outputWrapper();
      return this;
    }
  }, {
    key: "setFirstValue",
    value: function setFirstValue(value) {
      this.setValue(this.template.getFirstParam().getHolder(), value);
      return this;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return this;
    }
  }, {
    key: "convertConstantToEnumerate",
    value: function convertConstantToEnumerate(holder, value) {
      var _this3 = this;

      if ((0, _typeof2["default"])(value) === 'object') {
        return value;
      } else if (!this.values[holder].isInputCompatible(_types["default"].INPUT.ENUMERATE)) {
        return value;
      } else {
        var en = null;
        Object.keys(this.values).forEach(function (key) {
          if (key !== holder) {
            if (_this3.values[key].getInputType() === _types["default"].INPUT.VARIABLE) {
              en = _this3.values[key].getValue().getEnums().find(function (en) {
                return en.code + '' === value;
              });
            }
          }
        });
        return en === null || en === undefined ? value : en;
      }
    }
  }, {
    key: "outputWrapper",
    value: function outputWrapper(type) {
      var _this4 = this;

      var segments = type === 'display' ? this.segmentsDisplay : this.segmentsCode;
      return segments.map(function (seg) {
        return _this4.outputTextAtom(seg, type, 'wrapper');
      }).join('');
    }
  }, {
    key: "outputText",
    value: function outputText(type) {
      var _this5 = this;

      var exp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var segments = type === 'display' ? this.segmentsDisplay : this.segmentsCode;
      return segments.map(function (seg) {
        return _this5.outputTextAtom(seg, type, exp === true ? 'exp' : '');
      }).join('');
    }
  }, {
    key: "outputTextAtom",
    value: function outputTextAtom(seg, type, mode) {
      var _this6 = this;

      var prefixT = '';
      var suffixT = '';
      var prefixC = '';
      var suffixC = '';
      var prefixE = '';
      var suffixE = '';
      var prefixV = '';
      var suffixV = '';
      var prefixI = '';
      var suffixI = '';

      switch (mode) {
        case 'exp':
          suffixC = '[c]';
          suffixV = '[v]';
          suffixE = '[e]';
          break;

        case 'wrapper':
          prefixT = InstanceExpression.wrapperT[0];
          suffixT = InstanceExpression.wrapperT[1];
          prefixC = InstanceExpression.wrapperC[0];
          suffixC = InstanceExpression.wrapperC[1];
          prefixE = InstanceExpression.wrapperE[0];
          suffixE = InstanceExpression.wrapperE[1];
          prefixV = InstanceExpression.wrapperV[0];
          suffixV = InstanceExpression.wrapperV[1];
          break;

        default:
          break;
      }

      if (seg instanceof _DefOperatorText.DefOperatorText) {
        return "".concat(prefixT).concat(seg.getContent()).concat(suffixT);
      } else {
        switch (seg.getInputType()) {
          case _types["default"].INPUT.CONSTANT:
            var val = seg.getValue();

            if (val === null) {
              return null;
            }

            if (seg.getDataType() !== _types["default"].DATA.NUMBER && seg.getDataType() !== _types["default"].DATA.BOOLEAN) {
              val = "'".concat(val, "'");
            }

            return "".concat(prefixC).concat(val).concat(suffixC);

          case _types["default"].INPUT.ENUMERATE:
            var tag = type === 'display' ? seg.getValue().getLabel() : seg.getValue().getCode();

            if (tag === null) {
              return null;
            }

            if (seg.getDataType() !== _types["default"].DATA.NUMBER && seg.getDataType() !== _types["default"].DATA.BOOLEAN) {
              tag = "'".concat(tag, "'");
            }

            return "".concat(prefixE).concat(tag).concat(suffixE);

          case _types["default"].INPUT.VARIABLE:
            var res = type === 'display' ? seg.getValue().getLabel() : "".concat(seg.getValue().getTableName(), ".").concat(seg.getValue().getName());

            if (res === null) {
              return null;
            }

            return "".concat(prefixV).concat(res).concat(suffixV);

          case _types["default"].INPUT.INSTANCE:
            var subSegs = type === 'display' ? seg.getValue().getSegmentsDisplay() : seg.getValue().getSegmentsCode();
            return ['('].concat((0, _toConsumableArray2["default"])(subSegs.map(function (subSeg) {
              return _this6.outputTextAtom(subSeg, type, mode);
            })), [')']).join('');

          default:
            return null;
        }
      }
    }
  }, {
    key: "initValuesAndSegments",
    value: function initValuesAndSegments() {
      var _this7 = this;

      this.values = {};
      var params = this.template.getParams();
      Object.keys(params).forEach(function (key) {
        var param = params[key];
        _this7.values[key] = new _InstanceValue.InstanceValue({
          parameter: param
        });
      });
      this.segmentsDisplay = this.template.getSegmentsDisplay().map(function (seg) {
        return _this7.mapSegment(seg);
      });
      this.segmentsCode = this.template.getSegmentsCode().map(function (seg) {
        return _this7.mapSegment(seg);
      });
    }
  }, {
    key: "mapSegment",
    value: function mapSegment(seg) {
      if (seg instanceof _DefOperatorParameter.DefOperatorParameter) {
        return this.values[seg.getHolder()];
      } else if (seg instanceof _DefOperatorText.DefOperatorText) {
        return seg;
      } else {
        console.error("instantiating template [".concat(this.template.getName(), "]: invalid segment"));
        return null;
      }
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var template = _ref2.template,
          _ref2$name = _ref2.name,
          name = _ref2$name === void 0 ? 'unnamed' : _ref2$name;
      var prefix = "instantiating template [".concat(name, "]");

      if (!(template instanceof _DefOperatorTemplate.DefOperatorTemplate)) {
        console.error("".concat(prefix, ": given object not an instance of Template"));
        return false;
      }

      return true;
    }
  }, {
    key: "setWrappers",
    value: function setWrappers(_ref3) {
      var _ref3$wrapperText = _ref3.wrapperText,
          wrapperText = _ref3$wrapperText === void 0 ? '{t}' : _ref3$wrapperText,
          _ref3$wrapperConstant = _ref3.wrapperConstant,
          wrapperConstant = _ref3$wrapperConstant === void 0 ? '{c}' : _ref3$wrapperConstant,
          _ref3$wrapperEnumerat = _ref3.wrapperEnumerate,
          wrapperEnumerate = _ref3$wrapperEnumerat === void 0 ? '{e}' : _ref3$wrapperEnumerat,
          _ref3$wrapperVariable = _ref3.wrapperVariable,
          wrapperVariable = _ref3$wrapperVariable === void 0 ? '{v}' : _ref3$wrapperVariable,
          _ref3$wrapperInstance = _ref3.wrapperInstance,
          wrapperInstance = _ref3$wrapperInstance === void 0 ? '{i}' : _ref3$wrapperInstance;

      if (!wrapperText.includes('{t}')) {
        console.error("invalid wrapper for text");
      }

      if (!wrapperConstant.includes('{c}')) {
        console.error("invalid wrapper for constant");
      }

      if (!wrapperEnumerate.includes('{e}')) {
        console.error("invalid wrapper for enumerate");
      }

      if (!wrapperVariable.includes('{v}')) {
        console.error("invalid wrapper for variable");
      }

      if (!wrapperInstance.includes('{i}')) {
        console.error("invalid wrapper for instance");
      }

      this.wrapperT = wrapperText.split('{t}');
      this.wrapperC = wrapperConstant.split('{c}');
      this.wrapperE = wrapperEnumerate.split('{e}');
      this.wrapperV = wrapperVariable.split('{v}');
      this.wrapperI = wrapperInstance.split('{i}');
    }
  }]);
  return InstanceExpression;
}();

exports.InstanceExpression = InstanceExpression;
(0, _defineProperty2["default"])(InstanceExpression, "wrapperT", ['', '']);
(0, _defineProperty2["default"])(InstanceExpression, "wrapperC", ['', '']);
(0, _defineProperty2["default"])(InstanceExpression, "wrapperE", ['', '']);
(0, _defineProperty2["default"])(InstanceExpression, "wrapperV", ['', '']);
(0, _defineProperty2["default"])(InstanceExpression, "wrapperI", ['', '']);