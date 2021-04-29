import API from "./API.js";

export default class CardList {
    constructor() {
        this.parent = document.createElement("div");
    }
    clearCards(){
        document.body.querySelectorAll(".card").forEach( card => {
            card.remove();
        })
    }
    renderCards(allCards){
        if(allCards.length){
            allCards.forEach(element => {
                let card = document.createElement("div");
                card.classList.add("card");

                for(let prop in element){
                    if(prop !== "id"){
                        let cardsElement = document.createElement("p");
                        cardsElement.textContent = element[prop];
                        card.append(cardsElement);
                        if(prop !== "doctor" && prop !== "fullName" && prop !== "id"){
                            cardsElement.classList.add("hidden");
                        }
                    }
                }
                card.insertAdjacentHTML("beforeend", "<button class='btn-show-more'>Show More</button>");
                this.parent.addEventListener("click", e => {
                    if(e.target.classList.contains("btn-show-more")){
                        for(let i = 0; i < 8; i++){
                            try{
                                e.target.parentElement.children[i].classList.remove("hidden");
                            }catch (e){
                                // TypeError
                            }
                        }
                    }
                });
                this.parent.append(card);
            });
        }else{
            alert("No items have been added");
        }
    }
    render() {
        this.parent.classList.add("cards-container");
        document.body.append(this.parent);
    }
}
// let cardList = new CardList();
// const cardsApi = await API.getAllCards();
// cardList.renderCards(cardsApi);
// cardList.render();
