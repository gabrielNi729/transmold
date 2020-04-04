import types from '../../constants/types/types';
import contexts from '../../constants/texts/contexts-template'
import { DefOperatorTemplate } from '../../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../../models/DefOperatorParameter';


let ops = [

    new DefOperatorTemplate({
        id: 8000,
        name: '求和',
        context: contexts.MYSQL_CN,
        templateDisplay: '求和($1)',
        templateCode: 'sum($1)',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 8001,
        name: '平均值',
        context: contexts.MYSQL_CN,
        templateDisplay: '平均值($1)',
        templateCode: 'avg($1)',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 8002,
        name: '最小值',
        context: contexts.MYSQL_CN,
        templateDisplay: '最小值($1)',
        templateCode: 'min($1)',
        resultDataType: '$1',
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.UNCERTAIN})
        }
    }),

    new DefOperatorTemplate({
        id: 8003,
        name: '最大值',
        context: contexts.MYSQL_CN,
        templateDisplay: '最大值($1)',
        templateCode: 'max($1)',
        resultDataType: '$1',
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.UNCERTAIN})
        }
    }),

    new DefOperatorTemplate({
        id: 8004,
        name: '计数',
        context: contexts.MYSQL_CN,
        templateDisplay: '技术($1)',
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