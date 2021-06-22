function cartReducer (state = [], action) {
    switch(action.type) {
        case 'cart/addProduct': return action.payload;

        default: return state;
    }
}

export default cartReducer;