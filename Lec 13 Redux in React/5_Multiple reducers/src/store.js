const redux = require("redux");

// import counter reducer function here
const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");
// combine the reducer functions here
const combineReducer = redux.combineReducers({ timerReducer, counterReducer });
// add the root reducer function to store here
export const store = redux.createStore(combineReducer);
