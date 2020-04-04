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
  name: 'sum',
  context: _contextsTemplate["default"].MYSQL,
  templateDisplay: 'sum($1)',
  templateCode: 'sum($1)',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8001,
  name: 'avg',
  context: _contextsTemplate["default"].MYSQL,
  templateDisplay: 'avg($1)',
  templateCode: 'avg($1)',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8002,
  name: 'min',
  context: _contextsTemplate["default"].MYSQL,
  templateDisplay: 'min($1)',
  templateCode: 'min($1)',
  resultDataType: '$1',
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.UNCERTAIN
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8003,
  name: 'max',
  context: _contextsTemplate["default"].MYSQL,
  templateDisplay: 'max($1)',
  templateCode: 'max($1)',
  resultDataType: '$1',
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.UNCERTAIN
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 8004,
  name: 'count',
  context: _contextsTemplate["default"].MYSQL,
  templateDisplay: 'count($1)',
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