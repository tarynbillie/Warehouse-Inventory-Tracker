import React, { Component } from 'react';
import Warehouse from "./Warehouse.js";
import {Link} from 'react-router-dom';

class Warehouses extends Component{

    state={

        info:[]
    }


componentDidMount(){
    fetch('http://localhost:8080/warehouses')

    .then((response) =>{
        return response.json();
    })
    .then((data) => {   
        console.log(data)
        this.setState({info: data})
        
        })
    .catch( error => {
        console.log(error)
        })
}

    render(){
            let info = this.state.info;
            console.log(info)
            let allHouses=info.map( (place) =>{
                return (
               
                <Warehouse
                key = {place.id}
                id = {place.id}
                location = {place.warehouseName}
                street= {place.street}
                city= {place.city}
                province={place.province}
                postal={place.postal}
                contactName={place.contactName}
                contactNumber={place.contactNumber}
                contactEmail={place.contactEmail}
                inventoryType={place.inventoryType}
                />
           
            )
            })

        return(
            
            <div className='warehouses-page'>
            
                <div className='warehouse-page__titles'>
                     <p className='location'>Locations</p>
                     <p className='filter'>Filter</p>
                 </div>
                 
                { allHouses }
            </div>
        )
    }

}

export default Warehouses;