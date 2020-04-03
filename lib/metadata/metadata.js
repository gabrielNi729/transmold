'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = require('../constants/types/types');

var _types2 = _interopRequireDefault(_types);

var _MetadataTable = require('../models/MetadataTable');

var _MetadataField = require('../models/MetadataField');

var _MetadataEnum = require('../models/MetadataEnum');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = [new _MetadataField.MetadataField({
    id: 1000,
    name: 'USER_ID',
    label: 'UserId',
    dataType: _types2.default.DATA.STRING
}), new _MetadataField.MetadataField({
    id: 1001,
    name: 'USER_NAME',
    label: 'UserName',
    dataType: _types2.default.DATA.STRING
}), new _MetadataField.MetadataField({
    id: 1002,
    name: 'AGE',
    label: 'Age',
    dataType: _types2.default.DATA.NUMBER,
    distributeType: _types2.default.DISTRIBUTE.METRICS,
    unit: 'years'
}), new _MetadataField.MetadataField({
    id: 1003,
    name: 'GENDER',
    label: 'Gender',
    dataType: _types2.default.DATA.NUMBER,
    distributeType: _types2.default.DISTRIBUTE.CATEGORY
}).addEnums([new _MetadataEnum.MetadataEnum({ id: 100001, code: 0, label: 'Male' }), new _MetadataEnum.MetadataEnum({ id: 100002, code: 1, label: 'Female' })])];

var tables = [new _MetadataTable.MetadataTable({
    id: 100,
    name: 'PERSON_INFO',
    label: 'Personal information'
}).addFields(fields)];

exports.default = {
    tables: tables,
    fields: fields
};