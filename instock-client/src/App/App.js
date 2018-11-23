import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Warehouse from './Warehouse.js';
import Inventory from '../Main/Inventory/Inventory.js';
import WarehouseDetails from './WarehouseDetails.js';
import InventoryItems from './InventoryItems.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path={'/warehouses'} exact component={Warehouse}/>
          <Route path={'/inventory'} exact component={Inventory}/>
          <Route path={'/warehouse/:id'} component={WarehouseDetails}/>
          <Route path={'/inventory/:id'} component={InventoryItems}/>
          <Route path={'/'} render={() => <Redirect to='/warehouses' />} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
