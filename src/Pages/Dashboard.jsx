import React from 'react';
import NavBarH from "../Component/NavbarHor/NavBarH";
import NavBarVert from "../Component/NavBarVert/NavBarVert";
import Title from "../Component/Title/Title";

const Dashboard = () => {
    return (
        <div>
            <nav>
                <NavBarH/>
                <NavBarVert/>
            </nav>
            <Title/>
        </div>
    );
};

export default Dashboard;