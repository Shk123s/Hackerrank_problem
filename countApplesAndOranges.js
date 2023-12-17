function countApplesAndOranges(s, t, a, b, apples, oranges) {
   
let countApples= 0
let countOranges= 0
let sumedApples=[]
let sumedoranges = []
for (let i = 0; i < apples.length; i++) {
   sumedApples.push(apples[i] + a);
   if (sumedApples[i] >= s  && sumedApples[i] <= t) {
       countApples++
   }
   
}

for (let j = 0; j < oranges.length; j++) {
   sumedoranges.push(oranges[j] + b);
   if (sumedoranges[j] >= s  && sumedoranges[j] <= t) {
      countOranges++
  }
}


console.log([countApples,countOranges])



}
countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])