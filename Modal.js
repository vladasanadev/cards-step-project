import ElementForm from "./ElementForm.js";

export default class Modal{
  constructor(){
      this.elements = {
        self: document.createElement('div')
      }
      this.createCardCreaterForm = () => {
        const {self} = this.elements
        self.className = `form-wrapper`
        new ElementForm(self, 'form-create-user').formCreateCard();
        return document.body.append(self)
      } 
    }
}

new Modal().createCardCreaterForm();
