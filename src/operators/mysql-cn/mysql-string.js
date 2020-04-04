import types from '../../constants/types/types';
import contexts from '../../constants/texts/contexts-template'
import { DefOperatorTemplate } from '../../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../../models/DefOperatorParameter';


let ops = [

    new DefOperatorTemplate({
        id: 200,
        name: '拼接',
        context: contexts.MYSQL_CN,
        templateDisplay: '$1 拼接 $2',
        templateCode: 'concat($1,$2)',
        resultDataType: types.DATA.STRING,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.STRING})
        }
    }),

    new DefOperatorTemplate({
        id: 201,
        name: '二次拼接',
        context: contexts.MYSQL_CN,
        templateDisplay: '$1 拼接 $2 拼接 $3',
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
        name: '截取前',
        context: contexts.MYSQL_CN,
        templateDisplay: '$1 截取前 $2 位',
        templateCode: 'substring($1,$2)',
        resultDataType: types.DATA.STRING,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.STRING}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER, inputTypes: [types.INPUT.CONSTANT]})
        }
    }),

    new DefOperatorTemplate({
        id: 203,
        name: '截取',
        context: contexts.MYSQL_CN,
        templateDisplay: '$1 截取 $2 位 长度为 $3',
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
        context: contexts.MYSQL_CN,
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
        context: contexts.MYSQL_CN,
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