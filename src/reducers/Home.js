export default (state, action) => {
    const {payload} = action;
    switch (action.type) {
        case 'TEST_ADD':
            console.log({state})
            return {
                ...state,
                testWord: payload
            }
        case 'TEST_REMOVE':
            console.log({state})
            return {
                ...state,
                // savedCompetitions: payload
            }
        default:
            return {...state}
    }
};
