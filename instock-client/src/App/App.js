import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
=======
>>>>>>> 37899b93baed175a6c17967bfea811309af9feca
import './App.css';
import ProductDetails from './Main/ProductDetails/ProductDetails.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
