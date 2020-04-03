import types from '../constants/types/types';
import { DefOperatorParameter } from './DefOperatorParameter';
import { InstanceExpression } from './InstanceExpression';
import { MetadataField } from './MetadataField';
import { MetadataEnum } from './MetadataEnum';


export class InstanceValue {

    constructor({parameter}){

        if(InstanceValue.validate(...arguments)){
            this.parameter = parameter;
            this.inputType = types.INPUT.CONSTANT;
            this.value = null;
            this.legitimate = false;
            this.actualResultDataType = null;
        }
    }

    getHolder(){
        return this.parameter.getHolder();
    }

    getParameterDataType(){
        return this.parameter.getDataType();
    }

    getDataType(){
        let type = this.getParameterDataType();
        if(!types.isUncertainDataType(type)){
            return type
        }else{
            return this.actualResultDataType;
        }
    }

    getCompatibleInputTypes(){
        return this.parameter.getCompatibleInputTypes();
    }

    isInputCompatible(type){
        return this.parameter.isInputCompatible(type);
    }

    getRegulations(){
        return this.parameter.getRegulations();
    }

    getInputType(){
        return this.inputType;
    }

    getValue(){
        return this.value;
    }

    isLegitimate(){
        return this.legitimate;
    }

    updateLegitimate(){
        let uncertain = types.isUncertainDataType(this.getParameterDataType());
        if(this.value instanceof InstanceExpression){
            this.legitimate = (this.parameter.getDataType() === this.value.getResultDataType() || uncertain) && this.value.isLegitimate();
        }
    }

    setValue(value){

        let uncertain = types.isUncertainDataType(this.getParameterDataType());

        if(value instanceof MetadataField){
            this.inputType = types.INPUT.VARIABLE;
            this.legitimate = this.parameter.getDataType() === value.getDataType();
            if(uncertain){
                this.actualResultDataType = value.getDataType();
                this.legitimate = true;
            }
        }else if(value instanceof InstanceExpression){
            this.inputType = types.INPUT.INSTANCE;
            this.legitimate = this.parameter.getDataType() === value.getResultDataType() && value.isLegitimate();
            if(uncertain){
                this.actualResultDataType = value.getResultDataType();
                this.legitimate = value.isLegitimate();
            }
        }else if(value instanceof MetadataEnum){
            this.inputType = types.INPUT.ENUMERATE;
            this.legitimate = types.regTestMulti(this.getRegulations(), value.getCode());
            if(uncertain){
                this.actualResultDataType = value.getDataType();
            }
        }else{
            this.inputType = types.INPUT.CONSTANT;
            this.legitimate = types.regTestMulti(this.getRegulations(), value);
            if(uncertain){
                this.actualResultDataType = types.identifyDataType(value);
            }
        }
        if(!this.parameter.isInputCompatible(this.inputType)){
            console.error(`setting value: input type [${this.inputType}] not compatible here`);
        }
        this.value = value;
        return this;
    }

    static validate({parameter}){

        let prefix = `instantiating parameter`;

        if(!(parameter instanceof DefOperatorParameter)){
            console.error(`${prefix}: given object not an instance of Parameter`);
            return false;
        }

        return true;
    }
}