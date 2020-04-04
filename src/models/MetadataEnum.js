export class MetadataEnum {


    constructor({id, code, label}) {

        if(MetadataEnum.validate(...arguments)){
            this.id = id;
            this.code = code;
            this.label = label;
            this.fieldId = null;
            this.dataType = null;

        }
    }

    setFieldId(fieldId){
        this.fieldId = fieldId;
        return this;
    }

    setDataType(dataType){
        this.dataType = dataType;
        return this
    }

    getCode(){
        return this.code;
    }

    getLabel(){
        return this.label;
    }

    getFieldId(){
        return this.fieldId;
    }

    getDataType(){
        return this.dataType
    }

    static validate({id, code, label}){

        let prefix = `defining enum [${label}]`;

        if((!id && id !== 0) || (!code && code !== 0) || !label){
            console.error(`${prefix}: missing information`);
            return false;
        }

        return true;
    }

}