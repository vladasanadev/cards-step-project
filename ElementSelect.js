export default class ElementSelect{
    constructor(arr, selectClass, data, dataSelect){
        this.arr = arr;
        this.optionAppend = (element, select) => {
            let option = document.createElement('option');
                option.className = element.cl;
                option.textContent = `${element.text}`;
                if (data) {
                    btn.dataset.value = `${data}`;
                };
                select.append(option);
        };
        this.render = () => {
            let select = document.createElement('select');
            select.className = `${selectClass}`
            if (dataSelect) {
                btn.dataset.value = `${dataSelect}`;
            };
            this.arr.forEach(element => {this.optionAppend(element, select, data)});
            return select;
        };
    };
};

// const elementSelect = new ElementSelect([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Обычная'},{cl: 'dentist-option', text: 'Приоритетная'},{cl: 'therapist-option', text: 'Неотложная'}]).render()
// new ElementSelect([{cl: 'make-ch', text: 'Сделайте вибор'}, {cl: 'cardiologist-option', text: 'Обычная'},{cl: 'dentist-option', text: 'Приоритетная'},{cl: 'therapist-option', text: 'Неотложная'}]).render()