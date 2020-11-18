import React from 'react';
import './Service.css'
import service1 from '../../Images/service-1.png'
import service2 from '../../Images/service-2.png'
import service3 from '../../Images/service-3.png'

const Service = () => {
    return (
        <div>
            <div className="services">
                <div className="container">
                    <center>
                    <div className="service-head">
                        <p>Service</p>
                        <h3>We're an agency tailored to all <br />
                    clients' needs that always delivers</h3>
                    </div>
                    </center>
                    <center>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={service1} alt="" />
                                <h5>Wide Range of Properties</h5>
                                <p>
                                    With a robust selection of popular properties on hand, as well as leading properties from experts.
                            </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={service2} alt="" />
                                <h5>Financing Made Easy</h5>
                                <p>
                                    Our stress-free finance department that can find financial solutions to save you money.
                            </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={service3} alt="" />
                                <h5>Trusted by Thousands</h5>
                                <p>
                                    10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                            </p>
                            </div>
                        </div>
                    </div>
                    </center>
                </div>

            </div>
        </div>
    );
};

export default Service;