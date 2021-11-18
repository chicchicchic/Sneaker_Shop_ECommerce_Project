import Axios from "axios";
// import Cookies from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

// Nếu muốn lưu với Cookie (Server Side)
const Cookies = require('js-cookie');


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


const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    // Nếu muốn lưu với Cookie (Server Side)
    const { cart: { cartItems } } = getState();
    Cookies.set("cartItems", JSON.stringify(cartItems));

    // Nếu muốn lưu với Local Storage (Client Side)
    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export { addToCart, removeFromCart }