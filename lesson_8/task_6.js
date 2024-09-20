// Сортування масивів
const numbersList = [1,10,14,2,4,5,43,34];

const sortedCopy = [...numbersList];

console.log(sortedCopy); // Unsorted
console.log(sortedCopy.sort((a, b) => a - b)); // Sorted
