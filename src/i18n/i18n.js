
let lang = 'en';

const abbr = {

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

export default {
    switchTo,
    getAbbr
}