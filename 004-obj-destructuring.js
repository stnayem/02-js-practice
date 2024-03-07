const person = { name: 'Nayem', age: 29, car: 'tesla' };
//keys and values
const keys = Object.keys(person);
const v = Object.values(person);
console.log(keys, v);


//destructuring
let { name } = person;
let { age, car: kereta } = person;
kereta = 'BMW';
console.log(age, kereta);

const numbers = [33, 43, 26, 44];
const [x, , , y] = numbers;
console.log(x, y);

let a = 2, b = 3;
[b, a] = [a, b];
console.log(a, b);

function doubleIt(x, y) {
    return [x * 2, y * 2];
}
const [k, l] = doubleIt(4, 3);
console.log(k, l);

const actor = {
    name: 'Sakib khan',
    age: 35,
    movies: ['3 idiots', 'Jawan'],
    watch: {
        color: 'black',
        price: 2100,
        functions: ['timer', 'stopwatch', 'heartbeat checker'],
    }
}
//?. ==> optional chaining
const [func1, , func2] = actor?.watch?.functions;
console.log(func2, func1);

const { functions: features } = actor.watch;
console.log(typeof features, Array.isArray(features), features);
//object true ['timer', 'stopwatch', 'heartbeat checker']
