import React, {useEffect, useState} from 'react';
import "./Time.scss"
import MyLineChart from "../../Component/MyLineChart/MyLineChart";
import {getDataSessions} from "../../Service/CallApi";

const Time = ({userId}) => {
    const [dataSession, setDataSession] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            return await getDataSessions(userId);
        };
        fetchData().then(res => setDataSession(res) );
    }, [userId]);
    if (!dataSession) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-time">
            <p>Durée moyenne des sessions</p>
            <MyLineChart dataSession={dataSession}/>
        </div>
    );
};

export default Time;