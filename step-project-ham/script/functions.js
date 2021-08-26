const fadeIO = async function (el, executor, mode = 'fade', timeout = 300, step = 10) {
  const fade = (mod) => {
    let opacity = mod === 1 ? 0 : 1;
    let iter = 0;
    return new Promise(resolve => {
      el.style.opacity = opacity;
      const timer = setInterval(() => {
        opacity += 1 * mod / step
        el.style.opacity = opacity;
        iter++;
        if (iter >= step) {
          el.style.opacity = mod === 1 ? 1 : 0;
          clearInterval(timer);
          resolve();
        }
      }, timeout / step / 2)
    });
  }

  const initOpacity = el.style.opacity;
  if (initOpacity !== '0' && initOpacity !== '1' && initOpacity !== '') {
    if (executor) executor();
  } else {
    if (mode === 'fade' || mode === 'hide') await fade(-1);
    if (executor) executor();
    if (mode === 'fade' || mode === 'show') await fade(1);
  } 
  return el;
}

const workServerEmu = function* (arr) {
  yield arr.slice(0, 12);
  yield arr.slice(12, 24);
  return arr.slice(24);
}(workPhotos);