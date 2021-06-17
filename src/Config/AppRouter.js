import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Components/Home';
import Product from '../Components/Product';
import ProductItem from '../Components/ProductItem';
import PageNotFound from '../Components/PageNotFound';
import Header from '../Components/Header';
import NewProduct from '../Components/NewProduct';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <nav>
                    <Header />
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route exact path='/products' component={Product} /> */}
                    <Route exact path='/products' component={NewProduct} />
                    <Route path='/products/:id' component={ProductItem} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;
