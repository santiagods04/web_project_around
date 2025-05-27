export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getInfoUser(){
    return fetch(`${this._url}/users/me`,{
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al cargar el usuario:', err));
  }

  getInitialCards(){
    return fetch(`${this._url}/cards/`,{
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al cargar tarjetas:', err));
  }

  updateUserInfo({name, job}){
    return fetch(`${this._url}/users/me`,{
      method: 'PATCH',
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        name: name,
        about: job})
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al actualizar usuario:', err));
  }

  newCard({name, link}){
    return fetch(`${this._url}/cards/`,{
      method: 'POST',
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al actualizar usuario:', err));
  }

  handleLikeCard(cardId, isLiked){
    return fetch(`${this._url}/cards/${cardId}/likes`,{
      method: isLiked ? "DELETE" : "PUT",
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al gestionar like:', err));
  }

  handleDeleteCard(cardId){
    return fetch(`${this._url}/cards/${cardId}`,{
      method: 'DELETE',
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al eliminar tarjeta:', err));
  }
}