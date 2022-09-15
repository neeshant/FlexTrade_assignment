import { combineReducers } from 'redux';
import { productReducer,modalReducer } from './productReducer';
import 'antd/dist/antd.css'; 

const reducers = combineReducers({
    allProducts: productReducer,
});

export default reducers;