class Calculator {
  constructor(field, score) {
    this.mem = 0;
    this.disp = '';
    this.op = '';
    this.iter = 0;
    this.next = '';
    this.score = document.querySelector(disp);
    this.field = document.querySelector(field);
    this.keys = document.querySelectorAll(`${field} input[value]`);
    this.field.onclick = (e) => {
      if (e.target.value) this.handle(e.target.value);
    }
  }
  handle(k) {
    // this.render();
  }
  render() {
    this.score.value = this.val;
  }
  get val() {
    return Number(this.disp);
  }
  set val(x) {
    this.disp = Number(x);
  }
}

const calc = new Calculator('.keys', '.result');