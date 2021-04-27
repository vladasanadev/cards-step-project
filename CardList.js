import API from "./API.js";

export default class CardList {
    getAllCards(){
        if(localStorage.getItem("token")){
            console.log(API.getAllCards());
        }
    }
    render(parent, ulClassName, liClassName, allCards) {
        parent = document.querySelector(parent);
        allCards.forEach(element => {
            let ul = document.createElement('ul');
            ul.className = `${ulClassName}`;
            for (let prop in element) {
                let li = document.createElement('li');
                li.className = `${liClassName}`;
                li.textContent = element[prop];
                ul.append(li);
                parent.append(ul);
            }
        });
    }
}
let res = new CardList();
console.log(res.getAllCards());
res.render("body", "list", "list_elem", API.getAllCards);

// my token 0e17788a-b880-40af-9aeb-7704e484d022