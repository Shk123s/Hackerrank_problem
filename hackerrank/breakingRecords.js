function breakingRecords(scores) {
 
let high=scores[0];
let highcount=0;
let lowcount=0;
let low=scores[0];
// console.log(high)
for (let i = 1; i < scores.length; i++) {
    
   if (scores[i] > high) {
      high = scores[i]
      highcount++
   }
   if (scores[i]< low) {
    low = scores[i]
    lowcount++
 }
}
console.log(highcount)
console.log(lowcount)

}
breakingRecords([12,24,10,24])
// breakingRecords([10, 5 ,20 ,20 ,4 ,5 ,2 ,25 ,1])