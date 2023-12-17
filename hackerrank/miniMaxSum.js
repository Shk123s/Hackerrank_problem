function miniMaxSum(arr)
{   let Toalsum = 0;
    let min = Math.min(...arr)
    // console.log(min)
    let max = Math.max(...arr)
    // console.log(max)
   for (let i = 0; i < arr.length; i++) {
    Toalsum = Toalsum + arr[i]
}
let finalMax  = Toalsum - min ;
// console.log(finalMax)
 let finalMin = Toalsum - max;
    console.log( finalMin + " " +  finalMax)

}
miniMaxSum([1 ,2 ,3 ,4 ,5])