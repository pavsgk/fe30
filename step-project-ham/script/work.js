class CardFilter {
  constructor(selectors, field, arr, activeClass = 'active') {
    this.selectors = document.querySelector(selectors);
    this.field = document.querySelector(field);
    this.activeClass = activeClass;
    this.arr = arr;
    this._capacity = 36;
    this._cat = '';
    this.start();
  }

  start() {
    this.redrawOpts();
    this.showCards();
    this.selectors.addEventListener('click', event => {
      if (event.target.tagName !== 'LI') return;
      this.cat = event.target.innerText;
    });
  }

  redrawOpts() {
    this.options = new Set(['All', ...this.arr.map(e => e.cat)]);
    this.selectors.innerHTML = Array.from(this.options).map(e => `
      <li class="work-filter">${e}</li>
    `).join('');
    const def = this.selectors.children[0];
    def.classList.add(this.activeClass);
    this.cat = def.innerText;
  }

  addNewOpt(cat) {
    this.options.add(cat);
    this.selectors.insertAdjacentHTML('beforeend', `<li class="work-filter">${cat}</li>`);
  }

  showCards() {
    const result = this.arr.filter(e => {
      if (!this.options.has(e.cat)) {
        this.addNewOpt(e.cat);
      }
      if (this.cat === 'All') return true;
      return e.cat === this.cat;
    });
    this.field.innerHTML = result.map(e => `
        <div class="work-card">
          <img src='${e.src}'>
          <div class="work-card-hov">
            <div class="work-card-controls">
              <a class="work-card-link" href="#/">${chainSvg}</a>
              <a class="work-card-link" href="#/">${stopSvg}</a>
            </div>
            <h4 class="work-card-title">${lorem()}</h4>
            <span class="work-card-category">${e.cat}</span>   
          </div>
        </div>
    `).slice(0, this.capacity).join('');

  }

  set capacity(x) {
    if (!isNaN(x) && x !== this._capacity && x >= 0) {
      this._capacity = x;
      this.showCards();
    }
  }

  get capacity() {
    return this._capacity;
  }

  set cat(x) {
    if (~this.options.has(x) && x !== this._cat) {
      this._cat = x;
      try {
        fadeIO(this.field, this.showCards.bind(this));
      } catch {
        this.showCards();
      }
      Array.from(this.selectors.children).forEach((e) => {
        if (e.innerText === this.cat) {
          e.classList.add(this.activeClass);
        } else {
          e.classList.remove(this.activeClass);
        }
      });
    }
  }

  get cat() {
    return this._cat;
  }
}