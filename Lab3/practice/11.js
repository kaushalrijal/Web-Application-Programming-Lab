// Sort an array of objects based on age or marks.

const objects = [
    {
        name: "hariom",
        age: 32,
        marks: 88
    },
    {
        name: "prashant",
        age: 26,
        marks: 92
    },
    {
        name: "guru",
        age: 22,
        marks: 86
    },
]

console.log("Before sorting")
console.log(objects)

console.log("Sorting ascendingly based on age")
console.log(objects.sort((a, b) => a.age - b.age))

console.log("Sorting descendingly based on marks")
console.log(objects.sort((a,b) => b.marks - a.marks))