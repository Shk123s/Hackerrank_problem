// let number = 1;
// n=6
// for (let i = 1; i < n; i++) {
//     let row ="";
//     for (let j = 1; j <= i; j++) {
//       row += number;
//       number++

//     }
//     console.log(row)
    
// }
// 1
// 23
// 456
// 78910
// 1112131415
// const n = 6; // number of rows

// // Iterate over each row
// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // Inner loop to print characters from 'A' to 'A + i - 1'
//     for (let j = 0; j < i; j++) {
//         row += String.fromCharCode(65 + j) + " "; // Convert ASCII code to character
//     }

//     // Print the row
//     console.log(row);
// }

// A 
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F
n=5;
for (let i = 0; i <n; i++) {
    let row = "";
    for (let j = 0; j <=n-i-1; j++) {
        row +=String.fromCharCode(65 + j);
    }
    console.log(row);
}
// ABCDE
// ABCD 
// ABC
// AB
// A