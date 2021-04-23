import FormInput from "./FormInput.js";

export default class VisitTherapist{
    constructor(){
        const formInput = new FormInput();

        this.elements = {
            parent: document.querySelector('.visit-content__wrapper'),
            age: formInput.render('number', 'Возраст', `form-create-user__age`)
        }
    }
    async render(){
        const {parent, age} = this.elements;
        parent.append(age)
    }
}
