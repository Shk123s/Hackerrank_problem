n =5;

for (let i = 1; i <n; i++) {
    let row ="";
    //*
 for (let j = 0; j <n-i; j++) {
    row += "*";
 }
 //space
 for (let j = 0; j <2*i-2; j++) {
    row += " ";
 }
 //*
 for (let j = 0; j < n-i; j++) {
    row += "*";
 }


 console.log(row)
}

for (let i = 1; i <n; i++) {
    let row = "";
    //*
 for (let j = 0; j <i; j++) {
    row += "*";
 }
 //space
 for (let j = 0; j <2*(n-i-1); j++) {
    row += " ";
 }
 //*
 for (let j = 0; j <i; j++) {
    row += "*";
 }
 console.log(row)
}