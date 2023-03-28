import React, { useEffect, useState } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, CartesianGrid} from 'recharts';
import { getDataPerformance } from '../../Service/CallApiPerformance';
import './MyRadarChart.css';

export default function MyRadarChart() {
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

    const formattedData = dataPerf.data.map((item) => ({
        value: item.value,
        kind: dataPerf.kind[item.kind],
    }));
    return (
        <ResponsiveContainer width="100%" aspect={1}  style={{ margin: '50px' }} >
            <RadarChart cx="48%" cy="50%" outerRadius="40%" data={formattedData} >
                <PolarGrid radialLines={null}/>
                <PolarAngleAxis dataKey="kind" fontSize={15} tickSize={15}   />
                <Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6}  />
            </RadarChart>
        </ResponsiveContainer>
    );
}
