import React from "react";
import "./Header.css";
import logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div class="menu sticky-top" id="my-div">
            <nav class="navbar navbar-expand-lg sticky-top my-navbar">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img
                            src={logo}
                            width="auto"
                            height="45"
                            class="d-inline-block align-top"
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <button
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        class="navbar-toggler"
                        data-target="#navbarNavDropdown"
                        data-toggle="collapse"
                        type="button"
                    >
                        <span class="navbar-toggler-icon">
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item act">
                                <Link
                                    class="nav-link"
                                    href="#"
                                    id="home"
                                    to="/home"
                                >
                                    Home <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="about" to="/home">
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class="nav-link"
                                    href="service"
                                    to="/addrent"
                                >
                                    Add Rent
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link
                                    class="nav-link"
                                    href="concerns"
                                    to="/bookinglist"
                                >
                                    Booking List
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link
                                    class="nav-link"
                                    href="event"
                                    to="/myrent"
                                >
                                    My Rent
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class="nav-link"
                                    href="contact"
                                    to="/contact"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link
                                    class="nav-link btn "
                                    href=""
                                    to="/login"
                                    id="login"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;
