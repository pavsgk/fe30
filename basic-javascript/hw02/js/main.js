function askNum() {
  let num;
  while (!Number.isInteger(+num) || isNaN(+num) || num === null || num === '') {
    num = prompt('Enter number');
  }
  return +num;
}

function findMultiples () {
  const num = askNum();
  const result = [];
  for (let i = 0; i <= num; i++) {
    if (i % 5 === 0)
    result.push(i);
  }
  if (result.length < 1) {
    console.log('Sorry, no numbers');
  } else {
    console.log(...result);
  }
  return result;
}

function findPrimes () {
  const m = askNum();
  const n = askNum();
  const result = Array(n).fill(false);
  for (let i = m; i <= n; i++) {
    if ((i % 2 === 0 && i !== 2) || i < 2) continue;
    let div = 0;
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        break;
      }
      if (i % j === 0) {
        div++;
        break;
      }
    }
    if (div === 0) result[i] = true;
  }
  console.log(...result.map( (x, index) => {
    if (result[index] === true) return index;
  }).filter( x => x ));
}

alert('findMultiples function:')
findMultiples()

alert('Optional. findPrimes function:')
findPrimes()