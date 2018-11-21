import React from 'react';
import InventoryItem from './InventoryItem';

class Inventory extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <InventoryItem />
                </table>
            </div>
        )
    }
}

export default Inventory;