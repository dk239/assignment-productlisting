import React from 'react'
import defaultProductImage from './Product Image - Default.jpg'
import './productDetailsPage.css'
export default function ProductDetailsPage(props) {
    const {category, name, description} = props.product
    return (
        <div className="details-containe-outer">
            <div>Product Details Page</div>
            <hr />
            <div className="details-content">
                <div className="image-container">
                    <img className="productImage" src={defaultProductImage} alt="produc name"></img>
                </div>
                <div className="details-inner">
                    <div className="lablelText">{category}</div>
                    <div className="lablelText">{name}</div>
                    <div className="lablelText">{description}</div>
                </div>
            </div>
        </div>
    )
}
