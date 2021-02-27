import React from 'react';
import Header from './Header';
import Slider2 from './Slider2';
import Cards from './Cards';
import Footer from './Footer';
import Product from './Product';


const Home = () => {
    return (
        <div>
            <Header />
            <Slider2 />
            {/* <Cards /> */}
            <Product />
            <Footer />
        </div>
    )
}

export default Home;
