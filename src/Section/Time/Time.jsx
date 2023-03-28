import React from 'react';
import "./Time.scss"
import MyLineChart from "../../Component/MyLineChart/MyLineChart";

const Time = () => {
    return (
        <div className="container-time">
            <p>Durée moyenne des sessions</p>
                <MyLineChart/>
        </div>
    );
};

export default Time;