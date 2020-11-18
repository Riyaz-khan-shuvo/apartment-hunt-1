import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./MyRent.css";

const fakeMyRentList = [
    { id: 1, name: "Washington", price: 295 },
    { id: 2, name: "Washington", price: 295 },
    { id: 3, name: "Washington", price: 295 },
    { id: 4, name: "Washington", price: 295 },
];

const MyRent = () => {
    const [fakeMyRent, setFakeMyRent] = useState(fakeMyRentList);
    return (
        <div className="row">
            <div className="col-xl-2  col-md-3 col-sm-12 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-xl-10  col-md-9 col-sm-12 col-12">
                <div className="d-flex justify-content-between">
                    <h4 className="mt-4 py-3 ml-4">My Rent List</h4>
                    <h6 className="mt-5  mx-5 py-3">Sufi Ahmed</h6>
                </div>
                <div className="table-wrapper">
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>House Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeMyRent.map((item) => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className=" details-btn">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;