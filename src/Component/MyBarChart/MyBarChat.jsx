import React, {useEffect, useState} from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer, Sector,
} from 'recharts';

import "./MyBartChat.css"
import {getDataActivity} from '../../Service/CallApiActivity';


export default function MyBarChart() {
    const [dataActivity, setDataActivity] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataActivity(12);
            setDataActivity([data]);
        };
        fetchData();
    }, []);

    if (!dataActivity) {
        return <div>Loading...</div>;
    }

    const dataInfos = dataActivity;
    const arrayDataSessions = dataInfos ? dataInfos.map((dataInfo) => dataInfo.data.sessions) : [];
    const data = arrayDataSessions[0];

    const formatDateLabel = (dateString) => {
        const date = new Date(dateString);
        const options = {day: 'numeric'};
        return date.toLocaleDateString('fr-FR', options);
    };

    const CustomTooltip = ({active, payload, label}) => {
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
                    tickFormatter={formatDateLabel}
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
