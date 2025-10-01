const projectCards = document.querySelector(".projectCards");
const cardsContainer = document.querySelector(".cardsContainer");

const createCardAutom = (content) => {
  for(let counter= 0; counter < content.length; counter++){
    let createCard = content[counter];
    const liCard = document.createElement("li");
    const h2Card = document.createElement("h2");
    const pCard = document.createElement("p");
    const imgCard = document.createElement("img");
    const textContainer = document.createElement("div");

    h2Card.innerText = createCard.subtitle;
    pCard.innerText = createCard.textContent;
    imgCard.src = createCard.sourceImg;
    imgCard.alt = createCard.imgDescription;

    textContainer.classList.add("textContainerCard");
    liCard.classList.add("card");
    imgCard.classList.add("imgCard");

    textContainer.append(h2Card, pCard);
    liCard.append(textContainer, imgCard);
    cardsContainer.appendChild(liCard);

    // if ((counter + 1) % 2 === 0) {
    //   liCard.style = "display: flex; flex-direction: row-reverse";
    //   imgCard.style = "border-radius: 25px 0 0 25px";
    // }
  }
};

const cardContent = 
[
  {subtitle: "test", textContent: "lets test how its working", sourceImg: "../assets/images/ProjectExample.jpg", imgDescription: "textAboutDescription"},
  {subtitle: "test", textContent: "lets test how its working", sourceImg: "../assets/images/ProjectExample.jpg", imgDescription: "textAboutDescription"},
  {subtitle: "test", textContent: "lets test how its working", sourceImg: "../assets/images/ProjectExample.jpg", imgDescription: "textAboutDescription"},
];

createCardAutom(cardContent);
