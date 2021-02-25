import React, { useEffect, useState } from 'react';
import './Cards.css';

const Cards = () => {

    useEffect(() => {
        const getSheakerData = async () => {
            fetch("https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=Shoe")
                .then((response) => response.json())
                .then((data) => {
                    console.log('sneaker data==========>>>>', data.results[0])
                    setSneakerData(data.results)
                })
        };
        getSheakerData();
        console.log('useEffect is working properly');
    }, []);

    const [sneakerData, setSneakerData] = useState('');
    console.log('gettting data from local state', sneakerData)
    return (
        <div className="cards">
            <div className="cards__box">
                <div><img src="https://i.ibb.co/3SfJTrp/featured1.png" alt="product image" /></div>
                <div className="box__detail">
                    <div className="box__priceAndTitle">
                        <div>Nike Jordan</div>
                        <div>$40.4587</div>
                    </div>
                    <button className="addtoChart">Add to Chart</button>
                </div>
            </div> 
        </div >
    )
}

export default Cards;
