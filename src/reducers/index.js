import {textReducer} from "./textReducer"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    textReducer: textReducer,
    // minusWords: collectMinusReducer,
    // customMinusWords: addCustomMinusWordReducer,
    // minusPhrases: addPhraseWordReducer,
})

export default allReducers
