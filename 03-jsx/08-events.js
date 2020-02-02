// #8 Events

// <button onclick="sayHello">click me</button>

function sayHello(msg, event) {
    console.log(msg)
}

const button = (
    <button onClick={(event) => sayHello('hello', event)}>
        click me
    </button>
)