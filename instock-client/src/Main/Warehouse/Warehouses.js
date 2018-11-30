import React, { Component } from 'react';
import Warehouse from './Warehouse'
import Modal from './Modal';
import './warehouses.css';

export default class Warehouses extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        info: [],
        isOpen: false
    }

    showModal = () => {
        this.setState({
            isOpen: true
        });
    };

    hideModal = () => {
        this.setState({
            isOpen: false
        });
    };

    getWarehouse = () => {
        fetch('http://localhost:8080/warehouses')

        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({ info: data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getWarehouse();
    }

    componentDidUpdate () {
        this.getWarehouse();
    }


    render() {
        let info = this.state.info;
        console.log(info)
        let allHouses = info.map((place) => {
            return <Warehouse
                id={place.warehouseID}
                warehouse={place.warehouse}
                street={place.street}
                city={place.city}
                country={place.country}
                postalCode={place.postalCode}
                mgmt={place.mgmt}
                phone={place.phone}
                email={place.email}
                inventoryType={place.inventoryType}
            />
        })

        return (
            <section>
                <Modal handleClose={this.hideModal} isOpen={this.state.isOpen} />
                <div className='warehouses-page'>
                    <div className='warehouse-page__titles'>
                        <p className='location'>Locations</p>
                        <p className='filter'>Filter</p>
                    </div>
                    {allHouses}
                </div>
                <div className='modal-btn'>
                    <img src='../Assets/Icons/Plus.svg' onClick={this.showModal} />
                </div>


            </section>
        )
    }
<<<<<<< HEAD

}

export default Warehouses;
=======
}
>>>>>>> 007afa65e274a905439458fab87b71bc500ef23e
