import types from '../constants/types/types';
import { MetadataEnum } from './MetadataEnum';


export class MetadataField{

    constructor({id, name, label, hint = '', dataType, distributeType = types.DISTRIBUTE.NONE, unit}) {

        if(MetadataField.validate(...arguments)){
            this.id = id;
            this.name = name;
            this.label = label;
            this.hint = hint;
            this.tableId = null;
            this.tableName = null;
            this.dataType = dataType;
            this.distributeType = distributeType;
            this.unit = unit;
            this.enums = [];
            this.mapEnumsCode = {}
        }

    }


    addEnums(enums){
        let prefix = `adding enums for [${this.name}]`;
        if(this.distributeType === types.DISTRIBUTE.CATEGORY){
            enums.forEach(en => {
                if(!(en instanceof MetadataEnum)){
                    console.error(`${prefix}: given object not an instance of Enum`);
                } else if(this.mapEnumsCode[en.getCode()] === 1){
                    console.error(`${prefix}: enum ${en.getCode()} already exists for field ${this.name}`);
                }else{
                    this.mapEnumsCode[en.getCode()] = 1;
                    this.enums.push(en.setFieldId(this.id).setDataType(this.dataType));
                }
            })
        }else{
            console.error(`${prefix}: can not have enums because it is not a category`)
        }
        return this;
    }

    setTableId(tableId){
        this.tableId = tableId;
        return this;
    }

    setTableName(tableName){
        this.tableName = tableName;
        return this;
    }

    getName(){
        return this.name;
    }

    getLabel(){
        return this.label;
    }

    getHint(){
        return this.hint;
    }

    getTableId(){
        return this.tableId;
    }

    getTableName(){
        return this.tableName;
    }

    getDataType(){
        return this.dataType;
    }

    getDistributeType(){
        return this.distributeType;
    }

    getUnit(){
        return this.unit;
    }

    getEnums(){
        return this.enums;
    }

    static validate({id, name, label, hint = '', dataType, distributeType = types.DISTRIBUTE.NONE, unit}){

        let prefix = `defining field [${name}]`;

        if((!id && id !== 0) || !name){
            console.error(`${prefix}: missing information`);
            return false;
        }

        if(!types.isLegalDataType(dataType)){
            console.error(`${prefix}: data type can not be [${dataType}]`);
            return false;
        }

        if(!types.isLegalDistributeType(distributeType)){
            console.error(`${prefix}: distribute type can not be [${distributeType}]`);
            return false;
        }

        return true;
    }

}

