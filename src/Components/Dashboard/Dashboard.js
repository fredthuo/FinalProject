import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Table from 'react';
import Chart from '../Chart/Charts';
import AddInventory from '../Inventory/AddInventory';
import Inventory from '../Inventory/Inventory';
import Customer from '../Customer/Customer';
import Products from '../Products/ProductList';

 class Dashboard extends Component {
    state = {
        cars:[],
        
    }
    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.name;
        this.setState(
            {
                [name]:value
            }
        )
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/cars')
       .then(res => {
           const cars = res.data;
           this.setState({
             table:  <table>
                        <td>{cars}</td>
                     </table>
           });
       })
    }
        
     render() {

        
         return (
            <React.Fragment>
            <div>
            </div>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Dashboard">
                                Dashboard <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/ProductList">
                                <span data-feather="shopping-cart" ></span>
                                Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Customer">
                                <span data-feather="users"></span>
                                Customers
                                </Link>
                            </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved reports</span>
                            <Link className="d-flex align-items-center text-muted" to="Header">
                                <span data-feather="plus-circle"></span>
                            </Link>
                            </h6>
                            <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Products">
                                <span data-feather="file-text"></span>
                                Current month
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Products">
                                <span data-feather="file-text"></span>
                                Last quarter
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Products">
                                <span data-feather="file-text"></span>
                                Year-end sale
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                {/* <button className="btn btn-sm btn-outline-secondary">Share</button>
                                <button className="btn btn-sm btn-outline-secondary">Export</button> */}
                            </div>
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button>
                            </div>
                        </div>
                        {<Chart/>}   
                        <button type="button" className="btn btn-outline-dark">
                            <Link to="/addInventory">Add to Inventory</Link>
                        </button>
                        <div>
                        {<Products/>}
                        </div>
                     </main>
                    </div>
                    </div>
            </div>
            </React.Fragment>
         );
        
     }
    }
 
 export default Dashboard;