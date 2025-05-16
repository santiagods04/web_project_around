export default class UserInfo {
  constructor({name, job, avatar}) {
    this._nameUser = document.querySelector(name);
    this._jobUser = document.querySelector(job);
    this._avatarUser = document.querySelector(avatar);
  }

  showActualInfo() {
    return {
      name: this._nameUser.textContent,
      job: this._jobUser.textContent,
      avatar: this._avatarUser.src
    };
  }

  setUserInfo({ name, job, avatar}) {
    this._nameUser.textContent = name;
    this._jobUser.textContent = job;
    this._avatarUser.src = avatar;
  }
}