import types from '../../constants/types/types';
import contexts from '../../constants/texts/contexts-template'
import { DefOperatorTemplate } from '../../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../../models/DefOperatorParameter';


let ops = [

    new DefOperatorTemplate({
        id: 300,
        name: '与',
        context: contexts.MYSQL,
        templateDisplay: '$1 与 $2',
        templateCode: '$1 and $2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.BOOLEAN}),
            $2: new DefOperatorParameter({dataType: types.DATA.BOOLEAN})
        }
    }),

    new DefOperatorTemplate({
        id: 301,
        name: '或',
        context: contexts.MYSQL_CN,
        templateDisplay: '$1 或 $2',
        templateCode: '$1 or $2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.BOOLEAN}),
            $2: new DefOperatorParameter({dataType: types.DATA.BOOLEAN})
        }
    }),

    new  DefOperatorTemplate({
        id: 302,
        name: '非',
        context: contexts.MYSQL_CN,
        templateDisplay: '非 $1',
        templateCode: 'not $1',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.BOOLEAN}),
        }
    })
];


export default {
    ops
}