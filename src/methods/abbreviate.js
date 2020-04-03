import types from '../constants/types/types'

const abbreviate = 'abbr';

if(!String.prototype[abbreviate]){
    String.prototype[abbreviate] = function () {
        switch (this){
            case types.INPUT.CONSTANT:
                return 'Const';
            case types.INPUT.ENUMERATE:
                return 'Enum';
            case types.INPUT.VARIABLE:
                return 'Var';
            case types.INPUT.INSTANCE:
                return 'Inst';
            default:
                return this;
        }
    }
}


export default {

}