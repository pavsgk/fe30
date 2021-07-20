class Tabs {
  constructor(radios, tabs, activeClassName) {
    this.radiosName = radios;
    this.tabsName = tabs;
    this.tidPool = [];
    this.activeClassName = activeClassName;
    this.rebuild();
  }
  set select(tid) {
    this._select = tid;
    this.rebuild();
  }
  getTabId() {
    const rand = String.fromCharCode(97 + Math.floor(Math.random() * 26)) + Math.floor(100000 + Math.random() * 899999);
    // rerun if not unique:
    if (this.tidPool.includes(rand)) return getTabId();
    return rand;
  }
  rebuild() {
    this.radios = Array.from($(this.radiosName).children());
    this.tabs = Array.from($(this.tabsName).children());

    if (this.radios.length !== this.tabs.length || this.radios.length === 0) return;

    this.radios.forEach((el, index) => {
      // add events & id to new elements
      if (!$(el).data('tab_id')) {
        const tid = this.getTabId();
        this.tidPool.push(tid);
        $(el).data('tab_id', tid);
        $(el).on('click', () => {
          this.select = $(el).data('tab_id');
        })
        $(this.tabs[index]).data('tab_id', tid);
      }
      // render:
      if ($(el).data('tab_id') !== this._select) {
        $(el).removeClass('active');
        $(this.tabs[index]).hide();
      } else {
        $(el).addClass('active');
        $(this.tabs[index]).show();
      }
    })

    if (!this._select) this.select = $(this.radios[0]).data('tab_id');
  }
}

const tabs = new Tabs('#selector', '#content', 'active');