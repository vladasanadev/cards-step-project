import ElementForm from "./ElementForm.js";

export default class Modal{
  constructor(){
    this.closeForm = (e, self) => {
      e.preventDefault()
      if (e.target.className === `modal-wrapper`) self.remove()
    }
      this.createCardCreaterForm = () => {
        this.self = document.createElement('div')
        this.self.className = `modal-wrapper`
        self.addEventListener('click', e => this.closeForm(e, this.self))
        new ElementForm(this.self, 'form-create-user').formCreateCard();
        return document.body.append(this.self);
      } 
    }
}

