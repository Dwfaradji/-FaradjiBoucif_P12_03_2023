import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import "./MyBartChat.css"
import PropTypes from 'prop-types';


/**
 * Renders a custom Bar Chart component.
 * @function
 * @param {Object} props - The props object containing data for the Bar Chart.
 * @param {Object[]} props.dataActivity - The activity data to display in the chart.
 */

export default function MyBarChart({dataActivity}) {
    if (!dataActivity) {
        return <div>Loading...</div>;
    }
    const data = dataActivity;
    /**
     * Custom tooltip component to display when hovering over chart data points.
     * @function
     * @param {Object} props - The props object containing tooltip properties.
     * @param {boolean} props.active - Whether or not the tooltip is active.
     * @param {Object[]} props.payload - The data to display in the tooltip.
     */
    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[1].value}${payload[1].name === 'kilogram' ? 'Kg' : ''}`}</p>
                    <p className="label">{`${payload[0].value}${payload[0].name === 'calories' ? 'Kcal' : ''}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
                barGap={8}
                barCategoryGap={54}
            >
                <CartesianGrid strokeDasharray="3 3" vertical="" horizontal="true"/>

                <XAxis
                    dataKey="day"
                    stroke="#9B9EAC"
                    tickMargin={10}
                    tickLine={{display: 'none'}}
                />

                <YAxis yAxisId="left" orientation="left" stroke="#9B9EAC" display="none"/>
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#9B9EAC"
                    tickMargin={20}
                    tickLine={{display: 'none'}}
                    axisLine={false}
                />

                <Tooltip wrapperStyle={{outline: "none"}} content={<CustomTooltip/>}/>
                <Bar yAxisId="left" dataKey="calories" fill="red" barSize={7} radius={[3, 3, 0, 0]}/>
                <Bar yAxisId="right" dataKey="kilogram" fill="black" barSize={7} radius={[3, 3, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
}

MyBarChart.propTypes = {
    dataActivity: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
            kilogram: PropTypes.number.isRequired,
        })
    ).isRequired,
};
