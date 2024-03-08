for (let i = 5; i >= 0; i--) {
    let row = "";
    for (let j = i; j >= 0; j--) {
        row += "*";
    }
    console.log(row);
}
n=5;
for (let i = 1; i <=n; i++) {
    let row = "";
    for (let j = 0; j <n-i+1; j++) {
        row += "*";
    }
    console.log(row);
}

// same output for both
n=5;
for (let i = 1; i <=n; i++) {
    let row = "";
    for (let j = 1; j <=n-i+1; j++) {
        row += j;
    }
    console.log(row);
}