

//forEach loop
const nums10 = [1, 3, 5, 6];
const result = nums10.forEach(n => n * 2);
function result1(arr) {
    arr.forEach(n => {
        n * 2;
    });
    //for(let n of arr){...}
}
console.log(result, nums10); //undefined [1, 3, 5, 6]
// const object = {};
// for(const k in object){
//     console.log('keys:',k, 'values:',obj[k]);
// }


const nums = [4, 12, 3, 9, 81];
const doubleIt = (x) => (x * 2);
const doubleNumsOfArr = nums.map(x => x + 2);
console.log(nums, doubleNumsOfArr);//[ 4, 12, 3, 9, 81 ] [ 6, 14, 5, 11, 83 ]

const names = ['arif', 'nayem', 'rahman'];
const firstChar = names.map(n => n.charAt(0));
const len = names.map(n => n.length);
console.log(firstChar, len); //['a', 'n', 'r'] [4, 5, 6]

//Array of object
const products = [
    { name: 'watch', price: 3100, brand: 'iPhone' },
    { name: 'phone', price: 2200, brand: 'Samsung' },
    { name: 'laptop', price: 1800, brand: 'Lenovo' },
];
//map, filter, find
const brands = products.map(p => p.brand);//['iPhone', 'Samsung', 'Lenovo']
const cheap = products.filter(p => p.price < 3000); //[obj2, obj3]
const brandNamesO = products.filter(p => p.brand.includes('o'));//[obj1, obj3]
const withoutLaptop = products.filter(p => p.name !== 'laptop');//[obj1, obj2]
console.log(withoutLaptop);
const cheap1 = products.find(p => p.price < 3000);//obj2 //return an element/object

//add or remove object in array
const newProduct = { name: 'laptop', price: 1800, brand: 'Lenovo' };
//copy products array and then add new products
const newProducts = [...products, newProduct];
// console.log(newProducts)