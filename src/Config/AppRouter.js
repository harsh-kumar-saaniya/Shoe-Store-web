import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Components/Home.js';
import Header from '../Components/Header';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/" component={Header} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
