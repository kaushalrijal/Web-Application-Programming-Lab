// Convert an array of strings to uppercase using map()

strings_lower = ["hello", "world", "testing", "labalaba"]

const uppercase = strings => {
    const result = strings.map((string) => string.toUpperCase())
    return result
}

console.log(uppercase(strings_lower))