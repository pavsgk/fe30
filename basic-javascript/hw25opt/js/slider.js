class Slider {
  constructor(container) {
    this.elems = Array.from(document.querySelector(container).children);
    this.len = this.elems.length;
    this.select = 0;
  }
  set select(n) {
    this._select = this.getValid(n);
    this.render();
  }
  get select() {
    return this._select;
  }
  get prev() {
    return this.getValid(this.select - 1);
  }
  get next() {
    return this.getValid(this.select + 1);
  }
  getValid(x) {
    if (x < 0) {
      return this.len - 1;
    } else if (x >= this.len) {
      return 0;
    } else {
      return x;
    }
  }
  render() {
    this.elems.forEach((el, ind) => {
      if (ind === this._select) {
        this.elems[this.prev].className = 'prevImg';
        el.className = 'currentImg';
        this.elems[this.next].className = 'nextImg';
      } else {
        if (ind !== this.prev && ind !== this.next) {
          el.className = '';
        }
      }
    })
  }
}

const slider = new Slider('.container');