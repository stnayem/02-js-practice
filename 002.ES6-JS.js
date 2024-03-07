const nums = [12, 56, 36, 23];
const actor = {
    name: 'Sakib khan',
    age: 35,
    movies: ['3 idiots', 'Jawan'],
}
//01. template string using backtick ``
const about = `My name is ${actor.name} age of ${actor.age} has movies name: ${actor.movies[1]}`;
console.log(about);//My name is Sakib khan age of 35 has movies name: Jawan

//02. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    return num1 + num2;
}


//03.spread operator (3idiots)
const oldNumbers = [...nums];
nums.push(99);
//create a new array from an older array and add an element
const newNumbers = [...nums, 55];
console.log(nums, oldNumbers, newNumbers);
//[ 12, 56, 36, 23, 99 ] [ 12, 56, 36, 23 ] [ 12, 56, 36, 23, 99, 55 ]
