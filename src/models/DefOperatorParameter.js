import types from '../constants/types/types';


export class DefOperatorParameter {

    constructor({dataType, inputTypes = [], regulations = []}){

        if(DefOperatorParameter.validate(...arguments)){
            this.templateId = null;
            this.holder = null;
            this.dataType = dataType;
            this.inputTypes = inputTypes.length === 0? [types.INPUT.CONSTANT, types.INPUT.ENUMERATE, types.INPUT.VARIABLE, types.INPUT.INSTANCE] : inputTypes;
            this.regulations = regulations.length === 0? [dataType] : regulations;
        }

    }

    getTemplateId(){
        return this.templateId;
    }

    getHolder(){
        return this.holder;
    }

    getDataType(){
        return this.dataType;
    }

    getCompatibleInputTypes(){
        return this.inputTypes;
    }

    isInputCompatible(type){
        if(types.isLegalInputType(type)){
            return this.inputTypes.includes(type);
        }else{
            console.error(`checking compatibility: input type [${type}] does not exist`)
        }
    }

    getRegulations(){
        return this.regulations;
    }

    setTemplateId(templateId){
        this.templateId = templateId;
    }

    setHolder(holder){
        this.holder = holder;
    }

    static validate({dataType, inputTypes = [], regulations = []}){

        let prefix = `defining parameter`;

        if(!types.isLegalDataType(dataType)){
            console.error(`${prefix}: data type can not be [${dataType}]`);
            return false;
        }

        if(!inputTypes.every(type => types.isLegalInputType(type))){
            console.error(`${prefix}: input type does not exist`);
            return false;
        }

        if(!regulations.every(type => types.isLegalDataType(type))){
            console.error(`${prefix}: regular type does not exist`);
            return false;
        }

        return true;
    }
}