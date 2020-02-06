/**
 * reducer managing to part of the data
 * manage the user data in the state
 * the reducer is only intrested in the action that effect the user.action
 * reducer is a simple function
 * reducer gets in argument the state, action
 * the reducer should return the new state based on the state and the action
 * new state - only his section of the state
 * we get the part of the state which is our section
 */

import {SET_FIRSTNAME, SET_USER} from "../actions/user.actions"

const initialState = {
    firstName: 'Yariv', 
    middleName: 'NOOP',
    lastName: 'Katz'
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns {*} new state
 */
export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return action.payload;
        case SET_FIRSTNAME:
            // NO!
            // the state in redux is immutable
            // {todo: [{title: ''}]}
            // return {...state, todo: [...state.todo]}
            // state.firstName = action.payload;
            // return state
            return {...state, firstName: action.payload}
        default:
            return state;
    }
}