// n=5
// for (let i = 0; i < n; i++) {
//   let row = "";

//     for (let j = 0; j <n-i-1; j++) {
//          row = row + " ";
        
//     }
//     for (let j = 0; j <2*i+1; j++) {
//         row = row + "*";
       
//    }
//    for (let j = 0; j <n-i-1 ; j++) {
//     row = row + " ";
   
// }
// console.log(row)
// }
//for right angled triangle with _ scope 
 n=5
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";    }
      row += "*";
    for (let j = 0; j < 2 * i - 1; j++) {
        row += "_";
    }
    if (i > 0) {
        row += "*";
    }
    console.log(row);
}

// function printPyramidWithUnderscores(n) {
//     for (let i = 1; i <= n; i++) {
//         let pattern = '';
        
//         for (let j = 1; j <= n - i; j++) {
//             pattern += ' ';
//         }

//         for (let k = 1; k <= 2 * i - 1; k++) {
//             if (k === 1 || k === 2 * i - 1) {
//                 pattern += '*';
//             } else {
//                 pattern += '-';
//             }
//         }

//         console.log(pattern);
//     }
// }

// Example usage
// printPyramidWithUnderscores(5);