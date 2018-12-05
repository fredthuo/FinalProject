import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Logo from '../Header/Logo.jpg';
import Inventory from '../Inventory/Inventory';

class Header extends Component {
    state ={
        email: '',
        password: ''
    }
    signInCHangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
            [name]:value
            }
        )
    }
    signInSubmitHandler = (event)=>{
        event.preventDefault();
        const user ={
            email:this.state.email,
            password:this.state.password
        }
        axios.get0('http://localhost:8080/signIn',user)
        .then(response=>{
            console.log("User logged In")

        }).catch(error=>{
            console.log("Error")
        })
    }
    render() {

        let Links = null;
        let signInField = null;
        if(this.props.user){
            signInField =(
                <li className="nav-item active">
                <Link className="nav-link" to="Header">Home <span className="sr-only">(current)</span></Link>
                </li>
            )
            Links =(
                <React.Fragment>
                    <li className="nav-item active">
                    <Link className="nav-link" to="Header">Home <span className="sr-only">(current)</span></Link>
                    </li>
                
                    

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </React.Fragment>
            );
        }else{
            // signInField = (
            //     // <form onSubmit={this.signInSubmitHandler} name="email"className="form-inline mt-2 mt-md-0">
            //     //     <input onChange={this.signInCHangeHandler} name="email" value={this.state.email} className="form-control mr-sm-2" type="Email" placeholder="email" />
            //     //     <input onChange={this.signInCHangeHandler} name="password" value={this.state.password} className="form-control mr-sm-2" type="password" placeholder="password" />
            //     //     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
            //     // </form>
            // );
            Links=(
                <React.Fragment>
                        <li className="nav-item active">
                            <Link className="nav-link active" to="/Inventory" >Home </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link active" to="/Dashboard" >Dashboard </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="SignUp" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SignUp
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                       
                </React.Fragment>
            );
    }
        return (
            
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/Home">Premier Auto</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    {Links}
                </ul>
                <div>
                    {signInField}
                </div>
                </div>
                {/* <Link className="navbar-brand" to="/Cart">Cart</Link> */}
                {signInField}
                
            </nav>
            </React.Fragment>

        );
    }
}
export default Header;