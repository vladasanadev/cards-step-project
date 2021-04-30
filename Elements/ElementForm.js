import ElementInput from "./ElementInput.js";
import ElementSelect from "./ElementSelect.js";
import ElementTextarea from "./ElementTextarea.js";
import ElementBtn from "./ElementBtn.js";
import API from "../API.js";

export default class ElementForm{
    constructor(parent, c, data){
        this.elements = {
            parent: parent,
            defaultClass: c,
        };
        this.elementsForCrateCard = {
            title: document.createElement('h3'),
            selectDoctor: new ElementSelect([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Кардиолог'},{cl: 'dentist-option', text: 'Стоматолог'},{cl: 'therapist-option', text: 'Терапевт'}], 'select' ,'doctor').render(),
            inputPurpose: new ElementInput('text', 'Цель визита', `form-create-user__input`, `purpose`, ``, true).render(),
            textareaShortInfo: new ElementTextarea(`form-create-user__textarea`,'Краткое описание визита', `shortinfo`).render(),
            selectOrder: new ElementSelect([{cl: 'cardiologist-option', text: 'Обычная'},{cl: 'dentist-option', text: 'Приоритетная'},{cl: 'therapist-option', text: 'Неотложная'}], 'select' , 'order').render(),
            InputFIO: new ElementInput('text', 'ФИО', `form-create-user__input`, `fio`, ``, true).render(),
            createCardBtn: new ElementBtn(`sumbit`, `form-create-user__btn`, `Создать визит`).render(),
        }
        this.elementsForDoctors = {
            inputPressure:  new ElementInput('text', 'Давление', `form-cardiologist`, `pressure`, ``, true).render(),
            inputBmi: new ElementInput('text', 'Индекс массы тела', `form-cardiologist`, `bmi`, ``, true).render(),
            textareaInfo: new ElementTextarea(`form-cardiologist`, 'Перенесенные заболевания сердечно-сосудистой системы', `pastDiseases`, ``, true).render(),
            inputAge: new ElementInput('number', 'Возраст', `form-cardiologist`, `age`, ``, true).render(),
            inputDate:  new ElementInput('date', 'Дата последнего посещения', `form-create-user__date`, `date`, ``, true).render(),
        }
        this.selectChange = (e) => {
            const {parent, defaultClass} = this.elements;
            const {title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn} = this.elementsForCrateCard;
            const {inputPressure, inputBmi, textareaInfo, inputAge, inputDate} = this.elementsForDoctors;
            document.querySelector(`.${defaultClass}`)?document.querySelector(`.${defaultClass}`).remove():true;
            this.form = document.createElement('form');
            this.form.addEventListener('submit', e => {this.formCreateCardSubmit(e)})
            switch (e.target.value) {
                case 'Кардиолог': {
                    this.form.className = `${defaultClass}`;
                    this.form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, inputPressure, inputBmi, textareaInfo, inputAge, inputDate, createCardBtn);
                    parent.append(this.form);
                    break;
                };
                case 'Стоматолог': {
                    this.form.className = `${defaultClass}`;
                    this.form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, inputDate, createCardBtn);
                    parent.append(this.form);
                    break;
                };
                case 'Терапевт': {
                    this.form.className = `${defaultClass}`;
                    this.form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, inputAge, inputDate, createCardBtn);
                    parent.append(this.form);
                    break;
                };
                default: {
                    this.form.className = `${defaultClass}`;
                    this.form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn);
                    parent.append(this.form);
                    break;
                };
            };
        };
        this.createUserElements = (e) => {
            this.objUser = {};
            for (let i = 0; i < e.target.length - 1; i++){
                let prop = e.target[i].dataset.value
                this.objUser[prop] = e.target[i].value
            }
            return this.objUser
          }
        
        this.formCreateCardSubmit = (e) => {
            e.preventDefault()
            parent.remove()
            fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(this.createUserElements(e))
            })
            .then(res => res.json())
            .then(response => console.log(response))
        }
        this.formCreateCard = () => {
            const {parent, defaultClass} = this.elements;
            const {title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn} = this.elementsForCrateCard;
            title.className = `form-title`
            title.textContent = `Create User Card`
            this.form = document.createElement('form');
            this.form.className = `${defaultClass}`;
            this.form.append(title, selectDoctor, inputPurpose, textareaShortInfo, selectOrder, InputFIO, createCardBtn);
            selectDoctor.addEventListener('change', e => this.selectChange(e));
            this.form.addEventListener('submit', e => {this.formCreateCardSubmit(e)})
            parent.append(this.form);
        };
        this.elementsForLogin = {
            title: document.createElement('h3'),
            inputEmail: new ElementInput('text', 'Email', `login__email`, ``, ``, true).render(),
            inputPwd: new ElementInput('text', 'Password', `login__password`, ``, ``, true).render(),
            btnLogin: new ElementBtn(`submit`, `login__btn`, `LOGIN`).render(),
            inputToggle: new ElementInput('checkbox', '', `toggle-password`, ``, `toggle-password`, false).render()
        }
        this.toggleClicked = () => {
            const {inputPwd, inputToggle} = this.elementsForLogin
            inputPwd.classList.toggle('visible');
            console.log(inputToggle.checked)
            if (inputToggle.checked) {
                inputPwd.type = "text";
            } else {
                inputPwd.type = "password";
            }
        }
        this.handleLogin = (e) => {
            e.preventDefault()
            API.login({email: e.target[0].value, password: e.target[1].value})
            parent.remove()
        }
        this.formLogin = () => {
            const {parent, defaultClass} = this.elements;
            const {title, inputEmail, inputPwd, btnLogin, inputToggle} = this.elementsForLogin
            title.className = `login__instructions`;
            title.textContent = `Sign in`
            inputPwd.id = `password`;
            inputPwd.name = `password`;
            inputToggle.id = `toggle-password`;
            this.form = document.createElement('form');
            this.form.className = `${defaultClass}`;
            this.form.append(title, inputEmail, inputPwd, btnLogin, inputToggle)
            inputToggle.addEventListener("click", () => this.toggleClicked());
            this.form.addEventListener("submit", (e) => this.handleLogin(e))
            parent.append(this.form)
        }
        this.render = () => {
            const {parent, defaultClass} = this.elements;
            this.form = document.createElement('form');
            this.form.className = `${defaultClass}`;
            parent.append(this.form);
            return parent;
        };
    };
};
