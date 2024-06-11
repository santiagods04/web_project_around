const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];
const itemElements = document.querySelector(".elements");
const template = document.querySelector(".template-card");
const popupImg = document.querySelector(".popup-bigcard");
const btnCloseImg = document.querySelector(".popup-bigcard__icon");

class Card {
  constructor(name, link){
    this.name = name;
    this.link = link;
    this.likes = 0;
    this.card = this.generateCard();
    this.likeButton = this.card.querySelector(".elements__icon-like");
  }

  generateCard(){
    return template.cloneNode(true).content.querySelector(".elements__target");
  }

  handleLike(){
    this.likeButton.classList.add(".elements__icon-like_active");
  }

  deleteCard(){
    this.card.remove();
  }
}

initialCards.forEach((element) => {
  const initialCard = new Card(element.name, element.link);
  console.log(initialCard);
})