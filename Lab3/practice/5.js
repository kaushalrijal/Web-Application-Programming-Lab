// Create an arrow function that returns an object and use template literals to print: Hello, my name is ________ and I am _________ years old.

const introduce = (name, age) => {
    return {
        message: `Hello, my name is ${name} and I am ${age} years old.`
    }
}

console.log(introduce("Kaushal", 43).message)