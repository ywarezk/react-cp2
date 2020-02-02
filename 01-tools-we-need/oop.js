/**
 * OOP
 */

class Person {
    constructor(age) {
        this.myAge = age;
    }

    // this in js can change
    // this is determined during running of the function
    birthday() {
        console.log(this);
        this.myAge++;
    }

    birthday2 = () => {
        console.log(this);
        this.myAge++;
    }
}

const person = new Person(34);
person.birthday();
console.log(person.myAge); // 35

const myBirthday = person.birthday;
myBirthday();
console.log(person.myAge); // ? 

// class Child extends Person {

// }