import React, { Component } from 'react';
<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import Main from '../Main/Main'
=======
import {BroswerRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Warehouse from './Warehouse.js';
import Inventory from './Inventory.js';
import WarehouseDetails from './WarehouseDetails.js';
import InventoryItems from './InventoryItems.js';
>>>>>>> 84ddafc067f9cacddd3c328742cfbbcaa77a17eb

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Main />
=======
      <Router>
        <Switch>
          <Route path={'/warehouses'} exact component={Warehouse}/>
          <Route path={'/inventory'} exact component={Inventory}/>
          <Route path={'/warehouse/:id'} component={WarehouseDetails}/>
          <Route path={'/inventory/:id'} component={InventoryItems}/>
          <Route path={'/'} render={() => <Redirect to='/warehouses' />} />
        </Switch>
      </Router>
>>>>>>> 84ddafc067f9cacddd3c328742cfbbcaa77a17eb
      </div>
    );
  }
}

export default App;
