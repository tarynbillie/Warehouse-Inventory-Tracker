import React from 'react';
import InventoryItem from './Inventory-items/InventoryItem';
import Warehouse from './Warehouse/Warehouse.js';
import './inventory.css';

let baseUrl = 'http://localhost:8080/';

class Inventory extends React.Component{

    state = {

        inventory: []
    }

    getInventory = () => {

        let url = baseUrl + "inventory/"

        fetch(url)
        .then((resp) => {
            return resp.json();
        }).then((inventoryData) => {
            this.setState({inventory: inventoryData});
        }).catch((err) => {
            console.error('Caught error: ', err)
        });
    }

    deleteItem = (event) => {
        fetch(baseUrl + 'inventory/deleteItem/' + event.target.id, {
            method: 'DELETE'
        })
        .then((resp) => {
            return resp.json();
        })
        .then((msg) => {
            console.log(msg.msg);
            this.getInventory();
        })
        .catch((err) => {
            console.error('Caught error: ' + err);
        })
    }

    componentDidMount = () => {
        this.getInventory();
    }

    render(){
        if(this.state.inventory){
            let rows = this.state.inventory
                .map((item) => {
                    return <InventoryItem 
                    key = {item.productID}
                    id = {item.productID}
                    name = {item.name}
                    desc = {item.description}
                    lastOrdered = {item.lastOrdered}
                    location = {item.location}
                    quantity = {item.quantity}
                    status = {item.status}
                    delete = {this.deleteItem}/>
                });
            return(
                <div className='inventory-main'>
                    <div className='inventory-title'>
                        <span>Inventory</span>
                    </div>
                    <div className='inventory-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='td-left'>
                                        ITEM
                                    </th>
                                    <th>
                                        LAST ORDERED
                                    </th>
                                    <th>
                                        LOCATION
                                    </th>
                                    <th>
                                        QUANTITY
                                    </th>
                                    <th>
                                        STATUS
                                    </th>
                                    <th>
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            { rows }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <p>L O A D I N G ......</p>
                </div>
            )
        }
    }
}

export default Inventory;