import FormInput from "./FormInput.js";
import FormTextarea from "./FormTextarea.js";

export default class VisitCardiologist{
    constructor(){
        const formInput = new FormInput();
        const formTextarea = new FormTextarea();

        this.elements = {
            parent: document.querySelector('.visit-content__wrapper'),
            inputPressure: formInput.render('text', 'Давление', `form-create-user__pressure`),
            inputBmi: formInput.render('text', 'Индекс массы тела', `form-create-user__bmi`),
            textarea: formTextarea.render(`form-create-user__pastDiseases`, 'Перенесенные заболевания сердечно-сосудистой системы'),
            age: formInput.render('number', 'Возраст', `form-create-user__age`)
        }
    }
    render(){
        const {parent, inputPressure, inputBmi, textarea, age} = this.elements;
        parent.append(inputPressure, inputBmi, textarea, age)
    }
}
