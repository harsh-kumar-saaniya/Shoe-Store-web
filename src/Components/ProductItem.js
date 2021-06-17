import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../Assets/shoes.json';
import './ProductItems.css';

const ProductItem = () => {
    const { id } = useParams();
    console.log(id)
    const shoe = Shoes[id];

    return (
        <div className="latestItems">
            <div className="dataBox">
                <div className="currentProductName">{shoe.name}</div>
                <div className="currentProductimg"><img src={shoe.img}/></div>
                <div className="currentProductprice">Price: {shoe.price}</div>


            </div>
        </div>
    )
}

export default ProductItem;
