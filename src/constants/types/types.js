import typesData from './types-data'
import typesDistribute from './types-distribute'
import typesInput from './types-input'
import typesRegular from './types-regular'
import { InstanceExpression } from '../../models/InstanceExpression';
import { MetadataField } from '../../models/MetadataField';
import { MetadataEnum } from '../../models/MetadataEnum';



const setTypesData = new Set();

for(let t in typesData) {
    setTypesData.add(typesData[t])
}

function isLegalDataType(type){
    return setTypesData.has(type);
}

function isUncertainDataType(type) {
    return type === typesData.UNCERTAIN;
}




const setTypesInput = new Set();

for(let t in typesInput){
    setTypesInput.add(typesInput[t])
}

function isLegalInputType(type){
    return setTypesInput.has(type);
}

function identifyInputType(content) {
    if(content instanceof InstanceExpression){
        return typesInput.INSTANCE
    }else if(content instanceof MetadataField){
        return typesInput.VARIABLE
    }else if(content instanceof  MetadataEnum){
        return typesInput.ENUMERATE
    }else{
        return typesInput.CONSTANT
    }
}





const setTypesDistribute = new Set();

for(let t in typesDistribute){
    setTypesDistribute.add(typesDistribute[t]);
}

function isLegalDistributeType(type){
    return setTypesDistribute.has(type);
}




const mapTypesRegular = new Map();

for(let t in typesRegular){
    if(typesData[t]){
        mapTypesRegular.set(typesData[t], new RegExp(typesRegular[t]));
    }else{
        mapTypesRegular.set(t.toLowerCase(), new RegExp(typesRegular[t]));
    }
}

function getRegExp(type) {
    if(mapTypesRegular.has(type)){
        return mapTypesRegular.get(type);
    }else{
        console.error(`no such regular type: ${type}`);
        return null;
    }
}

function regTest(type, content){
    if(type === typesData.UNCERTAIN){
        return true;
    }
    let reg = getRegExp(type);
    if(reg){
        return reg.test(content);
    }else{
        return false;
    }
}

function regTestMulti(types, content) {
    return types.every(t => regTest(t, content));
}

function identifyDataType(content){

    if(regTest(typesData.NUMBER, content)){
        return typesData.NUMBER
    }else if(regTest(typesData.BOOLEAN, content)){
        return typesData.BOOLEAN
    }else if(regTest(typesData.DATE, content)){
        return typesData.DATE
    }else if(regTest(typesData.MONTH, content)){
        return typesData.MONTH
    }else if(regTest(typesData.YEAR, content)){
        return typesData.YEAR
    }else if(regTest(typesData.TIME, content)){
        return typesData.TIME
    }else if(regTest(typesData.GEOGRAPHY, content)){
        return typesData.GEOGRAPHY
    }else if(regTest(typesData.STRING, content)){
        return typesData.STRING
    }
    return typesData.UNCERTAIN
}


export default {

    DATA: typesData,
    DISTRIBUTE: typesDistribute,
    INPUT: typesInput,
    REGS: typesRegular,

    isLegalDataType,
    isLegalInputType,
    isLegalDistributeType,
    isUncertainDataType,
    getRegExp,
    regTest,
    regTestMulti,
    identifyDataType,
    identifyInputType

}