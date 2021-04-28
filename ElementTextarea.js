export default class ElementTextarea{
    constructor(cl, pl, data){
        this.elements = {
            placeholder: pl,
            defaultClass: cl,
        };
        this.render = () => {
            const {placeholder, defaultClass} = this.elements;
            let textarea = document.createElement('textarea');
            textarea.placeholder = `${placeholder}`;
            textarea.className = `${defaultClass}`;
            if (data) {
                btn.dataset.value = `${data}`;
            };
            return textarea;
        };
    };
};

// const elementTextarea = new ElementTextarea('Что-то за текстом','selectarea-class').render();
// new ElementTextarea('Что-то за текстом','selectarea-class').render();