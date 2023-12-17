function dayOfProgrammer(year) {
    // Write your code here
    if (year == 1918) {
        return "26.09.1918";
    }
    else if(( year <= 1917) && (0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(`12.09.${year}`);
    } 
    else{
        console.log(`13.09.${year}`)
    }
}

// dayOfProgrammer(1984);
dayOfProgrammer(1800);
dayOfProgrammer(1918);