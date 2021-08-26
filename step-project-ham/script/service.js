class TabSelector {
  constructor(tabsEl, contentEl, arr, activeClass = 'active') {
    this.tabsEl = document.querySelector(tabsEl);
    this.contentEl = document.querySelector(contentEl);
    this.arr = arr;
    this.activeClass = activeClass;
    this._current = 0;
    this.init();
  }

  get tabName() {
    return this.arr[this._current].tab;
  }

  set tabName(x) {
    const tabIndex = this.arr.findIndex(e => e.tab === x);
    if (tabIndex === this._current) return;
    if (tabIndex > -1) this._current = tabIndex;
    try {
      fadeIO(this.contentEl, this.render.bind(this));
    } catch {
      this.render();
    }
  }

  init() {
    this.tabsEl.innerHTML = this.arr.map(e => `<li class="service-selector">${e.tab}</li>`).join('');
    this.contentEl.innerHTML = this.arr.map(e => `
      <div class="service-posts-item">
        <img src="${e.src}" alt="post image" class="service-img">
        <p class="service-text">${e.text}</p>
      </div>
    `).join('');
    this.tabsEl.addEventListener('click', evt => {
      if (evt.target.tagName === 'LI') {
        this.tabName = evt.target.innerHTML;
      }
    })
    this.render();
  }

  render() {
    const posts = this.contentEl.children
    Array.from(this.tabsEl.children).forEach((e, i) => {
      if (e.innerHTML === this.tabName) {
        e.classList.add(this.activeClass);
        posts[i].style.display = '';
      } else {
        e.classList.remove(this.activeClass);
        posts[i].style.display = 'none';
      }
    })
  }
}