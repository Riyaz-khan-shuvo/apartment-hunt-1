import React, { useState } from 'react';
import './HomeDetails.css'
import { useParams } from 'react-router-dom';
import HomeDetailsData from '../../Data/HomeDetailsData';
import Header from '../Header/Header';

const HomeDetails = () => {




    const { homeDetailId } = useParams();
    const homeData = HomeDetailsData.slice(0, `${homeDetailId}`)

    const [homeDetail, setHomeDetail] = useState(HomeDetailsData);

    return (
        <div>
            <Header></Header>

            {/* banner area start */}
            <div className="banner-area">
                <div className="banner-overlay">
                    <center>
                    <div className="search-area">
                        <h1>Apartment</h1>
                    </div>
                    </center>
                </div>
            </div>
            {/* banner are ends */}
            {
                homeDetail.map(home => <Details home={home}></Details>)
            }
        </div>
    );
};


const Details = (props) => {
    const { name, img, img1, img2, img3, heading, price, details, priceDetails1, priceDetails2, priceDetails3, priceDetails4 , propertyDetail1 , propertyDetail2, propertyDetail3, propertyDetail4, propertyDetail5, propertyDetail6 } = props.home;
    return (
        <div>
            <div className="container">
                <div className="row text-justify all-home-detail">
                    <div className="col-md-8">
                        <div className="details">
                            <img src={img} alt="" />
                        </div>
                        <div className="row small-photo">
                            <div className="col-md-4">
                                <img src={img1} alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src={img2} alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className="row mt-5 text-left">
                            <div className="col-md-9">
                                <h3 > {heading} </h3>
                            </div>
                            <div className="col-md-3">
                                <h3>$ {price} </h3>
                            </div>
                        </div>
                        <p> {details} </p>
                        <div className="price-detail">
                            <h3>Price Details - </h3>
                            <p> {priceDetails1} </p>
                            <p> {priceDetails2} </p>
                            <p> {priceDetails3} </p>
                            <p> {priceDetails4} </p>
                        </div>
                        <div className="property-detail">
                            <h3>Property Details-</h3>
                            <p> {propertyDetail1} </p>
                            <p> {propertyDetail2} </p>
                            <p> {propertyDetail3} </p>
                            <p> {propertyDetail4} </p>
                            <p> {propertyDetail5} </p>
                            <p> {propertyDetail6} </p>
                        </div>
                        <p>
                            With CC camera
                        </p>
                    </div>
                    <div className="col-md-4 form-area">
                        <form action="">
                            <input type="text" name="text" id="t" placeholder="Full Name" /><br/>
                            <input type="number" name="number" id="n" placeholder="Phone Number"/><br/>
                            <input type="email" name="email" id="e" placeholder="Email Address" />
                            <textarea name="massage" id="" cols="30" rows="5" placeholder="Massage"></textarea>
                            <button className="view">Request Booking</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default HomeDetails;