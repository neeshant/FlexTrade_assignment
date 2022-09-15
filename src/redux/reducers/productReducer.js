import { ActionTypes } from "../content/action-types";

const initialState = {
    products: [],
    
}




export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.REMOVE_PRODUCT:
            return {
                 products:  state.products.filter((obj) => obj.id !== payload) 
            };
        case ActionTypes.EDIT_PRODUCT:
            return {
                ...state, products: state.products.map((res) => {
                    if (res.id == payload.id)
                    {
                        res.name = payload.name
                    }
                    return res;
                })
            };
        default:
            return state;
    }
}