import types from '../constants/types/types';
import contexts from '../constants/texts/contexts-template';
import opsNumber from './mysql/mysql-number';
import opsString from './mysql/mysql-string';
import opsBoolean from './mysql/mysql-boolean';
import opsDate from './mysql/mysql-date';
import opsMonth from './mysql/mysql-month';
import opsYear from './mysql/mysql-year';
import opsTime from './mysql/mysql-time';
import opsGeography from './mysql/mysql-geography';
import opsAggregate from './mysql/mysql-aggregate';
import opsConvert from './mysql/mysql-convert';
import opsNumberCN from './mysql-cn/mysql-number';
import opsStringCN from './mysql-cn/mysql-string';
import opsBooleanCN from './mysql-cn/mysql-boolean';
import opsDateCN from './mysql-cn/mysql-date';
import opsMonthCN from './mysql-cn/mysql-month';
import opsYearCN from './mysql-cn/mysql-year';
import opsTimeCN from './mysql-cn/mysql-time';
import opsGeographyCN from './mysql-cn/mysql-geography';
import opsAggregateCN from './mysql-cn/mysql-aggregate';
import opsConvertCN from './mysql-cn/mysql-convert';


let operatorContexts = {};

operatorContexts[contexts.MYSQL] = [
    ...opsNumber.ops, ...opsString.ops, ...opsBoolean.ops, ...opsDate.ops,
    ...opsMonth.ops, ...opsYear.ops, ...opsTime.ops, ...opsGeography.ops,
    ...opsConvert.ops, ...opsAggregate.ops
];

operatorContexts[contexts.MYSQL_CN] = [
    ...opsNumberCN.ops, ...opsStringCN.ops, ...opsBooleanCN.ops, ...opsDateCN.ops,
    ...opsMonthCN.ops, ...opsYearCN.ops, ...opsTimeCN.ops, ...opsGeographyCN.ops,
    ...opsConvertCN.ops, ...opsAggregateCN.ops
];



let activeContext = '';
let operators = [];
let operatorsList = [];
let operatorsMap = {};
let operatorsByAlias = {};
let operatorsByResultDataType = {};
let operatorsToRespondDataType = {};
let operatorsCustomized = [];

activateContext(contexts.MYSQL);

function getContexts() {
    return operatorContexts;
}

function getActiveContext() {
    return activeContext;
}

function activateContext(context) {
    if(operatorContexts[context]){
        operators = [];
        operatorsList = [];
        operatorsMap = {};
        operatorsByAlias = {};
        operatorsByResultDataType = {};
        operatorsToRespondDataType = {};
        operatorsCustomized = [];
        activeContext = context;
        operators = operatorContexts[context];
        operators.forEach(op => linkOp(op));
    }else{
        console.error(`operator context: [${context}] does not exist`)
    }
}

function addOp(op){
    if(!operatorContexts[op.getContext()]){
        operatorContexts[op.getContext()] = [];
    }
    operatorContexts[op.getContext()].push(op);
    if(op.getContext() === activeContext){
        linkOp(op);
    }
}

function mapOp(op) {
    if(op.getContext() === activeContext) {
        if (op.getAlias() !== null && op.getAlias() !== undefined && op.getAlias() !== '') {
            if (operatorsByAlias[op.getAlias()]) {
                console.error(`duplicate template alias: ${op.getAlias()}`)
            } else {
                operatorsByAlias[op.getAlias()] = op;
            }
        }
    }
}

function linkOp(op) {

    operatorsList.push(op);

    if(operatorsMap[op.getId()]){
        console.error(`duplicate template id: ${op.getId()}`);
    }else{
        operatorsMap[op.getId()] = op;
    }

    mapOp(op);

    let resultDataType = op.getResultDataType();
    if(!operatorsByResultDataType[resultDataType]){
        operatorsByResultDataType[resultDataType] = [];
    }
    operatorsByResultDataType[resultDataType].push(op);


    let firstParam = op.getFirstParam();
    if(!operatorsToRespondDataType[firstParam.getDataType()]){
        operatorsToRespondDataType[firstParam.getDataType()] = [];
    }
    operatorsToRespondDataType[firstParam.getDataType()].push(op);

    if(op.isCustomized()){
        operatorsCustomized.push(op);
    }
}



function op(alias) {
    if(operatorsByAlias[alias]) {
        return operatorsByAlias[alias];
    }else{
        console.error(`template of alias: ${alias} does not exist`);
        return null;
    }
}

function opById(id){
    if(operatorsMap[id]) {
        return operatorsMap[id]
    }else{
        console.error(`template of id: ${id} does not exist`);
        return null;
    }
}

function opsList() {
    return operatorsList;
}

function opsByResult(dataType) {
    if(types.isLegalDataType(dataType)){
        return operatorsByResultDataType[dataType];
    }else{
        console.error(`data type: ${dataType} does not exist`);
        return null;
    }
}

function opsToRespond(dataType) {
    if(types.isLegalDataType(dataType)){
        return (operatorsToRespondDataType[dataType] || []).concat((operatorsToRespondDataType[types.DATA.UNCERTAIN] || []));
    }else{
        console.error(`data type: ${dataType} does not exist`);
        return null;
    }
}

function opsCustomized() {
    return operatorsCustomized;
}

export {
    op,
    addOp,
    mapOp,
    opsToRespond
}

export default {
    getContexts,
    getActiveContext,
    activateContext,
    opById,
    opsList,
    opsByResult,
    opsToRespond,
    opsCustomized
};
