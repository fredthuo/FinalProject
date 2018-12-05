import React, {Component} from 'react';
import {Row, Container, Col, Footer} from 'mdbreact';
import {Link} from 'react-router-dom';

import '../App.css';
class Contact extends Component {
    render() {
        return (
            <React.Fragment className="footer">
            <Footer color="unique-color-dark" className="page-footer font-small pt-0">
            <Container>
                <div >
                    <Container className="text-left">
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                {/* <h6 className="mb-0 white-text">Get connected with us on social networks!</h6> */}
                            </Col>
                            <Col md="6" lg="7" className="text-center text-md-right">
                                <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Premier Auto, MO</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>
                                <p>Premier Auto Leasing{<br/>}
                                701 Chambers Rd {<br/>}
                                Fergson, M0 63135</p>
                                <p>Operating Hours:{<br/>} 9:00 am - 5:00 pm</p>
                            </p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <Link to="/Inventory"><p><a href="#!">Sports Cars</a></p></Link>
                            <Link to="/Inventory"><p><a href="#!">Sedans</a></p></Link>
                            <Link to="/Inventory"><p><a href="#!">luxury Cars </a></p></Link>
                            <Link to="/Inventory"><p><a href="#!">All Cars</a></p></Link>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Affiliate</a></p>
                            <p><a href="#!">Shipping Rates</a></p>
                            <p><a href="#!">Help</a></p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> PremierAuto@email.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> PremierAuto </a>
                    </Container>
                </div>
                </Container>
            </Footer>
            </React.Fragment>
        );
    }
}



    
export default Contact;