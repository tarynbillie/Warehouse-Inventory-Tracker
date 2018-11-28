import React from 'react';
import Inventory from './Inventory/Inventory';
import './main.css'

class Main extends React.Component{

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