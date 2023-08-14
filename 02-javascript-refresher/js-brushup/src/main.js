// import * as util from "./util.js";
// console.log('apiKey1: '+util.apiKey1);
// console.log('apiKey6: '+util.default);

// Defining function using parameter
/* function greet (userName, message) {
    console.log(userName, message)
} */

// Calling function with paramter
// greet('apurb', 'Hello there!');

// Function with return keyword and parameter default value
/* function createMessage (userName, message='Hello there!!') {
    return `JS saying ${message} to ${userName}`;
}
 */
/* const newMessage = createMessage('Apurb');
console.log('create new message: '+newMessage); */

// Arrow functions (Anonymous functions)
/* () => {
    console.log('Hello from anonymoous function');
} */

//Object and Classes

/* const user = {
    firstName: 'Apurb',
    lastName: 'Choudhary',
    age: 35,
    greeting () {
        console.log(`Hello ${this.firstName} ${this.lastName} your current age is ${this.age}`)
    }
}
user.greeting(); */

/* class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greeting () {
        console.log(`Hello ${this.firstName} ${this.lastName} your current age is ${this.age}`)
    }
}

const userObj = new User('Apurb', 'Choudhary', 36);
userObj.greeting(); */

//Array methods like maps and using => functions
/* const hobbies = ['sporting', 'cooking', 'reading'];
console.log(hobbies[1]);

hobbies.push('Swimming');
console.log(hobbies);

const index = hobbies.findIndex((item) => item === 'sporting');
console.log(index);

const edittedHobbies = hobbies.map((item) => item +'!');
console.log('edittedHobbies: '+edittedHobbies);
const hobbiesObject = hobbies.map((item) => ({text:item}));
console.log(hobbiesObject)
 */

//Destructing Array
const [firstName, lastName] = ['Apurb', 'Choudhary'];
console.log(firstName);
console.log(lastName);

//Destructing Object
const {name: username, age} = {
    name: 'Apurb',
    age: 36
}
console.log(username);

const newUser = {
    firstName : 'Apurb',
    lastName : 'Choudhary',
    age : 36
}
const updatedUser = {
    isNewUser : 'I think so',
    ...newUser
}
console.log(updatedUser);


