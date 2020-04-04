"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefOperatorText = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DefOperatorText = function () {
  function DefOperatorText(_ref) {
    var templateId = _ref.templateId,
        index = _ref.index,
        content = _ref.content;
    (0, _classCallCheck2["default"])(this, DefOperatorText);

    if (DefOperatorText.validate.apply(DefOperatorText, arguments)) {
      this.templateId = templateId;
      this.index = index;
      this.content = content;
    }
  }

  (0, _createClass2["default"])(DefOperatorText, [{
    key: "getContent",
    value: function getContent() {
      return this.content;
    }
  }], [{
    key: "validate",
    value: function validate(_ref2) {
      var templateId = _ref2.templateId,
          index = _ref2.index,
          content = _ref2.content;

      if (!templateId && templateId !== 0 || !index && index !== 0 || !content || content.trim() === '') {
        console.error("defining text: missing information");
        return false;
      }

      return true;
    }
  }]);
  return DefOperatorText;
}();

exports.DefOperatorText = DefOperatorText;