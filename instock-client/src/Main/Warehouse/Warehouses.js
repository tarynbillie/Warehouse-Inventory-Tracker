import React, { Component } from 'react';
import Warehouse from './Warehouse'


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
            let allHouses=info.map((place) =>{
                return <Warehouse
                id = {place.warehouseID}
                location = {place.warehouseName}
                street= {place.street}
                city= {place.city}
                postal={place.postal}
                contactName={place.contactName}
                contactNumber={place.contactNumber}
                contactEmail={place.contactEmail}
                inventoryType={place.inventoryType}
                />

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

export default Warehouses