import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

import AddItem from './AddItem';
import ListItems from './ListItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          <nav>
            <Link to="">List Items</Link>
            <Link to="/addItem">Add Item</Link>
            <Route
              path="/addItem"
              children={
                ({match}) => {
                  if (!match) {
                    return <Link to="/addItem">Add item custom</Link>
                  } else {
                    return null;
                  }
                }
              }
            />
          </nav>
        </header>
        <section>
          <Route exact path="" component={ListItems} />
          <Route path="/addItem" component={AddItem} />
        </section>
      </div>
    );
  }
}

export default App;
