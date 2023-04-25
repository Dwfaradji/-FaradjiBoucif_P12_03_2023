import React from 'react';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Label} from 'recharts';
import "./MylinChart.css"
import PropTypes from "prop-types";

/**
 * MyLineChart is a component that displays a line chart.
 * @param {object} props - The component props.
 * @param {array} props.dataSession - The data to be displayed on the line chart.
 * @returns {JSX.Element} - The MyLineChart component.
 */

export default function MyLineChart({dataSession}) {
    if (!dataSession) {
        return <div>Loading...</div>;
    }
    const data = dataSession

    /**
     * CustomTooltip is a customized component to display the tooltip.
     * @param {object} props - The component props.
     * @param {boolean} props.active - Indicates if the tooltip is active.
     * @param {array} props.payload - The data to be displayed in the tooltip.
     * @returns {string|null} - The tooltip content or null if the tooltip is not active.
     */
    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return [`${payload[0].value} ${payload[0].name === 'sessionLength' ? 'min' : ''} `];
        }
        return null;
    };

    return (
        <div>
            <ResponsiveContainer className="container-line" width="100%" aspect={2}>
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Label
                        value="Session Length"
                        position="top"
                        style={{textAnchor: "middle", fill: "#FFFFFF", fontSize: "16px"}}
                    />
                    <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2}/>
                    <XAxis
                        dataKey="day"
                        stroke="#9B9EAC"
                        tickMargin={10}
                        tickLine={{display: 'none'}}
                        axisLine={false}
                    />

                    <Tooltip wrapperStyle={{backgroundColor: 'white', border: "5px solid white", outline: "none"}}
                             content={<CustomTooltip/>}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

MyLineChart.propTypes = {
    dataSession: PropTypes.array.isRequired,
};