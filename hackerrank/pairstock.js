function sockMerchant(n, ar) {
    let sockCounts = {};
    let pairs = 0;

    // Count the occurrences of each sock color
    for (let i = 0; i < n; i++) {
        if (sockCounts[ar[i]]) {
            console.log(sockCounts[ar[i]])
            sockCounts[ar[i]]++;
        } else {
            sockCounts[ar[i]] = 1;
        }
    }

    // Count the number of pairs for each color
    Object.values(sockCounts).forEach(count => {
        pairs += Math.floor(count / 2);
    });

    return pairs;
}

// Example usage
const socks = [1,2,2,1,1,2,3];
const pairs = sockMerchant(socks.length, socks);
console.log("Number of pairs:", pairs); // Output: 3
