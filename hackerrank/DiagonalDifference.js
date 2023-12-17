function DiagonalDifference(arr) {
  n= arr.length;
  let  rightsum = 0;
  let leftsum = 0 ;
  let difference = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ( arr[i] === arr[j] ) {
        leftsum = leftsum + arr[i][j];
        // console.log(leftsum)
      } if (i + j === n-1 ) {
          rightsum = rightsum + arr[i][j] ;
         
          // console.log(rightsum)
      }
    } 
  }
  console.log(Math.abs(difference = leftsum - rightsum));
// console.log(leftsum)
console.log(rightsum)

}


DiagonalDifference( [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ]);
