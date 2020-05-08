import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import vision from './eye.png';

const Logo = () => {
    return (
        <div className="ma4 mt0 center">
            <Tilt
                className="Tilt br2 shadow-2"
                options={{ max: 25 }}
                style={{ height: 100, width: 100 }}
            >
                <div className="Tilt-inner">
                    <img className="tc" src={vision} alt="" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
