import React, { useEffect, useState } from 'react';
import './Cards.css';
import shoes from '../Assets/shoes.json';

const Product = () => {
    console.log("getting shoe data from product", shoes)
    return (
        <div className="Product">
            <div className="cards">
                {Object.keys(shoes).map(keyName => {
                    const shoeObj = shoes[keyName]
                    return (
                        <div className="cards__box" key={keyName}>
                            <div><img src={shoeObj.img} className="card__img" alt="product image" /></div>
                            <div className="box__detail">
                                <div className="box__priceAndTitle">
                                    <div>
                                        {shoeObj.name}
                                    </div>
                                    <div>{shoeObj.price}</div>
                                </div>
                                <button className="addtoChart">Add to Chart</button>
                            </div>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default Product;
