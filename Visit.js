import FormInput from "./FormInput.js";
import FormSelect from "./FormSelect.js";
import FormTextarea from "./FormTextarea.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";


export default class Visit{
    constructor(){
        const formInput = new FormInput();
        const formSelect = new FormSelect();
        const formTextarea = new FormTextarea();

        this.elements = {
            self: document.createElement('div'),
            title: document.createElement('h3'),
            selectDoctor: formSelect.render([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Кардиолог'},{cl: 'dentist-option', text: 'Стоматолог'},{cl: 'therapist-option', text: 'Терапевт'}]),
            inputPurpose: formInput.render('text', 'Цель визита', `form-create-user purpose`),
            textarea: formTextarea.render(`form-create-user shortinfo`, 'Краткое описание визита'),
            selectOrder: formSelect.render([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Обычная'},{cl: 'dentist-option', text: 'Приоритетная'},{cl: 'therapist-option', text: 'Неотложная'}]),
            inputFio: formInput.render('text', 'ФИО', `form-create-user fio`),
            btn: document.createElement('button'),
        }
    }

    createElements() {
        const {self, title, selectDoctor, inputPurpose, textarea, selectOrder, inputFio, btn} = this.elements
        self.classList.add(`visit-content__wrapper`)
        title.classList.add(`form-create-user__title`)
        selectDoctor.className = `choice-doctor doctor`
        selectOrder.className = `select-urgency order`
        
        title.textContent = 'Создать карту визита'

        btn.classList.add(`form-create-user__btn`)
        btn.type =`sumbit`
        btn.textContent = 'Создать визит'
    }

    heandleChange(e) {
        if (document.querySelector('.form-cardiologist')) {
            console.log(document.querySelector('.form-cardiologist'))
            console.dir(document.querySelector('.form-cardiologist'))
        }

        switch (e.target.value) {
            case 'Кардиолог': {
                const visitCardiologist = new VisitCardiologist();
                visitCardiologist.render()
                break
            }
            case 'Стоматолог': {
                const visitDentist = new VisitDentist();
                visitDentist.render()
                break
            }
            case 'Терапевт': {
                const visitTherapist = new VisitTherapist();
                visitTherapist.render()
                break
            }
        }
    }

    render(){
        const {self, title, selectDoctor, inputPurpose, textarea, selectOrder, inputFio, btn} = this.elements
        this.createElements()
        selectDoctor.addEventListener('change', e => this.heandleChange(e))
        self.append(title, selectDoctor, inputPurpose, textarea, selectOrder, inputFio, btn)
        return self
    }
}
