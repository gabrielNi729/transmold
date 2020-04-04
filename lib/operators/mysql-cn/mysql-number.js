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
  id: 100,
  name: '+',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 + $2',
  templateCode: '$1+$2',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 101,
  name: '-',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 - $2',
  templateCode: '$1-$2',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 102,
  name: '*',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 * $2',
  templateCode: '$1*$2',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 103,
  name: '/',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 / $2',
  templateCode: '$1/$2',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 104,
  name: '整除',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 整除 $2',
  templateCode: '$1 div $2',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 105,
  name: '取余',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 取余 $2',
  templateCode: '$1 mod $2',
  resultDataType: _types["default"].DATA.NUMBER,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1000,
  name: '=',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 = $2',
  templateCode: '$1=$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1001,
  name: '≠',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 ≠ $2',
  templateCode: '$1≠$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1002,
  name: '>',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 > $2',
  templateCode: '$1>$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1003,
  name: '≥',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 ≥ $2',
  templateCode: '$1≥$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1004,
  name: '<',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 < $2',
  templateCode: '$1<$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1005,
  name: '≤',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 ≤ $2',
  templateCode: '$1≤$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1006,
  name: '(a,b)',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 (a,b) $2, $3',
  templateCode: '$1 between $2 and $3 and $1!=$2 and $1!=$3',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $3: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1007,
  name: '[a,b]',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 [a,b] $2, $3',
  templateCode: '$1 between $2 and $3',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $3: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1008,
  name: '(a,b]',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 (a,b] $2, $3',
  templateCode: '$1 between $2 and $3 and $1!=$2',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $3: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
}), new _DefOperatorTemplate.DefOperatorTemplate({
  id: 1009,
  name: '[a,b)',
  context: _contextsTemplate["default"].MYSQL_CN,
  templateDisplay: '$1 [a,b) $2, $3',
  templateCode: '$1 between $2 and $3 and $1!=$3',
  resultDataType: _types["default"].DATA.BOOLEAN,
  params: {
    $1: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $2: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    }),
    $3: new _DefOperatorParameter.DefOperatorParameter({
      dataType: _types["default"].DATA.NUMBER
    })
  }
})];
var _default = {
  ops: ops
};
exports["default"] = _default;