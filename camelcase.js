function camelcase(s) {
    
    
 let pattern = /[a-z]+|[A-Z][a-z]*/g
 let matches =  s.match(pattern);

   let count =matches.length
 console.log(matches)
 console.log(count)

}
let s ="saveChangesInTheEditor" ;
camelcase(s);