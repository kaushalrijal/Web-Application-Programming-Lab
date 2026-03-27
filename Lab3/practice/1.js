// Write an arrow function to calculate the sum of all elements in an array

numbers = [1, 2, 3, 4, 5]

const sum = arr => {
    const ans = arr.reduce((total, item) => total+=item, 0)
    return ans
}

console.log(sum(numbers))