// v.1 iterative
// const calcFibo = (n = 1, fAr = [0, 1]) => {
//   if (n <= 1) return fAr[n];
//   for (let i = 1; i < n; i++) {
//     fAr.push(fAr[i - 1] + fAr[i]);
//   }
//   return fAr[n];
// }

// v.2 recursive
// const calcFibo = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return calcFibo(n - 1) + calcFibo(n - 2);
// }
