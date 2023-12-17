function birthdayCakeCandles(arr)
{ let max = arr[0]
  let count = 0;
    for (let i = 0; i < arr.length; i++) {
     if(arr[i] < max)
     {
       count++
     } 
        
    }
    console.log(count)
 return count;
     
}
birthdayCakeCandles([3, 2, 1, 3])