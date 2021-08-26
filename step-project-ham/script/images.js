// (() => {
//   const container = document.querySelector('.images-msn');
//   let result = '';
//   for (let i = 1; i < 16; i++) {
//     result += `<div class="images-msn-item"><img src="./img/bi-${i}.jpg" alt="gal img"></div>`;
//   }
//   container.insertAdjacentHTML('afterbegin', result);
// })();
const msnryContainer = document.querySelector('.images-msn');
const msnry = new Masonry(
  msnryContainer, {
    itemSelector: '.images-msn-item',
    gutter: 20,
  });
setTimeout(() => msnry.layout(), 100)

document.querySelector('.images > button').addEventListener('click', event => {
  event.currentTarget.disabled = true;
  setTimeout((el => {
    bestImages.forEach(e => {
      const newEl = document.createElement('div');
      newEl.className = 'images-msn-item';
      const newImg = document.createElement('img');
      newImg.src = e;
      newImg.alt = 'msn img'
      newEl.append(newImg);
      msnryContainer.append(newEl);
      msnry.appended(newEl);
      return newEl;
    });
    setTimeout(() => msnry.layout(), 100)
    try {
      fadeIO(el, () => el.style.visibility = 'hidden', 1000);
    } catch {
      el.style.visibility = 'hidden';
    }
  }).bind(this, event.currentTarget), 2000)
})