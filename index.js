import welcome from "./functions/welcome.js";
import createBlog from './arrow_functions/blog.js'


// welcome();
createBlog('blog title', 'blog body');

var Demo = 'Sakib';
Demo = 'Rakib';


let fname = 'rakib';
let lname = 'khan';
// let age = prompt('Enter ' + fname + ' age: ');


// using template string //
// let result = `${fname} ${lname} your age ${age}.`
// console.log(result)


// arrow function and setTimeout with this keyword //
let nepal = {
    mountains: ['Dilli', 'Ctg', 'Demo'],
    printWithDash: function () {
        setTimeout(()=> console.log(this.mountains.join(' - ')),3000);
    }
};

nepal.printWithDash();