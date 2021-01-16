import React from 'react'
import defaultProductImage from './Product Image - Default.jpg'
export default function Product(props) {
    const {product, showProductDetails} = props

    function handleProductClick(){
        console.log(product.id)
        showProductDetails(product.id)
    }

    return (
        <div>
            <div className="productContainer" id = {product.id} key={product.id} onClick={handleProductClick}> 
                <img className="productImage" src={defaultProductImage} alt={product.name}></img>
                <div>{product.name}</div>
            </div>
        </div>
    )
}