//  function  Printnumber(){

// console.log(  this)
// }
// //this refers to window or global object
// console.log( Printnumber())
// this gives you idea about object and method inside the global


// function  Printnumber(){

//    return  this.number =3;
// }
//     //this refers to window or global object
//     console.log( Printnumber())
  
    

const console1= {
   log:function(string,number){

  if (string && number) {
    return console.log(string ,number)
  } else {
    if (!string) {
        return console.log(number)
       }
       else{
        return console.log(string)
       }
  }
   }
}
console1.log(1);
