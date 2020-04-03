"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataEnum = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetadataEnum = exports.MetadataEnum = function () {
    function MetadataEnum(_ref) {
        var id = _ref.id,
            code = _ref.code,
            label = _ref.label;
        (0, _classCallCheck3.default)(this, MetadataEnum);


        if (MetadataEnum.validate.apply(MetadataEnum, arguments)) {
            this.id = id;
            this.code = code;
            this.label = label;
            this.fieldId = null;
            this.dataType = null;
        }
    }

    (0, _createClass3.default)(MetadataEnum, [{
        key: "setFieldId",
        value: function setFieldId(fieldId) {
            this.fieldId = fieldId;
            return this;
        }
    }, {
        key: "setDataType",
        value: function setDataType(dataType) {
            this.dataType = dataType;
            return this;
        }
    }, {
        key: "getCode",
        value: function getCode() {
            return this.code;
        }
    }, {
        key: "getLabel",
        value: function getLabel() {
            return this.label;
        }
    }, {
        key: "getDataType",
        value: function getDataType() {
            return this.dataType;
        }
    }], [{
        key: "validate",
        value: function validate(_ref2) {
            var id = _ref2.id,
                code = _ref2.code,
                label = _ref2.label;


            var prefix = "defining enum [" + label + "]";

            if (!id && id !== 0 || !code && code !== 0 || !label) {
                console.error(prefix + ": missing information");
                return false;
            }

            return true;
        }
    }]);
    return MetadataEnum;
}();