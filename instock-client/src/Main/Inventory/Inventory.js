import React from 'react';
import InventoryItem from './Inventory-items/InventoryItem';
import './inventory.css';

class Inventory extends React.Component{

    state = {
        inventory: [
            {
                productID: 1,
                warehouseID: 'jhdsfkjhskjdh',
                name: 'Socks',
                description: 'Brief product description goes here yo.',
                lastOrdered: '05/24/2018',
                orderedBy: 'Jim Bob',
                referenceNo: 'jhdsfhk76832738223',
                productCategory: 'Automotive',
                quantity: 2000,
                location: 'Toronto, ON',
                status: 'in stock'
            },
            {
                productID: 2,
                warehouseID: 'jhdsfkjhskjdh',
                name: 'Shoes',
                description: 'Brief product description goes here yo.',
                lastOrdered: '05/24/2018',
                orderedBy: 'Jim Bob',
                referenceNo: 'jhdsfhk76832738223',
                productCategory: 'Automotive',
                quantity: 2000,
                location: 'Toronto, ON',
                status: 'in stock'
            },
            {
                productID: 3,
                warehouseID: 'jhdsfkjhskjdh',
                name: 'Pants',
                description: 'Brief product description goes here yo.',
                lastOrdered: '05/24/2018',
                orderedBy: 'Jim Bob',
                referenceNo: 'jhdsfhk76832738223',
                productCategory: 'Automotive',
                quantity: 2000,
                location: 'Toronto, ON',
                status: 'in stock'
            },
            {
                productID: 4,
                warehouseID: 'jhdsfkjhskjdh',
                name: 'Shirt',
                description: 'Brief product description goes here yo.',
                lastOrdered: '05/24/2018',
                orderedBy: 'Jim Bob',
                referenceNo: 'jhdsfhk76832738223',
                productCategory: 'Automotive',
                quantity: 2000,
                location: 'Toronto, ON',
                status: 'in stock'
            },
            {
                productID: 5,
                warehouseID: 'jhdsfkjhskjdh',
                name: 'Hat',
                description: 'Brief product description goes here yo.',
                lastOrdered: '05/24/2018',
                orderedBy: 'Jim Bob',
                referenceNo: 'jhdsfhk76832738223',
                productCategory: 'Automotive',
                quantity: 2000,
                location: 'Toronto, ON',
                status: 'in stock'
            },
            {
                productID: 6,
                warehouseID: 'jhdsfkjhskjdh',
                name: 'Sweater',
                description: 'Brief product description goes here yo.',
                lastOrdered: '05/24/2018',
                orderedBy: 'Jim Bob',
                referenceNo: 'jhdsfhk76832738223',
                productCategory: 'Automotive',
                quantity: 2000,
                location: 'Toronto, ON',
                status: 'in stock'
            }
        ]
    }

    getInventory = () => {

        let url = "http://localhost:8080/inventory/"

        if(this.match){
            if(this.match.params.id){
                url = url + this.match.params.id;
            }
        }   

        let request = fetch(url)
        request.then((resp) => {
            return resp.json();
        }).then((inventoryData) => {
            this.setState({inventory: inventoryData});
        }).catch((err) => {
            console.error('Error caught: ', err)
        });
    }

    componentDidMount = () => {
        this.getInventory();
    }

    componentDidUpdate = () => {
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
                    />
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