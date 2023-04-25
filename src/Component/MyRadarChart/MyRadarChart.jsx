import React from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import './MyRadarChart.css';
import PropTypes from "prop-types";


/**
 * MyRadarChart is a component that displays data on a radar chart.
 * @param {Object} props - The component props.
 * @param {Array} props.dataPerf - The performance data to be displayed.
 * @returns {JSX.Element} - The MyRadarChart component.
 * */
export default function MyRadarChart({dataPerf}) {
    return (
        <ResponsiveContainer className="container-radar" width="100%" aspect={1.2} style={{margin: '50px'}}>
            <RadarChart cx="50%" cy="50%" outerRadius="40%" data={dataPerf}>
                <PolarGrid radialLines={null}/>
                <PolarAngleAxis dataKey="kind" fontSize={15} tickSize={15}/>
                <Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6}/>
            </RadarChart>
        </ResponsiveContainer>
    );
}

MyRadarChart.propTypes = {
    dataPerf: PropTypes.array.isRequired,
};