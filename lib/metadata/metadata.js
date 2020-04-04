"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = _interopRequireDefault(require("../constants/types/types"));

var _MetadataTable = require("../models/MetadataTable");

var _MetadataField = require("../models/MetadataField");

var _MetadataEnum = require("../models/MetadataEnum");

var fields = [new _MetadataField.MetadataField({
  id: 1000,
  name: 'USER_ID',
  label: 'UserId',
  dataType: _types["default"].DATA.STRING
}), new _MetadataField.MetadataField({
  id: 1001,
  name: 'USER_NAME',
  label: 'UserName',
  dataType: _types["default"].DATA.STRING
}), new _MetadataField.MetadataField({
  id: 1002,
  name: 'AGE',
  label: 'Age',
  dataType: _types["default"].DATA.NUMBER,
  distributeType: _types["default"].DISTRIBUTE.METRICS,
  unit: 'years'
}), new _MetadataField.MetadataField({
  id: 1003,
  name: 'GENDER',
  label: 'Gender',
  dataType: _types["default"].DATA.NUMBER,
  distributeType: _types["default"].DISTRIBUTE.CATEGORY
}).addEnums([new _MetadataEnum.MetadataEnum({
  id: 100001,
  code: 0,
  label: 'Male'
}), new _MetadataEnum.MetadataEnum({
  id: 100002,
  code: 1,
  label: 'Female'
})])];
var tables = [new _MetadataTable.MetadataTable({
  id: 100,
  name: 'PERSON_INFO',
  label: 'Personal information'
}).addFields(fields)];
var _default = {
  tables: tables,
  fields: fields
};
exports["default"] = _default;