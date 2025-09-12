const topContainerInfo = document.querySelector(".topContainerInfo");
const listContentAbout = document.querySelector(".listContentAbout");

const automaticLi = (info) => {
  for(let counter= 0; counter < info.length; counter++){
    let turnInArray = info[counter];
    let liContent = document.createElement("li");
    let linkInfo1 = document.createElement("a");

    linkInfo1.innerText = turnInArray.info1;
    linkInfo1.href = turnInArray.link;

    liContent.appendChild(linkInfo1);
    listContentAbout.appendChild(liContent);
  }
};

const links = [{ info1: "About", link: "asasdda" }, { info1: "Projects", link: "dsadasdfssf" }, { info1: "Contacts", link: "adsaddfaadf" }];

automaticLi(links);

//https://www.figma.com/design/0J3o6xle1rlOyrpsPwaAYw/Personal-Portfolio-Website-Template--Community-?node-id=7-191&t=kmMvOWLdVIL4aTE8-0