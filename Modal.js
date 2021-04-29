import ElementForm from "./ElementForm.js";

export default class Modal{
  constructor(){
      this.createCardCreaterForm = () => {
        this.self = document.createElement('div')
        this.self.className = `modal-wrapper`
        new ElementForm(this.self, 'form-create-user').formCreateCard();
        return document.body.append(this.self);
      } 
    }
}
