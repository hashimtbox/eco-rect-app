import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const Products = () => {
    const {category} = useParams()

    //const {productsByCategory} = useSelector(state => state.products)

    useEffect(()=> {
    // dispatch(fetchProductsByCategory())
    }, [])

    return (
        <h1>Products Page for {category}</h1>
    )
}

export default Products