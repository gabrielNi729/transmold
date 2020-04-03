import types from '../constants/types/types';
import { DefOperatorTemplate } from './DefOperatorTemplate';
import { DefOperatorParameter } from './DefOperatorParameter';
import { DefOperatorText } from './DefOperatorText';
import { InstanceValue } from './InstanceValue';

export class InstanceExpression {

    static wrapperT = ['', ''];
    static wrapperC = ['', ''];
    static wrapperE = ['', ''];
    static wrapperV = ['', ''];
    static wrapperI = ['', ''];

    constructor({template, name = 'unnamed'}) {
        if(InstanceExpression.validate(...arguments)){
            this.template = template;
            this.name = name;
            this.values = {};
            this.actualResultDataType = null;
            this.segmentsDisplay = [];
            this.segmentsCode = [];
            this.instancesQuoters = [];
            this.outWrap = '';
            this.initValuesAndSegments();
        }
    }

    getTemplateId(){
        return this.template.getId();
    }

    getTemplateName(){
        return this.template.getName();
    }

    getTemplateResultDataType(){
        return this.template.getResultDataType();
    }

    getName(){
        return this.name;
    }

    getResultDataType(){
        let type = this.getTemplateResultDataType();
        if(types.isLegalDataType(type)){
            return type;
        }else{
            return this.actualResultDataType;
        }
    }

    getSegmentsDisplay(){
        return this.segmentsDisplay;
    }

    getSegmentsCode(){
        return this.segmentsCode;
    }

    getParamSize(){
        return this.template.getParamSize();
    }

    getFirstParamIndex(){
        return this.template.getFirstParamIndex();
    }

    getFirstTextIndex(){
        return this.template.getFirstTextIndex();
    }

    getFirstTextNeighbors(pos){
        let index = pos === 'post'? 1 : 0;
        return this.template.getFirstTextNeighbors()[index];
    }

    getInstanceQuoters(){
        return this.instancesQuoters;
    }

    addInstanceQuoter(instance){
        this.instancesQuoters.push(instance);
    }

    removeInstanceQuoter(instance){
        this.instancesQuoters = this.instancesQuoters.filter(i => i !== instance);
    }

    bindInstanceQuotes(holder, value){
        if(this.values[holder].getValue() instanceof InstanceExpression){
            this.values[holder].getValue().removeInstanceQuoter(this);
        }
        if(value instanceof InstanceExpression){
            value.addInstanceQuoter(this);
        }
    }

    isLegitimate(){
        return Object.keys(this.values).every(key => this.values[key].isLegitimate());
    }

    updateLegitimate(){
        Object.keys(this.values).forEach(key => this.values[key].updateLegitimate())
    }

    updateQuotersLegitimate(){
        this.instancesQuoters.forEach(i => i.updateLegitimate());
    }

    getOutWrap(forceUpdate){
        if(forceUpdate === true){
            this.outWrap = this.outputWrapper();
        }
        return this.outWrap;
    }

    setValue(holder, value){
        if(this === value){
            console.error(`setting value: an instance's value can not be the instance itself`)
        }else if(!this.values[holder]){
            console.error(`setting value: holder [${holder}] not found on instance`)
        }else{
            this.bindInstanceQuotes(holder, value);
            this.values[holder].setValue(this.convertConstantToEnumerate(holder, value));
            if(holder === this.getTemplateResultDataType()){
                this.actualResultDataType = this.values[holder].getDataType();
            }
            this.updateQuotersLegitimate();
        }
        this.outWrap = this.outputWrapper();
        return this;
    }

    setFirstValue(value){
        this.setValue(this.template.getFirstParam().getHolder(), value);
        return this;
    }

    convertConstantToEnumerate(holder, value){
        if(typeof value === 'object'){
            return value;
        }else if(!this.values[holder].isInputCompatible(types.INPUT.ENUMERATE)){
            return value;
        }else{
            let en = null;
            Object.keys(this.values).forEach(key => {
                if(key !== holder){
                    if(this.values[key].getInputType() === types.INPUT.VARIABLE){
                        en = this.values[key].getValue().getEnums().find(en => en.code + '' === value)
                    }
                }
            });
            return en === null || en === undefined? value : en;
        }
    }

    outputWrapper(type){
        let segments = type === 'display'? this.segmentsDisplay : this.segmentsCode;
        return segments.map(seg => this.outputTextAtom(seg, type, 'wrapper')).join('');
    }

