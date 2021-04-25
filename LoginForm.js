
import API from "./API.js";
export default class LoginForm {

    constructor(parentElement) {
        this.parent = parentElement,
            this.ELEMENTS = {
                form: document.createElement("form"),
                userEmail: document.createElement("input"),
                password: document.createElement("input"),
                togglePassword: document.createElement("input"),
                visibility: document.createElement("label"),
                loginBtn: document.createElement("button"),
                instruction: document.createElement("p")

            }
    }

    toggleClicked(){
        const {password, togglePassword} = this.ELEMENTS;
        password.classList.toggle('visible');
        console.log(togglePassword.checked)
        if (togglePassword.checked) {

            password.type = "text";
        } else {
            password.type = "password";
        }
    }



    async handleLogin(e) {
        e.preventDefault();
        const {form, userEmail, password, loginBtn,instruction} = this.ELEMENTS;
        // let user = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({email: userEmail.value, password: password.value})
        // })
        //     .then(response => response.text())
        //     .then(token => {
        //         console.log(token)
        //         this.token = token
        //         sessionStorage.setItem("token", JSON.stringify(token))
        //     })
        const token = await API.login({email: userEmail.value, password: password.value});
        API.saveToken(token)
        form.remove();
        window.location.reload()
        // let cardList = new CardList(token, parent);
        // cardList.render()
        // Vlada -- Initialize constructor 2. Remove LoginForm 3. Render
        // Andrew -- 1.Create class CardList 2.Create constructor(token,parent) 3. create render() function

    }

    render() {
        const {form, userEmail, password, loginBtn,instruction, togglePassword,visibility} = this.ELEMENTS;
        form.classList.add("login");
        userEmail.classList.add("login__email");
        password.classList.add("login__password");
        password.id = "password";
        password.name = "password";
        togglePassword.classList.add("toggle-password");
        togglePassword.id = "toggle-password";
        visibility.htmlFor = "toggle-password";
        visibility.innerHTML = "Show Password",
        loginBtn.classList.add("login__btn");
        instruction.classList.add("login__instructions");
        loginBtn.innerHTML = "LOGIN";
        instruction.innerText ="Sing in";

        password.setAttribute("type", "text");
        // password.setAttribute("value", "pswtext");
        togglePassword.setAttribute("type", "checkbox");

        userEmail.placeholder = 'Email';
        password.placeholder = 'Password';

        togglePassword.addEventListener("click", () => this.toggleClicked());
        loginBtn.addEventListener("click", (e) => this.handleLogin(e))

        form.append(instruction, userEmail, password, loginBtn, togglePassword,visibility);
        this.parent.append(form);
    }
}