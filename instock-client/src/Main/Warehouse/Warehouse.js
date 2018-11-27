// this is the inventory list by warehouse 

import React from 'react'; 
import TableHeadingRow from './TableHeadingRow';
import TableDataRows from './TableDataRows';

// componentDidUpdate(prevProps, prevState){
//     if(prevProps.match.params.id !==  this.props.match.params.id)
//      this.getCommentData(this.props.match.params.id);
//     }
    const id = 0001;

    getCommentData = (id, e) => {
        if (e) e.preventDefault()
        fetch(`http://localhost:8080/inventory${id}`)
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
            <TableHeadingRow/>
            <TableDataRows/>
            </> // closeing take to <> short form <React.Fragment> encloses and returns singular from multiple components
        )
    }
}
export default InventoryByWarehouse; 