    outputText(type, exp = false){
        let segments = type === 'display'? this.segmentsDisplay : this.segmentsCode;
        return segments.map(seg => this.outputTextAtom(seg, type, (exp === true? 'exp' : ''))).join('');
    }

    outputTextAtom(seg, type, mode){

        let prefixT = '';
        let suffixT = '';
        let prefixC = '';
        let suffixC = '';
        let prefixE = '';
        let suffixE = '';
        let prefixV = '';
        let suffixV = '';
        let prefixI = '';
        let suffixI = '';

        switch (mode){
            case 'exp':
                suffixC = '[c]';
                suffixV = '[v]';
                suffixE = '[e]';
                break;
            case 'wrapper':
                prefixT = InstanceExpression.wrapperT[0];
                suffixT = InstanceExpression.wrapperT[1];
                prefixC = InstanceExpression.wrapperC[0];
                suffixC = InstanceExpression.wrapperC[1];
                prefixE = InstanceExpression.wrapperE[0];
                suffixE = InstanceExpression.wrapperE[1];
                prefixV = InstanceExpression.wrapperV[0];
                suffixV = InstanceExpression.wrapperV[1];
                break;
            default:
                break;
        }

        if (seg instanceof DefOperatorText) {
            return `${prefixT}${seg.getContent()}${suffixT}`
        } else {
            switch (seg.getInputType()) {
                case types.INPUT.CONSTANT:
                    let val = seg.getValue();
                    if(seg.getDataType() !== types.DATA.NUMBER && seg.getDataType() !== types.DATA.BOOLEAN){
                        val = `'${val}'`
                    }
                    return `${prefixC}${val}${suffixC}`;
                case types.INPUT.ENUMERATE:
                    let tag = type === 'display' ? seg.getValue().getLabel() : seg.getValue().getCode();
                    return `${prefixE}${tag}${suffixE}`;
                case types.INPUT.VARIABLE:
                    let res = type === 'display' ? seg.getValue().getLabel() : seg.getValue().getName();
                    return `${prefixV}${res}${suffixV}`;
                case types.INPUT.INSTANCE:
                    let subSegs = type === 'display' ? seg.getValue().getSegmentsDisplay() : seg.getValue().getSegmentsCode();
                    return ['(', ...subSegs.map(subSeg => this.outputTextAtom(subSeg, type, mode)), ')'].join('');
                default:
                    return null;
            }

        }
    }

    initValuesAndSegments(){

        this.values = {};

        let params = this.template.getParams();
        Object.keys(params).forEach(key => {
            let param = params[key];
            this.values[key] = new InstanceValue({parameter: param});
        });

        this.segmentsDisplay = this.template.getSegmentsDisplay().map(seg => this.mapSegment(seg));
        this.segmentsCode = this.template.getSegmentsCode().map(seg => this.mapSegment(seg));
    }


    mapSegment(seg){
        if(seg instanceof DefOperatorParameter){
            return this.values[seg.getHolder()];
        }else if(seg instanceof DefOperatorText){
            return seg;
        }else{
            console.error(`instantiating template [${this.template.getName()}]: invalid segment`);
            return null;
        }
    }


    static validate({template, name = 'unnamed'}){

        let prefix = `instantiating template [${name}]`;
        
        if(!(template instanceof DefOperatorTemplate)){
            console.error(`${prefix}: given object not an instance of Template`);
            return false;
        }

        return true;
    }


    static setWrappers({wrapperText = '{t}', wrapperConstant = '{c}', wrapperEnumerate = '{e}', wrapperVariable = '{v}', wrapperInstance = '{i}'}){
        if(!wrapperText.includes('{t}')){
            console.error(`invalid wrapper for text`);
        }
        if(!wrapperConstant.includes('{c}')){
            console.error(`invalid wrapper for constant`);
        }
        if(!wrapperEnumerate.includes('{e}')){
            console.error(`invalid wrapper for enumerate`);
        }
        if(!wrapperVariable.includes('{v}')){
            console.error(`invalid wrapper for variable`);
        }
        if(!wrapperInstance.includes('{i}')){
            console.error(`invalid wrapper for instance`);
        }

        this.wrapperT = wrapperText.split('{t}');
        this.wrapperC = wrapperConstant.split('{c}');
        this.wrapperE = wrapperEnumerate.split('{e}');
        this.wrapperV = wrapperVariable.split('{v}');
        this.wrapperI = wrapperInstance.split('{i}');
    }

}