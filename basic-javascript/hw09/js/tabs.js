class TabSelector {
  constructor(sel, cont, activeClass = 'active') {
    this.activeClass = activeClass;
    this._selectorName = sel;
    this._contentName = cont;
    this._selector = document.querySelector(sel);
    this._content = document.querySelector(cont);
    this.rebuild(sel, cont);
  }
  set selectedId(id) { // render if ok or rebuild on the fly if element count changed
    this._selectedId = id;
    if (this._selectCount !== this._selector.children.length || this._tabsCount !== this._content.children.length) {
      this.rebuild();
    } else {
      this.render();
    }
  }
  getUid() { // get uniqe tab id
    const rnd = String.fromCharCode(97 + Math.floor(Math.random() * 26)) + Math.floor(100000 + Math.random() * 899999);
    if (!this._ids.includes(rnd)) {
      return rnd;
    } else {
      return this.getUid();
    }
  }
  ifSelected() {
    for (const elm of Object.keys(this._selectors)) {
      if (this._selectors[elm].classList.contains(this.activeClass)) {
        return elm;
      }
    }
    return false;
  }
  rebuild(sel = this._selectorName, cont = this._contentName) {
    [sel, cont] = [document.querySelector(sel), document.querySelector(cont)];
    if (!sel || !cont) return null; // 'wrong arguments'
    if (sel.children.length !== cont.children.length || sel.children.length === 0) return null; // 'selector list != tab list';
    this._selectCount = sel.children.length;
    this._tabsCount = cont.children.length;
    this._ids = [];
    this._selectors = {};
    this._tabs = {};
    Object.values(sel.children).forEach( (elm, ind) => {
      const tid = this.getUid();
      this._ids.push(tid);
      elm.dataset.tid = tid;
      cont.children[ind].dataset.tid = tid;
      this._selectors[tid] = elm;
      this._tabs[tid] = cont.children[ind];
      this._selectors[tid].onclick = (e) => {
        this.selectedId = e.target.dataset.tid;
      }
    });
    this.selectedId = this.ifSelected() || Object.values(this._selectors)[0].dataset.tid;
  }
  render() {
    for (const elm of Object.keys(this._selectors)) {
      if (this._selectors[elm].dataset.tid === this._selectedId) {
        this._selectors[elm].classList.add(this.activeClass);
        this._tabs[elm].style.display = 'block';
      } else {
        this._selectors[elm].classList.remove(this.activeClass);
        this._tabs[elm].style.display = 'none';
      }
    }
  }
}

const tabs = new TabSelector('#selector', '#content');