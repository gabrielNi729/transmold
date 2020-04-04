import i18n from '../i18n/i18n';

const abbreviate = 'abbr';

if(!String.prototype[abbreviate]){
    String.prototype[abbreviate] = function () {
        return i18n.getAbbr()[this] || this;
    }
}


export default {

}