import React, {Component} from 'react';
import Inventory from './Inventorypg';
import Cart from './cartpg';
import axios from 'axios';
class InventoryController extends Component{
    state={
        items:[],
        item:{
                year: '',
                make: '',
                model: '',
                color: ''
        },
        cart:[],
        totalPrice: 0
}

componentDidMount(){
    axios.get('http://localhost:8080/cars')
    .then(res => {
        const items = res.data;
        this.setState({items});
    })
}

addItem = (car) =>{
    let newStateCart = [...this.state.cart];

    let total = this.state.totalPrice;
    newStateCart.push(car);
    total += car.price;
    this.setState(
        {
            cart:newStateCart,
            totalPrice:total
        }
    )
}

checkOut = (item) =>{
    let newStateCart = [...this.state.cart];
    newStateCart.splice(item, 10);
    const name="sms";
    axios.post('http://localhost:8080/shoppingCart', name)
    .then(respose=>{
        console.log("Cart created")
    }).catch(error=>{
        console.log("Error")
    })
    this.setState({
        cart:newStateCart
    })
    
}
removeItems=(cart)=>{
    let newStateCart = [...this.state.cart];
    newStateCart.slice(0,25);
    this.setState({
        cart:newStateCart
    })
}
removeItem = (index) =>{
    let newStateCart = [...this.state.cart];
    console.log("Price",this.state.items[index]);
    newStateCart.splice(index, 1);
    this.setState(
        {
            cart:newStateCart
        }
    )
}


    render(){

        
        return(
            <React.Fragment>
            <div className="inv">
            
               < Inventory items={this.state.items} addItem={this.addItem}/>
            </div>
            <div className="cart">
                <Cart checkOut={this.checkOut} totalPrice={this.state.totalPrice} removeItems={this.removeItems} removeItem={this.removeItem} cart={this.state.cart}/>
            </div>
            </React.Fragment>
        )
    }
}
export default InventoryController;