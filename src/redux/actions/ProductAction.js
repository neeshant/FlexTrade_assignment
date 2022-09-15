import { ActionTypes } from "../content/action-types"
export const SetProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
}

export const editProduct = (id,name) => {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        payload: {id:id,name:name},
    };
};

export const removeProduct = (products) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: products,
    };
};