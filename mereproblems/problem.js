fruits = ["grape","orange","mango"]
Array.prototype.addfunction = function() {
 this.push(fruits)
}
for (const fruit in fruits) {
  console.log(fruits)
}
for (const index in fruits) {
  console.log(index)
}
fruits.addfunction("strawberry")
for (const fruit of fruits) {
  console.log(fruits)
}
let str = "dddd00";

String.prototype.addstringfunction = function (str){
  return this.concat(str);
}
let ddd = str.addstringfunction("aaqqqq");
console.log(ddd);