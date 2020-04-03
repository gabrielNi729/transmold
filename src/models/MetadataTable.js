import { MetadataField } from './MetadataField';


export class MetadataTable {

    constructor({id, name, label, hint}){

        if(MetadataTable.validate(...arguments)){
            this.id = id;
            this.name = name;
            this.label = label;
            this.hint = hint;
            this.fields = [];
        }
    }

    addFields(fields){
        let prefix = `adding fields for [${this.name}]`;
        fields.forEach(f => {
            if (!(f instanceof MetadataField)) {
                console.error(`${prefix}: given object not an instance of Field`);
            } else {
                this.fields.push(f.setTableId(this.id));
            }
        });
        return this;
    }

    static validate({id, name, label, hint}){

        let prefix = `defining table [${name}]`;

        if((!id && id !== 0) || !name){
            console.error(`${prefix}: missing information`);
            return false;
        }

        return true;
    }
}