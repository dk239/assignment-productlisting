import React, { Component } from 'react'
import Product from './product'
// import {getApiCall} from '../../utilities/servicesUtility'
// import ProductContainer from './product'
export default class ProductCategories extends Component {
    constructor(props){
        super(props)
        this.state= {
            // selectedCategory: ''
        }
    }


    // async getProductList() {
    //     let productList = await getApiCall(`products?categoryId=${this.props.selectedCategory}`)
    //     this.setState({productList: productList})
    // }

    handleCategoryChange = (e)=> {
        e.preventDefault()
        // this.setState({selectedCategory: e.target.value})
        this.props.handleChange(e.target.value)
    }
    render() {
        return (<>
            <div>  
                <div>Category</div>
                <select value={this.props.selectedCategory} onChange = {this.handleCategoryChange}>
                   { 
                        this.props.categoriesList.map(category=>
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    }
                </select>
            </div>
            <hr/>
            {!this.props.isProductsLoading && this.props.productList 
            ? (<div className="productListContainer">
                {
                    this.props.productList.map(productDetails => 
                        (<Product
                            product= {productDetails}
                            key={productDetails.id}
                            showProductDetails = {this.props.showProductDetails}
                        />)
                    )
                }
            </div>)
            :(<div>Loading Products</div>)}
            </>
        )
    }
}
