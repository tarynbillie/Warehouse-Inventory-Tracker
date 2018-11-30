import React from 'react';
import './PDStyles.css';
import {Link} from 'react-router-dom';

 class ProductDetails extends React.Component {
     
    state = { 

        isLoading: true,
        productItem: {}

      }

      componentDidMount = () =>{
          this.getProductdetails(this.props.match.params.id);
      }
      getProductdetails = (productID) => {
       
        fetch(`http://localhost:8080/inventory/${productID}`)
          .then(serverAnswer => serverAnswer.json())
          .then(prodItem => {
            const productItem = prodItem
            console.log(productItem);
            this.setState({ productItem: productItem, isLoading: false })
            console.log(this.state)
          })
          .catch(error => console.log(error))
      }

     
     render() { 
        console.log("now")
        if(this.state.isLoading === true){
            return( 
            <div>
                <p> is loading</p>
            </div>)
        }
        else {
         return ( 
            
            
                <div className='ProductDetail__Page'>
                    <div className='back'> ‹Back</div>
                    <div className='product-box'>
                        <div className='product-box__text'>
                            <h3 className='product-box__title'>Product Name Summary</h3>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>DESCRIPTION: </p>
                                <p>{this.state.productItem.description}</p>
                            </div>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>LAST ORDERED:</p>
                                <p>{this.state.productItem.lastOrdered}</p>
                            </div>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>ORDERED BY: </p>
                                <p>{this.state.productItem.orderedBy}</p>
                            </div>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>REFERENCE NUMBER: </p>
                                <p> {this.state.productItem.referenceNo}</p>
                            </div>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>PRODUCT CATAGORY: </p>
                                <p>{this.state.productItem.productCategory}</p>
                            </div>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>QUANTITY: </p>
                                <p>{this.state.productItem.quantity}</p>
                            </div>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>LOCATION: </p>
                                <p>{this.state.productItem.location}</p>
                            </div>
                            <div className='product-box__row'>
                                <p className='product-box__catagory'>STATUS:</p>
                                <p>{this.state.productItem.status}</p>
                            </div>
                        </div>
                        <div className='new-order-button'>
                            <p className='new-order-text'>New Order</p>
                        </div>
                    </div>
                </div>
  
          );}
     }
 }
  
 export default ProductDetails;