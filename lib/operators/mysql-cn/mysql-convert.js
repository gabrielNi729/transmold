"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = _interopRequireDefault(require("../../constants/types/types"));

var _contextsTemplate = _interopRequireDefault(require("../../constants/texts/contexts-template"));

var _DefOperatorTemplate = require("../../models/DefOperatorTemplate");

var _DefOperatorParameter = require("../../models/DefOperatorParameter");

var ops = [new _DefOperatorTemplate.DefOperatorTemplate({
  id: 9000,
  name: '转为字符串',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '转为字符串($1)',
  templateCode: 'cast($1 as char)',
  resultDataType: _types["default"].DATA.STRING,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
})];
var _default = {
  ops: ops
};
exports["default"] = _default;