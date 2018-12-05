import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Logo from '../Header/Logo.jpg';
import car1 from '../Header/car1.jpg';
import car2 from '../Header/car2.jpg'
import {Carousel} from 'react-bootstrap';
import AboutUs from '../Home/AboutUs';
import {Link} from 'react-router-dom';


class Home extends Component {
    render () {
        return(
            <React.Fragment>
              <Link to="/Inventory" className="headers"><Carousel>
                   <Carousel.Item height={100}>
                        <img width={900} height={500} alt="900x500" src={Logo} />
                        <Carousel.Caption>
                        <h3>Premier Auto </h3>
                        <p>Dallas,Texas</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={car1} />
                        <Carousel.Caption>
                        <h3>Premier Auto </h3>
                        <p>Florissant MO</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={car2}/>
                        <Carousel.Caption>
                        <h3>Premier Auto</h3>
                        <p>Hazelwood,Missouri</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel></Link>
                {<AboutUs/>}
            </React.Fragment>
        )
    }
}
export default Home;