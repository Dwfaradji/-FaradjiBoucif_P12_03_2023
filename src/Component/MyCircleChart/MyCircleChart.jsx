import React from "react";
import {PieChart, Pie, Cell, ResponsiveContainer, Label, Sector, Customized} from "recharts";
import PropTypes from "prop-types";



/**
 * A custom Pie Chart component that displays a circle with percentage label.
 *
 * @component
 *
 * @param {Object} props - The props that this component receives.
 * @param {number} props.dataScore - The percentage value to display on the chart.
 *
 * @example
 *   return <MyCircleChart dataScore={75} />
 */

export default function MyCircleChart({dataScore}) {
    const percentage = dataScore; // Valeur en pourcentage de la position finale du cercle

    const data = [{name: "Group A", value: dataScore / 100}];
    const COLORS = ["#FF0000", "#FFFFFF"];
    const endAngle = dataScore * 3.6 + 90; // Calcul de l'angle final en fonction de la valeur en pourcentage

    /**
     * Custom component for the PieChart label
     *
     * @function
     * @param {Object} props - The props that this component receives.
     * @param {number} props.cx - The horizontal position of the label.
     * @param {number} props.cy - The vertical position of the label.
     */

    const renderCustomizedLabel = ({cx, cy}) => {
        return (
            <g>
                <circle cx={cx} cy={cy} r={70} fill="#FFFFFF"/>
                <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    fontSize={32}
                    fill="#000000"
                ></text>
            </g>
        );
    };

    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <PieChart width={500} height={300}>
                <Sector cx="50%" cy="50%" innerRadius={68} outerRadius={80} fill="#00000"/>
                <Customized component={renderCustomizedLabel}/>
                <Pie
                    data={data}
                    innerRadius={68}
                    outerRadius={80}
                    dataKey="value"
                    startAngle={90}
                    endAngle={endAngle}
                    style={{zIndex: 2}}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                    <Label position={"center"} fill="#00000" fontSize={30}>
                        {`${Math.round(percentage)}%`}
                    </Label>
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

MyCircleChart.propTypes = {
    /**
     * The percentage value to display on the chart.
     */
    dataScore: PropTypes.number.isRequired,
};
