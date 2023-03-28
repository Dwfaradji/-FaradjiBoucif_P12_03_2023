import React, {useEffect, useState} from "react";
import {PieChart, Pie, Cell, ResponsiveContainer, Label, Sector, Customized} from "recharts";
import {getUserData} from "../../Service/CallApiUser";
import {logDOM} from "@testing-library/react";

export default function MyCircleChart() {
    const [score, setScore] = useState(null);
    const percentage = score * 100; // Valeur en pourcentage de la position finale du cercle

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(12);
            setScore(data.todayScore);
        };
        fetchData();
    }, []);

    if (!score) {
        return <div>Loading...</div>;
    }

    const data = [{name: "Group A", value: percentage / 100}];
    const COLORS = ["#FF0000", "#FFFFFF"];

    const endAngle = percentage * 3.6 + 90; // Calcul de l'angle final en fonction de la valeur en pourcentage
    const renderCustomizedLabel = ({ cx, cy, midAngle }) => {
        return (
            <g>
                <circle cx={cx} cy={cy} r={70} fill="#FFFFFF" />
                <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    fontSize={32}
                    fill="#000000"
                > </text>
            </g>
        );
    };

    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <PieChart width={500} height={300}>
                    <Sector cx="50%" cy="50%" innerRadius={68} outerRadius={80} fill="#00000" />
                <Customized component={renderCustomizedLabel} />

                <Pie
                    data={data}
                    innerRadius={68}
                    outerRadius={80}
                    dataKey="value"
                    startAngle={90}
                    endAngle={endAngle}
                    style={{ zIndex: 2 }}
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
