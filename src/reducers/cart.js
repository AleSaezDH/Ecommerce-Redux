function cartReducer (state = [], action) {
    switch(action.type) {
        case 'cart/addProduct': return action.payload;
        case 'cart/empty': return [];

        default: return state;
    }
}

export default cartReducer;