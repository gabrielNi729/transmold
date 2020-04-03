import types from '../../constants/types/types';
import contexts from '../../constants/texts/contexts-template'
import { DefOperatorTemplate } from '../../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../../models/DefOperatorParameter';


let ops = [

    new DefOperatorTemplate({
        id: 8000,
        name: 'sum',
        context: contexts.MYSQL,
        templateDisplay: 'sum($1)',
        templateCode: 'sum($1)',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 8001,
        name: 'avg',
        context: contexts.MYSQL,
        templateDisplay: 'avg($1)',
        templateCode: 'avg($1)',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 8002,
        name: 'min',
        context: contexts.MYSQL,
        templateDisplay: 'min($1)',
        templateCode: 'min($1)',
        resultDataType: '$1',
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.UNCERTAIN})
        }
    }),

    new DefOperatorTemplate({
        id: 8003,
        name: 'max',
        context: contexts.MYSQL,
        templateDisplay: 'max($1)',
        templateCode: 'max($1)',
        resultDataType: '$1',
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.UNCERTAIN})
        }
    }),

    new DefOperatorTemplate({
        id: 8004,
        name: 'count',
        context: contexts.MYSQL,
        templateDisplay: 'count($1)',
        templateCode: 'count($1)',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.UNCERTAIN})
        }
    })

];


export default {
    ops
}