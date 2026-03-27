// Loop through object properties using for...in

obj = {
    a: 5,
    b: 6,
    c: 7,
    d: 8
}

for(key in obj){
    console.log(`${key}: ${obj[key]}`)
}