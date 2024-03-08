n=5
for (let i = 0; i <= n; i++) {
  let row = "";

    for (let j = 0; j <=i; j++) {
         row = row + " ";
        
    }
    for (let j = 0; j <2*n-(2*i-1); j++) {
        row = row + "*";
       
   }
   for (let j = 0; j <=i; j++) {
    row = row + " ";
   
}
console.log(row)
}