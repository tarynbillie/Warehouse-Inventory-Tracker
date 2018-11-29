// this is the inventory list by warehouse 

import React from 'react'; 
import Inventory from './Inventory.js';

// componentDidUpdate(prevProps, prevState){
//     if(prevProps.match.params.id !==  this.props.match.params.id)
//      this.getCommentData(this.props.match.params.id);
//     }

        state = {
            warehouseInventory: []
        }

    getWarehouseItems = (id, e) => {
        if (e) e.preventDefault()
        fetch(`http://localhost:8080/warehouse${id}`)
          .then(serverAnswer => serverAnswer.json())
          .then(wrhsInv => {
            const warehouseInventory = wrhsInv
            this.setState({ warehouseInventory })
          })
          .catch(error => console.log(error))
      }

class InventoryByWarehouse extends React.Component{

    render(){
        return(
            <>  
                <Inventory wdata={this.state.warehouseInventory}/>  
            </> // closeing take to <> short form <React.Fragment> encloses and returns singular from multiple components
        )
    }
}
export default InventoryByWarehouse; 