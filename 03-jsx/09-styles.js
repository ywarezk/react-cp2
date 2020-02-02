// styles
// #9 styles are object and the object is camelcased

// <p style="font-size: 14px; color: red;">hello</p>

const p = (
    <p style={ {
        fontSize: `${Math.random()}px`,
        color: 'red'
    } }>
        hello
    </p>
)