export default class ElementBtn{
    constructor(t, c, text){
        this.elements = {
            type: t,
            defaultClass : c,
            textContent: text,
        };
        this.render = () => {
            const {type, defaultClass, textContent} = this.elements;
            let btn = document.createElement('button');
            btn.type = `${type}`;
            btn.className = `${defaultClass}`;
            btn.textContent = `${textContent}`;
            return btn;
        };
    };
};

// const elementBtn = new ElementBtn('button', 'btn-class', 'Click-me!').render();
// new ElementBtn('button', 'btn-class', 'Click-me!').render();