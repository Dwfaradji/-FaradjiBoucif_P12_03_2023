import React from 'react';
import NavBarH from "../Component/NavbarHor/NavBarH";
import NavBarVert from "../Component/NavBarVert/NavBarVert";
import Title from "../Section/Title/Title";
import Weight from "../Section/Weight/Weight";
import Time from "../Section/Time/Time";
import "./Dashboard.scss"
import Performance from "../Section/Performance/Performance";
import Score from "../Section/Score/Score";
import Resume from "../Section/Resume/Resume";

const Dashboard = () => {
    return (
        <div>
            <nav>
                <NavBarH/>
                <NavBarVert/>
            </nav>
            <div className="container-principal">
                <div className="container-graphic">
                    <div className="title">
                        <Title/>
                    </div>
                    <Weight/>
                    <div className="graphic-group">
                        <Time/>
                        <Performance/>
                        <Score/>
                    </div>
                </div>
                <div className="container-resume">
                    <Resume/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;