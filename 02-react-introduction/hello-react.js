/**
 * how hello world will look with react
 */

/** 
<h1>
    <span>
        <u>        
            hello world from react with underline
        </u>
    </span>
</h1>
*/

// JSX
// const h1 = React.createElement(
//     "h1", 
//     null, 
//     React.createElement(
//         "span", 
//         null,
//         React.createElement(
//             "u",
//             null,
//             "hello world from react with underline"
//         )
//     )
// );

// const h1 = (
//     <h1>
//         <span>
//             <u>
//                 hello world with jsx
//             </u>
//         </span>
//     </h1>
// );

function Hello() {
    return (
        <h1>
            <span>
                <u>
                     hello world with jsx
             </u>
            </span>
        </h1>
    )
}

function Header() {
    return (
        <header>Im a header</header>
    )
}

function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>

                    </li>
                </ul>
            </nav>
        </footer> 
    )
}

function Login() {
    return (
        <form>
            <input />
        </form>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Login />
            <Footer />
        </div>
    )
}



const container = document.getElementById('container');
ReactDOM.render(<App />, container);