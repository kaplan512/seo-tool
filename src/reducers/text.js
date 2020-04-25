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

export const addPhraseWordReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PHRASE_WORD':
            return state = action.payload;
        default:
            return state;
    }
}

// export default {textReducer, collectMinusReducer}