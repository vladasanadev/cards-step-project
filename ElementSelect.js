export default class ElementSelect{
    constructor(arr){
        this.arr = arr;
        this.optionAppend = (element, select) => {
            let option = document.createElement('option');
                option.className = element.cl;
                option.textContent = `${element.text}`;
                select.append(option);
        };
        this.render = () => {
            let select = document.createElement('select');
            this.arr.forEach(element => {this.optionAppend(element, select)});
            return select;
        };
    };
};

// const elementSelect = new ElementSelect([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Обычная'},{cl: 'dentist-option', text: 'Приоритетная'},{cl: 'therapist-option', text: 'Неотложная'}]).render()
// new ElementSelect([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Обычная'},{cl: 'dentist-option', text: 'Приоритетная'},{cl: 'therapist-option', text: 'Неотложная'}]).render()