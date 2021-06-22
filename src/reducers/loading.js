function loadingReducer (state = [], action) {
    switch(action.type) {
        case 'loading/sitch': return [action.payload];

        default: return state;
    }
}

export default loadingReducer;