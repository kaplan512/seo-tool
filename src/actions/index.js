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
export const removeMinusWord = (text) => {
    return {
        type: 'REMOVE_MINUS_WORD',
        payload: text
    }
}
export const addCustomMinusWOrd = (word) => {
    return {
        type: 'ADD_CUSTOM_MINUS_WORD',
        payload: word
    }
}
export const addPhraseWord = (word) => {
    return {
        type: 'ADD_PHRASE_WORD',
        payload: word
    }
}

export const testWord = (word) => {
    console.log({word})
    return {
        type: 'TEST_ADD',
        payload: word
    }
}
export const testWordSec = (word) => {
    console.log({word})
    return {
        type: 'TEST_REMOVE',
        payload: word
    }
}