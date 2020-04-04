"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportedMetadataEnum = exports.ImportedMetadataField = exports.ImportedMetadataTable = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _MetadataTable2 = require("../models/MetadataTable");

var _MetadataField2 = require("../models/MetadataField");

var _MetadataEnum2 = require("../models/MetadataEnum");

var _metadata = require("../metadata/metadata");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var starterId = 100;
var currentId = starterId;

var ImportedMetadataTable = function (_MetadataTable) {
  (0, _inherits2["default"])(ImportedMetadataTable, _MetadataTable);

  var _super = _createSuper(ImportedMetadataTable);

  function ImportedMetadataTable(_ref) {
    var _this;

    var name = _ref.name,
        label = _ref.label,
        hint = _ref.hint;
    (0, _classCallCheck2["default"])(this, ImportedMetadataTable);
    _this = _super.call(this, {
      id: currentId,
      name: name,
      label: label,
      hint: hint
    });
    currentId++;
    (0, _metadata.addTable)((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return ImportedMetadataTable;
}(_MetadataTable2.MetadataTable);

exports.ImportedMetadataTable = ImportedMetadataTable;

var ImportedMetadataField = function (_MetadataField) {
  (0, _inherits2["default"])(ImportedMetadataField, _MetadataField);

  var _super2 = _createSuper(ImportedMetadataField);

  function ImportedMetadataField(_ref2) {
    var _this2;

    var name = _ref2.name,
        label = _ref2.label,
        hint = _ref2.hint,
        dataType = _ref2.dataType,
        distributeType = _ref2.distributeType,
        unit = _ref2.unit;
    (0, _classCallCheck2["default"])(this, ImportedMetadataField);
    _this2 = _super2.call(this, {
      id: currentId,
      name: name,
      label: label,
      hint: hint,
      dataType: dataType,
      distributeType: distributeType,
      unit: unit
    });
    currentId++;
    (0, _metadata.addField)((0, _assertThisInitialized2["default"])(_this2));
    return _this2;
  }

  return ImportedMetadataField;
}(_MetadataField2.MetadataField);

exports.ImportedMetadataField = ImportedMetadataField;

var ImportedMetadataEnum = function (_MetadataEnum) {
  (0, _inherits2["default"])(ImportedMetadataEnum, _MetadataEnum);

  var _super3 = _createSuper(ImportedMetadataEnum);

  function ImportedMetadataEnum(_ref3) {
    var _this3;

    var code = _ref3.code,
        label = _ref3.label;
    (0, _classCallCheck2["default"])(this, ImportedMetadataEnum);
    _this3 = _super3.call(this, {
      id: currentId,
      code: code,
      label: label
    });
    currentId++;
    (0, _metadata.addEnum)();
    return _this3;
  }

  return ImportedMetadataEnum;
}(_MetadataEnum2.MetadataEnum);

exports.ImportedMetadataEnum = ImportedMetadataEnum;