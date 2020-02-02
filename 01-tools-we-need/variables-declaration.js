/**
 * how do i define variable in JS?
 */

 var message = "hello";

 let newMessage = 'world';

 const anotherMessage = `foo bar`;



 // what the difference ?

 // number of assignments
 // scope

 // anotherMessage = 10; // Error!

 function sayHello(stamBoolean) {

     if (stamBoolean) {
        var myNumber = 42;
        // let myNumber = 42;
     }
     console.log(myNumber);
 }


//  sayHello(true);

sayHello(false);