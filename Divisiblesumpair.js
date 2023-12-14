let ar = [1,2,3,4,5,6];
let a;

let k=5

function divisibleSumPairs() {
  let count =0;
    // Write your code here
for (let i = 0; i < n; i++) {
  for (let j = i+ 1; j < n; j++) {
    // console.log(ar[i],"i");
      // console.log(i<j || ar[i] + ar[j] % k === 0)
    if(i<j){
      if((ar[i] + ar[j])%k ==0) {
      // console.log(i,j)
      count++;
      a =console.log(ar[i],ar[j])
      }
    }
  }
}
console.log(count);

}
let n = ar.length;
divisibleSumPairs()