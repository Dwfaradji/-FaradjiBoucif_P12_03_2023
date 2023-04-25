import React, {useState} from 'react';
import NavBarH from '../Component/NavbarHor/NavBarH';
import NavBarVert from '../Component/NavBarVert/NavBarVert';
import Title from '../Section/Title/Title';
import Weight from '../Section/Weight/Weight';
import Time from '../Section/Time/Time';
import './Dashboard.scss';
import Performance from '../Section/Performance/Performance';
import Score from '../Section/Score/Score';
import Resume from '../Section/Resume/Resume';

const id = {
    karl: 12,
    cecilia: 18
}

const Dashboard = () => {
    const [selectedId, setSelectedId] = useState(id.karl || "test");
    const handleSelectChange = (event) => {
        const myNumber = parseInt(event.target.value);
        setSelectedId(myNumber);
    }
    return (
        <div>
            <nav>
                <NavBarH/>
                <NavBarVert/>
            </nav>
            <div className="container-principal">
                <div className="container-test">
                    <div className="title">
                        <Title userId={selectedId}/>
                    </div>
                    <div className="custom-select">
                        <label htmlFor="selected">Choisir un utilisateur: </label>
                        <select value={selectedId} onChange={handleSelectChange} id="selected">
                            <option value={id.karl}>Karl</option>
                            <option value={id.cecilia}>Cecilia</option>
                        </select>
                    </div>
                </div>

                <div className="container-graphic">
                    <div className="graphic-head">
                        <Weight userId={selectedId}/>
                    </div>
                    <div className="container-resume">
                        <Resume userId={selectedId}/>
                    </div>
                    <div className="graphic-group">
                        <Time userId={selectedId}/>
                        <Performance userId={selectedId}/>
                        <Score userId={selectedId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
