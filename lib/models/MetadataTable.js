"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetadataTable = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _MetadataField = require("./MetadataField");

var MetadataTable = function () {
  function MetadataTable(_ref) {
    var id = _ref.id,
        name = _ref.name,
        label = _ref.label,
        _ref$hint = _ref.hint,
        hint = _ref$hint === void 0 ? '' : _ref$hint;
    (0, _classCallCheck2["default"])(this, MetadataTable);

    if (MetadataTable.validate.apply(MetadataTable, arguments)) {
      this.id = id;
      this.name = name;
      this.label = label;
      this.hint = hint;
      this.fields = [];
      this.mapFieldsName = {};
    }
  }

  (0, _createClass2["default"])(MetadataTable, [{
    key: "addFields",
    value: function addFields(fields) {
      var _this = this;

      var prefix = "adding fields for [".concat(this.name, "]");
      fields.forEach(function (f) {
        if (!(f instanceof _MetadataField.MetadataField)) {
          console.error("".concat(prefix, ": given object not an instance of Field"));
        } else if (_this.mapFieldsName[f.getName()] === 1) {
          console.error("".concat(prefix, ": field ").concat(f.getName(), " already exists for table ").concat(_this.name));
        } else {
          _this.mapFieldsName[f.getName()] = 1;

          _this.fields.push(f.setTableId(_this.id).setTableName(_this.name));
        }
      });
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
    key: "getFields",
    value: function getFields() {
      return this.fields;
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          label = _ref2.label,
          _ref2$hint = _ref2.hint,
          hint = _ref2$hint === void 0 ? '' : _ref2$hint;
      var prefix = "defining table [".concat(name, "]");

      if (!id && id !== 0 || !name) {
        console.error("".concat(prefix, ": missing information"));
        return false;
      }

      return true;
    }
  }]);
  return MetadataTable;
}();

exports.MetadataTable = MetadataTable;