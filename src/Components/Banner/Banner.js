import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
        <center>
            <div className="banner-area ">
                <div className="banner-overlay">
                    <div className="search-area">
                        <h1>find your house rent</h1>
                        <input type="text" name="search" id="search-box" placeholder="Search....."/>
                        <button class="button">Find Now</button>
                    </div>
                </div>
            </div>
            </center>
        </div>
    );
};

export default Banner;