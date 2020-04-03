import types from '../../constants/types/types';
import contexts from '../../constants/texts/contexts-template'
import { DefOperatorTemplate } from '../../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../../models/DefOperatorParameter';


let ops = [

    new DefOperatorTemplate({
        id: 100,
        name: '+',
        context: contexts.MYSQL,
        templateDisplay: '$1 + $2',
        templateCode: '$1+$2',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 101,
        name: '-',
        context: contexts.MYSQL,
        templateDisplay: '$1 - $2',
        templateCode: '$1-$2',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 102,
        name: '*',
        context: contexts.MYSQL,
        templateDisplay: '$1 * $2',
        templateCode: '$1*$2',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 103,
        name: '/',
        context: contexts.MYSQL,
        templateDisplay: '$1 / $2',
        templateCode: '$1/$2',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 104,
        name: 'div',
        context: contexts.MYSQL,
        templateDisplay: '$1 div $2',
        templateCode: '$1 div $2',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 105,
        name: '%',
        context: contexts.MYSQL,
        templateDisplay: '$1 % $2',
        templateCode: '$1 mod $2',
        resultDataType: types.DATA.NUMBER,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),



    new DefOperatorTemplate({
        id: 1000,
        name: '=',
        context: contexts.MYSQL,
        templateDisplay: '$1 = $2',
        templateCode: '$1=$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1001,
        name: '≠',
        context: contexts.MYSQL,
        templateDisplay: '$1 ≠ $2',
        templateCode: '$1≠$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1002,
        name: '>',
        context: contexts.MYSQL,
        templateDisplay: '$1 > $2',
        templateCode: '$1>$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1003,
        name: '≥',
        context: contexts.MYSQL,
        templateDisplay: '$1 ≥ $2',
        templateCode: '$1≥$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1004,
        name: '<',
        context: contexts.MYSQL,
        templateDisplay: '$1 < $2',
        templateCode: '$1<$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1005,
        name: '≤',
        context: contexts.MYSQL,
        templateDisplay: '$1 ≤ $2',
        templateCode: '$1≤$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1006,
        name: '(a,b)',
        context: contexts.MYSQL,
        templateDisplay: '$1 (a,b) $2, $3',
        templateCode: '$1 between $2 and $3 and $1!=$2 and $1!=$3',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $3: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1007,
        name: '[a,b]',
        context: contexts.MYSQL,
        templateDisplay: '$1 [a,b] $2, $3',
        templateCode: '$1 between $2 and $3',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $3: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1008,
        name: '(a,b]',
        context: contexts.MYSQL,
        templateDisplay: '$1 (a,b] $2, $3',
        templateCode: '$1 between $2 and $3 and $1!=$2',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $3: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    }),

    new DefOperatorTemplate({
        id: 1009,
        name: '[a,b)',
        context: contexts.MYSQL,
        templateDisplay: '$1 [a,b) $2, $3',
        templateCode: '$1 between $2 and $3 and $1!=$3',
        resultDataType: types.DATA.BOOLEAN,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $2: new DefOperatorParameter({dataType: types.DATA.NUMBER}),
            $3: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    })



];



export default {
    ops
}