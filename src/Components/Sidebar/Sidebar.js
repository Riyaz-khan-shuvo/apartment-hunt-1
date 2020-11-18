import { faHome, faListAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/Logo1.png";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className="sidebar-wrapper">
            <Link to="/home">
                <img className="img-fluid " src={logo} alt="Apartment Hunt" />
            </Link>
            <ul>
                <li>
                    <Link
                        to="/bookinglist"
                        className={
                            location.pathname === "/bookinglist"
                                ? "active-link"
                                : "sidebar-link"
                        }
                    >
                        <FontAwesomeIcon icon={faListAlt} /> &nbsp;&nbsp;
                        Booking List
                    </Link>
                </li>
                <li>
                    <Link
                        to="/addrent"
                        className={
                            location.pathname === "/addrent"
                                ? "active-link"
                                : "sidebar-link"
                        }
                    >
                        <FontAwesomeIcon icon={faPlus} /> &nbsp;&nbsp; Add Rent
                        House
                    </Link>
                </li>
                <li>
                    <Link
                        to="/myrent"
                        className={
                            location.pathname === "/myrent"
                                ? "active-link"
                                : "sidebar-link"
                        }
                    >
                        <FontAwesomeIcon icon={faHome} /> &nbsp;&nbsp; My Rent
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
