export const textReducer = (state = '', action) => {
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
        default:
            return state;
    }
}

// export default {textReducer, collectMinusReducer}