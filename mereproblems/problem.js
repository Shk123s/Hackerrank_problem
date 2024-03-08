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