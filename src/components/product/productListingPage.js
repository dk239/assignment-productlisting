import React, { Component } from 'react'
// import defaultProductImage from './Product Image - Default.jpg'
import './productListing.css'
import {getApiCall} from '../../utilities/servicesUtility'
import ProductCategories from './productCategories'
import ProductDetailsPage from './productDetailsPage'

class ProductListingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoriesList: null,
            selectedValue: null,
            productList:null,
            isProductsLoading: false,
            showProductDetailsPage: false,
            product:null
        }
    }

    
    componentDidMount(){
        this.getCategoriesList() 
    }

    async getCategoriesList() {
        let categoriesList = await getApiCall('categories')
        let selectedValue = categoriesList[0].id
        this.getProductList(selectedValue)
        this.setState({categoriesList: categoriesList,
            selectedValue: selectedValue,
            isProductsLoading: true
        })
        
    }

     async getProductList(selectedCategory) {
        let productList = await getApiCall(`products?categoryId=${selectedCategory}`)
        this.setState({
            productList: productList,
            isProductsLoading: false
        })
    }

    async getProductDetails(productId) {
        let productResponse = await getApiCall(`products?id=${productId}`)
        // console.log("Retrieve productResponse", productResponse)
        let {name} = productResponse[0]
        let category = this.state.categoriesList.find(category=>category.id === productResponse[0].categoryId).name
        // console.log("Retrieve category", category)
        let product = {
            name,
            category
        }
        // console.log("Retrieve product details", product)
        this.setState({
            product:product,
            showProductDetailsPage: true
        })
    }

    handleCategoryChange = (category)=>{ 
        this.getProductList(category)
        this.setState({
            selectedValue: category,
            isProductsLoading: true
        })
    }

    showProductDetails = (productID)=> {
        this.getProductDetails(productID)
    }

   renderProductCategoryListings() {
        return   this.state.categoriesList 
        ? (<ProductCategories 
            categoriesList= {this.state.categoriesList}
            selectedCategory={this.state.selectedValue}
            handleChange = {this.handleCategoryChange}
            productList = {this.state.productList}
            isProductsLoading = {this.state.isProductsLoading}
            showProductDetails = {this.showProductDetails}
        /> )
        : (<div>Loading Categories</div>)
    }

    render() {
        return (
            <div>
                {
                    this.state.showProductDetailsPage
                    ? <ProductDetailsPage 
                        product= {this.state.product}
                    />
                    : this.renderProductCategoryListings()
                }    
            </div>
        )
    }
}

export default ProductListingPage