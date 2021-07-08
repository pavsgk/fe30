class TabSelector {
  constructor(sel, cont) {
    this.rebuild(sel, cont);
  }
  set selectedId (id) {
    this._selectedId = id;
    this.render();
  }
  getUid() {
    const letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return letter + Math.floor(100000 + Math.random() * 899999);
  }
  rebuild(sel, cont) {
    [sel, cont] = [document.querySelector(sel), document.querySelector(cont)];
    if (!sel || !cont) return 'wrong argument';
    if (sel.children.length !== cont.children.length || sel.children.length === 0) return 'wrong lists';
    this.buttons = {};
    this.tabs = {};
    Object.values(sel.children).forEach( (elm, ind) => {
      const tid = this.getUid()
      elm.id = tid;
      cont.children[ind].id = tid;
      this.buttons[tid] = elm;
      this.tabs[tid] = cont.children[ind];
      this.buttons[tid].onclick = (e) => {
        this.selectedId = e.target.id;
      }
    });
    this.selectedId = Object.values(this.buttons)[0].id;
  }
  render() {
    for (const elm of Object.keys(this.buttons)) {
      if (this.buttons[elm].id === this._selectedId) {
        this.buttons[elm].classList.add('active');
        this.tabs[elm].style.display = 'block';
      } else {
        this.buttons[elm].classList.remove('active');
        this.tabs[elm].style.display = 'none';
      }
    }
  }
}

const tabs = new TabSelector('#selector', '#content');