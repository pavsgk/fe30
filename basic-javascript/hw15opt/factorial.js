const factorial = (x) => x > 1 ? x * factorial(x - 1) : x;

let [num, oldval] = [null, ''];
while (num === undefined || num === null || num === '' || isNaN(num) === true || num < 1) {
  num = prompt('Enter valid number', oldval);
  oldval = num;
}
alert(factorial(num));