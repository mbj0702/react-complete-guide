// import {apiKey} from "./util.js";

// import apiKey from "./util.js"; // only works when util.js has default export
import { apiKey, abc as content } from "./util.js"; // rename abc to content

// import * as util from "./util.js"; 
// everything provided by util.js would be grouped into this object called util
// console.log(util.apiKey);

console.log(apiKey);
console.log(content);

let userMessage = "Hello World!";
userMessage = "New value";

console.log(userMessage);
console.log(userMessage);

console.log(10 / 5);
console.log("hello" + "world");

console.log(10 === 5);
console.log(10 === 10);
console.log(10 <= 10);

if (10 === 10) {
    console.log("works");
}

/*--------------------------*/

function greetUser(userName, message = "Hello") {
    console.log(userName);
    console.log(message);
}

greetUser("Max");
greetUser("Manuel", "Hello, what's up?");

function createGreeting(userName, message = "Hello") {
    return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Max");
console.log(greeting1);

const greeting2 = createGreeting("Manuel", "Hello, what's up?");
console.log(greeting2);

/*------------*/

// anonymous function that doesn't carry any name
// export default function() {
//     console.log('Hello');
// }

//  when using arrow function, you omit the function keyboard
// export default () => {
//     console.log('Hello');
// }

export default (userName, message) => {
    console.log('Hello');
    return userName + message;
}

/*------------*/
const user = {
    name: 'Max',
    age: 34,
    greet() { // adding function in key-pair values
        console.log('Hello!');
        console.log(this.age);
    }
};

console.log(user.name)
user.greet();

// create objects
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hi!');
    }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet();


/*------------*/
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === 'Sports';
})

// the same as index variable
const index2 = hobbies.findIndex((item) => item === "Sports");

console.log(index);
console.log(index2);

// map allows you to transform every item in an array to another item.
const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

// converts to javascript objects
const editedHobbies2 = hobbies.map((item) => ({text: item}));
console.log(editedHobbies2);


/*------------*/
// const userNameData = ["Max", "Schwarzmuller"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// the same as above
const [firstName, lastName] = ["Max", "Schwarzmuller"];
console.log(firstName);
console.log(lastName);


// const user2 = {
//     name: "Max",
//     age: 34
// };
// const name = user2.name;
// const age = user2.age;

// the same as above
const {name: userName, age} = {
    name: "Max",
    age: 34
};
console.log(userName);
console.log(age);


/*------------*/
const hobbies2 = ["Sports", "Cokking"];
const user2 = {
    name: "Max",
    age: 34
};

const newHobbies2 = ["Reading"];

const mergedHobbies2 = [...hobbies2, ...newHobbies2];
console.log(mergedHobbies2);

const extendedUser = {
    isAdmin: true,
    ...user2
};
console.log(extendedUser);


/*------------*/
// const password = prompt('Your password');

// if (password === "Hello") {
//     console.log("Hello works");
    
// } else if (password === "hello") {
//     console.log("hello works");

// } else {
//     console.log("Access not granted");
// }

const hobbies3 = ["Sports", "Cooking"];

for (const hobby of hobbies3) {
    console.log(hobby);
}


/*------------*/
// we could set a timer with help of the built-in setTimeout funciton
// setTimeout wants 2 input values. 
// the 1st input value is a function itself

function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out! ... again!");
};


// setTimeout(() => {});

// you must omit the parentheses after handleTimeout 
// so that you don't execute this function right away
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log('More timing out...');
}, 4000);

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi"));


/*------------*/
// you can define functions inside of functions

function init() {
    function greet() {
        console.log('High');
    }

    greet();
}

init();


/*------------*/
// string is a primitive value
// we can't edit a primitive value but we can overwrite it.
let userMessage2 = 'Hello';
userMessage2 = userMessage2.concat('!!!');

// arrays are objects
// objects in javascript are reference values
// in a variable, you don't store the value but instead the address of that value in memory
// so that array is stored somewhere in memory. 
// the address of that place in memory is stored in this constant
const hobbies4 = ["Sport", "Cooking"];
// hobbies4 = [] // this won't work because it's const variable
hobbies4.push("Working");

console.log(hobbies4);