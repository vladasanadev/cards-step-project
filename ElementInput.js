export default class ElementInput{
    constructor(tp, ph, cl, data, label, required){
        this.elements = {
            type: tp,
            placeholder: ph,
            defaultClass: cl,
        };
        this.render = () => {
            const {type, placeholder, defaultClass} = this.elements;
            this.input = document.createElement('input');
            if(label){
                this.label = document.createElement('label');
                this.label.for = `${label}`;
                this.input.append(this.label);
            }
            this.input.type = type;
            this.input.placeholder = placeholder;
            this.input.className =`${defaultClass}`;
            if (data) {
                this.input.dataset.value = `${data}`;
            }
            if (required) {
                this.input.setAttribute('required', '')
            }          
            return this.input
        };
    };
};

