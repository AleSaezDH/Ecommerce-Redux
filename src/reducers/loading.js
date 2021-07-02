function loadingReducer (state = true, action) {
    switch(action.type) {
        case 'loading/switch': return action.payload;

        default: return state;
    }
}

export default loadingReducer;