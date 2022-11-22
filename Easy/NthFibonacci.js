//   The Fibonacci sequence is defined as follows: the first number of the sequence
//   is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
//      and (n - 2)th numbers. Write a function that takes in an integer n and return the nth fibonacci number

// nthNumber  f(n) = F(n -1) + F(n - 2)
// F(n) => n is index in array
// F0 = 0
// F1 = 1

// getNthFib(1) = F0

// let array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]

// let n = 5;
// function getNthFib(n) {
//   let array = []; // [0, 1, index2, index3, index4, index5]
//   array[0] = 0;
//   array[1] = 1;
//   while (n >= 0) {
//     if ((n = 0)) {
//       array[n] = 0;
//       return array[n];
//     }
//     if ((n = 1)) {
//       array[n] = 1;
//       return array[n];
//     }
//     if (n > 1) {
//       array[n] = array[n - 1] + array[n - 2];
//       n++;
//       return array[n];
//     }
//   }
//   return array[n];
// }

// getNthFib(n);
// console.log(getNthFib(n));

// // ===================================================
// function getNthFib(n) {
//   let array = []; // [0, 1, index2, index3, index4, index5]

//   for (let i = 0; i <= n; i++) {
//     while (i >= 0) {
//       if ((i = 0)) {
//         array[i] = 0;
//       }
//       if ((i = 1)) {
//         array[i] = 1;
//       }
//       if (i > 1) {
//         array[i] = array[i - 1] + array[i - 2];
//       }
//     }
//     return array[i];
//   }
//   return array[i];
// }

// let result = getNthFib(5);
// console.log(result);

//  n = 5
// f(n){
//     if(n=2){
//         return 1;
//     }else if(n=1){
//         return 0;
//     }else{

//         return f(n-1) + f(n-2)
//     }

// }

function getNthFib(n) {
  if (n == 2) {
    return 1;
  } else if (n == 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

console.log(getNthFib(10));
