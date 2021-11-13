import React, { useEffect } from "react";
import { addToCart } from "../actions/cartActions";
import { useDispatch, useSelector } from 'react-redux';


function CartScreen(props) {

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;
    const quantity = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, quantity));
        }
    }, [])

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                {
                    cartItems.length === 0 ? 
                    <div>
                        Cart is empty
                    </div>
                    :
                    cartItems.map(item => 
                        <li>
                            <div className="cart-image">
                                <img src={item.image} alt="product" />
                            </div>
                            <div className="cart-name">
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    Quantity:
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="cart-price">
                                ${item.price}
                            </div>


                        </li>    
                    )
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ( {cartItems.reduce((a, c) => a + c.quantity, 0)} items )
                :
                $ {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
            </h3>
            <button className="button primary" disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
        </div>
    </div>
}

export default CartScreen;