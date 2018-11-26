import React, { Component } from 'react';
import './App.css';
import Warehouse from '../Main/Warehouse/Warehouse.js';
import ProductDetails from './Main/ProductDetails/ProductDetails.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Inventory from '../Main/Inventory/Inventory.js';
import ProductDetails from '../Main/Product-details/ProductDetails.js';
import SideNav from '../Top-side-bars/SideNav.js';
import Header from '../Top-side-bars/Header.js';


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
                <Route path={'/warehouses'} exact component={Warehouse}/>
                <Route path={'/inventory'} exact component={Inventory}/>
                <Route path={'/warehouse/:id'} component={Inventory}/>
                <Route path={'/inventory/:id'} component={ProductDetails}/>
                <Route path={'/'} render={() => <Redirect to='/inventory' />} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
