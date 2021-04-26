import ElementInput from "./ElementInput.js";
import ElementSelect from "./ElementSelect.js";
import ElementTextarea from "./ElementTextarea.js";
import ElementBtn from "./ElementBtn.js";

export default class ElementForm{
    constructor(parent, c){
        this.elements = {
            parent: document.querySelector(parent),
            defaultClass: c,
        };
        this.render = () => {
            const {parent, defaultClass} = this.elements;
            let form = document.createElement('form');
            form.className = `${defaultClass}`;
            parent.append(form);
            return parent;
        };
    };
};

// const elementForm = new ElementForm('body', 'form-class').render();
// new ElementForm('body', 'form-class').render();