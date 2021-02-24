import React from 'react';
import './Slider.css';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import TimerIcon from '@material-ui/icons/Timer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const Slider2 = () => {
    return (
        <div className="slider">
            <div className="slider__image">
                {/* <img src="https://cms.sioux.de/fileadmin/user_upload/passform/schuhgroessenumrechung_header_1.jpg"/> */}
                <img src="https://i.pinimg.com/originals/b3/35/fb/b335fb19aee071b7e32809c4466e7d4f.jpg" />
            </div>
            <div className="Slider__fontFeature">
                <div className="Feature__name">
                    <LocalShippingIcon />
                    <h3>Free Shipping</h3>
                    <p> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." </p>
                </div>
                <div className="Feature__name">
                    <TimerIcon />
                    <h3>Support 24/7</h3>
                    <p> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." </p>
                </div>
                <div className="Feature__name">
                    <MonetizationOnIcon />
                    <h3>Money Return</h3>
                    <p> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." </p>
                </div>
            </div>
        </div>
    )
}

export default Slider2;
