/**
 * promises
 */

// promise is a class
// promise helps us deal with async code

// promise states
// pending => resolved / rejected

// Promise<Response>
// Promise<string>
const myPromiseTimer = new Promise((resolveGal, rejected) => {
    setTimeout(() => {
        // resolveGal('hello world');
        // resolveGal(42);
        // resolveGal()
        // rejected(new Error('something happened'));
        // rejected("amiad");
    }, 1000)
});

myPromiseTimer.then(
    (msg) => {
        console.log(msg)
    },
    (err) => {
        console.log(err.message);
    }
)

myPromiseTimer.then(() => {
    
})

/**
 * @returns {Promise}
 * Promise<number>
 * rejected promise
 */
async function useTimerPromise() {
    // hello world
    try {
        const timerResult = await myPromiseTimer;
        return timerResult.length;
    } catch(err) {

    }
    
}

useTimerPromise();

