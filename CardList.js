import API from "./API.js";

export default class CardList {
    clearCards(){
        document.body.querySelectorAll(".card").forEach( card => {
            card.remove();
        })
    }
    renderCards(allCards){
        if(allCards.length){

        }else{
            alert("No items have been added")
        }
    }
    render(allCards) {
        let parent = document.createElement("div");
        parent.classList.add("cards-container");
        allCards.forEach(element => {
            let card = document.createElement("div");
            card.classList.add("card");


            for(let prop in element){
               if(prop !== "id"){
                   let cardsElement = document.createElement("p");
                   cardsElement.textContent = element[prop];
                   card.append(cardsElement);
               }
            }


            parent.append(card);
            document.body.append(parent);
        });
    }
}
let cardList = new CardList();
const cardsApi = await API.getAllCards();
cardList.render(cardsApi);
cardList.clearCards();

// my token 0e17788a-b880-40af-9aeb-7704e484d022