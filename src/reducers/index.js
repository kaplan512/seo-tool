import counterReducer from "./counter"
import loggedReducer from "./islogged"
import {textReducer, collectMinusReducer} from "./text"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    counter: counterReducer,
    loggedReducer,
    text: textReducer,
    minusWords: collectMinusReducer
})

export default allReducers