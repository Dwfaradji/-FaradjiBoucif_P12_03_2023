import React, {useEffect, useState} from 'react';
import './Title.scss';
import {getUserData} from "../../Service/CallApi";

const Title = ({userId}) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(userId);
            return data.infos.firstName
        };
        fetchData().then(res => setUserData(res));
    }, [userId]);
    if (!userData) {
        return <div>Loading...</div>;
    }
    return (
        <section className="container-title">
            <h1>Bonjour <span className="name">{userData}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
};

export default Title;
