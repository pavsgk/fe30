const clearAll = (target, removeClassName) => {
  const buttons = document.querySelectorAll(target);
  Array.from(buttons).forEach( x => x.classList.remove(removeClassName));
}

const keyInterceptor = (e) => {
  clearAll('.btn', 'blue');
  e.stopPropagation()
  const key = e.key || e.target.innerHTML.toLowerCase();
  if (findButton(e.target, key)) {
    findButton(e.target, key).classList.add('blue');
  }
}

const findButton = (tar, key) => {
  let result;
  Array.from(tar.children).forEach( x => {
    x.classList.remove('blue');
    if (Array.from(x.children).length > 0) {
      result = findButton(x, key);
    } else {
      if (x.innerHTML.toLowerCase() === key.toLowerCase()) result = x;
    }
  });
  if (Array.from(tar.children).length === 0) {
    if (tar.innerHTML.toLowerCase() === key.toLowerCase()) result = tar;
  }
  return result;
}

const buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach( x => {
  x.addEventListener('click', event => {
    keyInterceptor(event);
  });
  x.addEventListener('keydown', event => {
    keyInterceptor(event);
  })
})