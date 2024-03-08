const person = 
{
    firstname :"shaikh",
    lastname:"shaqeeb",
     PrintFullName : function (live,job){
        console.log(this.firstname + " and " + this.lastname + live + job)
    }
    //we can keep this outside of the object and use it then we dont need to call the person.PrintFullname
}
// let PrintFullName = function (live,job){
//     console.log(this.firstname + " and " + this.lastname + live + job)
// }
const person2 = 
{
    firstname :"syed",
    lastname:"muzaffer",
}
const person3 = 
{
    firstname :"ansari",
    lastname:"asif",
}
const person4 = 
{
    firstname :"mohd",
    lastname:"sar",
}

// PrintFullName.call(person," ghar"," nhi h")
// person.PrintFullName();
// it will help me to inherit the object function which called method  of person
// person.PrintFullName.call(person2 ," mumbai" ," hai ");
// person.PrintFullName.call(person2 , " sehar" ," alham");
// where apply does the same job but it takes list as arrray while working with argument
// person.PrintFullName.apply(person3, [" dehradun" ," nice"]);
//bind makes a function placeholder then it will call later // tumhare upar h
let personbind = person.PrintFullName.bind(person4," nhi ", "hai ");
console.log(personbind.call(person,'fdd',"dd"),"ddd"); // nhi aayega 
// personbind();