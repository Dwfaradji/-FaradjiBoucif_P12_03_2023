import React, {useEffect, useState} from 'react';
import MyCircleChart from "../../Component/MyCircleChart/MyCircleChart";
import "./Score.scss"
import {getUserData} from "../../Service/CallApi";

/**
 *  @param {number} userId - The ID of the user whose activity data should be retrieved.
 * */
const Score = ({userId}) => {
    const [score, setScore] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(userId);
            console.log(data)
            return data.score.todayScore
        };
        fetchData().then(res => setScore(res));
    }, [userId]);
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