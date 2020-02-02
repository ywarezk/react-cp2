/**
 * destructuring
 */

const [myNumber, myMessage] = [10, "hello"];
// const myArray = [10, "hello"];
// const myNumber = myArray[0];
// const myMessage = myArray[1]

const {foo, hello} = {
    hello: "world",
    foo: 42
};

/**
 * spread operator
 * clone object or array
 */

 const myObj = {
    hello: "world",
    foo: 42,
    bar: true
 }

 const myObj2 = {...myObj, bar: false};

 

