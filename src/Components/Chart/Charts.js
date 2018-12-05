import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import table from 'react';
import axios from 'axios';

class Charts extends Component{
    state = {
        products:[],
        salePrice:[]
    }
    
      componentDidMount(){
          axios.get('http://localhost:8080/cars')
          .then(res => {
              const items =res.data;
              let type=[];
              let price=[];
              let salePrice=[];
            items.forEach(element => {
                type.push(element.make);
                price.push(element.price);
                salePrice.push(element.year);
            });
              this.setState({
              products : {
                labels:price, salePrice,                      
                datasets:[
                    {
                       label: 'Expenditure',
                       fill: false,
                       lineTension: 0.1,
                       backgroundColor: 'rgba(75,192,192,0.4)',
                       borderColor: 'rgba(75,192,192,1)',
                       borderCapStyle: 'butt',
                       borderDash: [],
                       borderDashOffset: 0.0,
                       borderJoinStyle: 'miter',
                       pointBorderColor: 'rgba(75,192,192,1)',
                       pointBackgroundColor: '#fff',
                       pointBorderWidth: 1,
                       pointHoverRadius: 5,
                       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                       pointHoverBorderColor: 'rgba(220,220,220,1)',
                       pointHoverBorderWidth: 2,
                       pointRadius: 1,
                       pointHitRadius: 10,
                       data: salePrice 
                        
                    },{
                        label: 'Income',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: price
                         
                     }
                    
                ]
            },
      },);
    })
}

     render(){
          
         return(
            <React.Fragment >
                <div className="table2" >
                    
                    <td>
              <Bar data={this.state.products}/> 
                    </td>
                    <td>
              <Line data={this.state.products}/> 
                        </td>
                        <td>
            <Pie data={this.state.products}/> 
                        </td>
            
              </div>


              
                  
            </React.Fragment>
         )
     }
 }



export default Charts;