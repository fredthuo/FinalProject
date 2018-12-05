import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Logo from '../Header/Logo.jpg';

class ProductList extends Component {
    constructor(props) {
        super(props);
            this.state={
                items:[]
        }
    }

   componentDidMount(){
       axios.get('http://localhost:8080/cars')
       .then(res => {
           const items = res.data;
           this.setState({items});
       })
   }

    
    render ()   {
    return (
      
    <React.Fragment >                   
        <table className="customers">  
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Product </th>
                    <th>Sale Price</th>
                    <th>Properties</th>
                    </tr>
                </thead>
                {this.state.items.map((car) =>
                <tbody>
                    <tr>
                        <td>{car.cId}</td>
                        <td><Link className="nav-link" to="/Inventory"> {car.year}{" "}{car.make}{" "}{car.model}</Link></td>
                        <td>{car.price}</td>
                        <td>{car.transmission}{" "}{car.engine}</td>
                    </tr>
                </tbody>
                )}
            </table>

            
       
      
    </React.Fragment>
    )
}
}
export default ProductList;