import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import Cookies from 'js-cookie';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
// Nếu muốn lưu với Cookie (Server Side)
const Cookies = require('js-cookie');


// Nếu muốn lưu với Cookie (Server Side)
const initialState = { cart: { cartItems: Cookies.get('cartItems')? JSON.parse(Cookies.get('cartItems')) : [] } };

// Nếu muốn lưu với Local Storage (Client Side)
// const initialState = { 
//     cart: {
//         cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []
//     } 
// };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;