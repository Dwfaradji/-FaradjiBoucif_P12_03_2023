import React, {useEffect, useState} from 'react';
import "./Weight.scss"
import MyBarChat from "../../Component/MyBarChart/MyBarChat";
import {getDataActivity} from "../../Service/CallApi";

const Weight = ({userId}) => {
    const [dataActivity, setDataActivity] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            return await getDataActivity(userId)
        };
        fetchData().then(res => setDataActivity(res));
    }, [userId]);
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
            <MyBarChat dataActivity={dataActivity}/>
        </div>
    );
};

export default Weight;
