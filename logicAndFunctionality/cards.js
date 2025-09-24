const projectCards = document.querySelector(".projectCards");
const cardsContainer = document.querySelector(".cardsContainer");

const createCardAutom = (content) => {
  for(let counter= 0; counter < content.length; counter++){
    let createCard = content[counter];
    const liCard = document.createElement("li");
    const h2Card = document.createElement("h2");
    const pCard = document.createElement("p");
    const imgCard = document.createElement("img");

    h2Card.innerText = createCard.subtitle;
    pCard.innerText = createCard.textContent;
    imgCard.src = createCard.sourceImg;
    imgCard.alt = createCard.imgDescription;

    // li.classList.add("card");

    cardsContainer.appendChild(liCard);
    liCard.append(h2Card, pCard, imgCard);
  }
};

const cardContent = [{subtitle: "test", textContent: "lets test how its working", 
                    sourceImg: "../assets/images/ProjectExample.jpg", imgDescription: "textAboutDescription"}];

createCardAutom(cardContent);
