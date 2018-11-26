import React, { Component } from 'react';
import './css/app.css';


class LoginMember extends Component {

render() {
    return (
      <>
          <div className="drp-down">
            <nav className='menu-header'>
                <img className="user-pic" src="./icons/User.svg" alt='users avatar'/>
                <img className="drop-arrow" src='./icons/Dropdown.svg' atl='menu open arrow'/>
                    <ul className="nav-drp">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
      </>
    )
}
}
export default LoginMember;