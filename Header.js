import LoginForm from "./LoginForm.js";
import Modal from "./Modal.js";
import FilterForm from "./FilterForm.js";

export default class Header {
    constructor() {
        this.elements = {
            parent: document.querySelector("body"),
            header: document.createElement("header"),
            imgLogo: document.createElement("img"),
            btnLogin: document.createElement("button"),
            btnCreateVisit: document.createElement("button")
        }
    }

    render() {
        const { parent, header, imgLogo, btnCreateVisit, btnLogin } = this.elements;
        header.classList.add("header");

        imgLogo.setAttribute("src", "img/logo.png");
        imgLogo.classList.add("header__logo");

        btnLogin.classList.add("header__button-login");
        btnLogin.textContent = "Login";
        btnLogin.addEventListener("click", e => {
            const login = new LoginForm(document.querySelector('.container'));
            login.render();
        });

        btnCreateVisit.classList.add("header__button-create-elem");
        btnCreateVisit.textContent = "Create Visit";
        btnCreateVisit.addEventListener("click", e => {
            Modal.сardCreateForm()
        });
        const filterForm = new FilterForm(parent);
        sessionStorage.getItem("token") ? header.append(imgLogo, btnCreateVisit) : header.append(imgLogo, btnLogin);
        parent.prepend(header);
        if (sessionStorage.getItem("token"))
        {
            filterForm.render();
        }
    }
}
