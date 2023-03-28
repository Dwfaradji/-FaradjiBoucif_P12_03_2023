import React from 'react';
import MyCircleChart from "../../Component/MyCircleChart/MyCircleChart";
import "./Score.scss"

const Score = () => {

    return (
        <div className="container-score">
            <span>Score</span>
            <MyCircleChart/>
            <span className="infos">de votre objectif</span>
        </div>
    );
};

export default Score;