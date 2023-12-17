function bonAppetit(bill, k, b) {
    // Write your code here
    let totalcharged  = 0;
    let totalchargeddiv = b
    let acutalcharged = 0;
    let resultcharged;
  for (let index = 0; index < bill.length; index++) {
     totalcharged = totalcharged + bill[index];
}
acutalcharged =  (totalcharged -  bill[k])/2;
resultcharged = totalchargeddiv-acutalcharged;
// console.log(resultcharged)
if (resultcharged === 0) {
   console.log("Bon Appetit")
}
else{
  console.log(resultcharged);
}

}
// bonAppetit([2,4,6],2,6);
bonAppetit([3,10,2,9],1,12);


// 3+2+9=11+3=14;