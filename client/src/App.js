import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from './components/NavigationBar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux'
import store from './store'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavigationBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>

        </div>
      </Provider>

    );
  }
}

export default App;
