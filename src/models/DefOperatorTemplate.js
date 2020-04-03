import types from '../constants/types/types';
import { DefOperatorParameter } from './DefOperatorParameter';
import { DefOperatorText } from './DefOperatorText';


export class DefOperatorTemplate {

    constructor({id, name, alias = name, context = 'uncontexted', templateDisplay, templateCode, resultDataType, params = {}, customized = false}) {

        if(DefOperatorTemplate.validate(...arguments)){
            this.id = id;
            this.name = name;
            this.alias = alias;
            this.context = context;
            this.templateDisplay = templateDisplay;
            this.templateCode = templateCode;
            this.resultDataType = resultDataType;
            this.customized = customized;
            // parameters
            this.params = params;
            this.paramSize = 0;
            this.syncParameters();
            // segments
            this.segmentsDisplay = this.initSegments(this.templateDisplay);
            this.segmentsCode = this.initSegments(this.templateCode);
            // grammtical functions
            this.firstParam = null;
            this.firstParamIndex = null;
            this.firstTextIndex = null;
            this.firstTextNeighbors = null;
            this.initGrammtical();
        }
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getAlias(){
        return this.alias;
    }

    getContext(){
        return this.context;
    }

    getParams(){
        return this.params;
    }

    getSegmentsDisplay(){
        return this.segmentsDisplay;
    }

    getSegmentsCode(){
        return this.segmentsCode;
    }

    getResultDataType(){
        return this.resultDataType;
    }

    getParamSize(){
        return this.paramSize;
    }

    isBool(){
        return this.resultDataType === types.DATA.BOOLEAN
    }

    isCustomized(){
        return this.customized;
    }

    getFirstParam(){
        return this.firstParam;
    }

    getFirstParamIndex(){
        return this.firstParamIndex;
    }

    getFirstTextIndex(){
        return this.firstTextIndex;
    }

    getFirstTextNeighbors(){
        return this.firstTextNeighbors;
    }

    setAlias(alias){
        this.alias = alias;
    }

    syncParameters(){
        let size = 0;
        Object.keys(this.params).forEach(key => {
            size++;
            this.params[key].setTemplateId(this.id);
            this.params[key].setHolder(key);
        });
        this.paramSize = size;
    }


    initSegments(template){

        let segments = [];
        let texts = template.split(types.REGS.$);
        let holders = template.match(types.REGS.$);

        let index = 0;
        let count = 0;

        texts.forEach(t => {
            if(t !== ''){
                segments.push(
                    new DefOperatorText({
                        templateId: this.id,
                        index: index++,
                        content: t
                    })
                );
            }
            if(count < holders.length) {
                segments.push(this.params[holders[count]]);
                count++;
            }
        });

        return segments;
    }

    initGrammtical(){
        this.firstParam = this.segmentsDisplay.find(seg => typeof seg.getHolder === 'function');
        this.firstParamIndex = this.segmentsDisplay.indexOf(this.firstParam);
        this.firstTextIndex = this.firstParamIndex === 0? 1: 0;

        if(this.segmentsDisplay[this.firstTextIndex].getContent().includes(this.name)){
            this.firstTextNeighbors = this.segmentsDisplay[this.firstTextIndex].getContent().split(this.name).map(text => text.trim());
        }else{
            this.firstTextNeighbors = ['', this.segmentsDisplay[this.firstTextIndex].getContent()].map(text => text.trim());
        }
    }

    static validate({id, name, alias = name, context = 'uncontexted', templateDisplay, templateCode, resultDataType, params = {}, customized = false}){

        let prefix = `defining template [${name}]`;

        if((!id && id !== 0) || !name || !templateDisplay || !templateCode){
            console.error(`${prefix}: missing information`);
            return false;
        }

        if(!types.isLegalDataType(resultDataType) && !params[resultDataType]){
            console.error(`${prefix}: result data type can not be [${resultDataType}]`);
            return false
        }

        let holdersDisplay = new Set(templateDisplay.match(types.REGS.$));
        let holdersCode = new Set(templateCode.match(types.REGS.$));
        let keysParams = new Set();

        Object.keys(params).forEach(key => {
            if(!(params[key] instanceof DefOperatorParameter)){
                console.error(`${prefix}: given object not an instance of Parameter`);
                return false;
            }
            keysParams.add(key)
        });

        if(holdersDisplay.size !== holdersCode.size || holdersDisplay.size !== keysParams.size){
            console.error(`${prefix}: unmatched parameter(s)`);
            return false;
        }

        if(!Array.from(keysParams).every(key => holdersDisplay.has(key) && holdersCode.has(key))){
            console.error(`${prefix}: unmatched parameter(s)`);
            return false;
        }

        return true;
    }


}