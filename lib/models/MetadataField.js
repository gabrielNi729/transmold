"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetadataField = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _types = _interopRequireDefault(require("../constants/types/types"));

var _MetadataEnum = require("./MetadataEnum");

var MetadataField = function () {
  function MetadataField(_ref) {
    var id = _ref.id,
        name = _ref.name,
        label = _ref.label,
        hint = _ref.hint,
        dataType = _ref.dataType,
        _ref$distributeType = _ref.distributeType,
        distributeType = _ref$distributeType === void 0 ? _types["default"].DISTRIBUTE.NONE : _ref$distributeType,
        unit = _ref.unit;
    (0, _classCallCheck2["default"])(this, MetadataField);

    if (MetadataField.validate.apply(MetadataField, arguments)) {
      this.id = id;
      this.name = name;
      this.label = label;
      this.hint = hint;
      this.tableId = null;
      this.dataType = dataType;
      this.distributeType = distributeType;
      this.unit = unit;
      this.enums = [];
    }
  }

  (0, _createClass2["default"])(MetadataField, [{
    key: "addEnums",
    value: function addEnums(enums) {
      var _this = this;

      var prefix = "adding enums for [".concat(this.name, "]");

      if (this.distributeType === _types["default"].DISTRIBUTE.CATEGORY) {
        enums.forEach(function (en) {
          if (!(en instanceof _MetadataEnum.MetadataEnum)) {
            console.error("".concat(prefix, ": given object not an instance of Enum"));
          } else {
            _this.enums.push(en.setFieldId(_this.id).setDataType(_this.dataType));
          }
        });
      } else {
        console.error("".concat(prefix, ": can not have enums because it is not a category"));
      }

      return this;
    }
  }, {
    key: "setTableId",
    value: function setTableId(tableId) {
      this.tableId = tableId;
      return this;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.label;
    }
  }, {
    key: "getHint",
    value: function getHint() {
      return this.hint;
    }
  }, {
    key: "getDataType",
    value: function getDataType() {
      return this.dataType;
    }
  }, {
    key: "getDistribute",
    value: function getDistribute() {
      return this.distributeType;
    }
  }, {
    key: "getUnit",
    value: function getUnit() {
      return this.unit;
    }
  }, {
    key: "getEnums",
    value: function getEnums() {
      return this.enums;
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          label = _ref2.label,
          hint = _ref2.hint,
          dataType = _ref2.dataType,
          _ref2$distributeType = _ref2.distributeType,
          distributeType = _ref2$distributeType === void 0 ? _types["default"].DISTRIBUTE.NONE : _ref2$distributeType,
          unit = _ref2.unit;
      var prefix = "defining field [".concat(name, "]");

      if (!id && id !== 0 || !name) {
        console.error("".concat(prefix, ": missing information"));
        return false;
      }

      if (!_types["default"].isLegalDataType(dataType)) {
        console.error("".concat(prefix, ": data type can not be [").concat(dataType, "]"));
        return false;
      }

      if (!_types["default"].isLegalDistributeType(distributeType)) {
        console.error("".concat(prefix, ": distribute type can not be [").concat(distributeType, "]"));
        return false;
      }

      return true;
    }
  }]);
  return MetadataField;
}();

exports.MetadataField = MetadataField;