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

    createUserElements(e){
      let objUser = {};
      for (let i = 0; i < e.target.length - 1; i++){
          let prop = e.target[i].classList[1]
          objUser[prop] = e.target[i].value
      }
      return objUser
    }


    formSubmit(e) {
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

    heandleClick(e) {
      const {self} = this.elements
      if (e.target.className === 'form-wrapper')
      self.remove()
    }


    render() {
        const {self, form, formElements} = this.elements
        self.classList.add('form-wrapper')
        self.addEventListener('click', e => {this.heandleClick(e)})
        form.classList.add('form-create-user')
        form.addEventListener('submit', e => {this.formSubmit(e)})
        form.append(formElements)
        self.append(form)
        return self
    }
}
