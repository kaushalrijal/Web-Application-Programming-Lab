// Write a progrram to calculate the factorial of a number using:
// a. for loop

const forFact = n => {
    let fact = 1;
    for(i=n; i>0; i--){
        fact *= i
    }
    return fact;
}

// b. while loop

const whileFact = n => {
    let fact = 1;
    while(n>0){
        fact *= n;
        n--;
    }
    return fact;
}

console.log(forFact(5))
console.log(whileFact(3))