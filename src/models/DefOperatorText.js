export class DefOperatorText {

    constructor({templateId, index, content}) {

        if(DefOperatorText.validate(...arguments)) {
            this.templateId = templateId;
            this.index = index;
            this.content = content;
        }
    }

    getContent(){
        return this.content;
    }

    static validate({templateId, index, content}){

        if((!templateId && templateId !== 0) || (!index && index !== 0) || !content || content.trim() === ''){
            console.error(`defining text: missing information`);
            return false;
        }

        return true;
    }


}