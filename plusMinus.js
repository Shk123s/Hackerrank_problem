function plusMinus(arr){
    n = arr.length;
    let postive =0;
    let negative =0;
    let zero=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            postive++;
        }
        if (arr[i]< 0) {
            negative++;
        }
        if(arr[i]===0)
        {
            zero++
        }
    }
    let  sumPositive = postive/n 
    console.log(postive)
   
    let sumnegative = negative/n
    console.log(negative)
   let  sumZero =  zero/n
    console.log(sumZero)
    console.log(sumPositive.toFixed(6));
    console.log(sumnegative.toFixed(6));
      console.log(sumZero.toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1])