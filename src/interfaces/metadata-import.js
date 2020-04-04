import { MetadataTable } from '../models/MetadataTable';
import { MetadataField } from '../models/MetadataField';
import { MetadataEnum } from '../models/MetadataEnum';
import { addTable, addField, addEnum } from '../metadata/metadata';


const starterId = 100;
let currentId = starterId;


export class ImportedMetadataTable extends MetadataTable{

    constructor({name, label, hint}) {
        super({
            id: currentId,
            name,
            label,
            hint
        });
        currentId++;
        addTable(this);

    }


}

export class ImportedMetadataField extends MetadataField{

    constructor({name, label, hint, dataType, distributeType, unit}){
        super({
            id: currentId,
            name,
            label,
            hint,
            dataType,
            distributeType,
            unit
        });
        currentId++;
        addField(this);
    }

}

export class ImportedMetadataEnum extends MetadataEnum{

    constructor({code, label}) {
        super({
            id: currentId,
            code,
            label
        });
        currentId++;
        addEnum();
    }

}