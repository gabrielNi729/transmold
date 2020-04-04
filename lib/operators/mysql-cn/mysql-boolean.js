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
  id: 300,
  name: '与',
  context: _contextsTemplate["default"].MYSQL,
  templateDisplay: '$1 与 $2',
  templateCode: '$1 and $2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.BOOLEAN
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.BOOLEAN
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 301,
  name: '或',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 或 $2',
  templateCode: '$1 or $2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.BOOLEAN
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.BOOLEAN
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 302,
  name: '非',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '非 $1',
  templateCode: 'not $1',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.BOOLEAN
    })
  }
})];
var _default = {
  ops: ops
};
exports["default"] = _default;