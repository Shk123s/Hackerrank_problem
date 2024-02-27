function palimdrone(str){
 let reversedstr = "";
//  console.log(typeof reversedstr)
 let hello = str.split("").reverse().join("");
//  console.log(hello)
 if (str === hello) {
   return true 
 }
return false
// for (let i = str.length-1; i >=0; i--) {
//      reversedstr = reversedstr + str[i];
//     console.log(reversedstr)
// }
// if (str === reversedstr) {
//    return true 
// }

// return false


} 
console.log(palimdrone("amma"))