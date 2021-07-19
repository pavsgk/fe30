class ThemeSwitcher {
  constructor (def = 0, rules = []) {
    if (!rules || rules.length < 1) return null;
    this.rules = rules;
    this.select = def;
  }
  set select(x) {
    if (isNaN(x)) return;
    if (x >= this.rules.length) {
      this._select = 0;
    } else {
      this._select = x;
    }
    this.render();
  }
  get select() {
    return this._select;
  }
  next() {
    this.select++;
  }
  render() {
    const rule = this.rules[this.select];
    for (const [key, val] of Object.entries(rule)) {
      document.documentElement.style.setProperty(key, val);
    }
  }
}

const theme = new ThemeSwitcher(0, [
  {
    '--col-white': '#FFFFFF'
  }, 
  {
    '--col-white': '#333333'
  }])