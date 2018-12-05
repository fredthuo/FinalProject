import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Inventory from '../Inventory/Inventorypg'
class AboutUs extends Component {
render (){
    return (
        <div class="container">
         <div class="row">
          <div class="col-md-4">
            <h2>About Us</h2>
            <p>Premier Auto was founded in May 2018 by Fredrick Muikia,began as a single salvage yard in Florissant.{<br/>}Now headquatered in Hazlewood,Missouri.Premier Auto is now a global leader in online resale and remarketing of vehicles. Premier Auto is an innovative technology that is currently operating more than 200 locations in 11 Countries and has over 125,000 vehicles.  </p>
            <p><Link to="./Inventory"><a class="btn btn-standard" to="./Inventory" role="button">View products &raquo;</a></Link></p>
          </div>
        </div>
        </div>
    )
}
}
export default AboutUs;