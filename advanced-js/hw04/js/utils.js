import cache from "./cache.js";

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

export const fetchWithCache = async (url) => new Promise( (resolve, reject) => {
  try {
    if (cache[url]) {
      resolve(cache[url]);
    } else {
      fetch(url).then(res => res.json()).then(json => {
        cache[url] = json;
        resolve(json)
      });
    }
  } catch (err) {
    reject(err);
  }
})