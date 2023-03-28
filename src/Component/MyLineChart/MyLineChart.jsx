import React, {useEffect, useState} from 'react';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import "./MylinChart.css"
import {getDataSessions} from "../../Service/CallApiSessions";


export default function MyLineChart() {

    const [dataSession, setDataSession] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataSessions(12);
            setDataSession([data]);
        };
        fetchData();
    }, []);

    if (!dataSession) {
        return <div>Loading...</div>;
    }

    const data = dataSession
    const arrayDataSessions = data ? data.map((dataInfo) => dataInfo.data.sessions) : [];
    const data3 = arrayDataSessions[0];
    if (!data3) {
        return <div>Loading...</div>;
    }
    const formatDay={1:"L",2:"M",3:"M", 4:"J",5:"V",6:"S",7:"D"}
    const formattedData = data3.map((item) => ({
        sessionLength: item.sessionLength,
        day: formatDay[item.day],
    }));



    const CustomTooltip2 = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return [`${payload[0].value} ${payload[0].name === 'sessionLength' ? 'min' : ''} `];
        }
        return null;
    };

    return (
        <ResponsiveContainer className="container-line" width="100%" height={100} m>
            <LineChart width={500}
                       height={300}
                       data={formattedData}
                       margin={{
                           top: 20,
                           right: 30,
                           left: 20,
                           bottom: 5,
                       }}
            >
                <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2}/>
                <XAxis
                    dataKey="day"
                    stroke="#9B9EAC"
                    tickMargin={10}
                    tickLine={{display: 'none'}}
                    axisLine={false}
                />

                <Tooltip wrapperStyle={{backgroundColor: 'white', border: "5px solid white", outline: "none"}}
                         content={<CustomTooltip2/>}  />
            </LineChart>
        </ResponsiveContainer>

    );
}
// content={<CustomTooltip />}