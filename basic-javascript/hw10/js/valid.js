class PasswordControl {
  constructor(target, icon) {
    this.classEyeOpen = 'fa-eye';
    this.classEyeClosed = 'fa-eye-slash';
    this._pwdVisible = false;
    this.target = document.querySelector(target)
    this.icon = document.querySelector(icon);
    this.icon.onclick = () => {
      this.pwdVisible = !this._pwdVisible;
    }
    this.pwd = this.target.value;
  }
  set pwdVisible(y) {
    this._pwdVisible = y;
    this.refresh();
  }
  toString() {
    this.pwd = this.target.value;
    return this.pwd;
  }
  refresh() {
    this.pwd = this.target.value;
    if (this._pwdVisible === true) {
      this.target.type = "text";
      this.icon.classList.remove(this.classEyeOpen);
      this.icon.classList.add(this.classEyeClosed);
    } else {
      this.target.type = "password";
      this.icon.classList.remove(this.classEyeClosed);
      this.icon.classList.add(this.classEyeOpen);
    }
  }
}

const field1 = new PasswordControl('#field1', '#field1ico');
const field2 = new PasswordControl('#field2', '#field2ico');

function checkPassword (e) {
  e.preventDefault();
  errMsg.innerHTML = '';
  if (String(field1) === String(field2) && String(field1) !== '') {
    alert('You are welcome');
  } else {
    errMsg.innerHTML = 'Нужно ввести одинаковые, не пустые значения';
  }
}