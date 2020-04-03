import types from '../../constants/types/types';
import contexts from '../../constants/texts/contexts-template'
import { DefOperatorTemplate } from '../../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../../models/DefOperatorParameter';


let ops = [

    new DefOperatorTemplate({
        id: 200,
        name: 'concat',
        context: contexts.MYSQL,
        templateDisplay: '$1 concat $2',
        templateCode: 'concat($1,$2)',
        resultDataType: types.DATA.STRING,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.STRING})
        }
    }),

    new DefOperatorTemplate({
        id: 201,
        name: 'concat3',
        context: contexts.MYSQL,
        templateDisplay: '$1 concat $2 concat $3',
        templateCode: 'concat($1,$2,$3)',
        resultDataType: types.DATA.STRING,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $3: new DefOperatorParameter({dataType: types.DATA.STRING})
        }
    }),

    new DefOperatorTemplate({
        id: 202,
        name: 'substr',
        context: contexts.MYSQL,
        templateDisplay: '$1 substring from $2',
        templateCode: 'substring($1,$2)',
        resultDataType: types.DATA.STRING,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER, inputTypes: [types.INPUT.CONSTANT]})
        }
    }),

    new DefOperatorTemplate({
        id: 203,
        name: 'subfix',
        context: contexts.MYSQL,
        templateDisplay: '$1 substring from $2 by length $3',
        templateCode: 'substring($1,$2,$3)',
        resultDataType: types.DATA.STRING,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER, inputTypes: [types.INPUT.CONSTANT]}),
            $3: new DefOperatorParameter({dataType: types.DATA.NUMBER, inputTypes: [types.INPUT.CONSTANT]})
        }
    }),



    new DefOperatorTemplate({
        id: 2000,
        name: '=',
        alias: '=.str',
        context: contexts.MYSQL,
        templateDisplay: '$1 = $2',
        templateCode: '$1=$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.STRING})
        }
    }),

    new DefOperatorTemplate({
        id: 2001,
        name: '≠',
        alias: '≠.str',
        context: contexts.MYSQL,
        templateDisplay: '$1 ≠ $2',
        templateCode: '$1≠$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.STRING})
        }
    }),
];


export default {
    ops
}