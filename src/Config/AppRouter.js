import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Components/Home.js';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar.js';
import Products from '../Components/Products';
import About from '../Components/About';
import Abc from '../Components/Abc';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Navbar} />
                {/* <Route exact path="/" component={Header} /> */}
                <Route exact path="/Products" component={Products} />
                <Route exact path="/About" component={About} />
                <Route exact path="/abc" component={Abc} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
