import React, { Component } from 'react';
import './css/appx.css';


class LoginMember extends Component {

render() {
    return (
      <>
          <div className="drp-down">
            <nav className='menu-header'>
                <img className="user-pic" src="../Assets/Icons/User.svg" alt='users avatar'/>
                <img className="drop-arrow" src='../Assets/Icons/Dropdown.svg' alt='menu open arrow'/>
                    <ul className="nav-drp">
                        <li className="uMenuitem"><a className="uItem" href="#">Profile</a></li>
                        <li className="uMenuitem"><a className="uItem" href="#">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
      </>
    )
}
}
export default LoginMember;