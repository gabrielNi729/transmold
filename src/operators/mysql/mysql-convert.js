import types from '../../constants/types/types';
import contexts from '../../constants/texts/contexts-template'
import { DefOperatorTemplate } from '../../models/DefOperatorTemplate';
import { DefOperatorParameter } from '../../models/DefOperatorParameter';


let ops = [


    new DefOperatorTemplate({
        id: 9000,
        name: 'string',
        context: contexts.MYSQL,
        templateDisplay: 'string($1)',
        templateCode: 'cast($1 as char)',
        resultDataType: types.DATA.STRING,
        params: {
            $1: new DefOperatorParameter({dataType: types.DATA.NUMBER})
        }
    })


];


export default {
    ops
}