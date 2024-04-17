function funnyString(s) {
   
let copys = s;
// console.log(copys)
let reverses = s.split("").reverse().join('');
// console.log(reverses)
let reversedAscii = [];
let sAscii=[];
for (let i = 0; i < copys.length; i++) {
    sAscii.push(copys[i].charCodeAt());
    
}
for (let i = 0; i < reverses.length; i++) {
    reversedAscii.push(reverses[i].charCodeAt());
    
}
// console.log(sAscii)
// console.log(reversedAscii)

    // Calculate absolute differences of adjacent ASCII values for both strings
    let differences = [];
    for (let i = 1; i < sAscii.length; i++) {
        differences.push(Math.abs(sAscii[i] - sAscii[i - 1]));
        // console.log(differences)
    }
    console.log(differences)
    let reversedDifferences = [];
    for (let i = 1; i < reversedAscii.length; i++) {
        reversedDifferences.push(Math.abs(reversedAscii[i] - reversedAscii[i - 1]));
    }
    console.log(reversedDifferences)
    // Check if the differences match for both strings
    for (let i = 0; i < differences.length; i++) {
        if (differences[i] !== reversedDifferences[i]) {
            return "Not Funny";
        }
    }
    
    return "Funny";
}
s = "acxz";
console.log(funnyString(s))