/**
 * redux manage our data
 * components can set the data
 * components can subscribe to certain data change (sog shell publish subscribe)
 * data redux holds in an object called store
 * redux has a single store
 * 
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import masterReducer from "./reducers";

const store = createStore(
    masterReducer, 
    process.env.NODE_ENV === "development" && composeWithDevTools()
);

export default store;