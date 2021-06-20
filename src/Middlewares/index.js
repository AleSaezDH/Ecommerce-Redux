const fetchApi = (offset = 0, limit = 100) => {
    return fetch(`https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung&offset=${offset}&limit=${limit}`)
    .then(response => response.json())
    .then(data => {
        let products = data.results

        // adding price to data object
        let finalProduct = products.map(data => {
            let value = Math.floor(Math.random()*100000);
            let product = data;
            product.price = value;
            return product;
        });
        data.results = finalProduct;
        return data;
    });
}

export const getAllProducts = (offset) => {
    return (dispatch) => {
        try {
            fetchApi(offset, 20).then(data => {
                dispatch({type: 'products/get', payload: data});
            });
        } catch (error) {
            console.log(error);
        }
    }
    }

export const getCategory = (category, subcategory, value, offset) => {
    return (dispatch) => {
        if (category === 'memory') {
            if (subcategory === 'ram') {
                dispatch(getRamMemoryCategory(subcategory, value, offset));
            } else if (subcategory === 'internal') {
                dispatch(getInternalMemoryCategory(subcategory, value, offset));
            }
        } else if (category === 'camera') {
            dispatch(getCameraCategory(subcategory, value, offset));
        } else if (category === 'protection') {
            dispatch(getProtectionCategory(subcategory, value, offset));
        }
    }
}

export const getRamMemoryCategory = (subcategory, value, offset) => {
    return async (dispatch) => {
        try {
            fetchApi().then(response => {
                let attributes = response.results.filter(product => {
                    return product.attributes.find(data => data.id == subcategory.toUpperCase() && data.value_name == `${value} GB` );
                });
                response.results = attributes;
                dispatch({type: 'products/get', payload: response});
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getInternalMemoryCategory = (subcategory, value, offset) => {
    return async (dispatch) => {
        try {
            fetchApi().then(response => {
                let attributes = response.results.filter(product => {
                    let finalSubcategory = `${subcategory}_memory`
                    return product.attributes.find(data => data.id == finalSubcategory.toUpperCase() && data.value_name == `${value} GB` );
                });
                response.results = attributes;
                dispatch({type: 'products/get', payload: response});
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCameraCategory = (subcategory, value, offset) => {
    return async (dispatch) => {
        try {
            fetchApi().then(response => {
                let attributes = response.results.filter(product => {
                    let finalSubcategory = `${subcategory}_rear_camera_resolution`
                    return product.attributes.find(data => data.id == finalSubcategory.toUpperCase() && data.value_name == `${value} Mpx` );
                });
                response.results = attributes;
                dispatch({type: 'products/get', payload: response});
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProtectionCategory = (subcategory, value, offset) => {
    return async (dispatch) => {
        try {
            fetchApi().then(response => {
                let attributes = response.results.filter(product => {
                    let finalSubcategory = `is_${subcategory}`
                    value = 'Sí';
                    return product.attributes.find(data => data.id == finalSubcategory.toUpperCase() && data.value_name == `${value}` );
                });
                response.results = attributes;
                dispatch({type: 'products/get', payload: response});
            });
        } catch (error) {
            console.log(error);
        }
    }
}