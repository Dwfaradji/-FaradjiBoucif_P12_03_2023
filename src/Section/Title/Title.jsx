import React, {useEffect, useState} from 'react';
import './Title.scss';
import {getUserData} from "../../Service/CallApi";

const Title = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(12);
            console.log(data)
            setUserData(data.infos.firstName);
        };
        fetchData();
    }, []);
    console.log(userData)
    if (!userData) {
        return <div>Loading...</div>;
    }
    const userName = userData;
    return (
        <section className="container-title">
            <h1>Bonjour <span className="name">{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
};

export default Title;
