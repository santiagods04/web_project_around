export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
  }

  open(){
    this._popup.classList.add("popup__show");
  }

  close(){
    this._popup.classList.remove("popup__show");
  }

  closeEsc(evt){
    if (evt.key == "Escape") {
      this.close();
    }
  }

  closeOutside(evt){
    if (evt.target.id == "popupU") {
      this.close();
    }
  }

  setEventListeners(){

  }

}