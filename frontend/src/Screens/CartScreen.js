import React, { useEffect } from "react";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from 'react-redux';


function CartScreen(props) {

    const productId = props.match.params.id;
    const quantity = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, quantity));
        }
    }, [])

    return <div>
        Cart Screen
    </div>
}

export default CartScreen;