import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from './components/NavigationBar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavigationBar />
          <ShoppingList />
        </div>
      </Provider>

    );
  }
}

export default App;
