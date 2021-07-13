class Gallery {
  constructor(parent, timeout = 3000, stopwatch) {
    this.elms = Array.from(parent.children);
    this._current = 0;
    this.len = this.elms.length;
    this.timers = [];
    this.timeout = timeout;
    this._showtime = timeout;
    this.stopwatch = stopwatch;
    this.render();
    this.run();
  }
  get prev() {
    if (this.current === 0) return this.len - 1;
    return this.current - 1;
  }
  get next() {
    if (this.current >= this.elms.length - 1) return 0;
    return this.current + 1;
  }
  get current() {
    return this._current;
  }
  set showtime(x) {
    this._showtime = x;
    const ms = String(this.showtime).length > 3 ? String(this.showtime).slice(1) : this.showtime;
    this.stopwatch.innerText = `${Math.floor(this.showtime / 1000)}s. ${ms}ms.`;
  }
  get showtime() {
    return this._showtime;
  }

  set current(x) {
    this._current = x >= this.elms.length ? 0 : x;
    this.showtime = this.timeout;
    this.fadeOut(this.elms[this.prev]).then(this.fadeIn.bind(this));
  }
  fadeOut(elm) {
    if (!elm) elm = this.elms[this.current];
    return new Promise( resolve => {
      elm.classList.remove('fadein');
      elm.classList.add('fadeout');
      setTimeout( () => {
        elm.style.display = 'none';
        return resolve()
      }, 500)
    })
  }
  fadeIn(elm) {
    if (!elm) elm = this.elms[this.current];
    return new Promise( resolve => {
      elm.classList.remove('fadeout');
      elm.classList.add('fadein');
      elm.style.display = 'block';
      setTimeout( () => {
        return resolve()
      }, 500)
    })
  }
  render() {
    this.elms.forEach( (e, ind) => {
      if (ind !== this.current) {
        e.style.display = 'none';
      } else {
        e.style.display = 'block';
      }
    })
  }
  run() {
    this.isRunning = true;
    this.timers.forEach( t => clearInterval(t));
    this.timers = [];
    this.render();
    this.timers.push(setInterval( () => {
      this.current = this.current + 1;
    }, this.timeout))
    this.timers.push(setInterval( () => {
      this.showtime -= 10;
    }, 10))
  }
  stop() {
    this.isRunning = false;
    this.timers.forEach( t => clearInterval(t));
    this.timers = [];
    this.showtime = this.timeout;
  }
}

const gallery = new Gallery(document.querySelector('.images-wrapper'), 3000, document.querySelector('#tmr'));