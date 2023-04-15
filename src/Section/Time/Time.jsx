import React, {useEffect, useState} from 'react';
import "./Time.scss"
import MyLineChart from "../../Component/MyLineChart/MyLineChart";
import {getDataSessions} from "../../Service/CallApi";

const Time = () => {
    const [dataSession, setDataSession] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataSessions(12);
            setDataSession(data);
        };
        fetchData();
    }, []);
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