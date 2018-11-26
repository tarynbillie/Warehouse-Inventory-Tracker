import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import './css/appx.css';

class SideNav extends Component {

    render() {
        return (
          <>
              <div className="side-nav-bar">
                <div className='side-nav-header-image'>
                    <img src="./WordMark/Wordmark.svg" alt='company logo'/>
                </div>
                <Router>
                    <div className='menu-options'>
                        <Link to={'/inventory'} className='mnu-grp'>
       
                                <img src='./icons/inventory.svg' alt="clip board" className='menu-icon'/>
                                <p className="opt">Inventory</p>
                          
                        </Link>
                        <Link to={'/location'} className='mnu-grp'>
                           
                                <img src='./icons/location.svg' alt="folded map" className='menu-icon'/>
                                <p className='opt'>Locations</p>
                          
                        </Link>
                        <Link to={'/users'} className='mnu-grp'>
               
                                <img src='./icons/user.svg' alt="people identifier" className='menu-icon'/>
                                <p className='opt'>Users</p>
                          
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