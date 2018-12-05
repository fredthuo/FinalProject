import React from 'react';
import Logo from '../Header/Logo.jpg';
import car1 from '../Header/car1.jpg';

const Inventorypg=(props)=> {
  


    
        return(
            <React.Fragment>
             {props.items.map((car,index) =>
                <row>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-2 ">  
                        <img src={car1} alt="Cinque Terre" width="150" height="100"/>
                        {<br/>}
                        {car.cId}
                        {<br/>}                        
                        ${car.price}
                        {<br/>}
                        {car.year} {car.make} {car.model} 
                        {<br/>}
                        {car.transmission} {car.engine}
                        {<br/>}
                        {car.color}
                        {<br/>}
                        <button onClick={()=>props.addItem(car)}>Add to Cart</button>
                    </div>

                </row>
        )}
            </React.Fragment>
        )
    
}
export default Inventorypg;