import {textReducer, collectMinusReducer, addCustomMinusWordReducer, addPhraseWordReducer} from "./textReducer"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    text: textReducer,
    minusWords: collectMinusReducer,
    customMinusWords: addCustomMinusWordReducer,
    minusPhrases: addPhraseWordReducer,
})

export default allReducers
