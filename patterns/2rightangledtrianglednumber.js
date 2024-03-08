n=5
for (let i = 1; i <=n; i++) {
    let row = "";
    //number
  for (let j = 1; j <= i; j++) {
   
      row += j;
  }
  //space
  for (let k = 1; k <= 2*(n-i); k++) {
    row += " "
   
  }
  //numbers
  for (let j = i; j >= 1; j--) {
      row += j
  }
  console.log(row)
}