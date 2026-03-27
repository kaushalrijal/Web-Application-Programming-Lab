// Show the difference between var, let and const inside a loop.
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var: " + i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let: " + j), 100);
}

for (const k of [0, 1, 2]) {
    setTimeout(() => console.log("const: " + k), 100);
}