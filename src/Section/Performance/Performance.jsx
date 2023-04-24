import React, {useEffect, useState} from 'react';
import "./Performance.scss"
import MyRadarChart from "../../Component/MyRadarChart/MyRadarChart";
import {getDataPerformance} from "../../Service/CallApi";

const Performance = ({userId}) => {
    const [dataPerf, setDataPerf] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
         return await getDataPerformance(userId);
        };
        fetchData().then(res => setDataPerf(res));
    }, [userId]);

    if (!dataPerf) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container-performance">
            <MyRadarChart dataPerf={dataPerf}/>
        </div>
    );
};

export default Performance;