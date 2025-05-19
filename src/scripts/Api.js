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
    return fetch(this._url,{
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al cargar el usuario:', err));
  }

  getInitialCards(){
    return fetch(this._url,{
      headers: {
        authorization: this._token, 'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .catch(err => console.log('Error al cargar tarjetas:', err));
  }
}