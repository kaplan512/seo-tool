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
    console.log({text})
    return {
        type: 'ADD_MINUS_WORD',
        payload: text
    }
}
export const removeMinusWord = (text) => {
    console.log({text})
    return {
        type: 'REMOVE_MINUS_WORD',
        payload: text
    }
}