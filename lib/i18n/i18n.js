"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var lang = 'en';
var abbr = {
  en: {
    constant: 'Const',
    enumerate: 'Enum',
    variable: 'Field',
    instance: 'Inst'
  },
  cn: {
    constant: '常量',
    enumerate: '枚举',
    variable: '字段',
    instance: '式'
  }
};

function switchTo(language) {
  lang = language;
}

function getAbbr() {
  return abbr[lang];
}

var _default = {
  switchTo: switchTo,
  getAbbr: getAbbr
};
exports["default"] = _default;