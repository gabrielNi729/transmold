import { InstanceExpression } from '../models/InstanceExpression';
import { MetadataField } from '../models/MetadataField';
import types from '../constants/types/types';
import { opsToRespond } from '../operators/operators'


const respondingOperators = 'resops';

MetadataField.prototype[respondingOperators] = function() {
    return opsToRespond(this.getDataType());
};

InstanceExpression.prototype[respondingOperators] = function () {
    return opsToRespond(this.getResultDataType());
};

if(!String.prototype[respondingOperators]){
    String.prototype[respondingOperators] = function () {
        return opsToRespond(types.identifyDataType(this));
    }
}

if(!Number.prototype[respondingOperators]){
    Number.prototype[respondingOperators] = function () {
        return opsToRespond(types.DATA.NUMBER);
    }
}

if(!Boolean.prototype[respondingOperators]){
    Boolean.prototype[respondingOperators] = function () {
        return opsToRespond(type.DATA.BOOLEAN);
    }
}



export default {

}