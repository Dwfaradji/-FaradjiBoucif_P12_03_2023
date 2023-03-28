import React, {useEffect, useState} from 'react';
import './Title.scss';

import {getUserData} from "../../Service/CallApiUser";

const Title = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(12);
            setUserData(data.userInfos);
        };
        fetchData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    const userName = userData.firstName;

    return (
        <section className="container-title">
            <h1>Bonjour <span className="name">{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
};

export default Title;
