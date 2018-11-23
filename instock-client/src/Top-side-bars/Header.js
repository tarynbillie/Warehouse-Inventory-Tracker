import React, { Component } from 'react';
import LoginMember from './LoginMember'; 
import './css/app.css';

class Header extends Component {

    render() {
        return (
          <>
              <header>
                <div className="search-group">
                    <input className="text-field" type='text' placeholder="Search"/>
                        <button className="search-button">
                            <img src="./icons/search.svg" alt='looking glass'/>
                        </button>
                </div>
                <LoginMember/>
                </header>
              
          </>
        )
}
}
export default Header;