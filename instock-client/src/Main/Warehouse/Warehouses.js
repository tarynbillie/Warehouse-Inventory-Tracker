import React, { Component } from 'react';
import Modal from './Modal';
import './warehouses.css';

export default class Warehouses extends Component {
    constructor(props) {
        super(props);

    }
    state = {
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


    render() {

        return (
            <section>
                <div className='modal-btn'>
                    <img src='../Assets/Icons/Plus.svg' onClick={this.showModal} />
                </div>
                <Modal hideModal={this.hideModal} isOpen={this.state.isOpen} />
            </section>
        )
    }
}
