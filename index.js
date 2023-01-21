import welcome from "./functions/welcome.js";
import createBlog from './arrow_functions/blog.js'

// // inherite form another // 
// welcome();
// createBlog('blog title', 'blog body');

var Demo = 'Sakib';
Demo = 'Rakib';


let fname = 'rakib';
let lname = 'khan';

// let age = prompt('Enter ' + fname + ' age: ');


// // using template string //
// let result = `${fname} ${lname} your age ${age}.`
// console.log(result)


// // arrow function and setTimeout with this keyword //
// let nepal = {
//     mountains: ['Dilli', 'Ctg', 'Demo'],
//     printWithDash: function () {
//         setTimeout(()=> console.log(this.mountains.join(' - ')),3000);
//     }
// };

// nepal.printWithDash();


// // Object destructuring in ES6 //
// let thingsTodo = {
//     morning: 'Breakfast',
//     afternoon: 'Coding',
//     night: ['sleep', 'Dream']
// };
// let { morning, afternoon } = thingsTodo;
// console.log(morning +' - '+ afternoon);


// let studentUni = (student) => {
//     let { name, university } = student;
//     // console.log(`${name} from ${university}`);
// }
// studentUni({
//     name: 'rakib',
//     university: 'GUB'
// });

// // array destructuring in ES6 //
// let [ , findOne]=['first', 'second', 'thired']; //findOne one indicate the array number and have to index it with (,)
// console.log(findOne);


// // Restructuring
// let f_name = 'rakib';
// let l_name = 'khan';

// let nameCombination = {f_name, l_name};
// console.log(nameCombination);

// // Spread operator  (...)
// let dhaka = ['mirpur', 'banani', 'uttora'];
// let khulna = ['jessore', 'narayil'];
// let total = [...dhaka, ...khulna];
// // console.log(total);

// // rest operator  (...)
// let [first, ...rest] = dhaka;
// console.log(first);
// console.log(...rest);

















