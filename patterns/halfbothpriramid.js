let n = 3;

// Upper half of the diamond
for (let i = 0; i < n; i++) {
    let row = '';
    // Print left half of the row
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    // Print right half of the row
    for (let j = i; j < n - 1; j++) {
        row += ' ';
    }
    for (let j = i; j < n - 1; j++) {
        row += ' ';
    }
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

// Lower half of the diamond
for (let i = n - 2; i >= 0; i--) {
    let row = '';
    // Print left half of the row
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    // Print right half of the row
    for (let j = i; j < n - 1; j++) {
        row += ' ';
    }
    for (let j = i; j < n - 1; j++) {
        row += ' ';
    }
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
