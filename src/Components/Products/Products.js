import React, {Component} from 'react';
import axios from 'axios';
import Logo from '../Header/Logo.jpg';

class Products extends Component {
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
                    <th>Product </th>
                    <th>Sale Price</th>
                    <th>Expenditure</th>
                    </tr>
                </thead>
                {this.state.items.map((car) =>
                <tbody>
                    <tr>
                        <td>{car.make}{" "}{car.model}</td>
                        <td>{car.price}</td>
                        <td>{car.year}</td>
                    </tr>
                    <tr>Profit: {car.price - car.year} </tr>
                </tbody>
                )}
            </table>

            
       
      
    </React.Fragment>
    )
}
}
export default Products;