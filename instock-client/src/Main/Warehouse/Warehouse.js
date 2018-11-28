import React, { Component } from 'react';
import './Warehouse.css'


class Warehouse extends Component {
 

    render() { 
        return ( 
            <div className='warehouse-block'>
                <div className='warehouse-name'>Warehouse Number 1</div>
                <div className='warehouse__info-block'>
                    <div className='address-block'>
                        <p className='address-block__title'>ADDRESS</p>
                        <p>{this.props.street}<br/>
                            {this.props.city} <br/>
                            {this.props.postal}
                        </p>
                    </div>
                    <div className='contact-block'>
                        <p className='contact-block__title'>CONTACT</p>
                        <p>{this.props.contactName}<br/>
                            {this.props.contactNumber}<br/>
                            {this.props.contactEmail}
                        </p>
                    </div>
                    <div className='inventory-block'>
                        <p className='inventory-block__title'>INVENTOPRY TYPE:</p>
                        <p>{this.props.inventoryType}</p>

                    </div>

                </div>

            </div>
            
         );
    }
}
 
export default Warehouse;