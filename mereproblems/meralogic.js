function hello(array1) {
    let temp = [];
    for (let i = 0; i <array1.length; i++) {
       for (let j = 1; j < array1.length; j++) {

        if (array1[i] === array1[j]) {
            temp.push([array1[i],array1[j]])
          
        }
        
       }
        
    }
    console.log(temp)
}

const array1 = [1,2,3,1,1,2,2];
hello(array1);

// wrong logic failed