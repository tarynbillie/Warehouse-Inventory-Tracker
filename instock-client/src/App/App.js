import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Inventory from '../Main/Inventory/Inventory.js';
import ProductDetails from '../Main/Product-details/ProductDetails.js';
import SideNav from '../Top-side-bars/SideNav.js';
import Header from '../Top-side-bars/Header.js';
// import Warehouse from '../Main/Warehouse/Warehouse';
 
import Warehouses from '../Main/Warehouse/Warehouses';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <div className = 'right-body'>
            <Header />
            <main>
              <Switch>
                <Route exact path={'/warehouses'} component={Warehouses}/>
                <Route exact path={'/inventory'} component={Inventory}/>
                <Route exact path={'/warehouse/:id'} render={(props) => 
                <Inventory urlId={props.match.params.id}/>}/> 
                <Route exact path={'/inventory/:id'} component={ProductDetails}/>
                <Route exact path={'/'} render={() => <Redirect to='/warehouses' />} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
