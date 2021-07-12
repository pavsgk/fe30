class KeyLogger {
  constructor (elms, activeClass) {
    this.elms = Array.from(document.querySelectorAll(elms));
    this.activeClass = activeClass;
    this._key = '';
    this.elms.forEach(e => e.onkeydown = k => k.keyCode === 13 ? k.preventDefault() : false);
  }
  set key(x) {
    if(x.length > 5 || x.length === 0) return;
    this._key = x.toLowerCase();
    this.elms.forEach( e => {
      if (e.innerText.toLowerCase() === this._key) {
        e.classList.add(this.activeClass);
      } else {
        e.classList.remove(this.activeClass);
      }
    });
  }
}

const keyLogger = new KeyLogger('.btn', 'blue');