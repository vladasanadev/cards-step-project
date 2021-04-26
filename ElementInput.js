export default class ElementInput{
    constructor(tp, ph, cl){
        this.elements = {
            type: tp,
            placeholder: ph,
            defaultClass: cl,
        };
        this.render = () => {
            const {type, placeholder, defaultClass} = this.elements;
            let input = document.createElement('input');
            input.type = type;
            input.placeholder = placeholder;
            input.className =`${defaultClass}`;
            return input;
        };
    };
};

// const elementInput = new ElementInput('text', 'Что-то за текстом', 'input-class').render()
// new ElementInput('text', 'Что-то за текстом', 'input-class').render()