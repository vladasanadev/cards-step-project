import FormInput from "./FormInput.js";

export default class VisitDentist{
    constructor(){
        const formInput = new FormInput();

        this.elements = {
            parent: document.querySelector('.visit-content__wrapper'),
            date: formInput.render('date', 'Дата последнего посещения', `form-create-user__date`)
        }
    }
    async render(){
        const {parent, date} = this.elements;
        parent.append(date)
    }
}
