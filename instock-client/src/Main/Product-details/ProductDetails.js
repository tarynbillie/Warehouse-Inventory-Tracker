import React from 'react';
import './PDStyles.css';



// let inventory = [
//     {
//         productID: 1,
//         warehouseID: 'jhdsfkjhskjdh',
//         name: 'name',
//         description: '...',
//         lastOrdered: '05/24/2018',
//         orderedBy: 'Jim Bob',
//         referenceNo: 'jhdsfhk76832738223',
//         productCategory: 'Automotive',
//         quantity: 2000,
//         location: 'Toronto, ON',
//         status: 'in stock'
//     }
//  ]

 class ProductDetails extends React.Component {
     state = {  }
     render() { 
         return ( 
             <div className='ProductDetail__Page'>
                <div className='back'> ‹Back</div>
                <div className='product-box'>
                    <div className='product-box__text'>
                        <h3 className='product-box__title'>Product Name Summary</h3>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>DESCRIPTION: </p>
                            <p> Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product</p>
                        </div>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>LAST ORDERED: </p><p> 05/24/2018</p>
                        </div>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>ORDERED BY: </p>
                            <p> Mark Saunders</p>
                        </div>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>REFERENCE NUMBER: </p>
                            <p> JK2020FD7811201</p>
                        </div>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>PRODUCT CATAGORY: </p>
                            <p> Industrial, Automotive, Heavy Industry</p>
                        </div>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>QUANTITY: </p>
                            <p> 12000</p>
                        </div>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>LOCATION: </p>
                            <p> Toronto, CAN</p>
                        </div>
                        <div className='product-box__row'>
                            <p className='product-box__catagory'>STATUS:</p>
                            <p> In Stock</p>
                        </div>
                    </div>
                    <div className='new-order-button'>
                        <p className='new-order-text'>New Order</p>
                    </div>
                </div>

             </div>
          );
     }
 }
  
 export default ProductDetails;