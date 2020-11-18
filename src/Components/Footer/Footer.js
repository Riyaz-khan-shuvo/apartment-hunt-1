import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <i class="fas fa-map-marker-alt"></i> H#340 (4th Floor), Road #24,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                            Phone: 018XXXXXXXX
                            E-mail: info@company.com
                        </div>
                        <div className="col-md-3">
                            <h5>Company</h5>
                            <a href="#">About</a><br />
                            <a href="#">Site Map</a><br />
                            <a href="#">Support Center</a><br />
                            <a href="#">Terms Conditions</a><br />
                            <a href="#">Submit Listing</a><br />
                        </div>
                        <div className="col-md-3">
                            <h5>Quick Links</h5>
                            <a href="#">Quick Links</a><br />
                            <a href="#">Rentals</a><br />
                            <a href="#">Sales</a><br />
                            <a href="#">Contact</a><br />
                            <a href="#">Terms Conditions</a><br />
                            <a href="#">Our blog</a><br />
                        </div>
                        <div className="col-md-3">
                            <h5>About Us</h5>
                            <p>
                                We are the top real estate
                                agency in Sydney, with agents
                                available to answer any
                                question 24/7.
                            </p>
                            <div className="contact">
                                <a href="#"><i class="fab fa-facebook-square"></i></a>
                                <a href="#"><i class="fab fa-instagram-square"></i></a>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;