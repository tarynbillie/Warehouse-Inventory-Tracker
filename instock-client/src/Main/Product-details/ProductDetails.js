import React from 'react';

const cambam = 1 

inventory = [
    {
        productID: 001,
        warehouseID: 'jhdsfkjhskjdh',
        name: 'name',
        description: '...',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    }
 ]

 class ProductDetail extends Component {
     state = {  }
     render() { 
         return ( 
             <div className='ProductDetail__Page'>
                <div className='back'>Back</div>
                <div className='product-box'>
                    <div className='product-box__text'>
                        <h3 className='product-box__title'>Product Name Summary</h3>
                        <p>DESCRIPTION:</p>
                        <p>LAST ORDERED:</p>
                        <p>ORDERED BY:</p>
                        <p>REFERENCE NUMBER:</p>
                        <p>PRODUCT CATAGORY:</p>
                        <p>QUANTITY:</p>
                        <p>LOCATION:</p>
                        <p>STATUS:</p>
                    </div>
                    <div className='new-order-button'>New Order</div>

                </div>

             </div>
          );
     }
 }
  
 export default ProductDetail;