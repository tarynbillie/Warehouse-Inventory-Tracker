import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Inventory from './Inventory';
// import Locations from './Locations'; 
// import Users from './Users'; 
import './css/appx.css';

class SideNav extends Component {

    render() {
        return (
          <>
              <div className="side-nav-bar">
                <div className='side-nav-header-image'>
                    <img src="./Assets/Wordmark/Wordmark.svg" alt='company logo'/>
                </div>
                <div className='menu-options'>
                    <Link to={'/inventory'}> Inventory </Link>
                    <Link to={'/warehouses'}> Warehouse </Link>
                    <p className='version'>Version 1.0</p>
                    </div>
              </div>
          </>
        )
}
}
export default SideNav;