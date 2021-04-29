import ElementForm from "./Elements/ElementForm.js";

export default class Modal{
  static async сardCreateForm() {
    this.self = document.createElement('div')
    this.self.className = 'modal-wrapper'
    self.addEventListener('click', e => this.closeForm(e, this.self))
    new ElementForm(this.self, 'form-create-user').formCreateCard();
    return document.body.append(this.self);
  } 
  
  static closeForm = (e, self) => {
      if (e.target.className === 'modal-wrapper') self.remove()
    
}
}

// Modal.сardCreaterForm()