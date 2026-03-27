// Copy an object using the spread operrator and modify one property.

const user = {
    username: "meronaam",
    email: "alpha@email.com",
    password: "yeehaw",
    hash: "asdfghj2178r8fweuyghbj",
}

user2 = { ...user, email: "beta@gmail.com"}

console.log(user)
console.log(user2)