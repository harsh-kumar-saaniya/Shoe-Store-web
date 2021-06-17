import React from 'react'
import { Link } from 'react-router-dom';
import shoes from '../Assets/shoes.json';
import './NewProduct.css'

const NewProduct = () => {
    return (
        <div className="latestProduct">
            <h2 className="latestProduct__title">Latest Product</h2>
            <div className="latestProduct__products">
                {Object.keys(shoes).map((keyName) => {
                    const shoeObj = shoes[keyName];
                    return (
                        <div className="latestProduct__product" key={keyName}>
                            <img src={shoeObj.img} alt="product image" />
                            <div className="product__info">
                                <p className="info__name"> {shoeObj.name} </p>
                                <p className="info__price">Price: {shoeObj.price}</p>
                            </div>

                            <button className="addtoChart">Add to Cart</button>
                            {/* <Link to={`/launchIndex/${keyName}`} className="info_button">
                                View
                </Link> */}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default NewProduct;
