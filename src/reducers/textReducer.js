const initialState = {
    text: [],
    minusPhrases: {
        phrases: {},
        phrase: [],
        minusPhrasesWords: []
    },
    minusWords: [],
    customMinusWords: []
};
export const textReducer = (state = initialState, action) => {
    let minusPhrases = {...state.minusPhrases}
    let minusWords = [...state.minusWords]
    switch (action.type) {
        case 'ADD_TEXT':
            return {
                ...state,
                text: action.payload
            };
        case 'ADD_PHRASE_WORD':
            if (minusPhrases.index === action.payload.index) {
                minusPhrases.phrase.push(action.payload.wordIndex)
                // return state = minusPhrases
                return {
                    ...state,
                    minusPhrases: {...minusPhrases}
                };
            } else {
                if (minusPhrases.index) {
                    if (minusPhrases.phrase.length > 1) {
                        let indexLocal = minusPhrases.index.toString()
                        if (!minusPhrases.phrases[indexLocal]) {
                            minusPhrases.phrases[indexLocal] = []
                            minusPhrases.phrases[indexLocal].push(minusPhrases.phrase)
                        } else {
                            minusPhrases.phrases[indexLocal].push(minusPhrases.phrase)
                        }
                    }
                }
                minusPhrases.phrase = []
                minusPhrases.phrase.push(action.payload.wordIndex)
                minusPhrases.index = action.payload.index
                minusPhrases.wordIndex = action.payload.wordIndex
                return {
                    ...state,
                    minusPhrases: minusPhrases
                };
            }
        case 'PUSH_PHRASE_WORD':
            if (minusPhrases.phrase.length === 1 || minusPhrases.phrase.length <= 0) {
                minusPhrases.index = null
                minusPhrases.phrase = []
                minusPhrases.wordIndex = null
                return {
                    ...state,
                    minusPhrases: minusPhrases
                }
            }

            const stringIndex = minusPhrases.index
            let neededString = []
            let neededWord = ''
            if (state.text.length) {
                neededString = state.text[stringIndex].split(' ')
                for (let i of minusPhrases.phrase) {
                    neededWord += `${neededString[i]} `
                }
                neededWord = neededWord.trim();
            }
            let minusPhrasesWordsLocal = [...minusPhrases.minusPhrasesWords]
            if (!minusPhrasesWordsLocal.includes(neededWord)) {
                minusPhrasesWordsLocal.push(neededWord)
                minusPhrases.minusPhrasesWords = minusPhrasesWordsLocal
            } else {
                minusPhrases.index = null
                minusPhrases.phrase = []
                minusPhrases.wordIndex = null
                return {
                    ...state,
                    minusPhrases: minusPhrases
                };
            }

            if (minusPhrases.phrase.length > 1) {
                let indexLocal = minusPhrases.index.toString()
                if (!minusPhrases.phrases[indexLocal]) {
                    minusPhrases.phrases[indexLocal] = []
                }
                const resultItem = {
                    string: neededWord,
                    indexes: minusPhrases.phrase
                }
                // minusPhrases.phrases[indexLocal].push(minusPhrases.phrase)
                minusPhrases.phrases[indexLocal].push(resultItem)

            }
            if (!Object.keys(minusPhrases.phrases).length) {
                return {
                    ...state,
                    minusPhrases: minusPhrases
                };
            }

            minusPhrases.index = null
            minusPhrases.phrase = []
            minusPhrases.wordIndex = null
            return {
                ...state,
                minusPhrases: minusPhrases
            };
        case 'ADD_MINUS_WORD':
            if (minusWords.includes(action.payload)) {
                return state;
            } else {
                minusWords = [...minusWords, action.payload]
            }
            return {
                ...state,
                minusWords: minusWords
            };
        case 'REMOVE_MINUS_WORD':
            if (minusWords.includes(action.payload)) {
                const index = minusWords.indexOf(action.payload)
                minusWords.splice(index, 1)
            } else {
                return state;
            }
            return {
                ...state,
                minusWords: minusWords
            };
        case 'REMOVE_PHRASE':
            minusPhrases.phrases[action.payload.stringIndex].splice(
                minusPhrases.phrases[action.payload.stringIndex].findIndex(
                    x => x.string === action.payload.phraseObj.string),
                1)
            if (!minusPhrases.phrases[action.payload.stringIndex].length) {
                delete minusPhrases.phrases[action.payload.stringIndex]
            }
            return {
                ...state,
                minusPhrases: {...minusPhrases}
            };

        default:
            return state;
    }
}
