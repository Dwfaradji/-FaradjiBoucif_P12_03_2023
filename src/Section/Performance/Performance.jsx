import React, {useEffect, useState} from 'react';
import "./Performance.scss"
import MyRadarChart from "../../Component/MyRadarChart/MyRadarChart";
import {getDataPerformance} from "../../Service/CallApi";

const Performance = () => {
    const [dataPerf, setDataPerf] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataPerformance(12);
            setDataPerf(data);
        };
        fetchData();
    }, []);

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