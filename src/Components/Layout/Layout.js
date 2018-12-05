import React, {Component} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import {Route} from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import Header from '../Header/Header';
import AddInventory from '../Inventory/AddInventory';
import Inventory from '../Inventory/Inventory';
import Contact from '../Footer/Contact';
import Charts from '../Chart/Charts';
import Customer from '../Customer/Customer';
import Home from '../Home/Home';
import Inv from '../Inventory/InventoryController'
import Products from '../Products/Products';
import ProductList from '../Products/ProductList';

class Layout extends Component {
    
    render() {
        return (
            
            <React.Fragment>
                <Header />
                <Route exact path="/ProductList" component={ProductList} />
                <Route exact path="/" component={Header} />
                <Route exact path="/" component={Inv} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/AddInventory" component={AddInventory} />
                <Route exact path="Charts" component={Charts} />
                <Route exact path="/Customer" component={Customer} />
                <Route exact path="/Inventory" component={Inv} />
                <Route exact path="/Products" component={Products} />

                <Contact />
            </React.Fragment>
            
        );
    }
}
export default Layout;