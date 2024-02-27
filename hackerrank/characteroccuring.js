
function characterMostoccuring(str1)
{
let strobj ={};
let Maxkey = "";

for (let i = 0; i < str1.length; i++) {
    let key = str1[i];
  if (!str1[key]) {
    strobj[key]=(strobj[key] || 0 ) +1;
  }
   if (Maxkey == ''|| strobj[key] > strobj[Maxkey]) {
    Maxkey =key
   } 
}
// strobj[ch]=(strobj[ch] || 0 ) +1;
 console.log(Maxkey)

}

characterMostoccuring("hellopeter");