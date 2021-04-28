import ElementInput from "./ElementInput.js";
import ElementSelect from "./ElementSelect.js";
import ElementTextarea from "./ElementTextarea.js";
import ElementBtn from "./ElementBtn.js";

export default class ElementForm{
    constructor(parent, c, data){
        this.elements = {
            parent: parent,
            defaultClass: c,
        };
        this.elementsForCrateCard = {
            title: document.createElement('h3'),
            selectDoctor: new ElementSelect([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Кардиолог'},{cl: 'dentist-option', text: 'Стоматолог'},{cl: 'therapist-option', text: 'Терапевт'}], 'select doctor').render(),
            inputPurpose: new ElementInput('text', 'Цель визита', `form-create-user purpose`).render(),
            textareaShortInfo: new ElementTextarea(`form-create-user shortinfo`, 'Краткое описание визита').render(),
            selectOrder: new ElementSelect([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Обычная'},{cl: 'dentist-option', text: 'Приоритетная'},{cl: 'therapist-option', text: 'Неотложная'}], 'select order').render(),
            InputFIO: new ElementInput('text', 'ФИО', `form-create-user fio`).render(),
            createCardBtn: new ElementBtn(`sumbit`, `form-create-user__btn`, `Создать визит`, 'data').render(),
        }
        this.elementsForDoctors = {
            inputPressure:  new ElementInput('text', 'Давление', `form-cardiologist pressure`).render(),
            inputBmi: new ElementInput('text', 'Индекс массы тела', `form-cardiologist bmi`).render(),
            textareaInfo: new ElementTextarea(`form-cardiologist pastDiseases`, 'Перенесенные заболевания сердечно-сосудистой системы').render(),
            inputAge: new ElementInput('number', 'Возраст', `form-cardiologist age`).render(),
            inputDate:  new ElementInput('date', 'Дата последнего посещения', `form-create-user date`).render(),
        }
        this.selectChange = (e) => {
            const {parent, defaultClass} = this.elements;
            const {title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn} = this.elementsForCrateCard;
            const {inputPressure, inputBmi, textareaInfo, inputAge, inputDate} = this.elementsForDoctors;
            document.querySelector(`.${defaultClass}`)?document.querySelector(`.${defaultClass}`).remove():true;
            switch (e.target.value) {
                case 'Кардиолог': {
                    let form = document.createElement('form');
                    form.className = `${defaultClass}`;
                    form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, inputPressure, inputBmi, textareaInfo, inputAge, createCardBtn);
                    form.addEventListener('submit', e => {this.formCreateCardSubmit(e)})
                    parent.append(form);
                    break;
                };
                case 'Стоматолог': {
                    let form = document.createElement('form');
                    form.className = `${defaultClass}`;
                    form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, inputDate, createCardBtn);
                    form.addEventListener('submit', e => {this.formCreateCardSubmit(e)})
                    parent.append(form);
                    break;
                };
                case 'Терапевт': {
                    let form = document.createElement('form');
                    form.className = `${defaultClass}`;
                    form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, inputAge, createCardBtn);
                    form.addEventListener('submit', e => {this.formCreateCardSubmit(e)})
                    parent.append(form);
                    break;
                };
                default: {
                    let form = document.createElement('form');
                    form.className = `${defaultClass}`;
                    form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn);
                    form.addEventListener('submit', e => {this.formCreateCardSubmit(e)})
                    parent.append(form);
                    break;
                };
            };
        };
        this.createUserElements = (e) => {
            let objUser = {};
            for (let i = 0; i < e.target.length - 1; i++){
                let prop = e.target[i].classList[1]
                objUser[prop] = e.target[i].value
            }
            return objUser
          }
        
        this.formCreateCardSubmit = (e) => {
            e.preventDefault()
            fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(this.createUserElements(e))
            })
            .then(res => res.json())
            .then(response => console.log(response))
        }
        this.formCreateCard = () => {
            const {parent, defaultClass} = this.elements;
            const {title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn} = this.elementsForCrateCard;
            let form = document.createElement('form');
            title.textContent = `Create User Card`
            form.className = `${defaultClass}`;
            form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn);
            selectDoctor.addEventListener('change', e => this.selectChange(e));
            form.addEventListener('submit', e => {this.formCreateCardSubmit(e)})
            parent.append(form);
        };
        this.render = () => {
            const {parent, defaultClass} = this.elements;
            let form = document.createElement('form');
            form.className = `${defaultClass}`;
            if (data) {
                btn.dataset.value = `${data}`;
            };
            parent.append(form);
            return parent;
        };
    };
};

// const elementForm = new ElementForm('body', 'form-class').render();
// new ElementForm('body', 'form-class').formCreateCard();