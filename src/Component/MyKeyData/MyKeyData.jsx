import React from 'react';
import "./MyKeyData.scss"

const MyKeyData = ({icon, color,title,value}) => {
    return (
        <div className="content">
            <div className="icon-content" style={{ backgroundColor: `${color}80`, opacity: 1 }}>

                <img src={icon} alt=""/>
            </div>
            <div className="value">
                <div> {value}</div>
                <div> {title}</div>

            </div>
        </div>
    );
};

export default MyKeyData;