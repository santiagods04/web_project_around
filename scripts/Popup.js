export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._btnClose = this._popup.querySelector(".popup__icon");
  }

  open(){
    this._popup.classList.add("popup__show");
    document.addEventListener("keydown", (evt) => {
      this.closeEsc(evt);
    });
  }

  close(){
    this._popup.classList.remove("popup__show");
  }

  closeEsc(evt){
    if (evt.key == "Escape") {
      this.close();
    }
  }

  setEventListeners(){
    this._btnClose.addEventListener("click", () => {
      this.close();
    })

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.id == this._popup.id) {
        this.close();
      }
    })
  }
}