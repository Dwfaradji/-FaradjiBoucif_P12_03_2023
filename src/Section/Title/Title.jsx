import React, {useEffect, useState} from 'react';
import './Title.scss';
import {getUserData} from "../../Service/CallApi";

/**
 *  @param {number} userId - The ID of the user whose activity data should be retrieved.
 * */
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
