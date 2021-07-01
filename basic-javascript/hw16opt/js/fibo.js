// v.3 recursive both directions
const calcFibo = (a, b, n) => {
  if (a === null && n < 0) {
    a = 0;
    b = -1;
    n = Math.abs(n);
  } else if (a === null && n > 0) {
    a = 0;
    b = 1;
  }
  if (n === 0) return a;
  if (n === 1) return b;
  return calcFibo(a, b, n - 1) + calcFibo(a, b, n - 2);
}

console.log(calcFibo(null, null, +prompt('Enter N:'))); 