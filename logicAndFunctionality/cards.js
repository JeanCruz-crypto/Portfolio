const projectCards = document.querySelector(".projectCards");
const cardsContainer = document.querySelector(".cardsContainer");

const createCard = () => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  li.classList.add("card");

  cardsContainer.appendChild(li);
};

createCard();
