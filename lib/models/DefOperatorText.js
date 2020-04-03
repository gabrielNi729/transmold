'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefOperatorText = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefOperatorText = exports.DefOperatorText = function () {
    function DefOperatorText(_ref) {
        var templateId = _ref.templateId,
            index = _ref.index,
            content = _ref.content;
        (0, _classCallCheck3.default)(this, DefOperatorText);


        if (DefOperatorText.validate.apply(DefOperatorText, arguments)) {
            this.templateId = templateId;
            this.index = index;
            this.content = content;
        }
    }

    (0, _createClass3.default)(DefOperatorText, [{
        key: 'getContent',
        value: function getContent() {
            return this.content;
        }
    }], [{
        key: 'validate',
        value: function validate(_ref2) {
            var templateId = _ref2.templateId,
                index = _ref2.index,
                content = _ref2.content;


            if (!templateId && templateId !== 0 || !index && index !== 0 || !content || content.trim() === '') {
                console.error('defining text: missing information');
                return false;
            }

            return true;
        }
    }]);
    return DefOperatorText;
}();