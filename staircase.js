function staircase(n)
{
  for (let i = 0; i <n; i++) {
   let space ="";
   for (let k = i; k < n-1; k++) {
       space = space + " "; 
  }
   for (let j = 0; j <=i; j++) {
       
       space = space + "#";
   }

   
   console.log(space)
}

} 
staircase(4);