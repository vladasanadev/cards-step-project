export default class ElementBtn{
    constructor(t, c, text, data){
        this.elements = {
            type: t,
            defaultClass : c,
            textContent: text,
        };
        this.render = () => {
            const {type, defaultClass, textContent} = this.elements;
            this.btn = document.createElement('button');
            this.btn.type = `${type}`;
            this.btn.className = `${defaultClass}`;
            this.btn.textContent = `${textContent}`;
            if (data) {
                this.btn.dataset.value = `${data}`;
            };
            return this.btn;
        };
    };
};
