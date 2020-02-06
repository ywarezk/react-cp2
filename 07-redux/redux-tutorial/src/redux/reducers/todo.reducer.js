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

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns {*} new state
 */
export default function todoReducer(state = [1], action) {
    switch(action.type) {        
        default:
            return state;
    }
}