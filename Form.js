import Visit from "./Visit.js";

export default class Form{
    constructor() {
        const visit = new Visit();
        this.elements = {
            self: document.createElement('div'),
            form: document.createElement('form'),
            formElements: visit.render(),
        }
    }
    render() {
        const {self, form, formElements} = this.elements
        self.classList.add('form-wrapper')
        form.classList.add('form-create-user')
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            fetch("https://ajax.test-danit.com/api/v2/cards", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              },
              body: JSON.stringify({
                title: `${purpose.value}`,
                description: `${shortInfo.value}`,
                doctor: `${this.value}`,
                order: `${select.value}`,
                fullName: `${indefic.value}`
              })
            })
            .then(res => res.json())
            .then(response => console.log(response))
        })
        form.append(formElements)
        self.append(form)
        return self
    }
}
