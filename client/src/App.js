import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from './components/NavigationBar';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
