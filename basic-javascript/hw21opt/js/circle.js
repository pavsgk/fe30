class Circle {
  constructor(rad, parent) {
    this.el = document.createElement('div');
    this.el.style.cssText = `
      display: block;
      border-radius: 50%;
      background-color: ${this.getRandomColor()};
      width: ${rad}px;
      height: ${rad}px;`
    this.el.className = 'circle';
    this.el.dataset.uid = Math.floor(100000 + Math.random() * 899999)
    parent.append(this.el);
  }

  getRandomColor() {
    return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
  }

  static hide(uid, parent) {
    const pool = Array.from(parent.querySelectorAll('.circle'));
    pool.find(e => e.dataset.uid === uid).style.display = 'none';
  }
}

function drawCircles(rad = 0) {
  while (isNaN(+rad) || +rad < 1) {
    rad = prompt('Enter radius:');
    if (rad === null) return;
  }

  const field = document.createElement('div');
  document.body.append(field);
  field.id = 'canv';
  field.style.cssText = `
    display: grid; 
    grid-template-rows: repeat(10, ${rad * 1.1}px);
    grid-template-columns: repeat(10, ${rad * 1.1}px);`

  for (i = 0; i < 100; i++) {
    const circle = new Circle(rad, field);
  }

  field.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
      Circle.hide(e.target.dataset.uid, field);
    }
  });
}
