const f = a => {
    return a;
}

console.log(f("Hello World from Git!"));

const f2 = f => {
    return function (prop) {
        return (f(prop) + " My boy");
    }
}

let test = f2(f);
console.log(test("That was a decorator!"))