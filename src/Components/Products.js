import React from 'react';
import Card from './Card';
import Navbar from './Navbar';

const Products = () => {
    return (
        <>
            <Navbar />
            <div className="product">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Products;
