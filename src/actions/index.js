export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const addText = (text) => {
    return {
        type: 'ADD_TEXT',
        payload: text
    }
}
export const addMinusWord = (text) => {
    return {
        type: 'ADD_MINUS_WORD',
        payload: text
    }
}