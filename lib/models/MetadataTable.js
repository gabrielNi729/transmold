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
        hint = _ref.hint;
    (0, _classCallCheck2["default"])(this, MetadataTable);

    if (MetadataTable.validate.apply(MetadataTable, arguments)) {
      this.id = id;
      this.name = name;
      this.label = label;
      this.hint = hint;
      this.fields = [];
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
        } else {
          _this.fields.push(f.setTableId(_this.id));
        }
      });
      return this;
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          label = _ref2.label,
          hint = _ref2.hint;
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