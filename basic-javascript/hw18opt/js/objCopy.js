//hw18
function objCopy (src, target = null) {
  if (typeof(src) != 'object') return src;
  if (target == null) target = {};
  for (key in src) {
    if (typeof(src[key]) == "object") {
      if (Array.isArray(src[key]) == true) {
        target[key] = [];
      } else {
        target[key] = {};
      }
      objCopy(src[key], target[key])
    } else {
      target[key] = src[key];
    }
  }
  return target;
}


// test
const original = {
  a: 'name',
  b: 2,
  c: {
    test: 18,
    ts: 20,
    arr: [{text: 'hello'}, {}],
  },
  d: [1, 2, 3],
  func() {
    console.log('hello ' + this.a)
  }
}

const replica = objCopy(original);

console.log(original);
console.log(replica);