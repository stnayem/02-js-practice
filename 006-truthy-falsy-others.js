//Truthy==> 'nayem', -1,1,true, {}, []
//Falsy==> 0, '', false, undefined, null

let myVar = 5;
if (myVar) {
    // console.log(myVar);
} else {

}

//ternary
let numType = myVar < 0 ? 'negative' : 'positive';
// console.log(numType);

const num = '43';
const inputNum = +num;
const inputNum1 = parseInt(num);
const inputString = toString(inputNum1);
// console.log(typeof inputNum);
// console.log(typeof inputNum1);
// console.log(typeof inputString);

let isActive = false;
const showUser = () => console.log('Show user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
// isActive && showUser();
// !isActive && hideUser();

//toggle boolean value
isActive = !isActive;
console.log(isActive);

