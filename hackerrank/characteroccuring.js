
function characterMostoccuring(str1)
{
let strobj ={};
let Maxkey = "";
for (let i = 0; i < str1.length; i++) {

  let key = str1[i];
  console.log(str1[key])
  if (!str1[key]) {
    strobj[key]=(strobj[key] || 0 ) +1;

  }
   if (Maxkey == ''|| strobj[key] > strobj[Maxkey]) {
    Maxkey =key
   } 
}
 console.log(Maxkey)

}


//   let strooobj = {};
//   let Maxkey = "";
//   for (let i = 0; i < str1.length; i++) {
//     const key = str1[i];
//     // console.log(key);
//     if (!str1[key]) {
//       strooobj[key] = (strooobj[key] || 0 )+1;
//       // console.log(str1)
//     }
//     if (Maxkey === "" || strooobj[key] > strooobj[Maxkey] ) {
//       Maxkey = key;
      
//     }
//   }
//   console.log(Maxkey)
// }
// characterMostoccuring("hellopeter");
characterMostoccuring("shaqeeb")