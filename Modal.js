import Form from "./Form.js";

export default class Modal{
  constructor(){
    const form = new Form();
    this.elements = {
      btn: document.createElement('button'),
      form: form.render()
    }
  }
  render(){
    const {btn, form} = this.elements
    btn.textContent = 'Create user'
    btn.addEventListener('click', () => {
      document.querySelector('body').append(form)
    })
    document.querySelector('body').append(btn)
  }
}

const modal = new Modal()
modal.render()
