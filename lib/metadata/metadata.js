"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datum = datum;
exports.addEnum = addEnum;
exports.addField = addField;
exports.addTable = addTable;
exports["default"] = void 0;

var _types = _interopRequireDefault(require("../constants/types/types"));

var _MetadataTable = require("../models/MetadataTable");

var _MetadataField = require("../models/MetadataField");

var _MetadataEnum = require("../models/MetadataEnum");

var count = 0;
var lastcount = count;
var metadataMap = {};
var fields = [];
var tables = [];
clear();

function addEnum() {
  count++;
}

function addField(field) {
  fields.push(field);
  count++;
}

function addTable(table) {
  tables.push(table);
  count++;
}

function datum() {
  var tableName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var enumCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (count !== lastcount) {
    restructure();
    lastcount = count;
  }

  if (tableName === '') {
    return null;
  }

  if (fieldName === '') {
    return metadataMap["".concat(tableName)] || null;
  }

  if (enumCode === '') {
    return metadataMap["".concat(tableName, ".").concat(fieldName)] || null;
  }

  return metadataMap["".concat(tableName, ".").concat(fieldName, ".").concat(enumCode)] || null;
}

function restructure() {
  metadataMap = {};
  tables.forEach(function (t) {
    var kt = "".concat(t.getName());

    if (metadataMap[kt]) {
      console.error("duplicate table: ".concat(kt));
    } else {
      metadataMap[kt] = t;
      t.getFields().forEach(function (f) {
        var kf = "".concat(t.getName(), ".").concat(f.getName());

        if (metadataMap[kf]) {
          console.error("duplicate field: ".concat(kf));
        } else {
          metadataMap[kf] = f;
          f.getEnums().forEach(function (e) {
            var ke = "".concat(t.getName(), ".").concat(f.getName(), ".").concat(e.getCode());

            if (metadataMap[ke]) {
              console.error("duplicate enum: ".concat(ke));
            } else {
              metadataMap[ke] = e;
            }
          });
        }
      });
    }
  });
}

function clear() {
  count = 0;
  lastcount = count;
  metadataMap = {};
  fields = [];
  tables = [];
  restructure();
}

function useExample() {
  fields = [new _MetadataField.MetadataField({
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
  tables = [new _MetadataTable.MetadataTable({
    id: 100,
    name: 'PERSON_INFO',
    label: 'Personal information'
  }).addFields(fields)];
  restructure();
}

function fieldsList() {
  return fields;
}

function tablesList() {
  return tables;
}

var _default = {
  fieldsList: fieldsList,
  tablesList: tablesList,
  clear: clear,
  useExample: useExample
};
exports["default"] = _default;