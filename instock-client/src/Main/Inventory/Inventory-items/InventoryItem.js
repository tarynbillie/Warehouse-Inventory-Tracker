import React from 'react';

class InventoryItem extends React.Component{
    render(){
        return(
            <tr>
                <td className='td-left'>
                    <span className='td-name'>{this.props.name}</span>
                    {this.props.desc}
                </td>
                <td>
                    {this.props.lastOrdered}
                </td>
                <td>
                    {this.props.location}
                </td>
                <td>
                    {this.props.quantity}
                </td>
                <td>
                    {this.props.status}
                </td>
                <td>
                    <div className='inventory-item__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                </td>
            </tr>
        )
    }
}

export default InventoryItem;