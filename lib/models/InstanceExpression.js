'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InstanceExpression = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _types = require('../constants/types/types');

var _types2 = _interopRequireDefault(_types);

var _DefOperatorTemplate = require('./DefOperatorTemplate');

var _DefOperatorParameter = require('./DefOperatorParameter');

var _DefOperatorText = require('./DefOperatorText');

var _InstanceValue = require('./InstanceValue');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstanceExpression = exports.InstanceExpression = function () {
    function InstanceExpression(_ref) {
        var template = _ref.template,
            _ref$name = _ref.name,
            name = _ref$name === undefined ? 'unnamed' : _ref$name;
        (0, _classCallCheck3.default)(this, InstanceExpression);

        if (InstanceExpression.validate.apply(InstanceExpression, arguments)) {
            this.template = template;
            this.name = name;
            this.values = {};
            this.actualResultDataType = null;
            this.segmentsDisplay = [];
            this.segmentsCode = [];
            this.instancesQuoters = [];
            this.outWrap = '';
            this.initValuesAndSegments();
        }
    }

    (0, _createClass3.default)(InstanceExpression, [{
        key: 'getTemplateId',
        value: function getTemplateId() {
            return this.template.getId();
        }
    }, {
        key: 'getTemplateName',
        value: function getTemplateName() {
            return this.template.getName();
        }
    }, {
        key: 'getTemplateResultDataType',
        value: function getTemplateResultDataType() {
            return this.template.getResultDataType();
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getResultDataType',
        value: function getResultDataType() {
            var type = this.getTemplateResultDataType();
            if (_types2.default.isLegalDataType(type)) {
                return type;
            } else {
                return this.actualResultDataType;
            }
        }
    }, {
        key: 'getSegmentsDisplay',
        value: function getSegmentsDisplay() {
            return this.segmentsDisplay;
        }
    }, {
        key: 'getSegmentsCode',
        value: function getSegmentsCode() {
            return this.segmentsCode;
        }
    }, {
        key: 'getParamSize',
        value: function getParamSize() {
            return this.template.getParamSize();
        }
    }, {
        key: 'getFirstParamIndex',
        value: function getFirstParamIndex() {
            return this.template.getFirstParamIndex();
        }
    }, {
        key: 'getFirstTextIndex',
        value: function getFirstTextIndex() {
            return this.template.getFirstTextIndex();
        }
    }, {
        key: 'getFirstTextNeighbors',
        value: function getFirstTextNeighbors(pos) {
            var index = pos === 'post' ? 1 : 0;
            return this.template.getFirstTextNeighbors()[index];
        }
    }, {
        key: 'getInstanceQuoters',
        value: function getInstanceQuoters() {
            return this.instancesQuoters;
        }
    }, {
        key: 'addInstanceQuoter',
        value: function addInstanceQuoter(instance) {
            this.instancesQuoters.push(instance);
        }
    }, {
        key: 'removeInstanceQuoter',
        value: function removeInstanceQuoter(instance) {
            this.instancesQuoters = this.instancesQuoters.filter(function (i) {
                return i !== instance;
            });
        }
    }, {
        key: 'bindInstanceQuotes',
        value: function bindInstanceQuotes(holder, value) {
            if (this.values[holder].getValue() instanceof InstanceExpression) {
                this.values[holder].getValue().removeInstanceQuoter(this);
            }
            if (value instanceof InstanceExpression) {
                value.addInstanceQuoter(this);
            }
        }
    }, {
        key: 'isLegitimate',
        value: function isLegitimate() {
            var _this = this;

            return (0, _keys2.default)(this.values).every(function (key) {
                return _this.values[key].isLegitimate();
            });
        }
    }, {
        key: 'updateLegitimate',
        value: function updateLegitimate() {
            var _this2 = this;

            (0, _keys2.default)(this.values).forEach(function (key) {
                return _this2.values[key].updateLegitimate();
            });
        }
    }, {
        key: 'updateQuotersLegitimate',
        value: function updateQuotersLegitimate() {
            this.instancesQuoters.forEach(function (i) {
                return i.updateLegitimate();
            });
        }
    }, {
        key: 'getOutWrap',
        value: function getOutWrap(forceUpdate) {
            if (forceUpdate === true) {
                this.outWrap = this.outputWrapper();
            }
            return this.outWrap;
        }
    }, {
        key: 'setValue',
        value: function setValue(holder, value) {
            if (this === value) {
                console.error('setting value: an instance\'s value can not be the instance itself');
            } else if (!this.values[holder]) {
                console.error('setting value: holder [' + holder + '] not found on instance');
            } else {
                this.bindInstanceQuotes(holder, value);
                this.values[holder].setValue(this.convertConstantToEnumerate(holder, value));
                if (holder === this.getTemplateResultDataType()) {
                    this.actualResultDataType = this.values[holder].getDataType();
                }
                this.updateQuotersLegitimate();
            }
            this.outWrap = this.outputWrapper();
            return this;
        }
    }, {
        key: 'setFirstValue',
        value: function setFirstValue(value) {
            this.setValue(this.template.getFirstParam().getHolder(), value);
            return this;
        }
    }, {
        key: 'convertConstantToEnumerate',
        value: function convertConstantToEnumerate(holder, value) {
            var _this3 = this;

            if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
                return value;
            } else if (!this.values[holder].isInputCompatible(_types2.default.INPUT.ENUMERATE)) {
                return value;
            } else {
                var en = null;
                (0, _keys2.default)(this.values).forEach(function (key) {
                    if (key !== holder) {
                        if (_this3.values[key].getInputType() === _types2.default.INPUT.VARIABLE) {
                            en = _this3.values[key].getValue().getEnums().find(function (en) {
                                return en.code + '' === value;
                            });
                        }
                    }
                });
                return en === null || en === undefined ? value : en;
            }
        }
    }, {
        key: 'outputWrapper',
        value: function outputWrapper(type) {
            var _this4 = this;

            var segments = type === 'display' ? this.segmentsDisplay : this.segmentsCode;
            return segments.map(function (seg) {
                return _this4.outputTextAtom(seg, type, 'wrapper');
            }).join('');
        }
    }, {
        key: 'outputText',
        value: function outputText(type) {
            var _this5 = this;

            var exp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var segments = type === 'display' ? this.segmentsDisplay : this.segmentsCode;
            return segments.map(function (seg) {
                return _this5.outputTextAtom(seg, type, exp === true ? 'exp' : '');
            }).join('');
        }
    }, {
        key: 'outputTextAtom',
        value: function outputTextAtom(seg, type, mode) {
            var _this6 = this;

            var prefixT = '';
            var suffixT = '';
            var prefixC = '';
            var suffixC = '';
            var prefixE = '';
            var suffixE = '';
            var prefixV = '';
            var suffixV = '';
            var prefixI = '';
            var suffixI = '';

            switch (mode) {
                case 'exp':
                    suffixC = '[c]';
                    suffixV = '[v]';
                    suffixE = '[e]';
                    break;
                case 'wrapper':
                    prefixT = InstanceExpression.wrapperT[0];
                    suffixT = InstanceExpression.wrapperT[1];
                    prefixC = InstanceExpression.wrapperC[0];
                    suffixC = InstanceExpression.wrapperC[1];
                    prefixE = InstanceExpression.wrapperE[0];
                    suffixE = InstanceExpression.wrapperE[1];
                    prefixV = InstanceExpression.wrapperV[0];
                    suffixV = InstanceExpression.wrapperV[1];
                    break;
                default:
                    break;
            }

            if (seg instanceof _DefOperatorText.DefOperatorText) {
                return '' + prefixT + seg.getContent() + suffixT;
            } else {
                switch (seg.getInputType()) {
                    case _types2.default.INPUT.CONSTANT:
                        var val = seg.getValue();
                        if (seg.getDataType() !== _types2.default.DATA.NUMBER && seg.getDataType() !== _types2.default.DATA.BOOLEAN) {
                            val = '\'' + val + '\'';
                        }
                        return '' + prefixC + val + suffixC;
                    case _types2.default.INPUT.ENUMERATE:
                        var tag = type === 'display' ? seg.getValue().getLabel() : seg.getValue().getCode();
                        return '' + prefixE + tag + suffixE;
                    case _types2.default.INPUT.VARIABLE:
                        var res = type === 'display' ? seg.getValue().getLabel() : seg.getValue().getName();
                        return '' + prefixV + res + suffixV;
                    case _types2.default.INPUT.INSTANCE:
                        var subSegs = type === 'display' ? seg.getValue().getSegmentsDisplay() : seg.getValue().getSegmentsCode();
                        return ['('].concat((0, _toConsumableArray3.default)(subSegs.map(function (subSeg) {
                            return _this6.outputTextAtom(subSeg, type, mode);
                        })), [')']).join('');
                    default:
                        return null;
                }
            }
        }
    }, {
        key: 'initValuesAndSegments',
        value: function initValuesAndSegments() {
            var _this7 = this;

            this.values = {};

            var params = this.template.getParams();
            (0, _keys2.default)(params).forEach(function (key) {
                var param = params[key];
                _this7.values[key] = new _InstanceValue.InstanceValue({ parameter: param });
            });

            this.segmentsDisplay = this.template.getSegmentsDisplay().map(function (seg) {
                return _this7.mapSegment(seg);
            });
            this.segmentsCode = this.template.getSegmentsCode().map(function (seg) {
                return _this7.mapSegment(seg);
            });
        }
    }, {
        key: 'mapSegment',
        value: function mapSegment(seg) {
            if (seg instanceof _DefOperatorParameter.DefOperatorParameter) {
                return this.values[seg.getHolder()];
            } else if (seg instanceof _DefOperatorText.DefOperatorText) {
                return seg;
            } else {
                console.error('instantiating template [' + this.template.getName() + ']: invalid segment');
                return null;
            }
        }
    }], [{
        key: 'validate',
        value: function validate(_ref2) {
            var template = _ref2.template,
                _ref2$name = _ref2.name,
                name = _ref2$name === undefined ? 'unnamed' : _ref2$name;


            var prefix = 'instantiating template [' + name + ']';

            if (!(template instanceof _DefOperatorTemplate.DefOperatorTemplate)) {
                console.error(prefix + ': given object not an instance of Template');
                return false;
            }

            return true;
        }
    }, {
        key: 'setWrappers',
        value: function setWrappers(_ref3) {
            var _ref3$wrapperText = _ref3.wrapperText,
                wrapperText = _ref3$wrapperText === undefined ? '{t}' : _ref3$wrapperText,
                _ref3$wrapperConstant = _ref3.wrapperConstant,
                wrapperConstant = _ref3$wrapperConstant === undefined ? '{c}' : _ref3$wrapperConstant,
                _ref3$wrapperEnumerat = _ref3.wrapperEnumerate,
                wrapperEnumerate = _ref3$wrapperEnumerat === undefined ? '{e}' : _ref3$wrapperEnumerat,
                _ref3$wrapperVariable = _ref3.wrapperVariable,
                wrapperVariable = _ref3$wrapperVariable === undefined ? '{v}' : _ref3$wrapperVariable,
                _ref3$wrapperInstance = _ref3.wrapperInstance,
                wrapperInstance = _ref3$wrapperInstance === undefined ? '{i}' : _ref3$wrapperInstance;

            if (!wrapperText.includes('{t}')) {
                console.error('invalid wrapper for text');
            }
            if (!wrapperConstant.includes('{c}')) {
                console.error('invalid wrapper for constant');
            }
            if (!wrapperEnumerate.includes('{e}')) {
                console.error('invalid wrapper for enumerate');
            }
            if (!wrapperVariable.includes('{v}')) {
                console.error('invalid wrapper for variable');
            }
            if (!wrapperInstance.includes('{i}')) {
                console.error('invalid wrapper for instance');
            }

            this.wrapperT = wrapperText.split('{t}');
            this.wrapperC = wrapperConstant.split('{c}');
            this.wrapperE = wrapperEnumerate.split('{e}');
            this.wrapperV = wrapperVariable.split('{v}');
            this.wrapperI = wrapperInstance.split('{i}');
        }
    }]);
    return InstanceExpression;
}();

InstanceExpression.wrapperT = ['', ''];
InstanceExpression.wrapperC = ['', ''];
InstanceExpression.wrapperE = ['', ''];
InstanceExpression.wrapperV = ['', ''];
InstanceExpression.wrapperI = ['', ''];