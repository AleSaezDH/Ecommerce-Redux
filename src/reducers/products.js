function productsReducer (state = [], action) {
    switch(action.type) {
        case 'products/get': return [action.payload];

        default: return state;
    }
}

export default productsReducer;