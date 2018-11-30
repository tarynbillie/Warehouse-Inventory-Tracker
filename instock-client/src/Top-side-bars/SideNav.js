import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Inventory from '../Inventory/Inventory';
// import Warehouses from '../Warehouses'; 
// import Users from './Users'; 
import './css/appx.css';

class SideNav extends Component {

    render() {
        return (
          <>
              <div className="side-nav-bar">
                <div className='side-nav-header-image'>
                    <img src="/Assets/Wordmark/Wordmark.svg" alt='company logo'/>
                </div>
                <Router>
                    <div className='menu-options'>
                        <Link to={'/inventory'} className='mnu-grp'>
                            <div className="side-menu-option">
                                <img src='../Assets/Icons/inventory.svg' alt="clip board" className='menu-icon'/>
                                <p className="opt">Inventory</p>
                            </div>
                        </Link>
                        <Link to={`/warehouses`} className='mnu-grp'>
                            <div className="side-menu-option">
                                <img src='../Assets/Icons/location.svg' alt="folded map" className='menu-icon'/>
                                <p className='opt'>Locations</p>
                            </div>
                        </Link>
                        <Link to={'/users'} className='mnu-grp'>
                            <div className="side-menu-option">
                                <img src='../Assets/Icons/user.svg' alt="people identifier" className='menu-icon'/>
                                <p className='opt'>Users</p>
                            </div>
                        </Link>
                        <p className='version'>Version 1.0</p>
                    </div>
                </Router>
              </div>
          </>
        )
}
}
export default SideNav;