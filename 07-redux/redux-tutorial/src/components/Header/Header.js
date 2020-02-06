import React from "react";
import { connect } from "react-redux";
import { userInfo } from "os";

function Header({myUser}) {
    return (
        <header>
            <h1>Hello {myUser.firstName} {myUser.lastName}</h1>
        </header>
    )
}

// connect() => hoc(Header)

// const hocThatWillConnectYouToTheState = connect(function(state) {
//     return {
//         myUser: state.user
//     }
// });

// const StrongerHeader = hocThatWillConnectYouToTheState(Header)

// export default StrongerHeader;

export default connect(
    function(state) {
        return {
            myUser: state.user
        } 
    }
)(Header);