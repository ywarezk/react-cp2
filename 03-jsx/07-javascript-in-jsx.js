// #7 javascript inside jsx

function sayHello() {
    return 'hello world'
}

const h1 = (
    <h1>{sayHello()}</h1>
)

// can i put any javascript code?
// no

// ask yourself where the javascript expression resides
// 1. if between open and closing tags
// 2. if in attribute

const p = (
    <p className={Math.random() > 0.5 ? "high" : "low"}>

    </p>
)


// if js between tags than:

// number
// string
// falsey => false, undefined, null, ""
// true => prints nothing
// JSX / React Component
// array = [42, 'hello', false, true, <h1>stam</h1>]

function myBoolean() {
    return true;
}

const h2 = (
    <h2>
        {/* if (myBoolean() === true) print 'this is true' else print nothing */}
        {myBoolean() && 'this is true'}
        {myBoolean() || 'this is false'}
        {myBoolean() ? 'this is true' : 'this is false'}
    </h2>
)

const h3 = (
    <h1>
        {
            myBoolean() ? (
                <div>
                    <span> hello world</span>
                    <Hello></Hello>    
                </div>
            ) : (
                <span>
                    stam text
                </span>
            )
        }
    </h1>
)


const myArray = [
    <li>hello</li>,
    <li>world</li>
]

const list = (
    <ul>
        {
            myArray    
        }
    </ul>
)

// function useIf() {
//     if ()...
// }

const notGood = (
    <h1>
        {
            (() => {
                if (myBoolean()){
                    return <span>YES!</span>
                } else {
                    return <span>NO!</span>
                }
            })()
            
        }
    </h1>
)

// todo.forEach((singleTodo) => {})
// todo.map((singleTodo) => )
const todo = [
    "buy tofu",
    "walk with Piglet & Sweetness",
    "buy soya milk"
];

// [1, 3, 2]
// [<li>buy tofu</li>, <li>...</li>]

const newArrayOfLi = todo.map((strTodo) => {
    return <li>{strTodo}</li>
})

// key should be the pk from the database
// if no pk then the number of iteration in map
const todoList = (
    <ul>
        {
            newArrayOfLi
        }
        {
            todo.map((strTodo, index) => {
                return <li key={index}>{strTodo}</li>
            })
        }
    </ul>
)


// what js can i put between attribute
// what the attribute expects to get

const h5 = (
    <h5 className={"hello world"}>

    </h5> 
)