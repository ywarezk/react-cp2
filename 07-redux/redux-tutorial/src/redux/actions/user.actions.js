/**
 * action - describes what happened in our app
 * action is a simple object
 * {type: "SET USER", payload: {firstName: '', lastName: ''}}
 * action creator
 */

export const SET_USER = "[user] Set User"
export const SET_FIRSTNAME = "[user] Set First Name"

export function setUser(newUser) {
    return {
        type: SET_USER,
        payload: newUser
    }
}

export function setFirstName(newName) {
    return {
        type: SET_FIRSTNAME,
        payload: newName
    }
}


