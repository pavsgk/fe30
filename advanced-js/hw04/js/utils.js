export function q(elm) {
  if (this === window || this === undefined) {
    return document.querySelector(elm);
  } else {
    return this.querySelector(elm);
  }
}
HTMLElement.prototype.q = q;

export const generateLiList = (arr, targetObj) => arr.map(e => 
  targetObj[e] ? `<li>${e}: ${targetObj[e]}</li>` : '').join('');