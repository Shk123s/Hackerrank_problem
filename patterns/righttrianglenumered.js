n=5
for (let i = 0; i < n; i++) {
    let row = ''
   
     
   for (let j = 0; j <=i; j++) {
    if ((i + j) % 2 === 0) {
        row  += 1
    }
     else row += 0;
       
   }
    console.log(row)
}