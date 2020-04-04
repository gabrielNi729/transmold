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
  id: 8000,
  name: '求和',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '求和($1)',
  templateCode: 'sum($1)',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8001,
  name: '平均值',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '平均值($1)',
  templateCode: 'avg($1)',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8002,
  name: '最小值',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '最小值($1)',
  templateCode: 'min($1)',
  resultDataType: '$1',
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.UNCERTAIN
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8003,
  name: '最大值',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '最大值($1)',
  templateCode: 'max($1)',
  resultDataType: '$1',
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.UNCERTAIN
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8004,
  name: '计数',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '技术($1)',
  templateCode: 'count($1)',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.UNCERTAIN
    })
  }
})];
var _default = {
  ops: ops
};
exports["default"] = _default;