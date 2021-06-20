function productsReducer (state = [], action) {
    switch(action.type) {
        case 'products/get': return [action.payload];
        case 'products/detail': return [];
        case 'products/cart': return [];

        default: return state;
    }
}

export default productsReducer;