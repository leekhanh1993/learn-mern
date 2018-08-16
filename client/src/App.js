import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
      </div>
    );
  }
}

export default App;
