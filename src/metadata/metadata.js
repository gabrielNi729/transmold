import types from '../constants/types/types';
import { MetadataTable } from '../models/MetadataTable';
import { MetadataField } from '../models/MetadataField';
import { MetadataEnum } from '../models/MetadataEnum';


let count = 0;
let lastcount = count;
let metadataMap = {};
let fields = [];
let tables = [];

clear();


function addEnum() {
    count++;
}

function addField(field){
    fields.push(field);
    count++;
}

function addTable(table) {
    tables.push(table);
    count++;
}



function datum(tableName = '', fieldName = '', enumCode = ''){
    if(count !== lastcount){
        restructure();
        lastcount = count;
    }

    if(!tableName){
        return null;
    }

    if(!fieldName){
        return metadataMap[`${tableName}`] || null;
    }

    if(!enumCode){
        return metadataMap[`${tableName}.${fieldName}`] || null;
    }

    return metadataMap[`${tableName}.${fieldName}.${enumCode}`] || null;

}

function restructure() {
    metadataMap = {};
    tables.forEach(t => {
        let kt= `${t.getName()}`;
        if(metadataMap[kt]){
            console.error(`duplicate table: ${kt}`);
        }else{
            metadataMap[kt] = t;
            t.getFields().forEach(f => {
                let kf = `${t.getName()}.${f.getName()}`;
                if(metadataMap[kf]){
                    console.error(`duplicate field: ${kf}`);
                }else{
                    metadataMap[kf] = f;
                    f.getEnums().forEach(e => {
                        let ke = `${t.getName()}.${f.getName()}.${e.getCode()}`
                        if(metadataMap[ke]){
                            console.error(`duplicate enum: ${ke}`);
                        }else{
                            metadataMap[ke] = e;
                        }
                    })
                }
            })
        }
    })
}

function clear() {
    count = 0;
    lastcount = count;
    metadataMap = {};
    fields = [];
    tables = [];
    restructure();
}

function useExample() {

    fields = [
        new MetadataField({
            id: 1000,
            name: 'USER_ID',
            label: 'UserId',
            dataType: types.DATA.STRING
        }),

        new MetadataField({
            id: 1001,
            name: 'USER_NAME',
            label: 'UserName',
            dataType: types.DATA.STRING
        }),

        new MetadataField({
            id: 1002,
            name: 'AGE',
            label: 'Age',
            dataType: types.DATA.NUMBER,
            distributeType: types.DISTRIBUTE.METRICS,
            unit: 'years'
        }),

        new MetadataField({
            id: 1003,
            name: 'GENDER',
            label: 'Gender',
            dataType: types.DATA.NUMBER,
            distributeType: types.DISTRIBUTE.CATEGORY
        }).addEnums([
            new MetadataEnum({id: 100001, code: 0, label: 'Male'}),
            new MetadataEnum({id: 100002, code: 1, label: 'Female'})
        ])
    ];

    tables = [
        new MetadataTable({
            id: 100,
            name: 'PERSON_INFO',
            label: 'Personal information'
        }).addFields(fields)
    ];
}

function fieldsList(){
    return fields;
}

function tablesList(){
    return tables;
}

export {
    datum,
    addEnum,
    addField,
    addTable
}


export default {
    fieldsList,
    tablesList,
    clear,
    useExample
}