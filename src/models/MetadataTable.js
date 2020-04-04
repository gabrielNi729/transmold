import { MetadataField } from './MetadataField';


export class MetadataTable {

    constructor({id, name, label, hint = ''}){

        if(MetadataTable.validate(...arguments)){
            this.id = id;
            this.name = name;
            this.label = label;
            this.hint = hint;
            this.fields = [];
            this.mapFieldsName = {};
        }
    }

    addFields(fields){
        let prefix = `adding fields for [${this.name}]`;
        fields.forEach(f => {
            if (!(f instanceof MetadataField)) {
                console.error(`${prefix}: given object not an instance of Field`);
            }else if(this.mapFieldsName[f.getName()] === 1){
                console.error(`${prefix}: field ${f.getName()} already exists for table ${this.name}`);
            }else {
                this.mapFieldsName[f.getName()] = 1;
                this.fields.push(f.setTableId(this.id).setTableName(this.name));
            }
        });
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

    getFields(){
        return this.fields;
    }

    static validate({id, name, label, hint = ''}){

        let prefix = `defining table [${name}]`;

        if((!id && id !== 0) || !name){
            console.error(`${prefix}: missing information`);
            return false;
        }

        return true;
    }
}