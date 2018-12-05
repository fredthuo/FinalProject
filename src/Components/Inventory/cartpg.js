import React from 'react';
import Logo from '../Header/Logo.jpg';
const Cartpg=(props)=>{
return(
<React.Fragment>
  
             	<table id="cart" className="table table-striped">
    				<thead>
                        {console.log(props.cart)}
						<tr>
							<th>Product</th> 
                            <th></th>
							<th>Price</th>
                            
							
							<th></th>
						</tr>
					</thead>
					<tbody>
						{props.cart.map((car, index) => 
                        
						<tr>
							
							<td data-th="Price">{car.make} {car.model} {car.year}</td>
                            <td></td>
							<td data-th="Subtotal" className="text-cente">${car.price}</td>
                            
							<td class="actions" data-th="">
								<button onClick={()=>props.removeItem(index)} class="btn btn-danger btn-sm"><i class="fa fa-refresh"></i></button>
							</td>
						</tr>
                        )}
					</tbody>
					<tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong> </strong></td>
						</tr>
						<tr>
							<td colSpan=""></td>
                            <td colspan="1" class="hidden-xs">Total</td>
                            <td colspan="1" class="hidden-xs">${props.totalPrice}</td>
							
						</tr>
                        <tr>
                        <td><a href="#" class="btn btn-warning btn-sm"><i className="fa fa-angle-lef"></i> Continue Shopping</a></td>
						<td colSpan="2"><button onClick={()=>props.checkOut()} className="btn btn-success btn-sm">Checkout <i class="fa fa-angle-right"></i></button></td>


                        </tr>
					</tfoot>
				</table>
</React.Fragment>
);

}
export default Cartpg;