import React, { Component } from 'react';
import Warehouse from './Warehouse'


class Warehouses extends Component{

    state={
        warehouseInfo:[
            {
                warehouseID: 1,
                warehouseName: "Warehouse Number 1",
                street: '123 Main Street West',
                city: 'Toronto, Canada',
                postal: 'M6J 2H2',
                contactName:'Mara Weinberg, Warehouse Manager',
                contactNumber: '+1 416 678 2345',
                contactEmail: 'mweinberg@instack.com',
                inventoryType: 'Industrial, Automotive, Heavy Industry'
            },
            {
                warehouseID: 2,
                warehouseName: "Warehouse Number 2",
                street: '123 Main Street West',
                city: 'Toronto, Canada',
                postal: 'M6J 2H2',
                contactName:'Mara Weinberg, Warehouse Manager',
                contactNumber: '+1 416 678 2345',
                contactEmail: 'mweinberg@instack.com',
                inventoryType: 'Industrial, Automotive, Heavy Industry'
            },
            {
                warehouseID: 3,
                warehouseName: "Warehouse Number 3",
                street: '123 Main Street West',
                city: 'Toronto, Canada',
                postal: 'M6J 2H2',
                contactName:'Mara Weinberg, Warehouse Manager',
                contactNumber: '+1 416 678 2345',
                contactEmail: 'mweinberg@instack.com',
                inventoryType: 'Industrial, Automotive, Heavy Industry'
            },
            {
                warehouseID: 4,
                warehouseName: "Warehouse Number 4",
                street: '123 Main Street West',
                city: 'Toronto, Canada',
                postal: 'M6J 2H2',
                contactName:'Mara Weinberg, Warehouse Manager',
                contactNumber: '+1 416 678 2345',
                contactEmail: 'mweinberg@instack.com',
                inventoryType: 'Industrial, Automotive, Heavy Industry'
            },
        ]
    } 


// getWarehouses= () => {

//     let url = 'http://localhose:8080/warehouses/'

//     if(this.match){
//         if(this.match.params.id){
//             url = url + this.match.params.id;
//         }
//     }  

//     let request = fetch(url)
//     request.then((resp) => {
//         return resp.json();
//     }).then((warehouseData) =>{
//         this.setState({warehouseInfo: warehouseData});
//     }).catch((err)=>{
//         console.log('Error- ya busted',err)
//     });
// }

// componentDidMount = () => {
//     this.getWarehouses();
// }

// componentDidUpdate = () => {
//     this.getInventory();
// }


    render(){
            let Box = this.state.warehouseInfo
            .map((place) =>{
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
                { Box }
            </div>
        )
    }

}

export default Warehouses