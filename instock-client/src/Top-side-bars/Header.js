import React, { Component } from 'react';
<<<<<<< HEAD
import LoginMember from './LoginMember'; 
=======
// import LoginMember from './LoginMember'; 
>>>>>>> 904fa985dcfecf98c1542d4c947fa6d5f0468804
import './css/appx.css';

class Header extends Component {

    render() {
        return (
          <>
              <header>
                <div className="search-group">
                    <input className="text-field" type='text' placeholder="Search"/>
                        <button className="search-button">
                            <img src="/Assets/Icons/Search.svg" alt='looking glass'/>
                        </button>
                </div>
                {/* <LoginMember/> */}
                </header>
              
          </>
        )
}
}
export default Header;