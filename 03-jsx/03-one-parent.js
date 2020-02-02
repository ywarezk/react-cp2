

// #3 jsx has to have one parent

// React.createElement()
const list = (
    <li>
        hello
    </li>
    <li>
        world
    </li>
); //bad

const list2 = (
    <ul>
        <li>hello</li>
        <li>world</li>
    </ul>
); // good

// <select><option>...</select>

// React.Fragment
const options = (
    <React.Fragment>
        <option value="1">hello</option>
        <option value="2">world</option>
        <option value="3">foo</option>
    </React.Fragment>
    
)

