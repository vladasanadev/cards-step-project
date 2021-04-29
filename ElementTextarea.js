export default class ElementTextarea{
    constructor(cl, pl, data){
        this.elements = {
            placeholder: pl,
            defaultClass: cl,
        };
        this.render = () => {
            const {placeholder, defaultClass} = this.elements;
            this.textarea = document.createElement('textarea');
            this.textarea.placeholder = `${placeholder}`;
            this.textarea.className = `${defaultClass}`;
            if (data) {
                this.textarea.dataset.value = `${data}`;
            };
            return this.textarea;
        };
    };
};
