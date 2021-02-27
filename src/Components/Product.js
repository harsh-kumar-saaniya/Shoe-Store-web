import React, { useEffect, useState } from 'react';
import './Cards.css';
import Shoes from './Shoes.json';

const Product = () => {
    return (
        <div className="Product">
            <div className="cards">
                <div className="cards__box">
                    <div><img src="https://i.ibb.co/3SfJTrp/featured1.png" alt="product image" /></div>
                    <div className="box__detail">
                        <div className="box__priceAndTitle">
                            <div>
                                Nike Jordan
                        </div>
                            <div>$70.78</div>
                        </div>
                        <button className="addtoChart">Add to Chart</button>
                    </div>
                </div>
            </div >

        </div>
    )
}

export default Product;

{/* {
    Object.keys(shoes).map(keyName => {
        const shoe = shoes[keyName]
        return (<div key={keyName}>
            <h2>{shoe.name}</h2>
            <h3>{shoe.price}</h3>
            <h3>{shoe.brand}</h3>
            <img src={shoe.img} />
        </div>)
    })
} */}