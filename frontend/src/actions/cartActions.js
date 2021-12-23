import Axios from "axios";
// import Cookies from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../constants/cartConstants";

// Nếu muốn lưu với Cookie (Server Side)
const Cookies = require('js-cookie');


// Add product into the Cart
const addToCart = (productId, quantity) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                quantity
            }
        }); 

        // Nếu muốn lưu với Cookie (Server Side)
        const { cart: { cartItems } } = getState();
        Cookies.set("cartItems", JSON.stringify(cartItems));

        // Nếu muốn lưu với Local Storage (Client Side)
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        
    }
}

// Remove product from cart
const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    // Nếu muốn lưu với Cookie (Server Side)
    const { cart: { cartItems } } = getState();
    Cookies.set("cartItems", JSON.stringify(cartItems));

    // Nếu muốn lưu với Local Storage (Client Side)
    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}


// Save shipping
const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}

// Save payment
const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data });
}

export { addToCart, removeFromCart, saveShipping, savePayment }