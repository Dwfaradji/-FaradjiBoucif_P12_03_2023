import React, {useEffect, useState} from 'react';
import "./Resume.scss"
import MyKeyData from "../../Component/MyKeyData/MyKeyData";

import iconKcal from "../../Assets/Image/iconKcal.svg";
import iconProteines from "../../Assets/Image/iconProteine.svg";
import iconGlucides from "../../Assets/Image/iconGlucides.svg";
import iconLipides from "../../Assets/Image/iconLipides.svg";
import {getUserData} from "../../Service/CallApi";

const Resume = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(12);
            setData(data.dataKey);
        };
        fetchData();
    }, []);
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div className="resume">
            <MyKeyData icon={iconKcal} title={"Calories"} value={data.calorieCount + "Kcal"} color={"#FF0000"}/>
            <MyKeyData icon={iconProteines} title={"Proteines"} value={data.proteinCount + "g"} color={"#4AB8FF"}/>
            <MyKeyData icon={iconGlucides} title={"Glucides"} value={data.carbohydrateCount + "g"} color={"#F9CE23"}/>
            <MyKeyData icon={iconLipides} title={"Lipides"} value={data.lipidCount + "g"} color={"#FD5181"}/>
        </div>
    );
};

export default Resume;