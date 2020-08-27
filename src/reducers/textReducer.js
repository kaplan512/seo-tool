export const textReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return state = action.payload;
        default:
            return state;
    }
}

export const collectMinusReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MINUS_WORD':
            if (state.includes(action.payload)) {
                return state;
            } else {
                state = [...state, action.payload]
            }
            return state;
        case 'REMOVE_MINUS_WORD':
            if (state.includes(action.payload)) {
                let copy = [...state]
                const index = state.indexOf(action.payload)
                copy.splice(index, 1)
                state = [...copy]
            } else {
                return state;
            }
            return state;
        default:
            return state;
    }
}

export const addCustomMinusWordReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CUSTOM_MINUS_WORD':
            return state = action.payload;
        default:
            return state;
    }
}

export const addPhraseWordReducer = (state = {}, action) => {
    let copy = {...state}
    if (!copy.phrases) {
        copy.phrases = {}
    }
    if (!copy.phrase) {
        copy.phrase = []
    }
    switch (action.type) {
        case 'ADD_PHRASE_WORD':
            if (copy.index === action.payload.index) {
                copy.phrase.push(action.payload.wordIndex)
                return state = copy
            } else {
                if (copy.index) {
                    if (copy.phrase.length > 1) {
                        let indexLocal = copy.index.toString()
                        if (!copy.phrases[indexLocal]) {
                            copy.phrases[indexLocal] = []
                            copy.phrases[indexLocal].push(copy.phrase)
                        } else {
                            copy.phrases[indexLocal].push(copy.phrase)
                        }
                    }
                }
                copy.phrase = []
                copy.phrase.push(action.payload.wordIndex)
                copy.index = action.payload.index
                copy.wordIndex = action.payload.wordIndex
                return state = copy
            }
        case 'PUSH_PHRASE_WORD':
            if (copy.phrase.length > 1) {
                let indexLocal = copy.index.toString()
                console.log('copy phrase', copy.phrase)
                if (!copy.phrases[indexLocal]) {
                    copy.phrases[indexLocal] = []
                    copy.phrases[indexLocal].push(copy.phrase)
                } else {
                    copy.phrases[indexLocal].push(copy.phrase)
                }
            }
            copy.index = null
            copy.phrase = []
            copy.wordIndex = null
            return state = copy
        default:
            return state = copy;
    }
}

// export default {textReducer, collectMinusReducer}
