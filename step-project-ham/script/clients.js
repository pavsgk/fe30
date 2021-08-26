class ClientsSay {
  constructor(name, prof, text, selectors, bigPics, smallPics, prev, next, db) {
    const qs = (el) => document.querySelector(el);
    this.name = qs(name);
    this.prof = qs(prof);
    this.text = qs(text);
    this.bigPics = qs(bigPics);
    this.smallPics = qs(smallPics);
    this.selectors = qs(selectors);
    this.prevButton = qs(prev);
    this.nextButton = qs(next);
    this.db = db;
    this.active = 0;
    this.init();
  }
  set active(x) {
    if (x === this._active) return;
    if (x > this.db.length - 1) {
      this._active = 0;
    } else if (x < 0) {
      this._active = this.db.length - 1;
    } else {
      this._active = x;
    }
    this.render();
  }
  get active() {
    return this._active;
  }
  render() {
    const [i, db] = [this.active, this.db];
    this.bigPics.style.transform = `translateX(${-150 * i}px)`

    Array.from(this.smallPics.children).forEach( (e, ind) => {
      if (ind === this.active) {
        e.classList.add('active');
      } else {
        e.classList.remove('active');
      }
    })
    try {
      fadeIO(this.name, () => this.name.innerText = db[i].name);
      fadeIO(this.prof, () => this.prof.innerText = db[i].prof);
      fadeIO(this.text, () => this.text.innerText = db[i].text);
    } catch {
      this.name.innerText = db[i].name;
      this.prof.innerText = db[i].prof;
      this.text.innerText = db[i].text;
    }
  }

  next() {
    this.active = this.active + 1;
  }

  prev() {
    this.active--;
  }

  init() {
    this.bigPics.innerHTML = this.db.map(e => `<li class="clients-bigpics-li">
      <img class="clients-bigpics-pic" src="${e.img}" alt="client face">
      </li>
    `).join('');
    this.bigPics.style.width = 160 * this.db.length + 'px';

    this.smallPics.innerHTML = this.db.map(e => `
      <img class="clients-smallpic" src="${e.img}" alt="client face">
    `).join('');

    Array.from(this.selectors.children).forEach((e, ind) => e.addEventListener('click', e => this.active = ind));

    this.nextButton.addEventListener('click', this.next.bind(this));
    this.prevButton.addEventListener('click', this.prev.bind(this));
    this.render();
  }
}