import React from 'react';
import "./Weight.scss"
import MyBarChat from "../../Component/MyBarChart/MyBarChat";

const Weight = () => {

    return (
        <div className="container-weight">
            <div className="title">
                Activité quotidienne
                <div className="legend">
                    <div className="item">
                        <div className="circle"></div>
                        <span> Poids (kg)</span>
                    </div>
                    <div className="item">
                        <div className="circle2"></div>
                        <span>Calories brûlées (kCal)</span>
                    </div>
                </div>
            </div>
            <MyBarChat/>
        </div>
    );
};

export default Weight;
