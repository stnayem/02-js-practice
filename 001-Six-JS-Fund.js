//Six JS Fundamentals things we should know.
//01.How to declare a variable using let and const.
const fatherName = 'Abu Taher';
let season = 'rainy';
season = 'winter';

//02. 6 basic conditions: >,<, triple ====, not !==, <=, >=
//multiple condition: and &&, or ||
if (fatherName === 'abu Taher' || season === 'rainy') {

} else if (fatherName === 'Arnold') {

} else {

}

//03.Array declare
//index 0, 1 ....
//arr.length, push/unshift, pop/shift
const numbers = [89, 54, 23, 12];
numbers[0] = 56;

//04.for loop, while(cond){...}
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    console.log(num);
}

//05. function
function multiply(num1, num2) { //arguments
    return num1 * num2;
}
const output = multiply(4, 5);//parameter

//06.Object
const actor = {
    name: 'Sakib khan',
    age: 35,
    movies: ['3 idiots', 'Jawan'],
}
const myVariable = 'age';
console.log(actor.name);//direct by property
console.log(actor['age']);//access via property name string
console.log(actor[myVariable]);//access via property name in a variable

