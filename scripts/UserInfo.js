export default class UserInfo {
  constructor({name, job}) {
    this._nameUser = document.querySelector(name);
    this._jobUser = document.querySelector(job);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    };
  }

  setUserInfo({ name, job }) {
    this._nameUser.textContent = name;
    this._jobUser.textContent = job;
  }
}