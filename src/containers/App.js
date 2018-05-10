import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';
import ProductsTable from '../components/ProductsTable.jsx'
import { getProducts } from '../api_calls.js'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: [], // where all products in the seed will be after fetching them
      loading: true, // it will become false after I have the products fetched
      filteredProducts: [], // products filtered according to the search bar input
    }
    // binding the "this" so that I can pass the functions as props for other components and still execute them properly
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.filterProducts = this.filterProducts.bind(this)
  }

  // calls the API call to get all products, set them in the state and set loading to false.
  fetchProducts(){
    getProducts()
    .then( res => {
      this.setState({ products: res.data, loading: false, filteredProducts: res.data })
    })
  }

  // takes the input from the search bar of the Navbar and looks for matches within the products array in the state and return them. Not case sensitive.
  filterProducts(input){
    return this.state.products.filter(product => product.name.toLowerCase().includes(input))
  }

  // when changes on the input of the search bar happen, filteredProducts is called to look for matches with the current value of the input. The returned result is set in the state as filteredProducts.
  handleSearchInput(event){
    event.preventDefault()
    let searchedProducts = this.filterProducts(event.target.value)
    this.setState({ filteredProducts: searchedProducts })
  }
  
  // fetching all products when the component is mounted
  componentDidMount() {
    this.fetchProducts()
  }

  render(){
    return (
      <div>
        <Navbar // the function to handle changes in the input of the search bar is passed as props to the Navbar component
          handleSearchInput ={this.handleSearchInput}
        />
        <ProductsTable // all products (at first) and the filtered products are passed as props to the ProductsTable component to display them along with the value of loading.
          products ={this.state.filteredProducts}
          loading ={this.state.loading}
        />
      </div>
    )
  }
}

