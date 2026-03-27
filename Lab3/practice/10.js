// Remove duplicate elements from an array.
const numbers = [1,0,1,2,3,4]

const removeDuplicates = list => {
    const set = new Set(list)
    list = Array.from(set)
    return list;
}

console.log(removeDuplicates(numbers))