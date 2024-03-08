function funnyString(s) {
   
let copys = s;
// console.log(copys)
let reverses = s.split("").reverse().join('');
// console.log(reverses)
let reversedasci = [];
let sasci=[];
for (let i = 0; i < copys.length; i++) {
    sasci.push(copys[i].charCodeAt());
    
}
for (let i = 0; i < reverses.length; i++) {
     reversedasci.push(reverses[i].charCodeAt());
    
}
console.log(sasci)
console.log(reversedasci)
}

s = "acxz";
funnyString(s)