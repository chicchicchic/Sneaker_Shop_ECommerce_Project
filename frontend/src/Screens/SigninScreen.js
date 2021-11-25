import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';


function SigninScreen (props) {
    const [quantity, setQuantity] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();


    useEffect(() => {
        
        return () => {
            //
        };
    }, []);



    return 


export default SigninScreen;