import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

let errorMsg = '';

class Modal extends Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            warehouses: [],
            warehouse: '',
            street: '',
            city: '',
            country: '',
            postalCode: '',
            mgmt: '',
            phone: '',
            email: '',
            inventoryType: '',
            errorMsg: ''
        }
    }

    state = {
        isOpen: false
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    

    formSubmit = (e) => {
        e.preventDefault();
        if (this.state.warehouse.trim() === '' || this.state.street === '' || this.state.city === '' || this.state.country === '' || this.state.postalCode === ''
            || this.state.mgmt === '' || this.state.phone === '' || this.state.email === '' || this.state.inventoryType === '' ) {
            console.log(this.state.inventoryType)
            this.setState({
                errorMsg: 'All inputs are required'
            })
        }else {
            let newWarehouse = {
                warehouse: this.state.warehouse,
                street: this.state.street,
                city: this.state.city,
                country: this.state.country,
                postalCode: this.state.postalCode,
                mgmt: this.state.mgmt,
                phone: this.state.phone,
                email: this.state.email,
                inventoryType: this.state.inventoryType,
            }

            const init = {
                method: 'POST',
                body: JSON.stringify(newWarehouse),
                headers: {
                  'content-type': 'application/json'
                }
              };
            fetch('http://localhost:8080/warehouses', init)
            .then(() => {
                this.props.hideModal();
            })

        }

    }


    formReset() {
        this.setState({
            warehouse: '',
            street: '',
            city: '',
            country: '',
            postalCode: '',
            mgmt: '',
            phone: '',
            email: '',
            inventoryType: ''
        })
    }

    render() {
        return (
            <div style={{ ...flex, display: this.props.isOpen ? 'flex' : 'none' }}>
                {/* <div className='modal-layer' onClick={this.props.handleClose} style={modalLayer}></div> */}
                <div className="form-container" style={formModal}>
                    <div className='inside-container'>
                        <div className='inside-container__top'>
                            <h1>Add a new storage location</h1>
                            <div className='close' onClick={this.props.hideModal}>
                                <img src='../Assets/Icons/Close.svg' />
                                <p>CLOSE</p>
                            </div>
                        </div>
                        <form onSubmit={this.formSubmit}>
                            <label>
                                Warehouse Name
                            <input type='text' name='warehouse' placeholder='Michael Scott Paper Co.' value={this.state.warehouse} onChange={this.handleChange}></input>
                            </label>
                            <div className='information'>
                                <div className='information__first'>
                                    <h4>Address</h4>
                                    <label>
                                        Street Number &amp; Name
                                <input type='text' name='street' placeholder='460 King St. West' value={this.state.street} onChange={this.handleChange}></input>
                                    </label>
                                    <label>
                                        City
                                <input type='text' name='city' placeholder='Toronto, ON' value={this.state.city} onChange={this.handleChange}></input>
                                    </label>
                                    <label>
                                        Country
                                <select type='text' name='country' value={this.state.country} onChange={this.handleChange}>
                                            <option value=''>Select Country</option>
                                            <option>Canada</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                        </select>
                                    </label>
                                    <label>
                                        Postal Code
                                <input type='text' name='postalCode' placeholder='M5V 1L7' value={this.state.postalCode} onChange={this.handleChange}></input>
                                    </label>
                                </div>
                                <div className='information__second'>
                                    <h4>Contact Information</h4>
                                    <label>
                                        Warehouse Manager's Name
                                <input type='text' name='mgmt' placeholder='Michael Scott' value={this.state.mgmt} onChange={this.handleChange}></input>
                                    </label>
                                    <label>
                                        Phone Number
                                <input type='text' name='phone' placeholder='1-800-903-5159' value={this.state.phone} onChange={this.handleChange}></input>
                                    </label>
                                    <label>
                                        Email Address
                                <input type='text' name='email' placeholder='michaelscott@paper.co' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' value={this.state.email} onChange={this.handleChange}></input>
                                    </label>
                                    <label>
                                        Inventory type
                                <select name='inventoryType' value={this.state.inventoryType} onChange={this.handleChange}>
                                            <option value=''>Select Type</option>
                                            <option>Type 1</option>
                                            <option>Type 2</option>
                                            <option>Type 3</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className='error'> {this.state.errorMsg} </div>
                            <div className='btn'>
                                <button type='submit'>Save Location</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    // handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Modal;

const flex = {
    // position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: 'rgba(57,57,57,0.6)',
};

// const modalLayer = {
//     position: 'fixed',
//     width: '100vw',
//     height: '100vh',
//     zIndex: 1,
//     backgroundColor: 'transparent'
// };

const formModal = {
    position: 'absolute',
    color: 'rgb(57,57,57)',
    backgroundColor: '#FFFFFF',
    width: '700px',
    maxWidth: '100%',
    height: '700px',
    maxHeight: '100%',
    zIndex: 2,
    borderRadius: '3px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
};