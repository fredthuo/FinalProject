import React, {Component} from 'react';
import axios from 'axios';
import Logo from '../Header/Logo.jpg';
import Home from '../Home/Home'
import '../App.css'; 
import AboutUs from '../Home/AboutUs';
import car1 from '../Header/car1.jpg';

class Inventory extends Component {
    constructor(props) {
        super(props);
            this.state={
                items:[],
                item:'',
                cart:[],
                totalPrice: 0,
        }
    }

    
    
   addItem = (car) =>{
       let newStateCart = [...this.state.cart];
       console.log(car);
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
   
   handleChange = (event) =>{
       const name = event.target.name;
       const value = event.target.value;
       this.setState(
           {
               [name]: value
           }
       )
   }

   componentDidMount(){
       axios.get('http://localhost:8080/cars')
       .then(res => {
           const items = res.data;
           this.setState({items});
       })
   }
   inventorySubmitHandler = (event) =>{
    event.preventDefault();
    const cart = this.state.cart;
    axios.post('http://localhost:8080/shoppingCart')
    .then(respose=>{
        console.log("Cart is added")
    }).catch(error=>{
        console.log("Error")
    })

    // checkOut = (event) =>{
    //     event.preventDefault();
    //     const cart = this.state.cart;

    // }
}

    
    render ()   {
        // <Cart cart={this.state.cart}/>
    return (
      
    <React.Fragment>
    <React.Fragment >   
        <button>View Cart</button>
        {this.state.items.map((car) =>
                <row>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-2 ">  
                        <img src={car.image} alt="Cinque Terre" width="150" height="100"/> 
                        {<br/>}
                        ${car.cId}
                        {<br/>}
                        ${car.price}
                        {<br/>}
                        {car.year} {car.make} {car.model} 
                        {<br/>}
                        {car.transmission} {car.engine}
                        {<br/>}
                        {car.color}
                        {<br/>}
                        <button onClick={()=>this.addItem(car)}>Add to Cart</button>
                    </div>

                </row>
        )}
      
        {<br/>}
        </React.Fragment>

            {this.state.cart.map((car, index) =>
            	<table id="cart" class="table table-hover table-condensed">
    				<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th  class="text-center">Subtotal</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
                        <td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs"><img src={car1} alt="Cinque Terre" width="100" height="100"/></div>
									<div class="col-sm-10">
										<h4 class="nomargin">Product 1</h4>
										<p>{car.make} {car.model} {car.year} {car.transmission} {car.engine} {car.color} ${car.price}</p>
									</div>
								</div>
							</td>
							<td data-th="Price">${car.price}</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value="1"/>
							</td>
							<td data-th="Subtotal" class="text-center">${car.price}</td>
							<td class="actions" data-th="">
								<button value={this.inventorySubmitHandler} class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
								<button value={this.inventorySubmitHandler} class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
							</td>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs"><img src={Logo} alt="Cinque Terre" width="100" height="100"/></div>
									<div class="col-sm-10">
										<h4 class="nomargin">Product 1</h4>
										<p>{car.make} {car.model} {car.year} {car.transmission} {car.engine} {car.color} ${car.price}</p>
									</div>
								</div>
							</td>
							<td data-th="Price">${car.price}</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value="1"/>
							</td>
							<td data-th="Subtotal" class="text-center">${car.price}</td>
							<td class="actions" data-th="">
								<button value={this.inventorySubmitHandler} class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
								<button value={this.inventorySubmitHandler} class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong> </strong></td>
						</tr>
                        <button onClick={()=>this.removeItem(index)}>Remove from Cart</button>

						<tr>
							<td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colspan="2" class="hidden-xs"></td>
							<td><button onClick={()=>this.checkOut(index)}>Remove from Cart</button></td>
						</tr>
					</tfoot>
				</table>
                )}


            ${this.state.totalPrice}
                   

            

        </React.Fragment>
    
        
    ); 
}


}

export default   Inventory;