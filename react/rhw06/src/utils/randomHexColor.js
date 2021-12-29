function randomHexColor(alpha = 1) {
  let result = '';

  let alphaChanel = alpha ? Math.floor(alpha * 255).toString(16) :
    Math.floor(Math.random().toFixed(1) * 255).toString(16);
  if (alphaChanel.length === 1) alphaChanel += '0';

  for (let i = 0; i < 3; i++) {
    let colString = Math.floor(Math.random().toFixed(1) * 255).toString(16);
    if (colString.length === 1) colString += '0';
    result += colString;
  }

  return '#' + result + alphaChanel;
}

export default randomHexColor;