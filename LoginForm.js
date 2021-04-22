class LoginForm {

    constructor(parentElement) {
        this.parent = parentElement,
            this.ELEMENTS = {
                form: document.createElement("form"),
                userEmail: document.createElement("input"),
                password: document.createElement("input"),
                loginBtn: document.createElement("button"),
                error: document.createElement("span")
            }
    }

    async handleLogin(e) {
        e.preventDefault();
        const {form, userEmail, password, loginBtn,error} = this.ELEMENTS;
        let user = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: userEmail.value, password: password.value})
        })
            .then(response => response.text())
            .then(token => {
                console.log(token)
                this.token = token
            })
            // let cardList = new CardList(token, parent);
        // cardList.render()
        // Vlada -- Initialize constructor 2. Remove LoginForm 3. Render
        // Andrew -- 1.Create class CardList 2.Create constructor(token,parent) 3. create render() function

    }

    render() {
        const {form, userEmail, password, loginBtn,error} = this.ELEMENTS;
        form.classList.add("login");
        userEmail.classList.add("login__email");
        password.classList.add("login__password");
        loginBtn.classList.add("login__btn");
        error.classList.add("login__error");
        loginBtn.innerHTML = "LOGIN";

        loginBtn.addEventListener("click", (e) => this.handleLogin(e))

        form.append(userEmail, password, loginBtn, error);
        this.parent.append(form);
    }
}