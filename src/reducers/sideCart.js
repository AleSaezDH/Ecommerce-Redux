function sideCartReducer (state = false, action) {
    switch(action.type) {
        case 'sideCart/visibility': return action.payload;

        default: return state;
    }
}

export default sideCartReducer;