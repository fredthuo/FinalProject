import React, {Component} from 'react';
import axios from 'axios';
import inv from '../Inventory/AddInventory.css';
import {Link} from 'react-router-dom';



class AddInventory extends Component {
    state ={
        year: '',
        make: '',
        model: '',
        transmission: '',
        engine: '',
        color: '',
        price: '',
        email: '',
        image:'',
        saleprice:''
    }
    inventoryChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }
    inventorySubmitHandler = (event) =>{
        event.preventDefault();
        const car ={
            year:this.state.year,
            make:this.state.make,
            model:this.state.model,
            transmission:this.state.transmission,
            engine:this.state.engine,
            color:this.state.color,
            price:this.state.price,
            email:this.state.email,
            image:this.state.image,
            saleprice:this.state.saleprice
        }
        axios.post('http://localhost:8080/inventory', car)
        .then(respose=>{
            console.log("Inventory is added")
        }).catch(error=>{
            console.log("Error")
        })
    }
    render(){
        return (
            <React.Fragment>
            <h1 className='header'><strong>Add items to Inventory</strong></h1>
            <form onSubmit={this.inventorySubmitHandler} className='addToInventory'>
                <label>Price
                    {<br/>}
                    <input name="price" value={this.state.price} onChange={this.inventoryChangeHandler} type="text" />
                    {<br/>}
                </label>
                {<br/>}
                <label>Year
                    {<br/>}
                    <input name="year" value={this.state.year} onChange={this.inventoryChangeHandler} type="text" />
                    {<br/>}
                </label>
                {<br/>}
                <label>
                    Make:
                    {<br/>}
                    <input name="make" value={this.state.make} onChange={this.inventoryChangeHandler} type="text"  />
                </label>
                {<br/>}
                <label>
                    Model:
                    {<br/>}
                    <input name="model" value={this.state.model} onChange={this.inventoryChangeHandler} type="text"  />
                    {<br/>}
                </label>
                {<br/>}
                <label>
                    Transmission:
                    {<br/>}
                    <input name="transmission" value={this.state.transmission} onChange={this.inventoryChangeHandler} type="text"  />
                    {<br/>}
                </label>
                {<br/>}
                <label>
                    Engine:
                    {<br/>}
                    <input name="engine" value={this.state.engine} onChange={this.inventoryChangeHandler} type="text"  />
                    {<br/>}
                </label>
                {<br/>}
                <label>
                    Color:
                    {<br/>}
                    <input name="color" value={this.state.color} onChange={this.inventoryChangeHandler} type="text"  />
                    {<br/>}
                </label>
                {<br/>}
                <label>
                   Sale Price:
                    {<br/>}
                    <input name="saleprice" value={this.state.saleprice} onChange={this.inventoryChangeHandler} type="text"  />
                    {<br/>}
                </label>
                {<br/>}
                <label>
                    Admin Email:
                    {<br/>}
                    <input name="email" value={this.state.email} onChange={this.inventoryChangeHandler} type="text" />
                    {<br/>}
                </label>
                {<br/>}
               <input type="submit" value="Submit" />
            </form>
            </React.Fragment>
        );
    }
}
export default AddInventory;