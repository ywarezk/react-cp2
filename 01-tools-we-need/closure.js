/**
 * closure
 * what variables i can access
 */

function timer(t = 1000) {
    var message = `hello ${t}`


    setTimeout(() => {
        console.log(message);
    }, t)
};

timer();
timer(2000);
