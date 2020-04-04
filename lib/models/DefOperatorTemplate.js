"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefOperatorTemplate = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _types = _interopRequireDefault(require("../constants/types/types"));

var _DefOperatorParameter = require("./DefOperatorParameter");

var _DefOperatorText = require("./DefOperatorText");

var DefOperatorTemplate = function () {
  function DefOperatorTemplate(_ref) {
    var id = _ref.id,
        name = _ref.name,
        _ref$alias = _ref.alias,
        alias = _ref$alias === void 0 ? name : _ref$alias,
        _ref$context = _ref.context,
        context = _ref$context === void 0 ? 'uncontexted' : _ref$context,
        templateDisplay = _ref.templateDisplay,
        templateCode = _ref.templateCode,
        resultDataType = _ref.resultDataType,
        _ref$params = _ref.params,
        params = _ref$params === void 0 ? {} : _ref$params,
        _ref$customized = _ref.customized,
        customized = _ref$customized === void 0 ? false : _ref$customized;
    (0, _classCallCheck2["default"])(this, DefOperatorTemplate);

    if (DefOperatorTemplate.validate.apply(DefOperatorTemplate, arguments)) {
      this.id = id;
      this.name = name;
      this.alias = alias;
      this.context = context;
      this.templateDisplay = templateDisplay;
      this.templateCode = templateCode;
      this.resultDataType = resultDataType;
      this.customized = customized;
      this.params = params;
      this.paramSize = 0;
      this.syncParameters();
      this.segmentsDisplay = this.initSegments(this.templateDisplay);
      this.segmentsCode = this.initSegments(this.templateCode);
      this.firstParam = null;
      this.firstParamIndex = null;
      this.firstTextIndex = null;
      this.firstTextNeighbors = null;
      this.initGrammtical();
    }
  }

  (0, _createClass2["default"])(DefOperatorTemplate, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAlias",
    value: function getAlias() {
      return this.alias;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context;
    }
  }, {
    key: "getParams",
    value: function getParams() {
      return this.params;
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
    key: "getResultDataType",
    value: function getResultDataType() {
      return this.resultDataType;
    }
  }, {
    key: "getParamSize",
    value: function getParamSize() {
      return this.paramSize;
    }
  }, {
    key: "isBool",
    value: function isBool() {
      return this.resultDataType === _types["default"].DATA.BOOLEAN;
    }
  }, {
    key: "isCustomized",
    value: function isCustomized() {
      return this.customized;
    }
  }, {
    key: "getFirstParam",
    value: function getFirstParam() {
      return this.firstParam;
    }
  }, {
    key: "getFirstParamIndex",
    value: function getFirstParamIndex() {
      return this.firstParamIndex;
    }
  }, {
    key: "getFirstTextIndex",
    value: function getFirstTextIndex() {
      return this.firstTextIndex;
    }
  }, {
    key: "getFirstTextNeighbors",
    value: function getFirstTextNeighbors() {
      return this.firstTextNeighbors;
    }
  }, {
    key: "setAlias",
    value: function setAlias(alias) {
      this.alias = alias;
    }
  }, {
    key: "syncParameters",
    value: function syncParameters() {
      var _this = this;

      var size = 0;
      Object.keys(this.params).forEach(function (key) {
        size++;

        _this.params[key].setTemplateId(_this.id);

        _this.params[key].setHolder(key);
      });
      this.paramSize = size;
    }
  }, {
    key: "initSegments",
    value: function initSegments(template) {
      var _this2 = this;

      var segments = [];
      var texts = template.split(_types["default"].REGS.$);
      var holders = template.match(_types["default"].REGS.$);
      var index = 0;
      var count = 0;
      texts.forEach(function (t) {
        if (t !== '') {
          segments.push(new _DefOperatorText.DefOperatorText({
            templateId: _this2.id,
            index: index++,
            content: t
          }));
        }

        if (count < holders.length) {
          segments.push(_this2.params[holders[count]]);
          count++;
        }
      });
      return segments;
    }
  }, {
    key: "initGrammtical",
    value: function initGrammtical() {
      this.firstParam = this.segmentsDisplay.find(function (seg) {
        return typeof seg.getHolder === 'function';
      });
      this.firstParamIndex = this.segmentsDisplay.indexOf(this.firstParam);
      this.firstTextIndex = this.firstParamIndex === 0 ? 1 : 0;

      if (this.segmentsDisplay[this.firstTextIndex].getContent().includes(this.name)) {
        this.firstTextNeighbors = this.segmentsDisplay[this.firstTextIndex].getContent().split(this.name).map(function (text) {
          return text.trim();
        });
      } else {
        this.firstTextNeighbors = ['', this.segmentsDisplay[this.firstTextIndex].getContent()].map(function (text) {
          return text.trim();
        });
      }
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          _ref2$alias = _ref2.alias,
          alias = _ref2$alias === void 0 ? name : _ref2$alias,
          _ref2$context = _ref2.context,
          context = _ref2$context === void 0 ? 'uncontexted' : _ref2$context,
          templateDisplay = _ref2.templateDisplay,
          templateCode = _ref2.templateCode,
          resultDataType = _ref2.resultDataType,
          _ref2$params = _ref2.params,
          params = _ref2$params === void 0 ? {} : _ref2$params,
          _ref2$customized = _ref2.customized,
          customized = _ref2$customized === void 0 ? false : _ref2$customized;
      var prefix = "defining template [".concat(name, "]");

      if (!id && id !== 0 || !name || !templateDisplay || !templateCode) {
        console.error("".concat(prefix, ": missing information"));
        return false;
      }

      if (!_types["default"].isLegalDataType(resultDataType) && !params[resultDataType]) {
        console.error("".concat(prefix, ": result data type can not be [").concat(resultDataType, "]"));
        return false;
      }

      var holdersDisplay = new Set(templateDisplay.match(_types["default"].REGS.$));
      var holdersCode = new Set(templateCode.match(_types["default"].REGS.$));
      var keysParams = new Set();
      Object.keys(params).forEach(function (key) {
        if (!(params[key] instanceof _DefOperatorParameter.DefOperatorParameter)) {
          console.error("".concat(prefix, ": given object not an instance of Parameter"));
          return false;
        }

        keysParams.add(key);
      });

      if (holdersDisplay.size !== holdersCode.size || holdersDisplay.size !== keysParams.size) {
        console.error("".concat(prefix, ": unmatched parameter(s)"));
        return false;
      }

      if (!Array.from(keysParams).every(function (key) {
        return holdersDisplay.has(key) && holdersCode.has(key);
      })) {
        console.error("".concat(prefix, ": unmatched parameter(s)"));
        return false;
      }

      return true;
    }
  }]);
  return DefOperatorTemplate;
}();

exports.DefOperatorTemplate = DefOperatorTemplate;