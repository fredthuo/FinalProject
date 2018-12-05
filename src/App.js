import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Inventory from './Components/Inventory/Inventory';
import Charts from '../src/Components/Chart/Charts';
import Header from '../src/Components/Header/Header';
import Home from '../src/Components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment> 
        <Layout/>
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
