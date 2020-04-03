'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataTable = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _MetadataField = require('./MetadataField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetadataTable = exports.MetadataTable = function () {
    function MetadataTable(_ref) {
        var id = _ref.id,
            name = _ref.name,
            label = _ref.label,
            hint = _ref.hint;
        (0, _classCallCheck3.default)(this, MetadataTable);


        if (MetadataTable.validate.apply(MetadataTable, arguments)) {
            this.id = id;
            this.name = name;
            this.label = label;
            this.hint = hint;
            this.fields = [];
        }
    }

    (0, _createClass3.default)(MetadataTable, [{
        key: 'addFields',
        value: function addFields(fields) {
            var _this = this;

            var prefix = 'adding fields for [' + this.name + ']';
            fields.forEach(function (f) {
                if (!(f instanceof _MetadataField.MetadataField)) {
                    console.error(prefix + ': given object not an instance of Field');
                } else {
                    _this.fields.push(f.setTableId(_this.id));
                }
            });
            return this;
        }
    }], [{
        key: 'validate',
        value: function validate(_ref2) {
            var id = _ref2.id,
                name = _ref2.name,
                label = _ref2.label,
                hint = _ref2.hint;


            var prefix = 'defining table [' + name + ']';

            if (!id && id !== 0 || !name) {
                console.error(prefix + ': missing information');
                return false;
            }

            return true;
        }
    }]);
    return MetadataTable;
}();