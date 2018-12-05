import React, {Component} from 'react';
import axios from 'axios';
import cust from '../Customer/Customer.css'
// import Table from 'react-bootstrap';
class Customer extends Component{
        state = {
            users:[]
        }   
        componentDidMount(){
            axios.get('http://localhost:8080/users')
            .then(res => {
                const users = res.data;
                this.setState({users});
            })
        }

        render(){
        return(
            <React.Fragment>
           <table className="customers">  
                <thead>
                    <tr>
                    <th>Customer </th>
                    <th>Email</th>
                    </tr>
                </thead>
                {this.state.users.map((user) =>  
                <tbody>
                    <tr>
                    <td>{user.firstName}{"  "}{user.lastName}</td>
                    <td>{user.email}</td>
                    </tr>
                </tbody>
            )}
            </table>
           </React.Fragment>
        )
    }
}
export default Customer;
