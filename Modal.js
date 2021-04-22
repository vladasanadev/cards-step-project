import Form from "./Form.js";

class Modal {
    constructor() {
        this.elements = {
            parent: document.querySelector('body'),
            self: document.createElement('div'),
            select: document.createElement('select'),
            makeChoice: document.createElement('option'),
            cardiologist: document.createElement('option'),
            dentist: document.createElement('option'),
            therapist: document.createElement('option')
        }
    }

    elementCreater() {
        const {self, select, makeChoice, cardiologist, dentist, therapist} = this.elements;
        self.classList.add(`select-wrapper`)
        select.classList.add(`choice-doctor__list`)
        cardiologist.classList.add(`cardiologist-option`)
        dentist.classList.add(`dentist-option`)
        therapist.classList.add(`therapist-option`)

        cardiologist.textContent = 'Кардиолог'
        dentist.textContent = 'Стоматолог'
        therapist.textContent = 'Терапевт'
        makeChoice.textContent = 'Make a choice!'
    }

    async render() {
        const {parent, self, select, makeChoice, cardiologist, dentist, therapist} = this.elements;
        this.elementCreater()

        select.addEventListener('change', (e) => {
            const form = new Form(e.target.value, self, this.token)
            form.render()
        })

        select.append(makeChoice, cardiologist, dentist, therapist)
        self.append(select)
        parent.append(self)
    } 
}

const modul = new Modal();

modul.render();