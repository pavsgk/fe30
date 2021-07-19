class ThemeSwitcher {
  constructor(def = 0, rules = []) {
    if (!rules || rules.length < 1) return null;
    this.rules = rules;
    this.select = this.getState();
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
  getState() {
    if (!localStorage.getItem('themeNum')) return 0;
    return +localStorage.getItem('themeNum');
  }
  setState() {
    localStorage.setItem('themeNum', this.select)
  }
  next() {
    this.select++;
  }
  render() {
    const rule = this.rules[this.select];
    for (const [key, val] of Object.entries(rule)) {
      document.querySelector(':root').style.setProperty(key, val);
    }
    this.setState();
  }
}

const theme = new ThemeSwitcher(0, [{
    '--col-bg': '#FFFFFF',
    '--col-dark': 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
    '--col-text1': '#FFFFFF',
    '--col-text2': '#434343',
    '--col-link': '#FFFFFF',
    '--col-link-hover': '#236D47'
  },
  {
    '--col-bg': '#333333',
    '--col-dark': 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
    '--col-text1': '#FFFFFF',
    '--col-text2': 'crimson',
    '--col-link': 'burlywood',
    '--col-link-hover': 'coral'
  },
  {
    '--col-bg': 'aliceblue',
    '--col-dark': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    '--col-text1': 'aliceblue',
    '--col-text2': 'cornflowerblue',
    '--col-link': 'azure',
    '--col-link-hover': 'aquamarine'
  }
])