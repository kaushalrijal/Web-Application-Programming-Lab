// Write a function using rest parameters that accepts any number of arguments and returs their product.

const multiply = (...args) => {
    const product = args.reduce((prod, i) => prod *= i, 1)
    return product
}

console.log(multiply(2, 5, 8))