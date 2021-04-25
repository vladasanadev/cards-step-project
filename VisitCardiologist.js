import FormInput from "./FormInput.js";
import FormTextarea from "./FormTextarea.js";

export default class VisitCardiologist{
    constructor(){
        const formInput = new FormInput();
        const formTextarea = new FormTextarea();

        this.elements = {
            parent: document.querySelector('.visit-content__wrapper'),
            self: document.createElement('div'),
            inputPressure: formInput.render('text', 'Давление', `form-cardiologist pressure`),
            inputBmi: formInput.render('text', 'Индекс массы тела', `form-cardiologist bmi`),
            textarea: formTextarea.render(`form-cardiologist pastDiseases`, 'Перенесенные заболевания сердечно-сосудистой системы'),
            age: formInput.render('number', 'Возраст', `form-cardiologist age`)
        }
    }

    renderElements(arr){
        const {parent} = this.elements
        arr.forEach(element => {
            parent.lastChild.insertAdjacentElement('beforebegin', element)
        });
    }

    render(){
        const {inputPressure, inputBmi, textarea, age} = this.elements;
        this.renderElements([inputPressure, inputBmi, textarea, age])
    }
}
