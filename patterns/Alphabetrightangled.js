n=5
for (let i = 0; i < n; i++) {
    let row = "";
   for (let j= 0; j<= i; j++) {
      row += String.fromCharCode(69 -i + j);

   }
    console.log(row)
}