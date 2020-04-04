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
  id: 200,
  name: '拼接',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 拼接 $2',
  templateCode: 'concat($1,$2)',
  resultDataType: _types["default"].DATA.STRING,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 201,
  name: '二次拼接',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 拼接 $2 拼接 $3',
  templateCode: 'concat($1,$2,$3)',
  resultDataType: _types["default"].DATA.STRING,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    }),
    $3: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 202,
  name: '截取前',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 截取前 $2 位',
  templateCode: 'substring($1,$2)',
  resultDataType: _types["default"].DATA.STRING,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER,
      inputTypes: [_types["default"].INPUT.CONSTANT]
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 203,
  name: '截取',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 截取 $2 位 长度为 $3',
  templateCode: 'substring($1,$2,$3)',
  resultDataType: _types["default"].DATA.STRING,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER,
      inputTypes: [_types["default"].INPUT.CONSTANT]
    }),
    $3: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER,
      inputTypes: [_types["default"].INPUT.CONSTANT]
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 2000,
  name: '=',
  alias: '=.str',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 = $2',
  templateCode: '$1=$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 2001,
  name: '≠',
  alias: '≠.str',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 ≠ $2',
  templateCode: '$1≠$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.STRING
    })
  }
})];
var _default = {
  ops: ops
};
exports["default"] = _default;