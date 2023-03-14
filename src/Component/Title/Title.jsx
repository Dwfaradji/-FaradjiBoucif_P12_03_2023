import React, {useState, useEffect} from 'react';
import './Title.scss';
import DataApi from '../../Api/DataApi';

const Title = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const myData = await DataApi();
            setUserData(myData);
        }

        fetchData();
    }, []);

    const userName = userData.length > 0 ? userData[0].data.userInfos.firstName : '';
    console.log(userName)

    return (
        <div className="container-title">
            <h1>Bonjour <span className="name">{userName}</span></h1>
        </div>
    );
};

export default Title;
