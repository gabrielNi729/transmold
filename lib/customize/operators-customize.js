'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomizedParameter = exports.CustomizedTemplate = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _DefOperatorTemplate2 = require('../models/DefOperatorTemplate');

var _DefOperatorParameter2 = require('../models/DefOperatorParameter');

var _operators = require('../operators/operators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var starterId = 10000;
var currentId = starterId;

var CustomizedTemplate = exports.CustomizedTemplate = function (_DefOperatorTemplate) {
    (0, _inherits3.default)(CustomizedTemplate, _DefOperatorTemplate);

    function CustomizedTemplate(name, context, templateDisplay, templateCode, resultDataType, params) {
        (0, _classCallCheck3.default)(this, CustomizedTemplate);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CustomizedTemplate.__proto__ || (0, _getPrototypeOf2.default)(CustomizedTemplate)).call(this, {
            id: currentId,
            name: name,
            alias: '',
            context: context,
            templateDisplay: templateDisplay,
            templateCode: templateCode,
            resultDataType: resultDataType,
            params: params,
            customized: true
        }));

        currentId++;
        (0, _operators.addOp)(_this);
        return _this;
    }

    (0, _createClass3.default)(CustomizedTemplate, [{
        key: 'as',
        value: function as(alias) {
            this.setAlias(alias);
            (0, _operators.mapOp)(this);
            return this;
        }
    }]);
    return CustomizedTemplate;
}(_DefOperatorTemplate2.DefOperatorTemplate);

var CustomizedParameter = exports.CustomizedParameter = function (_DefOperatorParameter) {
    (0, _inherits3.default)(CustomizedParameter, _DefOperatorParameter);

    function CustomizedParameter(dataType, inputTypes, regulations) {
        (0, _classCallCheck3.default)(this, CustomizedParameter);
        return (0, _possibleConstructorReturn3.default)(this, (CustomizedParameter.__proto__ || (0, _getPrototypeOf2.default)(CustomizedParameter)).call(this, {
            dataType: dataType,
            inputTypes: inputTypes,
            regulations: regulations
        }));
    }

    return CustomizedParameter;
}(_DefOperatorParameter2.DefOperatorParameter);