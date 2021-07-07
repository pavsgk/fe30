class Validator {
  constructor (parent = document.body) {
    this.parent = parent === document.body ? document.body : document.getElementById(parent);
    if (!this.parent) return null;

    this.field = document.createElement('input');
    this.divStatus = document.createElement('div');
    this.span = document.createElement('span');
    this.clearBtn = document.createElement('button');
    this.errStatus = document.createElement('span');
    this.clearBtn.innerText = 'x';

    this.field.onfocus = e => {
      e.target.classList.add('price-green');
    }
    this.field.onblur = e => {
      e.target.classList.remove('price-green');
      this.validate(e.target.value);
    }
    this.clearBtn.onclick = e => {
      this.spanValue = '';
      this.field.value = '';
    }

    this.render();
  }
  set spanValue(val) {
    if (val === '' || val === undefined || val === null) {
      this.span.innerHTML = '';
      this.divStatus.classList.add('invis');
    } else {
      this.span.innerHTML = val;
      this.divStatus.classList.remove('invis');
      this.errValue = ''
    }
  }
  set errValue(val) {
    if (val === '' || val === undefined || val === null) {
      this.errStatus.innerText = '';
      this.errStatus.classList.add('invis');
      this.field.classList.remove('price-err');
      
    } else {
      this.errStatus.innerText = val;
      this.errStatus.classList.remove('invis');
      this.field.classList.add('price-err');
      this.spanValue = '';
    }
  }
  validate(val) {
    val = Number(val);
    if (val >= 0) {
      this.spanValue = `Текущая цена: ${val}`;
    } else {
      this.errValue = 'Please enter correct price';
    }
  }
  render() {
    this.parent.appendChild(this.divStatus);
    this.divStatus.appendChild(this.span);
    this.divStatus.appendChild(this.clearBtn);
    this.parent.appendChild(this.field);
    this.parent.appendChild(this.errStatus);
    this.spanValue = '';
    this.errValue = '';
  }
}

const validator = new Validator();