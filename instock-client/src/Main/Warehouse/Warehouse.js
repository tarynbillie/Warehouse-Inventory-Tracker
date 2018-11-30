import React, { Component } from 'react';
import './Warehouse.css'
import {Link} from 'react-router-dom';


class Warehouse extends Component {
 

    render() { 
        return ( 
            <div className='warehouse-block'>
             <Link to={'/warehouse/'+this.props.id} key={this.props.id}>
                <div className='warehouse-name'>{this.props.location}</div>
                </Link>
                <div className='warehouse-name'>{this.props.warehouse}</div>
                <div className='warehouse__info-block'>
                    <div className='address-block'>
                        <p className='address-block__title'>ADDRESS</p>
                        <p>{this.props.street}<br/>
                            {this.props.city} <br/>
                            {this.props.country} <br/>
                            {this.props.postalCode}
                        </p>
                    </div>
                    <div className='contact-block'>
                        <p className='contact-block__title'>CONTACT</p>
                        <p>{this.props.mgmt}<br/>
                            {this.props.phone}<br/>
                            {this.props.email}
                        </p>
                    </div>
                    <div className='inventory-block'>
                        <p className='inventory-block__title'>INVENTORY TYPE:</p>
                        <p>{this.props.inventoryType}</p>

                    </div>

                </div>

            </div>
            
         );
    }
}
 
export default Warehouse;