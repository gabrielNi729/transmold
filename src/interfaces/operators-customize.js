import { DefOperatorTemplate } from '../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../models/DefOperatorParameter';
import { addOp, mapOp } from '../operators/operators';

const starterId = 10000;
let currentId = starterId;

export class CustomizedTemplate extends DefOperatorTemplate{

    constructor({name, context, templateDisplay, templateCode, resultDataType, params}){
        super({
            id: currentId,
            name,
            alias: '',
            context,
            templateDisplay,
            templateCode,
            resultDataType,
            params,
            customized: true
        });
        currentId++;
        addOp(this)
    }

    as(alias){
        this.setAlias(alias);
        mapOp(this);
        return this;
    }
}

export class CustomizedParameter extends DefOperatorParameter{

    constructor({dataType, inputTypes, regulations}){
        super({
            dataType,
            inputTypes,
            regulations
        })
    }
}
