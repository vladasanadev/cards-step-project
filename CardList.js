import API from "./API.js";

export default class CardList {
    getAllCards(){
        if(localStorage.getItem("token")){
            console.log(this.getAllCards());
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
const res = new CardList();
res.render("body", "list", "list_elem", res.getAllCards);