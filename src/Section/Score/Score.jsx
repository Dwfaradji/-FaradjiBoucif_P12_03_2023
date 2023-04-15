import React, {useEffect, useState} from 'react';
import MyCircleChart from "../../Component/MyCircleChart/MyCircleChart";
import "./Score.scss"
import {getUserData} from "../../Service/CallApi";

const Score = () => {
    const [score, setScore] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(12);
            setScore(data.score.todayScore);
        };
        fetchData();
    }, []);
    if (!score) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container-score">
            <span>Score</span>
            <MyCircleChart dataScore={score}/>
            <span className="infos">de votre objectif</span>
        </div>
    );
};

export default Score;