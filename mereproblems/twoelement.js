function findMissingElement(arr1, arr2) {
    const missingElements = [];

    // Iterate through the first array
    for (let i = 0; i < arr1.length; i++) {
        let found = false;

        // Iterate through the second array to check for each element
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }
        // If the element is not found in the second array, add it to the missing elements
        if (!found) {
            missingElements.push(arr1[i]);
        }
    }

    return missingElements;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 0, 5];
const missingElements = findMissingElement(arr1, arr2);
console.log("Missing elements:", missingElements); // Output: [4]
