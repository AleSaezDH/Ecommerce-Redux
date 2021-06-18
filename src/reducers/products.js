function productsReducer (state = [], action) {
    switch(action.type) {
        case 'products/get': return [];
        case 'products/detail': return [];
        case 'products/cart': return [];

        default: return state;
    }
}

export default productsReducer;