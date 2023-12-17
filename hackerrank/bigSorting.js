function bigSorting(unsorted) {
    // Write your code here
    const n = unsorted.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (BigInt(unsorted[j]) > BigInt(unsorted[j + 1])) {
            let temp = unsorted[j];
            unsorted[j] = unsorted[j + 1];
            unsorted[j + 1] = temp;
          }
        }
      }
    
    //   return unsorted;
    let numberArr = unsorted.map(Number);
    console.log(numberArr )
}
// bigSorting(['1','200', '150','3']);
unsorted= ["6",
    "31415926535897932384626433832795",
    "1",
    "3",
    "10",
    "3",
    "5"];
bigSorting(unsorted);
// console.log(unsorted)