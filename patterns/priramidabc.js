let n = 6;
for (let i = 0; i < n; i++) {
    let row = "";
    // Print spaces
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }
    // Print characters in increasing order
    for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(65 + j);
    }
    // Print characters in decreasing order
    for (let j = i - 1; j >= 0; j--) {
        row += String.fromCharCode(65 + j);
    }
    // Print spaces
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }
    console.log(row);
}
