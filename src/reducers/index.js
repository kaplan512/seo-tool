import {textReducer, collectMinusReducer, addCustomMinusWordReducer} from "./text"
import Home from './Home';
import {combineReducers} from "redux"

const allReducers = combineReducers({
    text: textReducer,
    minusWords: collectMinusReducer,
    customMinusWords: addCustomMinusWordReducer,
    home: Home
})

export default allReducers