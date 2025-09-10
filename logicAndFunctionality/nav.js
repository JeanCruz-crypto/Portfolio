const body = document.body;
const topContainerInfo = document.querySelector(".topContainerInfo");
const listContentAbout = document.querySelector(".listContentAbout");

const automaticLi = (info) => {
  for(let counter= 0; counter < info.length; counter++){
    let turnInArray = info[counter];
    let liContent = document.createElement("li");
    let linkInfo1 = document.createElement("a");

    linkInfo1.innerText = turnInArray.info1; 

    liContent.appendChild(linkInfo1);
    body.appendChild(liContent);
  }
};

const links = [{ info1: "About" }, { info1: "Projects" }, { info1: "Contacts" }];

automaticLi(links);
