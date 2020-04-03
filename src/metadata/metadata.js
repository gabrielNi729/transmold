import types from '../constants/types/types';
import { MetadataTable } from '../models/MetadataTable';
import { MetadataField } from '../models/MetadataField';
import { MetadataEnum } from '../models/MetadataEnum';


let fields = [

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


let tables = [

    new MetadataTable({
        id: 100,
        name: 'PERSON_INFO',
        label: 'Personal information'
    }).addFields(fields)

];


export default {
    tables,
    fields
}