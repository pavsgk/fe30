function validateNum (x) {
  if (isNaN(+x) ||
    x === null ||
    x === undefined ||
    String(x).trim() === '') {
      return false;
  }
  return true;
}

function askCalc (prevX = '', prevY = '', prevOp = '') {
  const [x, y, op] = [prompt('Enter X', prevX), prompt('Enter Y', prevY), prompt('Choose operation', prevOp)];
  if ((validateNum(x) && validateNum(y)) && (op === '+' || op === '-' || op === '/' || op === '*')) {
    return [+x, +y, op];
  } else {
    return askCalc(x, y, op);
  }
}

function calc(x, y, op) {
  let result;
  switch (op) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      if (y === 0) {
        result = 'division by zero'
      } else {
        result = x / y;
      }
  }
  console.log(result);
  return result;
}

calc(...askCalc());