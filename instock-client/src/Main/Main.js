import React from 'react';
import Inventory from './Inventory/Inventory';
import './main.css'
import Modal from './Warehouse/Modal';

class Main extends React.Component{

    componentDidUpdate(){
        console.log('main - updated')
    }

    render(){
        console.log('dfgdfgfd')
        return(
            <div className='main'>
                <Inventory />
            </div>
        )
    }
}

export default Main;