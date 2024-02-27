function extraLongFactorials(n) {
   let answer=BigInt(1) ;
for (let i = BigInt(1); i <=BigInt(n); i++) {
    answer *=  i;
    
}
 console.log(BigInt(answer).toString())
}
extraLongFactorials(25)