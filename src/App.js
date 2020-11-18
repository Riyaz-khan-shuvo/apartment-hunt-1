import React, { createContext, useState } from "react";
import "./App.css";
// import Apartment from './Components/Apartment/Apartment';
// import Banner from './Components/Banner/Banner';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header'
// import Service from './Components/Services/Service';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import HomeDetails from "./Components/HomeDetails/HomeDetails";
import Login from "./Components/Login/Login";
import NewAccount from "./Components/NewAccount/NewAccount";
import Home from "./Components/Home/Home";
import Addrent from "./Components/AddRent/AddRent";
import MyRent from "./Components/MyRent/MyRent";
import BookingList from "./Components/BookingList/BookingList";
export const userContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/apartment/:homeDetailId">
                        <HomeDetails></HomeDetails>
                    </Route>
                    <Route path="/addrent">
                        <Addrent></Addrent>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/createAccount">
                        <NewAccount></NewAccount>
                    </Route>
                    <Route path="/myrent">
                        <MyRent></MyRent>
                    </Route>
                    <Route path="/bookinglist">
                        <BookingList></BookingList>
                    </Route>

                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="*">
                        <PageNotFound></PageNotFound>
                    </Route>
                </Switch>
            </Router>
        </userContext.Provider>
    );
}

export default App;
